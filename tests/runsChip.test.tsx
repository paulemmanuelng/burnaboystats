import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RevenuePage from "../app/records/tours/revenue/page";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { RUNS_HEADING, RUNS_LEDE, runYear, runsCountLine, shortDates } from "../app/lib/multiNightRuns";
import { RUNS_VIEW, chipOrder, nightCounts, railChips } from "../app/lib/showsChips";
import { compactGross } from "../app/lib/grossLabel";
import { trees } from "./fixtures/phoneTrees";

/**
 * The "Multi-night runs" chip (the owner, 4 Oct 2026, on the shows page's
 * rail — "ALL 82 · BURNA BOY 32 · TIWA SAVAGE 16 …": "let's [take] the
 * multi-night runs and put it here, show [it next] to the All, that is in
 * between all and burna boy").
 *
 * The chip sits second, between All and Burna Boy, on both layouts; its count
 * is the runs' own, from revenueStands. On, it swaps the single nights for the
 * runs in the board's row format under RUNS_LEDE; All stays every single night
 * and no run joins it or any artist's count. The section the runs had beneath
 * the board is gone from both layouts. Wording, gold and headings of the view
 * itself: tests/multiNightRuns.test.tsx.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const HIS = "Burna Boy";
const counts = nightCounts(revenueShows.map((s) => s.artist));
const runNights = revenueStands.reduce((t, s) => t + s.shows, 0);

function mount() {
  const r = render(<RevenuePage />);
  const desktop = r.container.querySelector('[class*="desktopOnly"]') as HTMLElement;
  const phone = [...r.container.querySelectorAll("main > div")].find((d) => /screen/.test(d.className)) as HTMLElement;
  return { ...r, layouts: { desktop, phone } };
}
/** A chip's label, without its count. */
const label = (b: Element) => b.childNodes[0].textContent;
const chipsOf = (tree: HTMLElement) => [...tree.querySelectorAll("button[aria-pressed]")];
/** A chip by its label (its first text node), read from the DOM: getByRole
 *  over a whole layout of 82 rows takes seconds in jsdom. */
const chip = (tree: HTMLElement, name: string) => chipsOf(tree).find((b) => label(b) === name) as HTMLElement;
const live = (tree: HTMLElement) => text(tree.querySelector('[aria-live="polite"]'));
/** The rows a layout is showing: the desktop's table rows, the phone's row divs. */
const rowsOf = (what: "desktop" | "phone", tree: HTMLElement) =>
  what === "desktop"
    ? [...tree.querySelectorAll('[role="table"] [role="row"]')].slice(1)
    : [...tree.querySelectorAll('[class*="showRow"]')];
const ALL = { desktop: "All artists", phone: "All" } as const;
const WHATS = ["desktop", "phone"] as const;

// ── The order ───────────────────────────────────────────────────────────────
describe("the rail: All, Multi-night runs, then the artists by nights", () => {
  it("railChips puts the runs second, counted in runs", () => {
    const chips = railChips("All", counts, revenueShows.length, revenueStands.length);
    expect(chips.map((c) => c.label)).toEqual(["All", RUNS_HEADING, ...chipOrder(counts)]);
    expect(chips[0]).toEqual({ key: null, label: "All", count: revenueShows.length });
    expect(chips[1]).toEqual({ key: RUNS_VIEW, label: RUNS_HEADING, count: revenueStands.length });
    expect(chips[2].label).toBe(HIS);
  });

  it("no runs, no chip — the rail is as it was", () => {
    expect(railChips("All", counts, revenueShows.length, 0).map((c) => c.label)).toEqual(["All", ...chipOrder(counts)]);
  });

  it.each(WHATS)("%s: rendered in that order, the runs chip carrying revenueStands' count", (what) => {
    const m = mount();
    const tree = m.layouts[what];
    const chips = chipsOf(tree);
    expect(chips.map(label)).toEqual([ALL[what], RUNS_HEADING, ...chipOrder(counts)]);
    expect(text(chips[0].querySelector('[class*="chipCount"]'))).toBe(String(revenueShows.length));
    expect(text(chips[1].querySelector('[class*="chipCount"]'))).toBe(String(revenueStands.length));
    expect(text(chips[2].querySelector('[class*="chipCount"]'))).toBe(String(counts[HIS]));
    // The same chip, styled as every other: one class list for all of them.
    expect(chips[1].className).toBe(chips[2].className);
    m.unmount();
  });

  /** The order this block asks for. */
  const inOrder = (labels: (string | null)[], all: string) =>
    JSON.stringify(labels) === JSON.stringify([all, RUNS_HEADING, ...chipOrder(counts)]);

  it("negative control: the rail as it shipped (All, then Burna Boy) fails the order", () => {
    // The owner's screenshot of the live phone rail, 4 Oct 2026: "ALL 82 ·
    // BURNA BOY 32 · TIWA SAVAGE 16 · …" — All, then the artists, no runs.
    const shipped = ["All", ...chipOrder(counts)];
    expect(shipped.slice(0, 3)).toEqual(["All", "Burna Boy", "Tiwa Savage"]);
    expect(inOrder(shipped, "All")).toBe(false);
    const m = mount();
    expect(inOrder(chipsOf(m.layouts.phone).map(label), "All")).toBe(true);
    expect(inOrder(chipsOf(m.layouts.desktop).map(label), "All artists")).toBe(true);
    m.unmount();
  });
});

