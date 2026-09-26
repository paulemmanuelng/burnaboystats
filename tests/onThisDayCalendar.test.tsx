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

import CalendarPage, { revalidate } from "../app/on-this-day/page";
import MobileOnThisDayIndex from "../app/components/MobileOnThisDayIndex";
import {
  KIND_MARK,
  MONTHS,
  calendarToday,
  londonDate,
  onThisDayCounts,
  onThisDayDays,
  type OnThisDayDay,
} from "../app/lib/onThisDay";

/**
 * The calendar as the design response draws it (§2 Calendar, §3; change list
 * items 11–13, approved 26 Sep 2026): a Today panel from the London date,
 * one legend-and-tally strip, real 1–31 month grids with no weekday header,
 * every lead headline in the page, the phone's month panels and month jumps,
 * and the grid fitting a 360px phone. Checked against the served markup of
 * both layouts, with every expected figure worked out here from the data.
 */

const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const byKey = new Map(onThisDayDays.map((d) => [d.key, d]));
const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;
const span = (d: OnThisDayDay) => {
  const ys = d.events.map((e) => e.year);
  return Math.min(...ys) === Math.max(...ys) ? String(ys[0]) : `${Math.min(...ys)}–${Math.max(...ys)}`;
};

function render(isoNoonUtc: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(`${isoNoonUtc}T12:00:00Z`));
  try {
    const page = renderToStaticMarkup(CalendarPage());
    const phone = renderToStaticMarkup(<MobileOnThisDayIndex today={calendarToday(new Date())} />);
    expect(page).toContain(phone);
    const host = document.createElement("div");
    host.innerHTML = page.replace(phone, "");
    const phoneHost = document.createElement("div");
    phoneHost.innerHTML = phone;
    return { desk: host, phone: phoneHost };
  } finally {
    vi.useRealTimers();
  }
}

/** The next dated day after an ISO date, walking real dates. */
function nextDated(iso: string): { day: OnThisDayDay; ahead: number } {
  const t = new Date(`${iso}T12:00:00Z`);
  for (let i = 1; i < 800; i++) {
    const d = new Date(t.getTime() + i * 86_400_000).toISOString().slice(5, 10);
    if (byKey.has(d)) return { day: byKey.get(d)!, ahead: i };
  }
  throw new Error("no dated day");
}

/** An ISO date in 2026 whose calendar day has nothing dated on it. */
const EMPTY = (() => {
  for (let t = Date.UTC(2026, 8, 26); ; t += 86_400_000) {
    const iso = new Date(t).toISOString().slice(0, 10);
    if (!byKey.has(iso.slice(5))) return iso;
  }
})();
const BUSIEST = [...onThisDayDays].sort((a, b) => b.events.length - a.events.length)[0];

const grids = (host: HTMLElement) =>
  [...host.querySelectorAll("section")].filter((s) => /otd-(cal|m)-\d/.test(s.getAttribute("aria-labelledby") ?? ""));
const cellsOf = (section: Element) => [...(section.children[1] as HTMLElement).children] as HTMLElement[];

