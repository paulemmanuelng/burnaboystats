"use client"; // reads the pathname and the visitor's clock

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import CopyButton from "./CopyButton";
import { badgeRound } from "../lib/naija66/clock";
import { hasOwnActionBar } from "../lib/mobileScreens";
import { claimToken, keptClaimToken } from "../lib/naija66/token";
import {
  ALREADY_WON_LINE,
  REVEAL_BUTTON,
  REVEAL_FINE,
  WINNER_KEEP_LINE,
  WINNER_LINE,
  cardClaimed,
  cardHidden,
} from "../lib/naija66/copy";
import styles from "./huntKeySlot.module.css";
import { NAIJA66_HERE_CARD } from "../data/naija66";

/**
 * The Naija @ 66 reveal card — one per page, from the root layout.
 *
 * Every page on the site renders exactly this and asks
 * /api/naija66/spot?p=<its pathname>; only the server knows whether the page
 * holds a code that has dropped. Until it says so, the card is nothing at all.
 *
 * WHEN. Only between the first drop and the close, by the visitor's clock —
 * outside that window it renders nothing and asks for nothing. The server
 * snapshot is null, so the server's HTML never carries the card.
 *
 * Each ask carries the browser's claim token, if it has one (token.ts), so a
 * winner whose reveal reply was lost sees the code on the next ask.
 *
 * ASKING AGAIN. On every arrival at a page, and whenever the round changes
 * (clock.ts badgeRound: at each drop, and 90 seconds after it, for a phone
 * whose clock runs ahead of the server's).
 *
 * WHERE. Fixed, so its arrival after the fetch shifts nothing: bottom-right on
 * desktop, and on a phone just above the five-tab bar (or above the screen's
 * own action bar, where one replaces the tab bar). Under both bars' z-index,
 * so it can never cover the nav.
 *
 * THE TAP. "Tap to reveal" POSTs /api/naija66/reveal with this page and the
 * browser's claim token. First tap wins; the winner sees the code here, and
 * everyone else sees it claimed.
 */

type Spot =
  | { kind: "here"; prize: number }
  | { kind: "won"; prize: number; code: string; at: string }
  | { kind: "claimed"; prize: number; at: string | null }
  | { kind: "already"; prize: number };

const EVERY_30_S = (onChange: () => void) => {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
};
const clientRound = () => badgeRound(Date.now());
const serverRound = () => null;

/** A server answer as a card, or null for "nothing on this page". */
export function spotFrom(j: Record<string, unknown>, prizeHint?: number): Spot | null {
  if (j.alreadyWon === true && prizeHint) return { kind: "already", prize: prizeHint };
  const prize = Number(j.prize);
  if (!Number.isInteger(prize) || prize < 1 || prize > 5) return null;
  if (j.won === true && typeof j.code === "string" && typeof j.at === "string") {
    return { kind: "won", prize, code: j.code, at: j.at };
  }
  if (j.claimed === true) return { kind: "claimed", prize, at: typeof j.at === "string" ? j.at : null };
  if (j.here === true) return { kind: "here", prize };
  return null;
}

const OOPS = "Couldn't reach the hunt. Check your connection and tap again.";

export default function HuntKeySlot() {
  const pathname = usePathname();
  const round = useSyncExternalStore(EVERY_30_S, clientRound, serverRound);
  // Each answer is kept with the page it answered, so it never shows on the
  // next page; a re-ask on the same page keeps showing it until the new answer.
  const [spot, setSpot] = useState<{ path: string; spot: Spot | null } | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [closedPath, setClosedPath] = useState<string | null>(null);
  const busy = useRef(false);

  useEffect(() => {
    if (!pathname || round === null) return;
    let live = true;
    // The claim token, when this browser has one: a winning tap whose reply
    // was lost (no cookie came back) is recognised by it on the next ask.
    const token = keptClaimToken();
    fetch(`/api/naija66/spot?p=${encodeURIComponent(pathname)}`, {
      cache: "no-store",
      ...(token ? { headers: { "x-naija66-token": token } } : {}),
    })
      .then((res) => (res.ok ? (res.json() as Promise<Record<string, unknown>>) : {}))
      .then((j) => {
        if (!live) return;
        setSpot((prev) => {
          const next = spotFrom(j ?? {});
          // A win shown on this page outlives a re-ask that cannot see it.
          if (prev?.path === pathname && prev.spot?.kind === "won" && next?.kind !== "won") return prev;
          return { path: pathname, spot: next };
        });
      })
      .catch(() => {
        /* nothing shows; the next round asks again */
      });
    return () => {
      live = false;
    };
  }, [pathname, round]);

  if (!pathname || round === null || !spot || spot.path !== pathname || !spot.spot) return null;
  const s = spot.spot;
  if (s.kind !== "here" && s.kind !== "won" && closedPath === pathname) return null;
  if (s.kind === "here" && !NAIJA66_HERE_CARD) return null;

  const reveal = () => {
    if (busy.current) return;
    busy.current = true;
    setPending(true);
    setError(null);
    void (async () => {
      try {
        const res = await fetch("/api/naija66/reveal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ p: pathname, token: claimToken() }),
        });
        const j = (await res.json().catch(() => ({}))) as Record<string, unknown>;
        const next = spotFrom(j, s.prize);
        if (next) setSpot({ path: pathname, spot: next });
        else if (typeof j.error === "string") setError(j.error);
        else setSpot({ path: pathname, spot: null });
      } catch {
        setError(OOPS);
      } finally {
        busy.current = false;
        setPending(false);
      }
    })();
  };

  const place = [styles.card, hasOwnActionBar(pathname) && styles.clearBar].filter(Boolean).join(" ");
  const flag = (
    <span className={styles.flag} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
  const close =
    s.kind === "claimed" || s.kind === "already" ? (
      <button type="button" className={styles.close} aria-label="Close" onClick={() => setClosedPath(pathname)}>
        ×
      </button>
    ) : null;

  return (
    <aside className={place} aria-label="Naija @ 66" data-state={s.kind} role="status">
      <div className={styles.kicker}>
        {flag}
        <span>{s.kind === "here" ? cardHidden(s.prize) : `Naija @ 66 · Code ${s.prize}`}</span>
        {close}
      </div>
      {s.kind === "here" ? (
        <>
          <button type="button" className={`btn btnPrimary ${styles.reveal}`} onClick={reveal} disabled={pending}>
            {pending ? "Revealing…" : REVEAL_BUTTON}
          </button>
          {error ? <p className={styles.error}>{error}</p> : null}
          <p className={styles.fine}>{REVEAL_FINE}</p>
        </>
      ) : s.kind === "won" ? (
        <>
          <div className={styles.codeRow}>
            <code className={styles.code}>{s.code}</code>
            <CopyButton value={s.code} className={styles.copy} label="Copy" fallback />
          </div>
          <p className={styles.text}>{WINNER_LINE}</p>
          <p className={styles.fine}>{WINNER_KEEP_LINE}</p>
        </>
      ) : s.kind === "claimed" ? (
        <p className={styles.text}>{cardClaimed(s.prize, s.at)}</p>
      ) : (
        <p className={styles.text}>{ALREADY_WON_LINE}</p>
      )}
    </aside>
  );
}
