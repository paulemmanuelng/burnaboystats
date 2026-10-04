/**
 * The artist chips over the highest-grossing-shows board, on both layouts.
 *
 * Burna Boy first (the page is his), then every other artist by how many
 * nights they hold on the board, most first — derived, so a new artist lands
 * in place rather than after a typed list (debug pass 3 Oct 2026, bo-04: the
 * design's fixed order had left Tiwa Savage, 16 nights, after two one-night
 * artists). Ties keep the order they first appear on the board.
 *
 * Pure: it takes counts, never the board's rows, so the client components that
 * call it bundle no data (tests/tourRevenueServerOnly.test.ts).
 */
export const HIS = "Burna Boy";

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

/** The polite live region's words: "32 of 82 shown". */
export const shownLine = (shown: number, total: number) => `${shown} of ${total} shown`;

/**
 * A row's scale bar: its gross as a percentage of the No. 1 night's, to two
 * places ("73.67%"). Linear, and always against No. 1 — a filtered board keeps
 * this scale, so one artist's nights read at their true length rather than
 * stretched to fill the column (design §8; S3, Tiwa Savage's sixteen nights).
 */
export const scaleWidth = (gross: number, topGross: number) => `${((100 * gross) / topGross).toFixed(2)}%`;

/** "65.7%" — a 0–1 share to one place. */
export const pct = (share: number) => `${(share * 100).toFixed(1)}%`;
