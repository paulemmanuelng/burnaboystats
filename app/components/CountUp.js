"use client"; // runs in the browser (it animates a number over time)

import { useEffect, useRef, useState } from "react";

// Animates a number counting up to "end" when it scrolls into view.
// Renders the FINAL value on the server / before JS, so no-JS users and
// crawlers see the real number (not 0), then animates as an enhancement.
export default function CountUp({ end, duration = 1600, prefix = "", suffix = "" }) {
  const [value, setValue] = useState(end);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: leave the final number in place, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setValue(0);
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out
            setValue(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
