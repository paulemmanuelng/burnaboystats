// ============================================================================
//  THE TOUR MAP'S DATA — every figure on /records/tours/map, derived
// ============================================================================
//
// Server-side only: it reads the tour itineraries, the festival and one-off
// lists, the live moments, the box office, the charts and the certifications,
// which are far too big for a browser bundle. The page hands the components
// the small result below.
//
// THE COUNTING RULES are the design brief's (docs/design/tour-map-and-phone-
// screens/README.md §3.3); research/tour-map-method/card_counts.py is the
// reference implementation, and tests/tourMapData.test.ts reproduces its
// results for the eight cases the design draws and for the headline totals.
//
//  1. Tour dates: one per `tours[].dates` row. One row is one night.
//  2. Festival and one-off appearances: one per festivals / otherShows /
//     concerts row — rows, not nights (FITZ Madrid's two nights count once) —
//     EXCEPT a row that is the same night as a tour date, which counts once,
//     as the tour date.
//  3. Live milestones: a liveMoments row that names a place and repeats no
//     show. On the card, never in the headline "documented shows".
//  4. Cities: distinct names across 1-3, as each record spells them.
//  5. Years: every year in 1-3 plus every year written in the map's own event
//     lines. The documented line shows only where a country has a row in 1-3.
//  6. Biggest line: the country's single night with the most reported
//     tickets; where it has only multi-night stands (Canada), the bigger
//     stand, never split.
//
// Nothing here claims completeness: every count is "documented".
// ============================================================================

import { performedCountries, REGION_ORDER, CONTINENT_OF, type PerformedCountry, type Region } from "../data/performedCountries";
import { tours, festivals, otherShows, concerts } from "../data/tours";
import { liveMoments } from "../data/liveMoments";
import { revenueShows, revenueStands } from "../data/tourRevenue";
import { albumCharts, singleCharts, featureCharts, CHART_COUNTRIES } from "../data/charts";
import { allItems as certifiedReleases } from "../data/certifications";
import { worldShapes } from "../data/worldShapes";
import { A2_TO_ISO } from "./isoCodes";
import { countryBoardLinks, inSentence } from "./certCountry";
import { projectEqualEarth } from "./equalEarth";
import { cardinalWord } from "./plural";

// ── Places the records do not carry as fields ────────────────────────────────

/**
 * Where each festival, one-off and concert row happened. Their `location` is
 * free text ("Muri Okunola Park, Lagos"), so the country and city are read off
 * it here, keyed by the exact string. A new row with a new location fails
 * tests/tourMapData.test.ts until it is placed. `city: null` means the row
 * names no city (it then adds no city to the count). Three rows name the city
 * only in their title: Harare, Kingston and Windhoek. Same table as the
 * brief's research (tour-map-method/derive.py, LOC).
 */
