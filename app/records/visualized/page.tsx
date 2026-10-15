import Link from "../../components/SiteLink";
import styles from "./visualized.module.css";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileVisualized from "../../components/MobileVisualized";
import RankedBars, { type BarItem } from "../../components/RankedBars";
import ScatterChart, { type ScatterPoint } from "../../components/ScatterChart";
import TierDonut, { type DonutSeg } from "../../components/TierDonut";
import PeakMap, { type PeakInfo } from "../../components/PeakMap";
import KeepExploring from "../../components/KeepExploring";
import TimeSeriesChart, { type SeriesAnnotation } from "../../components/TimeSeriesChart";
import YearBars, { type YearCount } from "../../components/YearBars";
import { decades, shortNumber } from "../../lib/charts/niceTicks";
import { sentenceDate } from "../../lib/provenance";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";
import { JUMP, listenersLabel } from "../../lib/visualizedSections";
import { revenueShows } from "../../data/tourRevenue";
import { COUNTRIES, albums, singles, features, totalAwards, CERTS_VERIFIED_ON } from "../../data/certifications";
import {
  ceremonies,
  totalWins,
  pendingNominations as pendingNoms,
  decidedNominations as decidedNoms,
  AWARDS_EDITED_ON,
} from "../../data/awards";
import { albumCharts, singleCharts, featureCharts, CHART_COUNTRIES } from "../../data/charts";
import { statBoxes, HIGHLIGHT, streamsRecord2025 } from "../../data/africasBiggest";
import { monthlyListenersSeries } from "../../data/trends";
import { intlCertHistory } from "../../data/certifications";
import { diamondCerts } from "../../lib/analysis";

/* The Diamond roll-call used to be typed out beside a derived count. The count
   moved when Dai Dai was certified and the sentence did not, so the page read
   "7 Diamond awards" over a list of six. Both halves come off the data now.
   Grouped by WHERE each title is Diamond: "Dai Dai"'s Turkish Diamond (7 Oct
   2026) made it "8 Diamond awards (…seven titles…, all in France and Turkey)"
   — seven names for eight awards, and only one of them Turkish. Now: "Dai Dai
   in France and Turkey; Last Last, … in France". */
const andJoin = (xs: string[]) => (xs.length > 1 ? `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}` : (xs[0] ?? ""));
const diamondTitles = [...new Set(diamondCerts.map((d) => d.title))];
const diamondWhere = new Map(diamondTitles.map((t) => [t, andJoin([...new Set(diamondCerts.filter((d) => d.title === t).map((d) => d.country))])]));
const diamondGroups = [...new Set(diamondWhere.values())].map((where) => ({
  where,
  titles: diamondTitles.filter((t) => diamondWhere.get(t) === where),
}));
const diamondRollCall =
  diamondGroups.length === 1
    ? `${andJoin(diamondGroups[0].titles)}, all in ${diamondGroups[0].where}`
    : diamondGroups.map((g) => `${andJoin(g.titles)} in ${g.where}`).join("; ");
import { allNoms } from "../../data/awards";
import { songs } from "../../data/songs";
import { livePlatformTotals, liveChartsUpdated } from "../../data/liveCharts";
import { performedCountries } from "../../data/performedCountries";
import { A2_TO_ISO } from "../../lib/isoCodes";
import { LIVE_CADENCE } from "../../lib/liveChartMeta";
import { shortStamp } from "../../lib/dates";

export const metadata = pageMetadata({
  title: "Burna Boy, Visualized — Career Stats in Charts",
  description:
    "Burna Boy's career plotted: biggest single-show grosses, certifications by country and tier, chart entries by peak and his award win rate — every stat, charted.",
  path: "/records/visualized",
  shareTitle: "Burna Boy, Visualized",
  shareDescription: "His career in charts — grosses, certifications and awards, at a glance.",
});

// ── Chart data (built from the same sources the detail pages filter) ──
const burnaShowCount = revenueShows.filter((s) => s.artist === "Burna Boy").length;
// The phone's "biggest certifying countries": six, and any tied with the sixth.
const CERTS_PHONE = 6;
// Every country that has certified something, not only the twelve charted.
const certifyingCountryCount = new Set(
  [...albums, ...singles, ...features].flatMap((it) => it.certs.map((c) => c.c))
).size;

// "Burna" / "Fally" — the same short form the scatter's labels use.
const firstName = (a: string) => (a === "Burna Boy" ? "Burna" : a.split(" ")[0]);

const grosses: BarItem[] = revenueShows.slice(0, 12).map((s) => ({
  flag: s.flag,
  name: s.venue,
  meta: `${s.artist} · ${s.city} · ${s.year}`,
  disambig: firstName(s.artist),
  value: s.revenue,
  displayValue: `$${(s.revenue / 1e6).toFixed(2)}M`,
  tone: s.artist === "Burna Boy" ? "gold" : "muted",
}));

/** The first `n`, and every item tied with the n-th on value. A plain slice
 *  dropped Australia, level with Denmark on 10 plaques, from the phone's six by
 *  object insertion order (5 Oct 2026, records-21). */
const withTies = <T,>(xs: T[], n: number, value: (x: T) => number): T[] =>
  xs.filter((x, i) => i < n || (xs[n - 1] !== undefined && value(x) === value(xs[n - 1])));

