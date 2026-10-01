"use client"; // the code box and the live board

import { useId, useRef, useSyncExternalStore } from "react";
import CopyButton from "./CopyButton";
import { useHunt, type Outcome } from "./Naija66Provider";
import { NAIJA66_PRIZES, NAIJA66_X_HANDLE, NAIJA66_X_URL } from "../data/naija66";
import { CLOSES_MS, FIRST_DROP_MS, watClock, watHour } from "../lib/naija66/clock";
import { LAST_CODE_LINE, NEXT_CODE_LINE, PRIZE, WINNER_KEEP_LINE, WINNER_LINE } from "../lib/naija66/copy";
import type { Mine, PublicPrize } from "../lib/naija66/state";
import styles from "./naija66Play.module.css";

/**
 * The two live pieces of /naija66 — the code box and the board — drawn for
 * either layout. The phone screen and the desktop page each place them in
 * their own running order; the state behind both is one Naija66Provider, so
 * a claim made in one is the claim shown in the other.
 */

type Layout = "desktop" | "phone";

const closedAt = (now: string | undefined) => (now ? Date.parse(now) >= CLOSES_MS : false);

/** False in the server's HTML and during hydration, true once React runs the page. */
const NEVER = () => () => {};
const useHydrated = () => useSyncExternalStore(NEVER, () => true, () => false);

/**
 * True only when the board shows every prize but `prize` claimed (or closed):
 * no code is still out and none is still to drop. Read from the board, never
 * the clock — at 9:30pm a code from the morning can still be out. A board not
 * yet loaded, or missing a row, proves nothing, so it reads as "not over".
 */
export function nothingLeft(prize: number, board: readonly PublicPrize[] | undefined): boolean {
  if (!board) return false;
  return NAIJA66_PRIZES.every((p) => {
    if (p.prize === prize) return true;
    const state = board.find((x) => x.prize === p.prize)?.state;
    return state === "claimed" || state === "closed";
  });
}

/**
 * What the code box says after a claim. `board` is the board's prizes, which
 * the provider reloads after every claim: a "too slow" says it was the last
 * code only when nothing else is left to find, and otherwise points at X,
 * which says where the codes still out are.
 */
export function outcomeLine(o: Outcome, board: readonly PublicPrize[] | undefined): string {
  switch (o.kind) {
    case "wrong":
      return "That code doesn't open anything. Check the badge and try again.";
    case "claimed": {
      const next = nothingLeft(o.prize, board) ? LAST_CODE_LINE : NEXT_CODE_LINE;
      return o.at
        ? `Too slow — prize ${o.prize} was claimed at ${watClock(o.at)}${o.tail ? ` (winner code ends …${o.tail})` : ""}. ${next}`
        : `Too slow — prize ${o.prize} has already been claimed. ${next}`;
    }
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
          ? "One prize per person — you've already won, so the code you just entered stays open for somebody else."
          : WINNER_KEEP_LINE}
      </p>
    </div>
  );
}

/**
 * The code box (the API calls what it sends a key). Claim stays disabled
 * until the page has hydrated: before that the form is plain HTML, and a tap
 * would reload the page and lose the code rather than claim it. The input has
 * no name, so no submit of any kind can put a code in a URL. It is read from
 * the field itself on submit, so a code pasted before hydration is still the
 * code sent.
 */
export function HuntKeyForm({ layout }: { layout: Layout }) {
  const { status, mine, outcome, pending, submit } = useHunt();
  const hydrated = useHydrated();
  const input = useRef<HTMLInputElement>(null);
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

  // The board, not the clock, decides "that was the last code" — and the
  // provider reloads the board after every claim, so the line follows it.
  const line = outcome ? outcomeLine(outcome, status?.prizes) : "";

  return (
    <form
      className={`${styles.box} ${phone}`}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const typed = input.current?.value ?? "";
        if (typed.trim()) submit(typed);
      }}
    >
      <div className={styles.kicker}>Got a code?</div>
      <h2 className={styles.head}>Claim it here</h2>
      <label className={styles.label} htmlFor={`${id}-key`}>
        Your code
      </label>
      <div className={styles.row}>
        <input
          ref={input}
          id={`${id}-key`}
          className={styles.input}
          placeholder="NG66-XXXXXX"
          autoComplete="off"
          autoCapitalize="characters"
          autoCorrect="off"
          spellCheck={false}
          maxLength={40}
          aria-describedby={line ? `${id}-out` : undefined}
          aria-invalid={outcome?.kind === "wrong" ? true : undefined}
        />
        <button type="submit" className={`btn btnPrimary ${styles.button}`} disabled={!hydrated || pending}>
          {pending ? "Checking…" : "Claim"}
        </button>
      </div>
      {line ? (
        <p id={`${id}-out`} className={styles.outcome} role="status">
          {line}
        </p>
      ) : null}
      <p className={styles.fine}>Codes look like NG66-XXXXXX, and they aren&apos;t case-sensitive.</p>
    </form>
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
