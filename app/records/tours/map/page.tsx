import Link from "next/link";
import styles from "./map.module.css";
import PerformanceMap from "../../../components/PerformanceMap";
import {
  performedCountries,
  REGION_ORDER,
  countryCount,
  regionCount,
} from "../../../data/performedCountries";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata({
  title: "Where Burna Boy Has Performed — Live Around the World",
  description:
    "An interactive world map of every country Burna Boy has performed live — across Africa, Europe, North America, the Caribbean and Oceania, from his tours, festivals and one-off shows.",
  path: "/records/tours/map",
  shareTitle: "Where Burna Boy Has Performed",
  shareDescription: "Every country the African Giant has played live, mapped.",
});

export default function PerformanceMapPage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Around the <span className="accent">World</span>
        </h1>
        <p>Every country Burna Boy has performed live</p>
      </header>

      <div className="container">
        <p className={styles.intro}>
          From Lagos to London, Sydney to Kingston — every country the African
          Giant has taken to the stage, drawn from his headline tours, festival
          sets and one-off shows. Hover or tap a highlighted country to see a
          standout show there.
        </p>

        <div className={styles.summary}>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}>{countryCount}</span>
            <span className={styles.sumLabel}>Countries</span>
          </div>
          <div className={styles.sumCard}>
            <span className={styles.sumNum}>{regionCount}</span>
            <span className={styles.sumLabel}>Regions</span>
          </div>
        </div>

        <PerformanceMap />
        <div className={styles.legend}>
          <span className={styles.swatch} /> Performed live — hover or tap a country
        </div>

        <div className={styles.regionGrid}>
          {REGION_ORDER.map((region) => {
            const list = performedCountries.filter((c) => c.region === region);
            if (!list.length) return null;
            return (
              <div className={styles.region} key={region}>
                <div className={styles.regionHead}>
                  <h2 className={styles.regionName}>{region}</h2>
                  <span className={styles.regionCount}>{list.length}</span>
                </div>
                {list.map((c) => (
                  <div className={styles.countryRow} key={c.code}>
                    <span className={styles.cFlag}>{c.flag}</span>
                    <span className={styles.cName}>{c.name}</span>
                    <span className={styles.cNote}>{c.highlight}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <p className={styles.source}>
          Compiled from Burna Boy&apos;s tours, festivals and one-off shows,
          cross-checked against press and live records, as of 26 June 2026. Shows
          verified live performances only; it grows as more are confirmed. Tiny
          island nations may appear only in the list, not the map. Map shapes:
          world-atlas.
        </p>
        <Link href="/records/tours" className={styles.back}>
          ← Tours &amp; Live
        </Link>
      </div>
    </main>
  );
}