const certsByCountry: BarItem[] = (() => {
  const counts: Record<string, number> = {};
  for (const it of [...albums, ...singles, ...features])
    for (const c of it.certs) counts[c.c] = (counts[c.c] || 0) + 1;
  const nameOf = (code: string) => COUNTRIES[code]?.name ?? code;
  // Equal counts in name order, so a tie never falls to insertion order.
  const ranked = Object.entries(counts).sort((a, b) => b[1] - a[1] || nameOf(a[0]).localeCompare(nameOf(b[0])));
  return withTies(ranked, 12, (e) => e[1])
    .map(([code, n]) => ({
      flag: COUNTRIES[code]?.flag,
      name: COUNTRIES[code]?.name ?? code,
      meta: COUNTRIES[code]?.body,
      value: n,
      displayValue: String(n),
    }));
})();
const certsPhone = withTies(certsByCountry, CERTS_PHONE, (b) => b.value);

// "5 Oct 2026", the site's stamp: both layouts printed the raw ISO day,
// "Last swept 2026-10-05." (5 Oct 2026, records-22).
const sweptOn = shortStamp(liveChartsUpdated);

// ── The climb ────────────────────────────────────────────────────────────
// The only dated series the site keeps: monthly listeners through the "Dai
// Dai" run. Milestones are found IN the data rather than hardcoded, so the
// markers can never contradict the line they sit on.
const listenerMilestones: SeriesAnnotation[] = [50, 60]
  .map((mark) => {
    const hit = monthlyListenersSeries.find((p) => p.value >= mark);
    return hit ? { date: hit.date, label: `${mark}M` } : null;
  })
  .filter((a): a is SeriesAnnotation => a !== null);
const listenerFirst = monthlyListenersSeries[0];
const listenerLast = monthlyListenersSeries[monthlyListenersSeries.length - 1];
const listenerGain = (listenerLast.value - listenerFirst.value).toFixed(2);
const listenerDays = Math.round(
  (new Date(listenerLast.date).getTime() - new Date(listenerFirst.date).getTime()) / 86_400_000
);
const formatListeners = listenersLabel;
// The series is a PEAK metric (watched-metrics.json → spotify-peak-listeners,
// kind: "peak"), so it only extends when a new high is set — it does not run to
// today, and both labels claimed it did. Derived from the series' own ends, so
// the label can never outrun the data it describes.
const listenerDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
const listenerAria = `Burna Boy's Spotify monthly listeners, ${monthlyListenersSeries.length} dated readings from ${listenerDate(
  listenerFirst.date
)} to ${listenerDate(listenerLast.date)}`;

// ── Certification pace ───────────────────────────────────────────────────
// Chronological, not ranked: the story is that the newest year is already the
// biggest, so the years have to read left-to-right in time order.
// Every year from the first logged to the running one is on the axis — a year
// with none is a 0 bar, never skipped — and the running year (the year of the
// last verification) is hatched and dated, not gold (J5-2 (e), fix 115).
const loggedCertYears = [...new Set(intlCertHistory.map((e) => e.year))].sort((a, b) => a - b);
const certRunningYear = Number(CERTS_VERIFIED_ON.slice(0, 4));
const certYears = Array.from(
  { length: Math.max(loggedCertYears[loggedCertYears.length - 1], certRunningYear) - loggedCertYears[0] + 1 },
  (_, i) => loggedCertYears[0] + i,
);
const thisYear = certYears[certYears.length - 1];
const certsVerified = sentenceDate({ label: "Verified", day: CERTS_VERIFIED_ON });
const certsByYear: BarItem[] = certYears.map((year) => {
  const n = intlCertHistory.filter((e) => e.year === year).length;
  return {
    name: String(year),
    meta: year === certRunningYear ? `so far · ${certsVerified.kind} ${certsVerified.text}` : undefined,
    value: n,
    displayValue: String(n),
    tone: year === certRunningYear ? "partial" : "muted",
  };
});
const certYearPeak = Math.max(...certsByYear.map((c) => c.value));
const certYearRecord = certsByYear[certsByYear.length - 1].value === certYearPeak;

// ── Awards won, by year ──────────────────────────────────────────────────
// The second real time axis on the site: every win carries the year it was
// awarded, so a fifteen-year career plots as a career rather than a total.
const winYearCounts = (() => {
  const by: Record<number, number> = {};
  for (const n of allNoms) if (n.won) by[n.year] = (by[n.year] ?? 0) + 1;
  return by;
})();
const winYears = Object.keys(winYearCounts).map(Number).sort((a, b) => a - b);
const bestWinYear = winYears.reduce((a, b) => (winYearCounts[b] > winYearCounts[a] ? b : a));
// As bars (J5-2 (b)): one per year, every year labelled; the running year —
// the year of the last edit to the awards data — hatched and dated (e). Every
// year between first and last, so a quiet year reads as a dip rather than
// being skipped — a gap in a time series is a lie about the shape.
const winRunningYear = Number(AWARDS_EDITED_ON.slice(0, 4));
const winBars: YearCount[] = (() => {
  const lastYear = Math.max(winYears[winYears.length - 1], winRunningYear);
  return Array.from({ length: lastYear - winYears[0] + 1 }, (_, i) => {
    const year = winYears[0] + i;
    return { year, value: winYearCounts[year] ?? 0 };
  });
})();
const awardsUpdated = sentenceDate({ label: "Updated", day: AWARDS_EDITED_ON });
const winRunning = { year: winRunningYear, asOf: `${awardsUpdated.kind} ${awardsUpdated.text}` };
const winsAria = `Burna Boy's award wins in each year from ${winBars[0].year} to ${winBars[winBars.length - 1].year}`;

