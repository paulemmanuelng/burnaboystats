import { revenueShows, revenueStands, type RevenueShow, type RevenueStand } from "../data/tourRevenue";
import { performedCountries, CONTINENT_OF, type Continent } from "../data/performedCountries";
import { CHART_COUNTRIES } from "../data/charts";

/**
 * Box office by country — who leads every country and every continent for
 * reported box office by African artists (/records/tours/revenue/countries).
 *
 * Everything on that page is derived here from the revenue board's own rows,
 * so it follows the board as shows are reported. Two owner rulings (Paul,
 * 3 Oct 2026) shape it:
 *
 *  1. LEADING is the artist's TOTAL reported gross in that country: the sum of
 *     every reported show there, multi-night stands included — summing is fine
 *     for a total, it is only a per-night RANKING a combined figure cannot sit
 *     in. Each artist's BEST SINGLE NIGHT rides alongside, from single shows
 *     only; a stand never stands in for one night.
 *  2. AFRICA is shown honestly, as "no reported box office yet", rather than
 *     left out — box-office reporting barely covers venues there.
 *
 * A row's country comes from its flag; the name and region from the tour map's
 * country list (data/performedCountries.ts), and for a country he has never
 * played — the board is every African artist's, not only his — the name from
 * the chart countries (data/charts.ts) and the continent from OUTSIDE_HIS_MAP
 * below. A flag none of those know THROWS: a new country cannot vanish from the
 * page silently, and tests/revenueByCountry.test.ts fails before a build does.
 */

export const CONTINENT_ORDER: Continent[] = ["Africa", "Europe", "North America", "South America", "Asia", "Oceania"];

/**
 * The continent of a country on the board that is NOT on his tour map — the
 * map's list carries the region of every country he has played, so only the
 * others need one. Add a line here when a show from a new country is reported;
 * the test names the flag that is missing.
 */
const OUTSIDE_HIS_MAP: Record<string, Continent> = {
  "🇯🇵": "Asia", // Tyla, Ariake Arena, Tokyo (2025)
};

export interface CountryRef {
  flag: string;
  name: string;
  continent: Continent;
}

/** "🇬🇧" → its country, name and continent. Throws on a flag nobody knows. */
export function countryOfFlag(flag: string): CountryRef {
  const played = performedCountries.find((c) => c.flag === flag);
  if (played) return { flag, name: played.name, continent: CONTINENT_OF[played.region] };
  const charted = Object.values(CHART_COUNTRIES).find((c) => c.flag === flag);
  const continent = OUTSIDE_HIS_MAP[flag];
  if (charted && continent) return { flag, name: charted.name, continent };
  throw new Error(
    `revenueByCountry: no country for the flag ${flag} — add it to OUTSIDE_HIS_MAP in app/lib/revenueByCountry.ts` +
      (charted ? "" : " (and its name to CHART_COUNTRIES, or to the tour map if he has played there)"),
  );
}

/** One single night, as the best-night line prints it. */
export interface Night {
  venue: string;
  city: string;
  year: string;
  revenue: number;
  tickets?: string;
}

/** A stand reported as one figure for several nights. */
export interface StandLine {
  venue: string;
  city: string;
  dates: string;
  shows: number;
  revenue: number;
}

/** One artist's reported box office in one place (a country or a continent). */
export interface ArtistTotal {
  artist: string;
  his: boolean;
  /** Every reported gross there, stands included. */
  total: number;
  /** Nights: one per single show, and every night of a stand. */
  shows: number;
  /** The best SINGLE night there; null when every reported night was in a stand. */
  best: Night | null;
  /** Stands there, reported as one figure for the run. */
  stands: StandLine[];
}

export interface CountryBoard extends CountryRef {
  total: number;
  shows: number;
  /** Every artist reported there, ranked: total, then best night, then name. */
  artists: ArtistTotal[];
  leader: ArtistTotal;
}

export interface ContinentBoard {
  continent: Continent;
  total: number;
  shows: number;
  /** Ranked by total gross. Empty for a continent with no reported box office. */
  countries: CountryBoard[];
  /** Every artist reported on the continent, ranked as a country's are. */
  artists: ArtistTotal[];
  leader: ArtistTotal | null;
}

const HIM = "Burna Boy";

/** Total, then the better single night, then the name — never input order. */
export const rankArtists = (a: ArtistTotal, b: ArtistTotal) =>
  b.total - a.total || (b.best?.revenue ?? 0) - (a.best?.revenue ?? 0) || a.artist.localeCompare(b.artist);

type Row = { kind: "show"; s: RevenueShow } | { kind: "stand"; s: RevenueStand };

