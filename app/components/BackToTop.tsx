"use client";

import { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

// A small floating "back to top" control that fades in once the reader is deep
// into a long page (charts, certifications, tours…) and is hidden otherwise.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    // The button is display:none below 1440px (BackToTop.module.css), so it
    // listens only where it shows: a phone's or a narrow window's scroll runs
    // no handler for it.
    const hidden = window.matchMedia("(max-width: 1439px)");
    const attach = () => {
      window.removeEventListener("scroll", onScroll);
      if (hidden.matches) return;
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    };
    attach();
    hidden.addEventListener("change", attach);
    return () => {
      hidden.removeEventListener("change", attach);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Wide desktop only (1440px and up). Every mobile screen carries a fixed
  // bottom bar — the tab bar, or Certifications' action bar — and this button
  // is positioned in the same corner at a higher z-index, so it lands on top of
  // whichever is there; the mobile design has no back-to-top control at all.
  // Between 901 and 1439px the content column runs to within 24-40px of the
  // edge, so the 46px button sat on its right-hand figures.
  return (
    <button
      type="button"
      aria-label="Back to top"
      lang="en"
      className={`${styles.btn} ${show ? styles.show : ""} ${styles.desktopOnly}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
