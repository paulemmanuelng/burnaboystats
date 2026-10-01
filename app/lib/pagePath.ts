import { usePathname } from "next/navigation";

/**
 * The page's path as the site's chrome should read it.
 *
 * "/index" is the home page's own name inside Next's background regeneration
 * of an ISR route (app/page.tsx revalidates hourly for the On this day card).
 * The hourly rebuild of "/" hands usePathname() "/index", while the browser,
 * on the same HTML, reads "/". Every component that branches on the path then
 * renders one thing on the server and another in the browser: the live debug
 * of 1 Oct 2026 found the cached home page serving footerCompact for
 * footerGrid, no navActive on Home, and a BreadcrumbList item "index" →
 * https://burnaboystats.com/index — and React error #418 on every visit,
 * which throws the whole server-rendered body away and redraws it.
 *
 * No route of the site is called "/index", so the name maps to "/" and the
 * server and the browser agree again.
 */
export const pagePath = (pathname: string): string => (pathname === "/index" ? "/" : pathname);

/** usePathname(), with the regeneration's "/index" read as the home page. */
export function usePagePath(): string {
  return pagePath(usePathname());
}