export const ROW_PLACE: Record<string, { country: string; city: string | null }> = {
  "St Kitts & Nevis": { country: "St Kitts & Nevis", city: null },
  "Rabat, Morocco": { country: "Morocco", city: "Rabat" },
  "Helsinki, Finland": { country: "Finland", city: "Helsinki" },
  "Rotterdam, Netherlands": { country: "Netherlands", city: "Rotterdam" },
  "Portimão, Portugal": { country: "Portugal", city: "Portimão" },
  "Miami, US": { country: "United States", city: "Miami" },
  "Detroit, US": { country: "United States", city: "Detroit" },
  "Milton Keynes, UK": { country: "United Kingdom", city: "Milton Keynes" },
  "Accra, Ghana": { country: "Ghana", city: "Accra" },
  "Nairobi, Kenya": { country: "Kenya", city: "Nairobi" },
  "Johannesburg, South Africa": { country: "South Africa", city: "Johannesburg" },
  "Muri Okunola Park, Lagos": { country: "Nigeria", city: "Lagos" },
  "Go Media Stadium, Auckland": { country: "New Zealand", city: "Auckland" },
  "Windsor Park Stadium, Roseau, Dominica": { country: "Dominica", city: "Roseau" },
  "Pristina, Kosovo": { country: "Kosovo", city: "Pristina" },
  "Abidjan, Côte d'Ivoire": { country: "Côte d'Ivoire", city: "Abidjan" },
  "Grand Théâtre, Dakar, Senegal": { country: "Senegal", city: "Dakar" },
  "Roskilde, Denmark": { country: "Denmark", city: "Roskilde" },
  "Plymouth Recreation Ground, Tobago": { country: "Trinidad & Tobago", city: "Plymouth, Tobago" },
  "Athens, Greece": { country: "Greece", city: "Athens" },
  "Tribeca Mall, Mauritius": { country: "Mauritius", city: null },
  "O Beach Ibiza, San Antonio, Spain": { country: "Spain", city: "San Antonio, Ibiza" },
  "Bois de Vincennes, Paris, France": { country: "France", city: "Paris" },
  "Fühlinger See, Cologne, Germany": { country: "Germany", city: "Cologne" },
  "Bern, Switzerland": { country: "Switzerland", city: "Bern" },
  "Nyon, Switzerland": { country: "Switzerland", city: "Nyon" },
  "Olympiastadion & Olympiapark, Berlin, Germany": { country: "Germany", city: "Berlin" },
  "Fort Charlotte, Nassau, Bahamas": { country: "Bahamas", city: "Nassau" },
  "Indio, USA": { country: "United States", city: "Indio" },
  "New York, USA": { country: "United States", city: "New York" },
  "Worthy Farm, UK": { country: "United Kingdom", city: null },
  "London, UK": { country: "United Kingdom", city: "London" },
  "São Paulo, Brazil": { country: "Brazil", city: "São Paulo" },
  "Dubai, UAE": { country: "United Arab Emirates", city: "Dubai" },
  "Cluj-Napoca, Romania": { country: "Romania", city: "Cluj-Napoca" },
  "Munich, Germany": { country: "Germany", city: "Munich" },
  "Lisbon, Portugal": { country: "Portugal", city: "Lisbon" },
  "Stavern, Norway": { country: "Norway", city: "Stavern" },
  "New Orleans, USA": { country: "United States", city: "New Orleans" },
  "El Gouna Conference & Cultural Center, Egypt": { country: "Egypt", city: "El Gouna" },
  "Belgravia Sports Club, Zimbabwe": { country: "Zimbabwe", city: "Harare" },
  "Eko Convention Centre, Lagos": { country: "Nigeria", city: "Lagos" },
  Jamaica: { country: "Jamaica", city: "Kingston" },
  "Sheraton Gardens, Kampala": { country: "Uganda", city: "Kampala" },
  "FITZ, Madrid": { country: "Spain", city: "Madrid" },
  "Atlantico, Rome": { country: "Italy", city: "Rome" },
  "Guyana National Stadium, Providence": { country: "Guyana", city: "Providence" },
  "Intare Conference Arena, Kigali": { country: "Rwanda", city: "Kigali" },
  "Addis Ababa, Ethiopia": { country: "Ethiopia", city: "Addis Ababa" },
  Paramaribo: { country: "Suriname", city: "Paramaribo" },
  "Festival Center Brievengat, Willemstad": { country: "Curaçao", city: "Willemstad" },
  "Independence Stadium, Namibia": { country: "Namibia", city: "Windhoek" },
  "Vigie Playing Field, Castries, Saint Lucia": { country: "Saint Lucia", city: "Castries" },
};

/**
 * Where each live moment happened, read off its own text, and whether it is a
 * show counted above. `null` = the text names no place (the World Cup final's
 * halftime show, the two Grammy stages); `repeats: true` = the same night as a
 * tour date or a festival row (London Stadium, Citi Field, Madison Square
 * Garden, Stade de France, Red Rocks, National Stadium Jamaica), or not a live
 * show at all (One World, a broadcast filmed in Lagos). Six are left, and they
 * are the "live milestones" (rule 3). Same table as tour-map-method/derive.py,
 * LM_PLACE; a new moment fails the test until it is placed here.
 */
