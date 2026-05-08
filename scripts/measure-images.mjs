import { chromium } from "playwright";

const BASE = "http://localhost:5173";

const ROUTES = [
  "/",
  "/services",
  "/about",
  "/carpet",
  "/vinyl",
  "/lvt",
  "/laminate",
  "/mattress-bed",
  "/carpet/cormar-inglewood-saxony",
  "/carpet/cormar-primo-texture",
  "/carpet/furlong-bliss-saxony",
  "/carpet/abingdon-stain-free-captivation",
  "/carpet/lewis-abbott-flat-weaves-gatsby",
  "/vinyl/furlong-essential-ii",
  "/vinyl/abingdon-endurance",
  "/lvt/invictus-maximus-click",
  "/lvt/artisan-click-abingdon",
  "/leminate/urban-8mm",
  "/leminate/river-water-resistant-8mm",
  "/leminate/elite-xl-10mm",
  "/mattress-bed/bed",
  "/mattress-bed/mattress",
  "/mattress-bed/frame",
  "/mattress-bed/headboards",
];

const IMG_EXT = /\.(png|jpe?g|webp|avif|gif|svg)(\?|$)/i;

const fmt = (b) => {
  if (b > 1024 * 1024) return (b / 1024 / 1024).toFixed(2) + " MB";
  if (b > 1024) return (b / 1024).toFixed(0) + " KB";
  return b + " B";
};

const browser = await chromium.launch();
const results = [];

for (const route of ROUTES) {
  const ctx = await browser.newContext({
    viewport: { width: 1366, height: 800 },
  });
  const page = await ctx.newPage();
  const imgs = [];

  page.on("response", async (resp) => {
    const url = resp.url();
    const ct = resp.headers()["content-type"] || "";
    const isImg = IMG_EXT.test(url) || ct.startsWith("image/");
    if (!isImg) return;
    try {
      const buf = await resp.body();
      imgs.push({ url, size: buf.length, ct });
    } catch {
      // ignore body errors (cancelled, redirects)
    }
  });

  try {
    await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 30000 });
    // small extra wait for lazy images that come in after networkidle
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
  } catch (e) {
    console.error(`FAIL ${route}: ${e.message}`);
  }

  const total = imgs.reduce((s, i) => s + i.size, 0);
  results.push({ route, count: imgs.length, total, imgs });
  await ctx.close();
}

await browser.close();

results.sort((a, b) => b.total - a.total);

console.log("\n=== Image transfer per page (sorted by total) ===\n");
console.log("TOTAL".padEnd(10), "COUNT".padEnd(7), "ROUTE");
console.log("-".repeat(80));
for (const r of results) {
  console.log(fmt(r.total).padEnd(10), String(r.count).padEnd(7), r.route);
}

console.log("\n=== Top 10 largest single images across all pages ===\n");
const all = results.flatMap((r) => r.imgs.map((i) => ({ ...i, route: r.route })));
all.sort((a, b) => b.size - a.size);
for (const i of all.slice(0, 15)) {
  const u = new URL(i.url);
  console.log(fmt(i.size).padEnd(10), i.route.padEnd(45), u.pathname);
}
