import Link from "next/link";
import styles from "./cars.module.css";
import CountUp from "../../components/CountUp";
import { cars, recentAddition, carCount, totalValueFormatted } from "../../data/cars";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy's Car Collection — Every Confirmed Vehicle",
  description:
    `Burna Boy's reported car collection — ${carCount} confirmed vehicles worth over ${totalValueFormatted}, from a McLaren Senna to a Rolls-Royce Cullinan.`,
  path: "/records/cars",
  shareTitle: "Burna Boy's Car Collection",
  shareDescription: `${carCount} confirmed cars, worth over ${totalValueFormatted}.`,
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
        <p>Every confirmed vehicle in the garage, and what it reportedly cost him</p>
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

        <div className={styles.grid}>
          {cars.map((c) => (
            <div key={`${c.make}-${c.model}`} className={styles.card}>
              <a
                className={styles.photoLink}
                href={c.imageSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${c.make} ${c.model} on Wikipedia (photo source)`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.photo}
                  src={c.image}
                  alt={`${c.make} ${c.model}${c.year ? ` (${c.year})` : ""} — stock photo, not the specific car`}
                  loading="lazy"
                  width={640}
                  height={480}
                />
              </a>
              <div className={styles.body}>
                <span className={styles.make}>{c.make}</span>
                <h2 className={styles.model}>{c.model}{c.year ? ` (${c.year})` : ""}</h2>
                <div className={styles.value}>{formatUsd(c.valueUsd)}</div>
                <div className={styles.valueSub}>{c.valueNaira} reported</div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          A {recentAddition.make} {recentAddition.model} was reported as a more
          recent addition to the fleet — its value hasn&apos;t been disclosed, so
          it isn&apos;t counted in the total above. A widebody Bugatti Chiron has
          also reportedly been commissioned for him by a Dubai customisation
          shop, but is not yet delivered.
        </p>

        <p className={styles.source}>
          Values and models are as reported by Pulse Nigeria&apos;s itemised
          breakdown (November 2025), cross-checked against other Nigerian
          entertainment press. Photos are stock images of the same model via
          Wikimedia Commons — not photos of his actual car, since no
          freely-licensed photo of the specific vehicles exists. Tap a photo
          for its source and license.
        </p>

        <Link href="/records" className={styles.back}>← Career Records</Link>
      </div>
    </main>
  );
}