export const MOMENT_PLACE: Record<string, { country: string; city: string; repeats: boolean } | null> = {
  "FIFA World Cup Final halftime show": null,
  "FIFA World Cup Opening Ceremony": { country: "Mexico", city: "Mexico City", repeats: false },
  "AFCON 2025 Fan Zone grand finale": { country: "Morocco", city: "Rabat", repeats: false },
  "Stade de France, Paris": { country: "France", city: "Paris", repeats: true },
  "Red Rocks Amphitheatre": { country: "United States", city: "Morrison, CO", repeats: true },
  "England Lionesses' Euro victory parade": { country: "United Kingdom", city: "London", repeats: false },
  "London Stadium — African concert record": { country: "United Kingdom", city: "London", repeats: true },
  "Grammy Awards Stage": null,
  "London Stadium (sold out)": { country: "United Kingdom", city: "London", repeats: true },
  "Citi Field, New York (sold out)": { country: "United States", city: "New York", repeats: true },
  "UEFA Champions League Final": { country: "Turkey", city: "Istanbul", repeats: false },
  "NBA All-Star Game halftime show": { country: "United States", city: "Salt Lake City", repeats: false },
  "Madison Square Garden (sold out)": { country: "United States", city: "New York", repeats: true },
  "Billboard Music Awards": { country: "United States", city: "Las Vegas", repeats: false },
  "National Stadium, Jamaica": { country: "Jamaica", city: "Kingston", repeats: true },
  "Grammy Awards Premiere Ceremony": null,
  "One World: Together at Home": { country: "Nigeria", city: "Lagos", repeats: true },
};

/** The itineraries spell two countries short. */
const COUNTRY_ALIAS: Record<string, string> = { USA: "United States", UK: "United Kingdom" };
const countryName = (s: string) => COUNTRY_ALIAS[s] ?? s;

// ── The three kinds of row ───────────────────────────────────────────────────

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Jun 29, 2024" -> { y: 2024, m: 5, d: 29 } */
const parseTourDate = (s: string) => {
  const m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
  if (!m) throw new Error(`tour date "${s}" is not "Mon D, YYYY"`);
  return { y: Number(m[3]), m: MONTHS.indexOf(m[1]), d: Number(m[2]) };
};
const iso = (p: { y: number; m: number; d: number }) =>
  `${p.y}-${String(p.m + 1).padStart(2, "0")}-${String(p.d).padStart(2, "0")}`;
const shortDate = (p: { y: number; m: number; d: number }) => `${p.d} ${MONTHS[p.m]} ${p.y}`;

interface DatedShow {
  venue: string;
  city: string;
  country: string;
  year: number;
  iso: string;
  short: string;
}
interface Appearance {
  name: string;
  location: string;
  country: string;
  city: string | null;
  year: number;
  date?: string;
}
interface Milestone {
  title: string;
  country: string;
  city: string;
  year: number;
}

const datedShows: DatedShow[] = tours.flatMap((t) =>
  (t.dates ?? []).map((s) => {
    const p = parseTourDate(s.date);
    return { venue: s.venue, city: s.city, country: countryName(s.country), year: p.y, iso: iso(p), short: shortDate(p) };
  }),
);

const allRows = [...festivals, ...otherShows, ...concerts].map((f) => {
  const place = ROW_PLACE[f.location];
  if (!place) throw new Error(`festival/one-off location "${f.location}" has no entry in ROW_PLACE`);
  return { name: f.name, location: f.location, country: place.country, city: place.city, year: Number(f.year), date: f.date };
});

/**
 * The tour date a festival or one-off row repeats, if any (rule 2): same
 * country and year, and the same day, or the same city and venue. Today that
 * is one row: the concerts row "Burna Boy: The Live Experience", Lagos, which
 * is the tour date of 27 Dec 2021.
 */
function repeatsTourDate(f: (typeof allRows)[number]): DatedShow | undefined {
  return datedShows.find((s) => {
    if (s.country !== f.country || s.year !== f.year) return false;
    if (f.date && s.iso === f.date) return true;
    if (!f.city || s.city.split(",")[0] !== f.city.split(",")[0]) return false;
    const title = (f.name.split(":").pop() ?? "").trim().toLowerCase();
    return s.venue.toLowerCase().includes(title) || f.location.toLowerCase().includes(s.venue.split(" (")[0].toLowerCase());
  });
}

const appearances: Appearance[] = allRows.filter((f) => !repeatsTourDate(f));
/** Rows counted once, as the tour date they repeat — for the test to name. */
export const rowsRepeatingATourDate = allRows.filter((f) => repeatsTourDate(f)).map((f) => f.name);

const milestones: Milestone[] = liveMoments.flatMap((m) => {
  if (!(m.title in MOMENT_PLACE)) throw new Error(`live moment "${m.title}" has no entry in MOMENT_PLACE`);
  const place = MOMENT_PLACE[m.title];
  return place && !place.repeats ? [{ title: m.title, country: place.country, city: place.city, year: Number(m.year) }] : [];
});

