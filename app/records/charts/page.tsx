import Link from "next/link";
import styles from "./charts.module.css";
import CountUp from "../../components/CountUp";
import {
  albumCharts,
  singleCharts,
  featureCharts,
  CHART_COUNTRIES,
  chartTier,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
  type ChartRelease,
} from "../../data/charts";

export const metadata = {
  title: "Burna Boy Official Chart Entries — Peak Positions Worldwide",
  description:
    "Every Burna Boy official chart entry and peak position — US Billboard, UK Official Charts, France (SNEP), Germany, Australia, Ireland and more.",
  alternates: { canonical: "/records/charts" },
};

function Row({ item }: { item: ChartRelease }) {
  const entries = [...item.entries].sort((a, b) => a.peak - b.peak);
  return (
    <div className={styles.row}>
      <div>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.credit}>
          {item.credit ? `${item.credit} · ${item.year}` : item.year}
        </span>
      </div>
      <div className={styles.peaks}>
        {entries.map((e) => {
          const country = CHART_COUNTRIES[e.c];
          return (
            <span
              key={e.c}
              className={`${styles.peak} ${styles[chartTier(e.peak)]}`}
              title={`${country.name} — ${country.body}${e.note ? " · " + e.note : ""}`}
            >
              <span className={styles.flag}>{country.flag}</span>#{e.peak}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Group({ label, items }: { label: string; items: ChartRelease[] }) {
  return (
    <>
      <h2 className={`secTitle ${styles.group}`}>
        <span className="goldText">{label}</span>{" "}
        <span className={styles.count}>({items.length})</span>
      </h2>
      <div className={styles.list}>
        {items.map((it) => (
          <Row key={it.title} item={it} />
        ))}
      </div>
    </>
  );
}

export default function ChartsPage() {
  return (
    <main id="content">
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
            <span className={styles.sumLabel}>No. 1s</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={chartCountryCount} /></span>
            <span className={styles.sumLabel}>Countries</span>
          </div>
        </div>

        <Group label="Albums" items={albumCharts} />
        <Group label="Singles" items={singleCharts} />
        <Group label="Featured" items={featureCharts} />

        <p className={styles.source}>
          Peak positions from each country&apos;s official chart (Billboard, the
          Official Charts Company, SNEP, ARIA, RMNZ, IRMA, Ultratop, GfK and
          others) via Wikipedia&apos;s cited tables, as of June 2026.
          “Variant chart”, “Bubbling Under” and “Hot Singles” denote a
          country&apos;s secondary singles chart. More songs and countries are
          being added.
        </p>
        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