describe("today comes from the server, hourly", () => {
  it("the page revalidates hourly, like home", () => {
    expect(revalidate).toBe(3600);
  });

  it("an empty day: its cell is ringed, and the Today panel names the next dated day and how far off it is", () => {
    const { desk, phone } = render(EMPTY);
    const next = nextDated(EMPTY);
    const [, m, d] = EMPTY.split("-").map(Number);
    const label = `${d} ${MONTHS[m - 1]}`;
    const sentence = `Nothing is dated ${label}. Next: ${next.day.label}, in ${plural(next.ahead, "day")}.`;
    for (const host of [desk, phone]) {
      const ringed = host.querySelectorAll('[aria-current="date"]');
      expect(ringed.length).toBe(1);
      expect(ringed[0].textContent).toContain(`${label} — no milestone`);
      expect(host.textContent).toContain(`Today · ${label}`);
      expect(host.textContent).toContain(sentence);
      expect(host.textContent).toContain(next.day.lead.headline);
      const open = [...host.querySelectorAll("a")].find((a) => /^Open /.test(a.textContent ?? ""))!;
      expect(open.getAttribute("href")).toBe(`/on-this-day/${next.day.slug}`);
      expect(open.textContent).toContain(`Open ${next.day.label}`);
    }
  });

  it("a dated day: its count, its span and its lead", () => {
    const iso = `2026-${BUSIEST.key}`;
    const { desk, phone } = render(iso);
    for (const host of [desk, phone]) {
      expect(host.textContent).toContain(`${plural(BUSIEST.events.length, "milestone")} dated today, ${span(BUSIEST)}.`);
      expect(host.textContent).toContain(BUSIEST.lead.headline);
      expect(host.querySelector('[aria-current="date"]')!.getAttribute("aria-label")).toMatch(new RegExp(`^${BUSIEST.label} — `));
    }
    // The desktop panel's line under the lead: year, kind, how many more.
    expect(desk.textContent).toContain(
      `${BUSIEST.lead.year} · ${KIND_MARK[BUSIEST.lead.kind].word} · + ${BUSIEST.events.length - 1} more`,
    );
  });

  it("the London date, not UTC's: 23:30 UTC on 25 Sep is the 26th", () => {
    expect(calendarToday(new Date("2026-09-25T23:30:00Z")).key).toBe("09-26");
    expect(londonDate(new Date("2026-09-25T23:30:00Z"))).toBe("2026-09-26");
  });
});

