"use client"; // a hook — measures an element in the browser

import { useEffect, useRef, useState, type RefObject } from "react";

/** A measured CSS box, in CSS pixels. */
export interface PxBox {
  w: number;
  h: number;
}

/**
 * The CSS content box of an element, kept current by a ResizeObserver
 * (site review 8 Oct 2026, Job 5 · J5-1).
 *
 * A phone chart draws with `viewBox="0 0 {w} {h}"` from this box, so one
 * viewBox unit is one CSS pixel at every width and its text is set in CSS
 * px, never scaled down with the drawing. Before the first measure (the
 * server render, and a browser with no ResizeObserver) the box is `initial`.
 */
export function usePxBox<T extends Element>(initial: PxBox): [RefObject<T | null>, PxBox] {
  const ref = useRef<T>(null);
  const [box, setBox] = useState<PxBox>(initial);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    // A ResizeObserver reports once as it starts observing, so this is also
    // the first measure.
    const ro = new ResizeObserver((entries) => {
      const r = entries[0]?.contentRect ?? el.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
      if (!(w > 0 && h > 0)) return;
      setBox((b) => (b.w === w && b.h === h ? b : { w, h }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return [ref, box];
}
