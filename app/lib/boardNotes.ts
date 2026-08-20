// The one-line notes under the two board buttons on the certifications screen.
//
// A button that says "Chart peaks" does not say WHOSE charts, and the answer
// differs sharply across this board: Seyi Vibez's peaks are one register deep,
// Tyla's run to fifty. Naming the biggest body and admitting there are others
// tells a reader what they are about to open.
//
// Both notes are derived. The body named is the one carrying the most of that
// artist's entries, and "and more" only appears when there actually are more —
// Seyi Vibez charts in exactly one register, and the note has to say so.

/**
 * "TurnTable and more", or just "TurnTable" when that is the whole of it.
 *
 * The parenthetical is dropped: the data calls Nigeria's register "TurnTable
 * (TCSN)" because the chart pages need the disambiguation, but an eleven-pixel
 * italic aside under a button does not — it wants the name people use.
 */
export function andMore(top: string | undefined, total: number): string | undefined {
  if (!top || total === 0) return undefined;
  const name = top.replace(/\s*\([^)]*\)\s*$/, "").trim();
  return total > 1 ? `${name} and more` : name;
}

/**
 * The chart body carrying the most entries, and how many distinct bodies there
 * are. Counts by BODY rather than by country, because several countries share
 * one — Billboard covers the US and Canada — and a reader counts registers.
 */
export function topBody(
  entries: { c: string }[],
  bodyOf: (code: string) => string
): { top?: string; total: number } {
  const tally = new Map<string, number>();
  for (const e of entries) {
    const body = bodyOf(e.c);
    if (!body) continue;
    tally.set(body, (tally.get(body) ?? 0) + 1);
  }
  if (tally.size === 0) return { total: 0 };
  // Ties break alphabetically so the note is stable between builds rather than
  // flipping with map insertion order.
  const top = [...tally.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
  return { top, total: tally.size };
}

/** The platform carrying the most live placements, and how many there are. */
export function topPlatform(
  platforms: { platform: string; placements: number }[]
): { top?: string; total: number } {
  if (platforms.length === 0) return { total: 0 };
  const top = [...platforms].sort(
    (a, b) => b.placements - a.placements || a.platform.localeCompare(b.platform)
  )[0].platform;
  return { top, total: platforms.length };
}
