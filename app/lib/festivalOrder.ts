// How /records/tours/festivals orders its three lists, and the phone note
// that says so. Here rather than in the page module, which may export only
// Next's own page fields.

import type { Festival } from "../data/tours";

/**
 * Newest year first, and within a year the dated rows newest first, with the
 * undated ones after them in the order the data lists them. By year alone,
 * 2026 read North Sea Jazz (11 Jul), Afro Nation (3 Jul), Reggae Land (31 Jul)
 * (debug pass 5 Oct 2026). Not every row has a day, so the note under the
 * phone list says "by year", never "by date".
 */
export const byYearDesc = (rows: Festival[]) =>
  [...rows].sort((a, b) => Number(b.year) - Number(a.year) || (b.date ?? "").localeCompare(a.date ?? ""));

/**
 * The three lists' names, and the page's kicker, said once for both layouts
 * (design review of 8 Oct 2026, T-12). The third list was "Other festivals &
 * shows" in the desktop heading, "Other big stages" in the desktop count strip
 * and "Other appearances" on the phone; the solo concerts were "Solo shows" in
 * the phone's grid; the kicker was "Big stages" on desktop, "Festival stages"
 * on the phone. One name each: the desktop headings', and its eyebrow.
 */
export const FESTIVAL_GROUP_NAMES = {
  headlined: "Festivals headlined",
  concerts: "Solo concerts",
  others: "Other festivals & shows",
} as const;
export const FESTIVALS_KICKER = "Big stages";

/**
 * The phone list's note. It named the data file ("tours.ts records no
 * capacity field") and credited every row to "each festival's own line-up
 * archive" — false for the solo concerts, and the shows on the tours do carry
 * a capacity — until 5 Oct 2026. Same sourcing words as the desktop note.
 */
export const PHONE_SOURCE_NOTE =
  "Verified against press and festival line-ups. No capacities are recorded here, so each section runs by year, newest first, rather than by size.";
