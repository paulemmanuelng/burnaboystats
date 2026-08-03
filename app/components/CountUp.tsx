"use client"; // runs in the browser (it animates a number over time)

import { useEffect, useRef, useState } from "react";

// Animates a number counting up to "end" when it scrolls into view.
// Renders the FINAL value on the server / before JS, so no-JS users and
// crawlers see the real number (not 0), then animates as an enhancement.
export default function CountUp({
  end,
  // 1.1s, eased — the handoff's figure. Long enough to read as a count,
  // short enough that the number is legible almost immediately.
  duration = 1100,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: leave the final number in place, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let safety = 0;

    // Anything already on screen when the page loads keeps its rendered value.
    // Without this the hero counters painted the real figure, then hydration
    // knocked them back to 0 and counted up again — the headline numbers
    // visibly jumping backwards in the first second, which reads as broken.
    // Only figures the reader scrolls down to get the animation.
    const atLoad = performance.now();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (performance.now() - atLoad < 250) return; // above the fold: leave it be
          setValue(0);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out
            setValue(Math.round(end * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);

          // These are the site's headline credibility numbers, so the animation
          // must never be able to strand one at a partial value. A pending rAF
          // callback is normally just deferred while a tab is hidden, but it can
          // be dropped outright (bfcache, long-backgrounded tabs) — and since
          // `started` blocks a restart, the figure would read "7" instead of
          // "251" forever. This guarantees it lands on the real number.
          safety = window.setTimeout(() => setValue(end), duration + 400);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(safety);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
