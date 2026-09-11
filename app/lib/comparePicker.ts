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
 * ORDER is by plaques held, most first (Paul, 11 Sep 2026): the artist with the
 * most certifications leads the artist list, the song with the most leads the
 * song list. Ties fall back to the name. The page shows the first PICKER_FOLD
 * of either list and folds the rest behind a native disclosure — folded, never
 * dropped, so the coverage tests below still hold on the full list.
 *
 * Kept out of the page so it can be tested for coverage directly.
 */

/** How many chips show before the rest fold. */
export const PICKER_FOLD = 8;

/** Every plaque the artist holds, features included — the board's own count. */
export const plaqueCount = (a: ComparableArtist): number => a.releases.reduce((n, r) => n + r.certs.length, 0);

/** Every artist except the one already on the other side, most plaques first. */
export function pickerArtists(excludeSlug?: string): ComparableArtist[] {
  return comparableArtists
    .filter((a) => a.slug !== excludeSlug)
    .sort((x, y) => plaqueCount(y) - plaqueCount(x) || x.name.localeCompare(y.name));
}

/** Every certified release of one artist, most plaques first, filtered by a
 *  search query if given and — when the page is in a record mode — by format,
 *  so "Song vs song" lists singles and "Album vs album" lists albums (Paul,
 *  12 Sep 2026: the first version had no album mode and albums sat among the
 *  songs). Matches title OR credit, case- and accent-insensitively, so
 *  "Kampe" finds "4 Kampé II" and "dave" finds "Location". */
export function pickerReleases(
  artist: ComparableArtist,
  query = "",
  format?: ComparableRelease["format"],
): ComparableRelease[] {
  const q = fold(query);
  const all = [...artist.releases]
    .filter((r) => !format || r.format === format)
    .sort((x, y) => y.certs.length - x.certs.length || x.title.localeCompare(y.title));
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