describe("the month grids", () => {
  const { desk, phone } = render(EMPTY);

  it("twelve months per layout, days 1 to the month's last in order, February always 29", () => {
    for (const host of [desk, phone]) {
      const months = grids(host);
      expect(months.length).toBe(12);
      months.forEach((s, i) => {
        const cells = cellsOf(s);
        expect(cells.length).toBe(MONTH_DAYS[i]);
        const numerals = cells.map((c) => (c.childNodes[0].textContent ?? "").trim());
        expect(numerals).toEqual(Array.from({ length: MONTH_DAYS[i] }, (_, j) => String(j + 1)));
      });
    }
  });

  it("no weekday header: the calendar has no year", () => {
    for (const host of [desk, phone]) {
      for (const s of grids(host)) {
        const grid = s.children[1].textContent ?? "";
        expect(grid).not.toMatch(/\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/i);
        expect(s.querySelector("thead, [role=columnheader]")).toBeNull();
      }
    }
  });

  it("a dated day is a link (desktop) or a button (phone) that says its date, count and lead; its count shows past 1", () => {
    grids(desk).forEach((s, i) => {
      cellsOf(s).forEach((c, j) => {
        const d = byKey.get(`${String(i + 1).padStart(2, "0")}-${String(j + 1).padStart(2, "0")}`);
        if (!d) return;
        expect(c.tagName).toBe("A");
        expect(c.getAttribute("href")).toBe(`/on-this-day/${d.slug}`);
        expect(c.getAttribute("aria-label")).toBe(`${d.label} — ${plural(d.events.length, "milestone")}: ${d.lead.headline}`);
        expect(c.hasAttribute("title")).toBe(false);
        const count = [...c.querySelectorAll("span")].map((x) => x.textContent);
        expect(count.includes(String(d.events.length))).toBe(d.events.length > 1);
      });
    });
    grids(phone).forEach((s, i) => {
      cellsOf(s).forEach((c, j) => {
        const d = byKey.get(`${String(i + 1).padStart(2, "0")}-${String(j + 1).padStart(2, "0")}`);
        if (!d) return;
        expect(c.tagName).toBe("BUTTON");
        expect(c.getAttribute("aria-label")).toBe(`${d.label} — ${plural(d.events.length, "milestone")}: ${d.lead.headline}`);
      });
    });
  });

  it("an undated day is not a link and reads \"<date> — no milestone\"", () => {
    for (const host of [desk, phone]) {
      grids(host).forEach((s, i) => {
        cellsOf(s).forEach((c, j) => {
          if (byKey.has(`${String(i + 1).padStart(2, "0")}-${String(j + 1).padStart(2, "0")}`)) return;
          expect(c.tagName).toBe("SPAN");
          expect(c.querySelector("a, button")).toBeNull();
          expect(c.textContent).toBe(`${j + 1}${j + 1} ${MONTHS[i]} — no milestone`);
        });
      });
    }
  });

  it("desktop: each month lists its dated days under the grid, every lead headline in the page", () => {
    grids(desk).forEach((s, i) => {
      const days = onThisDayDays.filter((d) => d.month === i + 1);
      const rows = [...s.querySelectorAll("ol a")];
      expect(rows.map((r) => r.getAttribute("href"))).toEqual(days.map((d) => `/on-this-day/${d.slug}`));
      rows.forEach((r, k) => {
        expect(r.textContent).toContain(days[k].lead.headline);
        // A row and its cell share a day number — the cross-highlight's key.
        expect(r.getAttribute("data-day")).toBe(String(days[k].day));
      });
    });
    expect(desk.querySelector("[title]")).toBeNull();
  });

  it("desktop: each month lights one day at rest, its cell and its row, as the artboard draws it", () => {
    const focus = byKey.get(EMPTY.slice(5)) ?? nextDated(EMPTY).day;
    grids(desk).forEach((s, i) => {
      const days = onThisDayDays.filter((d) => d.month === i + 1);
      if (!days.length) return;
      const want = days.find((d) => d.key === focus.key) ?? [...days].sort((a, b) => b.events.length - a.events.length || a.day - b.day)[0];
      const lit = [...s.querySelectorAll("[data-default]")];
      expect(lit.map((e) => e.tagName)).toEqual(["A", "A"]);
      for (const e of lit) expect(e.getAttribute("data-day")).toBe(String(want.day));
    });
  });

  it("one legend-and-tally strip per layout: every kind's word and count", () => {
    for (const host of [desk, phone]) {
      const strips = host.querySelectorAll('ul[aria-label="Milestones by kind"]');
      expect(strips.length).toBe(1);
      for (const [k, n] of Object.entries(onThisDayCounts)) {
        if (n) expect(strips[0].textContent).toContain(`${KIND_MARK[k as keyof typeof KIND_MARK].word} ${n}`);
      }
    }
  });
});

describe("the phone's month panels and month jumps", () => {
  it("each month's panel opens on today, else the Today panel's next date, else the month's busiest day", () => {
    for (const iso of [EMPTY, `2026-${BUSIEST.key}`]) {
      const { phone } = render(iso);
      const focus = byKey.get(iso.slice(5)) ?? nextDated(iso).day;
      grids(phone).forEach((s, i) => {
        const days = onThisDayDays.filter((d) => d.month === i + 1);
        if (!days.length) return;
        const want = days.find((d) => d.key === focus.key) ?? [...days].sort((a, b) => b.events.length - a.events.length || a.day - b.day)[0];
        const pressed = s.querySelectorAll('button[aria-pressed="true"]');
        expect(pressed.length).toBe(1);
        expect(pressed[0].getAttribute("aria-label")).toMatch(new RegExp(`^${want.label} — `));
        const open = [...s.querySelectorAll("a")].find((a) => a.getAttribute("href")?.startsWith("/on-this-day/"))!;
        expect(open.getAttribute("href")).toBe(`/on-this-day/${want.slug}`);
        expect(s.textContent).toContain(want.lead.headline);
        expect(s.textContent).toContain(`${want.label} · ${plural(want.events.length, "milestone")} · ${span(want)}`);
      });
    }
  });

  it("twelve month jumps to twelve month heads, and each head's \"Months ↑\" comes back", () => {
    const { phone } = render(EMPTY);
    const nav = phone.querySelector('nav[aria-label="Months"]')!;
    expect(nav.id).toBe("months");
    const jumps = [...nav.querySelectorAll("a")];
    expect(jumps.map((a) => a.getAttribute("href"))).toEqual(MONTHS.map((m) => `#month-${m.toLowerCase()}`));
    jumps.forEach((a, i) => {
      expect(phone.querySelector(`#month-${MONTHS[i].toLowerCase()}`)).not.toBeNull();
      expect(a.textContent).toBe(`${MONTHS[i].slice(0, 3)}${onThisDayDays.filter((d) => d.month === i + 1).length}`);
    });
    for (const s of grids(phone)) {
      const up = [...s.querySelectorAll('a[href="#months"]')];
      expect(up.length).toBe(1);
      expect(up[0].textContent).toBe("Months ↑");
    }
  });
});

