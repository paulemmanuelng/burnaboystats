import { HEAD_TO_HEAD } from "./headToHead";
import { comparableArtists, type ComparableArtist, type ComparableRelease } from "./certUnits";

/**
 * Who and what the compare page offers for selection.
 *
 * EVERY artist on the board, and EVERY certified release of the artist chosen —
 * never a shortlist. The first version of the picker offered six artist chips
 * from a typed list and the first eight releases of eighty-five, which meant ten
 * of sixteen artists and most of Burna's catalogue could only be reached by
 * editing the URL. A picker that hides the thing you came for is a bug.
 *
 * Kept out of the page so it can be tested for coverage directly.
 */

/** Every artist except the one already on the other side, with the board's own
 *  curated head-to-head partner first, then the rest by name. */
export function pickerArtists(excludeSlug?: string, forSlug?: string): ComparableArtist[] {
  const partner = forSlug ? HEAD_TO_HEAD[forSlug] : undefined;
  const rest = comparableArtists
    .filter((a) => a.slug !== excludeSlug)
    .sort((x, y) => x.name.localeCompare(y.name));
  const lead = partner && partner !== excludeSlug ? rest.find((a) => a.slug === partner) : undefined;
  return lead ? [lead, ...rest.filter((a) => a.slug !== lead.slug)] : rest;
}

/** Every certified release of one artist, filtered by a search query if given.
 *  Matches title OR credit, case- and accent-insensitively, so "Kampe" finds
 *  "4 Kampé II" and "dave" finds "Location". */
export function pickerReleases(artist: ComparableArtist, query = ""): ComparableRelease[] {
  const q = fold(query);
  const all = [...artist.releases].sort((x, y) => x.title.localeCompare(y.title));
  if (!q) return all;
  return all.filter((r) => fold(r.title).includes(q) || fold(r.credit ?? "").includes(q));
}

/** Lower-case, accents stripped, punctuation collapsed. */
export function fold(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