// The heading over this chart said "Fifteen years of winning" while the axis ran
// 2012-2025 — fourteen. Derived now, so the words cannot drift from the bars.
const WIN_SPAN_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
  "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
  "Seventeen", "Eighteen", "Nineteen", "Twenty",
];
const winSpan = winBars.length;
const winSpanWord = WIN_SPAN_WORDS[winSpan] ?? String(winSpan);

// ── Where he is charting right now ───────────────────────────────────────
const livePlatformBars: BarItem[] = livePlatformTotals.map((p) => ({
  name: p.platform,
  meta: p.numberOnes > 0 ? `${p.numberOnes} at No. 1` : undefined,
  value: p.placements,
  displayValue: String(p.placements),
}));
const livePlacementTotal = livePlatformTotals.reduce((n, p) => n + p.placements, 0);

// ── Stages by region ─────────────────────────────────────────────────────
const REGION_ORDER = ["Africa", "Europe", "Caribbean", "North America", "South America", "Oceania", "Asia"];
const regionBars: BarItem[] = (() => {
  const by: Record<string, number> = {};
  for (const c of performedCountries) by[c.region] = (by[c.region] ?? 0) + 1;
  return REGION_ORDER.filter((r) => by[r]).map((r) => ({
    name: r,
    value: by[r],
    displayValue: String(by[r]),
  }));
})();

const shortBody = (name: string) => name.match(/\(([^)]+)\)/)?.[1] ?? name;
const winsByBody: BarItem[] = ceremonies
  .map((c) => ({ name: c.name, wins: c.noms.filter((n) => n.won).length }))
  // A threshold, not a top-N: a "top 10" cut a body with the same count as the
  // tenth. Every body with three or more wins (the phone shows four or more).
  .filter((c) => c.wins >= 3)
  .sort((a, b) => b.wins - a.wins)
  .map((c) => ({ name: shortBody(c.name), value: c.wins, displayValue: `${c.wins}` }));
const winsByBodyPhone = winsByBody.filter((c) => c.value >= 4);

// ── Scatter: tickets vs gross per show ──
// Log–log (J5-2 (f), fix 113): the shows run from 525 tickets to ~59,000 and
// from $47,221 to $6.15M, so on linear axes some seventy of them piled into
// the first tick. The ticks are the data's own decades. His five biggest
// nights are labelled (11px, in one column with hairlines — labelColumn).
const num = (s: string | undefined) => Number((s ?? "").replace(/,/g, ""));
const HIS_LABELS = 5;
const topShowRow = [...revenueShows].sort((a, b) => b.revenue - a.revenue)[0];
const shortVenue = (v: string) => v.replace(/ Arena$/, "");
const plotted = revenueShows.filter((s) => s.tickets && !Number.isNaN(num(s.tickets)));
const hisTop = new Set(
  plotted
    .filter((s) => s.artist === "Burna Boy")
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, HIS_LABELS),
);
const scatter: ScatterPoint[] = plotted.map((s) => ({
  x: num(s.tickets),
  y: s.revenue,
  title: `${s.artist} — ${s.venue}, ${s.city}: ${s.tickets} tickets · $${(s.revenue / 1e6).toFixed(2)}M`,
  tone: s.artist === "Burna Boy" ? "gold" : "muted",
  label: hisTop.has(s) ? shortVenue(s.venue) : undefined,
}));
const ticketDecades = decades(Math.min(...scatter.map((p) => p.x)), Math.max(...scatter.map((p) => p.x)));
const grossDecades = decades(Math.min(...scatter.map((p) => p.y)), Math.max(...scatter.map((p) => p.y)));
const scatterAxes = {
  scale: "log" as const,
  xMin: ticketDecades[0],
  xMax: ticketDecades[ticketDecades.length - 1],
  yMin: grossDecades[0],
  yMax: grossDecades[grossDecades.length - 1],
  xTicks: ticketDecades.map((v) => ({ value: v, label: shortNumber(v) })),
  yTicks: grossDecades.map((v) => ({ value: v, label: `$${shortNumber(v)}` })),
};

// ── Donut: certifications by tier ──
const tiers: Record<string, number> = { Diamond: 0, Platinum: 0, Gold: 0, Silver: 0 };
for (const it of [...albums, ...singles, ...features]) for (const c of it.certs) tiers[c.level]++;
const tierSegments: DonutSeg[] = [
  { label: "Diamond", value: tiers.Diamond, color: "var(--tier-diamond-ink)" },
  { label: "Platinum", value: tiers.Platinum, color: "var(--tier-platinum-ink)" },
  { label: "Gold", value: tiers.Gold, color: "var(--tier-gold-ink)" },
  { label: "Silver", value: tiers.Silver, color: "var(--tier-silver-ink)" },
];

