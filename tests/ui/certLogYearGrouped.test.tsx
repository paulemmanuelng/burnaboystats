import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CertificationsPage from "../../app/certifications/page";
import { certHistoryYears, intlCertHistory, type CertEvent } from "../../app/data/certifications";
import deskStyles from "../../app/certifications/certifications.module.css";
import phoneStyles from "../../app/components/mobileCerts.module.css";
import { shortDay } from "../../app/lib/dates";
import { read, winning } from "../fixtures/cssRules";

/**
 * The announcement log, year-grouped (design review 8 Oct 2026, J1-6; fix 19,
 * option (b), approved 8 Oct). Only a fifth of the log's rows carry a day, out
 * of order within their years, so a date column would imply an order the log
 * does not follow. Both layouts:
 *
 *   - kicker "Year by year", heading "Every announcement, by year";
 *   - the year's rows in the log's own order, reversed;
 *   - a label: "2026 · {n} · latest logged first" on the desktop, a sticky
 *     "2026 · {n}" under the phone's back bar (a label, not a fold);
 *   - a row's day, where it has one, at the end of its meta line; no date
 *     column, no "Date not published", no dated-row share.
 */

const ROOT = join(__dirname, "..", "..");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const inYear = (y: number) => intlCertHistory.filter((e) => e.year === y);
const ORDER = intlCertHistory.map((e) => `${e.title}|${e.country}|${e.level}|${e.x ?? ""}`);

const layouts = {
  desktop: {
    root: () => document.getElementById("cert-by-year")!,
    rail: () => document.getElementById("cert-by-year")!,
    s: deskStyles,
    meta: deskStyles.eventMeta,
    label: (y: number) => `${y} · ${inYear(y).length} · latest logged first`,
  },
  phone: {
    root: () => document.querySelector<HTMLElement>('[aria-label="Filter the log by year"]')!.closest("section")!,
    rail: () => document.querySelector<HTMLElement>('[aria-label="Filter the log by year"]')!,
    s: phoneStyles,
    meta: phoneStyles.rowMeta,
    label: (y: number) => `${y} · ${inYear(y).length}`,
  },
} as const;

const chip = (rail: HTMLElement, y: number) =>
  within(rail).getAllByRole("button").find((b) => b.textContent?.startsWith(String(y)))!;

