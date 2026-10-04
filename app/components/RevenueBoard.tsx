"use client"; // the artist chips filter the board

import { useState } from "react";
import styles from "../records/tours/revenue/revenue.module.css";
import type { RevenueShow } from "../data/tourRevenue";
import NotReported from "./NotReported";

/**
 * The highest-grossing-shows board.
 *
 * Filtering never renumbers: each row keeps its rank in the full list, so
 * narrowing to one artist shows *where* their nights sit among everyone's
 * rather than re-ranking them 1..n against themselves. That is the whole point
 * of the board — the comparison is the content.
 *
 * Chip order: Burna Boy first (the page is his), then every other artist by
 * how many nights they hold on the board, most first — derived, so a new
 * artist lands in place rather than after a typed list (debug pass 3 Oct 2026,
 * bo-04: the design's fixed order had left Tiwa Savage, 16 nights, after two
 * one-night artists). Ties keep the order they first appear on the board.
 */

const HIS = "Burna Boy";

export default function RevenueBoard({
  shows,
  children,
}: {
  /** The board's rows without their `source`: this is a client component, so
   *  whatever it is handed is serialised into this page; the board never
   *  prints a source (tests/revenueSources.test.ts). */
  shows: Omit<RevenueShow, "source">[];
  /** The source note and back link, which the design keeps in this section. */
  children?: React.ReactNode;
}) {
  const [artist, setArtist] = useState<string | null>(null);

  const counts = shows.reduce<Record<string, number>>((acc, s) => {
    acc[s.artist] = (acc[s.artist] ?? 0) + 1;
    return acc;
  }, {});
  const chips = [
    { label: "All artists", key: null as string | null, count: shows.length },
    ...chipOrder(counts).map((a) => ({ label: a, key: a as string | null, count: counts[a] })),
  ];

  const rows = shows
    .map((s, i) => ({ s, rank: i + 1 }))
    .filter((r) => !artist || r.s.artist === artist);

  return (
    <>
      <section className={styles.filterBand}>
        <div className={`${styles.wide} ${styles.filterPad}`}>
          <span className={styles.filterLabel}>Artist</span>
          {chips.map((c) => {
            const on = artist === c.key;
            return (
              <button
                key={c.label}
                type="button"
                aria-pressed={on}
                onClick={() => setArtist(on ? null : c.key)}
                className={`${styles.chip} ${on ? styles.chipOn : ""}`}
              >
                {c.label}
                <span className={styles.chipCount}>{c.count}</span>
              </button>
            );
          })}
          <span className={styles.shown}>
            {rows.length} of {shows.length} shown
          </span>
        </div>
      </section>

      <section className={styles.band}>
        <div className={`${styles.wide} ${styles.boardPad}`}>
          <div className={styles.board} role="table" aria-label="Highest-grossing shows">
            <div className={styles.headRow} role="row">
              <span role="columnheader">#</span>
              <span role="columnheader">Artist</span>
              <span role="columnheader">Venue</span>
              <span role="columnheader">Tour</span>
              <span className={styles.right} role="columnheader">
                Tickets
              </span>
              <span className={styles.right} role="columnheader">
                Gross
              </span>
            </div>
            {rows.map(({ s, rank }) => (
              <div
                key={`${s.artist}-${s.venue}-${s.year}-${s.revenue}`}
                role="row"
                className={`${styles.row} ${s.artist === HIS ? styles.rowHis : ""}`}
              >
                {/* His nights in the top three are lit; every other rank is a
                    label, not a result, and reads muted. Gold marks his figures
                    only, so another artist's top-three rank never takes it
                    (bo-01, 3 Oct 2026: Fally Ipupa's 03 was gold). */}
                <span
                  role="cell"
                  className={`${styles.rank} ${s.artist === HIS && rank <= 3 ? styles.rankTop : ""}`}
                >
                  {String(rank).padStart(2, "0")}
                </span>
                <span
                  role="cell"
                  className={s.artist === HIS ? styles.hisName : styles.otherName}
                >
                  {s.artist}
                </span>
                <span role="cell" className={styles.venueCell}>
                  <span className={styles.venue}>
                    {s.flag} {s.venue}
                  </span>
                  {/* The year rides on the city line too: below 1240px the
                      Tour column (the only other place it is printed) folds
                      away, and two nights at one venue read identically. */}
                  <span className={styles.city}>
                    {s.city}
                    <span className={styles.cityYear}> · {s.year}</span>
                  </span>
                </span>
                <span role="cell" className={styles.tour}>
                  {s.tour} · {s.year}
                </span>
                <span role="cell" className={styles.tickets}>
                  {s.tickets ?? <NotReported />}
                </span>
                <span
                  role="cell"
                  className={`${styles.gross} ${s.artist === HIS ? styles.grossHis : ""}`}
                >
                  ${s.revenue.toLocaleString("en-US")}
                </span>
              </div>
            ))}
          </div>
          {children}
        </div>
      </section>
    </>
  );
}

/** Burna Boy first, then by nights on the board (most first); ties keep board order. */
export function chipOrder(counts: Record<string, number>): string[] {
  const seen = Object.keys(counts);
  const rest = seen.filter((a) => a !== HIS).sort((a, b) => counts[b] - counts[a] || seen.indexOf(a) - seen.indexOf(b));
  return counts[HIS] ? [HIS, ...rest] : rest;
}
