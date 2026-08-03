import Link from "next/link";
import styles from "./mobileFestivals.module.css";
import MobileSections, { type Section } from "./MobileSections";

/**
 * Mobile screen 13 — Festivals & shows.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen
 * 13. Three accordion sections rather than one flat list, because the screen
 * carries every documented appearance and a phone cannot scan that in a single
 * run. No bottom bar: the handoff's action-bar table calls this screen "No bar.
 * Full list.", and the screen already is the full list.
 *
 * Only the accordion is interactive, so this stays a server component.
 */
export default function MobileFestivals({
  total,
  stats,
  sections,
  lede,
  sourceNote,
}: {
  total: number;
  /** Four cells, so the 2-up grid never has a short last row. */
  stats: { value: string; label: string }[];
  sections: Section[];
  lede: string;
  sourceNote: string;
}) {
  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <Link href="/records/tours" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Festivals</span>
        <span className={styles.badge}>{total}</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>Festival stages</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Festivals &amp; <span className={styles.gold}>shows</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
      </div>

      <div className={styles.statGrid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statCell}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <MobileSections sections={sections} />

      <p className={styles.foot}>{sourceNote}</p>
    </div>
  );
}
