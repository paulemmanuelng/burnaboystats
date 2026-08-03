import styles from "./loading.module.css";

/**
 * Route-level loading UI, shown while a segment streams in.
 *
 * From designs/desktop/App States.dc.html, panel C: a skeleton that mirrors the
 * real page layout — kicker, headline, lede, a four-cell stat row, then rows —
 * so the page doesn't reflow when the data arrives. That's the whole point of
 * it, and why this isn't a spinner.
 *
 * Most pages are statically prerendered, so this rarely flashes; dynamic routes
 * like /search are where it earns its place.
 */
export default function Loading() {
  return (
    <div
      className={`${styles.wrap} appStateShell`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className={styles.kickerRow}>
        <div className={`${styles.block} ${styles.kicker}`} />
        {/* The design puts this spinner in the header bar; the header is shared
            chrome that knows nothing about a pending segment, so it rides at
            the top of the skeleton instead. */}
        <div className={styles.spinner} aria-hidden="true" />
      </div>
      <div className={`${styles.block} ${styles.headline}`} />
      <div className={`${styles.block} ${styles.lede}`} />

      <div className={styles.stats}>
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className={styles.statCell}>
            <div className={`${styles.block} ${styles.statValue}`} />
            <div className={`${styles.still} ${styles.statLabel}`} />
          </div>
        ))}
      </div>

      <div className={styles.rows}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={styles.row}>
            <div className={`${styles.still} ${styles.rowRank}`} />
            <div className={styles.rowMain}>
              <div className={`${styles.block} ${styles.rowTitle}`} />
              <div className={`${styles.still} ${styles.rowSub}`} />
            </div>
            <div className={`${styles.still} ${styles.rowValue}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
