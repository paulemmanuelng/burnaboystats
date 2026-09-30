"use client"; // polls the board and posts claims

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { HuntStatus, Mine } from "../lib/naija66/state";

/**
 * One poller and one claim form state for /naija66, shared by both layouts.
 *
 * The phone screen and the desktop page are both in the document, so without
 * a shared provider each would poll the board on its own — two requests every
 * 20 seconds from every open tab, for one board. This keeps one.
 *
 * The board polls every 20 seconds while the tab is visible, and at once when
 * it becomes visible again.
 */

export type Outcome =
  | { kind: "won"; mine: Mine }
  | { kind: "already"; mine: Mine }
  | { kind: "claimed"; prize: number; at: string | null; tail: string | null }
  | { kind: "wrong" }
  | { kind: "error"; message: string };

type HuntContext = {
  status: HuntStatus | null;
  /** The last poll failed; the board keeps what it last knew. */
  stale: boolean;
  /** This browser's win, from a claim just made or from its cookie. */
  mine: Mine | null;
  outcome: Outcome | null;
  pending: boolean;
  submit: (key: string) => void;
};

const Ctx = createContext<HuntContext | null>(null);

export const POLL_MS = 20_000;
const OFFLINE = "Couldn't reach the hunt — check your connection and try again.";

export function useHunt(): HuntContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useHunt() outside <Naija66Provider>");
  return ctx;
}

export default function Naija66Provider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<HuntStatus | null>(null);
  const [stale, setStale] = useState(false);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [pending, setPending] = useState(false);
  const busy = useRef(false);

  // A promise chain rather than async/await: every setState here runs in a
  // callback, after the network, never in the body of the effect that starts it.
  const load = useCallback(
    () =>
      fetch("/api/naija66/status", { cache: "no-store" })
        .then((res) => {
          if (!res.ok) throw new Error(String(res.status));
          return res.json() as Promise<HuntStatus>;
        })
        .then((next) => {
          if (!Array.isArray(next?.prizes)) throw new Error("malformed");
          setStatus(next);
          setStale(false);
        })
        .catch(() => setStale(true)),
    [],
  );

  useEffect(() => {
    void load();
    const tick = setInterval(() => {
      if (document.visibilityState === "visible") void load();
    }, POLL_MS);
    const onVisible = () => {
      if (document.visibilityState === "visible") void load();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    return () => {
      clearInterval(tick);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, [load]);

  const submit = useCallback(
    (key: string) => {
      // A double tap must not send two claims: the second would come back
      // "claimed" — by this same person — and overwrite the win.
      if (busy.current) return;
      busy.current = true;
      setPending(true);
      void (async () => {
        try {
          const res = await fetch("/api/naija66/claim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key }),
          });
          const j = (await res.json().catch(() => ({}))) as Record<string, unknown>;
          if (j.won === true) {
            setOutcome({ kind: "won", mine: { prize: Number(j.prize), code: String(j.code), at: String(j.at) } });
          } else if (j.alreadyWon === true && j.mine) {
            setOutcome({ kind: "already", mine: j.mine as Mine });
          } else if (j.claimed === true) {
            setOutcome({
              kind: "claimed",
              prize: Number(j.prize),
              at: typeof j.at === "string" ? j.at : null,
              tail: typeof j.tail === "string" ? j.tail : null,
            });
          } else if (j.wrong === true) {
            setOutcome({ kind: "wrong" });
          } else {
            setOutcome({ kind: "error", message: typeof j.error === "string" ? j.error : OFFLINE });
          }
        } catch {
          setOutcome({ kind: "error", message: OFFLINE });
        } finally {
          busy.current = false;
          setPending(false);
          void load();
        }
      })();
    },
    [load],
  );

  const mine =
    outcome?.kind === "won" || outcome?.kind === "already" ? outcome.mine : (status?.mine ?? null);

  return <Ctx.Provider value={{ status, stale, mine, outcome, pending, submit }}>{children}</Ctx.Provider>;
}
