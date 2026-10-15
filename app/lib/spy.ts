"use client"; // reads the page's layout on scroll

import { useEffect, useState, type RefObject } from "react";

/**
 * Which entry of an index is the current one (Job 4 · J4-6): the shared rule
 * behind JumpSpy and the docks (DockIndex, IndexBar, the /updates strip).
 *
 * The current entry is the one whose target top has most recently passed
 * `offset` — the greatest top at or above the line — not the last entry in
 * list order that has passed it. In a list that runs down the page the two
 * agree. They part where the page has a second column: /methodology's
 * sources sit in a right-hand column level with "accessibility", fourth in
 * the list after two sections that run lower; by list order "sources" was
 * current all the way down those two. Two targets at the same top: the later
 * entry. Nothing passed yet: the first.
 */
export function pickCurrent(tops: number[], offset: number): number {
  let best = -1;
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] - offset > 1) continue;
    if (best < 0 || tops[i] >= tops[best]) best = i;
  }
  return best < 0 ? 0 : best;
}

/**
 * pickCurrent on the live page. At its foot the last targets can never
 * scroll up to the offset, so there the lowest target on screen counts.
 */
export function currentIndex(targets: HTMLElement[], offset: number): number {
  const tops = targets.map((t) => t.getBoundingClientRect().top);
  const doc = document.documentElement;
  if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
    const onScreen = tops.map((t, i) => [t, i] as const).filter(([t]) => t < window.innerHeight);
    if (onScreen.length) return onScreen[pickCurrent(onScreen.map(([t]) => t), Infinity)][1];
  }
  return pickCurrent(tops, offset);
}

/**
 * The index of the current id in `ids`, kept as the page scrolls (scroll and
 * resize, one read per frame). While `root` is not laid out (the other
 * layout's copy, display: none) it does not read the page.
 */
export function useSpy(ids: string[], offset: number, root?: RefObject<HTMLElement | null>): number {
  const [index, setIndex] = useState(0);
  const key = ids.join("\n");

  useEffect(() => {
    const list = key ? key.split("\n") : [];
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = root?.current;
      if (el && el.offsetParent === null && getComputedStyle(el).position !== "fixed") return;
      const pairs = list.map((id, i) => [document.getElementById(id), i] as const).filter((p): p is readonly [HTMLElement, number] => !!p[0]);
      if (pairs.length === 0) return;
      const at = currentIndex(pairs.map(([t]) => t), offset);
      setIndex(pairs[at][1]);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [key, offset, root]);

  return index;
}
