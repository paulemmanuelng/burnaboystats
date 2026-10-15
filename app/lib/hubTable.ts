/**
 * The /afrobeats board as a table (site review 8 Oct 2026, Job 5 · J5-4, fixes
 * 102 and 117): its rows, its sortable columns and its joint ranks. Pure — no
 * data import — so the client view (HubBoardView) can re-sort and re-rank the
 * rows the server built (lib/hubRows) without pulling the data into the
 * browser bundle.
 */

export interface HubRow {
  slug: string;
  name: string;
  flag: string;
  /** /afrobeats/{slug}; his is the ledger (BURNA.href). */
  href: string;
  hook: string;
  his: boolean;
  certs: number;
  countries: number;
  /** "5× Platinum" and its country code; null when every plaque is a label's
   *  (the tile prints its dashed "top cert" slot). */
  topCert: { label: string; code: string } | null;
  chartEntries: number;
  no1s: number;
  live: number;
  /** The most certifications in any one country (the "Deepest at home" list). */
  mostInOneCountry: number;
}

/** The columns a reader can rank the board by. */
export type HubSortKey = "certs" | "countries" | "chartEntries" | "no1s" | "live";

/** The eight heads, exactly (fix 102); `sort` where the column re-ranks. */
export const HUB_COLUMNS: { head: string; sort?: HubSortKey }[] = [
  { head: "Rank" },
  { head: "Artist" },
  { head: "Certs", sort: "certs" },
  { head: "Countries", sort: "countries" },
  { head: "Top cert" },
  { head: "Chart entries", sort: "chartEntries" },
  { head: "No. 1s", sort: "no1s" },
  { head: "Live now", sort: "live" },
];

/** What "Ranked by …" says for each column. */
export const SORT_WORDS: Record<HubSortKey, string> = {
  certs: "certifications",
  countries: "countries",
  chartEntries: "chart entries",
  no1s: "No. 1s",
  live: "live placements",
};

/** The caption over the board: the cards (ranked by certifications), the
 *  table at rest, and the table re-sorted (C-16: no glyph in prose). */
export function hubCaption(view: "cards" | "table", key: HubSortKey): string {
  if (view === "cards") return `Ranked by ${SORT_WORDS.certs}`;
  if (key === "certs") return `Ranked by ${SORT_WORDS.certs} · tap a column to re-sort`;
  return `Ranked by ${SORT_WORDS[key]} · tap Certs to return`;
}

export interface RankedRow<T> {
  row: T;
  /** Competition rank: 1, 2, 2, 4 … */
  rank: number;
  /** Shared with another row: printed "=n" on every tied row. */
  joint: boolean;
}

/**
 * The rows highest first on `value`, each with its competition rank: tied
 * rows share a rank and print "=n", and the next rank skips past them. Equal
 * values keep the board's order (certifications, then name), so a tie never
 * falls to insertion order.
 */
export function rankBy<T>(rows: readonly T[], value: (r: T) => number, tieBreak: (a: T, b: T) => number = () => 0): RankedRow<T>[] {
  const sorted = [...rows].sort((a, b) => value(b) - value(a) || tieBreak(a, b));
  const count = new Map<number, number>();
  for (const r of sorted) count.set(value(r), (count.get(value(r)) ?? 0) + 1);
  let rank = 0;
  return sorted.map((row, i) => {
    if (i === 0 || value(row) !== value(sorted[i - 1])) rank = i + 1;
    return { row, rank, joint: (count.get(value(row)) ?? 0) > 1 };
  });
}

/** The board's own tie-break: more certifications first, then the name. */
export const boardOrder = (a: HubRow, b: HubRow) => b.certs - a.certs || a.name.localeCompare(b.name, "en");

export const rankRows = (rows: readonly HubRow[], key: HubSortKey): RankedRow<HubRow>[] =>
  rankBy(rows, (r) => r[key], boardOrder);

/** "1", "=3". */
export const rankLabel = (r: { rank: number; joint: boolean }) => `${r.joint ? "=" : ""}${r.rank}`;
