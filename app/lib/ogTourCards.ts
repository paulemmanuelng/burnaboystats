import { FIG, type StripBar } from "./og-figure";
import { plural } from "./plural";
import { festivals, tours } from "../data/tours";

/**
 * The tours and festivals previews, as data (Job 6 · J6-4, fixes 124 and
 * 131), apart from the routes so the guards can read them.
 *
 * Tours (fix 124):
 * His top tour gross is the figure. Beside it, every tour in date order,
 * oldest first: a bar where a gross is reported, at its share of the top one,
 * and a hairline where none is ("not reported" — never an estimate). Bars are
 * the neutral --other; only the record tour is gold (fix 4). Each column is
 * labelled with the year it started.
 */

/** The strip's height and the room between its columns, in px. */
export const TOURS_STRIP = { height: 200, gap: 12 } as const;

/** "$30.46M" → 30.46: the site's one reading of a gross (lib/homeData.ts topTour). */
const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
/** "2025–26" → 2025. */
const startYear = (years: string) => Number.parseInt(years, 10);

export interface TourColumn extends StripBar {
  name: string;
  /** The year it started, and short, as the column is labelled: "’18". */
  year: number;
  label: string;
  gross: string | null;
  record: boolean;
}

export interface ToursCard {
  figure: string;
  label: string;
  columns: TourColumn[];
  /** The key to the hairlines, when any tour has no gross. */
  legend: string | null;
}

export function toursCard(): ToursCard {
  const top = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];
  const max = grossOf(top.gross);
  const columns = [...tours]
    .sort((a, b) => startYear(a.years) - startYear(b.years))
    .map((t) => ({
      name: t.name,
      year: startYear(t.years),
      label: `’${String(startYear(t.years)).slice(-2)}`,
      gross: t.gross ?? null,
      record: !!t.record,
      share: t.gross && max > 0 ? grossOf(t.gross) / max : 0,
      color: !t.gross ? FIG.muted : t.record ? FIG.gold : FIG.other,
    }));
  return {
    figure: top.gross ?? "—",
    label: "top tour gross",
    columns,
    legend: columns.some((c) => !c.gross) ? "— not reported" : null,
  };
}

/** The tours card's alt: its figure, then every column, oldest first, by the
 *  year it is labelled with (PV-07, live debug 15 Oct 2026). */
export const toursCardAlt = (c: ToursCard) =>
  `Burna Boy Tours & Live: ${c.figure} ${c.label}; ${c.columns.length} tours by start year: ${c.columns
    .map((col) => `${col.year} ${col.gross ?? "not reported"}`)
    .join(", ")}`;

/** Every string the tours card prints, and what each column draws. */
export const toursCardTexts = (c: ToursCard) => [
  c.figure,
  c.label,
  ...c.columns.map((col) => [col.label, col.gross ?? "not reported", col.record ? "record" : ""].join(" ").trim()),
  ...(c.legend ? [c.legend] : []),
];

// ── Festivals (fix 131) ─────────────────────────────────────────────────

/**
 * The festivals he headlined: the count is the figure. Beside it, one bar per
 * year from the first festival year to the latest, each its year's count of
 * headline slots; a year with none is a hairline, so the gap reads as a year.
 * Bars are the neutral --other, gold only on the latest year; only the two
 * end years are labelled (a column is too narrow for a 28px year each).
 */
export const FESTIVALS_STRIP = { height: 200, gap: 8 } as const;

export interface FestivalYear extends StripBar {
  year: number;
  count: number;
}

export interface FestivalsCard {
  figure: string;
  label: string;
  years: FestivalYear[];
  /** The first and the latest year. */
  ends: [string, string];
}

export function festivalsCard(): FestivalsCard {
  const played = festivals.map((f) => Number(f.year));
  const first = Math.min(...played);
  const last = Math.max(...played);
  const count = (y: number) => played.filter((p) => p === y).length;
  const span = Array.from({ length: last - first + 1 }, (_, i) => first + i);
  const most = Math.max(...span.map(count));
  return {
    figure: festivals.length.toLocaleString("en-US"),
    label: plural(festivals.length, "festival headlined", "festivals headlined"),
    years: span.map((year) => ({ year, count: count(year), share: count(year) / most, color: year === last ? FIG.gold : FIG.other })),
    ends: [String(first), String(last)],
  };
}

/** The festivals card's alt: its figure, the years its bars span, and the
 *  latest year's count, the gold bar (PV-07, live debug 15 Oct 2026). */
export const festivalsCardAlt = (c: FestivalsCard) => {
  const latest = c.years[c.years.length - 1];
  return `Burna Boy Festivals & Shows: ${c.figure} ${c.label}, one bar a year from ${c.ends[0]} to ${c.ends[1]}; ${latest.count} in ${latest.year}`;
};

/** Every string the festivals card prints, and each year's count it draws. */
export const festivalsCardTexts = (c: FestivalsCard) => [c.figure, c.label, ...c.ends, c.years.map((y) => `${y.year}:${y.count}`).join(" ")];
