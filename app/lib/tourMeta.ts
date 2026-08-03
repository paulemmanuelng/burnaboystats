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

/** The note under an opened tour's date table. */
export function tourDateNote(t: Tour): string {
  if (t.partial) return "Confirmed dates only — the full itinerary was never publicly documented.";
  return `${t.dates?.length ?? 0} documented dates. Capacities are the venues’ standard listed capacities.`;
}
