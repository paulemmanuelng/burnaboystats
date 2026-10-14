import Link from "next/link";
import styles from "../records/africas-biggest/africas-biggest.module.css";
import { HIGHLIGHT, rankOf, type LeaderboardBox } from "../data/africasBiggest";
import { artistPageHref } from "../lib/africaBoards";
import Provenance from "./Provenance";
import { methodParts } from "../lib/provenance";

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
 * `featured` promotes a box to a full-width headline card. A box marked `wide`
 * in its data also takes the full width at two columns, without the headline
 * styling.
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
    // The id is the desktop index's jump target (Job 4 · J4-7); the phone's
    // board carries the same id with "m-".
    <div id={box.id} className={`${styles.box} ${featured ? styles.boxFeatured : box.wide ? styles.boxWide : ""}`}>
      <div className={styles.boxHead}>
        {/* The scope tag leads every board, in the same place (J1-8, fix
            22); "He leads" sits at the right of the same row. Both ink. */}
        <div className={styles.tagRow}>
          <span className={styles.scopeTag}>{box.scope}</span>
          {heLeads && <span className={styles.leadsBadge}>He leads</span>}
        </div>
        <h3 className={`${styles.boxTitle} ${featured ? styles.boxTitleBig : ""}`}>
          {box.title}
        </h3>
        <div className={styles.boxMeta}>{box.meta}</div>
      </div>

      {box.layout === "list" ? (
        <div className={styles.entryList}>
          {entries.map((e, i) => {
            const him = e.name === HIGHLIGHT;
            const href = e.href ?? artistPageHref(e.name);
            return (
              <div
                key={`${e.name}-${i}`}
                className={`${styles.entryRow} ${him ? styles.entryHim : ""}`}
              >
                <span className={`${styles.entryRank} ${him ? styles.rankHim : ""}`}>
                  {rankOf(entries, i)}
                </span>
                <span>
                  <span className={`${styles.entryName} ${him ? styles.nameHim : ""}`}>
                    {/* An artist with a page on the site links to it, on every
                        board (artistPageHref). The phone's board
                        (MobileAfricasBiggest) links the same names. */}
                    {href ? (
                      <Link href={href} className={styles.entryLink}>
                        {e.name}
                      </Link>
                    ) : (
                      e.name
                    )}
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
                  const href = artistPageHref(e.name);
                  return (
                    <span
                      key={`${e.name}-${i}`}
                      className={`${styles.chip} ${him ? styles.chipHim : ""}`}
                    >
                      <span className={styles.chipRank}>{rankOf(r.entries, i)}</span>
                      {href ? (
                        <Link href={href} className={styles.entryLink}>
                          {e.name}
                        </Link>
                      ) : (
                        e.name
                      )}
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
      {/* P2 (J1-9; fixes 12 and 22): the source and its read date, always
          visible; "Method ▾" opens the board's own source text, word for
          word. Pushed to the box's foot, so the two boards in a row align. */}
      <div className={styles.p2Slot}>
        <Provenance size="p2" sources={box.sources} method={{ parts: methodParts(box.source) }} />
      </div>
    </div>
  );
}
