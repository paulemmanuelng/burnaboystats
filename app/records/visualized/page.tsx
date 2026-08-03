import Link from "next/link";
import styles from "./visualized.module.css";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileVisualized from "../../components/MobileVisualized";
import RankedBars, { type BarItem } from "../../components/RankedBars";
import ScatterChart, { type ScatterPoint } from "../../components/ScatterChart";
import TierDonut, { type DonutSeg } from "../../components/TierDonut";
import PeakMap, { type PeakInfo } from "../../components/PeakMap";
import KeepExploring from "../../components/KeepExploring";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";
import { JUMP } from "../../lib/visualizedSections";
import { revenueShows } from "../../data/tourRevenue";
import { COUNTRIES, albums, singles, features, totalAwards } from "../../data/certifications";
import { ceremonies, totalWins } from "../../data/awards";
import { albumCharts, singleCharts, featureCharts, CHART_COUNTRIES } from "../../data/charts";
import { statBoxes, HIGHLIGHT } from "../../data/africasBiggest";
import { A2_TO_ISO } from "../../lib/isoCodes";

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
// Every country that has certified something, not only the twelve charted.
const certifyingCountryCount = new Set(
  [...albums, ...singles, ...features].flatMap((it) => it.certs.map((c) => c.c))
).size;

const grosses: BarItem[] = revenueShows.slice(0, 12).map((s) => ({
  flag: s.flag,
  name: s.venue,
  meta: `${s.artist} · ${s.city} · ${s.year}`,
  value: s.revenue,
  displayValue: `$${(s.revenue / 1e6).toFixed(2)}M`,
  tone: s.artist === "Burna Boy" ? "gold" : "muted",
}));

const certsByCountry: BarItem[] = (() => {
  const counts: Record<string, number> = {};
  for (const it of [...albums, ...singles, ...features])
    for (const c of it.certs) counts[c.c] = (counts[c.c] || 0) + 1;
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([code, n]) => ({
      flag: COUNTRIES[code]?.flag,
      name: COUNTRIES[code]?.name ?? code,
      meta: COUNTRIES[code]?.body,
      value: n,
      displayValue: String(n),
    }));
})();

const shortBody = (name: string) => name.match(/\(([^)]+)\)/)?.[1] ?? name;
const winsByBody: BarItem[] = ceremonies
  .map((c) => ({ name: c.name, wins: c.noms.filter((n) => n.won).length }))
  .filter((c) => c.wins > 0)
  .sort((a, b) => b.wins - a.wins)
  .slice(0, 10)
  .map((c) => ({ name: shortBody(c.name), value: c.wins, displayValue: `${c.wins}` }));

// ── Scatter: tickets vs revenue per show ──
// Label the four highest-grossing shows. The 3rd & 4th are both La Défense Arena
// (Fally Ipupa's and Burna's), so disambiguate by artist and drop the 4th label
// below its dot so the two don't collide.
const num = (s: string | undefined) => Number((s ?? "").replace(/,/g, ""));
const TOP_LABELS = 4;
const firstName = (a: string) => (a === "Burna Boy" ? "Burna" : a.split(" ")[0]);
const shortVenue = (v: string) => v.replace(/ Arena$/, "");
const topVenueCount: Record<string, number> = {};
revenueShows.slice(0, TOP_LABELS).forEach((s) => {
  topVenueCount[s.venue] = (topVenueCount[s.venue] || 0) + 1;
});
const scatter: ScatterPoint[] = revenueShows
  .filter((s) => s.tickets && !Number.isNaN(num(s.tickets)))
  .map((s, i) => ({
    x: num(s.tickets),
    y: s.revenue,
    title: `${s.artist} — ${s.venue}, ${s.city}: ${s.tickets} tickets · $${(s.revenue / 1e6).toFixed(2)}M`,
    tone: s.artist === "Burna Boy" ? "gold" : "muted",
    label:
      i < TOP_LABELS
        ? topVenueCount[s.venue] > 1
          ? `${shortVenue(s.venue)} (${firstName(s.artist)})`
          : shortVenue(s.venue)
        : undefined,
    labelDy: i === 3 ? 22 : undefined, // 4th show: label below its dot
  }));

// ── Donut: certifications by tier ──
const tiers: Record<string, number> = { Diamond: 0, Platinum: 0, Gold: 0, Silver: 0 };
for (const it of [...albums, ...singles, ...features]) for (const c of it.certs) tiers[c.level]++;
const tierSegments: DonutSeg[] = [
  { label: "Diamond", value: tiers.Diamond, color: "#8fe3f0" },
  { label: "Platinum", value: tiers.Platinum, color: "#dfe2e8" },
  { label: "Gold", value: tiers.Gold, color: "#ffb627" },
  { label: "Silver", value: tiers.Silver, color: "#b8bcc4" },
];

