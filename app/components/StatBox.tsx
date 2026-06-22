import styles from "../records/africas-biggest/africas-biggest.module.css";
import { HIGHLIGHT, type LeaderboardBox } from "../data/africasBiggest";

// A reusable leaderboard "stat box". Supports two layouts:
//   • "year" — ranked Top-5 per year (#1 highlighted; names only).
//   • "list" — a single ranked list with an optional value per entry.
// Burna Boy is highlighted gold wherever he appears (HIGHLIGHT). Drop more
// LeaderboardBox objects into the data file to add more boxes to the page.
export default function StatBox({ box }: { box: LeaderboardBox }) {
  return (
    <div className={styles.box}>
      <div className={styles.boxHead}>
        <h2 className={styles.boxTitle}>{box.title}</h2>
        <span className={styles.boxMeta}>{box.meta}</span>
      </div>

      {box.layout === "list" ? (
        <ol className={styles.listRank}>
          {(box.entries ?? []).map((e, i) => (
            <li
              key={e.name}
              className={`${styles.listEntry} ${i === 0 ? styles.first : ""} ${
                e.name === HIGHLIGHT ? styles.highlight : ""
              }`}
            >
              <span className={styles.pos}>{i + 1}</span>
              <span className={styles.name}>{e.name}</span>
              {e.sub ? <span className={styles.sub}>{e.sub}</span> : null}
              {e.value ? <span className={styles.value}>{e.value}</span> : null}
            </li>
          ))}
        </ol>
      ) : (
        <div className={styles.rows}>
          {(box.rows ?? []).map((r) => (
            <div key={r.label} className={styles.row}>
              <span className={styles.year}>
                {r.label}
                {r.inProgress ? <span className={styles.star}>*</span> : null}
              </span>
              <div>
                <ol className={styles.rank}>
                  {r.entries.map((e, i) => (
                    <li
                      key={e.name}
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
      )}

      {box.note ? <p className={styles.boxNote}>{box.note}</p> : null}
      <p className={styles.boxSource}>{box.source}</p>
    </div>
  );
}
