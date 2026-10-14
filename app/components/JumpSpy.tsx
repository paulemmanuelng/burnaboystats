"use client"; // marks the jump link for the place on screen

import { useEffect, useRef } from "react";
import { bringIntoRail } from "./ScrollRail";
import { currentIndex } from "../lib/spy";

/**
 * A jump list that knows where the reader is: the desktop "Jump to" index on
 * Highest-Grossing Artists by Country, and the phone's continent rail (Claude
 * Design round 1, 4 Oct 2026, item 3 — GXCountriesDesk / GXCountriesPhone).
 *
 * The links are ordinary server-rendered `<a href="#…">` children, so they
 * work before hydration and without JS; this only sets `aria-current` on the
 * link whose target is the last one scrolled past `offset`, which the CSS
 * draws as the ember edge (desktop) or the ember on-state (phone). On a rail
 * that scrolls sideways it also brings the current link into view.
 *
 * It takes no data — nothing here imports the board's rows
 * (tests/tourRevenueServerOnly.test.ts).
 *
 * The current link is lib/spy's pickCurrent: the target that most recently
 * passed `offset`, so a target in a second column cannot jump the queue (Job 4
 * · J4-6). The docks build on it: `onCurrent` hands the current link's index
 * to the desktop index bar's "{k} of {N}", and `dataDock` names the dock for
 * globals.css's anchor clearance.
 */
export default function JumpSpy({
  as: Tag = "div",
  className,
  label,
  offset,
  selector = 'a[href^="#"]',
  onCurrent,
  dataDock,
  children,
}: {
  as?: "nav" | "div";
  className?: string;
  label: string;
  /** How far below the top of the viewport a target counts as reached (px). */
  offset: number;
  /** Which links take part (default: every in-page link). */
  selector?: string;
  /** Told the current link's index among the links, each time it changes. */
  onCurrent?: (index: number) => void;
  /** Rendered as data-dock, which globals.css keys its anchor clearance on. */
  dataDock?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const told = useRef(onCurrent);
  useEffect(() => {
    told.current = onCurrent;
  });

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const links = [...root.querySelectorAll<HTMLAnchorElement>(selector)];
    const pairs = links
      .map((a) => ({ a, t: document.getElementById(decodeURIComponent(a.hash.slice(1))) }))
      .filter((p): p is { a: HTMLAnchorElement; t: HTMLElement } => !!p.t);
    if (pairs.length === 0) return;

    let current: HTMLAnchorElement | null = null;
    let frame = 0;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");

    const update = () => {
      frame = 0;
      // A hidden layout (the desktop index on a phone, the rail on desktop)
      // has no box: leave it alone.
      if (root.offsetParent === null && getComputedStyle(root).position !== "fixed") return;
      // At the foot of the page the last places (Africa, South America) can
      // never scroll up to the offset: there, the lowest one on screen counts.
      const next = pairs[currentIndex(pairs.map((p) => p.t), offset)].a;
      if (next === current) return;
      current?.removeAttribute("aria-current");
      next.setAttribute("aria-current", "location");
      current = next;
      told.current?.(links.indexOf(next));
      // Keep the current chip in view on a rail that scrolls sideways — clear
      // of the rail's edge fades, not merely inside its box (A-08, 4 Oct 2026:
      // Asia at 312–373 in a 390 rail sat under the end fade, never scrolled).
      // "instant" under reduced motion: the rail's scroll-behavior: smooth
      // would animate "auto".
      const rail = next.closest<HTMLElement>("[data-jump-rail], [role=\"group\"]");
      if (rail && root.contains(rail)) bringIntoRail(rail, next, reduce?.matches ? "instant" : "smooth");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      // The next run starts from no current link: one it set and left would
      // stay marked beside the new one (two current chips on a re-run).
      current?.removeAttribute("aria-current");
    };
  }, [offset, selector]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className} aria-label={label} data-dock={dataDock}>
      {children}
    </Tag>
  );
}
