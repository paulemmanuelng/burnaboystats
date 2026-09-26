"use client"; // needs the current route to mark the active tab

import Link from "next/link";
import BrandMark from "./BrandMark";
import { usePathname } from "next/navigation";
import { hasOwnActionBar } from "../lib/mobileScreens";
import { SPANISH_PATH } from "../lib/documentLang";
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
 *
 * HOME IS THE EXCEPTION. LOGO.md: "below 24px of height the wordmark drops and
 * the crown stands alone — the tab bar's Home icon". So Home carries the mark
 * rather than a glyph, which is why it is the one tab whose icon is an SVG.
 *
 * That created a conflict worth recording. Every other tab's glyph INHERITS
 * `color`: --text-muted when inactive, --gold when active. The mark cannot do
 * that — LOGO.md forbids recolouring it, and the dot is "the only green, always
 * present". Tinting it to match the muted state would break the logo; leaving
 * it full-strength would make Home the only tab that never looks inactive.
 *
 * Resolved with opacity instead of hue: the mark keeps its exact colours at
 * every state and dims when the tab is not current, so it still reads as
 * inactive beside its four neighbours without a single pixel being recoloured.
 */
const TABS = [
  // `mark: true` renders the crown instead of a glyph — see the note above.
  { icon: "◆", label: "Home", es: "Inicio", href: "/", mark: true },
  { icon: "♪", label: "Music", es: "Música", href: "/music" },
  { icon: "★", label: "Certs", es: "Certs", href: "/certifications" },
  { icon: "▲", label: "Charts", es: "Listas", href: "/live-charts" },
  { icon: "⌗", label: "Records", es: "Récords", href: "/records" },
] as const;

/**
 * The words on the site's one Spanish route, /dai-dai/es.
 *
 * The Dai Dai redesign Paul approved on 26 Sep 2026 draws the phone's tabs in
 * Spanish on that edition (change-list item 13: "the phone top bar and tabs
 * translated"). The labels are the artboard's own (tabsEs in "Dai Dai
 * Redesign.dc.html": Inicio, Música, Certs, Listas, Récords); the glyphs and
 * the hrefs stay the site's, since the sections they open are English.
 *
 * The bar sits in the root layout, outside the page's <main lang="es">, so it
 * carries its own lang for a reader whose document language was never
 * corrected (no JavaScript — see lib/documentLang.ts).
 */
const BAR_LABEL = { en: "Tab bar", es: "Barra de pestañas" } as const;

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

  // Its own name, not "Primary": the top nav is also on screen at phone width
  // on most pages, and two landmarks both called "Primary navigation" leave a
  // screen-reader user unable to tell which one they are in.
  const es = SPANISH_PATH.test(pathname);

  return (
    <nav
      className={`${styles.bar} mobileTabBarPresent`}
      aria-label={es ? BAR_LABEL.es : BAR_LABEL.en}
      lang={es ? "es" : undefined}
    >
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
            {"mark" in t && t.mark ? (
              <span className={styles.markIcon} aria-hidden="true">
                <BrandMark size={16} id="tab" />
              </span>
            ) : (
              <span className={styles.icon} aria-hidden="true">{t.icon}</span>
            )}
            <span className={styles.label}>{es ? t.es : t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
