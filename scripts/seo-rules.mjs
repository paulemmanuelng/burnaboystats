// Per-page rules for the post-build SEO gate (scripts/check-seo.mjs), in a
// module of their own so a test can hold each one to the markup the site
// actually shipped (tests/seoAudit.test.tsx).

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