/** The grid's gap at a width, read from the stylesheet's own rules. */
function calGridGap(css: string, width: number): number {
  let gap = Number(css.match(/\.calGrid\s*\{[^}]*\bgap:\s*(\d+)px/)![1]);
  const rules = [...css.matchAll(/@media \(max-width: (\d+)px\) \{\s*\.calGrid \{ gap: (\d+)px; \}/g)]
    .map((m) => ({ max: Number(m[1]), gap: Number(m[2]) }))
    .sort((a, b) => b.max - a.max);
  for (const r of rules) if (width <= r.max) gap = r.gap;
  return gap;
}
const fits = (gap: number, width: number) => 7 * 44 + 6 * gap <= width - 2 * 18;

describe("the grids fit, at the breakpoints the design sets", () => {
  const phoneCss = readFileSync("app/components/mobileOnThisDay.module.css", "utf8");
  const deskCss = readFileSync("app/on-this-day/onThisDay.module.css", "utf8");

  it("the phone grid is seven 44px columns, 6/4/2px apart at 390/375/360, and fits every width from 356 to 900", () => {
    expect(phoneCss).toMatch(/\.calGrid \{[^}]*grid-template-columns: repeat\(7, minmax\(0, 44px\)\)/);
    expect([390, 375, 360].map((w) => calGridGap(phoneCss, w))).toEqual([6, 4, 2]);
    for (let w = 356; w <= 900; w++) expect(fits(calGridGap(phoneCss, w), w), `${w}px`).toBe(true);
  });

  it("desktop: four months across from 1240, three from 901 to 1239", () => {
    expect(deskCss).toMatch(/\.months \{[^}]*grid-template-columns: repeat\(4, minmax\(0, 1fr\)\)/);
    const tablet = deskCss.match(/@media \(max-width: 1239px\) \{\n([\s\S]*?)\n\}/)![1];
    expect(tablet).toContain(".months { grid-template-columns: repeat(3, minmax(0, 1fr)); }");
    expect(deskCss).not.toMatch(/max-width: 1240px/);
  });

  it("a negative control: the checks catch what the first build shipped", () => {
    // The first build's breakpoint put 1240 itself at three months.
    expect(/max-width: 1240px/.test("@media (max-width: 1240px) { .calendar { grid-template-columns: repeat(3, 1fr); } }")).toBe(true);
    // A 6px gap at 360 does not fit: 7 × 44 + 6 × 6 = 344 > 324.
    expect(fits(6, 360)).toBe(false);
    expect(calGridGap(".calGrid { display: grid; gap: 6px; }", 360)).toBe(6);
    // And its screen-reader label named no lead: "16 August — 5 milestones".
    const d = byKey.get("08-16") ?? BUSIEST;
    expect(`${d.label} — ${plural(d.events.length, "milestone")}`).not.toBe(
      `${d.label} — ${plural(d.events.length, "milestone")}: ${d.lead.headline}`,
    );
  });
});
