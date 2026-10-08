"use client"; // counts a lead figure up as it scrolls into view

import { useEffect, useRef } from "react";
import styles from "./DaiDaiCountUp.module.css";

/**
 * One of the record's six lead figures, with the design's arrival motion
 * (design-response-dai-dai-redesign.md §3, "Count-ups"):
 *   - a whole number counts up from 0 over 600ms on the site's ease-out, once
 *     the figure is half in view;
 *   - a live figure never counts — it fades in;
 *   - anything else ("No. 1", a date) simply sits there.
 *
 * The real figure is in the page at all times. The count is drawn OVER it, by
 * an aria-hidden face, and the real text is only made transparent while that
 * face is showing — so the document, print, reader mode, a translation, a
 * copy and a screen reader all get the figure itself, never a "0". Until 8 Oct
 * 2026 the motion wrote "0" into the text node as soon as it learnt the figure
 * started below the fold, and left it there until the figure was half in view:
 * a phone's full-page screenshot, a printout or a translated page read
 * "0 · 0 · No. 1 · 0" (design review, MU-02).
 *
 * The face shows "0" only once the figure is actually entering the viewport
 * (any part of it on screen), and counts from half in view — so a figure far
 * below the fold is never zeroed, even visually, and a full-page capture taken
 * from the top shows the real values. A figure already on screen when the page
 * wakes up is left alone, so a reader (or a crawler with a tall viewport) never
 * sees a figure they have read jump back to 0. Under reduced motion, or without
 * IntersectionObserver, nothing runs at all: the check is made in JavaScript,
 * because the global prefers-reduced-motion rule in globals.css stops CSS
 * transitions, not a script's own frames. Print shows the real text whatever
 * state the motion is in (DaiDaiCountUp.module.css).
 */
export default function DaiDaiCountUp({ value, live = false }: { value: string; live?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const faceRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const face = faceRef.current;
    if (!el || !face || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const target = /^\d+$/.test(value) ? Number(value) : null;
    if (!live && target == null) return;

    /** Show the face with `text` over the (transparent) real figure. */
    const cover = (text: string) => {
      face.textContent = text;
      el.dataset.counting = "";
    };
    /** Back to the real figure alone. */
    const uncover = () => {
      delete el.dataset.counting;
      face.textContent = "";
    };

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
          // Below the fold: armed, but the real figure stays as it is.
          armed = true;
          return;
        }
        if (!entry.isIntersecting) {
          // Scrolled back out before the count began: the real figure again.
          if (live) el.style.opacity = "";
          else uncover();
          return;
        }
        if (entry.intersectionRatio < 0.5) {
          // Entering: the face stands at 0 (or the live figure waits unseen)
          // for the count that starts at half in view.
          if (live) el.style.opacity = "0";
          else cover("0");
          return;
        }
        io.disconnect();
        if (live) {
          el.style.opacity = "0";
          // Next frame, so the fade starts from 0 even if the figure arrived
          // half in view in one report.
          frame = requestAnimationFrame(() => {
            el.style.transition = "opacity 0.3s var(--ease-out)";
            el.style.opacity = "1";
          });
          return;
        }
        cover("0");
        const start = performance.now();
        const tick = (now: number) => {
          // A frame's timestamp is when the frame began, which can be a few ms
          // BEFORE the performance.now() read in this callback — unclamped, the
          // first tick's p was below 0, the curve below 0 too, and the figure
          // painted "-3" (V-music-08). Held at 0 it paints "0", where it stood.
          const p = Math.min(1, Math.max(0, (now - start) / 600));
          // The site's --ease-out, cubic-bezier(0.22, 1, 0.36, 1), is close to
          // an ease-out-quart; a count needs a curve it can evaluate itself.
          const eased = 1 - Math.pow(1 - p, 4);
          if (p < 1) {
            face.textContent = String(Math.round(target! * eased));
            frame = requestAnimationFrame(tick);
          } else {
            uncover();
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: [0, 0.5] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      uncover();
      el.style.opacity = "";
      el.style.transition = "";
    };
  }, [value, live]);

  return (
    <span ref={ref} className={styles.count}>
      <span className={styles.value}>{value}</span>
      <span ref={faceRef} className={styles.face} aria-hidden="true" />
    </span>
  );
}
