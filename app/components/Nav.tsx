"use client"; // interactive: toggles the mobile menu + marks the active page

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePagePath } from "../lib/pagePath";
import { navItems } from "../lib/links";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import SearchPalette from "./SearchPalette";
import type { SuggestedDoc } from "../lib/searchSuggested";
import { hasOwnMobileChrome } from "../lib/mobileScreens";

/** `suggested`: the search palette's "Popular pages", built on the server
 *  (lib/searchSuggested.ts) so the search index stays out of this bundle. */
export default function Nav({ suggested }: { suggested: readonly SuggestedDoc[] }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePagePath();

  // Screens with their own mobile chrome carry a back bar instead of this nav.
  // The class only hides it below the mobile breakpoint — desktop is unchanged.
  const ownChrome = hasOwnMobileChrome(pathname);

  // Give the nav a solid, blurred backdrop once the user scrolls off the hero,
  // so links stay legible over album art and section titles below. Where the
  // bar is display:none (a screen with its own chrome, at phone width) it does
  // not listen, so a phone's scroll runs no handler for a bar it cannot see.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const hidden = ownChrome ? window.matchMedia("(max-width: 900px)") : null;
    const attach = () => {
      window.removeEventListener("scroll", onScroll);
      if (hidden?.matches) return;
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    };
    attach();
    hidden?.addEventListener("change", attach);
    return () => {
      hidden?.removeEventListener("change", attach);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ownChrome]);

  return (
    <header
      lang="en"
      className={`navbar${scrolled ? " navScrolled" : ""}${ownChrome ? " navDesktopOnly" : ""}`}
    >
      <nav className="navInner container" aria-label="Primary">
        <Link href="/" className="brand">
          {/* Mark before the wordmark, 22px in the 68px bar, per LOGO.md. The
              text stays live — it already matches the wordmark's own rendering,
              and it is what a screen reader announces. */}
          <BrandMark size={22} id="nav" />
          <span className="brandText">
            BurnaBoy<span>Stats</span>
          </span>
        </Link>

        <div className="navRight">
          {/* The section links come first in the source because they come
              first on screen, right after the wordmark: Tab then runs
              wordmark → sections → theme → search → Box office, left to right.
              They used to sit last here and were moved up with CSS `order`,
              so focus jumped to the far-right controls and back. Below 1240
              they are display:none and the hamburger's sheet carries them. */}
          <ul id="primary-menu" className="navLinks">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={active ? "navActive" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Appearance, phone only: a single tap that flips dark <-> light,
              sitting in the slack between the wordmark and the search circle.
              It comes FIRST of the controls so it lands in that gap rather
              than crowding the hamburger. */}
          <ThemeToggle variant="mini" />

          {/* Site search — opens a ⌘K command palette */}
          <SearchPalette suggested={suggested} />

          {/* The same setting on desktop, where there is room for all three
              states. The two never show together, and System stays in the
              sheet on both. */}
          <ThemeToggle />

          {/* Box office — the gross page, /records/tours/revenue ("Highest-
              grossing shows"), in the pill that carried "Stat card" until
              7 Oct 2026 (Paul: "in the nav, replace the stats card with gross
              page"). The short label is deliberate: the page's own name is
              ~2.5x wider and the bar has no room for it (see
              themeToggle.module.css). Measured 7 Oct 2026 in headless Chrome:
              this pill is 8px wider than "Stat card" was (139.6 to 131.6) and
              leaves 2px spare at 1240, the tightest width. Stat cards stay one
              tap away in the sheet's list and at /share. Desktop only: the
              mobile screens end at the tab bar and have no room for it beside
              the wordmark; the sheet's foot carries the same link. */}
          <Link
            href="/records/tours/revenue"
            className="btn btnPrimary navBoxOffice"
            aria-current={pathname === "/records/tours/revenue" ? "page" : undefined}
          >
            {/* A ticket, in the same 14px, 2px-stroke drawing as the icon it
                replaced. */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.5a2.5 2.5 0 0 0 0 5V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.5a2.5 2.5 0 0 0 0-5Z" />
              <path d="M15 5v2M15 11v2M15 17v2" />
            </svg>
            Box office
          </Link>

          {/* Hamburger — only visible on mobile (see globals.css).
              It opens the full nav sheet rather than the old inline dropdown:
              that dropdown reached a fraction of the site, let the page show
              through, and left the tab bar visible underneath it. Screens with
              their own chrome carry this same button in their back bar. */}
          <button
            className="navToggle"
            data-mobile-menu-button=""
            aria-label="Open menu"
            aria-haspopup="dialog"
            onClick={(e) => window.dispatchEvent(new CustomEvent("mobile-nav-open", { detail: e.currentTarget }))}
          >
            <span className="navToggleBar" />
            <span className="navToggleBar" />
            <span className="navToggleBar" />
          </button>
        </div>
      </nav>
    </header>
  );
}
