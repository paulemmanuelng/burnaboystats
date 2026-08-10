/**
 * Which pieces of mobile chrome a route supplies for itself.
 *
 * Checked screen by screen against designs/mobile/Burna Boy Stats - Mobile.dc.html:
 *
 * - Every mobile screen except home opens with a sticky BACK BAR, which stands
 *   in for the site nav. Only routes whose screen actually draws one belong in
 *   BACK_BAR_ROUTES — otherwise hiding the nav would leave a page with no
 *   navigation at all.
 * - The five-tab bar is the bottom of nearly every screen, home included.
 *   Certifications is the single exception: it replaces the tab bar with a
 *   page action bar ("Make a stat card" plus a filter control).
 */

/** Screens with their own sticky back bar — the site nav hides on these. */
export const BACK_BAR_ROUTES = new Set<string>([
  "/certifications",
  // Screen 27's sticky search field stands in for the nav. It is NOT in
  // ACTION_BAR_ROUTES: the design keeps the five-tab bar at its foot.
  "/search",
  "/music",
  "/live-charts",
  "/records",
  "/records/charts",
  "/records/awards",
  "/records/firsts",
  "/records/cars",
  "/records/tours",
  "/records/tours/revenue",
  "/records/tours/festivals",
  "/records/tours/map",
  "/records/by-the-numbers",
  "/records/africas-biggest",
  "/records/visualized",
  // FAQ and Contact keep the five-tab bar, so neither is an ACTION_BAR route.
  "/faq",
  "/contact",
  "/about",
  "/updates",
  "/analysis",
  "/methodology",
  "/api",
  "/share",
  "/dai-dai",
]);

/**
 * Deep screens — the five-tab bar hides on all of these.
 *
 * NUMBERS-AND-STATES.md, "Tab bar vs action bar": the five-tab bar belongs to
 * screens 01–09, the top-level routes. Screens 10–27 are reached by a back
 * button, not lateral nav, so they get "an action bar or nothing" — and six of
 * them (awards, festivals, firsts, africa's biggest, cars, visualized) get
 * nothing, because the screen is already the full list and the bar had nowhere
 * to go. They still belong in this set: the tab bar hides either way.
 */
export const ACTION_BAR_ROUTES = new Set<string>([
  "/certifications",
  "/records/charts",
  "/records/awards",
  "/records/firsts",
  "/records/cars",
  "/records/tours",
  "/records/tours/revenue",
  "/records/tours/festivals",
  "/records/tours/map",
  "/records/by-the-numbers",
  "/records/africas-biggest",
  "/records/visualized",
  "/analysis",
  "/methodology",
  "/api",
  "/share",
  // NOT /dai-dai: Paul's call (9 Aug 2026) — the story pages carry the
  // standard five-tab footer, in English and in Spanish, instead of their own
  // action bar. They keep their back bar, so they stay in BACK_BAR_ROUTES.
]);

/**
 * A song page is screen 26 — a deep screen with its own back bar and action
 * bar, but at a dynamic path, so it can't sit in the sets above. `/music`
 * itself is screen 04 and keeps the five-tab bar, hence the trailing slash.
 */
const isSongPage = (pathname: string) => pathname.startsWith("/music/");

/**
 * Language editions inherit their parent screen's chrome.
 *
 * The sets above are exact-match, so /dai-dai/es did not count as /dai-dai and
 * the five-tab bar rendered UNDER the page's own action bar — two pinned bars
 * stacked at the foot of the Spanish page. A translation is the same screen in
 * another language, so it gets the same chrome.
 */
const LOCALES = new Set(["es"]);
const withoutLocale = (pathname: string) => {
  const parts = pathname.split("/");
  return LOCALES.has(parts[parts.length - 1]) ? parts.slice(0, -1).join("/") || "/" : pathname;
};

export const hasOwnMobileChrome = (pathname: string) =>
  BACK_BAR_ROUTES.has(withoutLocale(pathname)) || isSongPage(pathname);
export const hasOwnActionBar = (pathname: string) =>
  ACTION_BAR_ROUTES.has(withoutLocale(pathname)) || isSongPage(pathname);
