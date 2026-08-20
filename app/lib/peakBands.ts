// Peak bands — how a chart page answers "how high?" before "where?".
//
// The mobile chart screen used to be a flat list: one row per release, every
// country pill under it, no grouping. Asake's ran to fourteen screens and 1,249
// rows, most of them carrying one or two pills. A reader scrolling that cannot
// answer the only question they arrived with, which is how high this artist has
// actually been.
//
// Banding by peak answers it in four lines. The bands are the site's existing
// chart-peak vocabulary, and their colours are the ones already in use — gold
// for a No. 1, cyan for a Top 10, silver for a Top 40, muted beyond. Those
// carry meaning elsewhere on the site, so they are not re-picked here.

export type BandName = "No. 1" | "Top 10" | "Top 40" | "Beyond";

export const BAND_ORDER: BandName[] = ["No. 1", "Top 10", "Top 40", "Beyond"];

/** The CSS custom property each band paints with. */
export const BAND_INK: Record<BandName, string> = {
  "No. 1": "var(--gold)",
  "Top 10": "var(--cyan)",
  "Top 40": "var(--silver)",
  Beyond: "var(--text-muted)",
};

export const bandOf = (peak: number): BandName =>
  peak === 1 ? "No. 1" : peak <= 10 ? "Top 10" : peak <= 40 ? "Top 40" : "Beyond";

export interface BandRow {
  /** The release the peak belongs to. */
  title: string;
  /** Country code, so the caller can resolve a flag and a chart name. */
  country: string;
  peak: number;
  cover?: string;
}

export interface Band {
  name: BandName;
  ink: string;
  rows: BandRow[];
  /** How many distinct releases are in this band — a band can hold one release
   *  charting in twenty countries, or twenty releases charting in one. */
  releases: number;
}

/**
 * Group every charting entry into its band, highest first, and each band's rows
 * by peak then title so the best result in a band leads it.
 *
 * A band with nothing in it is still returned. "Zero is stated" — a chart page
 * that silently drops the No. 1 band reads as though the question was never
 * asked, when the answer is that there are none.
 */
export function bandsOf(
  releases: { title: string; cover?: string; entries: { c: string; peak: number }[] }[]
): Band[] {
  const buckets = new Map<BandName, BandRow[]>(BAND_ORDER.map((b) => [b, []]));

  for (const r of releases) {
    for (const e of r.entries) {
      buckets.get(bandOf(e.peak))!.push({
        title: r.title,
        country: e.c,
        peak: e.peak,
        cover: r.cover,
      });
    }
  }

  return BAND_ORDER.map((name) => {
    const rows = buckets
      .get(name)!
      .sort((a, b) => a.peak - b.peak || a.title.localeCompare(b.title));
    return {
      name,
      ink: BAND_INK[name],
      rows,
      releases: new Set(rows.map((r) => r.title)).size,
    };
  });
}
