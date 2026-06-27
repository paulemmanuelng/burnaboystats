import Link from "next/link";
import PerformanceMap from "../../../components/PerformanceMap";
import { pageMetadata } from "../../../lib/seo";
import { countryCount, regionCount } from "../../../data/performedCountries";
import styles from "./map.module.css";

export const metadata = pageMetadata({
  title: "Where Burna Boy Has Performed — Interactive World Map",
  description: `An interactive map of every country Burna Boy has performed in live — ${countryCount} countries across ${regionCount} regions, from his tours, festivals and one-off shows. Hover a country to see the shows there.`,
  path: "/records/tours/map",
  shareTitle: "Where Burna Boy Has Performed",
  shareDescription: `Every country he's taken to the stage — ${countryCount} and counting.`,
});

export default function PerformanceMapPage() {
  return (
    <main id="content" className={styles.page}>
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
