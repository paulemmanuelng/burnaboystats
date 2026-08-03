import styles from "../records/africas-biggest/africas-biggest.module.css";
import { HIGHLIGHT, type LeaderboardBox } from "../data/africasBiggest";

/**
 * A leaderboard "stat box". Two layouts:
 *
 *   • "list" — one ranked list, optional value per entry.
 *   • "year" — a ranked top five per year, drawn as chips.
 *
 * Burna Boy is lit gold wherever he appears, including where he *doesn't* lead:
 * he is fifth on Hot 100 peak and fifth on Spotify debuts, and the page marks
 * his row on those boards too rather than only showing the wins.
 *
 * `featured` promotes a box to a full-width headline card.
 *
 * No state, so this stays on the server — the design shows every year row, and
 * the longest board has five, so there is nothing to collapse.
 */
export default function StatBox({
  box,
  featured = false,
}: {
  box: LeaderboardBox;
  featured?: boolean;
}) {
  const entries = box.entries ?? [];
  // "He leads" is a claim, so it's earned from the data, not passed in.
  const heLeads = box.layout === "list" && entries[0]?.name === HIGHLIGHT;

  return (
    <div className={`${styles.box} ${featured ? styles.boxFeatured : ""}`}>
      <div className={styles.boxHead}>
        <div className={styles.boxHeadMain}>
          <h3 className={`${styles.boxTitle} ${featured ? styles.boxTitleBig : ""}`}>
            {box.title}
          </h3>
          <div className={styles.boxMeta}>{box.meta}</div>
        </div>
        {heLeads && <span className={styles.leadsBadge}>He leads</span>}
      </div>

      {box.layout === "list" ? (
        <div className={styles.entryList}>
          {entries.map((e, i) => {
            const him = e.name === HIGHLIGHT;
            return (
              <div
                key={`${e.name}-${i}`}
                className={`${styles.entryRow} ${him ? styles.entryHim : ""}`}
              >
                <span className={`${styles.entryRank} ${him ? styles.rankHim : ""}`}>
                  {i + 1}
                </span>
                <span>
                  <span className={`${styles.entryName} ${him ? styles.nameHim : ""}`}>
                    {e.name}
                  </span>
                  {e.sub && <span className={styles.entrySub}>{e.sub}</span>}
                </span>
                {e.value && (
                  <span
                    className={`${styles.entryValue} ${
                      him ? styles.valueHim : i === 0 ? styles.valueTop : ""
                    }`}
                  >
                    {e.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.yearList}>
          {(box.rows ?? []).map((r) => (
            <div key={r.label} className={styles.yearRow}>
              <div className={styles.yearHead}>
                <span
                  className={`${styles.yearLabel} ${
                    r.entries[0]?.name === HIGHLIGHT ? styles.yearLabelHim : ""
                  }`}
                >
                  {r.label}
                </span>
                {/* Green, not gold: this flags an incomplete year, not a win. */}
                {r.inProgress && <span className={styles.inProgress}>In progress</span>}
                {r.note && <span className={styles.yearNote}>{r.note}</span>}
              </div>
              <div className={styles.chips}>
                {r.entries.map((e, i) => {
                  const him = e.name === HIGHLIGHT;
                  return (
                    <span
                      key={`${e.name}-${i}`}
                      className={`${styles.chip} ${him ? styles.chipHim : ""}`}
                    >
                      <span className={styles.chipRank}>{i + 1}</span>
                      {e.name}
                      {e.value && <span className={styles.chipValue}>{e.value}</span>}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {box.note && <p className={styles.boxNote}>{box.note}</p>}
      {/* Folded away by default: the provenance has to be reachable on every
          board, but it shouldn't outweigh the board itself. */}
      <details className={styles.sourceWrap}>
        <summary className={styles.sourceSummary}>Source ▾</summary>
        <p className={styles.sourceText}>{box.source}</p>
      </details>
    </div>
  );
}
