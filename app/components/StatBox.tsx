import styles from "../records/africas-biggest/africas-biggest.module.css";
import { HIGHLIGHT, type LeaderboardBox } from "../data/africasBiggest";

// A reusable leaderboard "stat box" — a titled card with year-by-year ranked
// rows (#1 highlighted, Burna Boy highlighted wherever he appears). Drop more
// LeaderboardBox objects into the data file to add more boxes to the page.
export default function StatBox({ box }: { box: LeaderboardBox }) {
  return (
    <div className={styles.box}>
      <div className={styles.boxHead}>
        <h2 className={styles.boxTitle}>{box.title}</h2>
        <span className={styles.boxMeta}>{box.meta}</span>
      </div>

      <div className={styles.rows}>
        {box.rows.map((r) => (
          <div key={r.label} className={styles.row}>
            <span className={styles.year}>
              {r.label}
              {r.inProgress ? <span className={styles.star}>*</span> : null}
            </span>
            <div>
              <ol className={styles.rank}>
                {r.entries.map((name, i) => (
                  <li
                    key={name}
                    className={`${styles.entry} ${i === 0 ? styles.first : ""} ${
                      name === HIGHLIGHT ? styles.highlight : ""
                    }`}
                  >
                    <span className={styles.pos}>{i + 1}</span>
                    <span className={styles.name}>{name}</span>
                  </li>
                ))}
              </ol>
              {r.note ? <p className={styles.rowNote}>{r.note}</p> : null}
            </div>
          </div>
        ))}
      </div>

      <p className={styles.boxSource}>{box.source}</p>
    </div>
  );
}
