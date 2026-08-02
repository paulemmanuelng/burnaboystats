"use client"; // needs the current route to mark the active tab

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./mobileTabBar.module.css";

/**
 * The fixed bottom tab bar, on the mobile home screen.
 *
 * This is the spine of the mobile design and the piece the desktop layout has
 * no equivalent for: a phone user never opens the hamburger, they thumb between
 * the five places worth going. Hidden entirely above the mobile breakpoint,
 * where the sticky top nav already does this job.
 *
 * Glyphs are the design's, set in Anton at 15px — a typeface, not an icon font,
 * which is why they sit on a shared baseline with the labels rather than
 * needing optical alignment.
 */
const TABS = [
  { icon: "◆", label: "Home", href: "/" },
  { icon: "♪", label: "Music", href: "/music" },
  { icon: "★", label: "Certs", href: "/certifications" },
  { icon: "▲", label: "Charts", href: "/live-charts" },
  { icon: "⌗", label: "Records", href: "/records" },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  // Home only. Every deep screen in the design replaces this with its own
  // action bar ("Make a stat card", a filter toggle), so the two fixed bars
  // can never stack on top of each other.
  if (pathname !== "/") return null;

  return (
    <nav className={`${styles.bar} mobileTabBarPresent`} aria-label="Primary">
      {TABS.map((t) => {
        // "/" only matches exactly; the rest match their whole section, so a
        // song page still shows Music as the active tab.
        const active = t.href === "/" ? pathname === "/" : pathname.startsWith(t.href);
        return (
          <Link
            key={t.href}
            href={t.href}
            className={`${styles.tab} ${active ? styles.tabOn : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <span className={styles.icon} aria-hidden="true">{t.icon}</span>
            <span className={styles.label}>{t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
