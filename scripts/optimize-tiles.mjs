import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const ROOT = "public/tiles";
const MAX_WIDTH = 1920;
const AVIF_QUALITY = 50;
const WEBP_QUALITY = 78;
const FALLBACK_QUALITY = 85;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const fmt = (b) =>
  b > 1024 * 1024 ? (b / 1048576).toFixed(2) + " MB" : (b / 1024).toFixed(0) + " KB";

const targets = [];
for await (const f of walk(ROOT)) {
  const ext = extname(f).toLowerCase();
  if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
    targets.push(f);
  }
}

console.log(`Found ${targets.length} images to process in ${ROOT}/`);
let done = 0;
let beforeTotal = 0;
let afterTotal = 0;
const failures = [];

const CONCURRENCY = 4;
async function processOne(file) {
  try {
    const before = (await stat(file)).size;
    beforeTotal += before;

    const ext = extname(file).toLowerCase();
    const stem = file.slice(0, -ext.length);
    const avifPath = stem + ".avif";
    const webpPath = stem + ".webp";

    const input = sharp(file, { failOn: "none" });
    const meta = await input.metadata();
    const targetWidth =
      meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;

    // Generate AVIF + WebP siblings (only if not already present at target size)
    await sharp(file, { failOn: "none" })
      .resize({ width: targetWidth, withoutEnlargement: true })
      .avif({ quality: AVIF_QUALITY, effort: 4 })
      .toFile(avifPath);

    await sharp(file, { failOn: "none" })
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(webpPath);

    // Replace original with resized + recompressed version
    const tmpPath = file + ".tmp";
    let pipeline = sharp(file, { failOn: "none" }).resize({
      width: targetWidth,
      withoutEnlargement: true,
    });
    if (ext === ".png") {
      pipeline = pipeline.png({ quality: FALLBACK_QUALITY, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: FALLBACK_QUALITY, mozjpeg: true });
    }
    await pipeline.toFile(tmpPath);
    const { renameSync } = await import("node:fs");
    renameSync(tmpPath, file);

    const after = (await stat(file)).size;
    const avifSize = (await stat(avifPath)).size;
    const webpSize = (await stat(webpPath)).size;
    afterTotal += after + avifSize + webpSize;

    done++;
    if (done % 25 === 0 || done === targets.length) {
      console.log(
        `[${done}/${targets.length}] ${basename(file)}: ${fmt(before)} → orig ${fmt(after)} | webp ${fmt(webpSize)} | avif ${fmt(avifSize)}`,
      );
    }
  } catch (e) {
    failures.push({ file, err: e.message });
    console.error(`FAIL ${file}: ${e.message}`);
  }
}

const queue = [...targets];
const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const f = queue.shift();
    if (f) await processOne(f);
  }
});
await Promise.all(workers);

console.log("\n=== Summary ===");
console.log(`Processed: ${done}/${targets.length}`);
console.log(`Failures:  ${failures.length}`);
console.log(`Before (originals only):       ${fmt(beforeTotal)}`);
console.log(`After (orig + avif + webp):    ${fmt(afterTotal)}`);
console.log(`Saved:                          ${fmt(beforeTotal - afterTotal)} (${((1 - afterTotal / beforeTotal) * 100).toFixed(1)}% smaller)`);
if (failures.length) {
  console.log("\nFailures:");
  failures.forEach((f) => console.log(`  ${f.file}: ${f.err}`));
}
