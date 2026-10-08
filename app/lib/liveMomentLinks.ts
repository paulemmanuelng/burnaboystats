// ============================================================================
//  WHERE EACH "RECORD NIGHTS & LIVE MILESTONES" ROW POINTS
// ============================================================================
//
// The 17 rows on /records/tours were dead ends, though nearly every one already
// has a page on the site that holds it (design review of 8 Oct 2026, T-20).
// Each title now links to that page, in the review's order of preference:
//
//  1. The On This Day day that carries it: a moment dated in its own right
//     (World Cup final, AFCON fan zone) is an event there, and a moment that is
//     a dated tour night (London Stadium, Citi Field, MSG, Stade de France,
//     Red Rocks) is that night's event, with the moment's text as its detail
//     (lib/onThisDay showEvents). Found BY that event, never by a typed day.
//  2. Otherwise the moment's country on the tour map (?country=, which selects
//     it), from the map's own placing of the moment (MOMENT_PLACE).
//  3. A moment the map cannot place — the two Grammy stages — goes to its
//     ceremony on the awards page (#body=, which opens it).
//
// Server-only: it reads the On This Day events and the map's data.
// ============================================================================

import type { LiveMoment } from "../data/tours";
import { liveMoments } from "../data/liveMoments";
import { ceremonies } from "../data/awards";
import { onThisDayEvents, dayKey, daySlug } from "./onThisDay";
import { MOMENT_PLACE, tourMapCountries } from "./tourMapData";

/** The On This Day event that carries this moment, if any. */
function otdEventFor(m: LiveMoment, index: number) {
  return onThisDayEvents.find(
    (e) =>
      (e.source.data === "liveMoments" && e.source.index === index) ||
      (e.kind === "show" && e.source.data === "tours" && e.detail === m.text),
  );
}

/** The page that holds a live moment, or null when no page does. */
export function liveMomentHref(m: LiveMoment, index: number = liveMoments.indexOf(m)): string | null {
  const e = otdEventFor(m, index);
  if (e) return `/on-this-day/${daySlug(dayKey(e.date))}`;
  const place = MOMENT_PLACE[m.title];
  if (place) {
    const c = tourMapCountries.find((x) => x.name === place.country);
    return c ? `/records/tours/map?country=${c.a2.toLowerCase()}` : null;
  }
  const ceremony = ceremonies.find((c) => m.title.startsWith(c.name.replace(/ Awards$/, "")));
  return ceremony ? `/records/awards#body=${encodeURIComponent(ceremony.name)}` : null;
}

/** Every row's link, in the page's order. */
export const liveMomentLinks = liveMoments.map((m, i) => ({ title: m.title, href: liveMomentHref(m, i) }));
