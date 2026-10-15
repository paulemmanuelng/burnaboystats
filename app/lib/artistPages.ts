import { certCount, chartEntries, type AfroArtist } from "../data/afrobeats";
import { liveBoardFor } from "../data/liveBoards";

/**
 * A board artist's three pages — certifications, official charts, live
 * charts — as the artist switcher's segments (J3-10, design review 8 Oct 2026;
 * fixes 56, 67, 69). Server-side: it reads the board and the hourly live
 * boards, and hands the switchers (ArtistSwitcher, MobileArtistSwitcher)
 * plain props, so the client screens never import the data.
 *
 * - A page the artist does not have (no chart rows, no live board) is left
 *   out, never shown as "0" (fix 67).
 * - A pending artist (registers not yet read) shows the names alone: the site
 *   prints no figure it has not verified.
 * - The counts are the pages' own: certCount, chartEntries and the live
 *   board's placements (read at render, as the hero button it replaces was).
 * - The first segment names certifications, never "plaques" (B-10: no label
 *   calls a certification a plaque); "Certs" is the site's short form where
 *   space is tight (the phone's three equal segments).
 */

export type ArtistPageKey = "certs" | "charts" | "live";

export type ArtistPageSegment = {
  key: ArtistPageKey;
  /** The desktop label. */
  label: string;
  /** The phone label (three equal segments at 320). */
  short: string;
  /** Undefined for a pending artist. */
  count?: number;
  href: string;
  current: boolean;
};

export function artistPageSegments(a: AfroArtist, current: ArtistPageKey): ArtistPageSegment[] {
  const live = liveBoardFor(a.slug);
  const shown = (n: number) => (a.swept ? n : undefined);
  const all: (Omit<ArtistPageSegment, "current"> | null)[] = [
    { key: "certs", label: "Certifications", short: "Certs", count: shown(certCount(a)), href: `/afrobeats/${a.slug}` },
    a.charts.length > 0
      ? { key: "charts", label: "Charts", short: "Charts", count: shown(chartEntries(a)), href: `/afrobeats/${a.slug}/charts` }
      : null,
    live ? { key: "live", label: "Live", short: "Live", count: shown(live.placements), href: `/afrobeats/${a.slug}/live` } : null,
  ];
  return all.filter((s): s is Omit<ArtistPageSegment, "current"> => s !== null).map((s) => ({ ...s, current: s.key === current }));
}
