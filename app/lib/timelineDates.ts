/**
 * The day a /timeline milestone happened, read from On This Day.
 *
 * SERVER-ONLY: lib/onThisDay.ts reads the certification, chart, tour and
 * award datasets. data/timeline.ts names the event (`otd`); this resolves it,
 * so the timeline and the calendar print the same day from the same field —
 * a release's `released`, a chart's `peakDate`, a show's date. An entry with
 * no event on the calendar keeps its typed label (a year, a month, a span).
 */
import { onThisDayEvents } from "./onThisDay";
import type { TimelineEntry } from "../data/timeline";

const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2013-08-12" as "12 Aug 2013", the timeline's own day format. */
export const timelineDay = (iso: string) => `${Number(iso.slice(8, 10))} ${MON[Number(iso.slice(5, 7)) - 1]} ${iso.slice(0, 4)}`;

/** The On This Day event an entry names, if the calendar holds it. */
export const timelineEvent = (e: Pick<TimelineEntry, "otd">) =>
  e.otd ? onThisDayEvents.find((x) => x.id === e.otd) : undefined;

/** The label /timeline prints: the day where the calendar holds it, else
 *  the typed one. A renamed event falls back to the typed label rather than
 *  failing a deploy; tests/designReviewCopy1008 fails on it instead. */
export function timelineDate(e: Pick<TimelineEntry, "date" | "otd">): string {
  const ev = timelineEvent(e);
  return ev ? timelineDay(ev.date) : e.date;
}
