import Link from "next/link";
import styles from "./mobileAnalysis.module.css";
import type { Finding } from "../lib/analysisFindings";

/**
 * Mobile screen 21 — Analysis.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen
 * 21. Each finding is rendered in full — number, kicker, headline, a three-up
 * stat row, its paragraphs and its links — because the argument *is* the page.
 * Reducing them to one row each (which is what this screen used to do) left
 * four taps pointing at `/analysis#id`, and those ids only exist in the desktop
 * layout, which is display:none here.
 *
 * The desktop layout's bar chart per finding stays desktop-only: the design
 * draws figures on this screen, not bars.
 *
 * No state, so this stays a server component.
 */
export default function MobileAnalysis({
  findings,
  lede,
  reviewedLabel,
  checkNote,
}: {
  findings: Finding[];
  lede: string;
  reviewedLabel: string;
  checkNote: React.ReactNode;
}) {
  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <Link href="/records" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Analysis</span>
        <span className={styles.badge}>
          {findings.length} {findings.length === 1 ? "finding" : "findings"}
        </span>
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>Analysis · not a summary</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          What the numbers <span className={styles.gold}>actually say</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
        <div className={styles.reviewed}>
          <span className={styles.reviewedDot} aria-hidden="true" />
          Data last reviewed {reviewedLabel}
        </div>
      </div>

      {findings.map((f, i) => (
        <div key={f.id} className={styles.finding}>
          <div className={styles.findingKicker}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            {f.kicker}
          </div>
          {/* Sentence case, not the site's uppercase heading — a finding is a
              claim, and the design sets it to read as one. */}
          <h2 className={styles.findingTitle}>{f.h}</h2>

          <div className={styles.statRow}>
            {f.stats.map((t) => (
              <div key={t.l} className={styles.statCell}>
                <div className={styles.statValue}>{t.v}</div>
                <div className={styles.statLabel}>{t.l}</div>
              </div>
            ))}
          </div>

          {f.body.map((p, pi) => (
            <p key={pi} className={styles.body}>
              {p}
            </p>
          ))}

          <div className={styles.links}>
            {f.links.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.check}>
        <h2 className={styles.checkTitle}>How to check this</h2>
        <p className={styles.checkBody}>{checkNote}</p>
      </div>

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <Link href="/api" className={styles.actionPrimary}>
          Open the data API
        </Link>
      </div>
    </div>
  );
}
