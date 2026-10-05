import type { Tour } from "../data/tours";

/**
 * The one-line summary shown beside a tour's gross, on both layouts.
 *
 * Shared so the two never drift: desktop puts it under the gross, mobile puts
 * it after the years, but it is the same sentence either way.
 *
 * Counts derive from the data. `meta` carries only the two runs where a date
 * count would undersell what the tour was — no number is ever written by hand.
 */
export function tourMeta(t: Tour): string {
  if (t.tickets && t.shows) return `${t.tickets} tickets · ${t.shows} shows`;
  if (t.meta) return t.meta;
  if (t.partial) return "Partial itinerary";
  return `${t.dates?.length ?? 0} documented dates`;
}

/** Why a partial run is partial, where the run gives no reason of its own. */
export const PARTIAL_STOCK_NOTE = "Confirmed dates only — the full itinerary was never publicly documented.";

/** Why this run's list is not the whole run — its own reason where it has one
 *  (`partialNote`), else the stock one; null for a run listed in full. The
 *  note under its dates and /api/v1/tours both say this, so neither can give
 *  a reason the other does not. */
export function partialReason(t: Tour): string | null {
  if (!t.partial) return null;
  return t.partialNote ?? PARTIAL_STOCK_NOTE;
}

/** The note under an opened tour's date table. */
export function tourDateNote(t: Tour): string {
  const dates = t.dates?.length ?? 0;
  const capacities = "Capacities are the venues’ standard listed capacities.";

  // A run with its own reason for being partial keeps the count and the
  // capacities sentence: the Love, Damini Tour was announced in full, and the
  // stock reason below said otherwise once it was marked partial (C-07 review,
  // 5 Oct 2026).
  if (t.partial && t.partialNote) return `${dates} documented dates. ${t.partialNote} ${capacities}`;
  if (t.partial) return PARTIAL_STOCK_NOTE;

  // The header says "22 shows" and the table below it lists 24 dates. Both are
  // right and they count different things — box office is only reported for
  // some dates — but side by side with no explanation it reads as an error.
  if (t.shows && t.shows !== dates) {
    return `${dates} documented dates; box office was reported for ${t.shows} of them, which is what the gross and ticket totals cover. ${capacities}`;
  }
  return `${dates} documented dates. ${capacities}`;
}
