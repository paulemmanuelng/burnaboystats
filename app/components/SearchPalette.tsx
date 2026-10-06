"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { usePagePath } from "../lib/pagePath";
import { noteJump } from "../lib/backNav";
import styles from "./SearchPalette.module.css";
import type { SearchDoc } from "../lib/searchIndex";
import type { SuggestedDoc } from "../lib/searchSuggested";
import { track } from "../lib/analytics";
import { nextActive } from "./searchPaletteActive";

// Site-wide command palette: a search button in the nav that opens a ⌘K / Ctrl+K
// modal to jump to any page. Pure client-side over the static index — no backend.
// When closed and empty it suggests the most-used pages so it's never a blank box.
//
// The index is NOT imported up here. It is 183 KB of JS (19 KB brotli), and a
// static import put it in the first-load bundle of every page on the site,
// ahead of the page's own paint, for a box most visits never open. It loads
// on demand instead (loadIndex below): when the palette opens, when a pointer
// or focus reaches the trigger, and once the page is idle after its load
// event, but only where the trigger is displayed. A phone screen that carries
// its own back bar hides the whole header, so it never downloads the index;
// home on a phone shows the search circle, so it does. The four suggestions
// come from the server as a prop, so "Popular pages" is there the moment the
// palette opens, index or not. /search keeps its static import
// (SearchResults.tsx): that page is the index.
type SearchIndexModule = typeof import("../lib/searchIndex");
let indexPromise: Promise<SearchIndexModule> | null = null;
/** The loaded index, once it has arrived, so a later mount starts with it. */
let indexModule: SearchIndexModule | undefined;
function loadIndex(): Promise<SearchIndexModule> {
  indexPromise ??= import("../lib/searchIndex").then(
    (m) => (indexModule = m),
    (err) => {
      // A failed chunk load (a dropped connection) must not stick: the next
      // open tries again.
      indexPromise = null;
      throw err;
    }
  );
  return indexPromise;
}

/** Today's result list, or null while the index is still on its way and
 *  there is a query to run against it. An empty query shows the suggestions
 *  either way. */
function resultsFor(
  index: SearchIndexModule | undefined,
  query: string,
  suggested: readonly SuggestedDoc[]
): readonly (SearchDoc | SuggestedDoc)[] | null {
  if (!index) return query.trim() ? null : suggested;
  const r = index.searchDocs(query, 8);
  return r.length ? r : query.trim() ? [] : suggested;
}

