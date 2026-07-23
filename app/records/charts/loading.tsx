import styles from "./chartsLoading.module.css";

// Charts is the heaviest route on the site (241 entries behind a client-side
// explorer), so it gets a skeleton shaped like the real page — header, the
// three-stat grid, the filter chip rows and a few release rows — instead of the
// generic site-wide spinner. Holding the layout means nothing jumps when the
// real content lands.
export default function ChartsLoading() {
  return (
    <main id="content" className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.srOnly}>Loading Burna Boy&apos;s chart history…</span>

      <div className={styles.container} aria-hidden="true">
        <div className={styles.title} />
        <div className={styles.subtitle} />

        <div className={styles.stats}>
          {[0, 1, 2].map((i) => (
            <div key={i} className={styles.statCell}>
              <div className={styles.statNum} />
              <div className={styles.statLabel} />
            </div>
          ))}
        </div>

        <div className={styles.lead} />

        <div className={styles.chipRow}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles.chip} style={{ width: `${52 + i * 14}px` }} />
          ))}
        </div>
        <div className={styles.chipRow}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className={styles.chipSm} />
          ))}
        </div>

        {Array.from({ length: 4 }, (_, r) => (
          <div key={r} className={styles.row}>
            <div className={styles.rowTitle} />
            <div className={styles.peaks}>
              {Array.from({ length: 8 - r }, (_, i) => (
                <div key={i} className={styles.peak} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
