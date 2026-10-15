"use client"; // the category chips filter the feed; the strip tracks the month in view

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "../updates/updates.module.css";
import { markFor } from "../lib/updateInk";
import { noSept } from "../lib/dates";
import { useSpy } from "../lib/spy";
import { KindMark } from "./OnThisDayKind";
import ScrollRail from "./ScrollRail";
import type { Update, UpdateCategory } from "../data/updates";

/**
 * The desktop updates feed: a sticky strip over a month-grouped log.
 *
 * Grouping by month is what makes the log readable at 300-odd entries — the
 * date column then only has to carry the day. Filtering regroups rather than
 * hiding rows, so an empty month never leaves a stray heading behind.
 *
 * The strip (Job 4 · J4-8, fix 84) sticks under the masthead over the whole
 * feed: the month in view and its count under the filter, pinned left; the
 * filter chips in their built order, scrolling under the edge fades; "Top",
 * pinned right. A row reads its short date over its tag, then the entry with
 * its first clause at weight 500 (lib/updateClause.ts, cut on the server and
 * handed over as `leads`, one length per entry), capped at 68ch.
 */

// en-GB, like the page's own "Last entry" line.
const MONTH_FMT = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
// The phone feed's own short date, "17 Sep" (never "Sept"): the month
// heading above the row already carries the month and year.
const DAY_FMT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});
const asDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
const entries = (n: number) => `${n} ${n === 1 ? "entry" : "entries"}`;

/** The strip sits on the month whose head has passed its bottom: 69 + 48 + 15. */
const STRIP_LINE = 132;

export default function UpdatesFeed({
  items,
  leads = [],
}: {
  items: Update[];
  /** Where each entry's lead clause ends, by index in `items` (0: no lead). */
  leads?: number[];
}) {
  const [cat, setCat] = useState<UpdateCategory | null>(null);
  const strip = useRef<HTMLDivElement>(null);
  const leadOf = new Map(items.map((u, i) => [u, leads[i] ?? 0]));

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

  const months: { key: string; month: string; items: Update[] }[] = [];
  for (const u of shown) {
    const key = u.date.slice(0, 7);
    const last = months[months.length - 1];
    if (last?.key === key) last.items.push(u);
    else months.push({ key, month: MONTH_FMT.format(asDate(u.date)), items: [u] });
  }

  const at = useSpy(months.map((g) => `month-${g.key}`), STRIP_LINE, strip);
  const here = months[Math.min(at, months.length - 1)];

  return (
    <div className={styles.feedWrap}>
      <div ref={strip} className={styles.dockStrip} data-dock="desk-strip">
        <div className={`${styles.wide} ${styles.filterPad}`}>
          <span className={styles.stripMonth}>
            {here ? `${here.month} · ${entries(here.items.length)}` : entries(0)}
          </span>
          {/* One pressed state for every chip, from the stylesheet (.chipOn):
              it was painted inline, a category in its own ink, so a pressed
              "Lifestyle" kept the resting label (V-core-12). */}
          <ScrollRail className={styles.stripRail} label="Filter the updates">
            <button
              type="button"
              aria-pressed={cat === null}
              onClick={() => setCat(null)}
              className={`${styles.chip} ${cat === null ? styles.chipOn : ""}`}
            >
              All
              <span className={styles.chipCount}>{items.length}</span>
            </button>
            {cats.map((c) => {
              const on = cat === c;
              const mark = markFor(c);
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setCat(on ? null : c)}
                  className={`${styles.chip} ${on ? styles.chipOn : ""}`}
                >
                  {mark && <KindMark kind={mark} />}
                  {c}
                  <span className={styles.chipCount}>{counts[c]}</span>
                </button>
              );
            })}
          </ScrollRail>
          <a href="#entries" className={styles.dockTop}>
            Top
          </a>
        </div>
      </div>

      {/* `entries` is where the digest ticket's "This week's entries ↓" lands. */}
      <section id="entries" className={styles.band}>
        <div className={`${styles.wide} ${styles.feedPad}`}>
          {months.map((g) => (
            <div key={g.key} id={`month-${g.key}`} className={styles.month}>
              <div className={styles.monthHead}>
                <h2 className={styles.monthTitle}>{g.month}</h2>
                <span className={styles.monthCount}>{entries(g.items.length)}</span>
              </div>
              {g.items.map((u, i) => {
                const mark = markFor(u.category);
                const end = leadOf.get(u) ?? 0;
                return (
                  <Link
                    key={`${u.date}-${i}`}
                    href={u.href}
                    className={styles.row}
                  >
                    <span className={styles.rowMeta}>
                      <span className={styles.rowDate}>{noSept(DAY_FMT.format(asDate(u.date)))}</span>
                      <span className={styles.tag}>
                        {mark && <KindMark kind={mark} />}
                        {u.category}
                      </span>
                    </span>
                    <span className={styles.rowText}>
                      {end > 0 && <span className={styles.rowLead}>{u.text.slice(0, end)}</span>}
                      {u.text.slice(end)}
                    </span>
                    <span className={styles.rowArrow} aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
