import { chromium } from "playwright";

const BASE = process.env.BASE_URL || "http://localhost:5173";

const ROUTES = [
  "/",
  "/services",
  "/about",
  "/carpet",
  "/carpet/cormar-inglewood-saxony",
  "/carpet/cormar-primo-texture",
  "/carpet/cormar-sensation",
  "/carpet/furlong-bliss-saxony",
  "/carpet/furlong-trident-twist",
  "/carpet/furlong-fairway",
  "/carpet/furlong-elegance",
  "/carpet/abingdon-stain-free-captivation",
  "/carpet/abingdon-stain-free-cares",
  "/carpet/abingdon-love-story-soft-whisper",
  "/carpet/associated-weavers-yukon",
  "/carpet/associated-weavers-magnificus",
  "/carpet/lewis-abbott-flat-weaves-herringbone",
  "/carpet/lewis-abbott-flat-weaves-gatsby",
  "/vinyl",
  "/vinyl/furlong-essential-ii",
  "/vinyl/abingdon-endurance",
  "/lvt",
  "/lvt/invictus-maximus-click",
  "/lvt/artisan-click-abingdon",
  "/laminate",
  "/laminate/urban-8mm",
  "/laminate/river-water-resistant-8mm",
  "/laminate/elite-xl-10mm",
  "/mattress-bed",
  "/mattress-bed/bed",
  "/mattress-bed/mattress",
  "/mattress-bed/frame",
  "/mattress-bed/headboards",
];

const allFailures = [];

const browser = await chromium.launch();

for (const route of ROUTES) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  const failedRequests = [];
  const consoleErrors = [];

  page.on("requestfailed", (req) => {
    const url = req.url();
    if (/\.(png|jpe?g|webp|avif|gif|svg|bmp)(\?|$)/i.test(url) || req.resourceType() === "image") {
      failedRequests.push({ url, failure: req.failure()?.errorText || "unknown" });
    }
  });

  page.on("response", (res) => {
    const url = res.url();
    const status = res.status();
    if (status >= 400 && (/\.(png|jpe?g|webp|avif|gif|svg|bmp)(\?|$)/i.test(url) || res.request().resourceType() === "image")) {
      failedRequests.push({ url, failure: `HTTP ${status}` });
    }
  });

  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  const target = BASE + route;
  try {
    await page.goto(target, { waitUntil: "networkidle", timeout: 30000 });
  } catch (e) {
    console.log(`[NAV-ERR] ${route} → ${String(e).slice(0, 200)}`);
  }

  // Force-trigger lazy loads by scrolling to the bottom in steps
  try {
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let total = 0;
        const step = 600;
        const timer = setInterval(() => {
          window.scrollBy(0, step);
          total += step;
          if (total >= document.body.scrollHeight + 2000) {
            clearInterval(timer);
            resolve();
          }
        }, 120);
      });
    });
    await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
  } catch {}

  // Inspect every <img> for natural size 0 (broken/never-loaded)
  const brokenImgs = await page.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll("img")) {
      const src = el.currentSrc || el.src;
      if (!src) continue;
      if (!el.complete || el.naturalWidth === 0) {
        out.push({ src, alt: el.alt || "", visible: !!el.offsetParent });
      }
    }
    return out;
  });

  // Inspect computed background-image URLs for 404s indirectly via fetch
  const bgImageUrls = await page.evaluate(() => {
    const urls = new Set();
    const all = document.querySelectorAll("*");
    for (const el of all) {
      const cs = getComputedStyle(el).backgroundImage;
      if (cs && cs !== "none") {
        const matches = cs.matchAll(/url\(["']?([^"')]+)["']?\)/g);
        for (const m of matches) {
          const url = m[1];
          if (!url.startsWith("data:")) urls.add(url);
        }
      }
    }
    return [...urls];
  });

  const bgFailures = [];
  for (const u of bgImageUrls) {
    try {
      const abs = new URL(u, target).href;
      const r = await page.request.fetch(abs);
      if (!r.ok()) bgFailures.push({ url: abs, failure: `HTTP ${r.status()}` });
    } catch (e) {
      bgFailures.push({ url: u, failure: String(e).slice(0, 200) });
    }
  }

  const issues = {
    route,
    networkFailures: failedRequests,
    brokenImgElements: brokenImgs,
    backgroundImageFailures: bgFailures,
    consoleErrors,
  };

  if (
    failedRequests.length ||
    brokenImgs.length ||
    bgFailures.length
  ) {
    allFailures.push(issues);
    console.log(`\n=== ${route} ===`);
    if (failedRequests.length) {
      console.log(`  network failures (${failedRequests.length}):`);
      for (const f of failedRequests) console.log(`    - ${f.failure} :: ${f.url}`);
    }
    if (brokenImgs.length) {
      console.log(`  broken <img> (${brokenImgs.length}):`);
      for (const f of brokenImgs) console.log(`    - ${f.src} (alt="${f.alt}", visible=${f.visible})`);
    }
    if (bgFailures.length) {
      console.log(`  background-image failures (${bgFailures.length}):`);
      for (const f of bgFailures) console.log(`    - ${f.failure} :: ${f.url}`);
    }
  } else {
    console.log(`OK  ${route}`);
  }

  await ctx.close();
}

await browser.close();

console.log(`\n\n==== SUMMARY ====`);
console.log(`Routes checked: ${ROUTES.length}`);
console.log(`Routes with image issues: ${allFailures.length}`);

// Deduplicated list of all broken URLs
const uniqUrls = new Set();
for (const f of allFailures) {
  for (const x of f.networkFailures) uniqUrls.add(x.url);
  for (const x of f.brokenImgElements) uniqUrls.add(x.src);
  for (const x of f.backgroundImageFailures) uniqUrls.add(x.url);
}
console.log(`Unique broken image URLs: ${uniqUrls.size}`);
for (const u of uniqUrls) console.log(`  ${u}`);

import { writeFileSync } from "node:fs";
writeFileSync("scripts/check-images.report.json", JSON.stringify(allFailures, null, 2));
console.log("\nFull report → scripts/check-images.report.json");

process.exit(allFailures.length ? 1 : 0);