function totals(rows: Row[]): ArtistTotal[] {
  const by = new Map<string, ArtistTotal>();
  for (const r of rows) {
    const a =
      by.get(r.s.artist) ??
      { artist: r.s.artist, his: r.s.artist === HIM, total: 0, shows: 0, best: null, stands: [] };
    by.set(r.s.artist, a);
    a.total += r.s.revenue;
    if (r.kind === "show") {
      a.shows += 1;
      const s = r.s;
      if (!a.best || s.revenue > a.best.revenue)
        a.best = { venue: s.venue, city: s.city, year: s.year, revenue: s.revenue, tickets: s.tickets };
    } else {
      a.shows += r.s.shows;
      a.stands.push({ venue: r.s.venue, city: r.s.city, dates: r.s.dates, shows: r.s.shows, revenue: r.s.revenue });
    }
  }
  return [...by.values()].sort(rankArtists);
}

export interface RevenueByCountry {
  countries: CountryBoard[];
  /** All six, those with box office first by total, the empty ones after. */
  continents: ContinentBoard[];
  grandTotal: number;
  /** Nights, stands counted night by night. */
  showCount: number;
  countryCount: number;
  /** Continents with any reported box office. */
  continentCount: number;
  /** Countries Burna Boy leads. */
  hisLeads: number;
}

export function revenueByCountry(
  shows: RevenueShow[] = revenueShows,
  stands: RevenueStand[] = revenueStands,
): RevenueByCountry {
  const rows: Row[] = [
    ...shows.map((s) => ({ kind: "show" as const, s })),
    ...stands.map((s) => ({ kind: "stand" as const, s })),
  ];

  const byFlag = new Map<string, Row[]>();
  for (const r of rows) byFlag.set(r.s.flag, [...(byFlag.get(r.s.flag) ?? []), r]);

  const countries: CountryBoard[] = [...byFlag.entries()]
    .map(([flag, rs]) => {
      const artists = totals(rs);
      return {
        ...countryOfFlag(flag),
        total: artists.reduce((n, a) => n + a.total, 0),
        shows: artists.reduce((n, a) => n + a.shows, 0),
        artists,
        leader: artists[0],
      };
    })
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));

  const continents: ContinentBoard[] = CONTINENT_ORDER.map((continent) => {
    const cs = countries.filter((c) => c.continent === continent);
    const artists = totals(rows.filter((r) => cs.some((c) => c.flag === r.s.flag)));
    return {
      continent,
      total: cs.reduce((n, c) => n + c.total, 0),
      shows: cs.reduce((n, c) => n + c.shows, 0),
      countries: cs,
      artists,
      leader: artists[0] ?? null,
    };
  }).sort((a, b) => b.total - a.total || CONTINENT_ORDER.indexOf(a.continent) - CONTINENT_ORDER.indexOf(b.continent));

  return {
    countries,
    continents,
    grandTotal: countries.reduce((n, c) => n + c.total, 0),
    showCount: countries.reduce((n, c) => n + c.shows, 0),
    countryCount: countries.length,
    continentCount: continents.filter((c) => c.countries.length > 0).length,
    hisLeads: countries.filter((c) => c.leader.his).length,
  };
}

/** "$6.15M" — the board's short form. */
export const usdM = (n: number) => `$${(n / 1e6).toFixed(2)}M`;
/** "$6,147,209" — the board's full form. */
export const usdFull = (n: number) => `$${n.toLocaleString("en-US")}`;

/** "1 show" / "4 shows". */
export const showsLabel = (n: number) => `${n} ${n === 1 ? "show" : "shows"}`;

/**
 * The best-night line for one artist in one place. A stand never stands in for
 * a night: an artist whose only reported box office there is a stand says the
 * nights were reported together, with the run's own figures.
 */
export function bestNightLine(a: ArtistTotal): string {
  if (a.best) return `Best night ${usdM(a.best.revenue)} · ${a.best.venue}, ${a.best.city} (${a.best.year})`;
  const st = a.stands[0];
  return a.stands.length === 1
    ? `${st.shows} nights reported together · ${st.venue}, ${st.city} (${st.dates})`
    : `${a.stands.reduce((n, s) => n + s.shows, 0)} nights in ${a.stands.length} stands, each reported together — no single-night gross`;
}

/** The note for a stand beside a best night — the run is in the total, not the best night. */
export function standNote(a: ArtistTotal): string | null {
  if (!a.best || a.stands.length === 0) return null;
  const nights = a.stands.reduce((n, s) => n + s.shows, 0);
  return a.stands.length === 1
    ? `Total includes a ${nights}-night stand at ${a.stands[0].venue} reported as one figure`
    : `Total includes ${a.stands.length} stands (${nights} nights) each reported as one figure`;
}
