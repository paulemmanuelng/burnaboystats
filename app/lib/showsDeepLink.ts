/**
 * "Biggest shows" — the link from an artist's certifications page to their
 * nights on the highest-grossing-shows board (the owner, 4 Oct 2026):
 * /records/tours/revenue?artist=<slug> opens the board with that artist's chip
 * already on, on both layouts.
 *
 * The slug is the artist's name on the board, lower-cased and hyphenated —
 * derived, never a typed list, and the same slug the Afrobeats Board files the
 * artist under ("Tiwa Savage" → tiwa-savage, "Fireboy DML" → fireboy-dml;
 * tests/showsButton.test.tsx holds the two together).
 *
 * Pure: no data import, so the client board can read the link with it
 * (tests/tourRevenueServerOnly.test.ts). Which artists get the button is
 * decided on the server, from the board's rows (lib/showsBoard.showsHrefFor).
 */

/** The query key the board reads. The board reads it client-side on mount, so
 *  the page stays statically rendered; its canonical is the bare path. */
export const SHOWS_PARAM = "artist";
export const SHOWS_PATH = "/records/tours/revenue";
/** The button's words, on both layouts. */
export const SHOWS_LABEL = "Biggest shows";
/** What the phone bar prints under 390px, where "Biggest shows" beside a named
 *  Compare does not fit on one line — the full label stays its accessible name. */
export const SHOWS_SHORT = "Shows";

/** "Tiwa Savage" → "tiwa-savage"; accents fold ("Ñ" → "n"). */
export const artistSlug = (name: string) =>
  name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** The board, opened on one artist's nights. */
export const showsHref = (name: string) => `${SHOWS_PATH}?${SHOWS_PARAM}=${artistSlug(name)}`;

/**
 * The artist a deep link names, among the artists holding a chip — or null,
 * which is "All": an absent, empty or unknown slug leaves the board as it is.
 */
export function artistForSlug(slug: string | null | undefined, artists: readonly string[]): string | null {
  if (!slug) return null;
  const want = slug.trim().toLowerCase();
  return artists.find((a) => artistSlug(a) === want) ?? null;
}

// ── The first paint ─────────────────────────────────────────────────────────
// The page is static, so its HTML is the whole board, and the boards read the
// link only once hydrated. Until 6 Oct 2026 that swapped the 82 nights for the
// artist's in the same frame as the A-10 scroll, and the method note and the
// footer leapt up into view: CLS 0.59–0.64 on every desktop link, 0.51 on a
// phone (debug pass 5 Oct 2026, V-tourscars-02). Now the page's own inline
// script marks <html> with the link's slug before the board is parsed, and
// SHOWS_PRE_PAINT_CSS hides every other artist's nights, so the first paint
// is already the board the client renders; the boards drop the mark once
// their own render shows the same rows (lib/useBoardView).

/** On <html> from first paint until the boards take over: the link's slug. */
export const SHOWS_MARK = "data-shows-artist";
/** On each night's row, both layouts: its artist's slug. */
export const SHOWS_ROW = "data-shows-row";

/** The inline script. It reads the link as readDeepLink does — the fragment
 *  first, an empty one meaning nobody, then the query — and as artistForSlug
 *  compares it, trimmed and lower-cased. A slug no chip has matches no rule. */
export const SHOWS_PRE_PAINT =
  `try{var k=${JSON.stringify(SHOWS_PARAM)},h=new URLSearchParams(location.hash.slice(1)).get(k),` +
  `v=h!==null?h:new URLSearchParams(location.search).get(k);` +
  `if(v)document.documentElement.setAttribute(${JSON.stringify(SHOWS_MARK)},v.trim().toLowerCase())}catch(e){}`;

/** One rule per artist holding a chip: marked with their slug, the page shows
 *  their nights only, as the boards' filter does (ranks and bars unchanged). */
export const showsPrePaintCss = (artists: readonly string[]) =>
  artists
    .map((a) => artistSlug(a))
    .map((s) => `html[${SHOWS_MARK}="${s}"] [${SHOWS_ROW}]:not([${SHOWS_ROW}="${s}"]){display:none}`)
    .join("\n");
