"use client"; // polls the board

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { HuntStatus, Mine } from "../lib/naija66/state";

/**
 * One poller for /naija66, shared by both layouts.
 *
 * The phone screen and the desktop page are both in the document, so without
 * a shared provider each would poll the board on its own — two requests every
 * 20 seconds from every open tab, for one board. This keeps one.
 *
 * The board polls every 20 seconds while the tab is visible, and at once when
 * it becomes visible again. Codes are revealed on their own pages
 * (HuntKeySlot.tsx), not here; this page shows a browser's win from the
 * status route's `mine`, which only its httpOnly cookie unlocks.
 */

type HuntContext = {
  status: HuntStatus | null;
  /** The last poll failed; the board keeps what it last knew. */
  stale: boolean;
  /** This browser's win, from its cookie. */
  mine: Mine | null;
};

const Ctx = createContext<HuntContext | null>(null);

export const POLL_MS = 20_000;

export function useHunt(): HuntContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useHunt() outside <Naija66Provider>");
  return ctx;
}

export default function Naija66Provider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<HuntStatus | null>(null);
  const [stale, setStale] = useState(false);

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

  const mine = status?.mine ?? null;

  return <Ctx.Provider value={{ status, stale, mine }}>{children}</Ctx.Provider>;
}
