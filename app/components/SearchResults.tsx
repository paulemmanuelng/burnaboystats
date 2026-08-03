"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import styles from "../search/search.module.css";
import { searchDocs, searchIndex } from "../lib/searchIndex";
import { track } from "../lib/analytics";

/**
 * The /search body — also the target of the WebSite SearchAction.
 *
 * Live-filters the static index as you type and links straight to the matching
 * page. Built from designs/desktop/Search.dc.html and mobile screen 27, which
 * draw the same thing: this is the one page in the rebuild that keeps a single
 * layout at every width, because a field over a result list is already the
 * phone pattern.
 *
 * `stats` arrives from the server page. The index itself stays free of data
 * imports so the whole dataset never ships to the browser — see lib/searchStats.
 */

// Section colours, matching the meanings those hues carry site-wide.
const SECTION_INK: Record<string, [string, string]> = {
  Site: ["var(--text-muted)", "var(--border)"],
  Records: ["var(--gold-bright)", "rgba(255,210,74,0.45)"],
  Music: ["var(--cyan)", "rgba(143,227,240,0.45)"],
  Song: ["var(--cyan)", "rgba(143,227,240,0.45)"],
};
const inkFor = (s: string) => SECTION_INK[s] ?? ["var(--text-muted)", "var(--border)"];

const SUGGESTIONS = ["Charts", "Certifications", "Tours", "Awards", "Dai Dai", "Cars"];

// Enough to show every page at once; the index is under 50 docs.
const LIMIT = 60;

export default function SearchResults({
  initialQuery,
  stats,
}: {
  initialQuery: string;
  stats: Record<string, string>;
}) {
  const [q, setQ] = useState(initialQuery);
  const [section, setSection] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const matched = useMemo(() => searchDocs(q, LIMIT), [q]);
  // An empty query lists everything rather than nothing — the design's default
  // state is a browsable index, not a blank page.
  const base = q.trim() === "" ? searchIndex : matched;
  const results = section ? base.filter((d) => d.section === section) : base;

  // Counts come from the query match, not the filtered set, so a chip always
  // says how many it would show.
  const counts = base.reduce<Record<string, number>>((acc, d) => {
    acc[d.section] = (acc[d.section] ?? 0) + 1;
    return acc;
  }, {});
  const sections = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Record the query that landed here (from the palette's "see all" or an
  // external SearchAction link), so we can see what people actually look for.
  useEffect(() => {
    const t = initialQuery.trim().toLowerCase();
    if (t) track("search", { q: t, results: searchDocs(initialQuery, LIMIT).length });
  }, [initialQuery]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = q.trim().toLowerCase();
    if (t) track("search", { q: t, results: results.length });
  };

  const isEmpty = q.trim() !== "" && results.length === 0;

  return (
    <>
      <section className={`${styles.wrap} ${styles.heroPad}`}>
        <div className={styles.kicker}>Everything on this site, one field</div>
        <h1 className={styles.h1}>
          <span className="inkText">Search</span>
        </h1>
        <p className={styles.lede}>
          Find any page — charts, awards, cars, certifications and more.
        </p>

        <form className={styles.field} onSubmit={onSubmit} role="search">
          <svg
            className={styles.fieldIcon}
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Songs, records, countries, awards, pages…"
            aria-label="Search query"
            autoComplete="off"
          />
          {q !== "" && (
            <button type="button" className={styles.clear} onClick={() => setQ("")}>
              Clear ✕
            </button>
          )}
        </form>

        <div className={styles.filters}>
          <span className={styles.filterLabel}>Filter</span>
          <button
            type="button"
            aria-pressed={section === null}
            onClick={() => setSection(null)}
            className={styles.chip}
            style={section === null ? { borderColor: "var(--gold)", color: "var(--gold)" } : undefined}
          >
            All
            <span className={styles.chipCount}>{base.length}</span>
          </button>
          {sections.map((s) => {
            const on = section === s;
            const [color, border] = inkFor(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => setSection(on ? null : s)}
                className={styles.chip}
                style={on ? { borderColor: border, color } : undefined}
              >
                {s}
                <span className={styles.chipCount}>{counts[s]}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.resultsPad}`}>
        <div className={styles.resultsHead}>
          <span className={styles.resultsLabel}>
            {q.trim() === ""
              ? `All ${results.length} pages`
              : `${results.length} ${results.length === 1 ? "result" : "results"}`}
          </span>
          <span className={styles.resultsHint}>
            {q.trim() === "" ? "Start typing to narrow" : `for “${q.trim()}”`}
          </span>
        </div>

        {isEmpty ? (
          <div className={styles.empty}>
            <div className={styles.emptyH}>Nothing matches “{q.trim()}”</div>
            <p className={styles.emptyP}>
              Try a country, a song title, an award body, or a year.
            </p>
            <div className={styles.suggestions}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={styles.suggestion}
                  onClick={() => {
                    setQ(s);
                    setSection(null);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          results.map((d) => {
            const [color, borderColor] = inkFor(d.section);
            return (
              <Link
                key={d.path}
                href={d.path}
                className={styles.row}
                onClick={() =>
                  track("search_select", { q: q.trim().toLowerCase(), to: d.path })
                }
              >
                <span className={styles.kind} style={{ color, borderColor }}>
                  {d.section}
                </span>
                <span className={styles.rowMain}>
                  <span className={styles.rowTitle}>{d.title}</span>
                  <span className={styles.rowBlurb}>{d.description}</span>
                </span>
                <span className={styles.rowStat}>{stats[d.path] ?? ""}</span>
              </Link>
            );
          })
        )}
      </section>

      <section className={`${styles.wrap} ${styles.pills}`}>
        <Link href="/" className="btn btnSecondary">← Home</Link>
        <Link href="/records" className="btn btnPrimary">Browse career records ↗</Link>
        <Link href="/methodology" className="btn btnSecondary">Methodology ↗</Link>
      </section>
    </>
  );
}
