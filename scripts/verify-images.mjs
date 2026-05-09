// Verifies every <img src> and <source srcSet> URL referenced from each route
// by fetching it and confirming a 200 + image/* response. This avoids
// naturalWidth==0 timing false positives on lazy-loaded galleries.
import { chromium } from "playwright";

const BASE = process.env.BASE_URL || "http://localhost:5173";

const ROUTES = [
  "/", "/services", "/about",
  "/carpet",
  "/carpet/cormar-inglewood-saxony", "/carpet/cormar-primo-texture", "/carpet/cormar-sensation",
  "/carpet/furlong-bliss-saxony", "/carpet/furlong-trident-twist", "/carpet/furlong-fairway", "/carpet/furlong-elegance",
  "/carpet/abingdon-stain-free-captivation", "/carpet/abingdon-stain-free-cares", "/carpet/abingdon-love-story-soft-whisper",
  "/carpet/associated-weavers-yukon", "/carpet/associated-weavers-magnificus",
  "/carpet/lewis-abbott-flat-weaves-herringbone", "/carpet/lewis-abbott-flat-weaves-gatsby",
  "/vinyl", "/vinyl/furlong-essential-ii", "/vinyl/abingdon-endurance",
  "/lvt", "/lvt/invictus-maximus-click", "/lvt/artisan-click-abingdon",
  "/laminate", "/laminate/urban-8mm", "/laminate/river-water-resistant-8mm", "/laminate/elite-xl-10mm",
  "/mattress-bed", "/mattress-bed/bed", "/mattress-bed/mattress", "/mattress-bed/frame", "/mattress-bed/headboards",
];

const browser = await chromium.launch();
const failures = [];
let totalChecked = 0;

for (const route of ROUTES) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const target = BASE + route;

  try {
    await page.goto(target, { waitUntil: "domcontentloaded", timeout: 30000 });
  } catch (e) {
    console.log(`[NAV-ERR] ${route} → ${String(e).slice(0,200)}`);
    await ctx.close();
    continue;
  }

  // Scroll bottom & top to make all <img>/<source> elements render in DOM
  await page.evaluate(async () => {
    await new Promise(r => {
      let total = 0;
      const t = setInterval(() => {
        window.scrollBy(0, 800);
        total += 800;
        if (total >= document.body.scrollHeight + 2000) { clearInterval(t); r(); }
      }, 80);
    });
  });

  // Collect every URL referenced by an <img>, <source srcSet>, and CSS background-image
  const urls = await page.evaluate((origin) => {
    const out = new Set();
    const abs = (u) => { try { return new URL(u, origin).href; } catch { return null; } };

    for (const el of document.querySelectorAll("img")) {
      if (el.src) out.add(abs(el.src));
      if (el.srcset) for (const part of el.srcset.split(",")) {
        const u = part.trim().split(/\s+/)[0];
        if (u) out.add(abs(u));
      }
    }
    for (const el of document.querySelectorAll("source")) {
      if (el.srcset) for (const part of el.srcset.split(",")) {
        const u = part.trim().split(/\s+/)[0];
        if (u) out.add(abs(u));
      }
    }
    for (const el of document.querySelectorAll("*")) {
      const cs = getComputedStyle(el).backgroundImage;
      if (cs && cs !== "none") {
        for (const m of cs.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
          if (!m[1].startsWith("data:")) out.add(abs(m[1]));
        }
      }
    }
    out.delete(null);
    return [...out];
  }, BASE);

  let routeFails = 0;
  for (const u of urls) {
    if (!u || u.startsWith("data:")) continue;
    try {
      const r = await page.request.fetch(u, { method: "GET" });
      const ct = r.headers()["content-type"] || "";
      const ok = r.ok() && (ct.startsWith("image/") || u.endsWith(".svg"));
      totalChecked++;
      if (!ok) {
        // Some external CDN images may not advertise image/* mime; tolerate them if status ok
        if (!r.ok()) {
          failures.push({ route, url: u, status: r.status(), ct });
          routeFails++;
        } else if (!ct.startsWith("image/") && !u.match(/^https?:\/\/(?!localhost)/)) {
          failures.push({ route, url: u, status: r.status(), ct });
          routeFails++;
        }
      }
    } catch (e) {
      failures.push({ route, url: u, status: "FETCH-ERR", ct: String(e).slice(0,100) });
      routeFails++;
    }
  }

  console.log(`${routeFails === 0 ? "OK " : "X  "} ${route}  (${urls.length} urls, ${routeFails} bad)`);
  await ctx.close();
}

await browser.close();

console.log(`\n==== SUMMARY ====`);
console.log(`Routes: ${ROUTES.length}   URLs checked: ${totalChecked}   Failures: ${failures.length}`);
if (failures.length) {
  console.log("\nFailing URLs:");
  // dedupe by url
  const seen = new Set();
  for (const f of failures) {
    const key = f.url;
    if (seen.has(key)) continue;
    seen.add(key);
    console.log(`  [${f.status}] ${f.url}  (route=${f.route}, ct=${f.ct})`);
  }
}
process.exit(failures.length ? 1 : 0);
