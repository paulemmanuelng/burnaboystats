"use client"; // counts a lead figure up as it scrolls into view

import { useEffect, useRef } from "react";

/**
 * One of the record's six lead figures, with the design's arrival motion
 * (design-response-dai-dai-redesign.md §3, "Count-ups"):
 *   - a whole number counts up from 0 over 600ms on the site's ease-out, once
 *     the figure is half in view;
 *   - a live figure never counts — it fades in;
 *   - anything else ("No. 1", a date) simply sits there.
 *
 * The HTML always holds the final value, and so does every render React makes:
 * the motion is written straight to the text node and ends on the same text.
 * It only ever runs for a figure that starts OUT of view — one already on
 * screen when the page wakes up is left alone, so a reader (or a crawler with
 * a tall viewport) never sees a figure they have read jump back to 0 — and
 * under reduced motion, or without IntersectionObserver, nothing runs at all.
 * The check is made in JavaScript: the global prefers-reduced-motion rule in
 * globals.css stops CSS transitions, not a script's own frames.
 */
export default function DaiDaiCountUp({ value, live = false }: { value: string; live?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    // The text node React rendered. Writing its nodeValue keeps React's own
    // node in place; a textContent write would swap it for a stranger.
    const text = el?.firstChild;
    if (!el || !(text instanceof Text) || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const target = /^\d+$/.test(value) ? Number(value) : null;
    if (!live && target == null) return;

    let armed = false;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!armed) {
          // The first report says where the figure was when the page woke up.
          if (entry.isIntersecting) {
            io.disconnect();
            return;
          }
          armed = true;
          if (live) el.style.opacity = "0";
          else text.nodeValue = "0";
          return;
        }
        if (entry.intersectionRatio < 0.5) return;
        io.disconnect();
        if (live) {
          el.style.transition = "opacity 0.3s var(--ease-out)";
          el.style.opacity = "1";
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 600);
          // The site's --ease-out, cubic-bezier(0.22, 1, 0.36, 1), is close to
          // an ease-out-quart; a count needs a curve it can evaluate itself.
          const eased = 1 - Math.pow(1 - p, 4);
          text.nodeValue = p < 1 ? String(Math.round(target! * eased)) : value;
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: [0, 0.5] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      text.nodeValue = value;
      el.style.opacity = "";
      el.style.transition = "";
    };
  }, [value, live]);

  return <span ref={ref}>{value}</span>;
}
