"use client"; // the key box and the live board

import { useId, useState } from "react";
import CopyButton from "./CopyButton";
import { useHunt, type Outcome } from "./Naija66Provider";
import { NAIJA66_PRIZES, NAIJA66_X_HANDLE, NAIJA66_X_URL } from "../data/naija66";
import { CLOSES_MS, watClock, watHour } from "../lib/naija66/clock";
import { WINNER_LINE } from "../lib/naija66/copy";
import type { Mine, PublicPrize } from "../lib/naija66/state";
import styles from "./naija66Play.module.css";

/**
 * The two live pieces of /naija66 — the key box and the board — drawn for
 * either layout. The phone screen and the desktop page each place them in
 * their own running order; the state behind both is one Naija66Provider, so
 * a claim made in one is the claim shown in the other.
 */

type Layout = "desktop" | "phone";

const closedAt = (now: string | undefined) => (now ? Date.parse(now) >= CLOSES_MS : false);

function outcomeLine(o: Outcome): string {
  switch (o.kind) {
    case "wrong":
      return "That key doesn't open anything. Check the badge and try again.";
    case "claimed":
      return o.at
        ? `Too slow — prize ${o.prize} was claimed at ${watClock(o.at)}${o.tail ? ` (code ends …${o.tail})` : ""}. Watch X for the next clue.`
        : `Too slow — prize ${o.prize} has already been claimed. Watch X for the next clue.`;
    case "error":
      return o.message;
    default:
      return "";
  }
}

function WinCard({ mine, again, layout }: { mine: Mine; again: boolean; layout: Layout }) {
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
      <p className={styles.fine}>
        {again
          ? "One prize per person — you've already won, so the key you just entered stays open for somebody else."
          : "Only this browser can show this code. Screenshot it to be safe."}
      </p>
    </div>
  );
}

export function HuntKeyForm({ layout }: { layout: Layout }) {
  const { status, mine, outcome, pending, submit } = useHunt();
  const [value, setValue] = useState("");
  const id = useId();
  const phone = layout === "phone" ? styles.phone : "";

  if (mine) return <WinCard mine={mine} again={outcome?.kind === "already"} layout={layout} />;

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

  const line = outcome ? outcomeLine(outcome) : "";

  return (
    <form
      className={`${styles.box} ${phone}`}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) submit(value);
      }}
    >
      <div className={styles.kicker}>Got a key?</div>
      <h2 className={styles.head}>Claim it here</h2>
      <label className={styles.label} htmlFor={`${id}-key`}>
        Your key
      </label>
      <div className={styles.row}>
        <input
          id={`${id}-key`}
          name="key"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="NG66-XXXXXX"
          autoComplete="off"
          autoCapitalize="characters"
          autoCorrect="off"
          spellCheck={false}
          maxLength={40}
          aria-describedby={line ? `${id}-out` : undefined}
          aria-invalid={outcome?.kind === "wrong" ? true : undefined}
        />
        <button type="submit" className={`btn btnPrimary ${styles.button}`} disabled={pending}>
          {pending ? "Checking…" : "Claim"}
        </button>
      </div>
      {line ? (
        <p id={`${id}-out`} className={styles.outcome} role="status">
          {line}
        </p>
      ) : null}
      <p className={styles.fine}>Keys look like NG66-XXXXXX, and they aren&apos;t case-sensitive.</p>
    </form>
  );
}

function stateLine(p: PublicPrize | undefined): string {
  if (!p) return "Checking…";
  switch (p.state) {
    case "sleeping":
      return "Sleeping";
    case "live":
      return "Live — the key is out";
    case "claimed":
      return `Claimed at ${p.claimedAt ? watClock(p.claimedAt) : "—"}${p.tail ? ` · ends …${p.tail}` : ""}`;
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
        <p className={styles.notice}>The hunt opens at 9am WAT on 1 October.</p>
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
                <span className={styles.rowWhat}>1 month of Spotify Premium</span>
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
