"use client"; // the three chips filter the board

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileRevenue.module.css";
import ScrollRail from "./ScrollRail";
import NotReported from "./NotReported";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import { RUNS_HEADING, RUNS_LEDE } from "../lib/multiNightRuns";

/**
 * Mobile screen 14 — Revenue per show.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen
 * 14 and its `revenue()` method.
 *
 * Two things here are deliberate inversions of the rest of the site:
 *
 *  - **Filtering never renumbers.** Each row keeps its rank in the full board,
 *    so narrowing to one artist shows *where* their nights sit among everyone's
 *    rather than re-ranking them 1..n against themselves. The comparison is the
 *    content — same rule the desktop board follows.
 *  - **The tint marks the other artists, not him.** His nights sit on the plain
 *    background and take the gold gross; everyone else's row carries the faint
 *    wash. The page is his, so the tint is what picks everyone else's nights
 *    out.
 *
 * No bars: the design draws the gross as figures, and a bar under two thirds of
 * the rows would read as decoration rather than as a scale.
 */

type Filter = "all" | "his" | "other";

export interface RevenueRow {
  rank: string;
  venue: string;
  meta: string;
  /** Already formatted, e.g. "$6.15M". */
  gross: string;
  /** Boxscore does not always publish a headcount. */
  tickets?: string;
  his: boolean;
}

/** A multi-night run the body reports as one figure — shown, not ranked. */
export interface RevenueStandRow {
  flag: string;
  /** "Scotiabank Arena, Toronto". */
  place: string;
  /** Named on every row, his included. */
  artist: string;
  tour: string;
  /** "24–25 February 2024": a line of its own, so a wrap never splits "24–25". */
  dates: string;
  gross: string;
  /** "29,579 tickets over 2 nights" — nights, never shows. */
  tickets: string;
  his: boolean;
}

export default function MobileRevenue({
  rows,
  stats,
  lede,
  topGross,
  sourceNote,
  counts,
  stands = [],
}: {
  rows: RevenueRow[];
  stands?: RevenueStandRow[];
  /** Two cells, as the design draws it. */
  stats: { value: string; label: string }[];
  lede: string;
  topGross: string;
  sourceNote: string;
  counts: { all: number; his: number; other: number };
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = rows.filter((r) =>
    filter === "all" ? true : filter === "his" ? r.his : !r.his
  );

  const chips: { key: Filter; label: string }[] = [
    { key: "all", label: `All ${counts.all}` },
    { key: "his", label: `Burna Boy ${counts.his}` },
    { key: "other", label: `Others ${counts.other}` },
  ];

  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/records/tours" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Revenue per show</span>
        <span className={styles.badge}>{topGross}</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>Box office, per night</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Revenue per <span className={styles.gold}>show</span>
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

      {/* Box office summed by country — who leads each one (3 Oct 2026). */}
      <div className={styles.linkRow}>
        <Link href="/records/tours/revenue/countries" className="btn btnPrimary">
          Highest-grossing artists by country →
        </Link>
      </div>

      <ScrollRail className={styles.rail} label="Filter the board">
        {chips.map((c) => (
          <button
            key={c.key}
            type="button"
            aria-pressed={filter === c.key}
            className={`${styles.chip} ${filter === c.key ? styles.chipOn : ""}`}
            onClick={() => setFilter(c.key)}
          >
            {c.label}
          </button>
        ))}
      </ScrollRail>

      <div className={styles.metaBar}>
        <span>
          {shown.length} {shown.length === 1 ? "show" : "shows"}
        </span>
        <span className={styles.legend}>
          <span className={styles.legendDot} aria-hidden="true" />
          His nights
        </span>
      </div>

      {shown.map((r) => (
        <div key={r.rank} className={`${styles.row} ${r.his ? "" : styles.rowOther}`}>
          <span className={styles.rank}>{r.rank}</span>
          <div className={styles.main}>
            <div className={styles.venue}>{r.venue}</div>
            <div className={styles.meta}>{r.meta}</div>
          </div>
          <div className={styles.right}>
            <div className={`${styles.gross} ${r.his ? styles.grossHis : ""}`}>{r.gross}</div>
            <div className={styles.tickets}>
              {r.tickets ?? <NotReported what="No headcount published" />}
            </div>
          </div>
        </div>
      ))}

      {stands.length > 0 && (
        // A section of its own with a real heading: these are the body's own
        // combined figures for runs of several nights, shown as what they are
        // rather than ranked against single nights. Every row names its artist.
        <section className={styles.runs} aria-labelledby="runs-title-m">
          <h2 id="runs-title-m" className={styles.runsTitle}>{RUNS_HEADING}</h2>
          <p className={styles.runsLede}>{RUNS_LEDE}</p>
          <ul className={styles.runsList}>
            {stands.map((r) => (
              <li key={r.place + r.dates} className={`${styles.runRow} ${r.his ? "" : styles.rowOther}`}>
                <div className={styles.main}>
                  <div className={styles.venue}>
                    {r.flag} {r.place}
                  </div>
                  <div className={styles.runMeta}>
                    <span className={styles.runArtist}>{r.artist}</span> · {r.tour}
                  </div>
                  <div className={styles.runMeta}>{r.dates}</div>
                  <div className={styles.runTickets}>{r.tickets}</div>
                </div>
                <div className={`${styles.gross} ${r.his ? styles.grossHis : ""}`}>{r.gross}</div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className={styles.foot}>{sourceNote}</p>

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <Link href="/share" className={styles.actionPrimary}>
          Make a stat card
        </Link>
      </div>
    </div>
  );
}
