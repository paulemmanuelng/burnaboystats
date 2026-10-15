/**
 * Which section of the site a page belongs to: the one rule the phone tab bar
 * (MobileTabBar) and the desktop masthead (Nav) light their links by.
 *
 * A page belongs to the section it sits under — a song page to /music, a car
 * page to /records — and the home page only to itself. A few routes belong to
 * a section without sitting under its href; SECTION_ALSO files those. They are
 * read only for a page no link of the bar holds by its path, so a bar that has
 * a link of the page's own (the masthead's Afrobeats and Compare) lights that
 * one, and a bar without one (the phone's five tabs) lights the section the
 * page is filed under.
 *
 * The desktop masthead lit a link only on its own page (`pathname ===
 * item.href`), so MUSIC went dark on every song, album and listener page,
 * while the phone's tab bar lit Music on all of them (live debug 15 Oct 2026,
 * music-11; Paul: "yes", question 5). It now lights the same section; only
 * the exact page is aria-current="page".
 */

/**
 * Routes that belong to a section but do not sit under its href.
 *
 * The board breaks the path rule: a chart board lives at
 * /afrobeats/{artist}/charts and a live board at /afrobeats/{artist}/live, so
 * both are charts pages that begin with neither /live-charts nor /records. The
 * phone's bar lit nothing at all on eighteen routes.
 *
 * Two more did the same until 6 Oct 2026 (debug V-global-15), each lit as its
 * phone artboard lights it:
 * - the board hub, /afrobeats — Charts, as "Afrobeats - Mobile Hub" draws it
 *   (its two rails are the chart peaks and the live board), the same tab as
 *   the chart and live boards under it;
 * - /compare, every pair page and every /compare/in/<country> board — Certs,
 *   as "Compare" M1–M3 draw it and as the trail files them (Home ›
 *   Certifications › Compare).
 * The masthead has its own Afrobeats and Compare links, so it lights those
 * there and never reads these two lines.
 *
 * The Dai Dai story belongs to no section: the approved redesign ("Dai Dai
 * Redesign", 26 Sep 2026) draws all five tabs muted, in English and in
 * Spanish, and the masthead leaves it unlit the same way.
 */
export const SECTION_ALSO: Readonly<Record<string, RegExp>> = {
  "/live-charts": /^\/(records\/charts|afrobeats|afrobeats\/[^/]+\/(charts|live))$/,
  "/certifications": /^\/(afrobeats\/[^/]+|compare(\/.+)?)$/,
  // The calendar and its day pages are records filed by date — the artboards
  // light Records on both — but live at /on-this-day, not under /records.
  "/records": /^\/on-this-day(\/[^/]+)?$/,
};

/** The page is the section's own, or sits under it; "/" is only itself. */
export const underSection = (pathname: string, href: string): boolean =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

/**
 * The one href of `hrefs` that a bar lights on `pathname`, or null: the
 * section the page sits under (the deepest, should two hold it), else the
 * first whose SECTION_ALSO line files the page.
 */
export function sectionOf(pathname: string, hrefs: readonly string[]): string | null {
  const own = hrefs.filter((h) => underSection(pathname, h)).sort((a, b) => b.length - a.length)[0];
  if (own) return own;
  return hrefs.find((h) => SECTION_ALSO[h]?.test(pathname)) ?? null;
}
