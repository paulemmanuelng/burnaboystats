"use client"; // the artist chips filter the board

import { useState } from "react";
import styles from "../records/tours/revenue/revenue.module.css";
import type { RevenueShow } from "../data/tourRevenue";
import NotReported from "./NotReported";

/**
 * The revenue-per-show board.
 *
 * Filtering never renumbers: each row keeps its rank in the full list, so
 * narrowing to one artist shows *where* their nights sit among everyone's
 * rather than re-ranking them 1..n against themselves. That is the whole point
 * of the board — the comparison is the content.
 *
 * Chip order is the design's, and any artist in the data who isn't named there
 * is appended, so a chip can never be missing for an artist on the list.
 */

const CHIP_ORDER = ["Burna Boy", "Davido", "Asake", "Wizkid", "Rema", "Tyla", "Fally Ipupa"];

export default function RevenueBoard({
  shows,
  children,
}: {
  shows: RevenueShow[];
  /** The source note and back link, which the design keeps in this section. */
  children?: React.ReactNode;
}) {
  const [artist, setArtist] = useState<string | null>(null);

  const counts = shows.reduce<Record<string, number>>((acc, s) => {
    acc[s.artist] = (acc[s.artist] ?? 0) + 1;
    return acc;
  }, {});
  const named = CHIP_ORDER.filter((a) => counts[a]);
  const rest = Object.keys(counts)
    .filter((a) => !CHIP_ORDER.includes(a))
    .sort((a, b) => counts[b] - counts[a]);
  const chips = [
    { label: "All artists", key: null as string | null, count: shows.length },
    ...[...named, ...rest].map((a) => ({ label: a, key: a as string | null, count: counts[a] })),
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
          <div className={styles.board} role="table" aria-label="Highest revenue per show">
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
                className={`${styles.row} ${s.artist === "Burna Boy" ? styles.rowHis : ""}`}
              >
                {/* The top three are lit; below that the rank is a label, not a
                    result, and reads muted. */}
                <span
                  role="cell"
                  className={`${styles.rank} ${rank <= 3 ? styles.rankTop : ""}`}
                >
                  {String(rank).padStart(2, "0")}
                </span>
                <span
                  role="cell"
                  className={s.artist === "Burna Boy" ? styles.hisName : styles.otherName}
                >
                  {s.artist}
                </span>
                <span role="cell" className={styles.venueCell}>
                  <span className={styles.venue}>
                    {s.flag} {s.venue}
                  </span>
                  <span className={styles.city}>{s.city}</span>
                </span>
                <span role="cell" className={styles.tour}>
                  {s.tour} · {s.year}
                </span>
                <span role="cell" className={styles.tickets}>
                  {s.tickets ?? <NotReported />}
                </span>
                <span
                  role="cell"
                  className={`${styles.gross} ${s.artist === "Burna Boy" ? styles.grossHis : ""}`}
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
