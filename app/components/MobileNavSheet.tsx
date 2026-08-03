"use client"; // the sheet's open state, focus handling and Esc

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./mobileNavSheet.module.css";
import { useFocusTrap } from "../lib/useFocusTrap";
import type { NavGroup } from "../lib/navGroups";

/**
 * The mobile navigation sheet — the hamburger's open state.
 *
 * From designs/desktop/App States.dc.html, panel G. The tab bar reaches five
 * routes and this sheet lists 22, so it is the ONLY way into 17 pages: primary
 * navigation, not a convenience. What it replaced was a partial dropdown that
 * let the page show through and left the tab bar visible underneath it.
 *
 * The sheet covers the viewport except the bottom 76px. That strip is not
 * decoration: it shows a dimmed slice of the page so the sheet reads as pushed
 * back, and it is the dismiss target a thumb can actually reach — the close
 * button sits at the top of an 812px screen.
 *
 * Opened by MobileMenuButton, which dispatches `mobile-nav-open`. An event
 * rather than context because the buttons live inside screens that are server
 * components, and a context consumer would force each of them client-side.
 */

const OPEN_EVENT = "mobile-nav-open";

export default function MobileNavSheet({
  groups,
  updated,
  searchHint,
}: {
  groups: NavGroup[];
  /** Date the data was last verified, for the footer's status line. */
  updated: string;
  /** Placeholder for the search row, e.g. "221 certs, 260 entries". */
  searchHint: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  // The button that opened us, so focus can return to it rather than to the
  // first match in the document — which is the desktop nav's hidden toggle.
  const openerRef = useRef<HTMLElement | null>(null);

  // aria-modal promises the page behind is inert; this makes the keyboard
  // honour that promise — without it, Tab walked out of the open sheet.
  useFocusTrap(sheetRef, open);

  useEffect(() => {
    const onOpen = (e: Event) => {
      openerRef.current = (e as CustomEvent<HTMLElement>).detail ?? null;
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    // The tab bar hides while the sheet is open. Two navigation systems on one
    // screen is precisely the defect this replaced.
    document.body.classList.add("navSheetOpen");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    // Focus the close button, so the first Tab lands inside the sheet rather
    // than on the page behind it.
    closeRef.current?.focus();

    return () => {
      document.body.classList.remove("navSheetOpen");
      window.removeEventListener("keydown", onKey);
      // Hand focus back to whatever opened us.
      openerRef.current?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div ref={sheetRef} className={styles.root} role="dialog" aria-modal="true" aria-label="Site menu">
      {/* The visible strip at the foot is part of this backdrop, which is why
          the backdrop covers the whole viewport rather than stopping at 76px. */}
      <button
        type="button"
        className={styles.backdrop}
        onClick={() => setOpen(false)}
        tabIndex={-1}
        aria-hidden="true"
      >
        <span className={styles.dismissHint}>tap to dismiss</span>
      </button>

      <div className={styles.sheet}>
        <div className={styles.head}>
          <span className={styles.brand}>
            BurnaBoy<span className={styles.brandGold}>Stats</span>
          </span>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Search sits above the list: faster than scanning 22 rows, and the
            primary way into the dataset. */}
        <Link href="/search" className={styles.search} onClick={() => setOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span className={styles.searchText}>Search {searchHint}…</span>
        </Link>

        <div className={styles.list}>
          {groups.map((g) => (
            <div key={g.name} className={styles.group}>
              <div className={styles.groupName}>{g.name}</div>
              {g.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${styles.row} ${active ? styles.rowActive : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {/* The active marker is a rule plus a tinted row, not gold
                        text alone — colour on its own fails anyone who cannot
                        distinguish it. */}
                    <span className={styles.rule} aria-hidden="true" />
                    <span className={styles.label}>{item.label}</span>
                    {item.meta && <span className={styles.meta}>{item.meta}</span>}
                  </Link>
                );
              })}
            </div>
          ))}
          <div className={styles.listEnd} />
        </div>

        <div className={styles.foot}>
          <span className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Updated {updated}
          </span>
          <Link href="/share" className={styles.statCard} onClick={() => setOpen(false)}>
            Stat card ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
