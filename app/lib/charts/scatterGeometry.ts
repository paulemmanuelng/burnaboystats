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
  label?: string; // optional direct label
  labelDx?: number; // nudge label x (px) to dodge collisions
  labelDy?: number; // nudge label y (px); default sits above the dot
  labelAnchor?: "start" | "middle" | "end";
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

/** The desktop chart's margins, in viewBox units (and the phone's, in px). */
export const SCATTER_MARGIN: ScatterMargin = { top: 22, right: 26, bottom: 46, left: 66 };

export function scatterGeometry({
  w,
  h,
  m = SCATTER_MARGIN,
  xMax,
  yMax,
}: {
  w: number;
  h: number;
  m?: ScatterMargin;
  xMax: number;
  yMax: number;
}): ScatterGeometry {
  const px = (v: number) => m.left + (v / xMax) * (w - m.left - m.right);
  const py = (v: number) => h - m.bottom - (v / yMax) * (h - m.top - m.bottom);
  return { w, h, m, px, py };
}
