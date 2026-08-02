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
export const BACK_BAR_ROUTES = new Set<string>(["/certifications", "/music"]);

/** Screens whose bottom bar is a page action bar — the tab bar hides on these. */
export const ACTION_BAR_ROUTES = new Set<string>(["/certifications"]);

export const hasOwnMobileChrome = (pathname: string) => BACK_BAR_ROUTES.has(pathname);
export const hasOwnActionBar = (pathname: string) => ACTION_BAR_ROUTES.has(pathname);
