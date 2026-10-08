import { shortStamp, monthStamp } from "./dates";

/**
 * The provenance component's vocabulary (design review 8 Oct 2026, J0-9 with
 * fixes 9–13 and J0-13): its date labels, its date strings, the /methodology
 * anchors its method link may name, and the shapes of its props.
 *
 * Pure: it imports the date helpers only, so the component that reads it can
 * render inside a client screen without pulling a data module into the
 * bundle. The props themselves are built from data in provenanceSpecs.ts,
 * which is server-only.
 */

/** Fix 10: the one closed set of date labels, in the fix's order.
 *  - Verified: register-read data (certifications, the home row).
 *  - Checked: a hand re-read with a recorded date (/about).
 *  - Read: a tracker or platform reading (kworb, Spotify, ChartMasters, TouringData).
 *  - Chart dated: a chart's own week.
 *  - Updated: an edit stamp (tours, live charts, /faq).
 *  - Set: a fixed historical fact (By the numbers).
 *  - As of: a month-only date. */
export const DATE_LABELS = ["Verified", "Checked", "Read", "Chart dated", "Updated", "Set", "As of"] as const;
export type DateLabel = (typeof DATE_LABELS)[number];

/** A date with its label. "As of" is the only label a month may take, and a
 *  month takes no other; a read whose date was never recorded says so rather
 *  than borrowing one (fixes 22/23 (a)). */
export type ProvDate =
  | { label: Exclude<DateLabel, "As of">; day: string }
  | { label: "As of"; month: string }
  | { label: "Read"; unrecorded: true };

/** The Reviewed size's fixed words (panel 9). Its date is the newest logged
 *  update, not a read, so it takes none of fix 10's labels. */
export const REVIEWED_WORDS = "Data last reviewed";

/** The words an unrecorded read prints, in place of a date. */
export const UNRECORDED = "read date not recorded";

const isMonth = (d: ProvDate): d is { label: "As of"; month: string } => "month" in d;
const isDay = (d: ProvDate): d is { label: Exclude<DateLabel, "As of">; day: string } => "day" in d;

/** J0-13, the date alone: "7 Oct 2026" | "Oct 2026" | "" (unrecorded). A day
 *  that is not YYYY-MM-DD throws rather than printing: "2026-10" would parse as
 *  1 Oct 2026, an invented day. monthStamp checks a month the same way. */
export function provDateText(d: ProvDate): string {
  if (isDay(d)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.day)) throw new Error(`provDateText: not YYYY-MM-DD: ${d.day}`);
    return shortStamp(d.day);
  }
  if (isMonth(d)) return monthStamp(d.month);
  return "";
}

/** The machine value for <time dateTime>: the ISO day or month; none when unrecorded. */
export function provDateTime(d: ProvDate): string | undefined {
  if (isDay(d)) return d.day;
  if (isMonth(d)) return d.month;
  return undefined;
}

/** A row's date as label + date: { "Verified", "7 Oct 2026" } · { "As of", "Oct 2026" } ·
 *  { "Read date not recorded", "" }. */
export function p1DateParts(d: ProvDate): { label: string; text: string; dateTime?: string } {
  if ("unrecorded" in d) return { label: UNRECORDED.charAt(0).toUpperCase() + UNRECORDED.slice(1), text: "" };
  return { label: d.label, text: provDateText(d), dateTime: provDateTime(d) };
}

/** A sentence's date, lower case: "read 6 Oct 2026" · "chart dated 3 Oct 2026" ·
 *  "as of Aug 2026" · "read date not recorded". */
export function sentenceDate(d: ProvDate): { kind: string; text: string; dateTime?: string } {
  if ("unrecorded" in d) return { kind: UNRECORDED, text: "" };
  return { kind: d.label.toLowerCase(), text: provDateText(d), dateTime: provDateTime(d) };
}

/** Fix 11: the /methodology anchors that exist. Each is a shared section, or a
 *  desktop section whose phone twin AnchorTwins maps (principles, sources). */
export const METHODOLOGY_ANCHORS = [
  "registers",
  "certified-units",
  "principles",
  "sources",
  "dates",
  "thresholds",
  "threshold-history",
  "rejected",
  "accessibility",
] as const;
export type MethodologyAnchor = (typeof METHODOLOGY_ANCHORS)[number];

/** Where "How this is counted" goes: a /methodology section, or the page's own
 *  method note (its P3) where /methodology has no section (fix 11). */
export type MethodHref = `/methodology#${MethodologyAnchor}` | "#method";

/** ↗ only when the link leaves the page (fixes 11 and 29). */
export const methodLeaves = (h: MethodHref): boolean => h.startsWith("/");

/** Fix 29: one label per layout, on every page. */
export const METHOD_LABEL = { desktop: "How this is counted", phone: "How it's counted" } as const;

/** The P3 ids: one per layout, since both layouts sit in every document. */
export const METHOD_ID = { desktop: "method", phone: "m-method" } as const;
/** AnchorTwins' pair for them, so a #method link copied on one layout lands on the other. */
export const METHOD_TWINS = { [METHOD_ID.desktop]: METHOD_ID.phone } as const;
/** The phone's own href for a method link. */
export const phoneHref = (h: MethodHref): string => (h === "#method" ? `#${METHOD_ID.phone}` : h);

/** Fix 9: "+ N more" goes to the registers section. */
export const MORE_HREF = "/methodology#registers" as const;
/** Fix 9: how many sources P1 names before "+ N more". */
export const P1_SHOWN = 4;

/** P1, the hero line: sources · date · method · data. */
export interface P1Spec {
  /** Ordered, most figures backed first; [] prints no sources item. */
  sources: readonly string[];
  date: ProvDate;
  method: MethodHref;
  /** Desktop only (fix 29): the page's JSON route. The phone moves it to P3. */
  openData?: `/api/v1/${string}`;
}

export interface P2Source {
  name: string;
  date: ProvDate;
}

/** P2, the board footer (fix 12): one or two sources, an optional `what`, and
 *  either the board's own source text in parts or a link to the method. */
export interface P2Spec {
  sources: readonly [P2Source] | readonly [P2Source, P2Source];
  what?: string;
  method: { parts: readonly string[] } | { href: MethodHref };
}

/** P3's data line (fix 13): read off the same registries the routes are built from. */
export interface DataLine {
  /** Absent: the CSV token drops (a page whose rows are not in a CSV). */
  csv?: { href: string; filename: string };
  json: `/api/v1/${string}`;
  licence: { name: string; url: string };
  /** The site's one credit line (lib/credit.ts). */
  cite: string;
}

/** Whitespace runs collapsed, the way a reader sees the text. */
const squash = (s: string) => s.replace(/\s+/g, " ").trim();

/** Fix 12: an existing source text split into its sentences, unchanged —
 *  `methodParts(x).join(" ")` is `x` with its whitespace collapsed. A sentence
 *  ends at . ! or ? (and any closing quote or bracket) before a capital or an
 *  opening quote, so "No. 1" and "4.5" stay whole. */
export function methodParts(text: string): string[] {
  return squash(text)
    .split(/(?<=[.!?][”’")\]]?)\s+(?=[A-Z“‘"(])/)
    .filter((p) => p.length > 0);
}

/** Fix 9: the first four names, and how many more. */
export function p1Shown(sources: readonly string[]): { shown: string[]; more: number } {
  return { shown: sources.slice(0, P1_SHOWN), more: Math.max(0, sources.length - P1_SHOWN) };
}
