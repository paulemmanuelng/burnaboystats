import Link from "next/link";
import PerformanceMap from "../../../components/PerformanceMap";
import HiddenCode from "../../../components/HiddenCode";
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

export default function PerformanceMapPage() {
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

  return (
    <main id="content" className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <header className={styles.head}>
        <p className={styles.kicker}>Live worldwide</p>
        <h1 className={styles.title}>Where he&apos;s performed</h1>
        <p className={styles.lede}>
          Every country Burna Boy has taken to the stage — from arena tours and
          stadium nights to festival headline sets. Hover or tap a highlighted
          country to see shows there.
        </p>
        <p className={styles.stats}>
          <strong>{countryCount}</strong> countries · <strong>{regionCount}</strong> regions
        </p>
      </header>

      <figure className={styles.figure}>
        <PerformanceMap />
        <figcaption className={styles.legend}>
          <span className={styles.swatch} aria-hidden="true" /> Countries with a
          confirmed Burna Boy performance
        </figcaption>
      </figure>

      <section className={styles.breakdown} aria-label="Countries by region">
        <h2 className={styles.breakdownTitle}>By region</h2>
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
                  <th scope="row" className={styles.regionCell}>
                    {region === "North America" ? (
                      <HiddenCode code="NUpiTVNzVHc=">{region}</HiddenCode>
                    ) : (
                      region
                    )}
                  </th>
                  <td className={styles.numCol}>{countries.length}</td>
                  <td className={styles.namesCell}>
                    {countries.map((c) => `${c.flag} ${c.name}`).join("   ·   ")}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td className={styles.numCol}>{countryCount}</td>
                <td>{regionCount} regions</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <p className={styles.note}>
        Compiled from his tours, festivals and one-off shows. For the full
        itinerary with dates, venues and grosses, see the{" "}
        <Link href="/records/tours">Tours page</Link>.
      </p>

      <Link href="/records/tours" className={styles.back}>
        ← Back to Tours
      </Link>
    </main>
  );
}
