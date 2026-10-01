"use client"; // the flow box and the live board

import CopyButton from "./CopyButton";
import { useHunt } from "./Naija66Provider";
import { NAIJA66_PRIZES, NAIJA66_X_HANDLE, NAIJA66_X_URL } from "../data/naija66";
import { CLOSES_MS, FIRST_DROP_MS, watClock, watHour } from "../lib/naija66/clock";
import { FLOW, PRIZE, WINNER_KEEP_LINE, WINNER_LINE } from "../lib/naija66/copy";
import type { Mine, PublicPrize } from "../lib/naija66/state";
import styles from "./naija66Play.module.css";

/**
 * The two live pieces of /naija66 — the flow box and the board — drawn for
 * either layout. The phone screen and the desktop page each place them in
 * their own running order; the state behind both is one Naija66Provider.
 */

type Layout = "desktop" | "phone";

const closedAt = (now: string | undefined) => (now ? Date.parse(now) >= CLOSES_MS : false);

function WinCard({ mine, layout }: { mine: Mine; layout: Layout }) {
  return (
    <div className={`${styles.win} ${layout === "phone" ? styles.phone : ""}`} role="status">
      <div className={styles.winKicker}>
        Prize {mine.prize} · claimed {watClock(mine.at)}
      </div>
      <h2 className={styles.winHead}>You found it.</h2>
      <div className={styles.codeRow}>
        <code className={styles.code}>{mine.code}</code>
        <CopyButton value={mine.code} className={styles.copy} label="Copy code" fallback />
      </div>
      <p className={styles.winText}>{WINNER_LINE}</p>
      <a href={NAIJA66_X_URL} target="_blank" rel="noopener noreferrer" className={styles.winLink}>
        Open {NAIJA66_X_HANDLE} on X ↗
      </a>
      <p className={styles.fine}>{WINNER_KEEP_LINE}</p>
    </div>
  );
}

/**
 * Where the code box was: how a code is won now (copy.ts FLOW), or — for a
 * browser that has won — its code, or the close.
 */
export function HuntFlowBox({ layout }: { layout: Layout }) {
  const { status, mine } = useHunt();
  const phone = layout === "phone" ? styles.phone : "";

  if (mine) return <WinCard mine={mine} layout={layout} />;

  if (closedAt(status?.now)) {
    return (
      <div className={`${styles.box} ${phone}`}>
        <div className={styles.kicker}>The hunt is closed</div>
        <p className={styles.closedText}>
          Claims closed at midnight WAT at the end of 2 October. The board has the final results.
        </p>
      </div>
    );
  }

  return (
    <div className={`${styles.box} ${phone}`}>
      <div className={styles.kicker}>How to win</div>
      <h2 className={styles.head}>Tap to reveal</h2>
      <p className={styles.flowText}>{FLOW}</p>
    </div>
  );
}

function stateLine(p: PublicPrize | undefined): string {
  if (!p) return "Checking…";
  switch (p.state) {
    case "sleeping":
      return "Sleeping";
    case "live":
      return "Live — the code is out";
    case "claimed":
      return `Claimed${p.claimedAt ? ` at ${watClock(p.claimedAt)}` : ""}${p.tail ? ` · ends …${p.tail}` : ""}`;
    case "closed":
      return "Closed — unclaimed";
  }
}

export function HuntBoard({ layout }: { layout: Layout }) {
  const { status, stale, mine } = useHunt();
  const closed = closedAt(status?.now);

  return (
    <div className={`${styles.boardWrap} ${layout === "phone" ? styles.phone : ""}`}>
      {status && !status.ready ? (
        <p className={styles.notice}>
          {Date.parse(status.now) >= FIRST_DROP_MS
            ? "The hunt isn't open yet — check back soon."
            : "The hunt opens at 9am WAT on 1 October."}
        </p>
      ) : closed ? (
        <p className={styles.notice}>The hunt is closed. These are the final results.</p>
      ) : null}
      <ol className={styles.board}>
        {NAIJA66_PRIZES.map((p) => {
          const s = status?.prizes.find((x) => x.prize === p.prize);
          return (
            <li key={p.prize} className={styles.boardRow} data-state={s?.state ?? "unknown"}>
              <span className={styles.rowPrize}>
                <span className={styles.rowNo}>Prize {p.prize}</span>
                <span className={styles.rowWhat}>{PRIZE.board}</span>
              </span>
              <span className={styles.rowDrop}>{watHour(p.dropsAt)}</span>
              <span className={styles.rowState}>
                <span className={styles.dot} aria-hidden="true" />
                {stateLine(s)}
                {mine?.prize === p.prize ? <strong className={styles.yours}> · yours</strong> : null}
              </span>
            </li>
          );
        })}
      </ol>
      <p className={styles.boardFoot}>
        {stale ? "Couldn't refresh — showing the last board we saw." : "Refreshes every 20 seconds. Times are WAT."}
      </p>
    </div>
  );
}
