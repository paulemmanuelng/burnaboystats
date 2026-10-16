import { cleanup, fireEvent, render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/updates",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileUpdates from "../../app/components/MobileUpdates";
import { updates, type Update } from "../../app/data/updates";
import styles from "../../app/components/mobileUpdates.module.css";

/**
 * Owner question #17 (live debug 15 Oct 2026, HA-5; Paul: "yes to all"): on a
 * phone the Saturday digest band after the third entry split the month into
 * two groups, each with its own sticky label, so "OCTOBER 2026 · 19 ENTRIES"
 * showed twice on one screen while the band was mid-screen. The band now sits
 * inside the third entry's month group: one label, stuck over the band and
 * the rest of the month.
 */

const MONTH = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
const entries = (n: number) => `${n} ${n === 1 ? "entry" : "entries"}`;
const labels = (c: HTMLElement) => [...c.querySelectorAll(`.${styles.dockMonth}`)].map((l) => l.textContent);
/** The labels a run of entries carries, one per month in order, counted over `all`. */
const labelsOf = (run: Update[], all: Update[]) =>
  run
    .map((u) => u.date.slice(0, 7))
    .filter((k, i, a) => a.indexOf(k) === i)
    .map((k) => `${MONTH.format(new Date(`${k}-01T00:00:00Z`))} · ${entries(all.filter((u) => u.date.startsWith(k)).length)}`);

afterEach(() => cleanup());

/**
 * Fixture feeds, newest first like the real one, so the cases below hold
 * whatever month the live feed is in. The live feed's own 3rd and 4th entries
 * share a month only until the next month's 3rd entry is logged; the cases
 * are pinned here instead (reviewer, 15 Oct 2026).
 */
const at = (date: string, category: Update["category"], n: number): Update => ({
  date,
  category,
  text: `Fixture entry ${n}`,
  href: `/fixture/${n}`,
});
/** The 3rd and 4th entries share a month: the case the finding saw on 15 Oct. */
const SHARED: Update[] = [
  at("2026-10-14", "Streaming", 1),
  at("2026-10-12", "Charts", 2),
  at("2026-10-10", "Certifications", 3),
  at("2026-10-08", "Charts", 4),
  at("2026-09-30", "Tours", 5),
  at("2026-09-20", "Charts", 6),
];
/** The 3rd entry ends its month: the band closes it, the next month has its own label. */
const ENDS: Update[] = [
  at("2026-11-04", "Streaming", 1),
  at("2026-11-02", "Charts", 2),
  at("2026-11-01", "Certifications", 3),
  at("2026-10-31", "Charts", 4),
  at("2026-10-20", "Tours", 5),
];
/** The 3rd entry starts its month: the month before keeps its own group. */
const STARTS: Update[] = [
  at("2026-11-04", "Streaming", 1),
  at("2026-11-02", "Charts", 2),
  at("2026-10-31", "Certifications", 3),
  at("2026-10-28", "Charts", 4),
  at("2026-10-20", "Tours", 5),
];
const band = (c: HTMLElement) => c.querySelector("#digest-m")!;
const rowsOf = (c: HTMLElement) => [...c.querySelectorAll(`.${styles.row}`)];

describe("#17: the month the digest band sits in is labelled once", () => {
  it("3rd and 4th entries in one month: one label, the band between them inside that month", () => {
    const { container } = render(<MobileUpdates items={SHARED} lastEntry="14 October 2026" subscribeEnabled />);
    expect(labels(container)).toEqual(["October 2026 · 4 entries", "September 2026 · 2 entries"]);
    const group = band(container).parentElement!;
    expect(group.classList.contains(styles.monthGroup)).toBe(true);
    expect(group.firstElementChild?.textContent).toBe("October 2026 · 4 entries");
    const rows = rowsOf(container);
    expect(rows.indexOf(band(container).previousElementSibling as Element)).toBe(2);
    expect(rows.indexOf(band(container).nextElementSibling as Element)).toBe(3);
  });

  it("3rd entry ends its month: the band closes that group, the next month labelled once after it", () => {
    const { container } = render(<MobileUpdates items={ENDS} lastEntry="4 November 2026" subscribeEnabled />);
    expect(labels(container)).toEqual(["November 2026 · 3 entries", "October 2026 · 2 entries"]);
    const group = band(container).parentElement!;
    expect(group.classList.contains(styles.monthGroup)).toBe(true);
    expect(group.firstElementChild?.textContent).toBe("November 2026 · 3 entries");
    expect(rowsOf(container).indexOf(band(container).previousElementSibling as Element)).toBe(2);
    expect(band(container).nextElementSibling).toBeNull();
    const next = group.nextElementSibling!;
    expect(next.classList.contains(styles.monthGroup)).toBe(true);
    expect(next.firstElementChild?.textContent).toBe("October 2026 · 2 entries");
  });

  it("3rd entry starts its month: the month before keeps its group, the band's month one label", () => {
    const { container } = render(<MobileUpdates items={STARTS} lastEntry="4 November 2026" subscribeEnabled />);
    expect(labels(container)).toEqual(["November 2026 · 2 entries", "October 2026 · 3 entries"]);
    const group = band(container).parentElement!;
    expect(group.firstElementChild?.textContent).toBe("October 2026 · 3 entries");
    const rows = rowsOf(container);
    expect(rows.indexOf(band(container).previousElementSibling as Element)).toBe(2);
    expect(rows.indexOf(band(container).nextElementSibling as Element)).toBe(3);
    expect(group.previousElementSibling?.firstElementChild?.textContent).toBe("November 2026 · 2 entries");
  });

  it("the live feed: one label per month with the band on, the same labels as with it off", () => {
    const on = render(<MobileUpdates items={updates} lastEntry="14 October 2026" subscribeEnabled />).container;
    expect(on.querySelector("#digest-m")).not.toBeNull();
    expect(labels(on)).toEqual(labelsOf(updates, updates));
    expect(new Set(labels(on)).size).toBe(labels(on).length);
    cleanup();
    const off = render(<MobileUpdates items={updates} lastEntry="14 October 2026" />).container;
    expect(off.querySelector("#digest-m")).toBeNull();
    expect(labels(off)).toEqual(labelsOf(updates, updates));
  });

  it("the live feed under a filter: the band follows its third entry (or its last), every month still labelled once", () => {
    const { container, getByRole } = render(<MobileUpdates items={updates} lastEntry="14 October 2026" subscribeEnabled />);
    const cats = [...new Set(updates.map((u) => u.category))];
    for (const c of cats) {
      const shown = updates.filter((u) => u.category === c);
      fireEvent.click(getByRole("button", { name: new RegExp(`^${c.replace(/[.*+?^${}()|[\]\\&]/g, "\\$&")} \\d+$`) }));
      expect(labels(container), c).toEqual(labelsOf(shown, shown));
      const b = band(container);
      const before = rowsOf(container).filter((r) => b.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_PRECEDING).length;
      expect(before, c).toBe(Math.min(3, shown.length));
      // un-press it again
      fireEvent.click(getByRole("button", { name: new RegExp(`^${c.replace(/[.*+?^${}()|[\]\\&]/g, "\\$&")} \\d+$`) }));
    }
  });

  it("a filter change keeps a half-typed address: the form is not remounted", () => {
    const { container, getByRole } = render(<MobileUpdates items={SHARED} lastEntry="14 October 2026" subscribeEnabled />);
    const input = container.querySelector<HTMLInputElement>("#digest-m input[type=email]")!;
    fireEvent.change(input, { target: { value: "fan@example.test" } });
    fireEvent.click(getByRole("button", { name: /^Charts \d+$/ }));
    fireEvent.click(getByRole("button", { name: /^Tours \d+$/ }));
    const now = container.querySelector<HTMLInputElement>("#digest-m input[type=email]")!;
    expect(now).toBe(input);
    expect(now.value).toBe("fan@example.test");
  });
});

describe("#17 negative control: the band main shipped", () => {
  it("origin/main labelled the first three entries, then the band, then the rest: the shared month twice", () => {
    // MobileUpdates.tsx on main: {months(shown.slice(0, 3), 0)} <SubscribeBox … /> {months(shown.slice(3), 3)},
    // each run under its own month labels.
    const shipped = [...labelsOf(SHARED.slice(0, 3), SHARED), ...labelsOf(SHARED.slice(3), SHARED)];
    expect(shipped).toEqual(["October 2026 · 4 entries", "October 2026 · 4 entries", "September 2026 · 2 entries"]);
    const { container } = render(<MobileUpdates items={SHARED} lastEntry="14 October 2026" subscribeEnabled />);
    expect(labels(container)).not.toEqual(shipped);
  });
});
