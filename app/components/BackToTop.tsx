"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./BackToTop.module.css";
import { hasOwnMobileChrome } from "../lib/mobileScreens";

// A small floating "back to top" control that fades in once the reader is deep
// into a long page (charts, certifications, tours…) and is hidden otherwise.
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Screens with their own mobile action bar park a control in this exact
  // corner. This button sits at z-index 45 against the bar's 40, so it was
  // covering that control outright — hide it on those routes at mobile widths.
  const ownChrome = hasOwnMobileChrome(pathname);

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`${styles.btn} ${show ? styles.show : ""} ${ownChrome ? styles.desktopOnly : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
