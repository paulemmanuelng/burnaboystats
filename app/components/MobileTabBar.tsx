"use client"; // needs the current route to mark the active tab

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hasOwnActionBar } from "../lib/mobileScreens";
import styles from "./mobileTabBar.module.css";

/**
 * The fixed bottom tab bar, on every mobile screen but Certifications.
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
] as const;

/**
 * Routes that belong to a tab but do not sit under its href.
 *
 * A tab lights when the path starts with its own href, which covers every
 * top-level section. The board breaks that: a chart board lives at
 * /afrobeats/{artist}/charts and a live board at /afrobeats/{artist}/live, so
 * both are charts pages that begin with neither /live-charts nor /records. The
 * bar lit nothing at all on eighteen routes.
 */
const ALSO: Record<string, RegExp> = {
  "/live-charts": /^\/(records\/charts|afrobeats\/[^/]+\/(charts|live))$/,
  "/certifications": /^\/afrobeats\/[^/]+$/,
};

export default function MobileTabBar() {
  const pathname = usePathname();

  // The bottom of the nine top-level screens, home included. Deep screens are
  // reached by a back button rather than lateral nav, so they carry a page
  // action bar or nothing at all — either way this must not stack on top.
  if (hasOwnActionBar(pathname)) return null;

  return (
    <nav className={`${styles.bar} mobileTabBarPresent`} aria-label="Primary">
      {TABS.map((t) => {
        // "/" only matches exactly; the rest match their whole section, so a
        // song page still shows Music as the active tab.
        const active =
          t.href === "/"
            ? pathname === "/"
            : pathname.startsWith(t.href) || (ALSO[t.href]?.test(pathname) ?? false);
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
