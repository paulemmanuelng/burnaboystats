"use client";

import { createContext, useContext, useMemo, useRef, useState, type ReactNode } from "react";

/**
 * Row → dot on the phone's /music/listeners (site review 8 Oct 2026, Job 5 ·
 * J5-5): a tap on a city in "The 50" shows that city on the map — its dot
 * lit, its card open, the map scrolled into view — and a tap on a dot lights
 * its row. The map and the list are separate parts of a server-rendered
 * screen, so the city they share lives here; ListenerMap reads it when it
 * sits inside one of these, and keeps its own state when it does not (the
 * laptop page, C-25).
 */
export interface ListenersPick {
  /** The city the map is showing (its rank), or null. */
  active: number | null;
  setActive: (rank: number | null) => void;
  /** The map hands over its "show this city" after each render… */
  register: (show: (rank: number) => void) => void;
  /** …which a row's tap calls, in its own click handler. */
  pick: (rank: number) => void;
}

export const ListenersPickContext = createContext<ListenersPick | null>(null);

export default function ListenersExplorer({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<number | null>(null);
  const handler = useRef<((rank: number) => void) | null>(null);
  const value = useMemo(
    () => ({
      active,
      setActive,
      register: (show: (rank: number) => void) => {
        handler.current = show;
      },
      pick: (rank: number) => handler.current?.(rank),
    }),
    [active],
  );
  return <ListenersPickContext.Provider value={value}>{children}</ListenersPickContext.Provider>;
}

/** One row of "The 50" as a button that shows its city on the map. */
export function CityRowButton({
  rank,
  className,
  onClassName,
  children,
}: {
  rank: number;
  className: string;
  onClassName: string;
  children: ReactNode;
}) {
  const ctx = useContext(ListenersPickContext);
  const on = ctx?.active === rank;
  return (
    <button type="button" className={on ? `${className} ${onClassName}` : className} onClick={() => ctx?.pick(rank)}>
      {children}
    </button>
  );
}
