import type { Tour } from "../data/tours";

/**
 * A tour date's address on /records/tours: #tour=<slug>&date=<YYYY-MM-DD>
 * opens that tour, on either layout, and brings the night's own row into view.
 *
 * On This Day's show rows linked a bare /records/tours, where every date sits
 * inside a collapsed tour — on 1 April, "Burna Boy played Brighton Music Hall,
 * Boston" landed on the top of Tours & Live with the venue nowhere on screen
 * (V-otd-02, debug pass 5 Oct 2026). The other kinds already land on their
 * record: #song=, #release=, #body=.
 *
 * A fragment, as those are (lib/deepLink): it is never sent to the server, so
 * the page stays static and a crawler sees one URL.
 *
 * Pure: no data import, so the client accordions can read the link with it.
 */

export const TOUR_PARAM = "tour";
export const DATE_PARAM = "date";

const MON3: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

const pad = (n: number) => String(n).padStart(2, "0");

/** A tour show's "Oct 16, 2025" as "2025-10-16"; null for anything else. */
export function showDateIso(s: string): string | null {
  const m = s.match(/^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/);
  if (!m || !MON3[m[1]]) return null;
  return `${m[3]}-${pad(MON3[m[1]])}-${pad(Number(m[2]))}`;
}

/** "Love, Damini Tour" → "love-damini-tour", "I Told Them… Tour" → "i-told-them-tour". */
export const tourSlug = (name: string) =>
  name
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** One night of a tour, on the tours page. */
export const tourDateHref = (tour: string, date: string) => {
  const iso = showDateIso(date);
  return `/records/tours#${TOUR_PARAM}=${tourSlug(tour)}${iso ? `&${DATE_PARAM}=${iso}` : ""}`;
};

/** The tour a link names, or null — an absent or unknown slug opens nothing. */
export function tourForSlug<T extends Pick<Tour, "name">>(slug: string | null | undefined, tours: readonly T[]): T | null {
  if (!slug) return null;
  const want = slug.trim().toLowerCase();
  return tours.find((t) => tourSlug(t.name) === want) ?? null;
}
