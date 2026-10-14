"use client"; // moves the song picker to the current song's chip on load, and drives ‹ ›

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { bringIntoRail, railBehavior } from "../../components/ScrollRail";
import styles from "./song.module.css";

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
 * The song picker: its label row and its scrolling row. The chips stay
 * server-rendered links; this scrolls the row, once per song, so the current
 * song's chip (aria-current="page") is in the middle of it.
 *
 * The row always opened at its start, so the chip for the page being read was
 * off-screen on 12 of the 14 song pages at 390 (On the Low to Smoke; Smoke's
 * chip at x=2232 in a row ending at 372) and on 6 at 1440 (TaTaTa to Smoke),
 * where the desktop row has no arrows (debug pass 5 Oct 2026, V-music-01).
 *
 * The row's own scrollLeft, never scrollIntoView, which could also scroll the
 * page (a reload restored mid-page would jump back up to the picker). A
 * layout effect, so a move between songs paints the new row already in place.
 *
 * From 901 the label row carries ‹ › and the row fades 48px at a side that
 * still has songs (Job 4 · J4-5, fixes 88, 89): each button moves the row by
 * one window, and at an edge it is aria-disabled (still focusable, a no-op).
 * Below 901 neither is drawn, so the phone row is as it was.
 */
export default function PickerRail({
  className,
  current,
  label,
  children,
}: {
  className: string;
  current: string;
  label: ReactNode;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const [edges, setEdges] = useState({ start: false, end: false });

  const measure = useCallback(() => {
    const rail = ref.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setEdges({ start: rail.scrollLeft > 2, end: rail.scrollLeft < max - 2 });
  }, []);

  useLayoutEffect(() => {
    const rail = ref.current;
    const chip = rail?.querySelector<HTMLElement>('[aria-current="page"]');
    if (rail && chip) rail.scrollLeft = centredOffset(rail, chip);
    measure();
  }, [current, measure]);

  useEffect(() => {
    const rail = ref.current;
    if (!rail) return;
    const ro = new ResizeObserver(measure);
    ro.observe(rail);
    return () => ro.disconnect();
  }, [measure]);

  const move = (dir: -1 | 1) => {
    const rail = ref.current;
    if (!rail || !(dir < 0 ? edges.start : edges.end)) return;
    rail.scrollBy?.({ left: dir * rail.clientWidth, behavior: railBehavior() });
  };

  return (
    <>
      <div className={styles.pickerHead}>
        <div className={styles.pickerLabel}>{label}</div>
        <div className={styles.railBtns}>
          <button
            type="button"
            className={styles.railBtn}
            aria-label="Scroll the song pages back"
            aria-controls={id}
            aria-disabled={edges.start ? undefined : "true"}
            onClick={() => move(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.railBtn}
            aria-label="Scroll the song pages on"
            aria-controls={id}
            aria-disabled={edges.end ? undefined : "true"}
            onClick={() => move(1)}
          >
            ›
          </button>
        </div>
      </div>
      <div
        ref={ref}
        id={id}
        className={`${className} ${edges.start ? styles.pickerFadeStart : ""} ${edges.end ? styles.pickerFadeEnd : ""}`}
        onScroll={measure}
        // A chip reached by Tab can sit under a fade with only a sliver
        // showing: the browser scrolls a focused element only when it is
        // wholly hidden. Bring it clear, as ScrollRail does (A-02).
        onFocus={(e) => {
          const rail: HTMLElement = e.currentTarget;
          let item: HTMLElement | null = e.target instanceof HTMLElement ? e.target : null;
          while (item && item.parentElement !== rail) item = item.parentElement;
          const keyboard = (() => {
            try {
              return (e.target as Element).matches(":focus-visible");
            } catch {
              return true;
            }
          })();
          if (item && keyboard) bringIntoRail(rail, item, railBehavior());
        }}
      >
        {children}
      </div>
    </>
  );
}
