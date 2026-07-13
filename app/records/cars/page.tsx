import Link from "next/link";
import styles from "./cars.module.css";
import CountUp from "../../components/CountUp";
import StatGrid from "../../components/StatGrid";
import KeepExploring from "../../components/KeepExploring";
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

// "At a glance" summary — brand tally + a few crowd-pleasing superlatives, all
// from the (value-sorted) car data so they stay in sync with the list below.
const byMake = new Map<string, number>();
for (const c of cars) byMake.set(c.make, (byMake.get(c.make) ?? 0) + 1);
const makeTally = [...byMake.entries()].sort((a, b) => b[1] - a[1]);
const priciest = cars[0];
const highlights = [
  { label: "Most expensive", value: `${priciest.make} ${priciest.model.split(" (")[0]}`, meta: `${priciest.valueNaira} (reported)` },
  { label: "Only one in Africa", value: "Ferrari SF90 Stradale", meta: "reported" },
  { label: "Most of one brand", value: `${makeTally[0][1]}× ${makeTally[0][0]}`, meta: "his favourite marque" },
];

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
        <StatGrid
          stats={[
            { num: <CountUp end={carCount} />, label: "Confirmed cars" },
            { num: `${totalValueFormatted}+`, label: "Reported collection value" },
          ]}
        />

        <section className={styles.glance} aria-label="Collection at a glance">
          <p className={styles.glanceEyebrow}>The collection at a glance</p>
          <div className={styles.highlights}>
            {highlights.map((h) => (
              <div key={h.label} className={styles.highlight}>
                <span className={styles.hLabel}>{h.label}</span>
                <span className={styles.hValue}>{h.value}</span>
                <span className={styles.hMeta}>{h.meta}</span>
              </div>
            ))}
          </div>
          <ul className={styles.brandTally}>
            {makeTally.map(([make, n]) => (
              <li key={make} className={styles.tallyItem}><b>{n}</b> {make}</li>
            ))}
          </ul>
        </section>

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
                    {c.linkLabel ?? "See Burna in it"} ↗
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

      <KeepExploring current="/records/cars" />
    </main>
  );
}
