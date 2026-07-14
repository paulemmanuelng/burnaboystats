"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchPalette.module.css";
import { searchDocs, searchIndex } from "../lib/searchIndex";
import { track } from "../lib/analytics";

// Site-wide command palette: a search button in the nav that opens a ⌘K / Ctrl+K
// modal to jump to any page. Pure client-side over the static index — no backend.
// When closed and empty it suggests the most-used pages so it's never a blank box.
const SUGGESTED = ["/records/cars", "/records/charts", "/certifications", "/records/africas-biggest"]
  .map((p) => searchIndex.find((d) => d.path === p)!)
  .filter(Boolean);

export default function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const r = searchDocs(query, 8);
    return r.length ? r : query.trim() ? [] : SUGGESTED;
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const go = useCallback(
    (path: string) => {
      track("search_select", { q: query.trim().toLowerCase() || "(suggested)", to: path });
      close();
      router.push(path);
    },
    [query, close, router]
  );

  // Global ⌘K / Ctrl+K to open, Escape to close.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus the input and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = results[active];
      if (pick) go(pick.path);
      else if (query.trim()) go(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Search the site"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className={styles.triggerLabel}>Search</span>
        <kbd className={styles.kbd}>⌘K</kbd>
      </button>

      {open && (
        <div className={styles.overlay} role="presentation" onClick={close}>
          <div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
            onClick={(e) => e.stopPropagation()}
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
                autoComplete="off"
                spellCheck={false}
              />
              <button type="button" className={styles.escBtn} onClick={close} aria-label="Close search">
                Esc
              </button>
            </div>

            {results.length > 0 ? (
              <ul className={styles.results} role="listbox" aria-label="Search results">
                {!query.trim() && <li className={styles.groupLabel}>Popular pages</li>}
                {results.map((d, i) => (
                  <li key={d.path}>
                    <button
                      type="button"
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
            ) : (
              <div className={styles.empty}>
                No pages match “{query.trim()}”.
                <br />
                Try “charts”, “awards”, “cars” or “net worth”.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
