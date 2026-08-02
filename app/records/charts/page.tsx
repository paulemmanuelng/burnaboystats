import Link from "next/link";
import styles from "./charts.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileDeepPage from "../../components/MobileDeepPage";
import ChartExplorer from "../../components/ChartExplorer";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  chartSourceSplit,
  CHART_COUNTRIES,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
} from "../../data/charts";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: `Burna Boy Chart History — ${numberOnes} No.1s & Chart Peaks`,
  description:
    "Every Burna Boy official chart entry and peak position worldwide — US Billboard, UK Official Charts, SNEP and more. Filter by country.",
  path: "/records/charts",
  shareTitle: "Burna Boy Official Chart Entries",
  shareDescription: "Peak positions on every major chart worldwide.",
});

export default function ChartsPage() {
  const dataset = datasetJsonLd({
    name: "Burna Boy official chart peaks by country",
    description: `Burna Boy's peak positions on official singles and album charts across ${chartCountryCount} territories — every charting release and its highest position, country by country, including ${numberOnes} No. 1 peaks.`,
    path: "/records/charts",
    keywords: ["Burna Boy", "chart positions", "official charts", "Billboard", "UK Official Charts", "peak chart position", "Afrobeats charts"],
    variableMeasured: ["Peak chart position", "Country / territory", "Release", "Chart"],
  });
  const allReleases = albumCharts.length + singleCharts.length + featureCharts.length;
  const stats = [
    { num: chartEntryCount, label: "Chart entries", note: "official charts only" },
    { num: numberOnes, label: "No. 1 peaks", note: "placements, not releases" },
    { num: chartCountryCount, label: "Countries", note: "+ 2 global charts" },
    { num: allReleases, label: "Charting releases", note: "albums, singles, features" },
  ];
  const split = [
    { n: chartSourceSplit.nationalBody, label: "national industry-body charts" },
    {
      n: chartSourceSplit.billboardCountry,
      label: "Billboard country charts, where no national chart exists",
    },
    { n: chartSourceSplit.global, label: "Billboard worldwide charts" },
  ];

  // The mobile screen leads with reach — how many charts each release has
  // entered — which is the one ordering a phone list can carry.
  const allItems = [...albumCharts, ...singleCharts, ...featureCharts];
  const mostCharted = [...allItems]
    .sort((a, b) => b.entries.length - a.entries.length)
    .slice(0, 6)
    .map((r, i) => ({
      rank: String(i + 1).padStart(2, "0"),
      title: r.title,
      sub: [r.credit, r.year].filter(Boolean).join(" · "),
      value: `${r.entries.length} charts`,
      lead: i === 0,
    }));

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />

      {/* Mobile is its own screen — the shared deep-page grammar. */}
      <MobileDeepPage
        label="Official charts"
        badge={String(chartEntryCount)}
        kicker="Peak positions worldwide"
        titlePre="Official "
        titleGold="charts"
        lede={`${chartEntryCount} entries across ${chartCountryCount} territories, ${numberOnes} of them at No. 1.`}
        stats={[
          { value: String(chartEntryCount), label: "Chart entries" },
          { value: String(numberOnes), label: "No. 1 peaks" },
          { value: String(chartCountryCount), label: "Territories" },
        ]}
        listTitle="Most-charted releases"
        listMeta="sorted by reach"
        rows={mostCharted}
        footNote={`Peaks on each country's principal national chart — ${chartSourceSplit.nationalBody} national bodies, ${chartSourceSplit.billboardCountry} Billboard country charts, ${chartSourceSplit.global} worldwide. Airplay and genre charts excluded.`}
        ctaLabel="Live charts today"
        ctaHref="/live-charts"
      />

      <div className={styles.desktopOnly}>
      <BreadcrumbBar path="/records/charts" />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.heroWrap}>
        <div className={styles.kicker}>Peak positions worldwide</div>
        <h1 className={styles.h1}>
          Official <span className="inkText">Charts</span>
        </h1>
        <p className={styles.lede}>
          Burna Boy&apos;s peak positions on the world&apos;s official charts — {chartEntryCount}{" "}
          entries across {chartCountryCount} territories, {numberOnes} of them at No. 1, with
          chart-toppers spanning Nigeria, the UK, South Africa, the Netherlands, Switzerland
          and Colombia.
        </p>

        <div className={styles.statGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCell}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statNote}>{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.explorerWrap}>
        <ChartExplorer
          albums={albumCharts}
          singles={singleCharts}
          features={featureCharts}
          countries={CHART_COUNTRIES}
        />
      </div>

      {/* ── Where the charts come from ───────────────────────────── */}
      <section className={styles.sourceWrap}>
        <div className={styles.sourceGrid}>
          <p className={styles.source}>
            Peak positions on each country&apos;s principal national chart.{" "}
            {chartSourceSplit.nationalBody} come from the national industry body itself — the
            Official Charts Company, SNEP, GfK, FIMI, PROMUSICAE, ZPAV, ARIA, Recorded Music
            NZ, IRMA, Ultratop, AFP, TurnTable, The Official SA Charts and their equivalents.{" "}
            {chartSourceSplit.billboardCountry}{" "}
            are Billboard country charts, used only where a territory publishes no chart of its own — including the US and Canada, where
            Billboard&apos;s is the chart of record. The other {chartSourceSplit.global}{" "}
            are Billboard&apos;s worldwide charts. Where an official national chart exists, it
            always wins. Genre and below-the-main-chart &ldquo;bubbling&rdquo; listings are
            excluded, as are airplay charts — with one narrow exception: in the handful of
            countries that publish no non-airplay national chart at all, the airplay chart is
            the only national chart there is, and is used. Where a country runs both, the
            non-airplay chart wins. Figures are peak-so-far, cross-checked against the chart
            bodies&apos; cited data as of July 2026.
          </p>
          <div className={styles.splitPanel}>
            <div className={styles.splitKicker}>Where the charts come from</div>
            <div className={styles.splitList}>
              {split.map((s) => (
                <div key={s.label} className={styles.splitRow}>
                  <span className={styles.splitNum}>{s.n}</span>
                  <span className={styles.splitLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Onward ───────────────────────────────────────────────── */}
      <section className={styles.actionWrap}>
        <div className={styles.actions}>
          <Link href="/records" className="btn btnSecondary">← Career records</Link>
          <Link href="/live-charts" className="btn btnPrimary">Live charts today ↗</Link>
          <Link href="/certifications" className="btn btnSecondary">Certifications ↗</Link>
        </div>
      </section>

      <KeepExploring current="/records/charts" />
      </div>
    </main>
  );
}
