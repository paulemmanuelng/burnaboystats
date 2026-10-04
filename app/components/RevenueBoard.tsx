"use client"; // the chips filter the board

import { useState } from "react";
import styles from "../records/tours/revenue/revenue.module.css";
import type { RevenueShow, RevenueStand } from "../data/tourRevenue";
import NotReported from "./NotReported";
import { HIS, RUNS_VIEW, chipOrder, nightCounts, railChips, scaleWidth, shownLine, type BoardView } from "../lib/showsChips";
import { RUNS_HEADING, RUNS_LEDE, runYear, runsCountLine, shortDates } from "../lib/multiNightRuns";

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
 *
 * The multi-night runs are a chip of their own, between "All artists" and the
 * artists (the owner, 4 Oct 2026: "take the multi-night runs and put it here").
 * Selecting it swaps the single nights for the runs, in the same row format,
 * under RUNS_LEDE and the page's derived split note; a run is never ranked, so
 * its rank cell carries the run mark and its scale cell stays empty. The runs
 * never join All's nights or an artist's: All counts single nights only.
 */

export { chipOrder };

export default function RevenueBoard({
  shows,
  runs = [],
  runsNote = "",
  children,
}: {
  /** The board's rows without their `source`: this is a client component, so
   *  whatever it is handed is serialised into this page; the board never
   *  prints a source (tests/revenueSources.test.ts). */
  shows: Omit<RevenueShow, "source">[];
  /** The multi-night runs, also without their `source`, in the data's order. */
  runs?: Omit<RevenueStand, "source">[];
  /** The page's derived split note, said after RUNS_LEDE in the runs view. */
  runsNote?: string;
  /** The source note and the back link, which follow the rows. */
  children?: React.ReactNode;
}) {
  // null: every single night; an artist's name: theirs; RUNS_VIEW: the runs.
  const [view, setView] = useState<BoardView>(null);
  const runsOn = view === RUNS_VIEW;
  // The bars grow once, on first view (design §10); a filter swaps rows with
  // no animation, so the class goes at the first tap. Reduced motion: the
  // global rule in globals.css takes every animation to its end state.
  const [touched, setTouched] = useState(false);

  const counts = nightCounts(shows.map((s) => s.artist));
  // All, Multi-night runs, then the artists — lib/showsChips.ts, shared with the phone.
  const chips = railChips("All artists", counts, shows.length, runs.length);
  const topGross = shows[0]?.revenue ?? 1;

  const rows = runsOn
    ? []
    : shows.map((s, i) => ({ s, rank: i + 1 })).filter((r) => view === null || r.s.artist === view);
  const runNights = runs.reduce((t, r) => t + r.shows, 0);

  /** The board's head row, the same over the runs: they take its columns. */
  const head = (
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
  );

  return (
    <>
      <div className={styles.filterBox} role="group" aria-label="Filter the board">
        <span className={styles.filterLabel} aria-hidden="true">
          Artist
        </span>
        {chips.map((c) => {
          const on = view === c.key;
          return (
            <button
              key={c.label}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setTouched(true);
                // "All artists" is never toggled off; any other chip toggles back to all.
                setView(on ? null : c.key);
              }}
              className={`${styles.chip} ${on ? styles.chipOn : ""}`}
            >
              {c.label}
              <span className={styles.chipCount}>{c.count}</span>
            </button>
          );
        })}
        <span className={styles.shown} aria-live="polite" aria-atomic="true">
          {runsOn ? runsCountLine(runs.length, runNights) : shownLine(rows.length, shows.length)}
        </span>
      </div>

      {runsOn ? (
        // The runs, where the section beneath the board used to be: one
        // explanation at the head (RUNS_LEDE, then the derived note), then a
        // row each in the board's own format. Every row names its artist.
        <section className={styles.runsView} aria-labelledby="runs-title">
          <h2 id="runs-title" className="visuallyHidden">
            {RUNS_HEADING}
          </h2>
          <p className={styles.standsLede}>
            {RUNS_LEDE} {runsNote}
          </p>
          <div className={styles.board} role="table" aria-label={RUNS_HEADING}>
            {head}
            {runs.map((r) => {
              const his = r.artist === HIS;
              const year = runYear(r.dates);
              return (
                <div key={`${r.venue}-${r.dates}`} role="row" className={styles.row}>
                  {/* Never a rank: the run mark stands where the rank would. */}
                  <span role="cell" className={`${styles.showRank} ${styles.runRank}`}>
                    <span className={styles.runMarkerBars} aria-hidden="true">
                      <span />
                      <span />
                    </span>
                    <span className="visuallyHidden">Run</span>
                  </span>
                  <span role="cell" className={his ? styles.hisName : styles.otherName}>
                    {r.artist}
                  </span>
                  <span role="cell" className={styles.venueCell}>
                    <span className={styles.showVenue}>
                      {r.flag} {r.venue}
                    </span>
                    <span className={styles.city}>
                      {r.city}
                      <span className={styles.cityYear}> · {year}</span>
                    </span>
                    {/* "3 nights · 28–29 Nov & 1 Dec 2021": nights, never shows. */}
                    <span className={styles.runNights}>
                      <span className={styles.nowrap}>{r.shows} nights</span> ·{" "}
                      <span className={styles.nowrap}>{shortDates(r.dates)}</span>
                    </span>
                  </span>
                  <span role="cell" className={styles.tour}>
                    {r.tour}
                  </span>
                  <span role="cell" className={styles.year}>
                    {year}
                  </span>
                  <span role="cell" className={styles.showTickets}>
                    {r.tickets}
                  </span>
                  {/* No bar: a combined total is not set against single nights. */}
                  <span role="cell" aria-hidden="true" />
                  <span role="cell" className={`${styles.gross} ${his ? styles.grossHis : styles.grossOther}`}>
                    ${r.revenue.toLocaleString("en-US")}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <div
          className={`${styles.board} ${touched ? "" : styles.boardGrow}`}
          role="table"
          aria-label="Highest-grossing shows by African artists, ranked by gross"
        >
          {head}
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
      )}
      {children}
    </>
  );
}
