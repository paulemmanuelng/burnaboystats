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
