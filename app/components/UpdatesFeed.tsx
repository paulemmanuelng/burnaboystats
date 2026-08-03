"use client"; // the category chips filter the feed

import { useState } from "react";
import Link from "next/link";
import styles from "../updates/updates.module.css";
import { inkFor } from "../lib/updateInk";
import type { Update, UpdateCategory } from "../data/updates";

/**
 * The desktop updates feed: a category filter band over a month-grouped log.
 *
 * Grouping by month is what makes the log readable at 140-odd entries — the
 * date column then only has to carry the day. Filtering regroups rather than
 * hiding rows, so an empty month never leaves a stray heading behind.
 */

const MONTH_FMT = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const DATE_FMT = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});
const asDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

export default function UpdatesFeed({ items }: { items: Update[] }) {
  const [cat, setCat] = useState<UpdateCategory | null>(null);

  const counts = items.reduce<Record<string, number>>((acc, u) => {
    acc[u.category] = (acc[u.category] ?? 0) + 1;
    return acc;
  }, {});
  // Chips run most-logged first, so the categories that actually move are the
  // ones nearest the "All" chip.
  const cats = (Object.keys(counts) as UpdateCategory[]).sort(
    (a, b) => counts[b] - counts[a]
  );

  const shown = cat ? items.filter((u) => u.category === cat) : items;

  const months: { month: string; items: Update[] }[] = [];
  for (const u of shown) {
    const label = MONTH_FMT.format(asDate(u.date));
    const last = months[months.length - 1];
    if (last?.month === label) last.items.push(u);
    else months.push({ month: label, items: [u] });
  }

  return (
    <>
      <section className={styles.bandSurface}>
        <div className={`${styles.wide} ${styles.filterPad}`}>
          <span className={styles.filterLabel}>Filter</span>
          <button
            type="button"
            aria-pressed={cat === null}
            onClick={() => setCat(null)}
            className={styles.chip}
            style={cat === null ? { borderColor: "var(--gold)", color: "var(--gold)" } : undefined}
          >
            All
            <span className={styles.chipCount}>{items.length}</span>
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
                {c}
                <span className={styles.chipCount}>{counts[c]}</span>
              </button>
            );
          })}
          <span className={styles.shown}>{shown.length} entries</span>
        </div>
      </section>

      <section className={styles.band}>
        <div className={`${styles.wide} ${styles.feedPad}`}>
          {months.map((g) => (
            <div key={g.month} className={styles.month}>
              <div className={styles.monthHead}>
                <h2 className={styles.monthTitle}>{g.month}</h2>
                <span className={styles.monthCount}>
                  {g.items.length} {g.items.length === 1 ? "entry" : "entries"}
                </span>
              </div>
              {g.items.map((u, i) => {
                const ink = inkFor(u.category);
                return (
                  <Link
                    key={`${u.date}-${i}`}
                    href={u.href}
                    className={styles.row}
                  >
                    <span className={styles.rowDate}>{DATE_FMT.format(asDate(u.date))}</span>
                    <span className={styles.tag} style={{ borderColor: ink, color: ink }}>
                      <span className={styles.tagDot} style={{ background: ink }} aria-hidden="true" />
                      {u.category}
                    </span>
                    <span className={styles.rowText}>{u.text}</span>
                    <span className={styles.rowArrow} aria-hidden="true">↗</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
