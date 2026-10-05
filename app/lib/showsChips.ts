/**
 * The chips over the highest-grossing-shows board, on both layouts: All, then
 * Multi-night runs, then the artists (railChips below).
 *
 * Among the artists, Burna Boy first (the page is his), then every other
 * artist by how many nights they hold on the board, most first — derived, so a new artist lands
 * in place rather than after a typed list (debug pass 3 Oct 2026, bo-04: the
 * design's fixed order had left Tiwa Savage, 16 nights, after two one-night
 * artists). Ties keep the order they first appear on the board.
 *
 * Pure: it takes counts, never the board's rows, so the client components that
 * call it bundle no data (tests/tourRevenueServerOnly.test.ts).
 */
import { RUNS_HEADING } from "./multiNightRuns";

export const HIS = "Burna Boy";

/**
 * The rail's "Multi-night runs" chip (the owner, 4 Oct 2026: "take the
 * multi-night runs and put it here … in between All and Burna Boy"). A view of
 * its own, never an artist: a symbol, so no artist's name can ever select it.
 */
export const RUNS_VIEW: unique symbol = Symbol(RUNS_HEADING);

/** What the board shows: every single night (null), one artist's, or the runs. */
export type BoardView = string | null | typeof RUNS_VIEW;

export interface RailChip {
  key: BoardView;
  label: string;
  count: number;
}

/**
 * The rail, in order, on both layouts: All (every single night), then
 * Multi-night runs while there are any (counted in runs, never folded into
 * All's nights), then the artists by chipOrder.
 */
export function railChips(allLabel: string, counts: Record<string, number>, nights: number, runs: number): RailChip[] {
  const all: RailChip = { key: null, label: allLabel, count: nights };
  const run: RailChip = { key: RUNS_VIEW, label: RUNS_HEADING, count: runs };
  const artists = chipOrder(counts).map((a): RailChip => ({ key: a, label: a, count: counts[a] }));
  return runs > 0 ? [all, run, ...artists] : [all, ...artists];
}

/** Burna Boy first, then by nights on the board (most first); ties keep board order. */
export function chipOrder(counts: Record<string, number>): string[] {
  const seen = Object.keys(counts);
  const rest = seen.filter((a) => a !== HIS).sort((a, b) => counts[b] - counts[a] || seen.indexOf(a) - seen.indexOf(b));
  return counts[HIS] ? [HIS, ...rest] : rest;
}

/** Nights per artist, in board order (first appearance). */
export function nightCounts(artists: readonly string[]): Record<string, number> {
  return artists.reduce<Record<string, number>>((acc, a) => {
    acc[a] = (acc[a] ?? 0) + 1;
    return acc;
  }, {});
}

/**
 * The polite live region's words, on both layouts (A-11, 4 Oct 2026: the
 * desktop said "16 of 82 shown" and named nobody while the phone said "16 of
 * 82 shows · Tiwa Savage"): "82 of 82 shows", "16 of 82 shows · Tiwa Savage".
 */
export const shownLine = (shown: number, total: number, artist?: string) =>
  `${shown} of ${total} shows${artist ? ` · ${artist}` : ""}`;

/**
 * A row's scale bar: its gross as a percentage of the No. 1 night's, to two
 * places ("73.67%"). Linear, and always against No. 1 — a filtered board keeps
 * this scale, so one artist's nights read at their true length rather than
 * stretched to fill the column (design §8; S3, Tiwa Savage's sixteen nights).
 */
export const scaleWidth = (gross: number, topGross: number) => `${((100 * gross) / topGross).toFixed(2)}%`;

/** "65.7%" — a 0–1 share to one place. */
export const pct = (share: number) => `${(share * 100).toFixed(1)}%`;
