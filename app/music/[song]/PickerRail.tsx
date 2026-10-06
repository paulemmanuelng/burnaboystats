"use client"; // moves the song picker to the current song's chip on load

import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Where the rail's scrollLeft goes so `chip` sits in its middle, clamped to
 * the rail's ends: the first songs stay flush left, the last flush right.
 */
export function centredOffset(rail: HTMLElement, chip: HTMLElement): number {
  const max = rail.scrollWidth - rail.clientWidth;
  if (max <= 0) return 0;
  const r = rail.getBoundingClientRect();
  const c = chip.getBoundingClientRect();
  const left = c.left - r.left + rail.scrollLeft;
  return Math.max(0, Math.min(max, Math.round(left + c.width / 2 - rail.clientWidth / 2)));
}

/**
 * The song picker's scrolling row. The chips stay server-rendered links; this
 * only scrolls the row, once per song, so the current song's chip
 * (aria-current="page") is in the middle of it.
 *
 * The row always opened at its start, so the chip for the page being read was
 * off-screen on 12 of the 14 song pages at 390 (On the Low to Smoke; Smoke's
 * chip at x=2232 in a row ending at 372) and on 6 at 1440 (TaTaTa to Smoke),
 * where the desktop row has no arrows (debug pass 5 Oct 2026, V-music-01).
 *
 * The row's own scrollLeft, never scrollIntoView, which could also scroll the
 * page (a reload restored mid-page would jump back up to the picker). A
 * layout effect, so a move between songs paints the new row already in place.
 */
export default function PickerRail({ className, current, children }: { className: string; current: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const rail = ref.current;
    const chip = rail?.querySelector<HTMLElement>('[aria-current="page"]');
    if (rail && chip) rail.scrollLeft = centredOffset(rail, chip);
  }, [current]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
