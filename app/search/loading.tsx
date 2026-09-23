import styles from "./loading.module.css";

/**
 * /search's loading UI, shown while its results stream in.
 *
 * From designs/desktop/App States.dc.html, panel C: a skeleton that mirrors the
 * real page layout — kicker, headline, lede, a four-cell stat row, then rows —
 * so the page doesn't reflow when the data arrives. That's the whole point of
 * it, and why this isn't a spinner.
 *
 * Until 23 Sep 2026 this was app/loading.tsx, and a loading.tsx wraps every
 * route beneath it in a Suspense boundary. On a prerendered page that is not
 * free: once the HTML passes React's 12,800-byte chunk size, it outlines the
 * finished boundary, so every page on the site shipped its body inside
 * <div hidden id="S:0"> behind this skeleton and was swapped in by $RC no
 * sooner than 300 ms after the shell's first frame. Taking it off the root
 * moved LCP on a repeat phone visit (slow 4G, local build) from 576-904 ms to
 * 260-324 ms across 11 pages. /search awaits searchParams on every request
 * and has no child routes, so here the skeleton covers a real wait and wraps
 * nothing else; tests/noRootLoading.test.ts keeps it the only one.
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
