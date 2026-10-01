"use client"; // reads the pathname, the visitor's clock and their taps

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import CopyButton from "./CopyButton";
import { badgeRound } from "../lib/naija66/clock";
import { hasOwnActionBar } from "../lib/mobileScreens";
import { claimToken, keptClaimToken } from "../lib/naija66/token";
import { normaliseWord, wordAtPoint } from "../lib/naija66/word";
import { ALREADY_WON_LINE, SLOW_DOWN, WINNER_KEEP_LINE, WINNER_LINE, cardClaimed } from "../lib/naija66/copy";
import styles from "./huntKeySlot.module.css";

/**
 * Naija @ 66 — the code hidden in a word (Paul, 1 Oct 2026: "you have to hide
 * it in a word or phrase"). One per page, from the root layout.
 *
 * Every page asks /api/naija66/spot?p=<its pathname>; only the server knows
 * whether the page holds a code that has dropped. Nothing on the page says so:
 * on a dropped prize page ("here" or "claimed") this arms ONE delegated tap
 * listener over the page's main content (both layouts live inside <main>), and
 * changes nothing anyone can see — no cursor, underline or hover on any word.
 *
 * TOUCH. A mouse's word tap is its click. A finger's is read from pointer
 * events (wordTapListeners): on an iPhone a tap on plain text sends no click
 * at all when nothing between the text and <body> listens for clicks, and a
 * listener on document does not count. Pointer events arrive regardless. The
 * click a touch does produce elsewhere (Android) is skipped, so one tap posts
 * once.
 *
 * THE TAP. A tap on text inside <main> — never on a link, button or input,
 * and never while text is selected — reads the word under the pointer
 * (lib/naija66/word.ts) and POSTs /api/naija66/reveal {p, w, token}. Only the
 * server knows the word. A wrong word answers {} and nothing happens; the
 * right word answers won (the winner card), claimed (the claimed card) or
 * alreadyWon. A 429 shows a quiet toast. One request in flight at a time.
 *
 * WHEN. Only between the first drop and the close, by the visitor's clock —
 * outside that window it renders nothing and asks for nothing. The server
 * snapshot is null, so the server's HTML never carries a card.
 *
 * Each ask carries the browser's claim token, if it has one (token.ts), so a
 * winner whose reveal reply was lost sees the code on the next ask.
 *
 * ASKING AGAIN. On every arrival at a page, and whenever the round changes
 * (clock.ts badgeRound: at each drop, and 90 seconds after it).
 *
 * WHERE. Fixed, so its arrival shifts nothing: bottom-right on desktop, and on
 * a phone just above the five-tab bar (or the screen's own action bar). Under
 * both bars' z-index, so it can never cover the nav.
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

/** Taps on these never count: they navigate, submit or take input. */
const NOT_A_WORD =
  "a,button,input,textarea,select,option,label,summary,video,audio,iframe,[role=button],[role=link],[role=tab],[contenteditable]";

