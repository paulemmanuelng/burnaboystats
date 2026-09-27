"use client"; // the counter follows the reader's scroll

import { useEffect, useRef, useState } from "react";
import styles from "./DaiDaiStory.module.css";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/** How far below the viewport the observers' boxes run: past the foot of any
 *  page this bar sits on, in viewport heights. */
const BELOW = "10000%";

/**
 * Screen 25's back bar, as redesigned on 26 Sep 2026: back, "DAI DAI", the
 * chapter counter and the menu. Phone only — the desktop layout keeps the site
 * nav, and the bar is display:none above 900px.
 *
 * The counter used to follow a thin band at the viewport's centre, which
 * turned a chapter "active" while its title was still hidden behind the pinned
 * figure, and it read 07 / 07 from the last chapter to the foot of the page.
 * Now (design response §3):
 *   - a chapter is active once its KICKER has crossed the bar's bottom edge
 *     plus 24px — a line the reader can see;
 *   - it reads 01 / 07 until the first chapter gets there;
 *   - it clears to nothing once the "End of the story" marker has passed under
 *     the bar, so it never claims a chapter the reader has left.
 *
 * The chapters and the marker are found by data attributes the story renders
 * (data-dd-kicker, data-dd-story-end), so the story itself stays a server
 * component.
 *
 * It follows the scroll without a scroll handler (27 Sep 2026). The first
 * version measured nine elements and ran two page-wide lookups on every
 * scroll frame — a quarter of the page's main-thread time while scrolling on a
 * throttled phone, and iPhone Safari draws the next strip of page only when
 * that thread is free. IntersectionObservers now report the crossings.
 */
export default function DaiDaiBackBar({
  total,
  back,
  menu,
}: {
  total: number;
  /** Accessible names, in the edition's language. */
  back: string;
  menu: string;
}) {
  const bar = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(0);

  useEffect(() => {
    const phone = window.matchMedia("(max-width: 900px)");
    let size: ResizeObserver | null = null;
    let kickers: IntersectionObserver | null = null;
    let story: IntersectionObserver | null = null;
    let line = -1;

    const stop = () => {
      kickers?.disconnect();
      story?.disconnect();
      kickers = story = null;
    };

    // Two observers stand in for a scroll handler: the browser reports only
    // when a kicker's top or the end marker's bottom crosses its line, so a
    // phone's scroll runs no script for the counter at all. Each observer's
    // box starts at its line and runs far below the page (so a fling can never
    // carry a kicker from below the fold to above the line unseen — the
    // crossing is always a change in how much of it is inside); which side of
    // the line an element is on is read from the entry itself, never measured.
    const watch = () => {
      stop();
      const ks = [...document.querySelectorAll("[data-dd-kicker]")];
      const end = document.querySelector("[data-dd-story-end]");
      const past = ks.map(() => false);
      let ended = false;
      const show = () => {
        if (ended) return setActive(null);
        let current = 0;
        past.forEach((p, i) => {
          if (p) current = i;
        });
        setActive(current);
      };
      kickers = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            const i = ks.indexOf(e.target);
            if (i >= 0 && e.rootBounds) past[i] = e.boundingClientRect.top <= e.rootBounds.top;
          }
          show();
        },
        { rootMargin: `${-(line + 24)}px 0px ${BELOW} 0px`, threshold: 1 },
      );
      ks.forEach((k) => kickers!.observe(k));
      if (end) {
        story = new IntersectionObserver(
          ([e]) => {
            if (e.rootBounds) ended = e.boundingClientRect.bottom <= e.rootBounds.top;
            show();
          },
          { rootMargin: `${-line}px 0px ${BELOW} 0px`, threshold: 0 },
        );
        story.observe(end);
      }
    };

    const attach = () => {
      size?.disconnect();
      size = null;
      stop();
      const el = bar.current;
      if (!el || !phone.matches) return;
      // The line is the bar's bottom edge. The bar is fixed at the top, so it
      // moves only if the bar's own height does (a rotation, the notch's
      // inset); its ResizeObserver reports after layout, when reading the edge
      // costs nothing.
      size = new ResizeObserver(() => {
        const bottom = Math.round(el.getBoundingClientRect().bottom);
        if (bottom === line) return;
        line = bottom;
        watch();
      });
      size.observe(el);
    };

    attach();
    phone.addEventListener("change", attach);
    return () => {
      phone.removeEventListener("change", attach);
      size?.disconnect();
      stop();
    };
  }, []);

  return (
    <div ref={bar} className={styles.backBar}>
      <BackLink href="/" aria-label={back} className={styles.backBtn}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </BackLink>
      <span className={styles.backLabel}>Dai Dai</span>
      <span className={styles.backStep}>
        {active == null ? "" : `${String(active + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`}
      </span>
      <MobileMenuButton className={styles.menuBtn} label={menu} />
    </div>
  );
}
