import Link from "next/link";
import styles from "./cars.module.css";
import CountUp from "../../components/CountUp";
import { cars, carCount, totalValueFormatted } from "../../data/cars";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy's Car Collection — Every Confirmed Vehicle",
  description:
    `Burna Boy's reported car collection — ${carCount} confirmed vehicles worth over ${totalValueFormatted}, led by his ₦9 billion one-of-one widebody Bugatti Chiron.`,
  path: "/records/cars",
  shareTitle: "Burna Boy's Car Collection",
  shareDescription: `${carCount} confirmed cars, worth over ${totalValueFormatted}, led by a ₦9bn Bugatti Chiron.`,
});

const carsDataset = datasetJsonLd({
  name: "Burna Boy's car collection",
  description: `Burna Boy's reported car collection — ${carCount} confirmed vehicles and their reported purchase value.`,
  path: "/records/cars",
  keywords: ["Burna Boy", "cars", "car collection", "supercars", "net worth"],
  variableMeasured: ["Make", "Model", "Year", "Reported value"],
});

function formatUsd(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

export default function CarsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(carsDataset) }} />
      <header className="pageHeader container">
        <h1>
          Car <span className="accent">Collection</span>
        </h1>
        <p>Every confirmed vehicle in the garage, ranked by what it reportedly cost him</p>
      </header>

      <div className="container">
        <div className={styles.summary}>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}><CountUp end={carCount} /></span>
            <span className={styles.sumLabel}>Confirmed cars</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}>{totalValueFormatted}+</span>
            <span className={styles.sumLabel}>Reported collection value</span>
          </div>
        </div>

        <ol className={styles.list}>
          {cars.map((c, i) => (
            <li key={`${c.make}-${c.model}`} className={styles.row}>
              <span className={styles.rank}>{i + 1}</span>
              <div className={styles.main}>
                <span className={styles.make}>{c.make}</span>
                <h2 className={styles.model}>{c.model}{c.year ? ` (${c.year})` : ""}</h2>
                <p className={styles.desc}>{c.desc}</p>
                {c.link && (
                  <a className={styles.seeIt} href={c.link} target="_blank" rel="noopener noreferrer">
                    See Burna in it ↗
                  </a>
                )}
              </div>
              <div className={styles.valueBlock}>
                <span className={styles.value}>{formatUsd(c.valueUsd)}</span>
                <span className={styles.valueSub}>{c.valueNaira}</span>
              </div>
            </li>
          ))}
        </ol>

        <p className={styles.source}>
          Models and reported values are compiled from Pulse Nigeria&apos;s
          itemised breakdown (November 2025) and, for the Bugatti Chiron and
          Ferrari SF90, July 2026 coverage of their unveiling/delivery — cross-
          checked against other Nigerian entertainment press. Naira figures are
          import-inclusive; dollar conversions follow the source. This is a
          text record only — no car photos are hosted here.
        </p>
        <p className={styles.source}>
          This list isn&apos;t guaranteed complete. Unlike this site&apos;s charts,
          certifications and awards — which trace to an official chart body or
          academy — a celebrity car collection has no equivalent record. It&apos;s
          reconstructed from entertainment press and social sightings, which
          vary a lot in reliability (some outlets have reported cars that don&apos;t
          check out) and can lag a real purchase by days or weeks. Only cars
          confirmed by multiple independent sources are listed here.
        </p>

        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
