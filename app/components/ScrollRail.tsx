"use client"; // tracks scroll position to show the edge cues

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./scrollRail.module.css";

/** The edge fade's width (scrollRail.module.css: 44px of mask). */
export const RAIL_FADE = 44;
/** How far in from a faded edge an item is brought: the fade plus 8px, so
 *  no part of it sits under the mask (debug 4 Oct 2026, A-01: an 18px pad
 *  left the deep-linked chip's count under the 44px fade). */
export const RAIL_PAD = RAIL_FADE + 8;

/** Smooth, unless the reader asked for reduced motion. */
export const railBehavior = (): ScrollBehavior =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";

/**
 * Scroll `rail` sideways just enough that `item` sits clear of both edge
 * fades — RAIL_PAD in from an edge that still has more beyond it. An edge the
 * rail scrolls flush to has no fade, so the first and last items need no pad.
 *
 * Pass "instant", never "auto", for a jump: `.rail` sets scroll-behavior:
 * smooth, so "auto" animates (B-missed, 4 Oct 2026). Returns where it went.
 */
export function bringIntoRail(rail: HTMLElement, item: HTMLElement, behavior: ScrollBehavior): number {
  const max = rail.scrollWidth - rail.clientWidth;
  if (max <= 0) return rail.scrollLeft;
  const left = item.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft;
  const right = left + item.getBoundingClientRect().width;
  let to = rail.scrollLeft;
  if (left - RAIL_PAD < to) to = left - RAIL_PAD;
  else if (right + RAIL_PAD > to + rail.clientWidth) to = right + RAIL_PAD - rail.clientWidth;
  to = Math.max(0, Math.min(max, Math.round(to)));
  if (to !== Math.round(rail.scrollLeft)) rail.scrollTo?.({ left: to, behavior });
  return to;
}

/** The rail's own child that holds `node` (a chip, a card), or null. */
function itemOf(rail: HTMLElement, node: EventTarget | null): HTMLElement | null {
  let el = node instanceof HTMLElement ? node : null;
  while (el && el.parentElement !== rail) el = el.parentElement;
  return el;
}

/** Focus from the keyboard, not a press: a press already sees its target. */
function keyboardFocus(el: Element): boolean {
  try {
    return el.matches(":focus-visible");
  } catch {
    return true;
  }
}

/**
 * A horizontally scrolling rail with edge fades.
 *
 * The design hides the scrollbar on these rails, which leaves no sign that
 * anything sits past the right edge — the live-charts platform rail is 748px
 * of cards in a 402px viewport, so two of six are off-screen with nothing to
 * say so. The fade appears only on the side that still has content, so it
 * reads as "more this way" rather than as decoration.
 *
 * The caller keeps its own layout class; this only adds the masking.
 */
export default function ScrollRail({
  className,
  children,
  label,
  id,
  role = "group",
  pinnedStart = false,
}: {
  className: string;
  children: React.ReactNode;
  label?: string;
  /** Anchor target — for the action-bar buttons that scroll back to a rail. */
  id?: string;
  /** "region" for a scroll box that is a landmark of its own — a table, not a
   *  rail of chips (the /methodology threshold table). */
  role?: "group" | "region";
  /** The rail's first column is sticky, so nothing leaves past the start edge
   *  unannounced: it slides under the pinned column. A start fade would only
   *  wash out that column's labels, so only the end edge fades. */
  pinnedStart?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: false, end: false });

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ start: el.scrollLeft > 2, end: el.scrollLeft < max - 2 });
  }, []);

  useEffect(() => {
    measure();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <div
      ref={ref}
      id={id}
      className={`${className} ${styles.rail} ${edges.start && !pinnedStart ? styles.fadeStart : ""} ${
        edges.end ? styles.fadeEnd : ""
      }`}
      onScroll={measure}
      // A chip reached by Tab can sit under a fade with only a sliver showing:
      // the browser scrolls a focused element only when it is wholly hidden
      // (A-02, 4 Oct 2026). Bring it clear, as a tapped chip is.
      onFocus={(e) => {
        const rail = e.currentTarget;
        const item = itemOf(rail, e.target);
        if (item && keyboardFocus(e.target as Element)) bringIntoRail(rail, item, railBehavior());
      }}
      // A scrollable region needs to be reachable and announced; without this
      // a keyboard user cannot scroll it at all.
      tabIndex={0}
      role={role}
      aria-label={label}
    >
      {children}
    </div>
  );
}
