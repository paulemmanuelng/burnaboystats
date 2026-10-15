import { cleanup, fireEvent, render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

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

import UpdatesFeed from "../../app/components/UpdatesFeed";
import { updates, type UpdateCategory } from "../../app/data/updates";
import styles from "../../app/updates/updates.module.css";
import { read, winning } from "../fixtures/cssRules";

/**
 * Job 4 · J4-8, fix 84: the /updates sticky strip. One 48px strip under the
 * 69px masthead over the whole feed: the month in view and its count under
 * the filter, pinned left; today's chips in today's order ("All {n}", then
 * the seven categories most-logged first, each with its count), the pressed
 * one N2; "Top" pinned right, no glyph. "Filter" and the "{n} entries"
 * counter are gone: the strip carries the month's count.
 *
 * Counts, order and the first month are computed here from the feed itself.
 */

const CSS = read("app/updates/updates.module.css");
const MONTH = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
const monthOf = (iso: string) => MONTH.format(new Date(`${iso}T00:00:00Z`));
const entries = (n: number) => `${n} ${n === 1 ? "entry" : "entries"}`;
/** The first month of a run of entries and how many it holds. */
const firstMonth = (list: typeof updates) => {
  const key = list[0].date.slice(0, 7);
  return `${monthOf(list[0].date)} · ${entries(list.filter((u) => u.date.startsWith(key)).length)}`;
};
const any = (m: string | null) => m === null || /min-width/.test(m);

const counts = updates.reduce<Record<string, number>>((a, u) => ({ ...a, [u.category]: (a[u.category] ?? 0) + 1 }), {});
const ORDER = (Object.keys(counts) as UpdateCategory[]).sort((a, b) => counts[b] - counts[a]);

function strip(html: string) {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host.querySelector<HTMLElement>(`[data-dock="desk-strip"]`)!;
}
/** The strip's parts, left to right: the month, the chip row, Top. */
const parts = (s: HTMLElement) => [...s.querySelector(`.${styles.filterPad}`)!.children];

describe("J4-8 / fix 84: the /updates strip", () => {
  afterEach(cleanup);
  const s = strip(renderToStaticMarkup(<UpdatesFeed items={updates} />));

  it("is sticky at 69, 48px with its rule, on --bg, data-dock=desk-strip", () => {
    expect(s).not.toBeNull();
    expect(s.classList.contains(styles.dockStrip)).toBe(true);
    expect(winning(CSS, ".dockStrip", "position", any)).toBe("sticky");
    expect(winning(CSS, ".dockStrip", "top", any)).toBe("69px");
    expect(winning(CSS, ".dockStrip", "height", any)).toBe("48px");
    expect(winning(CSS, ".dockStrip", "background", any)).toBe("var(--bg)");
    expect(winning(CSS, ".dockStrip", "border-bottom", any)).toBe("1px solid var(--rule-soft)");
  });

  it("carries the month · the chips · Top, and nothing else", () => {
    const [month, rail, top] = parts(s);
    expect(parts(s)).toHaveLength(3);
    expect(month.classList.contains(styles.stripMonth)).toBe(true);
    expect(rail.getAttribute("role")).toBe("group");
    expect(top.tagName).toBe("A");
  });

  it("the month label is the first month and its count", () => {
    expect(parts(s)[0].textContent).toBe(firstMonth(updates));
  });

  it("the chips: All {n}, then the categories most-logged first, each with its count", () => {
    const chips = [...parts(s)[1].querySelectorAll("button")].map((b) => [
      (b.textContent ?? "").replace(/\d+$/, ""),
      b.querySelector(`.${styles.chipCount}`)?.textContent,
    ]);
    expect(chips).toEqual([["All", String(updates.length)], ...ORDER.map((c) => [c, String(counts[c])])]);
  });

  it("Top jumps to the entries, a gold text link with no glyph", () => {
    const top = parts(s)[2];
    expect(top.getAttribute("href")).toBe("#entries");
    expect(top.textContent).toBe("Top");
    expect(winning(CSS, ".dockTop", "color", any)).toBe("var(--gold)");
  });

  it("a pressed category re-labels the month with that category's count", () => {
    const { container } = render(<UpdatesFeed items={updates} />);
    const live = container.querySelector<HTMLElement>(`[data-dock="desk-strip"]`)!;
    for (const c of [ORDER[ORDER.length - 1], ORDER[0]]) {
      const chip = [...live.querySelectorAll("button")].find((b) => (b.textContent ?? "").startsWith(c))!;
      fireEvent.click(chip);
      expect(chip.getAttribute("aria-pressed")).toBe("true");
      expect(live.querySelector(`.${styles.stripMonth}`)?.textContent, c).toBe(firstMonth(updates.filter((u) => u.category === c)));
    }
  });

  it("every month the strip can name is a jump target with an id", () => {
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(<UpdatesFeed items={updates} />);
    const keys = [...new Set(updates.map((u) => u.date.slice(0, 7)))];
    expect([...host.querySelectorAll(`.${styles.month}`)].map((m) => m.id)).toEqual(keys.map((k) => `month-${k}`));
  });
});

describe("J4-8 / fix 84 negative control: the shipped filter band", () => {
  it("main e85e6efe's band carried 'Filter' and an '{n} entries' counter beside the chips", () => {
    // UpdatesFeed.tsx:58–92 on main, as rendered (class names abridged).
    const shipped = `<section class="updates-module__x__bandSurface"><div class="updates-module__x__wide updates-module__x__filterPad"><span class="updates-module__x__filterLabel">Filter</span><button type="button" aria-pressed="true" class="updates-module__x__chip">All<span class="updates-module__x__chipCount">344</span></button><span class="updates-module__x__shown">344 entries</span></div></section>`;
    const host = document.createElement("div");
    host.innerHTML = shipped;
    expect(host.querySelector('[data-dock="desk-strip"]')).toBeNull();
    const band = host.querySelector('[class*="filterPad"]')!;
    const kids = [...band.children].map((k) => k.textContent);
    expect(kids).toContain("Filter");
    expect(kids.some((k) => /^\d+ entries$/.test(k ?? ""))).toBe(true);
  });
});
