/**
 * The geometry of a scatter plot, apart from its drawing (site review 8 Oct
 * 2026, Job 5 · J5-1): pure, so the desktop chart (a server component on a
 * fixed 720 × 440 viewBox) and the phone chart (a client component on a
 * viewBox the size of its CSS box) place the same points by one rule.
 */

export interface ScatterPoint {
  x: number;
  y: number;
  title: string; // hover text
  label?: string; // a direct label, set in the label column (labelColumn)
  tone?: "gold" | "muted";
}
export interface Tick {
  value: number;
  label: string;
}
export interface ScatterMargin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ScatterGeometry {
  w: number;
  h: number;
  m: ScatterMargin;
  px: (v: number) => number;
  py: (v: number) => number;
}

export type ScatterScale = "linear" | "log";

/** The desktop chart's margins, in viewBox units (and the phone's, in px). */
export const SCATTER_MARGIN: ScatterMargin = { top: 22, right: 26, bottom: 46, left: 66 };

/**
 * `scale: "log"` (J5-2 (f), fix 113): both axes logarithmic between `xMin`–
 * `xMax` and `yMin`–`yMax` (the data's own decades), so ~80 shows from 525
 * tickets to 59,000 spread across the plot instead of piling into its first
 * tick. Linear runs from 0.
 */
export function scatterGeometry({
  w,
  h,
  m = SCATTER_MARGIN,
  xMin = 0,
  xMax,
  yMin = 0,
  yMax,
  scale = "linear",
}: {
  w: number;
  h: number;
  m?: ScatterMargin;
  xMin?: number;
  xMax: number;
  yMin?: number;
  yMax: number;
  scale?: ScatterScale;
}): ScatterGeometry {
  const frac =
    scale === "log"
      ? (v: number, lo: number, hi: number) => (Math.log10(v) - Math.log10(lo)) / (Math.log10(hi) - Math.log10(lo))
      : (v: number, lo: number, hi: number) => (v - lo) / (hi - lo);
  // Rounded to a hundredth of a unit: the server and the browser can differ in
  // the last bit of a logarithm, and a phone chart is drawn by both (a
  // hydration mismatch on every dot's cx, seen on the dev server, 14 Oct).
  const r2 = (v: number) => Math.round(v * 100) / 100;
  const px = (v: number) => r2(m.left + frac(v, xMin, xMax) * (w - m.left - m.right));
  const py = (v: number) => r2(h - m.bottom - frac(v, yMin, yMax) * (h - m.top - m.bottom));
  return { w, h, m, px, py };
}

/** Space Mono's advance at 11px (0.612em), for laying labels out. */
export const LABEL_PX = 11;
export const LABEL_ADVANCE = 6.73;
const LABEL_GAP = 4;
const LABEL_OFFSET = 24;

export interface PlacedLabel {
  text: string;
  /** The dot it names. */
  dot: { x: number; y: number };
  /** The label's right edge and its vertical centre. */
  x: number;
  y: number;
  /** Its box, for the collision check (Space Mono 11px). */
  box: { x0: number; x1: number; y0: number; y1: number };
}

/**
 * The labelled dots' names in one column, right-aligned 24px left of the
 * leftmost labelled dot and stacked down from the top of the plot in the
 * order the dots sit (highest first), each tied to its dot by a hairline
 * (J5-2 (f)). The top grosses sit in the empty upper corner of a tickets-vs-
 * gross plot — big rooms gross big — so the column never lands on the field,
 * where labels beside dots collided at 354px. `fontPx` is the label's size in
 * the drawing's own units (11 when 1 unit = 1 CSS px).
 */
export function labelColumn(points: ScatterPoint[], g: ScatterGeometry, fontPx = LABEL_PX): PlacedLabel[] {
  const named = points
    .filter((p) => p.label)
    .map((p) => ({ text: p.label!, dot: { x: g.px(p.x), y: g.py(p.y) } }))
    .sort((a, b) => a.dot.y - b.dot.y);
  if (!named.length) return [];
  const right = Math.min(...named.map((n) => n.dot.x)) - LABEL_OFFSET;
  const advance = (LABEL_ADVANCE / LABEL_PX) * fontPx;
  return named.map((n, i) => {
    const y = g.m.top + fontPx / 2 + i * (fontPx + LABEL_GAP);
    const w = n.text.length * advance;
    return { ...n, x: right, y, box: { x0: right - w, x1: right, y0: y - fontPx / 2, y1: y + fontPx / 2 } };
  });
}
