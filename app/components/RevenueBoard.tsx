"use client"; // the artist chips filter the board

import { useState } from "react";
import styles from "../records/tours/revenue/revenue.module.css";
import type { RevenueShow } from "../data/tourRevenue";
import NotReported from "./NotReported";
import { HIS, chipOrder, nightCounts, scaleWidth, shownLine } from "../lib/showsChips";

/**
 * The highest-grossing-shows board (desktop) — Claude Design round 1, Job 2
 * (designs/desktop/GXShowsDesk.dc.html): a filter box of artist chips, then
 * ranked rows, each with a scale bar against the No. 1 night.
 *
 * Filtering never renumbers: each row keeps its rank in the full list, so
 * narrowing to one artist shows *where* their nights sit among everyone's
 * rather than re-ranking them 1..n against themselves. The scale bars keep the
 * No. 1 night as their 100% too, so a filtered artist's bars read at their true
 * length (design S3). The comparison is the content.
 *
 * Gold marks his FIGURES only (owner, 4 Oct 2026, N4): his gross and his scale
 * bar. His name and every rank are set like everyone else's.
 */

export { chipOrder };

export default function RevenueBoard({
  shows,
  children,
}: {
  /** The board's rows without their `source`: this is a client component, so
   *  whatever it is handed is serialised into this page; the board never
   *  prints a source (tests/revenueSources.test.ts). */
  shows: Omit<RevenueShow, "source">[];
  /** The runs, the source note and the back link, which follow the rows. */
  children?: React.ReactNode;
}) {
  const [artist, setArtist] = useState<string | null>(null);
  // The bars grow once, on first view (design §10); a filter swaps rows with
  // no animation, so the class goes at the first tap. Reduced motion: the
  // global rule in globals.css takes every animation to its end state.
  const [touched, setTouched] = useState(false);

  const counts = nightCounts(shows.map((s) => s.artist));
  const chips = [
    { label: "All artists", key: null as string | null, count: shows.length },
    ...chipOrder(counts).map((a) => ({ label: a, key: a as string | null, count: counts[a] })),
  ];
  const topGross = shows[0]?.revenue ?? 1;

  const rows = shows
    .map((s, i) => ({ s, rank: i + 1 }))
    .filter((r) => !artist || r.s.artist === artist);

  return (
    <>
      <div className={styles.filterBox} role="group" aria-label="Filter the board by artist">
        <span className={styles.filterLabel} aria-hidden="true">
          Artist
        </span>
        {chips.map((c) => {
          const on = artist === c.key;
          return (
            <button
              key={c.label}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setTouched(true);
                // "All artists" is never toggled off; an artist chip toggles back to all.
                setArtist(on ? null : c.key);
              }}
              className={`${styles.chip} ${on ? styles.chipOn : ""}`}
            >
              {c.label}
              <span className={styles.chipCount}>{c.count}</span>
            </button>
          );
        })}
        <span className={styles.shown} aria-live="polite" aria-atomic="true">
          {shownLine(rows.length, shows.length)}
        </span>
      </div>

      <div
        className={`${styles.board} ${touched ? "" : styles.boardGrow}`}
        role="table"
        aria-label="Highest-grossing shows by African artists, ranked by gross"
      >
        <div className={styles.headRow} role="row">
          <span role="columnheader">#</span>
          <span role="columnheader">Artist</span>
          <span role="columnheader">Venue</span>
          <span role="columnheader">Tour</span>
          <span role="columnheader">Year</span>
          <span className={styles.right} role="columnheader">
            Tickets
          </span>
          <span role="columnheader">Scale</span>
          <span className={styles.right} role="columnheader">
            Gross
          </span>
        </div>
        {rows.map(({ s, rank }) => {
          const his = s.artist === HIS;
          return (
            <div key={`${s.artist}-${s.venue}-${s.year}-${s.revenue}`} role="row" className={styles.row}>
              {/* Every rank in the same ink, his included (N4, 4 Oct 2026). */}
              <span role="cell" className={styles.showRank}>
                {String(rank).padStart(2, "0")}
              </span>
              {/* His name in the same ink, place and format as everyone's. */}
              <span role="cell" className={his ? styles.hisName : styles.otherName}>
                {s.artist}
              </span>
              <span role="cell" className={styles.venueCell}>
                <span className={styles.showVenue}>
                  {s.flag} {s.venue}
                </span>
                {/* The year rides on the city line too: below 1240px the Tour
                    and Year columns fold away, and two nights at one venue
                    would read identically (bo-02, 3 Oct 2026). */}
                <span className={styles.city}>
                  {s.city}
                  <span className={styles.cityYear}> · {s.year}</span>
                </span>
              </span>
              <span role="cell" className={styles.tour}>
                {s.tour}
              </span>
              <span role="cell" className={styles.year}>
                {s.year}
              </span>
              <span role="cell" className={styles.showTickets}>
                {s.tickets ?? <NotReported what="No headcount published" />}
              </span>
              <span role="cell" className={styles.scale} aria-hidden="true">
                <span
                  className={`${styles.scaleFill} ${his ? styles.scaleFillHis : ""}`}
                  style={{ width: scaleWidth(s.revenue, topGross) }}
                />
              </span>
              <span role="cell" className={`${styles.gross} ${his ? styles.grossHis : styles.grossOther}`}>
                ${s.revenue.toLocaleString("en-US")}
              </span>
            </div>
          );
        })}
      </div>
      {children}
    </>
  );
}
