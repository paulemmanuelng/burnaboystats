import { revenueShows, revenueStands, type RevenueShow, type RevenueStand } from "../data/tourRevenue";
import { performedCountries, CONTINENT_OF, type Continent } from "../data/performedCountries";
import { CHART_COUNTRIES } from "../data/charts";
import { RUNS_HEADING, runTickets } from "./multiNightRuns";
import { pct } from "./showsChips";

/**
 * Box office by country — who leads every country and every continent for
 * reported box office by African artists (/records/tours/revenue/countries).
 *
 * Everything on that page is derived here from the revenue board's own rows,
 * so it follows the board as shows are reported. Two owner rulings (Paul,
 * 3 Oct 2026) shape it:
 *
 *  1. LEADING is the artist's TOTAL reported gross in that country: the sum of
 *     every reported show there, multi-night runs included — summing is fine
 *     for a total, it is only a per-night RANKING a combined figure cannot sit
 *     in. Each artist's BEST SINGLE NIGHT rides alongside, from single shows
 *     only; a run never stands in for one night.
 *  2. AFRICA is shown honestly, as "no reported box office yet", rather than
 *     left out — box-office reporting barely covers venues there.
 *
 * A row's country comes from its flag; the name and region from the tour map's
 * country list (data/performedCountries.ts), and for a country he has never
 * played — the board is every African artist's, not only his — the name from
 * the chart countries (data/charts.ts) — or OUTSIDE_HIS_MAP's own name for a
 * country with no chart entry — and the continent from OUTSIDE_HIS_MAP below. A flag none of those know THROWS: a new country cannot vanish from the
 * page silently, and tests/revenueByCountry.test.ts fails before a build does.
 */

/** "multi-night run(s)" — the board's own heading word (lib/multiNightRuns.ts), in running prose. */
const RUN_MANY = RUNS_HEADING.toLowerCase();
const RUN_ONE = RUN_MANY.replace(/s$/, "");

export const CONTINENT_ORDER: Continent[] = ["Africa", "Europe", "North America", "South America", "Asia", "Oceania"];

/**
 * The continent of a country on the board that is NOT on his tour map — the
 * map's list carries the region of every country he has played, so only the
 * others need one. The name comes from CHART_COUNTRIES when the site charts
 * there; a country with no chart entry carries its own `name` here. Add a line
 * when a show from a new country is reported; the test names the flag that is
 * missing.
 */