describe.each(Object.entries(layouts))("the %s log, year by year", (_name, l) => {
  it("kicker 'Year by year', heading 'Every announcement, by year'", () => {
    render(<CertificationsPage />);
    const root = l.root();
    expect(words(root.querySelector(`.${l.s.logKicker}`))).toBe("Year by year");
    expect(words(root.querySelector("h2"))).toBe("Every announcement, by year");
  });

  it("every year: the rows in the log's own order, reversed, under the year's label", async () => {
    render(<CertificationsPage />);
    const user = userEvent.setup();
    for (const y of certHistoryYears) {
      await user.click(chip(l.rail(), y));
      const root = l.root();
      const rows = [...root.getElementsByClassName(l.s.eventRow)];
      expect(rows.map((r) => words(r.querySelector(`.${l.s.eventTitle}`))), String(y)).toEqual(
        inYear(y).reverse().map((e) => e.title),
      );
      const labels = root.querySelectorAll(`.${l.s.logLabel}`);
      expect(labels, String(y)).toHaveLength(1);
      expect(words(labels[0]), String(y)).toBe(l.label(y));
      // The label sits over the list, before its first row.
      if (rows.length) expect(labels[0].compareDocumentPosition(rows[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
    // The data's own order is untouched.
    expect(intlCertHistory.map((e) => `${e.title}|${e.country}|${e.level}|${e.x ?? ""}`)).toEqual(ORDER);
  });

  it("a row's meta ends with its day if, and only if, the row has one", async () => {
    render(<CertificationsPage />);
    const user = userEvent.setup();
    let dated = 0;
    for (const y of certHistoryYears) {
      await user.click(chip(l.rail(), y));
      const rows = [...l.root().getElementsByClassName(l.s.eventRow)];
      const events: CertEvent[] = inYear(y).reverse();
      rows.forEach((r, i) => {
        const meta = r.querySelector(`.${l.meta}`)!;
        const time = meta.querySelector("time");
        if (events[i].date) {
          dated++;
          expect(words(meta).endsWith(` · ${shortDay(events[i].date!)}`), `${y} ${events[i].title}`).toBe(true);
          expect(time!.getAttribute("datetime")).toBe(events[i].date);
          expect(meta.lastElementChild).toBe(time);
        } else expect(time, `${y} ${events[i].title}`).toBeNull();
      });
    }
    expect(dated).toBe(intlCertHistory.filter((e) => e.date).length);
    expect(dated).toBeGreaterThan(0);
  });

  it("no date column, no 'Date not published', no 'newest first'", () => {
    render(<CertificationsPage />);
    const text = words(l.root());
    expect(text).not.toMatch(/Date not published|newest first|The dated log|Certifications by year/i);
    for (const r of l.root().getElementsByClassName(l.s.eventRow)) expect(r.firstElementChild?.tagName).not.toBe("TIME");
  });
});

describe("the phone label sticks under the back bar", () => {
  const css = read(join(ROOT, "app/components/mobileCerts.module.css"));
  const any = () => true;
  it("position sticky at the 69px bar, and no fold", () => {
    expect(winning(css, ".logLabel", "position", any)).toBe("sticky");
    expect(winning(css, ".logLabel", "top", any)).toBe("calc(69px + env(safe-area-inset-top, 0px))");
    render(<CertificationsPage />);
    const label = layouts.phone.root().querySelector(`.${phoneStyles.logLabel}`)!;
    expect(label.closest("details")).toBeNull();
    expect(label.querySelector("button, summary")).toBeNull();
    // Inside the list, so it sticks only while the list scrolls past.
    expect(label.parentElement!.className).toBe(phoneStyles.list);
  });

  it("the list it sticks over holds no control, in any year (focusClearsStickyBars' OVER_NO_CONTROL)", async () => {
    render(<CertificationsPage />);
    const user = userEvent.setup();
    for (const y of certHistoryYears) {
      await user.click(chip(layouts.phone.rail(), y));
      const list = layouts.phone.root().querySelector(`.${phoneStyles.logLabel}`)!.parentElement!;
      expect(list.querySelectorAll("a[href], button, input, select, textarea, summary, [tabindex]"), String(y)).toHaveLength(0);
    }
  });
});

describe("a row's day never breaks across lines", () => {
  // Measured 14 Oct 2026 in headless Chrome: the phone meta split "10 / AUG"
  // at 375 and 402. The <time> holds a plain space, so the sheet keeps it whole.
  const nowrap = (f: string) =>
    rules(read(join(ROOT, f))).filter((r) => r.media === null && r.selector === ".eventRow time").map((r) => decl(r.body, "white-space"));
  it("both sheets hold .eventRow time on one line (the day sits in a <time>: the test above)", () => {
    for (const f of ["app/components/mobileCerts.module.css", "app/certifications/certifications.module.css"]) expect(nowrap(f), f).toEqual(["nowrap"]);
  });
  it("negative control: the phone sheet's row rules as the review read them (f0810e2a) keep no day whole", () => {
    // mobileCerts.module.css on f0810e2a, verbatim: the rules a row's meta had.
    const REVIEWED = `.eventTitle { font-weight: 600; font-size: 14.5px; line-height: 1.25; }
.eventRow .rowMeta { margin-top: 4px; }
.eventRow .badge { flex: none; }`;
    expect(rules(REVIEWED).filter((r) => r.selector === ".eventRow time")).toHaveLength(0);
  });
});

describe("negative controls: the log as shipped", () => {
  it("main's own heading words and row order fail", () => {
    // CertHistoryByYear.tsx / MobileCerts.tsx on main e85e6efe, verbatim.
    const SHIPPED = { kicker: "The dated log", h2: "Certifications by year" };
    expect(SHIPPED.kicker).not.toBe("Year by year");
    expect(SHIPPED.h2).not.toBe("Every announcement, by year");
    // Main listed the year in the log's own order: its first 2026 row is not the first row now.
    const y = certHistoryYears[0];
    const shipped = inYear(y).map((e) => e.title);
    const now = inYear(y).reverse().map((e) => e.title);
    expect(shipped).not.toEqual(now);
    expect(`${inYear(y)[0].title}|${inYear(y)[0].country}`).not.toBe(`${inYear(y).at(-1)!.title}|${inYear(y).at(-1)!.country}`);
  });
});
