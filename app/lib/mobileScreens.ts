/**
 * Routes that have their own purpose-built mobile screen.
 *
 * On these, the mobile design replaces the site chrome entirely: a sticky back
 * bar stands in for the top nav, and a page action bar stands in for the tab
 * bar. Listing them here keeps Nav and MobileTabBar in agreement, and means a
 * route that hasn't been built yet still gets the normal chrome rather than
 * being left with no navigation at all.
 *
 * Add a route here only when its mobile screen actually renders a back bar.
 */
export const MOBILE_SCREEN_ROUTES = new Set<string>(["/certifications"]);

export const hasOwnMobileChrome = (pathname: string) =>
  MOBILE_SCREEN_ROUTES.has(pathname);
