"use client";

import { useState } from "react";
import styles from "../records/africas-biggest/africas-biggest.module.css";
import { HIGHLIGHT, type LeaderboardBox } from "../data/africasBiggest";

// A reusable leaderboard "stat box". Supports two layouts:
//   • "year" — ranked Top-5 per year (#1 highlighted; names only). Long boxes
//     collapse to the latest years, with a "show earlier years" toggle.
//   • "list" — a single ranked list with an optional value per entry.
// Burna Boy is highlighted gold wherever he appears (HIGHLIGHT). `featured`
// promotes a box to a full-width, badged headline.
const INITIAL_YEARS = 2;

export default function StatBox({ box, featured = false }: { box: LeaderboardBox; featured?: boolean }) {
  const [showAllYears, setShowAllYears] = useState(false);
  const rows = box.rows ?? [];
  const visibleRows = showAllYears ? rows : rows.slice(0, INITIAL_YEARS);
  const hiddenYears = rows.length - INITIAL_YEARS;

  return (
    <div className={`${styles.box} ${featured ? styles.featured : ""}`}>
      {featured ? <span className={styles.featuredBadge}>★ Latest milestone</span> : null}
      <div className={styles.boxHead}>
        <h2 className={styles.boxTitle}>{box.title}</h2>
        <span className={styles.boxMeta}>{box.meta}</span>
      </div>

      {box.layout === "list" ? (
        <ol className={styles.listRank}>
          {(box.entries ?? []).map((e, i) => (
            <li
              key={`${e.name}-${i}`}
              className={`${styles.listEntry} ${i === 0 ? styles.first : ""} ${
                e.name === HIGHLIGHT ? styles.highlight : ""
              }`}
            >
              <span className={styles.pos}>{i + 1}</span>
              <span className={styles.listMain}>
                <span className={styles.name}>{e.name}</span>
                {e.sub ? <span className={styles.sub}>{e.sub}</span> : null}
              </span>
              {e.value ? <span className={styles.value}>{e.value}</span> : null}
            </li>
          ))}
        </ol>
      ) : (
        <>
          <div className={styles.rows}>
            {visibleRows.map((r) => (
              <div key={r.label} className={styles.row}>
                <span className={styles.year}>
                  {r.label}
                  {r.inProgress ? <span className={styles.star}>*</span> : null}
                </span>
                <div>
                  <ol className={styles.rank}>
                    {r.entries.map((e, i) => (
                      <li
                        key={`${e.name}-${i}`}
                        className={`${styles.entry} ${i === 0 ? styles.first : ""} ${
                          e.name === HIGHLIGHT ? styles.highlight : ""
                        }`}
                      >
                        <span className={styles.pos}>{i + 1}</span>
                        <span className={styles.name}>{e.name}</span>
                        {e.value ? <span className={styles.entryValue}>{e.value}</span> : null}
                      </li>
                    ))}
                  </ol>
                  {r.note ? <p className={styles.rowNote}>{r.note}</p> : null}
                </div>
              </div>
            ))}
          </div>
          {hiddenYears > 0 ? (
            <button
              type="button"
              className={styles.showMore}
              aria-expanded={showAllYears}
              onClick={() => setShowAllYears((s) => !s)}
            >
              {showAllYears ? "Show fewer years" : `Show ${hiddenYears} earlier years`}
            </button>
          ) : null}
        </>
      )}

      {box.note ? <p className={styles.boxNote}>{box.note}</p> : null}
      <p className={styles.boxSource}>{box.source}</p>
    </div>
  );
}
