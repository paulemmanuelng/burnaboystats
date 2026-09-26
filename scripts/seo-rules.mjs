// Per-page rules for the post-build SEO gate (scripts/check-seo.mjs), in a
// module of their own so a test can hold each one to the markup the site
// actually shipped (tests/seoAudit.test.tsx, tests/liveDebug349Headers.test.ts).

/**
 * An indexable page has to allow Google's large image preview.
 *
 * Discover shows the large card only when the page's image is at least 1200px
 * wide AND its robots tag says max-image-preview:large. The share cards were
 * always 1200×630; the opt-in was missing from all 346 sitemap pages until
 * 26 Sep 2026, and nothing checked. The root layout now declares it
 * (lib/seo.ts INDEXABLE_ROBOTS), and a page that sets robots of its own
 * replaces that block — so a page that drops it, or a root that loses it,
 * shows up here. A noindex page is exempt: it is not in Discover at all.
 *
 * Returns the problem, or null.
 */
export function robotsProblem(html) {
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1];
  if (robots === undefined) return "no robots meta, so no max-image-preview:large";
  if (/\bnoindex\b/.test(robots)) return null;
  if (!/\bmax-image-preview:large\b/.test(robots)) return `robots "${robots}" has no max-image-preview:large`;
  return null;
}

const unescapeAttr = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
   .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'");

/** Keys whose value is an image in schema.org: Article.image, Organization.logo,
 *  VideoObject.thumbnailUrl. A value may be a URL, an ImageObject, or a list. */
const IMAGE_KEYS = new Set(["image", "logo", "thumbnailUrl"]);

function imageUrls(value, out) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => imageUrls(v, out));
  else if (value && typeof value === "object") {
    for (const k of ["url", "contentUrl"]) if (typeof value[k] === "string") out.push(value[k]);
  }
}

function walkLd(node, out) {
  if (Array.isArray(node)) node.forEach((n) => walkLd(n, out));
  else if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (IMAGE_KEYS.has(k)) imageUrls(v, out);
      walkLd(v, out);
    }
  }
}

/**
 * Every image a page cites for search, on this site's own origin: each
 * JSON-LD image (image, logo, thumbnailUrl) and the og:image. Paths, query
 * kept, deduplicated. A page that is itself noindex cites nothing here — it is
 * in no rich result and no Discover feed.
 */
export function citedImages(html, origin = "https://burnaboystats.com") {
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1];
  if (robots !== undefined && /\bnoindex\b/.test(robots)) return [];
  const urls = [];
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    walkLd(JSON.parse(m[1]), urls);
  }
  for (const m of html.matchAll(/<meta property="og:image" content="([^"]*)"/g)) urls.push(unescapeAttr(m[1]));
  const own = new Set();
  for (const u of urls) {
    if (u.startsWith("/") && !u.startsWith("//")) own.add(u);
    else if (u.startsWith(`${origin}/`)) own.add(u.slice(origin.length));
  }
  return [...own];
}

/**
 * An image a page cites has to be indexable.
 *
 * Google's Article guidelines require an image URL to be "crawlable and
 * indexable", and noindex on an image means Google does not show it. From
 * 22 Aug to 26 Sep 2026 next.config.mjs sent `X-Robots-Tag: noindex` on every
 * share card — the /dai-dai Article.image among them, and every 1200px card
 * max-image-preview:large was switched on to unlock. Nothing checked, because
 * the header lives in the config and the image in the page.
 *
 * `robotsTag` is the X-Robots-Tag the config sends for the image's path on the
 * canonical host (null for none). Returns the problem, or null.
 */
export function imageRobotsProblem(path, robotsTag) {
  if (robotsTag && /\b(noindex|none)\b/i.test(robotsTag)) return `cites ${path}, which answers X-Robots-Tag "${robotsTag}"`;
  return null;
}
