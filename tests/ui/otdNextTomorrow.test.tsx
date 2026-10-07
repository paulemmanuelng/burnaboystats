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
import OnThisDayBand from "../../app/components/OnThisDayBand";
import MobileOnThisDayCard from "../../app/components/MobileOnThisDayCard";
import {
  calendarToday,
  homeWhen,
  inDays,
  keepFigures,
  keepSeparators,
  onThisDayFor,
  todaySentence,
} from "../../app/lib/onThisDay";

/**
 * V-otd-04 (full-site debug, 5 Oct 2026).
 *
 * Live on 6 October 2026 the calendar's Today panel read "Nothing is dated
 * 6 October. Next: 7 October, in 1 day." on both layouts (read in headless
 * Chrome at 1440 dark and 390 light). A one-day gap is tomorrow. The home
 * card's kicker counts with the same helper ("coming up in 1 day · …"), so
 * it says "coming up tomorrow · …" too. Two days and more still count.
 *
 * Both pages render on the server from the London date, so this renders
 * them at noon UTC on the dates the data gives a one-day gap, and checks the
 * desktop and phone markup each.
 */

const SHIPPED_LIVE = "Nothing is dated 6 October. Next: 7 October, in 1 day.";

/** A countdown that names a one-day gap as a count — with an ordinary or a
 *  no-break space (V-otd-03 binds each figure to its word). */
const oneDayCount = /\bin 1\sday\b/;

const noon = (t: number) => new Date(t + 12 * 3_600_000);
const days = (from: number, to: number) => {
  const out: Date[] = [];
  for (let t = from; t < to; t += 86_400_000) out.push(noon(t));
  return out;
};
/** A year of dates from 1 October 2026. */
const YEAR = days(Date.UTC(2026, 9, 1), Date.UTC(2027, 9, 1));

const calendarAt = (now: Date) => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(now);
  try {
    const page = renderToStaticMarkup(CalendarPage());
    const phone = renderToStaticMarkup(<MobileOnThisDayIndex today={calendarToday(new Date())} />);
    expect(page).toContain(phone);
    const desk = document.createElement("div");
    desk.innerHTML = page.replace(phone, "");
    const mobile = document.createElement("div");
    mobile.innerHTML = phone;
    return { desk, phone: mobile };
  } finally {
    vi.useRealTimers();
  }
};

const homeAt = (now: Date) => {
  const pick = onThisDayFor(now)!;
  const host = (s: string) => {
    const el = document.createElement("div");
    el.innerHTML = s;
    return el;
  };
  return {
    pick,
    desk: host(renderToStaticMarkup(<OnThisDayBand pick={pick} />)),
    phone: host(renderToStaticMarkup(<MobileOnThisDayCard pick={pick} />)),
  };
};

describe("a coming date one day off is tomorrow", () => {
  it("the countdown: tomorrow for one day, a count from two", () => {
    expect(inDays(1)).toBe("tomorrow");
    expect(inDays(2)).toBe("in 2 days");
    expect(inDays(11)).toBe("in 11 days");
  });

  it("the Today panel, both layouts, on the first empty day before a dated one", () => {
    const now = YEAR.find((d) => {
      const t = calendarToday(d);
      return !t.day && t.next.ahead === 1;
    });
    expect(now, "no empty day before a dated one in the year").toBeDefined();
    const t = calendarToday(now!);
    const sentence = keepFigures(`Nothing is dated ${t.label}. Next: ${t.next.day.label}, tomorrow.`);
    const { desk, phone } = calendarAt(now!);
    for (const host of [desk, phone]) {
      expect(host.textContent).toContain(sentence);
      expect(host.textContent).not.toMatch(oneDayCount);
    }
  });

  it("the Today panel's sentence on every such day of the year, and a count on the others", () => {
    let tomorrow = 0;
    for (const d of YEAR) {
      const t = calendarToday(d);
      if (t.day) continue;
      const s = todaySentence(t);
      expect(s).not.toMatch(oneDayCount);
      if (t.next.ahead === 1) {
        tomorrow++;
        expect(s).toBe(keepFigures(`Nothing is dated ${t.label}. Next: ${t.next.day.label}, tomorrow.`));
      } else {
        expect(s).toBe(keepFigures(`Nothing is dated ${t.label}. Next: ${t.next.day.label}, in ${t.next.ahead} days.`));
      }
    }
    expect(tomorrow).toBeGreaterThan(0);
  });

  it("the home card's kicker, both layouts, the day before an anniversary", () => {
    const now = YEAR.find((d) => {
      const p = onThisDayFor(d)!;
      return p.mode === "coming" && p.ahead === 1;
    });
    expect(now, "no day before an anniversary in the year").toBeDefined();
    const { pick, desk, phone } = homeAt(now!);
    expect(homeWhen(pick)).toBe(`coming up tomorrow · ${pick.day.label}`);
    for (const host of [desk, phone]) {
      expect(host.textContent).toContain(keepFigures(keepSeparators(`On this day · coming up tomorrow · ${pick.day.label}`)));
      expect(host.textContent).not.toMatch(oneDayCount);
    }
  });

  it("the home card still counts a gap of two days and more", () => {
    const now = YEAR.find((d) => {
      const p = onThisDayFor(d)!;
      return p.mode === "coming" && p.ahead > 1;
    });
    expect(now).toBeDefined();
    const { pick, desk, phone } = homeAt(now!);
    for (const host of [desk, phone]) {
      expect(host.textContent).toContain(
        keepFigures(keepSeparators(`On this day · coming up in ${pick.ahead} days · ${pick.day.label}`)),
      );
    }
  });

  it("a negative control: the check refuses the line the site shipped on 6 October", () => {
    expect(SHIPPED_LIVE).toMatch(oneDayCount);
  });
});
