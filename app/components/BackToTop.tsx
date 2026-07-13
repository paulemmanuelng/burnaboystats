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

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`${styles.btn} ${show ? styles.show : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
