import type { First } from "../data/firsts";
import { tours } from "../data/tours";
import { liveMoments } from "../data/liveMoments";
import { liveMomentHref } from "./liveMomentLinks";
import { onThisDayEvents, dayKey, daySlug } from "./onThisDay";

/**
 * A first's "Proof ↗" target (Job 4 · J4-7, fixes 83 and 85): its own path;
 * for a live moment, the page lib/liveMomentLinks gives that moment (its On
 * This Day day, its country on the tour map, or its ceremony); for a tour
 * night, named by its venue in tours.ts, that night's On This Day day. Both
 * are found BY the record, never by a typed day. Null when the first has
 * none, or when its record can no longer be found (tests/firstsProof fails).
 *
 * Server-only: liveMoments and On This Day read the box-office board
 * (tests/tourRevenueServerOnly.test.ts).
 */
export function proofHref(f: Pick<First, "proof">): string | null {
  const p = f.proof;
  if (!p) return null;
  if (typeof p === "string") return p;
  if ("moment" in p) {
    const i = liveMoments.findIndex((m) => m.title === p.moment);
    return i < 0 ? null : liveMomentHref(liveMoments[i], i);
  }
  const nights = onThisDayEvents.filter((e) => {
    const s = e.source;
    return s.data === "tours" && tours.find((t) => t.name === s.tour)?.dates?.[s.index]?.venue === p.night;
  });
  // One night at that venue, or the link would have to pick one.
  return nights.length === 1 ? `/on-this-day/${daySlug(dayKey(nights[0].date))}` : null;
}
