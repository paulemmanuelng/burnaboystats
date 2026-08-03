"use client"; // dispatches the open event

import styles from "./mobileMenuButton.module.css";

/**
 * The hamburger that opens the mobile nav sheet.
 *
 * It sits in the header of all 26 mobile screens except 27 Search, where the
 * search field IS the navigation. Before this it existed on screen 01 only,
 * which left the sheet unreachable from 25 screens.
 *
 * It dispatches an event rather than reading a context: most of the screens
 * that render it are server components, and a context consumer would force
 * every one of them client-side for the sake of one button.
 */
export default function MobileMenuButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      data-mobile-menu-button=""
      className={`${styles.btn} ${className ?? ""}`}
      aria-label="Open menu"
      aria-haspopup="dialog"
      // Carries the button itself, so the sheet can hand focus back to THIS
      // one on close. A bare querySelector would find the desktop nav's
      // toggle, which is display:none on every screen with its own back bar —
      // and focusing a hidden element silently does nothing.
      onClick={(e) =>
        window.dispatchEvent(
          new CustomEvent("mobile-nav-open", { detail: e.currentTarget })
        )
      }
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  );
}
