import {
  allChartItems,
  albumCharts,
  CHART_COUNTRIES,
  numberOnes,
  chartCountryCount,
} from "../data/charts";
import {
  allItems,
  albums as certAlbums,
  totalAwards,
  countryCount as certCountries,
  COUNTRIES as CERT_COUNTRIES,
} from "../data/certifications";
import { songs } from "../data/songs";
import { albums as studioAlbums } from "../data/albums";
import { revenueShows } from "../data/tourRevenue";
import { firstGroups } from "../data/firsts";
import { liveCharts } from "../data/liveCharts";
import { tours } from "../data/tours";
import { sameTitle, titleKey } from "./titleKey";
import { isRecentNumberOne, recentNumberOneTitle } from "./recentNumberOnes";
import { coverFor } from "./covers";
import { spotifyImage } from "./spotifyImage";

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
  /** The highest award with its multiplier, e.g. "4× Platinum". */
  award: string;
  year: string;
  top: Tier;
  countries: number;
  certs: number;
  levels: Tier[];
}

const albumTitles = new Set(certAlbums.map((a) => titleKey(a.title)));

/**
 * The second line under each title. Albums say so; a release another artist
 * leads keeps that artist's billing; his own singles name the album they came
 * from, which is the fact a reader actually wants there.
 */
const creditFor = (item: (typeof allItems)[number]) => {
  if (albumTitles.has(titleKey(item.title))) return "Album";
  if (item.credit) return /^feat\./i.test(item.credit) ? `Burna Boy ${item.credit}` : item.credit;
  const song = songs.find((sg) => sameTitle(sg.title, item.title));
  return song?.album ? `Burna Boy · ${song.album}` : "Burna Boy";
};

/** "4× Platinum" where a release is certified past 1×; plain tier otherwise. */
const topAward = (item: (typeof allItems)[number], top: Tier) => {
  const best = Math.max(...item.certs.filter((c) => c.level === top).map((c) => c.x ?? 1));
  return best > 1 ? `${best}× ${top}` : top;
};

export const ledgerRows: LedgerRow[] = [...allItems]
  .map((item) => {
    const levels = [...new Set(item.certs.map((c) => c.level))] as Tier[];
    const top = TIER_ORDER.find((t) => levels.includes(t)) ?? "Silver";
    return {
      title: item.title,
      credit: creditFor(item),
      award: topAward(item, top),
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
// Official national charts ONLY — a country appears because a release reached
// No. 1 on that country's own chart, and the cell names the chart body.
//
// This used to blend in countries topping Spotify daily. The cells never
// actually showed one (there are more official No. 1 countries than the 24 the
// board holds), but the count underneath was the Spotify figure, so the board
// read "24 of 63" against a 29-country dataset and credited "Spotify daily"
// for rows that were all official. Platform positions belong on /live-charts,
// which is a different claim: charting now, versus having reached No. 1.
export interface BoardCell {
  code: string;
  flag: string;
  name: string;
  chart: string;
  isNew: boolean;
  /** NEW cells only: the cover of the song the feed reported topping here. */
  cover?: string;
  /** Its title, for the image's alt text. */
  coverTitle?: string;
}

const officialOnes: string[] = [];
for (const release of allChartItems) {
  for (const e of release.entries) {
    if (e.peak !== 1 || e.c === "GLB" || e.c === "GLBX") continue;
    if (!officialOnes.includes(e.c)) officialOnes.push(e.c);
  }
}

/** The release that most recently topped a country's official chart — the
 *  song a board cell should credit. Countries with several No. 1s (Nigeria
 *  has five) show the newest; countries only one song ever topped show that
 *  song, which is the only truthful choice. */
export function numberOneTitleFor(code: string): string | undefined {
  const toppers = allChartItems.filter((r) =>
    r.entries.some((e) => e.c === code && e.peak === 1)
  );
  if (toppers.length === 0) return undefined;
  toppers.sort((a, b) => b.year - a.year);
  return toppers[0].title;
}

/** Countries at No. 1 right now on any tracked platform. Live charts only. */
export const liveNumberOneCountries = (() => {
  const seen = new Set<string>();
  for (const release of liveCharts) {
    for (const p of release.platforms) {
      for (const e of p.entries) if (e.position === 1) seen.add(e.country);
    }
  }
  return seen.size;
})();

/** Countries where a release topped that country's own official chart. */
export const boardCountryTotal = officialOnes.length;
export const careerNumberOnes = numberOnes;
export const careerNumberOneCountries = chartCountryCount;

// Countries the feed just reported topping lead the board — they are the reason
// to look at it — and only they carry the NEW mark.
const allBoardCells: BoardCell[] = [...officialOnes].reverse().map((code) => {
  const name = CHART_COUNTRIES[code].name;
  const isNew = isRecentNumberOne(name);
  // Every cell credits the song that topped the country — NEW cells take the
  // title from the feed item that reported it, the rest from the chart data
  // (most recent No. 1 wins, so Nigeria shows "Love", South Africa "Last
  // Last", and Dai Dai only the countries it actually topped).
  const title = (isNew ? recentNumberOneTitle(name) : undefined) ?? numberOneTitleFor(code);
  const art = title ? coverFor(title) : undefined;
  return {
    code,
    flag: CHART_COUNTRIES[code].flag,
    name,
    chart: CHART_COUNTRIES[code].body.replace(/\s*\(.*\)$/, ""),
    isNew,
    cover: art ? spotifyImage(art, 300) : undefined,
    coverTitle: title,
  };
});

// The desktop board keeps its natural order — Africa, then Latin America, as
// the live data holds them — and only marks the new arrivals in place. (The
// mobile board is a different screen and does lead with them.)
export const boardCells: BoardCell[] = allBoardCells.slice(0, 24);

// ── The catalogue ──────────────────────────────────────────────────────────
/**
 * Counts read as words in this design's headings, not digits.
 *
 * Covers 0–99, because the designs spell out numbers well past twenty —
 * "Forty-nine milestones" on screen 15, "Fifty-eight documented appearances" on
 * screen 13. Anything larger stays a numeral: past a hundred the word is longer
 * than the figure and stops being easier to read.
 */
const WORDS = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
  "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"];
const TENS = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
export const numberWord = (n: number) => {
  if (!Number.isInteger(n) || n < 0 || n > 99) return String(n);
  if (n <= 20) return WORDS[n];
  const unit = n % 10;
  return unit === 0 ? TENS[Math.floor(n / 10)] : `${TENS[Math.floor(n / 10)]}-${WORDS[unit].toLowerCase()}`;
};

export const albumCards = [...studioAlbums]
  .sort((a, b) => a.year - b.year)
  .map((a) => {
    const rec = albumCharts.find((r) => sameTitle(r.title, a.title));
    const best = rec
      ? [...rec.entries].filter((e) => e.c !== "GLB" && e.c !== "GLBX").sort((x, y) => x.peak - y.peak)[0]
      : undefined;
    const cert = allItems.find((i) => sameTitle(i.title, a.title));
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

/**
 * One headline first from each category, newest first.
 *
 * Sorting all of them by year would return five 2026 rows — every recent
 * milestone is from the World Cup run — which hides the career rather than
 * showing it. Taking the lead item per category gives the spread the design
 * shows, across stadiums, world stages, awards, charts and box office.
 */
export const homeFirsts = firstGroups
  .map((g) => g.items[0])
  .sort((a, b) => Number(b.year) - Number(a.year));

export { CERT_COUNTRIES };
