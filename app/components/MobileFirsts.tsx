import Link from "next/link";
import styles from "./mobileFirsts.module.css";
import MobileSections, { type Section } from "./MobileSections";

/**
 * Mobile screen 15 — Firsts & records.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen
 * 15. Five accordion categories, the first open on arrival, sharing the same
 * `sectioned()` shell as screen 13 — but with screen 15's own row: the year set
 * in Anton beside the milestone, and no location line under it.
 *
 * No stat strip: the design runs the hero straight into the categories, because
 * the count is already in the lede and the back bar. No bottom bar either —
 * the handoff's action-bar table calls this screen "No bar. Full list."
 */
export default function MobileFirsts({
  total,
  lede,
  sections,
  sourceNote,
}: {
  total: number;
  lede: string;
  sections: Section[];
  sourceNote: string;
}) {
  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <Link href="/records" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Firsts</span>
        <span className={styles.badge}>{total}</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>Record-breaking</div>
        {/* Deliberately not an <h1>: both layouts sit in the DOM at once. */}
        <p className={styles.title}>
          Firsts &amp; <span className={styles.gold}>records</span>
        </p>
        <p className={styles.lede}>{lede}</p>
      </div>

      <MobileSections sections={sections} variant="plain" />

      <p className={styles.foot}>{sourceNote}</p>
    </div>
  );
}
