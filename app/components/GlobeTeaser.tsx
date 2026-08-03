import Link from "next/link";
import GlobeCanvas from "./GlobeCanvas";
import styles from "./GlobeTeaser.module.css";
import { numberWord } from "../lib/homeData";
import {
  performedCountries,
  countryCount,
  regionCount,
  REGION_ORDER,
} from "../data/performedCountries";

/**
 * "Where he's performed" — the rotating globe teaser, linking to the full map.
 *
 * One design at every width. This is the mobile home screen's version, which
 * replaced the desktop's old side-by-side card: kicker, split title, lede, the
 * globe on its ringed stage, the region strip, then the status/CTA foot.
 *
 * Four cells in the strip: the three biggest regions by country count, then
 * everything else pooled as "Rest", so it always adds up to the full total —
 * every number here is counted from performedCountries, never written down.
 *
 * A server component: only GlobeCanvas needs the browser.
 */
const byRegion = REGION_ORDER.map((r) => ({
  name: r,
  n: performedCountries.filter((c) => c.region === r).length,
})).sort((a, b) => b.n - a.n);

const regions = [
  ...byRegion.slice(0, 3),
  { name: "Rest", n: byRegion.slice(3).reduce((t, r) => t + r.n, 0) },
];

export default function GlobeTeaser() {
  return (
    <Link href="/records/tours/map" className={styles.globe}>
      <div className={styles.kicker}>
        <span className={styles.rule} aria-hidden="true" />
        Live worldwide
      </div>
      <h2 className={styles.title}>
        Where he&apos;s
        <br />
        performed
      </h2>
      <p className={styles.lede}>
        {countryCount} countries, {numberWord(regionCount).toLowerCase()}{" "}
        regions — every stage he&apos;s taken.
      </p>

      <div
        className={styles.stage}
        role="img"
        aria-label={`Rotating globe showing ${countryCount} countries performed in`}
      >
        <span className={styles.ring1} aria-hidden="true" />
        <span className={styles.ring2} aria-hidden="true" />
        <GlobeCanvas className={styles.canvas} />
      </div>

      <div className={styles.grid}>
        {regions.map((r) => (
          <div key={r.name} className={styles.cell}>
            <div className={styles.num}>{r.n}</div>
            <div className={styles.label}>{r.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.foot}>
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.note}>Oceania added Oct 2025</span>
        <span className={styles.cta}>Open the map ↗</span>
      </div>
    </Link>
  );
}
