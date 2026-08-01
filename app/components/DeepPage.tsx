import Link from "next/link";
import styles from "./deepPage.module.css";

/**
 * The shared deep-page layout.
 *
 * The redesign gives twelve routes one screen grammar rather than twelve
 * bespoke layouts: back bar → kicker → split headline → lede → stat tiles →
 * chip rail → stacked rows → source note → action bar. Building it once is the
 * point; the pages differ in data, not in shape, and twelve hand-rolled
 * variants is how a site starts to feel like twelve sites.
 *
 * Rows are deliberately "stacked" rather than tabular: title and subtitle on
 * the left, the single most important number right-aligned, an optional bar
 * underneath for relative weight. That reads on a phone, where a real table
 * does not.
 */

export interface DeepRow {
  /** "01", "02" … omit to hide the rank column entirely. */
  rank?: string;
  title: string;
  sub?: string;
  /** The one number that matters for this row. */
  value: string;
  /** 0–1. Draws a proportional bar under the subtitle. */
  bar?: number;
  /** His row, or the row the page is about — gold, per the colour rules. */
  highlight?: boolean;
}

export interface DeepPageProps {
  kicker: string;
  /** Headline splits so the second half can carry the gold gradient. */
  titlePre: string;
  titleGold: string;
  badge?: string;
  lede: string;
  stats: { value: string; label: string }[];
  chips?: { label: string; href?: string; active?: boolean }[];
  listTitle: string;
  listMeta?: string;
  rows: DeepRow[];
  footNote: string;
  cta?: { label: string; href: string };
  backHref?: string;
  backLabel?: string;
}

export default function DeepPage({
  kicker,
  titlePre,
  titleGold,
  badge,
  lede,
  stats,
  chips,
  listTitle,
  listMeta,
  rows,
  footNote,
  cta,
  backHref = "/records",
  backLabel = "Records",
}: DeepPageProps) {
  return (
    <div className={styles.page}>
      <div className={styles.backBar}>
        <Link href={backHref} className={styles.back} aria-label={`Back to ${backLabel}`}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>{backLabel}</span>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <header className={styles.head}>
        <p className={styles.kicker}>{kicker}</p>
        <h1 className={styles.title}>
          {titlePre}
          <span className={styles.titleGold}>{titleGold}</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
      </header>

      {/* Hairline grid: the 1px gap shows the divider colour through, so the
          tiles are separated without each carrying its own border. */}
      <div className={styles.tiles} style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
        {stats.map((t) => (
          <div key={t.label} className={styles.tile}>
            <span className={styles.tileValue}>{t.value}</span>
            <span className={styles.tileLabel}>{t.label}</span>
          </div>
        ))}
      </div>

      {chips && chips.length > 0 && (
        <div className={styles.chipRail}>
          {chips.map((c) =>
            c.href ? (
              <Link
                key={c.label}
                href={c.href}
                className={`${styles.chip} ${c.active ? styles.chipOn : ""}`}
              >
                {c.label}
              </Link>
            ) : (
              <span
                key={c.label}
                className={`${styles.chip} ${c.active ? styles.chipOn : ""}`}
              >
                {c.label}
              </span>
            )
          )}
        </div>
      )}

      <div className={styles.listHead}>
        <h2 className={styles.listTitle}>{listTitle}</h2>
        {listMeta && <span className={styles.listMeta}>{listMeta}</span>}
      </div>

      <ol className={styles.rows}>
        {rows.map((r) => (
          <li
            key={`${r.rank ?? ""}${r.title}`}
            className={`${styles.row} ${r.highlight ? styles.rowOn : ""}`}
          >
            {r.rank && <span className={styles.rank}>{r.rank}</span>}
            <span className={styles.rowMain}>
              <span className={styles.rowTitle}>{r.title}</span>
              {r.sub && <span className={styles.rowSub}>{r.sub}</span>}
              {r.bar !== undefined && (
                <span className={styles.barTrack}>
                  <span
                    className={styles.barFill}
                    style={{ width: `${Math.max(0, Math.min(1, r.bar)) * 100}%` }}
                  />
                </span>
              )}
            </span>
            <span className={styles.rowValue}>{r.value}</span>
          </li>
        ))}
      </ol>

      <p className={styles.foot}>{footNote}</p>

      {cta && (
        <div className={styles.actionBar}>
          <Link href={cta.href} className={styles.action}>
            {cta.label} ↗
          </Link>
        </div>
      )}
    </div>
  );
}
