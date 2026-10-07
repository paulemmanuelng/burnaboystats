import Link from "next/link";
import styles from "./charts.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileOfficialCharts from "../../components/MobileOfficialCharts";
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
  BURNA_LAST_CHART_SWEEP,
} from "../../data/charts";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";
import { coLeadsFor } from "../../data/creditRoles";
import { chartCovers } from "../../lib/chartCovers";
import { byReachOrder } from "../../lib/chartOrder";

/** "October 2026" — the month of the last read at the chart bodies. */
const checkedAsOf = new Date(`${BURNA_LAST_CHART_SWEEP}T12:00:00Z`).toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

// Most-charted first on BOTH layouts. The phone printed the data file's
// insertion order (Own It leading the features, Outside's one chart above No
// Sign of Weakness's nine) while the desktop explorer sorted by reach on the
// same page (5 Oct 2026, records-03).
const albums = [...albumCharts].sort(byReachOrder);
const singles = [...singleCharts].sort(byReachOrder);
const features = [...featureCharts].sort(byReachOrder);
// His co-leads among the charting releases (Singles by Spotify's credit role,
// billed to another act or co-billed): the "co-lead" tag on both layouts.
const coLeads = coLeadsFor([...albums, ...singles, ...features].map((r) => r.title));

export const metadata = pageMetadata({
  title: `Burna Boy Chart History — ${numberOnes} No. 1s & Chart Peaks`,
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
  // Cover art by title, resolved here so the catalogue stays out of the
  // client bundle. ONE object for both layouts: the RSC payload sends it once.
  const covers = chartCovers(albums, singles, features);
  const stats = [
    { num: chartEntryCount, label: "Chart entries", note: "official charts only" },
    { num: numberOnes, label: "No. 1 peaks", note: "placements, not releases" },
    // chartCountryCount is territories, not countries: it counts every distinct
    // code in the data and two of those are the Billboard global charts. The
    // label said "Countries" and the note said "+ 2 global charts", which reads
    // as that many countries and two more on top. The prose two tiles down has
    // always said "territories"; the tile now agrees with it.
    { num: chartCountryCount, label: "Territories", note: `${chartCountryCount - 2} countries + 2 global charts` },
    { num: allReleases, label: "Charting releases", note: "albums, singles, features" },
  ];
  // The airplay/monitor row is new because the panel used to have three rows
  // and the first of them absorbed every airplay carve-out: Monitor Latino,
  // TopHit, Radiomonitor, Ipsos and BMAT were all published here as "national
  // industry-body charts". See chartSourceSplit in data/charts.ts.
  const split = [
    { n: chartSourceSplit.nationalBody, label: "national industry-body charts" },
    {
      n: chartSourceSplit.airplayMonitor,
      label: "airplay or monitor charts, where a country has no other",
    },
    {
      n: chartSourceSplit.billboardCountry,
      label: "Billboard country charts, where no national chart exists",
    },
    { n: chartSourceSplit.global, label: "Billboard worldwide charts" },
  ];

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />

      {/* Mobile is a dedicated screen, not the shared deep-page grammar: a
          flat list would throw away the peak pills, the country filter and
          the grouping that this page exists for. */}
      <MobileOfficialCharts
        albums={albums}
        singles={singles}
        features={features}
        countries={CHART_COUNTRIES}
        entryCount={chartEntryCount}
        territoryCount={chartCountryCount}
        territoryNote={`${chartCountryCount - 2} countries + 2 global charts`}
        numberOnes={numberOnes}
        releaseCount={allReleases}
        sourceSplit={chartSourceSplit}
        covers={covers}
        coLeads={coLeads}
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
          albums={albums}
          singles={singles}
          features={features}
          countries={CHART_COUNTRIES}
          covers={covers}
          coLeads={coLeads}
        />
      </div>

      {/* ── Where the charts come from ─────────────────────────────
          The "as of" below read August while data/charts.ts was rewritten at
          the bodies in September: ten more "Dai Dai" runs walked chart by
          chart, the Dominican Republic and El Salvador entries pulled as
          regional listings misread as national ones, and Lebanon and Panama
          disclosed as airplay carve-outs — all on 1-3 Sep 2026. An "as of
          August" stamp over rows that did not exist in August is false about
          those rows, which is the only reason this one moved. Do NOT bump it
          because the calendar did: it dates the checking, not the visit. Since
          5 Oct 2026 it is read off BURNA_LAST_CHART_SWEEP (data/charts.ts), the
          2 Oct 2026 sweep that added the MK and SI rows. */}
      <section className={styles.sourceWrap}>
        <div className={styles.sourceGrid}>
          <p className={styles.source}>
            Peak positions on each country&apos;s principal national chart.{" "}
            {chartSourceSplit.nationalBody} come from the national industry body itself — the
            Official Charts Company, SNEP, GfK, FIMI, PROMUSICAE, ZPAV, ARIA, Recorded Music
            NZ, IRMA, Ultratop, AFP, TurnTable, The Official SA Charts and their equivalents.{" "}
            {chartSourceSplit.airplayMonitor} are airplay or broadcast-monitor charts —
            Monitor Latino, TopHit, Radiomonitor, Ipsos, BMAT, PROPHON — counted only where the
            country publishes no other national chart.{" "}
            {chartSourceSplit.billboardCountry}{" "}
            are Billboard country charts, used only where a territory publishes no chart of its own — including the US and Canada, where
            Billboard&apos;s is the chart of record. The other {chartSourceSplit.global}{" "}
            are Billboard&apos;s worldwide charts. Where an official national chart exists, it
            always wins. Genre and below-the-main-chart &ldquo;bubbling&rdquo; listings are
            excluded, as are airplay charts — with one narrow exception: in the handful of
            countries that publish no non-airplay national chart at all, the airplay chart is
            the only national chart there is, and is used. Where a country runs both, the
            non-airplay chart wins. Figures are peak-so-far, cross-checked against the chart
            bodies&apos; cited data as of {checkedAsOf}.
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