// ── Box office ───────────────────────────────────────────────────────────────

const ticketsOf = (s: string) => Number(s.replace(/,/g, ""));
const fmt = (n: number) => n.toLocaleString("en-US");
/** A country, found by the flag the box-office rows carry. */
const byFlag = new Map(performedCountries.filter((c) => c.flag).map((c) => [c.flag, c.name]));

const burnaNights = revenueShows
  .filter((r) => r.artist === "Burna Boy" && r.tickets)
  .map((r) => ({ ...r, country: byFlag.get(r.flag) ?? "", n: ticketsOf(r.tickets!), year: Number(r.year) }));
const burnaStands = revenueStands
  .filter((r) => r.artist === "Burna Boy")
  .map((r) => ({ ...r, country: byFlag.get(r.flag) ?? "", n: ticketsOf(r.tickets) }));

/** The date a box-office night was played: its tour date where exactly one
 *  matches the venue and year, else the year alone (rule 6). */
const nightDate = (venue: string, year: number) => {
  const m = datedShows.filter((s) => s.venue.startsWith(venue) && s.year === year);
  return m.length === 1 ? m[0].short : String(year);
};

export interface BiggestLine {
  label: "Biggest reported night" | "Biggest reported multi-night run";
  venue: string;
  city: string;
  when: string;
  tickets: string;
  /** Everything after the label: "London Stadium, London · 29 Jun 2024 · 58,973 tickets". */
  line: string;
}

function biggestFor(country: string): BiggestLine | null {
  const nights = burnaNights.filter((r) => r.country === country);
  if (nights.length) {
    const b = nights.reduce((a, r) => (r.n > a.n ? r : a));
    const when = nightDate(b.venue, b.year);
    return { label: "Biggest reported night", venue: b.venue, city: b.city, when, tickets: fmt(b.n), line: `${b.venue}, ${b.city} · ${when} · ${fmt(b.n)} tickets` };
  }
  const stands = burnaStands.filter((r) => r.country === country);
  if (!stands.length) return null;
  const s = stands.reduce((a, r) => (r.n > a.n ? r : a));
  // "24–25 February 2024" -> "24–25 Feb 2024"
  const when = s.dates.replace(/^(\d+)–(\d+) ([A-Z][a-z]{2})[a-z]* (\d{4})$/, "$1–$2 $3 $4");
  return {
    label: "Biggest reported multi-night run",
    venue: s.venue,
    city: s.city,
    when,
    tickets: fmt(s.n),
    line: `${s.venue}, ${s.city} · ${when} · ${fmt(s.n)} tickets over ${s.shows} nights`,
  };
}

// ── Charts, plaques and boards ───────────────────────────────────────────────

const ISO_TO_A2 = new Map(Object.entries(A2_TO_ISO).map(([a2, n]) => [n, a2]));
const chartEntries = [...albumCharts, ...singleCharts, ...featureCharts].flatMap((r) => r.entries);
const boards = new Map(countryBoardLinks().map((b) => [b.code, b.href]));

/** Best official-chart peak on the chart charts.ts names for the country,
 *  features included (as the site's No. 1s tally counts them). */
function peakFor(a2: string | undefined): { peak: number; chart: string } | null {
  if (!a2 || !CHART_COUNTRIES[a2]) return null;
  const peaks = chartEntries.filter((e) => e.c === a2).map((e) => e.peak);
  return peaks.length ? { peak: Math.min(...peaks), chart: CHART_COUNTRIES[a2].body } : null;
}
const plaquesIn = (a2: string | undefined) =>
  a2 ? certifiedReleases.reduce((n, r) => n + r.certs.filter((c) => c.c === a2).length, 0) : 0;
/** "the UK", "the US", "the Netherlands", "Canada". */
const certName = (a2: string) => (a2 === "UK" ? "the UK" : a2 === "US" ? "the US" : inSentence(a2));

// ── Geometry ─────────────────────────────────────────────────────────────────

export type ViewKey = "world" | "europe" | "africa" | "caribbean";
/** A box in map units (the worldShapes viewBox): x, y, width, height. */
export type Box = [number, number, number, number];

/**
 * A lon/lat box projected the way the Dai Dai Europe box is: its width at the
 * latitude nearest the equator, where Equal Earth is widest; its height from
 * its north and south edges.
 */
