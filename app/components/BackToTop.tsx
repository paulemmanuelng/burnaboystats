"use client";

import { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

// A small floating "back to top" control that fades in once the reader is deep
// into a long page (charts, certifications, tours…) and is hidden otherwise.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Desktop only. Every mobile screen carries a fixed bottom bar — the tab bar,
  // or Certifications' action bar — and this button is positioned in the same
  // corner at a higher z-index, so it lands on top of whichever is there. The
  // mobile design has no back-to-top control at all.
  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`${styles.btn} ${show ? styles.show : ""} ${styles.desktopOnly}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
