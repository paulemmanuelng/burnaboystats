/**
 * Round axis ticks (site review 8 Oct 2026, Job 5 · J5-2).
 *
 * `niceTicks(lo, hi)`: evenly spaced ticks whose step is 1, 2, 2.5 or 5 times
 * a power of ten — at most five intervals, the first at or under `lo`, the
 * last at or over `hi`. For the climb's 60.13M: 0 · 20 · 40 · 60 · 80.
 *
 * `decades(min, max)`: every power of ten from the one at or under `min` to
 * the one at or over `max` — a log axis's ticks from the data's own range.
 * Tickets 525–58,973 → 100 · 1k · 10k · 100k; gross $47,221–$6.15M →
 * $10k · $100k · $1M · $10M.
 */

const tidy = (v: number) => Number(v.toPrecision(12));

export function niceTicks(lo: number, hi: number, maxIntervals = 5): number[] {
  if (!(hi > lo)) return [lo];
  const raw = (hi - lo) / maxIntervals;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw * (1 - 1e-12))!;
  const start = Math.floor(lo / step + 1e-9) * step;
  const n = Math.ceil((hi - start) / step - 1e-9);
  return Array.from({ length: n + 1 }, (_, i) => tidy(start + i * step));
}

export function decades(min: number, max: number): number[] {
  if (!(min > 0) || !(max >= min)) throw new Error(`decades: needs 0 < min ≤ max (${min}, ${max})`);
  const lo = Math.floor(Math.log10(min) + 1e-12);
  const hi = Math.ceil(Math.log10(max) - 1e-12);
  return Array.from({ length: Math.max(hi, lo + 1) - lo + 1 }, (_, i) => tidy(10 ** (lo + i)));
}

/** A round axis value, short: 100 · 1k · 10k · 100k · 1M · 10M (· 2.5k). */
export function shortNumber(v: number): string {
  const trim = (n: number) => String(tidy(n));
  if (Math.abs(v) >= 1e9) return `${trim(v / 1e9)}B`;
  if (Math.abs(v) >= 1e6) return `${trim(v / 1e6)}M`;
  if (Math.abs(v) >= 1e3) return `${trim(v / 1e3)}k`;
  return trim(v);
}
