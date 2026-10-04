import { revenueShows, type RevenueShow } from "../data/tourRevenue";
import { HIS } from "./showsChips";

/**
 * Highest-grossing shows (/records/tours/revenue) — the figures the page's
 * hero, share bar and scale bars print, derived from the board's own rows
 * (app/data/tourRevenue.ts) so they follow it as nights are reported.
 *
 * The sibling of revenueByCountry.ts for the per-night board: the design
 * (Claude Design round 1, 4 Oct 2026, Job 2) computed these in its canvas
 * script, bo-derive.js; that script is never ported — every figure is derived
 * here and held by tests/grossShowsDesign.test.tsx.
 *
 * Server only: it imports the board's rows, `source` notes and all, so a
 * client component never imports it (tests/tourRevenueServerOnly.test.ts).
 * The page hands its results to the client board as plain props.
 */

export { HIS };

/** One artist's part of the board: their nights and their summed gross. */
export interface ArtistShare {
  artist: string;
  his: boolean;
  /** Nights of theirs on the board. */
  count: number;
  /** Their nights' grosses, summed. */
  gross: number;
  /** gross ÷ the board's gross, 0–1. */
  share: number;
}

export interface ShowsBoard {
  /** No. 1 — the record night. */
  top: RevenueShow & { his: boolean };
  /** The last row — the smallest night on the board. */
  last: RevenueShow;
  /** Single nights on the board. */
  count: number;
  /** His nights on the board. */
  hisCount: number;
  /** His nights among the top ten. */
  hisTop10: number;
  /** Every night's gross, summed. */
  boardGross: number;
  hisGross: number;
  /** hisGross ÷ boardGross, 0–1. */
  hisShare: number;
  /** Nights of $1M or more. */
  millionPlus: number;
  /** Top night ÷ smallest, rounded: "130×". */
  spread: number;
  /** Every artist on the board, largest summed gross first (ties: most nights, then name). */
  artists: ArtistShare[];
}

/** The board's figures, from its rows (the live board unless rows are passed). */
export function showsBoard(rows: readonly RevenueShow[] = revenueShows): ShowsBoard {
  if (rows.length === 0) throw new Error("showsBoard: the board has no rows");
  const sorted = [...rows].sort((a, b) => b.revenue - a.revenue);
  const sum = (xs: readonly RevenueShow[]) => xs.reduce((t, s) => t + s.revenue, 0);
  const boardGross = sum(sorted);
  const his = sorted.filter((s) => s.artist === HIS);
  const hisGross = sum(his);

  const by = new Map<string, ArtistShare>();
  for (const s of sorted) {
    const a = by.get(s.artist) ?? { artist: s.artist, his: s.artist === HIS, count: 0, gross: 0, share: 0 };
    a.count += 1;
    a.gross += s.revenue;
    by.set(s.artist, a);
  }
  const artists = [...by.values()]
    .map((a) => ({ ...a, share: a.gross / boardGross }))
    .sort((a, b) => b.gross - a.gross || b.count - a.count || a.artist.localeCompare(b.artist));

  const top = sorted[0];
  const last = sorted[sorted.length - 1];
  return {
    top: { ...top, his: top.artist === HIS },
    last,
    count: sorted.length,
    hisCount: his.length,
    hisTop10: sorted.slice(0, 10).filter((s) => s.artist === HIS).length,
    boardGross,
    hisGross,
    hisShare: hisGross / boardGross,
    millionPlus: sorted.filter((s) => s.revenue >= 1e6).length,
    spread: Math.round(top.revenue / last.revenue),
    artists,
  };
}

// Pure formatters shared with the client boards, which cannot import this file.
export { pct, scaleWidth } from "./showsChips";
