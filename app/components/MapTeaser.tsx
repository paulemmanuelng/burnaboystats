import Link from "next/link";
import styles from "./MapTeaser.module.css";
import { worldShapes, MAP_W, MAP_H } from "../data/worldShapes";
import { performedCodes, countryCount, regionCount } from "../data/performedCountries";

// A compact, non-interactive preview of the "where he's performed" world map —
// performed countries in gold, the rest muted — linking through to the full
// interactive map. Purely a teaser; all the hover/zoom lives on the map page.
export default function MapTeaser() {
  return (
    <Link href="/records/tours/map" className={styles.card} aria-label={`Where Burna Boy has performed — ${countryCount} countries across ${regionCount} regions`}>
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className={styles.map}
        role="img"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {worldShapes.map((s) => (
          <path
            key={s.code}
            d={s.d}
            className={performedCodes.has(s.code) ? styles.on : styles.off}
          />
        ))}
      </svg>
      <div className={styles.overlay}>
        <div>
          <span className={styles.kicker}>Live worldwide</span>
          <span className={styles.title}>Where he&apos;s performed</span>
        </div>
        <span className={styles.stat}>
          <strong>{countryCount}</strong> countries · <strong>{regionCount}</strong> regions
          <span className={styles.arrow} aria-hidden="true"> →</span>
        </span>
      </div>
    </Link>
  );
}
