import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/on-this-day",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CalendarPage from "../../app/on-this-day/page";
import MobileOnThisDayIndex from "../../app/components/MobileOnThisDayIndex";
import { calendarToday, onThisDayDays } from "../../app/lib/onThisDay";

/**
 * V-otd-07, the full-site debug of 5 Oct 2026. On the desktop calendar every
 * dated day is its own Tab stop, month by month (the design response's
 * keyboard order), and nothing led past them: read live in headless Chrome
 * at 1440 and 1024, dark and light, a keyboard went from the Today panel's
 * "Open …" link through all 161 dated cells (3 Jan, 10 Jan, 11 Jan, 15 Jan…)
 * before "How dates are filed", Keep exploring and the footer.
 *
 * A "Skip the calendar" link is now the stop right after the Today panel,
 * ahead of the first cell, and lands on "How dates are filed"; the cells keep
 * their order. jsdom does no layout, so this walks the served markup's Tab
 * order; the pill's look on focus was checked live by grafting it onto the
 * shipped page. On the shipped page and stylesheet four of the six tests
 * fail; the negative control runs the shipped markup (the page less the
 * link) and counts the 162 Tabs the live page took.
 */

const page = (() => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date("2026-10-06T12:00:00Z"));
  try {
    const all = renderToStaticMarkup(CalendarPage());
    const phone = renderToStaticMarkup(<MobileOnThisDayIndex today={calendarToday(new Date())} />);
    expect(all).toContain(phone);
    const desk = document.createElement("div");
    desk.innerHTML = all.replace(phone, "");
    const whole = document.createElement("div");
    whole.innerHTML = all;
    return { desk, whole };
  } finally {
    vi.useRealTimers();
  }
})();

const TABBABLE = 'a[href], button, input, select, textarea, summary, [tabindex]';
const tabStops = (host: Element) =>
  [...host.querySelectorAll<HTMLElement>(TABBABLE)].filter((e) => e.getAttribute("tabindex") !== "-1");
const isCell = (e: Element) => e.matches("a[data-day]") && e.closest("ol") === null;
const name = (e: Element) => (e.getAttribute("aria-label") ?? e.textContent ?? "").trim();
const follows = (a: Node, b: Node) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;

/** Keys from the Today panel's "Open …" link to the methodology link in "How
 *  dates are filed": Tab, and Enter on an in-page skip link (the browser then
 *  starts the next Tab from the link's target). */
function keysPastCalendar(host: HTMLElement): number {
  const stops = tabStops(host);
  let i = stops.findIndex((e) => /^Open /.test(name(e)));
  expect(i).toBeGreaterThanOrEqual(0);
  let keys = 0;
  while (keys < 1000) {
    i++;
    keys++; // Tab
    const at = stops[i];
    expect(at).toBeDefined();
    if (at.getAttribute("href") === "/methodology#dates") return keys;
    const hash = at.getAttribute("href")?.match(/^#(.+)$/)?.[1];
    const target = hash ? host.querySelector(`[id="${hash}"]`) : null;
    if (target && follows(at, target)) {
      keys++; // Enter
      // The next Tab goes to the first stop inside or after the target.
      i = stops.findIndex((e) => target.contains(e) || follows(target, e)) - 1;
    }
  }
  return keys;
}

describe("the desktop calendar has a way past its day cells", () => {
  const { desk, whole } = page;
  const stops = tabStops(desk);
  const cells = stops.filter(isCell);

  it("every dated day is still a Tab stop, month by month (the design's keyboard order)", () => {
    expect(cells.length).toBe(onThisDayDays.length);
    expect(cells.map((c) => c.getAttribute("href"))).toEqual(onThisDayDays.map((d) => `/on-this-day/${d.slug}`));
  });

  it("“Skip the calendar” is the stop after the Today panel and before the first cell, and lands on “How dates are filed”", () => {
    const open = stops.findIndex((e) => /^Open /.test(name(e)));
    const skip = stops[open + 1];
    expect(name(skip)).toBe("Skip the calendar");
    expect(stops[open + 2]).toBe(cells[0]);

    const id = skip.getAttribute("href")!.replace(/^#/, "");
    expect(whole.querySelectorAll(`[id="${id}"]`).length).toBe(1);
    const target = desk.querySelector(`[id="${id}"]`)!;
    expect(target.textContent).toContain("How dates are filed");
    expect(follows(cells[cells.length - 1], target)).toBe(true);
    // The next Tab after the jump is the filed note's own link.
    const next = stops.find((e) => target.contains(e) || follows(target, e))!;
    expect(next.getAttribute("href")).toBe("/methodology#dates");
  });

  it("from the Today panel to past the calendar is Tab, Enter, Tab", () => {
    expect(keysPastCalendar(desk)).toBe(3);
  });

  it("negative control: the shipped page, without the link, needs a Tab per dated day", () => {
    const shipped = desk.cloneNode(true) as HTMLElement;
    [...shipped.querySelectorAll("a")].find((a) => name(a) === "Skip the calendar")?.remove();
    expect(keysPastCalendar(shipped)).toBe(onThisDayDays.length + 1);
  });
});

describe("the link is seen only on focus and takes no room", () => {
  const css = readFileSync("app/on-this-day/onThisDay.module.css", "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const body = (selector: string) => {
    const m = css.match(new RegExp(`(?:^|\\})\\s*${selector.replace(/[.*+?^${}()|[\]\\:]/g, "\\$&")}\\s*\\{([^}]*)\\}`));
    expect(m, selector).not.toBeNull();
    return m![1];
  };

  it("out of focus it is clipped to a 1px box, so a screen reader and the keyboard still reach it", () => {
    const rest = body(".skip:not(:focus)");
    expect(rest).toMatch(/clip-path:\s*inset\(50%\)/);
    expect(rest).toMatch(/width:\s*1px/);
    expect(rest).toMatch(/height:\s*1px/);
    expect(css).not.toMatch(/\.skip[^{]*\{[^}]*(display:\s*none|visibility:\s*hidden)/);
  });

  it("on focus it is the 44px gold pill, out of the flow so the months do not move", () => {
    const pill = body(".skip");
    expect(pill).toMatch(/position:\s*absolute/);
    expect(pill).toMatch(/min-height:\s*44px/);
    expect(pill).toMatch(/background-color:\s*var\(--gold-fill\)/);
    expect(pill).toMatch(/color:\s*var\(--ink-on-gold\)/);
  });
});
