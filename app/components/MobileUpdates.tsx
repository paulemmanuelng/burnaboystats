"use client"; // the category rail filters the feed

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileUpdates.module.css";
import { inkFor } from "../lib/updateInk";
import type { Update, UpdateCategory } from "../data/updates";

/**
 * The mobile updates screen.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 06.
 *
 * The desktop feed groups by month across four columns; here each entry is one
 * block — category pill and date on top, the text beneath — and the month
 * headings go, because a phone reading one entry at a time gets the date from
 * the entry itself. The filter is the same set of categories, as a rail.
 *
 * This screen keeps the five-tab bar, so there is no action bar here.
 */

const DATE_FMT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});
const asDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

export default function MobileUpdates({
  items,
  lastEntry,
}: {
  items: Update[];
  lastEntry: string;
}) {
  const [cat, setCat] = useState<UpdateCategory | null>(null);

  const counts = items.reduce<Record<string, number>>((acc, u) => {
    acc[u.category] = (acc[u.category] ?? 0) + 1;
    return acc;
  }, {});
  const cats = (Object.keys(counts) as UpdateCategory[]).sort(
    (a, b) => counts[b] - counts[a]
  );
  const shown = cat ? items.filter((u) => u.category === cat) : items;

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Updates</span>
        <a href="/rss.xml" className={styles.rss}>RSS ↗</a>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>The change log</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Latest <span className={styles.gold}>Updates</span>
        </h1>
        <p className={styles.lede}>
          Chart peaks, certifications and records, as they&apos;re added.
        </p>
        <div className={styles.lastEntry}>
          <span className={styles.liveDot} aria-hidden="true" />
          Last entry <strong>{lastEntry}</strong>
        </div>
      </div>

      {/* Filter rail */}
      <div className={styles.rail}>
        <button
          type="button"
          aria-pressed={cat === null}
          onClick={() => setCat(null)}
          className={styles.chip}
          style={cat === null ? { borderColor: "var(--gold)", color: "var(--gold)" } : undefined}
        >
          All {items.length}
        </button>
        {cats.map((c) => {
          const on = cat === c;
          const ink = inkFor(c);
          return (
            <button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => setCat(on ? null : c)}
              className={styles.chip}
              style={on ? { borderColor: ink, color: ink } : undefined}
            >
              <span className={styles.chipDot} style={{ background: ink }} aria-hidden="true" />
              {c} {counts[c]}
            </button>
          );
        })}
      </div>

      <p className={styles.count}>
        {shown.length} {shown.length === 1 ? "entry" : "entries"}
      </p>

      {/* Feed */}
      <div className={styles.list}>
        {shown.map((u, i) => {
          const ink = inkFor(u.category);
          return (
            <Link key={`${u.date}-${i}`} href={u.href} className={styles.row}>
              <div className={styles.rowTop}>
                <span className={styles.tag} style={{ borderColor: ink, color: ink }}>
                  <span className={styles.tagDot} style={{ background: ink }} aria-hidden="true" />
                  {u.category}
                </span>
                <span className={styles.rowDate}>{DATE_FMT.format(asDate(u.date))}</span>
              </div>
              <div className={styles.rowText}>{u.text}</div>
            </Link>
          );
        })}
      </div>

      <div className={styles.spacer} />
    </div>
  );
}
