"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import styles from "../search/search.module.css";
import { searchDocs } from "../lib/searchIndex";
import { track } from "../lib/analytics";

// The /search landing page body (also the target of the WebSite SearchAction).
// Live-filters the static index as you type; links straight to the matching page.
export default function SearchResults({ initialQuery }: { initialQuery: string }) {
  const [q, setQ] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchDocs(q, 20), [q]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Record the query that landed here (from the palette's "see all" or an
  // external SearchAction link), so we can see what people actually look for.
  useEffect(() => {
    const t = initialQuery.trim().toLowerCase();
    if (t) track("search", { q: t, results: searchDocs(initialQuery, 20).length });
  }, [initialQuery]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = q.trim().toLowerCase();
    if (t) track("search", { q: t, results: results.length });
  };

  return (
    <div className={styles.wrap}>
      <form className={styles.searchForm} onSubmit={onSubmit} role="search">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search charts, awards, cars, FAQ…"
          aria-label="Search query"
          autoComplete="off"
        />
      </form>

      {q.trim() === "" ? (
        <p className={styles.hint}>
          Start typing to search every page — try “charts”, “awards”, “cars”,
          “net worth” or “Africa&apos;s biggest”.
        </p>
      ) : results.length === 0 ? (
        <p className={styles.hint}>
          No pages match “{q.trim()}”. Try a broader term like “charts”,
          “awards” or “tours”.
        </p>
      ) : (
        <ul className={styles.list}>
          {results.map((d) => (
            <li key={d.path}>
              <Link
                href={d.path}
                className={styles.item}
                onClick={() =>
                  track("search_select", { q: q.trim().toLowerCase(), to: d.path })
                }
              >
                <span className={styles.itemMain}>
                  <span className={styles.itemTitle}>{d.title}</span>
                  <span className={styles.itemDesc}>{d.description}</span>
                </span>
                <span className={styles.itemSection}>{d.section}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
