/**
 * The paths no link on the site prefetches: everything under /compare.
 *
 * The Vercel firewall rate-limits them (the owner's dashboard, 14 Oct 2026,
 * "Rate limit /compare to 60/min per IP"): a request whose path starts with
 * /compare counts, 60 to an IP in a fixed 60-second window, and the 61st is
 * a 403. Every next/link prefetch is such a request. One visit to /compare
 * made 21 of them, the page and 20 prefetches of the links in view
 * (/compare/in?_rsc=…, /compare?mode=songs&_rsc=…), so three page views in a
 * minute (pick an artist, pick another) used the whole budget, and a phone on
 * a carrier's shared IP got Vercel's "This request was blocked" page on
 * 15 Oct 2026. Without prefetch a visit is the page alone, and a click
 * fetches the one page it opens.
 *
 * The test is the firewall's own, "starts with /compare", so the links and
 * the rule cannot disagree about what counts. SiteLink, the site's only
 * next/link, applies it to every link (tests/compareNoPrefetch.test.tsx).
 */
export const NO_PREFETCH_PREFIX = "/compare";

/** The path a Link's href asks for: a string as written, an absolute URL's
 *  path, a URL object's pathname. A link off the site never prefetches, so
 *  reading an absolute URL's path without checking its host changes nothing. */
export function hrefPath(href: string | { pathname?: string | null }): string {
  if (typeof href !== "string") return href.pathname ?? "";
  if (/^([a-z][a-z\d+.-]*:|\/\/)/i.test(href)) {
    try {
      return new URL(href, "https://burnaboystats.com").pathname;
    } catch {
      return "";
    }
  }
  return href;
}

/** True when a link to `href` must not prefetch. */
export const noPrefetch = (href: string | { pathname?: string | null }) =>
  hrefPath(href).startsWith(NO_PREFETCH_PREFIX);
