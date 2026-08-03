import Link from "next/link";
import styles from "./mobileMethodology.module.css";
import MobileMenuButton from "./MobileMenuButton";

/**
 * Mobile screen 22 — Methodology & sources.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen
 * 22. Three stacked blocks — how a figure gets verified, where the numbers come
 * from, then the closing sections — rather than a row list. The page is an
 * argument for trusting the figures, so it has to be readable as prose; the
 * shared deep-page grammar reduced it to five rows with a value column, which
 * is the one shape this content cannot take.
 *
 * The back bar carries no count and there is no stat strip: the design gives
 * neither, because nothing here is a figure.
 */
export default function MobileMethodology({
  lede,
  reviewedLabel,
  principles,
  sources,
  sections,
}: {
  lede: string;
  reviewedLabel: string;
  principles: { h: string; p: string }[];
  sources: { area: string; detail: string }[];
  sections: { h: string; p: string }[];
}) {
  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <Link href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Methodology</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>The standard every figure meets</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Methodology &amp; <span className={styles.gold}>sources</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
        <div className={styles.reviewed}>
          <span className={styles.reviewedDot} aria-hidden="true" />
          Data last reviewed {reviewedLabel}
        </div>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>How a figure gets verified</h2>
        {principles.map((p) => (
          <div key={p.h} className={styles.item}>
            {/* Body font, sentence case — a principle is a statement, not one of
                the site's uppercase section labels. */}
            <h3 className={styles.itemTitle}>{p.h}</h3>
            <p className={styles.itemBody}>{p.p}</p>
          </div>
        ))}
      </div>

      <div className={`${styles.block} ${styles.blockSoft}`}>
        <h2 className={styles.blockTitle}>Where the numbers come from</h2>
        {sources.map((s) => (
          <div key={s.area} className={styles.item}>
            <div className={styles.area}>{s.area}</div>
            <p className={styles.itemBody}>{s.detail}</p>
          </div>
        ))}
      </div>

      {sections.map((x) => (
        <div key={x.h} className={styles.section}>
          <h2 className={styles.sectionTitle}>{x.h}</h2>
          <p className={styles.itemBody}>{x.p}</p>
        </div>
      ))}

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <Link href="/contact" className={styles.actionPrimary}>
          Report a correction
        </Link>
      </div>
    </div>
  );
}