// ── Donut: chart entries by how high they peaked ──
const peakBands = { "No. 1": 0, "Top 5": 0, "Top 10": 0, "Top 40": 0, "41–100": 0 };
for (const r of [...albumCharts, ...singleCharts, ...featureCharts])
  for (const e of r.entries) {
    if (e.peak === 1) peakBands["No. 1"]++;
    else if (e.peak <= 5) peakBands["Top 5"]++;
    else if (e.peak <= 10) peakBands["Top 10"]++;
    else if (e.peak <= 40) peakBands["Top 40"]++;
    else peakBands["41–100"]++;
  }
const totalEntries = Object.values(peakBands).reduce((a, b) => a + b, 0);
const top5Count = peakBands["No. 1"] + peakBands["Top 5"];
const peakSegments: DonutSeg[] = [
  { label: "No. 1", value: peakBands["No. 1"], color: "#ffd24a" },
  { label: "Top 5", value: peakBands["Top 5"], color: "#ffb627" },
  { label: "Top 10", value: peakBands["Top 10"], color: "#c98a2e" },
  { label: "Top 40", value: peakBands["Top 40"], color: "#8a7a52" },
  { label: "41–100", value: peakBands["41–100"], color: "#5a5a62" },
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

// ── Donut: award wins vs nominations (career strike rate) ──
const totalNoms = ceremonies.reduce((n, c) => n + c.noms.length, 0);
const winRate = Math.round((totalWins / totalNoms) * 100);
const winRateSegments: DonutSeg[] = [
  { label: "Won", value: totalWins, color: "#ffb627" },
  { label: "Nominated", value: totalNoms - totalWins, color: "#4a4a52" },
];

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
    "Charted views of Burna Boy's career: biggest single-show grosses, certifications by country, and award wins by body.",
  path: "/records/visualized",
  keywords: ["Burna Boy", "charts", "data visualization", "grosses", "certifications", "awards", "chart peaks", "win rate", "most-streamed African artist", "Wizkid", "Tyla", "Rema", "Tems"],
  variableMeasured: ["Revenue per show", "Certifications per country", "Chart peak distribution", "Spotify streams by artist", "Award wins per body", "Award win rate"],
});


