import Link from "next/link";
import styles from "./mobileTourMap.module.css";
import PerformanceMap from "./PerformanceMap";

/**
 * The mobile "where he's performed" screen.
 *
 * A distinct screen, not the desktop page narrowed: the map sits in a small
 * framed card, and the region breakdown becomes a stack of rows rather than a
 * table. Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html,
 * screen 20.
 *
 * The design mocks the map with scattered dots because its prototype can't run
 * the real one — this renders the actual PerformanceMap in that frame. The
 * region list underneath is not decoration: ten island nations have no usable
 * shape at 110m and appear only as markers, so the list is the accessible
 * equivalent of the map for anyone who can't work a pinch-zoom.
 */
export default function MobileTourMap({
  countryCount,
  regionCount,
  regions,
}: {
  countryCount: number;
  regionCount: number;
  regions: { region: string; countries: { flag: string; name: string }[] }[];
}) {
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href="/records/tours" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Tour map</span>
        <span className={styles.badge}>{countryCount}</span>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Live worldwide</div>
        {/* Not an <h1> — the desktop block carries the page's single heading. */}
        <p className={styles.title}>
          Where he&apos;s <span className={styles.gold}>performed</span>
        </p>
        <p className={styles.lede}>
          {countryCount} countries across {regionCount} regions.
        </p>
      </div>

      {/* Map */}
      <div className={styles.mapCard}>
        <div className={styles.mapInner}>
          <PerformanceMap />
        </div>
        <p className={styles.mapHint}>
          Same Natural Earth geometry as desktop, fitted to the viewport. Tap a country
          for its shows.
        </p>
      </div>

      {/* Regions */}
      <div className={styles.regions}>
        {regions.map((r) => (
          <div key={r.region} className={styles.region}>
            <div className={styles.regionTop}>
              <span className={styles.regionName}>{r.region}</span>
              <span className={styles.regionCount}>{r.countries.length}</span>
            </div>
            <p className={styles.regionList}>
              {r.countries.map((c) => `${c.flag} ${c.name}`).join(" · ")}
            </p>
          </div>
        ))}
      </div>

      <p className={styles.footNote}>
        Regions and counts are derived from the same {countryCount}-country list the
        desktop map shades. Ten small island nations have no usable shape at 110m
        resolution and are plotted as markers rather than filled — the region list above
        is the accessible equivalent.
      </p>

      <div className={styles.spacer} />

      <div className={styles.actionBar}>
        <Link href="/records/tours/festivals" className={styles.actionPrimary}>
          Festivals &amp; shows
        </Link>
      </div>
    </div>
  );
}
