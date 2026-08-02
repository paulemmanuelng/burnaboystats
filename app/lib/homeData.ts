import {
  allChartItems,
  albumCharts,
  CHART_COUNTRIES,
  numberOnes,
  chartCountryCount,
} from "../data/charts";
import { allItems, totalAwards, countryCount as certCountries, COUNTRIES as CERT_COUNTRIES } from "../data/certifications";
import { albums as studioAlbums } from "../data/albums";
import { revenueShows } from "../data/tourRevenue";
import { allFirsts } from "../data/firsts";
import { liveCharts } from "../data/liveCharts";
import { tours } from "../data/tours";

/**
 * Everything the homepage sections need, derived.
 *
 * The prototype carries literal values so it could render standalone — "221",
 * "24 certs", "UK No. 5". Those are a snapshot to check against, never a source
 * to copy, so each is computed from app/data here.
 */

// ── The certifications ledger ──────────────────────────────────────────────
const TIER_ORDER = ["Diamond", "Platinum", "Gold", "Silver"] as const;
export type Tier = (typeof TIER_ORDER)[number];

export interface LedgerRow {
  rank: string;
  title: string;
  credit: string;
  year: string;
  top: Tier;
  countries: number;
  certs: number;
  levels: Tier[];
}

export const ledgerRows: LedgerRow[] = [...allItems]
  .map((item) => {
    const levels = [...new Set(item.certs.map((c) => c.level))] as Tier[];
    const top = TIER_ORDER.find((t) => levels.includes(t)) ?? "Silver";
    return {
      title: item.title,
      credit: item.credit ?? "Burna Boy",
      year: item.year ? String(item.year) : "—",
      top,
      countries: new Set(item.certs.map((c) => c.c)).size,
      certs: item.certs.length,
      levels,
    };
  })
  .sort((a, b) => b.certs - a.certs || a.title.localeCompare(b.title))
  .map((r, i) => ({ ...r, rank: String(i + 1).padStart(2, "0") }));

export const certifiedReleaseTotal = allItems.length;
export const certTotal = totalAwards();
export const certCountryTotal = certCountries;

/** Tier totals for the "full picture" bars, largest first. */
export const tierTotals = TIER_ORDER.map((name) => {
  const count = allItems.reduce(
    (n, item) => n + item.certs.filter((c) => c.level === name).length,
    0
  );
  return { name, count, pct: Math.round((count / certTotal) * 100) };
});
export const largestTier = Math.max(...tierTotals.map((t) => t.count));

/**
 * Which releases hold a Diamond award, and from whom — the tier note in the
 * breakdown panel names them, so it must never drift from the data.
 */
const diamondItems = allItems.filter((i) => i.certs.some((c) => c.level === "Diamond"));
const diamondBodies = [
  ...new Set(
    diamondItems.flatMap((i) =>
      i.certs.filter((c) => c.level === "Diamond").map((c) => c.body ?? CERT_COUNTRIES[c.c].body)
    )
  ),
];
const diamondCountries = [
  ...new Set(
    diamondItems.flatMap((i) =>
      i.certs.filter((c) => c.level === "Diamond").map((c) => CERT_COUNTRIES[c.c].name)
    )
  ),
];
const listOf = (xs: string[]) =>
  xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`;

export const diamondCount = tierTotals.find((t) => t.name === "Diamond")?.count ?? 0;
export const diamondNote =
  diamondCount === 0
    ? ""
    : `All ${diamondCount === 1 ? "" : `${diamondCount} `}Diamond award${
        diamondCount === 1 ? "" : "s"
      } come${diamondCount === 1 ? "s" : ""} from ${listOf(diamondBodies)}${
        diamondCountries.length === 1 ? ` (${diamondCountries[0]})` : ""
      } — ${listOf(diamondItems.map((i) => `\u201C${i.title}\u201D`))}.`;

// ── The No. 1 board ────────────────────────────────────────────────────────
// A blend, exactly as the design describes it: "national charts and Spotify
// daily". Official peaks come first with the country's own chart body; the
// remainder are countries topping Spotify right now.
export interface BoardCell {
  code: string;
  flag: string;
  name: string;
  chart: string;
  isNew: boolean;
}

const officialOnes: string[] = [];
for (const release of allChartItems) {
  for (const e of release.entries) {
    if (e.peak !== 1 || e.c === "GLB" || e.c === "GLBX") continue;
    if (!officialOnes.includes(e.c)) officialOnes.push(e.c);
  }
}

const spotifyOnes = new Map<string, string>();
for (const release of liveCharts) {
  for (const p of release.platforms) {
    for (const e of p.entries) {
      if (e.position === 1 && !spotifyOnes.has(e.country)) spotifyOnes.set(e.country, e.name);
    }
  }
}

/** Countries at No. 1 right now on any tracked platform. */
export const liveNumberOneCountries = spotifyOnes.size;
export const careerNumberOnes = numberOnes;
export const careerNumberOneCountries = chartCountryCount;

// Newest official No. 1s lead, since those are the ones that just changed.
export const boardCells: BoardCell[] = [
  ...[...officialOnes].reverse().map((code) => ({
    code,
    flag: CHART_COUNTRIES[code].flag,
    name: CHART_COUNTRIES[code].name,
    chart: CHART_COUNTRIES[code].body.replace(/\s*\(.*\)$/, ""),
    isNew: false,
  })),
  ...[...spotifyOnes.entries()]
    .filter(([code]) => !officialOnes.includes(code))
    .map(([code, name]) => ({ code, flag: "", name, chart: "Spotify", isNew: false })),
].slice(0, 24);

// The three most recent official additions are the "NEW" cells.
for (const cell of boardCells.slice(0, 3)) cell.isNew = true;

// ── The catalogue ──────────────────────────────────────────────────────────
/** Small counts read as words in this design's headings, not digits. */
const WORDS = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
  "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"];
export const numberWord = (n: number) => WORDS[n] ?? String(n);

export const albumCards = [...studioAlbums]
  .sort((a, b) => a.year - b.year)
  .map((a) => {
    const rec = albumCharts.find((r) => r.title === a.title);
    const best = rec
      ? [...rec.entries].filter((e) => e.c !== "GLB" && e.c !== "GLBX").sort((x, y) => x.peak - y.peak)[0]
      : undefined;
    const cert = allItems.find((i) => i.title === a.title);
    return {
      title: a.title,
      year: a.year,
      cover: a.cover,
      peak: best ? `${best.c} No. ${best.peak}` : null,
      certs: cert ? `${cert.certs.length} certs` : null,
    };
  });

// ── Career records ─────────────────────────────────────────────────────────
// This is his career-records section, so the per-show table is his shows only
// — revenueShows is a cross-artist African leaderboard.
export const topShows = revenueShows.filter((s) => s.artist === "Burna Boy").slice(0, 5);

const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
export const topTour = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];

/** The most recent firsts across every category. */
export const homeFirsts = allFirsts
  .slice()
  .sort((a, b) => Number(b.year) - Number(a.year))
  .slice(0, 5);

export { CERT_COUNTRIES };
