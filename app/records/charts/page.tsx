import Link from "next/link";
import styles from "./charts.module.css";
import CountUp from "../../components/CountUp";
import ChartExplorer from "../../components/ChartExplorer";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
} from "../../data/charts";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: `Burna Boy Chart History — ${numberOnes} No.1s & Peak Positions Worldwide`,
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
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <header className="pageHeader container">
        <h1>
          Official <span className="accent">Charts</span>
        </h1>
        <p>Burna Boy&apos;s peak positions on the world&apos;s official charts</p>
      </header>

      <div className="container">
        <div className={styles.summary}>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={chartEntryCount} /></span>
            <span className={styles.sumLabel}>Chart entries</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={numberOnes} /></span>
            <span className={styles.sumLabel}>No. 1 peaks</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={chartCountryCount} /></span>
            <span className={styles.sumLabel}>Countries</span>
          </div>
        </div>

        <p className="lead" style={{ margin: "22px auto 0", textAlign: "center" }}>
          Burna Boy has {chartEntryCount} entries on official national charts across
          {" "}{chartCountryCount} countries, reaching No. 1 a total of {numberOnes}
          {" "}times — with chart-toppers spanning Nigeria, the UK, South Africa, the
          Netherlands, Switzerland and Colombia.
        </p>

        <ChartExplorer
          albums={albumCharts}
          singles={singleCharts}
          features={featureCharts}
          countries={CHART_COUNTRIES}
        />

        <p className={styles.source}>
          Peak positions on each country&apos;s principal national chart —
          Billboard (Hot 100 / 200), the Official Charts Company, SNEP, GfK,
          ARIA, Recorded Music NZ, IRMA, Ultratop, FIMI, PROMUSICAE, AFP,
          TurnTable, The Official SA Charts and Billboard Global 200, among
          others. Genre, airplay and below-the-main-chart &ldquo;bubbling&rdquo;
          listings are excluded. Figures are peak-so-far, cross-checked against
          the chart bodies&apos; cited data as of July 2026.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