function lonLatBox(west: number, east: number, south: number, north: number): Box {
  const near = south <= 0 && north >= 0 ? 0 : Math.abs(south) < Math.abs(north) ? south : north;
  const x0 = projectEqualEarth(west, near).x;
  const x1 = projectEqualEarth(east, near).x;
  const y0 = projectEqualEarth(0, north).y;
  const y1 = projectEqualEarth(0, south).y;
  return [x0, y0, +(x1 - x0).toFixed(1), +(y1 - y0).toFixed(1)];
}

/**
 * The map's views (design response §2): World is the whole map with the
 * Antarctica band cropped (map box y 10 to 415 of 470); the phone's three
 * region views are the response's lon/lat boxes. Europe takes in Turkey whole
 * (the Dai Dai box cuts it in half); Africa takes in Mauritius; the Caribbean
 * view is the islands only (Guyana and Suriname stay on World, where
 * nearest-tap reaches them).
 */
export const VIEWS: Record<ViewKey, Box> = {
  world: [0, 10, 900, 405],
  europe: lonLatBox(-11, 45, 34, 71),
  africa: lonLatBox(-18, 58, -35, 37.5),
  caribbean: lonLatBox(-80, -59, 9.5, 27.5),
};

/**
 * The desktop close-up: only the small-country cluster, Ireland to Kosovo and
 * Denmark to Portugal (map units x 426-501, y 56-118; brief §3.5 D). The UK,
 * France, Germany, Italy and Spain come along.
 */
export const CLOSEUP: Box = [426, 56, 75, 62];

/** Every shape's bounding box, in map units. The paths are M/L/Z only. */
function bboxOf(d: string): Box {
  const n = d.match(/-?\d+(?:\.\d+)?/g)!.map(Number);
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (let i = 0; i + 1 < n.length; i += 2) {
    x0 = Math.min(x0, n[i]); x1 = Math.max(x1, n[i]);
    y0 = Math.min(y0, n[i + 1]); y1 = Math.max(y1, n[i + 1]);
  }
  return [x0, y0, +(x1 - x0).toFixed(1), +(y1 - y0).toFixed(1)];
}
const shapeBox = new Map(worldShapes.map((s) => [s.code, bboxOf(s.d)]));
const meets = (a: Box, b: Box) => a[0] <= b[0] + b[2] && b[0] <= a[0] + a[2] && a[1] <= b[1] + b[3] && b[1] <= a[1] + a[3];

// ── The countries ────────────────────────────────────────────────────────────

const HOME: Partial<Record<Region, ViewKey>> = { Europe: "europe", Africa: "africa", Caribbean: "caribbean" };

/** "🇬🇧" -> "gb": the two regional-indicator letters of a flag emoji. Kosovo
 *  has no flag emoji, so it takes XK, the code every registry uses for it. */
const alpha2Of = (c: PerformedCountry) =>
  c.flag
    ? [...c.flag].map((ch) => String.fromCharCode((ch.codePointAt(0) ?? 0) - 0x1f1e6 + 97)).join("")
    : c.name === "Kosovo"
      ? "xk"
      : "";

const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
const yearsIn = (s: string) => [...s.matchAll(/\b((?:19|20)\d\d)\b/g)].map((m) => Number(m[1]));
const span = (ys: number[]) => {
  if (!ys.length) return "";
  const lo = Math.min(...ys), hi = Math.max(...ys);
  return lo === hi ? String(lo) : `${lo}–${hi}`;
};

export interface CardLink {
  label: string;
  href: string;
  /** "Chart peak here: No. {peak}", with the chart's name under it. */
  peak?: number;
  sub?: string;
}

export interface TourMapCountry {
  /** ISO 3166-1 numeric, the worldShapes id. */
  code: number;
  /** Lower-case alpha-2 for ?country= ("gb", "xk"). */
  a2: string;
  name: string;
  region: Region;
  flag: string;
  /** The map's own hand-written event lines (performedCountries.ts). */
  events: string[];
  /** "10 tour dates · 3 festival and one-off appearances · …", or "" where
   *  the country has no row and is known only from its event lines. */
  documented: string;
  big: BiggestLine | null;
  links: CardLink[];
  home: ViewKey;
  /** The screen-reader line: "Nigeria, Africa: 1 tour date, …, 2016 to 2021." */
  say: string;
  /** Where it is drawn: a shape's box, or a dot's centre. */
  box: Box;
  dot: { x: number; y: number } | null;
  /** In the desktop close-up's box. */
  inCloseup: boolean;
}

