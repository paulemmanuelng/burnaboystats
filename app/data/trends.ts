// Real trend series, sourced from the dated milestones in the Updates feed —
// this powers the sparklines and trend deltas. Nothing here is fabricated; each
// point is a figure that was logged as it happened. Values in millions.
export interface TrendPoint {
  date: string; // ISO
  value: number;
}

// Spotify monthly-listeners peak, July 2026 — the "Dai Dai" World Cup climb.
export const monthlyListenersSeries: TrendPoint[] = [
  { date: "2026-07-01", value: 47.38 },
  { date: "2026-07-03", value: 47.87 },
  { date: "2026-07-05", value: 50.0 },
  { date: "2026-07-11", value: 52.36 },
  { date: "2026-07-14", value: 52.74 },
  { date: "2026-07-16", value: 52.99 },
  { date: "2026-07-17", value: 53.49 },
  { date: "2026-07-18", value: 53.62 },
  { date: "2026-07-21", value: 54.33 },
  { date: "2026-07-22", value: 55.95 },
];

// Latest change: the most recent point vs the one before it. `abs` is in the
// series' own units; `pct` is the percentage move.
export function latestDelta(series: TrendPoint[]): { abs: number; pct: number } {
  if (series.length < 2) return { abs: 0, pct: 0 };
  const prev = series[series.length - 2].value;
  const curr = series[series.length - 1].value;
  return { abs: curr - prev, pct: prev ? ((curr - prev) / prev) * 100 : 0 };
}

export const monthlyListenersValues = monthlyListenersSeries.map((p) => p.value);
