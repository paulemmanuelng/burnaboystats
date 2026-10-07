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
import { calendarToday, todaySentence, type OnThisDayToday } from "../../app/lib/onThisDay";

/**
 * V-otd-03: the calendar's Today panel kept the countdown's figure and its
 * word apart. Live in headless Chrome on 5 and 6 Oct 2026 the sentence wrapped
 * "Nothing is dated 6 October. Next: 7 October, in 1" / "day." at 1440 dark
 * and 390 light, and "… in 2" / "days." on 5 Oct at 1440 light and 390 dark;
 * measured in the live panel, 79 of the year's 205 empty-day sentences split
 * the count from "day(s)" at 1440. The home card already binds its figures
 * (keepFigures); the calendar's sentence did not. Both layouts print the same
 * todaySentence, so both are read here, and every empty day of a year is
 * checked through the function the panels call.
 */

const NBSP = " ";
/** A figure followed by an ordinary space and its word — a place a wrap can strand it. */
const stranded = (s: string) => /\d (?=[A-Z]|days?\b)/.test(s);
const noon = (t: number) => new Date(t + 12 * 3_600_000);

/** Every London day in a year whose calendar day has nothing dated on it. */
const emptyDays: OnThisDayToday[] = [];
for (let t = Date.UTC(2026, 0, 1); t < Date.UTC(2027, 0, 1); t += 86_400_000) {
  const today = calendarToday(noon(t));
  if (!today.day) emptyDays.push(today);
}
const oneDay = emptyDays.find((t) => t.next.ahead === 1)!;
const twoPlus = emptyDays.find((t) => t.next.ahead >= 2)!;

function panels(today: OnThisDayToday) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(`${today.iso}T12:00:00Z`));
  try {
    const page = renderToStaticMarkup(CalendarPage());
    const phone = renderToStaticMarkup(<MobileOnThisDayIndex today={calendarToday(new Date())} />);
    expect(page).toContain(phone);
    const desk = document.createElement("div");
    desk.innerHTML = page.replace(phone, "");
    const mob = document.createElement("div");
    mob.innerHTML = phone;
    return [desk, mob].map((host) => {
      const ps = [...host.querySelectorAll("p")].filter((p) => p.textContent!.startsWith("Nothing is dated"));
      expect(ps.length).toBe(1);
      return ps[0].textContent!;
    });
  } finally {
    vi.useRealTimers();
  }
}

describe("V-otd-03: the Today panel holds each figure to its word", () => {
  it("the year has empty days one and several days before the next date", () => {
    expect(emptyDays.length).toBeGreaterThan(100);
    expect(oneDay).toBeDefined();
    expect(twoPlus).toBeDefined();
  });

  it.each([
    ["1 day out (V-otd-04: tomorrow)", oneDay],
    ["in 2+ days", twoPlus],
  ])("%s: both layouts bind the count to 'day(s)' and each day to its month", (_, today) => {
    const n = today.next.ahead;
    for (const text of panels(today)) {
      expect(stranded(text), JSON.stringify(text)).toBe(false);
      // A one-day gap reads "tomorrow" (V-otd-04); a count keeps its word.
      expect(text).toContain(n === 1 ? ", tomorrow." : `, in ${n}${NBSP}days.`);
      expect(text).toContain(`Nothing is dated ${today.label.replace(" ", NBSP)}.`);
      expect(text).toContain(`Next: ${today.next.day.label.replace(" ", NBSP)},`);
    }
  });

  it("every empty day of the year: no figure is left before an ordinary space", () => {
    const open = emptyDays.map(todaySentence).filter(stranded);
    expect(open).toEqual([]);
  });

  it("a dated day reads as before", () => {
    let dated = calendarToday(noon(Date.UTC(2026, 0, 1)));
    for (let t = Date.UTC(2026, 0, 1); !dated.day; t += 86_400_000) dated = calendarToday(noon(t));
    expect(todaySentence(dated)).toMatch(/^\d+ milestones? dated today, \d{4}(–\d{4})?\.$/);
  });

  it("negative control: the shipped sentence leaves the count free to wrap", () => {
    // The live 6 Oct 2026 text, verbatim as the panel served it.
    const shipped = "Nothing is dated 6 October. Next: 7 October, in 1 day.";
    expect(stranded(shipped)).toBe(true);
  });
});
