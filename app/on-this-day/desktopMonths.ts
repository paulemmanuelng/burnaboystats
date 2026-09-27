import styles from "./onThisDay.module.css";
import { KIND_MARK, type OnThisDayKind } from "../lib/onThisDayKinds";
import {
  MONTHS,
  calendarDayLabel,
  calendarMonthDays,
  monthDefault,
  monthSub,
  onThisDayDays,
  type OnThisDayToday,
} from "../lib/onThisDay";

/**
 * The desktop calendar's twelve months as one block of HTML, built on the
 * server (designs/desktop/OTD Calendar.dc.html, desktop): days 1–31 in seven
 * columns with no weekday header, and under each grid the month's dated days
 * with their lead headlines, lit together with their cells by CSS alone
 * (onThisDay.module.css, :has()).
 *
 * Why a string and not JSX. Every page carries both layouts, and on a phone
 * this one is display:none — yet as JSX its 3,600 nodes went out a second
 * time as React's payload (304 KB) and were rebuilt and hydrated node by node
 * on every visit, for a calendar a phone never shows: ~70 ms of main thread on
 * a throttled phone, and a 50 ms task in the middle of the first scroll. As one
 * block of HTML it is in the page exactly as before — every date, label and
 * headline, for readers and crawlers — and React holds it as a single node it
 * never walks. Nothing in it is interactive but its links, and StaticLinks
 * gives those the in-place navigation next/link gave them.
 *
 * The markup is the JSX it replaces, element for element and class for class
 * (tests/scrollPaint.test.tsx), escaped the way React escapes.
 */

const esc = (s: string | number) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" })[c]!);

type Attrs = Record<string, string | number | boolean | undefined>;

/** An element: attributes left out when undefined or false; text children are
 *  already escaped by the caller (use esc). */
function el(tag: string, attrs: Attrs, ...children: string[]): string {
  let a = "";
  for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== false) a += ` ${k}="${esc(v === true ? "true" : v)}"`;
  return `<${tag}${a}>${children.join("")}</${tag}>`;
}

/** KindMark (components/OnThisDayKind.tsx) as markup. */
function kindMark(kind: OnThisDayKind, size: number, className: string, alone: boolean): string {
  const m = KIND_MARK[kind];
  return el(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 12 12",
      class: className,
      ...(alone ? { role: "img", "aria-label": m.aria } : { "aria-hidden": "true", focusable: "false" }),
    },
    el("path", {
      d: m.d,
      fill: m.filled ? "currentColor" : "none",
      stroke: m.filled ? "none" : "currentColor",
      "stroke-width": m.filled ? undefined : 1.8,
    }),
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

export function desktopMonthsHtml(today: OnThisDayToday): string {
  return MONTHS.map((name, i) => {
    const month = i + 1;
    const days = onThisDayDays.filter((d) => d.month === month);
    const byDay = new Map(days.map((d) => [d.day, d]));
    // The month's lit day at rest, as the artboard draws it: today, else the
    // Today panel's next date, else the busiest day.
    const lit = monthDefault(days, today)?.day;

    const cells = Array.from({ length: calendarMonthDays(month) }, (_, j) => j + 1).map((n) => {
      const key = `${pad(month)}-${pad(n)}`;
      const d = byDay.get(n);
      const isToday = key === today.key;
      const cls = `${styles.cell} ${d ? styles.cellOn : styles.cellOff}${isToday ? ` ${styles.cellToday}` : ""}`;
      if (d) {
        return el(
          "a",
          {
            href: `/on-this-day/${d.slug}`,
            "data-day": n,
            "data-default": n === lit,
            class: cls,
            "aria-label": calendarDayLabel(key, d),
            "aria-current": isToday ? "date" : undefined,
          },
          esc(n),
          kindMark(d.lead.kind, 8, styles.cellMark, false),
          d.events.length > 1 ? el("span", { class: styles.cellCount }, esc(d.events.length)) : "",
        );
      }
      // Not focusable, so today is said in words too.
      return el(
        "span",
        { class: cls, "aria-current": isToday ? "date" : undefined },
        el("span", { "aria-hidden": "true" }, esc(n)),
        el("span", { class: "visuallyHidden" }, esc(calendarDayLabel(key)), isToday ? esc(", today") : ""),
      );
    });

    // Every lead headline is in the page, not in a tooltip. The cells are the
    // keyboard's way in; these rows repeat their links for the pointer, so
    // they stay out of the tab order.
    const rows = days.map((d) =>
      el(
        "li",
        {},
        el(
          "a",
          {
            href: `/on-this-day/${d.slug}`,
            "data-day": d.day,
            "data-default": d.day === lit,
            class: styles.listRow,
            tabindex: -1,
          },
          el("span", { class: styles.listDay }, esc(d.day)),
          kindMark(d.lead.kind, 10, styles.listMark, true),
          el("span", { class: styles.listHeadline }, esc(d.lead.headline)),
          el(
            "span",
            { class: styles.listMore },
            d.events.length > 1 ? `+${esc(d.events.length - 1)}${el("span", { class: "visuallyHidden" }, " more")}` : "",
          ),
        ),
      ),
    );

    return el(
      "section",
      { class: styles.month, "aria-labelledby": `otd-cal-${month}` },
      el(
        "div",
        { class: styles.monthHead },
        el("h2", { id: `otd-cal-${month}`, class: styles.monthName }, esc(name)),
        el("span", { class: styles.monthSub }, esc(monthSub(days)), el("span", { class: "visuallyHidden" }, " milestones")),
      ),
      el("div", { class: styles.grid }, ...cells),
      el("ol", { class: styles.monthList }, ...rows),
    );
  }).join("");
}
