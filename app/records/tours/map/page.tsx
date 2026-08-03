import Link from "next/link";
import PerformanceMap from "../../../components/PerformanceMap";
import BreadcrumbBar from "../../../components/BreadcrumbBar";
import MobileTourMap from "../../../components/MobileTourMap";
import { pageMetadata, datasetJsonLd } from "../../../lib/seo";
import {
  countryCount,
  regionCount,
  performedCountries,
  REGION_ORDER,
} from "../../../data/performedCountries";
import styles from "./map.module.css";

export const metadata = pageMetadata({
  title: "Where Burna Boy Has Performed — Interactive World Map",
  description: `An interactive map of every country Burna Boy has performed in — ${countryCount} countries across ${regionCount} regions. Hover a country to see the shows there.`,
  path: "/records/tours/map",
  shareTitle: "Where Burna Boy Has Performed",
  shareDescription: `Every country he's taken to the stage — ${countryCount} and counting.`,
});

const byRegion = REGION_ORDER.map((region) => ({
  region,
  countries: performedCountries.filter((c) => c.region === region),
})).filter((g) => g.countries.length > 0);

const dataset = datasetJsonLd({
  name: "Countries where Burna Boy has performed live",
  description: `Every country Burna Boy has performed in live — ${countryCount} countries across ${regionCount} regions, from tours, festivals and one-off shows.`,
  path: "/records/tours/map",
  keywords: ["Burna Boy", "tour", "countries performed", "live performances", "concerts", "festivals"],
  variableMeasured: ["Country", "Region", "Notable performances"],
});

// The design's heading reads "Seven regions, five continents". Five doesn't
// survive its own region list: the seven regions sit on six continents once the
// Caribbean folds into North America — every continent except Antarctica. So
// the count is derived here and the heading says six.
const CONTINENT_OF: Record<string, string> = {
  Africa: "Africa",
  Europe: "Europe",
  Asia: "Asia",
  "North America": "North America",
  "South America": "South America",
  Caribbean: "North America",
  Oceania: "Oceania",
};
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const spell = (n: number) => WORDS[n] ?? String(n);
const continentCount = new Set(
  byRegion.map((g) => CONTINENT_OF[g.region] ?? g.region)
).size;

export default function PerformanceMapPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />

      {/* Mobile is screen 20 — the map in a framed card, the region table as a
          stack of rows. */}
      <MobileTourMap
        countryCount={countryCount}
        regionCount={regionCount}
        regions={byRegion}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/tours/map" />

        <section className={`${styles.wrap} ${styles.head}`}>
          <div className={styles.kicker}>Live worldwide</div>
          <h1 className={styles.title}>
            Where he&apos;s <span className="inkText">performed</span>
          </h1>
          <p className={styles.lede}>
            Every country Burna Boy has taken to the stage — from arena tours and stadium
            nights to festival headline sets. Hover or tap a highlighted country to see
            shows there.
          </p>
          <div className={styles.counts}>
            <span className={styles.countBig}>{countryCount}</span>
            <span className={styles.countWord}>countries</span>
            <span className={styles.countRule} aria-hidden="true" />
            <span className={`${styles.countBig} ${styles.countBigPlain}`}>{regionCount}</span>
            <span className={styles.countWord}>regions</span>
          </div>
        </section>

        <figure className={`${styles.wrap} ${styles.figure}`}>
          <div className={styles.frame}>
            <PerformanceMap />
          </div>
          <figcaption className={styles.legend}>
            <span className={styles.swatch} aria-hidden="true" />
            Countries with a confirmed Burna Boy performance
            <span className={styles.swatchDot} aria-hidden="true" />
            Island nations too small to shade
          </figcaption>
        </figure>

        <section className={`${styles.wrap} ${styles.breakdown}`} aria-label="Countries by region">
          <div className={styles.kicker}>By region</div>
          <h2 className={styles.breakdownTitle}>
            {spell(regionCount)} regions, {spell(continentCount)} continents
          </h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Region</th>
                  <th scope="col" className={styles.numCol}>Count</th>
                  <th scope="col">Countries</th>
                </tr>
              </thead>
              <tbody>
                {byRegion.map(({ region, countries }) => (
                  <tr key={region}>
                    <th scope="row" className={styles.regionCell}>{region}</th>
                    <td className={styles.numCol}>{countries.length}</td>
                    <td className={styles.namesCell}>
                      {countries.map((c) => `${c.flag} ${c.name}`).join("   ·   ")}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td className={styles.numCol}>{countryCount}</td>
                  <td className={styles.tfootPlain}>{regionCount} regions</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className={styles.note}>
            Compiled from his tours, festivals and one-off shows, cross-checked against
            press and setlist records. Only verified shows are listed. For the full
            itinerary with dates, venues and grosses, see the{" "}
            <Link href="/records/tours">Tours page</Link>. Country shapes are Natural
            Earth 110m data (public domain).
          </p>
        </section>

        <section className={`${styles.wrap} ${styles.pills}`}>
          <Link href="/records/tours" className="btn btnSecondary">
            ← Back to tours
          </Link>
          <Link href="/records/tours/festivals" className="btn btnPrimary">
            Festivals &amp; shows ↗
          </Link>
          <Link href="/records/tours/revenue" className="btn btnSecondary">
            Revenue per show ↗
          </Link>
        </section>
      </div>
    </main>
  );
}