/** The word a click landed on, or null when the click is not a word tap at all. */
export function tappedWord(e: MouseEvent, doc: Document = document): string | null {
  if (e.button !== 0 || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  const target = e.target instanceof Element ? e.target : e.target instanceof Node ? e.target.parentElement : null;
  if (!target || !target.closest("main") || target.closest(NOT_A_WORD)) return null;
  const sel = doc.getSelection?.();
  if (sel && !sel.isCollapsed && sel.toString().trim()) return null;
  const w = wordAtPoint(doc, e.clientX, e.clientY);
  return w && normaliseWord(w) ? w : null;
}

/** A finger counts as a tap when it lifts within this far and this soon of touching down. */
const TAP_SLOP_PX = 10;
const TAP_MS = 600;
/** A click this soon after a touch or pen contact is that contact's own, already read. */
const CLICK_AFTER_TOUCH_MS = 1000;

const isTouchLike = (e: PointerEvent) => e.pointerType === "touch" || e.pointerType === "pen";

/**
 * The document listeners that turn a mouse click, or a touch or pen tap, into
 * one call of `onTap` with the event to read the word from. A touch tap is a
 * primary pointer's down then up, within TAP_SLOP_PX and TAP_MS, with no
 * cancel (a scroll) and no second finger (a pinch) in between.
 */
export function wordTapListeners(onTap: (e: MouseEvent) => void) {
  let down: { id: number; x: number; y: number; t: number } | null = null;
  let lastContact = -Infinity;
  return {
    pointerdown(e: PointerEvent) {
      if (!isTouchLike(e)) return;
      lastContact = Date.now();
      down = e.isPrimary ? { id: e.pointerId, x: e.clientX, y: e.clientY, t: Date.now() } : null;
    },
    pointercancel(e: PointerEvent) {
      if (down && e.pointerId === down.id) down = null;
    },
    pointerup(e: PointerEvent) {
      if (!isTouchLike(e)) return;
      lastContact = Date.now();
      const d = down;
      down = null;
      if (!d || e.pointerId !== d.id) return;
      if (Math.hypot(e.clientX - d.x, e.clientY - d.y) > TAP_SLOP_PX || Date.now() - d.t > TAP_MS) return;
      onTap(e);
    },
    click(e: MouseEvent) {
      const type = (e as PointerEvent).pointerType;
      if (type === "touch" || type === "pen" || Date.now() - lastContact < CLICK_AFTER_TOUCH_MS) return;
      onTap(e);
    },
  };
}

const TOAST_MS = 4000;

export default function HuntKeySlot() {
  const pathname = usePathname();
  const round = useSyncExternalStore(EVERY_30_S, clientRound, serverRound);
  // What spot said, kept with the page it answered, so it never shows on the
  // next page.
  const [spot, setSpot] = useState<{ path: string; spot: Spot | null } | null>(null);
  // The card a tap on the right word brought up, kept with its page too.
  const [card, setCard] = useState<{ path: string; spot: Spot } | null>(null);
  const [toast, setToast] = useState<string | null>(null);
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
        if (live) setSpot({ path: pathname, spot: spotFrom(j ?? {}) });
      })
      .catch(() => {
        /* nothing shows; the next round asks again */
      });
    return () => {
      live = false;
    };
  }, [pathname, round]);

  const asked = spot && spot.path === pathname ? spot.spot : null;
  const armedPrize = asked && (asked.kind === "here" || asked.kind === "claimed") ? asked.prize : null;

  // The one delegated tap listener, on a dropped prize page only.
  useEffect(() => {
    if (!pathname || round === null || armedPrize === null) return;
    const onTap = (e: MouseEvent) => {
      if (busy.current) return;
      const w = tappedWord(e);
      if (!w) return;
      busy.current = true;
      void (async () => {
        try {
          const res = await fetch("/api/naija66/reveal", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ p: pathname, w, token: claimToken() }),
          });
          if (res.status === 429) {
            setToast(SLOW_DOWN);
            return;
          }
          const j = (await res.json().catch(() => ({}))) as Record<string, unknown>;
          const next = spotFrom(j, armedPrize);
          if (next && next.kind !== "here") {
            setClosedPath(null);
            setCard({ path: pathname, spot: next });
          }
        } catch {
          /* a lost reply shows nothing: the token recovers a win on the next ask */
        } finally {
          busy.current = false;
        }
      })();
    };
    const on = wordTapListeners(onTap);
    document.addEventListener("pointerdown", on.pointerdown);
    document.addEventListener("pointerup", on.pointerup);
    document.addEventListener("pointercancel", on.pointercancel);
    document.addEventListener("click", on.click);
    return () => {
      document.removeEventListener("pointerdown", on.pointerdown);
      document.removeEventListener("pointerup", on.pointerup);
      document.removeEventListener("pointercancel", on.pointercancel);
      document.removeEventListener("click", on.click);
    };
  }, [pathname, round, armedPrize]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), TOAST_MS);
    return () => clearTimeout(id);
  }, [toast]);

  if (!pathname || round === null) return null;
  const toastEl = toast ? (
    <div className={styles.toast} role="status">
      {toast}
    </div>
  ) : null;

  // A tap's card first; otherwise only this browser's own win shows on arrival.
  const s: Spot | null = card && card.path === pathname ? card.spot : asked?.kind === "won" ? asked : null;
  if (!s || s.kind === "here" || (s.kind !== "won" && closedPath === pathname)) return toastEl;

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
    <>
      {toastEl}
      <aside className={place} aria-label="Naija @ 66" data-state={s.kind} role="status">
        <div className={styles.kicker}>
          {flag}
          <span>{`Naija @ 66 · Code ${s.prize}`}</span>
          {close}
        </div>
        {s.kind === "won" ? (
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
    </>
  );
}
