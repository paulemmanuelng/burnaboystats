"use client";

import { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

// Scroll to the top AND take keyboard focus there. Scrolling alone left the
// sequential-focus point on this button, after <main> and before the footer,
// and the button hides at the top (visibility:hidden), so focus fell to <body>
// and the next Tab focused the footer's first link, scrolling the page all the
// way back down. Focus goes to <main id="content">, the skip link's target, so
// Tab continues from the start of the content (Shift+Tab reaches the nav). A
// <main> is not focusable, so it takes tabindex="-1" only while it holds focus;
// preventScroll keeps the smooth scroll; globals.css draws no ring round it.
// A reader who asked for reduced motion gets an instant jump: an explicit
// behavior outranks html's scroll-behavior, so the global reduced-motion
// switch (scroll-behavior: auto) could not stop a "smooth" passed here.
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
  const main = document.getElementById("content");
  if (!main) return;
  if (!main.hasAttribute("tabindex")) {
    main.setAttribute("tabindex", "-1");
    main.addEventListener("blur", () => main.removeAttribute("tabindex"), { once: true });
  }
  main.focus({ preventScroll: true });
}

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
      onClick={backToTop}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
