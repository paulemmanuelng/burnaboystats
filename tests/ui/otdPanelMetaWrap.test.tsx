import { readFileSync } from "node:fs";
import { fireEvent, render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/on-this-day",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; prefetch?: boolean; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileOnThisDayIndex from "../../app/components/MobileOnThisDayIndex";
import { calendarToday, onThisDayDays } from "../../app/lib/onThisDay";
import styles from "../../app/components/mobileOnThisDay.module.css";

/**
 * V-otd-09 (debug pass of 5 Oct 2026): the phone calendar's selected-day panel
 * printed its meta — "3 June · 2 milestones · 2022–2023" — as one plain
 * string, so a narrow phone broke it wherever the browser could: after a
 * " · " (leaving the dot at the end of a line) or after the year span's en
 * dash. Read live in headless Chrome on 7 Oct, dark and light, clicking every
 * dated day: 41 of 161 panels at 320 ("3 JUNE · 2 MILESTONES · 2022–" /
 * "2023", "8 SEPTEMBER · 3 MILESTONES ·" / "2019–2024") and 7 at 360
 * ("8 SEPTEMBER · 3 MILESTONES · 2019–" / "2024"); 375 and 390 were one line.
 *
 * Now each separator is bound to the item after it by a no-break space, as the
 * home card's kicker is (keepSeparators), and the year span is one nowrap run,
 * so the line can only wrap before a " · ". jsdom does no layout, so this pins
 * the markup every panel carries and reads the rule the stylesheet gives the
 * span; the same check runs on the panel the site shipped, verbatim, so a
 * vacuous guard would show. Grafted onto the live page at 320–430, dark and
 * light, every panel either fits one line or reads "8 SEPTEMBER · 3
 * MILESTONES" / "· 2019–2024", with no sideways scroll.
 */

const CSS = readFileSync("app/components/mobileOnThisDay.module.css", "utf8");

/** The declarations every rule ending on the class gives it, in sheet order —
 *  media blocks included, so a narrow-screen rule cannot undo the run. */
const decls = (css: string, cls: string) => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Record<string, string> = {};
  const ends = new RegExp(`\\.${cls}$`);
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (!m[1].split(",").some((sel) => ends.test(sel.trim()))) continue;
    for (const part of m[2].split(";")) {
      const i = part.indexOf(":");
      if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
  }
  return out;
};

/** Where the meta could break badly: after a separator, or inside the span. */
function badBreaks(meta: HTMLElement, nowrapClasses: string[]): string[] {
  const out: string[] = [];
  const text = meta.textContent ?? "";
  for (const m of text.matchAll(/·(.)/g)) {
    if (m[1] !== " ") out.push(`"·" followed by ${JSON.stringify(m[1])} at ${m.index}`);
  }
  // Every text node that holds a year span's dash must sit in a nowrap run.
  const walker = document.createTreeWalker(meta, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (!/\d–\d/.test(n.nodeValue ?? "")) continue;
    const run = n.parentElement?.closest(nowrapClasses.map((c) => `.${c}`).join(","));
    if (!run || !meta.contains(run)) out.push(`year span ${JSON.stringify(n.nodeValue)} outside a nowrap run`);
  }
  return out;
}

const plural = (n: number) => `${n} milestone${n === 1 ? "" : "s"}`;
const yearsOf = (d: (typeof onThisDayDays)[number]) => {
  const ys = d.events.map((e) => e.year);
  const lo = Math.min(...ys);
  const hi = Math.max(...ys);
  return lo === hi ? String(lo) : `${lo}–${hi}`;
};

describe("the phone calendar's day panel meta (V-otd-09)", () => {
  it("the stylesheet holds the year span to one line", () => {
    expect(styles.calPanelSpan).toBeTruthy();
    expect(decls(CSS, "calPanelSpan")["white-space"]).toBe("nowrap");
  });

  it("every dated day's panel reads its date, count and span, and wraps only before a separator", () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date("2026-10-07T12:00:00Z"));
    let host: HTMLElement;
    try {
      host = render(<MobileOnThisDayIndex today={calendarToday(new Date())} />).container;
    } finally {
      vi.useRealTimers();
    }
    const nowrap = [styles.calPanelSpan];
    const byLabel = new Map(onThisDayDays.map((d) => [d.label, d]));
    let seen = 0;
    const spans = new Set<string>();
    for (const section of host!.querySelectorAll<HTMLElement>('section[id^="month-"]')) {
      for (const button of section.querySelectorAll<HTMLButtonElement>("button[aria-pressed]")) {
        fireEvent.click(button);
        const day = byLabel.get(button.getAttribute("aria-label")!.split(" — ")[0])!;
        const meta = section.querySelector<HTMLElement>(`.${styles.calPanelMeta}`)!;
        const want = `${day.label} · ${plural(day.events.length)} · ${yearsOf(day)}`;
        expect(meta.textContent!.replace(/ /g, " "), day.label).toBe(want);
        expect(badBreaks(meta, nowrap), day.label).toEqual([]);
        spans.add(yearsOf(day));
        seen++;
      }
    }
    expect(seen).toBe(onThisDayDays.length);
    // Both kinds of span are covered: a single year and a range with a dash.
    expect([...spans].some((s) => s.includes("–"))).toBe(true);
    expect([...spans].some((s) => !s.includes("–"))).toBe(true);
  });

  it("negative control: the panel the site shipped (one plain string) fails the same check", () => {
    // The 3 June panel as burnaboystats.com served it on 7 Oct 2026, verbatim.
    const shipped = document.createElement("p");
    shipped.innerHTML = "3 June · 2 milestones · 2022–2023";
    expect(badBreaks(shipped, [styles.calPanelSpan])).toEqual([
      '"·" followed by " " at 7',
      '"·" followed by " " at 22',
      'year span "3 June · 2 milestones · 2022–2023" outside a nowrap run',
    ]);
    // …and a stylesheet without the run's rule gives the span no nowrap.
    expect(decls(CSS.replace(/\.calPanelSpan\s*\{[^}]*\}/g, ""), "calPanelSpan")["white-space"]).toBeUndefined();
  });
});
