import { enGbDate } from "../dates";
import { listenersLabel } from "../visualizedSections";
import { niceTicks } from "./niceTicks";

/**
 * The geometry of a dated line chart, apart from its drawing (site review
 * 8 Oct 2026, Job 5 · J5-1).
 *
 * Pure, so the desktop chart (a server component on a fixed 720-wide
 * viewBox) and the phone chart (a client component on a viewBox the size of
 * its CSS box, so 1 unit = 1 CSS px) lay the same series out by one rule.
 */

export interface SeriesPoint {
  date: string; // ISO "YYYY-MM-DD"
  value: number;
}

export interface SeriesAnnotation {
  date: string;
  label: string;
}

/**
 * How a value is printed on the axis and in the hidden table, named rather
 * than passed as a function: a server component cannot hand a function to the
 * phone's client chart. "listeners" is the two-decimal listener label the
 * captions use (lib/visualizedSections), "count" a whole number.
 */
export type SeriesFormat = "listeners" | "count" | "plain";
export const SERIES_FORMATS: Record<SeriesFormat, (v: number) => string> = {
  listeners: listenersLabel,
  count: (v) => String(Math.round(v)),
  plain: (v) => String(v),
};

/**
 * How a round axis tick is printed on a zero-based chart (J5-2): "60M", not
 * the reading's "60.00M" — a tick is a gridline's value, never a reading.
 */
export const SERIES_TICKS: Record<SeriesFormat, (v: number) => string> = {
  listeners: (v) => (v === 0 ? "0" : `${v}M`),
  count: (v) => String(v),
  plain: (v) => String(v),
};

export interface SeriesPad {
  l: number;
  r: number;
  t: number;
  b: number;
}

const ms = (iso: string) => new Date(`${iso}T12:00:00Z`).getTime();

/** Two years of span is the switch: anything longer is a career, not a run. */
export const isYearly = (points: SeriesPoint[]) =>
  points.length > 1 && ms(points[points.length - 1].date) - ms(points[0].date) > 730 * 86_400_000;

// Day-and-month for a run measured in days; the bare year once a series spans
// years — a yearly series ticked "30 Jun / 30 Jun / 30 Jun" names no year at
// all, which is the one thing its axis exists to say.
export const shortDate = (iso: string, yearly: boolean) =>
  yearly
    ? new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { year: "numeric" })
    : enGbDate(new Date(`${iso}T12:00:00Z`), {
        day: "numeric",
        month: "short",
      });

export interface TimeSeriesGeometry {
  w: number;
  h: number;
  pad: SeriesPad;
  yearly: boolean;
  /** The axis starts at zero and its ticks are round (niceTicks). */
  zeroBased: boolean;
  x: (iso: string) => number;
  y: (v: number) => number;
  line: string;
  area: string;
  yTicks: number[];
  xTicks: SeriesPoint[];
  marks: (SeriesAnnotation & { point: SeriesPoint })[];
  last: SeriesPoint;
}

export function timeSeriesGeometry(
  points: SeriesPoint[],
  annotations: SeriesAnnotation[],
  { w, h, pad, zeroBased = false }: { w: number; h: number; pad: SeriesPad; zeroBased?: boolean },
): TimeSeriesGeometry {
  const yearly = isYearly(points);

  const values = points.map((p) => p.value);
  const times = points.map((p) => ms(p.date));
  const tMin = Math.min(...times);
  const tMax = Math.max(...times);
  const tRange = tMax - tMin || 1;

  // Head-room above and below so the line never touches the frame, and the
  // baseline never implies zero when the series lives in a narrow band.
  // Zero-based (J5-2, the Africa's Biggest hero rule): the axis runs from 0 to
  // its top round tick, so a 25% climb reads as 25%.
  const vMin = Math.min(...values);
  const vMax = Math.max(...values);
  const band = vMax - vMin || Math.abs(vMax) || 1;
  const round = zeroBased ? niceTicks(0, vMax) : null;
  const yLo = round ? 0 : vMin - band * 0.18;
  const yHi = round ? round[round.length - 1] : vMax + band * 0.18;

  const x = (iso: string) => pad.l + ((ms(iso) - tMin) / tRange) * (w - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - (v - yLo) / (yHi - yLo)) * (h - pad.t - pad.b);

  const coords = points.map((p) => `${x(p.date).toFixed(1)},${y(p.value).toFixed(1)}`);
  const line = `M${coords.join("L")}`;
  const area = `${line}L${x(points[points.length - 1].date).toFixed(1)},${h - pad.b}L${x(
    points[0].date,
  ).toFixed(1)},${h - pad.b}Z`;

  // Three horizontal guides: low, middle, high — enough to read the scale
  // without turning the plot into graph paper. Zero-based: the round ticks.
  const yTicks = round ?? [vMin, (vMin + vMax) / 2, vMax];

  // First, last and a middle date. More than three crowds a phone.
  const xTicks = [points[0], points[Math.floor((points.length - 1) / 2)], points[points.length - 1]];

  const marks = annotations
    .map((a) => {
      const hit = points.find((p) => p.date >= a.date) ?? points[points.length - 1];
      return { ...a, point: hit };
    })
    // Two milestones landing on the same reading would stack their labels.
    .filter((m, i, all) => all.findIndex((o) => o.point.date === m.point.date) === i);

  return { w, h, pad, yearly, zeroBased, x, y, line, area, yTicks, xTicks, marks, last: points[points.length - 1] };
}