export default function SearchPalette({ suggested }: { suggested: readonly SuggestedDoc[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Whatever had focus when the palette opened, so closing can hand it back
  // instead of dumping a keyboard user at the top of the document.
  const openerRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  // Undefined until the index has loaded; from the module cache on any mount
  // after that, so a later mount never waits for it.
  const [index, setIndex] = useState(() => indexModule);
  const wantIndex = useCallback(() => {
    loadIndex().then(setIndex, () => {});
  }, []);

  // While the index is loading, a typed query shows neither results nor "No
  // pages match": it is not known yet whether anything matches. The list
  // appears when the index lands.
  const found = useMemo(() => resultsFor(index, query, suggested), [index, query, suggested]);
  const searching = found === null;
  const results = found ?? [];

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  // Any route change closes it. The header lives in the layout, so it stays
  // mounted across navigation: a tap on the phone tab bar under the open
  // palette (5 Oct 2026, V-global-01) took the page to /music with the palette
  // still open — invisible there, because /music hides this header, and
  // holding the scroll lock below until a reload.
  // Done while rendering, React's way to follow a changing value: an effect
  // would paint the stale palette once more first.
  const pathname = usePagePath();
  const [shownOn, setShownOn] = useState(pathname);
  if (pathname !== shownOn) {
    setShownOn(pathname);
    setOpen(false);
    setQuery("");
    setActive(0);
  }

  const go = useCallback(
    (path: string) => {
      track("search_select", { q: query.trim().toLowerCase() || "(suggested)", to: path });
      close();
      // A record on the page you are already on differs only in its fragment
      // (/certifications#release=Gbona from /certifications), and a router push
      // that moves only the fragment fires no hashchange — the address bar
      // changed and the page did not. A plain fragment navigation does fire
      // it, and the explorers listen (lib/deepLink.ts).
      // Noted first (lib/backNav), so that entry keeps the router's state and
      // Back from a page opened after it still lands here (V-otd-01).
      const to = new URL(path, window.location.href);
      if (to.hash && to.pathname === window.location.pathname) {
        noteJump(to.href);
        window.location.assign(to.href);
      } else router.push(path);
    },
    [query, close, router]
  );

  // Every way of opening (the trigger, ⌘K, the hero's open-search event)
  // asks for the index.
  useEffect(() => {
    if (open) wantIndex();
  }, [open, wantIndex]);

  // Warm it once the page has loaded and gone idle, so the first keystroke
  // usually finds it there. Only where the trigger is displayed: a screen with
  // its own back bar hides this header at phone width (.navDesktopOnly), and
  // the palette cannot open there, so it never downloads the index. This is
  // the same displayed test canOpen() makes below; it adds no breakpoint of
  // its own.
  useEffect(() => {
    if (indexModule) return;
    let idle: number | undefined;
    let timer: number | undefined;
    const warm = () => {
      if (triggerRef.current?.getClientRects().length) wantIndex();
    };
    const schedule = () => {
      // Safari has no requestIdleCallback; a timer after load stands in.
      if (typeof window.requestIdleCallback === "function") idle = window.requestIdleCallback(warm, { timeout: 4000 });
      else timer = window.setTimeout(warm, 2000);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      window.removeEventListener("load", schedule);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      window.clearTimeout(timer);
    };
  }, [wantIndex]);

  // Global ⌘K / Ctrl+K to open, Escape to close.
  useEffect(() => {
    // Whether the palette may open now. Two cases where it must not, both
    // seen on the live site (24 Sep 2026):
    //   - its own trigger is not displayed. Screens with their own mobile
    //     chrome hide this whole header (.navDesktopOnly), so the palette
    //     opened inside a display:none parent: invisible, holding the scroll
    //     lock, and taking the keystrokes.
    //   - another modal is open (a tracklist, a stat card, the site menu).
    //     The palette opened UNDER it, took focus from it, and the two scroll
    //     locks then restored each other's saved value, leaving the page
    //     unscrollable after both closed. The menu sheet stays mounted with
    //     `hidden` while closed, hence the visibility test.
    const canOpen = () => {
      if (!triggerRef.current?.getClientRects().length) return false;
      return ![...document.querySelectorAll('[aria-modal="true"]')].some(
        (d) => d !== panelRef.current && d.getClientRects().length > 0
      );
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        // Closed and not allowed to open: leave the keystroke to the page.
        if (!panelRef.current && !canOpen()) return;
        e.preventDefault();
        setOpen((o) => !o);
        // Every way out clears the query, this toggle included, so the next
        // open starts from the suggestions rather than a stale search.
        setQuery("");
        setActive(0);
      } else if (e.key === "Escape") {
        close();
      }
    };
    // The hero's "Search the dataset" button opens the same palette without
    // this component having to be lifted or duplicated.
    const onOpen = () => {
      if (canOpen()) setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-search", onOpen);
    };
  }, [close]);

  // Focus the input and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      // Hand focus back to whatever opened it. Skipped when navigating away —
      // the destination page owns focus at that point.
      const opener = openerRef.current;
      if (opener?.isConnected) opener.focus();
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      // Clamped at row 0, so a press while the index is still loading (no
      // rows yet) leaves the first result highlighted when it lands.
      const key = e.key;
      setActive((i) => nextActive(i, key, results.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const choose = (list: readonly { path: string }[]) => {
        const pick = list[active];
        if (pick) go(pick.path);
        else if (query.trim()) go(`/search?q=${encodeURIComponent(query.trim())}`);
      };
      if (!searching) {
        choose(results);
        return;
      }
      // Enter before the index has landed: wait for it, then choose exactly
      // as above, so the same page opens as it would have with the index
      // already there. Nothing happens if the palette was closed meanwhile.
      loadIndex().then(
        (m) => {
          if (panelRef.current) choose(resultsFor(m, query, suggested) ?? []);
        },
        () => {
          if (panelRef.current) choose([]);
        }
      );
    }
  };

  // Keep Tab focus inside the modal (it's aria-modal), wrapping at both ends.
  const onPanelKey = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusable = [
      ...panelRef.current.querySelectorAll<HTMLElement>("input, button"),
    ].filter((el) => !el.hasAttribute("disabled"));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const listboxId = "search-palette-listbox";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        onPointerEnter={wantIndex}
        onFocus={wantIndex}
        aria-label="Search the site"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className={styles.triggerLabel}>Search</span>
        <kbd className={styles.kbd}>⌘K</kbd>
      </button>

      {/* Into <body>, not inside the header. The sticky header (z-index 50)
          is its own stacking context, so the overlay's 200 only ranked it
          inside the bar: the phone tab bar (60) stayed bright and tappable
          over the dimmed page. And once the bar is scrolled, its
          backdrop-filter makes it the containing block for anything fixed
          inside it, so on desktop the scrim shrank to a strip across the top
          and the page under the panel was neither dimmed nor a dismiss target.
          Out here `position: fixed; inset: 0` is the viewport. */}
      {open && createPortal(
        <div className={styles.overlay} role="presentation" onClick={close}>
          <div
            ref={panelRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onPanelKey}
          >
            <div className={styles.inputRow}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                className={styles.input}
                type="text"
                placeholder="Search charts, awards, cars, FAQ…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKey}
                aria-label="Search query"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls={listboxId}
                aria-activedescendant={
                  results.length > 0 && results[active] ? `search-opt-${active}` : undefined
                }
                aria-autocomplete="list"
                autoComplete="off"
                spellCheck={false}
              />
              <button type="button" className={styles.escBtn} onClick={close} aria-label="Close search">
                {/* "Esc" reads on desktop (keyboard); mobile has no Esc key, so ✕ */}
                <span className={styles.escText}>Esc</span>
                <span className={styles.closeX} aria-hidden="true">✕</span>
              </button>
            </div>

            {results.length > 0 ? (
              <ul id={listboxId} className={styles.results} role="listbox" aria-label="Search results">
                {!query.trim() && (
                  <li role="presentation" className={styles.groupLabel}>Popular pages</li>
                )}
                {results.map((d, i) => (
                  <li key={`${d.section}|${d.title}|${d.path}`} role="presentation">
                    <button
                      type="button"
                      id={`search-opt-${i}`}
                      role="option"
                      aria-selected={i === active}
                      className={`${styles.result} ${i === active ? styles.resultActive : ""}`}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => go(d.path)}
                    >
                      <span className={styles.resultMain}>
                        <span className={styles.resultTitle}>{d.title}</span>
                        <span className={styles.resultDesc}>{d.description}</span>
                      </span>
                      <span className={styles.resultSection}>{d.section}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : searching ? null : (
              <div className={styles.empty}>
                No pages match “{query.trim()}”.
                <br />
                Try “charts”, “awards”, “cars” or “net worth”.
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