function derive(c: PerformedCountry): TourMapCountry {
  const n = c.name;
  const ds = datedShows.filter((s) => s.country === n);
  const fs = appearances.filter((f) => f.country === n);
  const ms = milestones.filter((m) => m.country === n);
  const cities = new Set<string>([...ds.map((s) => s.city), ...fs.flatMap((f) => (f.city ? [f.city] : [])), ...ms.map((m) => m.city)]);
  const years = [...ds.map((s) => s.year), ...fs.map((f) => f.year), ...ms.map((m) => m.year), ...c.events.flatMap(yearsIn)];

  const parts: string[] = [];
  if (ds.length || fs.length || ms.length) {
    if (ds.length) parts.push(count(ds.length, "tour date", "tour dates"));
    if (fs.length) parts.push(count(fs.length, "festival or one-off appearance", "festival and one-off appearances"));
    if (ms.length) parts.push(count(ms.length, "live milestone", "live milestones"));
    if (cities.size) parts.push(count(cities.size, "city", "cities"));
    if (years.length) parts.push(span(years));
  }
  const documented = parts.join(" · ");

  const a2chart = ISO_TO_A2.get(c.code);
  const peak = peakFor(a2chart);
  const plaques = plaquesIn(a2chart);
  const board = a2chart ? boards.get(a2chart) : undefined;
  const links: CardLink[] = [];
  if (ds.length) links.push({ label: "Tour dates on the Tours page", href: "/records/tours" });
  if (fs.length) links.push({ label: "Festivals & shows", href: "/records/tours/festivals" });
  if (plaques > 0 && board && a2chart) links.push({ label: `Certifications in ${certName(a2chart)}`, href: board });
  if (peak) links.push({ label: "Chart peak here:", href: "/records/charts", peak: peak.peak, sub: peak.chart });

  const say = documented
    ? `${n}, ${c.region}: ${documented.replace(/ · /g, ", ").replace(/(\d{4})–(\d{4})/, "$1 to $2")}.`
    : `${n}, ${c.region}: known from ${c.events.map((e) => e.replace(/ \(([^)]*)\)$/, ", $1")).join("; ")}.`;

  const box: Box = c.marker ? [c.marker.x, c.marker.y, 0, 0] : shapeBox.get(c.code)!;
  return {
    code: c.code,
    a2: alpha2Of(c),
    name: n,
    region: c.region,
    flag: c.flag,
    events: c.events,
    documented,
    big: biggestFor(n),
    links,
    home: HOME[c.region] ?? "world",
    say,
    box,
    dot: c.marker ?? null,
    inCloseup: meets(box, CLOSEUP),
  };
}

/** The 57, in the list's order (region, then the data file's order). */
export const tourMapCountries: TourMapCountry[] = REGION_ORDER.flatMap((r) =>
  performedCountries.filter((c) => c.region === r).map(derive),
);

// ── Headline figures ─────────────────────────────────────────────────────────

// The seven regions sit on six continents once the Caribbean folds into North
// America — CONTINENT_OF lives with the regions in data/performedCountries.ts.

const everyYear = [
  ...datedShows.map((s) => s.year),
  ...appearances.map((f) => f.year),
  ...milestones.map((m) => m.year),
  ...performedCountries.flatMap((c) => c.events.flatMap(yearsIn)),
];
const biggestNight = burnaNights.reduce((a, r) => (r.n > a.n ? r : a));
const markers = performedCountries.filter((c) => c.marker);
const regionsDrawn = REGION_ORDER.filter((r) => performedCountries.some((c) => c.region === r));

export const tourMapTotals = {
  countries: performedCountries.length,
  regions: regionsDrawn.length,
  continents: new Set(regionsDrawn.map((r) => CONTINENT_OF[r])).size,
  tourDates: datedShows.length,
  appearances: appearances.length,
  /** Tour dates + festival and one-off appearances (rules 1 and 2). Live
   *  milestones are left out. */
  documentedShows: datedShows.length + appearances.length,
  milestones: milestones.length,
  cities: new Set([
    ...datedShows.map((s) => s.city),
    ...appearances.flatMap((f) => (f.city ? [f.city] : [])),
    ...milestones.map((m) => m.city),
  ]).size,
  years: span(everyYear),
  /** "Tour itineraries on this site start in {year}." */
  itinerariesFrom: Math.min(...datedShows.map((s) => s.year)),
  biggestNight: {
    venue: biggestNight.venue,
    city: biggestNight.city,
    when: nightDate(biggestNight.venue, biggestNight.year),
    tickets: fmt(biggestNight.n),
  },
  /** The dots: shapeless places (six Caribbean islands, Mauritius, Kosovo). */
  dots: markers.length,
  caribbeanDots: markers.filter((c) => c.region === "Caribbean").length,
  otherDotNames: markers.filter((c) => c.region !== "Caribbean").map((c) => c.name),
};

