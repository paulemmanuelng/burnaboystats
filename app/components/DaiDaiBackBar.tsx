"use client"; // the counter follows the reader's scroll

import { useEffect, useRef, useState } from "react";
import styles from "./DaiDaiStory.module.css";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

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
    let frame = 0;

    const measure = () => {
      frame = 0;
      const el = bar.current;
      if (!el) return;
      const line = el.getBoundingClientRect().bottom;
      const end = document.querySelector("[data-dd-story-end]");
      if (end && end.getBoundingClientRect().bottom <= line) {
        setActive(null);
        return;
      }
      let current = 0;
      document.querySelectorAll("[data-dd-kicker]").forEach((k, i) => {
        if (k.getBoundingClientRect().top <= line + 24) current = i;
      });
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const attach = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (!phone.matches) return;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
      schedule();
    };

    attach();
    phone.addEventListener("change", attach);
    return () => {
      phone.removeEventListener("change", attach);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
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
