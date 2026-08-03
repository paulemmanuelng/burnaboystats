import Link from "next/link";
import styles from "./mobileDeepPage.module.css";
import ScrollRail from "./ScrollRail";

/**
 * The shared mobile deep-page screen.
 *
 * One grammar carries twelve of the mobile screens, so a reader who learns one
 * learns them all: back bar → kicker and split title → lede → stat strip →
 * chip rail → list of stacked rows → source note → action bar. Built from
 * designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html.
 *
 * Every value arrives derived from app/data — this component only paints.
 */

export interface DeepRow {
  rank?: string;
  title: string;
  sub?: string;
  value: string;
  /** 0–1, drawn as a bar under the title when present. */
  bar?: number;
  /** Marks the row as a headline result — its title and value read in gold. */
  lead?: boolean;
  /**
   * Lights the rank and the value, but not the title.
   *
   * For lists where the value is a *category* rather than a distinction — half
   * the festivals list is "Headlined", so golding those titles would tint most
   * of the page and stop meaning anything. `lead` is for the one or two rows a
   * page is actually built around.
   */
  accent?: boolean;
  /** Makes the whole row a link — used where each row has a page proving it. */
  href?: string;
  /**
   * Starts a new labelled group above this row.
   *
   * The grammar has one list, but some screens carry several distinct boards
   * (Africa's biggest has 14). Rather than strand thirteen of them, the list
   * runs straight through and a heading marks where each begins.
   */
  group?: string;
  /** Sub-label for the group heading — the board's metric and source. */
  groupMeta?: string;
}

export interface DeepChip {
  label: string;
  on?: boolean;
  href?: string;
}

export default function MobileDeepPage({
  label,
  badge,
  backHref = "/records",
  kicker,
  titlePre,
  titleGold,
  titleSize = 46,
  lede,
  stats,
  chips,
  chipsLabel,
  listTitle,
  listMeta,
  rows,
  footNote,
  ctaLabel,
  ctaHref,
}: {
  label: string;
  badge?: string;
  backHref?: string;
  kicker: string;
  titlePre: string;
  titleGold: string;
  titleSize?: number;
  lede: string;
  /** Omitted on screens the design gives no stat strip (17). */
  stats?: { value: string; label: string }[];
  chips?: DeepChip[];
  chipsLabel?: string;
  listTitle: string;
  listMeta?: string;
  rows: DeepRow[];
  footNote?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href={backHref} aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>{label}</span>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>{kicker}</div>
        {/* Deliberately not an <h1>. Both layouts sit in the DOM at once — one
            is CSS-hidden, not removed — so a second <h1> would give the page
            two, which the SEO gate rejects. */}
        <p className={styles.title} style={{ fontSize: `${titleSize}px` }}>
          {titlePre}
          <span className={styles.gold}>{titleGold}</span>
        </p>
        <p className={styles.lede}>{lede}</p>
      </div>

      {/* Stat strip */}
      {stats && stats.length > 0 && (
      <div
        className={styles.statGrid}
        style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
      >
        {stats.map((s) => (
          <div key={s.label} className={styles.statCell}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
      )}

      {/* Chip rail */}
      {chips && chips.length > 0 && (
        <ScrollRail className={styles.rail} label={chipsLabel ?? listTitle}>
          {chips.map((c) =>
            c.href ? (
              <Link
                key={c.label}
                href={c.href}
                className={`${styles.chip} ${c.on ? styles.chipOn : ""}`}
              >
                {c.label}
              </Link>
            ) : (
              <span key={c.label} className={`${styles.chip} ${c.on ? styles.chipOn : ""}`}>
                {c.label}
              </span>
            )
          )}
        </ScrollRail>
      )}

      {/* List */}
      <div className={styles.listHead}>
        <h2 className={styles.listTitle}>{listTitle}</h2>
        {listMeta && <span className={styles.listMeta}>{listMeta}</span>}
      </div>
      <div className={styles.list}>
        {rows.map((r, i) => {
          const body = (
            <>
              {r.rank && <span className={styles.rank}>{r.rank}</span>}
              <span className={styles.rowMain}>
                <span className={styles.rowTitle}>{r.title}</span>
                {r.sub && <span className={styles.rowSub}>{r.sub}</span>}
                {r.bar !== undefined && (
                  <span className={styles.barTrack}>
                    <span
                      className={styles.barFill}
                      style={{ width: `${Math.round(r.bar * 100)}%` }}
                    />
                  </span>
                )}
              </span>
              <span className={styles.rowValue}>{r.value}</span>
            </>
          );
          /* Titles repeat — a venue hosts more than one ranked night, an award
             body wins in more than one year — so position disambiguates. The
             list is derived deterministically and never reordered here. */
          const key = `${i}-${r.title}`;
          const className = `${styles.row} ${r.lead ? styles.rowLead : ""} ${
            r.accent ? styles.rowAccent : ""
          } ${r.href ? styles.rowLink : ""}`;
          const style = { gridTemplateColumns: r.rank ? "26px 1fr auto" : "1fr auto" };
          const row = r.href ? (
            <Link href={r.href} className={className} style={style}>
              {body}
            </Link>
          ) : (
            <div className={className} style={style}>
              {body}
            </div>
          );
          return r.group ? (
            <div key={key}>
              <div className={styles.groupHead}>
                <h3 className={styles.groupName}>{r.group}</h3>
                {r.groupMeta && <span className={styles.groupMeta}>{r.groupMeta}</span>}
              </div>
              {row}
            </div>
          ) : (
            <div key={key}>{row}</div>
          );
        })}
      </div>

      {footNote && <p className={styles.footNote}>{footNote}</p>}

      {/* The bar exists only when there is somewhere else to go; when the screen
          is already the full list, it goes — and the scroll padding that
          cleared it goes with it. */}
      {ctaLabel && ctaHref && <div className={styles.spacer} />}

      {ctaLabel && ctaHref && (
        <div className={styles.actionBar}>
          <Link href={ctaHref} className={styles.actionPrimary}>
            {ctaLabel}
          </Link>
          <Link href="/share" aria-label="Make a stat card" className={styles.actionIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
              <path d="M12 3v12" />
              <path d="m7 8 5-5 5 5" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