/** Seven, six, eight: the counts the headings and footnote spell. */
export const spell = (n: number) => cardinalWord(n);

// ── The list, and the find box ───────────────────────────────────────────────

export const tourMapRegions = regionsDrawn.map((region) => ({
  region,
  codes: tourMapCountries.filter((c) => c.region === region).map((c) => c.code),
}));

export interface CityEntry {
  city: string;
  country: string;
  /** "5 documented tour dates", in the documented line's strings. */
  line: string;
}

/** Every city named by a tour date, an appearance or a placed milestone, as
 *  spelt, with what is documented there (brief §3.5 G). */
export const tourMapCities: CityEntry[] = (() => {
  const by = new Map<string, { country: string; t: number; a: number; m: number }>();
  const add = (city: string | null, country: string, k: "t" | "a" | "m") => {
    if (!city) return;
    const e = by.get(city) ?? { country, t: 0, a: 0, m: 0 };
    e[k]++;
    by.set(city, e);
  };
  datedShows.forEach((s) => add(s.city, s.country, "t"));
  appearances.forEach((f) => add(f.city, f.country, "a"));
  milestones.forEach((m) => add(m.city, m.country, "m"));
  return [...by.entries()].map(([city, e]) => {
    const segs: string[] = [];
    if (e.t) segs.push(count(e.t, "tour date", "tour dates"));
    if (e.a) segs.push(count(e.a, "festival or one-off appearance", "festival and one-off appearances"));
    if (e.m) segs.push(count(e.m, "live milestone", "live milestones"));
    // "documented" once, after the first number: "5 documented tour dates".
    segs[0] = segs[0].replace(/^(\d+) /, "$1 documented ");
    return { city, country: e.country, line: segs.join(" · ") };
  });
})();

// ── The map's layers ─────────────────────────────────────────────────────────

const playedCodes = new Set(performedCountries.map((c) => c.code));

/** Antarctica (ISO 010): the canvas renderer leaves it out (tour-map.js,
 *  `name !== 'Antarctica'`). Its shape sits wholly below the World box
 *  (map y 423–454; the box ends at 415), and the phone's 260px frame
 *  letterboxes World with preserveAspectRatio meet, so it painted as a band
 *  in the bottom letterbox where the design draws plain sea (§2, item 7). */
export const ANTARCTICA = 10;

/** The static ground: every shape nobody played, one layer (brief §3.7),
 *  less Antarctica. */
export const landCodes = worldShapes.filter((s) => !playedCodes.has(s.code) && s.code !== ANTARCTICA).map((s) => s.code);
/** The land and played shapes the close-up needs: only the ones in its box. */
export const closeupLandCodes = landCodes.filter((code) => meets(shapeBox.get(code)!, CLOSEUP));

// ── What the page hands the two layouts ──────────────────────────────────────

/** Arrow keys run through all 57 in region order, then by name (item 7). */
export const keyboardOrder = [...tourMapCountries]
  .sort((a, b) => REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region) || a.name.localeCompare(b.name))
  .map((c) => c.code);

export type TourMapTotals = typeof tourMapTotals;

export interface TourMapProps {
  countries: TourMapCountry[];
  regions: { region: Region; codes: number[] }[];
  order: number[];
  totals: TourMapTotals;
  cities: CityEntry[];
  land: number[];
  closeupLand: number[];
  views: Record<ViewKey, Box>;
  closeup: Box;
}

export const tourMapProps: TourMapProps = {
  countries: tourMapCountries,
  regions: tourMapRegions,
  order: keyboardOrder,
  totals: tourMapTotals,
  cities: tourMapCities,
  land: landCodes,
  closeupLand: closeupLandCodes,
  views: VIEWS,
  closeup: CLOSEUP,
};
