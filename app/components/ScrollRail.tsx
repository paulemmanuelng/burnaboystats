"use client"; // tracks scroll position to show the edge cues

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./scrollRail.module.css";

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
}: {
  className: string;
  children: React.ReactNode;
  label?: string;
  /** Anchor target — for the action-bar buttons that scroll back to a rail. */
  id?: string;
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
      className={`${className} ${styles.rail} ${edges.start ? styles.fadeStart : ""} ${
        edges.end ? styles.fadeEnd : ""
      }`}
      onScroll={measure}
      // A scrollable region needs to be reachable and announced; without this
      // a keyboard user cannot scroll it at all.
      tabIndex={0}
      role="group"
      aria-label={label}
    >
      {children}
    </div>
  );
}