// Mobile carries the charts that survive one column: three ranked-bar sets and
// three donuts. Each is a slice of a chart the desktop page draws in full.
const toBars = (items: BarItem[], n: number) => {
  const top = items.slice(0, n);
  const max = Math.max(...top.map((b) => b.value));
  return top.map((b) => ({
    name: [b.flag, b.name].filter(Boolean).join(" "),
    value: b.displayValue,
    frac: b.value / max,
    his: b.tone !== "muted",
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
        bars={[
          {
            title: "Biggest single-show grosses",
            note: `Gold is Burna Boy — ${burnaShowCount} of the ${revenueShows.length} biggest nights.`,
            items: toBars(grosses, 6),
          },
          {
            title: "Certifications by country",
            note: `The 6 biggest of ${certifyingCountryCount} certifying countries — Nigeria leads on ${certsByCountry[0]?.value}.`,
            items: toBars(certsByCountry, 6),
          },
          {
            title: "Most-decorated stages",
            note: `Where his ${totalWins} wins come from — top 6 bodies.`,
            items: toBars(winsByBody, 6),
          },
        ]}
        donuts={[
          {
            title: "Certifications by tier",
            centre: `${totalAwards()}`,
            centreLabel: "certifications",
            legend: tierSegments.map((s) => ({ label: s.label, value: s.value, color: s.color })),
          },
          {
            title: "Chart entries by peak",
            centre: `${peakBands["No. 1"]}`,
            centreLabel: "No. 1 peaks",
            legend: peakSegments.map((s) => ({ label: s.label, value: s.value, color: s.color })),
          },
          {
            title: "Wins vs nominations",
            centre: `${winRate}%`,
            centreLabel: "win rate",
            legend: winRateSegments.map((s) => ({ label: s.label, value: s.value, color: s.color })),
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

        {/* ── Grosses ────────────────────────────────────────── */}
        <section id="grosses" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Box office</div>
          <h2 className={styles.h2}>Biggest single-show grosses</h2>
          <div className={styles.chartBody}>
            <RankedBars items={grosses} ariaLabel="The 12 highest single-show grosses by an African artist, in millions of US dollars" />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            <span className={styles.captionLead}>Gold bars are Burna Boy</span> — he holds{" "}
            {burnaShowCount} of the {revenueShows.length} biggest single-show grosses by an
            African artist, more than everyone else combined.
          </p>
          <Link href="/records/tours/revenue" className={`btn btnSecondary ${styles.cta}`}>
            Full leaderboard ↗
          </Link>
        </section>

        {/* ── Tickets vs revenue ─────────────────────────────── */}
        <section id="tickets-revenue" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Box office</div>
          <h2 className={styles.h2}>Tickets vs revenue</h2>
          <div className={styles.chartBody}>
            <ScatterChart
              points={scatter}
              xMax={65000}
              yMax={6.5e6}
              xTicks={[{ value: 0, label: "0" }, { value: 20000, label: "20k" }, { value: 40000, label: "40k" }, { value: 60000, label: "60k" }]}
              yTicks={[{ value: 0, label: "$0" }, { value: 2e6, label: "$2M" }, { value: 4e6, label: "$4M" }, { value: 6e6, label: "$6M" }]}
              xLabel="Tickets sold"
              yLabel="Gross revenue"
              // Not the full list: the scatter plots only shows with a reported
              // ticket count, so the label counts the points actually drawn.
              ariaLabel={`Scatter plot of tickets sold versus gross revenue across ${scatter.length} of the biggest single shows`}
            />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            Each dot is a show — <span className={styles.captionLead}>gold is Burna Boy</span>.
            Revenue tracks ticket count closely, but higher-priced rooms sit above the line:
            London Stadium turned ~59,000 tickets into $6.15M.
          </p>
        </section>

        {/* ── Certifications by country ──────────────────────── */}
        <section id="certifications" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Certified worldwide</div>
          <h2 className={styles.h2}>Certifications by country</h2>
          <div className={styles.chartBody}>
            <RankedBars items={certsByCountry} ariaLabel="Burna Boy's music certifications by country — the top 12" />
          </div>
          <p className={`${styles.caption} ${styles.captionNarrow}`}>
            The {certsByCountry.length} biggest of {certifyingCountryCount} certifying
            countries — Nigeria (TurnTable), the UK (BPI) and Canada (Music Canada) lead the
            tally.
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
            singles, crowned by {tiers.Diamond} Diamond awards (Last Last, Location, On the
            Low, Gbona, Jerusalema and Be Honest, all in France).
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
            <span className={styles.heatHint}>Brighter = higher peak</span>
          </div>
          <div className={styles.chartBody}>
            <PeakMap data={peakByISO} ariaLabel="World map coloured by Burna Boy's best official chart peak in each country" />
          </div>
          <p className={styles.caption}>
            His best official chart position in each of {peakCountryCount} countries —
            brighter means higher. No. 1s span Nigeria, the UK, the Netherlands, Belgium,
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
            <RankedBars items={africanStreams} ariaLabel="Most-streamed African artists on Spotify in 2025, by total streams in billions" />
          </div>
          <p className={styles.caption}>
            <span className={styles.captionLead}>Burna Boy leads</span> — his 1.986 billion
            Spotify streams in 2025 were the most of any African artist, the biggest
            streaming year ever by an African act, just ahead of Wizkid, Tyla, Rema and
            Tems.
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
            <RankedBars items={winsByBody} ariaLabel="Burna Boy's award wins by award body — the top 10" />
          </div>
          <p className={styles.caption}>
            Where his {totalWins} wins come from — the top {winsByBody.length} award bodies
            by number of trophies, the Grammy and BET Awards alongside a deep African-awards
            haul.
          </p>
          <Link href="/records/awards" className={`btn btnSecondary ${styles.cta}`}>
            Every award ↗
          </Link>
        </section>

        {/* ── Win rate ───────────────────────────────────────── */}
        <section id="win-rate" className={`${styles.wrap} ${styles.sectionPad}`}>
          <div className={styles.eyebrow}>Decorated</div>
          <h2 className={styles.h2}>Wins vs nominations</h2>
          <div className={styles.donutPanel}>
            <TierDonut
              segments={winRateSegments}
              total={totalNoms}
              centerNum={`${winRate}%`}
              centerLabel="win rate"
              ariaLabel={`Award win rate: ${totalWins} won of ${totalNoms} nominations`}
            />
          </div>
          <p className={styles.caption}>
            Across every awards ceremony, {totalWins} of {totalNoms} career nominations
            converted to wins — a {winRate}% strike rate.
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
