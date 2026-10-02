import { NAIJA66_PRIZES, type Naija66Prize } from "../data/naija66";
import { watClock, watHour } from "../lib/naija66/clock";
import { ENDED_KICKER, ENDED_TEXT, FINAL_NOTICE, PRIZE } from "../lib/naija66/copy";
import styles from "./naija66Play.module.css";

/**
 * The two boxes of /naija66 — the box beside the hero and the board — drawn
 * for either layout. The phone screen and the desktop page each place them in
 * their own running order.
 *
 * The hunt has ended, so both are static: the board is the final results from
 * app/data/naija66.ts, with no poll, no live state and no winner's card.
 */

type Layout = "desktop" | "phone";

/** Where the flow box was: the close. */
export function HuntFlowBox({ layout }: { layout: Layout }) {
  return (
    <div className={`${styles.box} ${layout === "phone" ? styles.phone : ""}`}>
      <div className={styles.kicker}>{ENDED_KICKER}</div>
      <p className={styles.closedText}>{ENDED_TEXT}</p>
    </div>
  );
}

/** "Claimed at 22:01 WAT · ends …EK", or "Claimed" for a prize awarded on X. */
export function stateLine(p: Naija66Prize): string {
  return `Claimed${p.claimedAt ? ` at ${watClock(p.claimedAt)}` : ""}${p.tail ? ` · ends …${p.tail}` : ""}`;
}

export function HuntBoard({ layout }: { layout: Layout }) {
  return (
    <div className={`${styles.boardWrap} ${layout === "phone" ? styles.phone : ""}`}>
      <p className={styles.notice}>{FINAL_NOTICE}</p>
      <ol className={styles.board}>
        {NAIJA66_PRIZES.map((p) => (
          <li key={p.prize} className={styles.boardRow} data-state="claimed">
            <span className={styles.rowPrize}>
              <span className={styles.rowNo}>Prize {p.prize}</span>
              <span className={styles.rowWhat}>{PRIZE.board}</span>
            </span>
            <span className={styles.rowDrop}>{watHour(p.dropsAt)}</span>
            <span className={styles.rowState}>
              <span className={styles.dot} aria-hidden="true" />
              {stateLine(p)}
            </span>
          </li>
        ))}
      </ol>
      <p className={styles.boardFoot}>Times are WAT.</p>
    </div>
  );
}