const OUTSIDE_HIS_MAP: Record<string, { continent: Continent; name?: string }> = {
  "🇯🇵": { continent: "Asia" }, // Tyla, Ariake Arena, Tokyo (2025)
  "🇸🇬": { continent: "Asia" }, // Tyla, Singapore — reported in PR #403's batch
  "🇵🇭": { continent: "Asia", name: "Philippines" }, // Tyla, Manila — PR #403's batch; no chart entry
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
  const outside = OUTSIDE_HIS_MAP[flag];
  const name = outside?.name ?? charted?.name;
  if (outside && name) return { flag, name, continent: outside.continent };
  throw new Error(
    `revenueByCountry: no country for the flag ${flag} — add it to OUTSIDE_HIS_MAP in app/lib/revenueByCountry.ts` +
      (charted ? "" : " with its name (it has no CHART_COUNTRIES entry)"),
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

/** A multi-night run ("stand" in code) reported as one figure for several nights. */
export interface StandLine {
  venue: string;
  city: string;
  tour: string;
  dates: string;
  shows: number;
  tickets: string;
  revenue: number;
}

/** One artist's reported box office in one place (a country or a continent). */
export interface ArtistTotal {
  artist: string;
  his: boolean;
  /** Every reported gross there, multi-night runs included. */
  total: number;
  /** Nights: one per single show, and every night of a multi-night run. */
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

/**
 * The rows as this page reads them. A row's `source` (where the gross was read)
 * is data only — the page never prints it — so it is left out of the type: the
 * full rows are accepted, nothing here can reach for it, and nothing built here
 * (Night, StandLine) copies it into what the components render.
 */
type ShowIn = Omit<RevenueShow, "source">;
type StandIn = Omit<RevenueStand, "source">;

type Row = { kind: "show"; s: ShowIn } | { kind: "stand"; s: StandIn };

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
      const st = r.s;
      a.stands.push({ venue: st.venue, city: st.city, tour: st.tour, dates: st.dates, shows: st.shows, tickets: st.tickets, revenue: st.revenue });
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
  /** Single shows — the revenue board's own count. */
  singleShows: number;
  /** Multi-night stands, each reported as one figure. */
  standCount: number;
  countryCount: number;
  /** Continents with any reported box office. */
  continentCount: number;
  /** Countries Burna Boy leads. */
  hisLeads: number;
}

export function revenueByCountry(
  shows: readonly ShowIn[] = revenueShows,
  stands: readonly StandIn[] = revenueStands,
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
    singleShows: shows.length,
    standCount: stands.length,
    countryCount: countries.length,
    continentCount: continents.filter((c) => c.countries.length > 0).length,
    hisLeads: countries.filter((c) => c.leader.his).length,
  };
}

/**
 * "$6.15M" — the board's short form; under a million, "$53K" (debug pass
 * 3 Oct 2026, C10: "$0.05M" for Fireboy DML's Metro Theatre night read as
 * fifty thousand only after a second look). A figure that rounds to 1,000K
 * prints as millions.
 */
export const usdM = (n: number) => {
  const k = Math.round(n / 1e3);
  return k < 1000 ? `$${k}K` : `$${(n / 1e6).toFixed(2)}M`;
};
/** "$6,147,209" — the board's full form. */
export const usdFull = (n: number) => `$${n.toLocaleString("en-US")}`;

/**
 * A country's name as a sentence carries it: "the United States", "the United
 * Kingdom", "the Philippines", "Canada" (sw-8, 3 Oct 2026: the tables' labels
 * read "Box office leaders in United States"). The same list as /on-this-day's
 * inCountry (app/lib/onThisDay.ts).
 */
const TAKES_THE = /^(United |Czech Republic$|Netherlands$|Dominican Republic$|Philippines$|Bahamas$)/;
export const countryInSentence = (name: string) => `${TAKES_THE.test(name) ? "the " : ""}${name}`;

/**
 * An id fragment from a name: "North America" → "north-america". An id with a
 * space breaks every aria-labelledby that points at it — the attribute is a
 * space-separated list of ids, so "k-North America" asked for "k-North" and
 * "America", and the section had no name (C1, 3 Oct 2026).
 */
export const idSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** "1 night" / "4 nights" — a multi-night run counts every night it played. */
export const nightsLabel = (n: number) => `${n} ${n === 1 ? "night" : "nights"}`;

/**
 * "82 single shows and 3 multi-night runs (89 nights) in 12 countries on 4
 * continents". The revenue board one click away ranks single shows only, so
 * the split is spelled out rather than calling every night of a run a reported
 * show — those nights were reported only as combined figures. Reader-facing
 * words follow the board's own (lib/multiNightRuns.ts): "multi-night runs",
 * "nights"; the code keeps its "stand" identifiers.
 */
export function summaryLine(b: RevenueByCountry): string {
  const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
  const what =
    b.standCount === 0
      ? plural(b.singleShows, "reported show", "reported shows")
      : `${plural(b.singleShows, "single show", "single shows")} and ${plural(b.standCount, RUN_ONE, RUN_MANY)} (${nightsLabel(b.showCount)})`;
  return `${what} in ${plural(b.countryCount, "country", "countries")} on ${plural(b.continentCount, "continent", "continents")}`;
}

/** A money formatter: usdM ("$15.50M", "$385K") or usdFull ("$15,495,482"). */
export type Money = (n: number) => string;

/**
 * The leader line beside a country's name: the leader's own total against the
 * country's, their share of it and the nights reported there, so the figure
 * beside a name is never the whole country's. One artist alone says so instead
 * of "$0.82M of $0.82M" (review fix 6). The desktop prints full dollars, the
 * phone the short form (one money form a screen, fix 4); the phone drops the
 * closing "reported" (GXCountriesPhone).
 */
export function leaderLine(c: CountryBoard, fmt: Money = usdM, { reported = true }: { reported?: boolean } = {}): string {
  const nights = `${nightsLabel(c.shows)}${reported ? " reported" : ""}`;
  return c.artists.length === 1
    ? `· the only artist reported · ${fmt(c.total)} · ${nights}`
    : `leads · ${fmt(c.leader.total)} of ${fmt(c.total)} · ${pct(c.leader.total / c.total)} · ${nights}`;
}

/** One multi-night run as a row prints it: the marker, its gross, where, and
 *  "{tour} · {dates} · {tickets} tickets over {k} nights" — the board's own
 *  run grammar (lib/multiNightRuns.ts), the tour in the meta. */
export function runParts(st: StandLine, fmt: Money = usdM) {
  return {
    marker: `Run · ${st.shows} nights`,
    gross: fmt(st.revenue),
    place: `${st.venue}, ${st.city}`,
    meta: `${st.tour} · ${st.dates} · ${runTickets(st.tickets, st.shows)}`,
  };
}

/**
 * The note under an artist who has single nights AND runs in a place: the
 * runs are in the total, never in the best night (GXCountriesDesk). Null when
 * there is no best night (the runs stand in the best-night slot themselves)
 * or no run.
 */
export function runsNote(a: ArtistTotal): string | null {
  if (!a.best || a.stands.length === 0) return null;
  const nights = a.stands.reduce((n, s) => n + s.shows, 0);
  return a.stands.length === 1
    ? `Total includes a ${nights}-night run, reported as one figure.`
    : `Total includes ${nights} nights in ${a.stands.length} runs, each reported as one figure.`;
}

/** "Burna Boy’s" / "Wizkid’s" / "Tems’" — the possessive the callout prints. */
const possessive = (name: string) => `${name}${name.endsWith("s") ? "’" : "’s"}`;

/**
 * "Leads on total": where the leader leads on total but someone else holds the
 * biggest single night there, one derived line says so, so the order reads as
 * correct rather than as a bug (design S1, Canada). It names the leader, never
 * "his" (review fix 7). The desktop's long form adds the runs' share and the
 * venue; the phone's is shorter. Null when the leader also has the best night.
 */
export function leadsOnTotal(c: CountryBoard, fmt: Money, form: "desk" | "phone"): string | null {
  const top = c.artists.filter((a) => a.best).sort((a, b) => b.best!.revenue - a.best!.revenue)[0];
  if (!top || top.artist === c.leader.artist) return null;
  const L = c.leader;
  const runs = L.stands.length;
  const runGross = L.stands.reduce((n, s) => n + s.revenue, 0);
  const runWords = `${runs} ${runs === 1 ? "run" : "runs"}`;
  if (form === "desk") {
    const first = runs
      ? `${runWords} ${runs === 1 ? "makes" : "make"} up ${fmt(runGross)} (${pct(runGross / L.total)}) of ${possessive(L.artist)} total. `
      : "";
    return `${first}${top.artist} has the biggest single night here, ${fmt(top.best!.revenue)} at ${top.best!.venue}.`;
  }
  const first = runs ? `${runWords} ${runs === 1 ? "is" : "are"} ${fmt(runGross)} of ${possessive(L.artist)} ${fmt(L.total)}. ` : "";
  return `${first}${top.artist} has the biggest single night, ${fmt(top.best!.revenue)}.`;
}

/** Each artist's share of a country (or continent) total, 0–1. */
export const shareOf = (a: { total: number }, of: { total: number }) => a.total / of.total;

/** His total in a country: 0 where he has no reported night there. */
export const hisTotalIn = (c: { artists: readonly ArtistTotal[] }) => c.artists.find((a) => a.his)?.total ?? 0;

/** The anchor of a country's block — the desktop's, or the phone's ("m-" first). */
export const countryAnchor = (name: string, phone = false) => `${phone ? "m-" : ""}country-${idSlug(name)}`;
/** The anchor of a continent's section: "k-europe" on desktop, "m-europe" on the phone. */
export const continentAnchor = (continent: string, phone = false) => `${phone ? "m" : "k"}-${idSlug(continent)}`;

/**
 * The page's hero figures, all from the board: his summed gross and share,
 * everyone else's, how many other artists, and the continents counted. "Of 6"
 * is CONTINENT_ORDER's length, never typed.
 */
export function heroFigures(b: RevenueByCountry) {
  const hisTotal = b.countries.reduce((n, c) => n + hisTotalIn(c), 0);
  const others = new Set(b.countries.flatMap((c) => c.artists.filter((a) => !a.his).map((a) => a.artist)));
  return {
    hisTotal,
    hisShare: hisTotal / b.grandTotal,
    othersTotal: b.grandTotal - hisTotal,
    otherArtists: others.size,
    continentsAll: CONTINENT_ORDER.length,
  };
}

/**
 * The country ladder: every country by total, the bar's length linear against
 * the largest country (design §8), his part of it, and the leader named for
 * every row — his too, in the same place and ink (review fix 5).
 */
export function ladderRows(b: RevenueByCountry) {
  const max = Math.max(...b.countries.map((c) => c.total));
  return b.countries.map((c, i) => ({
    rank: String(i + 1).padStart(2, "0"),
    flag: c.flag,
    name: c.name,
    leader: c.leader.artist,
    total: c.total,
    /** The bar's length, 0–1 of the largest country. */
    w: c.total / max,
    /** His part of the bar, 0–1 of the country. */
    his: hisTotalIn(c) / c.total,
  }));
}

/** A bar width as CSS: "57.55%". */
export const widthPct = (share: number) => `${(100 * share).toFixed(2)}%`;
