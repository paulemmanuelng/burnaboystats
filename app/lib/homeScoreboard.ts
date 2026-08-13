import { numberOnes, chartCountryCount } from "../data/charts";
import { totalAwards, countryCount as certCountryCount } from "../data/certifications";
import { albums as studioAlbums } from "../data/albums";
import { countryCount as playedCount, regionCount } from "../data/performedCountries";
import { tours } from "../data/tours";

/**
 * The five homepage scoreboard figures.
 *
 * Every value is computed from app/data/*.ts — none is typed. The design brief
 * is explicit about this, and for good reason: an early draft of the designs
 * carried invented totals (331 chart entries, 48 No. 1s) that contradicted the
 * data. A hardcoded figure here would go stale the next time the stats bot runs.
 */
import type { GlyphKind } from "../components/StatGlyph";

export interface ScoreboardStat {
  glyph: GlyphKind;
  value: string;
  label: string;
  source: string;
  href: string;
}

const years = studioAlbums.map((a) => a.year);

// The tour grosses are display strings ("$30.46M"), so rank on the parsed
// number rather than the string — "$9M" sorts above "$30.46M" alphabetically.
const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
const topTour = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];

export const homeScoreboard: ScoreboardStat[] = [
  {
    value: String(totalAwards()),
    label: "Certifications",
    glyph: "certs",
    source: `${certCountryCount} countries`,
    href: "/certifications",
  },
  {
    value: String(numberOnes),
    label: "No. 1s worldwide",
    glyph: "no1s",
    source: `${chartCountryCount} countries`,
    href: "/records/charts",
  },
  {
    value: String(studioAlbums.length),
    label: "Studio albums",
    glyph: "albums",
    source: `${Math.min(...years)} — ${Math.max(...years)}`,
    href: "/music",
  },
  {
    value: String(playedCount),
    label: "Countries performed in",
    glyph: "countries",
    source: `${regionCount} regions`,
    href: "/records/tours",
  },
  {
    value: topTour?.gross ?? "—",
    label: "Highest tour gross",
    glyph: "tour",
    source: "Billboard Boxscore",
    href: "/records/tours/revenue",
  },
];