// ── Donut: chart entries by how high they peaked ──
// The last band is unbounded, not 41-100: the data holds peaks of 143 and 194,
// and the binning below is an `else`. Labelled 41+ so it says what it holds.
// The bands are exclusive, so each is labelled by its range: "Top 5 55" sat
// beside a caption saying 101 reached the Top 5 (5 Oct 2026, records-13).
const peakBands = { "No. 1": 0, "2–5": 0, "6–10": 0, "11–40": 0, "41+": 0 };
for (const r of [...albumCharts, ...singleCharts, ...featureCharts])
  for (const e of r.entries) {
    if (e.peak === 1) peakBands["No. 1"]++;
    else if (e.peak <= 5) peakBands["2–5"]++;
    else if (e.peak <= 10) peakBands["6–10"]++;
    else if (e.peak <= 40) peakBands["11–40"]++;
    else peakBands["41+"]++;
  }
const totalEntries = Object.values(peakBands).reduce((a, b) => a + b, 0);
const top5Count = peakBands["No. 1"] + peakBands["2–5"];
const peakSegments: DonutSeg[] = [
  { label: "No. 1", value: peakBands["No. 1"], color: "var(--peak-band-1)" },
  { label: "2–5", value: peakBands["2–5"], color: "var(--peak-band-5)" },
  { label: "6–10", value: peakBands["6–10"], color: "var(--peak-band-10)" },
  { label: "11–40", value: peakBands["11–40"], color: "var(--peak-band-40)" },
  { label: "41+", value: peakBands["41+"], color: "var(--peak-band-rest)" },
];

// ── Comparison: most-streamed African artists in 2025 (Burna vs peers) ──
// Derived from the same africasBiggest data the /records/africas-biggest page
// uses, so the numbers never drift between the two.
const parseBig = (v: string): number => {
  const m = v.match(/^([\d.]+)\s*([KMB])?$/i);
  if (!m) return NaN;
  const n = parseFloat(m[1]);
  const s = (m[2] || "").toUpperCase();
  return s === "B" ? n * 1e9 : s === "M" ? n * 1e6 : s === "K" ? n * 1e3 : n;
};
const artistFlags: Record<string, string> = {
  "Burna Boy": "🇳🇬", Wizkid: "🇳🇬", Tyla: "🇿🇦", Rema: "🇳🇬", Tems: "🇳🇬",
};
const streamRow2025 = statBoxes
  .find((b) => b.id === "most-streamed-african-artist")
  ?.rows?.find((r) => r.label === "2025");
const africanStreams: BarItem[] = (streamRow2025?.entries ?? [])
  .filter((e) => e.value)
  .map((e) => ({
    flag: artistFlags[e.name],
    name: e.name,
    value: parseBig(e.value!),
    displayValue: e.value!,
    tone: e.name === HIGHLIGHT ? "gold" : "muted",
  }));
// "The biggest streaming year ever by an African act" holds only while no
// later year's row has passed the 2025 figure — checked against the board's
// rows rather than typed, by the board's own rule (strictly past at the
// precision the rows print). This page used to compare with `<`, which gave
// the record away on equal strings: "1.986B" against "1.986B" can be either
// order, and a crossing must never be called early.
const streamRecordStands = africanStreams.length > 0 && (streamsRecord2025?.passedBy.length ?? 0) === 0;

// ── Donut: award wins vs nominations (career strike rate) ──
// A nomination whose ceremony has not happened yet is neither won nor lost —
// counting it as "not converted" pulled the rate down (34% for 35%) every
// awards season. Decided = every nomination except those at a pending edition
// (data/awards.ts derives both; the awards page prints the same rate).
// One denominator (fix 114): the ring, its centre and its legend all count
// decided nominations; Pending is listed as a count beside it, with no arc and
// no share — the shipped ring drew it, so the legend's Won share (of every
// nomination) disagreed with the centre's rate (of decided ones).
const winRate = Math.round((totalWins / decidedNoms) * 100);
const winRateSegments: DonutSeg[] = [
  { label: "Won", value: totalWins, color: "var(--gold-fill)" },
  { label: "Not won", value: decidedNoms - totalWins, color: "var(--seg-rest)" },
];
const winRateExtras = pendingNoms ? [{ label: "Pending", value: pendingNoms }] : [];
const winRateTitle = `Won ${totalWins} of ${decidedNoms}`;
const winRateOf = `${winRate}% of ${decidedNoms} decided`;

// ── Choropleth: best chart peak by country ──
// Every charting release per country, so the map hover can show the top few.
const songsByCode: Record<string, { title: string; peak: number }[]> = {};
for (const r of [...albumCharts, ...singleCharts, ...featureCharts])
  for (const e of r.entries) {
    if (e.c === "GLB" || e.c === "GLBX") continue;
    (songsByCode[e.c] ||= []).push({ title: r.title, peak: e.peak });
  }
const peakByISO: Record<number, PeakInfo> = {};
for (const [code, songs] of Object.entries(songsByCode)) {
  const iso = A2_TO_ISO[code];
  if (!iso || !CHART_COUNTRIES[code]) continue;
  const sorted = [...songs].sort((a, b) => a.peak - b.peak);
  peakByISO[iso] = { name: CHART_COUNTRIES[code].name, peak: sorted[0].peak, songs: sorted };
}
const peakCountryCount = Object.keys(peakByISO).length;

