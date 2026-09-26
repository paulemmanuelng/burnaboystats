"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./mobileOnThisDay.module.css";
import { KindMark } from "./OnThisDayKind";
import type { OnThisDayKind } from "../lib/onThisDayKinds";

/** One dated day, as much of it as the month panel prints. */
export interface PhoneMonthDay {
  key: string;
  day: number;
  slug: string;
  label: string;
  count: number;
  /** "16 August · 5 milestones · 2019–2023" */
  meta: string;
  headline: string;
  kind: OnThisDayKind;
}

/**
 * A month on the phone calendar (designs/desktop/OTD Calendar.dc.html, phone):
 * days 1–31 in seven 44px columns with no weekday header, and under the grid
 * the selected day's panel — its date, count, span, lead headline and "Open ↗".
 *
 * A dated day is a button: a tap selects it and the panel follows. The panel
 * opens on the day the server chose (today, else the Today panel's next date,
 * else the month's busiest), so the first paint is the server's and hydration
 * has nothing to change. Every day stays one tap from its page; this is a
 * panel, not a fold.
 */
export default function OnThisDayPhoneMonth({
  month,
  name,
  sub,
  cellLabels,
  days,
  todayKey,
  defaultKey,
}: {
  month: number;
  name: string;
  /** "9 dates · 12" */
  sub: string;
  /** What a screen reader hears for each day, 1 to the month's last. */
  cellLabels: string[];
  days: PhoneMonthDay[];
  todayKey: string;
  defaultKey: string | null;
}) {
  const [selected, setSelected] = useState(defaultKey);
  const byDay = new Map(days.map((d) => [d.day, d]));
  const sel = days.find((d) => d.key === selected);
  const id = name.toLowerCase();

  return (
    <section id={`month-${id}`} className={styles.calMonth} aria-labelledby={`otd-m-${month}`}>
      <div className={styles.calMonthHead}>
        <h2 id={`otd-m-${month}`} className={styles.calMonthName}>
          {name}
        </h2>
        <span className={styles.calMonthSub}>
          {sub}
          <span className="visuallyHidden"> milestones</span>
        </span>
        <a href="#months" className={styles.monthsUp}>
          Months <span aria-hidden="true">↑</span>
        </a>
      </div>

      <div className={styles.calGrid}>
        {cellLabels.map((label, j) => {
          const n = j + 1;
          const d = byDay.get(n);
          const key = `${String(month).padStart(2, "0")}-${String(n).padStart(2, "0")}`;
          const isToday = key === todayKey;
          if (!d) {
            // An undated day is not focusable, and aria-current on a plain
            // span is not reliably announced — so today says so in words.
            return (
              <span
                key={n}
                className={`${styles.calCell} ${styles.calCellOff}${isToday ? ` ${styles.calCellToday}` : ""}`}
                aria-current={isToday ? "date" : undefined}
              >
                <span aria-hidden="true">{n}</span>
                <span className="visuallyHidden">
                  {label}
                  {isToday && ", today"}
                </span>
              </span>
            );
          }
          return (
            <button
              key={n}
              type="button"
              className={`${styles.calCell} ${styles.calCellOn}${isToday ? ` ${styles.calCellToday}` : ""}`}
              aria-label={label}
              aria-pressed={d.key === selected}
              aria-current={isToday ? "date" : undefined}
              onClick={() => setSelected(d.key)}
            >
              {n}
              <KindMark kind={d.kind} size={8} className={styles.calCellMark} />
              {d.count > 1 && (
                <span className={styles.calCellCount} aria-hidden="true">
                  {d.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {sel && (
        <div className={styles.calPanel} aria-live="polite">
          <p className={styles.calPanelMeta}>{sel.meta}</p>
          <p className={styles.calPanelHeadline}>
            <KindMark kind={sel.kind} alone size={11} className={styles.calPanelMark} />
            {sel.headline}
          </p>
          <Link href={`/on-this-day/${sel.slug}`} className={styles.calPanelOpen}>
            <span>Open {sel.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      )}
    </section>
  );
}