// ── The view ────────────────────────────────────────────────────────────────
describe("selecting the chip shows exactly the runs, under RUNS_LEDE", () => {
  it.each(WHATS)("%s", (what) => {
    const m = mount();
    const tree = m.layouts[what];
    fireEvent.click(chip(tree, RUNS_HEADING));
    expect(chip(tree, RUNS_HEADING).getAttribute("aria-pressed")).toBe("true");
    expect(chip(tree, ALL[what]).getAttribute("aria-pressed")).toBe("false");
    const rows = rowsOf(what, tree);
    expect(rows.length).toBe(revenueStands.length);
    revenueStands.forEach((s, i) => {
      // In order, each naming its artist where a night's row does.
      expect(text(rows[i])).toContain(s.venue);
      expect(text(rows[i])).toContain(what === "desktop" ? `$${s.revenue.toLocaleString("en-US")}` : compactGross(s.revenue));
      // Never a rank: the run mark stands in the rank's place.
      expect(rows[i].querySelector('[class*="runRank"]')).not.toBeNull();
      expect(text(rows[i].firstElementChild)).toBe("Run");
    });
    if (what === "phone") {
      revenueStands.forEach((s, i) => {
        expect(text(rows[i].querySelector('[class*="metaSplit"]'))).toBe(`${s.artist} · ${s.city} · ${runYear(s.dates)}`);
      });
    } else {
      revenueStands.forEach((s, i) => expect(text(rows[i].children[1])).toBe(s.artist));
      // A combined total is never set against the single nights' scale.
      expect(tree.querySelectorAll('[class*="scaleFill"]').length).toBe(0);
    }
    // RUNS_LEDE, verbatim, then the derived split note, above the rows.
    const lede = [...tree.querySelectorAll("p")].find((p) => text(p).startsWith(RUNS_LEDE))!;
    expect(lede).toBeTruthy();
    expect(text(lede)).toMatch(/No per-night split is invented for them: each total would sit in the top \w+ of a board of single nights it never had\.$/);
    expect(lede.compareDocumentPosition(rows[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    // The count line reads like an artist's, derived.
    expect(live(tree)).toBe(runsCountLine(revenueStands.length, runNights));
    m.unmount();
  });

  it("the count line and the short dates, from the data's words", () => {
    expect(runsCountLine(revenueStands.length, runNights)).toBe(`${revenueStands.length} multi-night runs · ${runNights} nights`);
    expect(runsCountLine(1, 2)).toBe("1 multi-night run · 2 nights");
    expect(shortDates("28–29 November and 1 December 2021")).toBe("28–29 Nov & 1 Dec 2021");
    expect(shortDates("24–25 February 2024")).toBe("24–25 Feb 2024");
    for (const s of revenueStands) expect(runYear(s.dates)).toMatch(/^\d{4}$/);
    expect(() => runYear("24–25 February")).toThrow();
  });

  // One mount and two clicks a test: a whole-page render per click is the
  // slow part in jsdom, and plain `vitest run` gives each test 5 s.
  it.each(WHATS)("%s: selecting it again returns to every single night", (what) => {
    const m = mount();
    const tree = m.layouts[what];
    fireEvent.click(chip(tree, RUNS_HEADING));
    fireEvent.click(chip(tree, RUNS_HEADING));
    expect(rowsOf(what, tree).length).toBe(revenueShows.length);
    expect(chip(tree, ALL[what]).getAttribute("aria-pressed")).toBe("true");
    expect(text(tree).includes(RUNS_LEDE)).toBe(false);
    m.unmount();
  });

  it.each(WHATS)("%s: All returns to every single night", (what) => {
    const m = mount();
    const tree = m.layouts[what];
    fireEvent.click(chip(tree, RUNS_HEADING));
    fireEvent.click(chip(tree, ALL[what]));
    expect(rowsOf(what, tree).length).toBe(revenueShows.length);
    expect(text(tree).includes(RUNS_LEDE)).toBe(false);
    m.unmount();
  });

  it.each(WHATS)("%s: an artist's chip from the runs goes straight to their nights", (what) => {
    const m = mount();
    const tree = m.layouts[what];
    fireEvent.click(chip(tree, RUNS_HEADING));
    fireEvent.click(chip(tree, HIS));
    expect(rowsOf(what, tree).length).toBe(counts[HIS]);
    expect(chip(tree, RUNS_HEADING).getAttribute("aria-pressed")).toBe("false");
    m.unmount();
  });
});

// ── No leak ─────────────────────────────────────────────────────────────────
describe("the runs never join All or an artist's nights", () => {
  /** A run's figure as each layout prints a gross. */
  const runGross = (what: "desktop" | "phone", s: (typeof revenueStands)[number]) =>
    what === "desktop" ? `$${s.revenue.toLocaleString("en-US")}` : compactGross(s.revenue);

  it("the data: no run's gross is a single night's", () => {
    const nights = new Set(revenueShows.map((s) => s.revenue));
    for (const s of revenueStands) expect(nights.has(s.revenue), s.venue).toBe(false);
  });

  it.each(WHATS)("%s: All counts and shows the single nights only; Burna Boy's chip his nights only", (what) => {
    const m = mount();
    const tree = m.layouts[what];
    expect(text(chip(tree, ALL[what]).querySelector('[class*="chipCount"]'))).toBe(String(revenueShows.length));
    const all = rowsOf(what, tree).map((r) => text(r));
    expect(all.length).toBe(revenueShows.length);
    fireEvent.click(chip(tree, HIS));
    const his = rowsOf(what, tree).map((r) => text(r));
    expect(his.length).toBe(revenueShows.filter((s) => s.artist === HIS).length);
    expect(text(chip(tree, HIS).querySelector('[class*="chipCount"]'))).toBe(String(counts[HIS]));
    for (const s of revenueStands) {
      for (const row of [...all, ...his]) expect(row.includes(runGross(what, s)), `${s.venue} leaked: ${row}`).toBe(false);
    }
    m.unmount();
  });
});

// ── The old section ─────────────────────────────────────────────────────────
describe("the standalone runs section is gone from both layouts", () => {
  const page = trees(renderToStaticMarkup(<RevenuePage />));
  /** Any section headed by the runs' heading, or the old list's markup. */
  const oldSection = (tree: Element) =>
    [...tree.querySelectorAll("section")].filter(
      (s) => /runs-title/.test(s.getAttribute("aria-labelledby") ?? "") || s.querySelector('[class*="standsList"], [class*="runsList"]'),
    );

  it.each(["desktop", "phone"] as const)("%s: not in the page as served", (what) => {
    expect(oldSection(page[what]!)).toEqual([]);
    expect(text(page[what]!)).not.toContain(RUNS_LEDE);
    // The heading words print once, on the chip.
    expect(text(page[what]!).split(RUNS_HEADING).length - 1).toBe(1);
  });

  it("the sources no longer carry it", () => {
    const src = read("app/records/tours/revenue/page.tsx");
    expect(src).not.toMatch(/styles\.stands\b|styles\.standsList|aria-labelledby="runs-title"/);
    expect(read("app/components/MobileRevenue.tsx")).not.toMatch(/styles\.runsList|styles\.runsTitle/);
    expect(read("app/records/tours/revenue/revenue.module.css")).not.toMatch(/\.standsList\s*\{/);
    expect(read("app/components/mobileRevenue.module.css")).not.toMatch(/\.runsList\s*\{/);
  });

  it("negative control: the section as it shipped (page.tsx at 48376231) is caught", () => {
    const shipped = new DOMParser().parseFromString(
      `<div><section class="_stands_x" aria-labelledby="runs-title"><h2 id="runs-title" class="_standsTitle_x">${RUNS_HEADING}</h2><p class="_standsLede_x">${RUNS_LEDE}</p><ul class="_standsList_x"><li class="_stand_x">Run · 3 nights</li></ul></section></div>`,
      "text/html",
    ).body;
    expect(oldSection(shipped).length).toBe(1);
    expect(text(shipped)).toContain(RUNS_LEDE);
  });
});

// ── Phone: one gold action, the active chip ─────────────────────────────────
describe("phone: one gold action with the runs chip on", () => {
  it("the action bar is still the only gold fill, and the chip is pressed", () => {
    const m = mount();
    const phone = m.layouts.phone;
    fireEvent.click(chip(phone, RUNS_HEADING));
    expect(phone.querySelectorAll(".btnPrimary").length).toBe(0);
    expect(phone.querySelectorAll('[class*="actionPrimary"]').length).toBe(1);
    expect(text(phone.querySelector('[class*="actionPrimary"]'))).toBe("Highest-grossing by country");
    const on = chipsOf(phone).filter((b) => b.getAttribute("aria-pressed") === "true");
    expect(on.map(label)).toEqual([RUNS_HEADING]);
    expect(on[0].className).toMatch(/chipOn/);
    m.unmount();
  });

  it("negative control: a second gold button, as the countries link first shipped, is counted", () => {
    const shipped = new DOMParser().parseFromString(
      `<div><a class="btn btnPrimary" href="/records/tours/revenue/countries">x</a><a class="_actionPrimary_x">y</a></div>`,
      "text/html",
    );
    expect(shipped.querySelectorAll('.btnPrimary, [class*="actionPrimary"]').length).toBe(2);
  });
});