const jsonLd = datasetJsonLd({
  name: "Burna Boy, Visualized",
  description:
    "Charted views of Burna Boy's career: biggest single-show grosses, certifications by country and by tier, the dated monthly-listener log, award wins by body and by year, live platform placements, countries performed in, and a map of the best chart peak per country.",
  path: "/records/visualized",
  keywords: ["Burna Boy", "charts", "data visualization", "grosses", "certifications", "awards", "chart peaks", "win rate", "most-streamed African artist", "Wizkid", "Tyla", "Rema", "Tems"],
  variableMeasured: ["Gross per show", "Certifications per country", "Certifications per tier", "International certifications per year (as logged)", "Spotify monthly listeners (dated log)", "Chart peak distribution", "Best chart peak per country", "Spotify streams by artist", "Award wins per body", "Award wins per year", "Award win rate", "Live platform-chart placements", "Countries performed in per region"],
});


// Mobile carries the charts that survive one column: three ranked-bar sets and
// three donuts. Each is a slice of a chart the desktop page draws in full.
const toBars = (items: BarItem[], n: number, { tagEvery = false }: { tagEvery?: boolean } = {}) => {
  const top = items.slice(0, n);
  const max = Math.max(...top.map((b) => b.value));
  // The mobile rows drop the meta line desktop shows, so two rows sharing a
  // name — the grosses list's pair of La Défense Arena shows — would read as
  // the same show twice. When names collide within the slice, append the
  // short artist tag, matching the scatter's "La Défense (Fally)" convention.
  // `tagEvery`: a list of several artists' rows tags every row, so each one
  // names its artist in the same place, as the desktop's meta line does —
  // not only the colliding pair, which left "London Stadium $6.15M" to say
  // whose night it was by colour alone (debug pass 4 Oct 2026, F-08).
  const nameCount: Record<string, number> = {};
  top.forEach((b) => (nameCount[b.name] = (nameCount[b.name] || 0) + 1));
  return top.map((b) => ({
    name: [b.flag, b.name].filter(Boolean).join(" "),
    // Its own field, so a long venue truncates and the artist never does.
    tag: (tagEvery || nameCount[b.name] > 1) && b.disambig ? b.disambig : undefined,
    value: b.displayValue,
    frac: b.value / max,
    // Gold only where the desktop row is gold: his bar among others, or this
    // year's. A single-series chart has no tone and reads in --other (fix 4).
    his: b.tone === "gold",
    // A year still running is hatched and keeps its dated meta (J5-2 (e)).
    partial: b.tone === "partial",
    meta: b.tone === "partial" ? b.meta : undefined,
  }));
};

export default function VisualizedPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Mobile is screen 19 — a bespoke screen. The scatter and the
          choropleth need width and a pointer, so mobile carries the charts
          that survive one column. */}
      <MobileVisualized
        chartCount={JUMP.length}
        blocks={[
          {
            title: `${winSpanWord} years of winning`,
            note: `${bestWinYear} was the peak — ${winYearCounts[bestWinYear]} wins in a single year, of ${totalWins} in all.`,
            chart: <YearBars years={winBars} running={winRunning} ariaLabel={winsAria} valueLabel="Wins" layout="phone" />,
            route: { label: "Every award", href: "/records/awards" },
          },
          {
            title: "Tickets vs gross",
            // On log axes the scatter fits the column (J5-2 (f)): nothing to
            // swipe, so the note no longer says to.
            note: "Each dot is one show — how a night's attendance turned into its gross.",
            chart: (
              <ScatterChart
                points={scatter}
                {...scatterAxes}
                xLabel="Tickets sold"
                yLabel="Gross (USD)"
                ariaLabel="Tickets sold against box-office gross for the verified single shows by African artists"
                px
              />
            ),
            route: { label: "Full leaderboard", href: "/records/tours/revenue" },
          },
          {
            title: "Best chart peak by country",
            // Said by darkness on paper and by brightness on black: the ramp
            // inverts its lightness between the themes (PeakMap), so each
            // theme prints the sentence that is true of it (C-2).
            note: (
              <>
                <span className={styles.capLight}>Darker = higher peak; No. 1 is darkest</span>
                <span className={styles.capDark}>Brighter = higher peak; No. 1 is brightest</span> — tap a country
                for the song that got there.
              </>
            ),
            chart: (
              <PeakMap
                data={peakByISO}
                ariaLabel="World map coloured by Burna Boy's best official chart peak in each country"
              />
            ),
            route: { label: "All chart positions", href: "/records/charts" },
          },
        ]}
        timeCharts={[
          {
            title: "The climb to sixty million",
            note: `+${listenerGain}M in ${listenerDays} days — ${monthlyListenersSeries.length} dated readings through the “Dai Dai” run.`,
            points: monthlyListenersSeries,
            annotations: listenerMilestones,
            format: "listeners",
            unitLabel: "Spotify · monthly listeners",
            ariaLabel: listenerAria,
            zeroBased: true,
            area: false,
            route: { label: "Africa's biggest", href: "/records/africas-biggest" },
          },
        ]}
        bars={[
          {
            title: "Biggest single-show grosses",
            note: `Gold is Burna Boy — ${burnaShowCount} of the ${revenueShows.length} verified nights.`,
            items: toBars(grosses, 6, { tagEvery: true }),
            route: { label: "Full leaderboard", href: "/records/tours/revenue" },
          },
          {
            title: "Certifications by country",
            note: `The ${certsPhone.length} biggest of ${certifyingCountryCount} certifying countries — Nigeria leads on ${certsByCountry[0]?.value}.`,
            items: toBars(certsPhone, certsPhone.length),
            route: { label: "All certifications", href: "/certifications" },
          },
          {
            title: "Most-decorated stages",
            note: `Where his ${totalWins} wins come from — every body with four or more.`,
            items: toBars(winsByBodyPhone, winsByBodyPhone.length),
            route: { label: "Every award", href: "/records/awards" },
          },
          {
            title: "The pace of the certifications",
            note: certYearRecord
              ? `${thisYear} is already his biggest year — ${certYearPeak} international certifications, and it is still running.`
              : "International certifications, counted by the year each landed — as logged; the log is complete from 2023.",
            items: toBars(certsByYear, certsByYear.length),
            route: { label: "Every certification", href: "/certifications" },
          },
          {
            title: "Where he is charting right now",
            note: `${livePlacementTotal} placements on today's board — country charts only, ${LIVE_CADENCE}. Last swept ${sweptOn}.`,
            items: toBars(livePlatformBars, livePlatformBars.length),
            route: { label: "The live board", href: "/live-charts" },
          },
          {
            title: "Where he has performed",
            note: `${performedCountries.length} countries across ${regionBars.length} regions.`,
            items: toBars(regionBars, regionBars.length),
            route: { label: "The performance map", href: "/records/tours/map" },
          },
          {
            title: "Most-streamed African artist, 2025",
            note: `Gold is ${africanStreams[0].name} — ${africanStreams[0].displayValue}${streamRecordStands ? ", the biggest streaming year by an African artist" : ", the most of any African artist that year"}.`,
            items: toBars(africanStreams, 5),
            route: { label: "Africa's biggest", href: "/records/africas-biggest" },
          },
        ]}
        donuts={[
          {
            title: "Certifications by tier",
            centre: `${totalAwards()}`,
            centreLabel: "certifications",
            legend: tierSegments.map((s) => ({ label: s.label, value: s.value, color: s.color })),
            route: { label: "All certifications", href: "/certifications" },
          },
          {
            title: "Chart entries by peak",
            centre: `${peakBands["No. 1"]}`,
            centreLabel: "No. 1 peaks",
            legend: peakSegments.map((s) => ({ label: s.label, value: s.value, color: s.color })),
            route: { label: "All chart positions", href: "/records/charts" },
          },
          {
            title: winRateTitle,
            centre: `${totalWins}`,
            centreLabel: `won · ${winRateOf}`,
            legend: winRateSegments.map((s) => ({ label: s.label, value: s.value, color: s.color })),
            extras: winRateExtras,
            route: { label: "Every award", href: "/records/awards" },
          },
        ]}
        footNote="Every figure is computed from the same datasets the detail pages use — nothing here is a separate tally that could drift out of step."
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/visualized" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>Every stat, charted</div>
          <h1 className={styles.h1}>
            Burna Boy, <span className="inkText">Visualized</span>
          </h1>
          <p className={styles.lede}>
            His career plotted — grosses, certifications, chart peaks and awards, at a
            glance. Every figure is computed from the same datasets the detail pages use.
          </p>
          <nav className={styles.jumpNav} aria-label="Jump to a chart">
            {JUMP.map((j) => (
              <a key={j.href} href={j.href}>{j.label}</a>
            ))}
          </nav>
        </section>

        {/* ── The climb ──────────────────────────────────────── */}
        <section id="the-climb" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Spotify · monthly listeners · dated readings</div>
          <h2 className={styles.h2}>The climb to sixty million</h2>
          <div className={styles.chartBody}>
            <TimeSeriesChart
              points={monthlyListenersSeries}
              annotations={listenerMilestones}
              format="listeners"
              valueLabel="Monthly listeners (millions)"
              unitLabel="Spotify · monthly listeners"
              ariaLabel={listenerAria}
              zeroBased
              area={false}
            />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            <span className={styles.captionLead}>
              +{listenerGain}M in {listenerDays} days
            </span>{" "}
            — every reading logged as it happened through the “Dai Dai” run, from{" "}
            {formatListeners(listenerFirst.value)} to {formatListeners(listenerLast.value)}. He is
            the first African artist past both marked milestones.
          </p>
          <Link href="/records/africas-biggest" className={`btn btnSecondary ${styles.cta}`}>
            Africa&apos;s biggest ↗
          </Link>
        </section>

        {/* ── Certification pace ─────────────────────────────── */}
        <section id="cert-pace" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Certifications · by year</div>
          <h2 className={styles.h2}>The pace of the certifications</h2>
          <div className={styles.chartBody}>
            <RankedBars
              items={certsByYear}
              ariaLabel="Burna Boy international certifications logged in each year — complete from 2023"
            />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            {certYearRecord ? (
              <>
                <span className={styles.captionLead}>{thisYear} is already his biggest year</span>{" "}
                — {certYearPeak} international certifications with the year still running. Counted as logged;
                the log is complete from 2023.
              </>
            ) : (
              <>
                <span className={styles.captionLead}>Counted the year each award landed</span> — as
                logged; the log is complete from 2023, and a release can appear twice in a year if
                it certified at two tiers.
              </>
            )}
          </p>
          <Link href="/certifications" className={`btn btnSecondary ${styles.cta}`}>
            Every certification ↗
          </Link>
        </section>

        {/* ── Awards by year ─────────────────────────────────── */}
        <section id="wins-by-year" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Awards · wins per year</div>
          <h2 className={styles.h2}>{winSpanWord} years of winning</h2>
          <div className={styles.chartBody}>
            <YearBars years={winBars} running={winRunning} ariaLabel={winsAria} valueLabel="Wins" layout="desktop" />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            <span className={styles.captionLead}>
              {bestWinYear} was the peak — {winYearCounts[bestWinYear]} wins in a single year
            </span>
            {bestWinYear === 2019 ? " — the African Giant year" : ""}. Every win is counted in the year the
            ceremony happened, across {totalWins} in all.
          </p>
          <Link href="/records/awards" className={`btn btnSecondary ${styles.cta}`}>
            Every award ↗
          </Link>
        </section>

        {/* ── Live placements ────────────────────────────────── */}
        <section id="live-platforms" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Live · platform charts</div>
          <h2 className={styles.h2}>Where he is charting right now</h2>
          <div className={styles.chartBody}>
            <RankedBars
              items={livePlatformBars}
              ariaLabel="Burna Boy's current placements on each streaming platform's country charts"
            />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            <span className={styles.captionLead}>
              {`${livePlacementTotal} placements on today’s board`}
            </span>{" "}
            — country charts only, {LIVE_CADENCE}. Last swept {sweptOn}.
          </p>
          <Link href="/live-charts" className={`btn btnSecondary ${styles.cta}`}>
            The live board ↗
          </Link>
        </section>

        {/* ── Stages by region ───────────────────────────────── */}
        <section id="regions" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Live · countries performed in</div>
          <h2 className={styles.h2}>Where he has performed</h2>
          <div className={styles.chartBody}>
            <RankedBars
              items={regionBars}
              ariaLabel="Countries Burna Boy has performed in, grouped by region"
            />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            <span className={styles.captionLead}>
              {performedCountries.length} countries across {regionBars.length} regions
            </span>{" "}
            — Africa and Europe carry the most stages.
          </p>
          <Link href="/records/tours/map" className={`btn btnSecondary ${styles.cta}`}>
            The performance map ↗
          </Link>
        </section>

        {/* ── Grosses ────────────────────────────────────────── */}
        <section id="grosses" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Box office</div>
          <h2 className={styles.h2}>Biggest single-show grosses</h2>
          <div className={styles.chartBody}>
            <RankedBars items={grosses} ariaLabel="The 12 highest single-show grosses by an African artist, in millions of US dollars" />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            <span className={styles.captionLead}>Gold bars are Burna Boy</span> — he holds{" "}
            {burnaShowCount} of the {revenueShows.length} verified single-show grosses by an
            African artist{burnaShowCount > revenueShows.length - burnaShowCount ? ", more than everyone else combined" : ""}.
          </p>
          <Link href="/records/tours/revenue" className={`btn btnSecondary ${styles.cta}`}>
            Full leaderboard ↗
          </Link>
        </section>

        {/* ── Tickets vs gross ───────────────────────────────── */}
        <section id="tickets-revenue" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Box office</div>
          <h2 className={styles.h2}>Tickets vs gross</h2>
          <div className={styles.chartBody}>
            <ScatterChart
              points={scatter}
              {...scatterAxes}
              xLabel="Tickets sold"
              yLabel="Gross (USD)"
              // Not the full list: the scatter plots only shows with a reported
              // ticket count, so the label counts the points actually drawn.
              ariaLabel={`Scatter plot of tickets sold versus box-office gross across ${scatter.length} verified single shows`}
            />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            Each dot is a show — <span className={styles.captionLead}>gold is Burna Boy</span>.
            Gross tracks ticket count closely, but higher-priced rooms sit above the line:{" "}
            {topShowRow.venue} turned ~{Math.round(num(topShowRow.tickets) / 1000)},000 tickets into $
            {(topShowRow.revenue / 1e6).toFixed(2)}M.
          </p>
        </section>

        {/* ── Certifications by country ──────────────────────── */}
        <section id="certifications" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Certified worldwide</div>
          <h2 className={styles.h2}>Certifications by country</h2>
          <div className={styles.chartBody}>
            <RankedBars items={certsByCountry} ariaLabel={`Burna Boy's music certifications by country — the top ${certsByCountry.length}`} />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            The {certsByCountry.length} biggest of {certifyingCountryCount} certifying
            countries — {certsByCountry.slice(0, 3).map((c) => `${c.name} (${c.meta})`).join(", ")} lead
            the tally.
          </p>
          <Link href="/certifications" className={`btn btnSecondary ${styles.cta}`}>
            All certifications ↗
          </Link>
        </section>

        {/* ── Tiers ──────────────────────────────────────────── */}
        <section id="tiers" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Certified worldwide</div>
          <h2 className={styles.h2}>Certifications by tier</h2>
          <div className={styles.donutPanel}>
            <TierDonut
              segments={tierSegments}
              total={totalAwards()}
              centerNum={`${totalAwards()}`}
              centerLabel="certifications"
              ariaLabel={`Certifications by tier: ${tierSegments.map((s) => `${s.value} ${s.label}`).join(", ")}`}
            />
          </div>
          <p className={styles.caption}>
            How the {totalAwards()} certifications break down — mostly Platinum and Gold
            singles, crowned by {tiers.Diamond} Diamond certifications ({diamondRollCall}).
          </p>
        </section>

        {/* ── Chart peaks ────────────────────────────────────── */}
        <section id="chart-peaks" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Charts worldwide</div>
          <h2 className={styles.h2}>Best chart peak by country</h2>
          {/* The design's five discrete key chips aren't repeated here: the
              prototype substituted a banded grid for the map, and the real
              PeakMap shades on a continuous scale with its own legend. Two
              legends, one of them describing bands the map doesn't use, would
              mislabel the thing they sit above. */}
          <div className={styles.heatHead}>
            <span className={styles.heatHint}>
              <span className={styles.capLight}>Darker = higher peak; No. 1 is darkest</span>
              <span className={styles.capDark}>Brighter = higher peak; No. 1 is brightest</span>
            </span>
          </div>
          <div className={styles.chartBody}>
            <PeakMap data={peakByISO} ariaLabel="World map coloured by Burna Boy's best official chart peak in each country" />
          </div>
          <p className={styles.caption}>
            His best official chart position in each of {peakCountryCount} countries —
            gold means higher, red lower. No. 1s span Nigeria, the UK, the Netherlands, Belgium,
            Germany, Switzerland, Colombia, Argentina and more.
          </p>
          <Link href="/records/charts" className={`btn btnSecondary ${styles.cta}`}>
            All chart positions ↗
          </Link>
        </section>

        {/* ── Peak spread ────────────────────────────────────── */}
        <section id="peak-distribution" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Charts worldwide</div>
          <h2 className={styles.h2}>How his chart entries break down</h2>
          <div className={styles.donutPanel}>
            <TierDonut
              segments={peakSegments}
              total={totalEntries}
              centerNum={`${peakBands["No. 1"]}`}
              centerLabel="No. 1 peaks"
              ariaLabel={`Chart entries by peak position: ${peakSegments.map((s) => `${s.value} ${s.label}`).join(", ")}`}
            />
          </div>
          <p className={styles.caption}>
            All {totalEntries} of his charting entries worldwide, grouped by how high each
            one peaked — {peakBands["No. 1"]} hit No. 1 and {top5Count} reached the Top 5.
          </p>
        </section>

        {/* ── Africa's biggest ───────────────────────────────── */}
        <section id="african-artists" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Africa&apos;s biggest</div>
          <h2 className={styles.h2}>Most-streamed African artist, 2025</h2>
          <div className={styles.chartBody}>
            <RankedBars
              items={africanStreams}
              ariaLabel="Most-streamed African artists on Spotify in 2025, by total streams in billions"
              goldKey={`Gold = ${HIGHLIGHT}`}
            />
          </div>
          <p className={styles.caption}>
            <span className={styles.captionLead}>{africanStreams[0].name} leads</span> — {africanStreams[0].displayValue}{" "}
            Spotify streams in 2025 were the most of any African artist
            {streamRecordStands ? ", the biggest streaming year ever by an African act" : ""}, ahead of{" "}
            {africanStreams.slice(1).map((a) => a.name).join(", ").replace(/, ([^,]*)$/, " and $1")}.
          </p>
          <Link href="/records/africas-biggest" className={`btn btnSecondary ${styles.cta}`}>
            Africa&apos;s biggest ↗
          </Link>
        </section>

        {/* ── Awards ─────────────────────────────────────────── */}
        <section id="awards" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Decorated</div>
          <h2 className={styles.h2}>Most-decorated stages</h2>
          <div className={styles.chartBody}>
            <RankedBars items={winsByBody} ariaLabel="Burna Boy's award wins by award body — every body that has given him three or more" />
          </div>
          <p className={styles.caption}>
            Where his {totalWins} wins come from — the top {winsByBody.length} award bodies
            by number of trophies, the BET Awards alongside a deep African-awards haul. The
            Grammy is a single win, so it does not reach a chart ranked by volume.
          </p>
          <Link href="/records/awards" className={`btn btnSecondary ${styles.cta}`}>
            Every award ↗
          </Link>
        </section>

        {/* ── Win rate ───────────────────────────────────────── */}
        <section id="win-rate" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Decorated</div>
          <h2 className={styles.h2}>{winRateTitle}</h2>
          <div className={styles.donutPanel}>
            <TierDonut
              segments={winRateSegments}
              total={decidedNoms}
              centerNum={`${totalWins} won`}
              centerLabel={[`${winRate}% of ${decidedNoms}`, "decided"]}
              extras={winRateExtras}
              ariaLabel={`Award win rate: ${totalWins} won of ${decidedNoms} decided nominations${pendingNoms ? `, ${pendingNoms} pending` : ""}`}
            />
          </div>
          <p className={styles.caption}>
            Across every awards ceremony, {totalWins} of {decidedNoms} decided nominations
            converted to wins — a {winRate}% strike rate
            {pendingNoms ? `, with ${pendingNoms} results still to come` : ""}.
          </p>
        </section>

        {/* ── Onward ─────────────────────────────────────────── */}
        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/records" className="btn btnSecondary">← Career records</Link>
          <Link href="/records/by-the-numbers" className="btn btnPrimary">By the numbers ↗</Link>
          <Link href="/records/africas-biggest" className="btn btnSecondary">
            Africa&apos;s biggest ↗
          </Link>
        </section>

        <KeepExploring current="/records/visualized" />
      </div>
    </main>
  );
}
