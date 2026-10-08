import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

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
import CountriesPage from "../app/records/tours/revenue/countries/page";
import FestivalsPage from "../app/records/tours/festivals/page";
import { revenueStands } from "../app/data/tourRevenue";
import { showsBoard, pct } from "../app/lib/showsBoard";
import { revenueByCountry, heroFigures } from "../app/lib/revenueByCountry";
import { runsBasis } from "../app/lib/multiNightRuns";
import { FESTIVAL_GROUP_NAMES, FESTIVALS_KICKER } from "../app/lib/festivalOrder";

/**
 * Copy fix 3, tours part (design review of 8 Oct 2026, T-12): the same thing
 * gets one name and one number.
 *  - His box-office share printed 65.7% on Highest-grossing shows and 65.3% on
 *    the countries board with nothing saying why: one sums single nights
 *    only, the other adds the multi-night runs. Each now states its basis.
 *  - The festival lists' names differed between the layouts.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const clean = (s: string | null | undefined) => (s ?? "").replace(/[\s ]+/g, " ").trim();
function trees(page: () => React.ReactElement) {
  const doc = parse(renderToStaticMarkup(page()));
  const desktop = doc.querySelector('[class*="_desktopOnly_"]')!;
  const phone = doc.querySelector('[class*="_screen_"]')!;
  return { desktop, phone };
}

const b = showsBoard();
const cb = revenueByCountry();
const hero = heroFigures(cb);
const runs = revenueStands.length;

describe("his share: two figures, each with its basis", () => {
  it("the two figures differ by the runs, and by nothing else", () => {
    // The countries board is the shows board plus every run.
    const hisRuns = revenueStands.filter((s) => s.artist === "Burna Boy").reduce((n, s) => n + s.revenue, 0);
    const allRuns = revenueStands.reduce((n, s) => n + s.revenue, 0);
    expect(hero.hisTotal).toBe(b.hisGross + hisRuns);
    expect(cb.grandTotal).toBe(b.boardGross + allRuns);
    expect(runs).toBeGreaterThan(0);
    expect(pct(b.hisShare)).not.toBe(pct(hero.hisShare));
  });

  it("Highest-grossing shows says single nights only, on both layouts", () => {
    const basis = runsBasis(runs, false);
    expect(basis).toBe(`single nights only, ${runs}\u00a0multi-night runs left out`);
    expect(runsBasis(runs, false, { short: true })).toBe("single nights only");
    const { desktop, phone } = trees(RevenuePage);
    expect(clean(desktop.textContent)).toContain(clean(`${pct(b.hisShare)} · ${b.hisCount} shows · ${basis}`));
    // The phone's caption takes the short form: the count ran it to a third line.
    expect(clean(phone.querySelector('[class*="_shareCap_"]')?.textContent)).toContain(", single nights only ·");
  });

  it("the countries board says the runs are in it, on both layouts", () => {
    const basis = runsBasis(cb.standCount, true);
    // The countries board's own word for them ("runs included", its method note).
    // The count kept with its noun (no-break space): "3" / "runs included" split at 390.
    expect(basis).toBe(`${runs}\u00a0runs included`);
    const { desktop, phone } = trees(CountriesPage);
    expect(clean(desktop.textContent)).toContain(clean(`His share of every reported gross, ${basis}`));
    expect(clean(phone.textContent)).toContain(clean(`of every reported gross, ${basis}`));
  });

  it("negative control: the labels as they shipped stated no basis", () => {
    const BASIS = /single nights only|runs? (left out|included)/;
    // RevenueCountries.tsx and MobileRevenueCountries.tsx until 8 Oct 2026.
    for (const shipped of ["His share of every reported gross", "Burna Boy · $44.99M of every reported gross"]) expect(shipped).not.toMatch(BASIS);
    expect(runsBasis(runs, false)).toMatch(BASIS);
    expect(runsBasis(runs, true)).toMatch(BASIS);
  });
});

describe("the festival lists: one name each, on both layouts", () => {
  const names = Object.values(FESTIVAL_GROUP_NAMES);
  const { desktop, phone } = trees(FestivalsPage);

  it("desktop: the section headings and the count strip", () => {
    expect([...desktop.querySelectorAll('[class*="_groupHead_"] h2')].map((h) => clean(h.textContent))).toEqual(names);
    expect([...desktop.querySelectorAll('[class*="_countLabel_"]')].map((h) => clean(h.textContent))).toEqual(names);
  });

  it("phone: the sections and the solo-concerts tile", () => {
    expect([...phone.querySelectorAll('button[aria-expanded] [class*="_name_"]')].map((h) => clean(h.textContent))).toEqual(names);
    const tiles = [...phone.querySelectorAll('[class*="_statLabel_"]')].map((h) => clean(h.textContent));
    expect(tiles).toContain(FESTIVAL_GROUP_NAMES.concerts);
  });

  it("the kicker is the same words on both", () => {
    expect(clean(desktop.querySelector('[class*="_eyebrow_"]')?.textContent)).toBe(FESTIVALS_KICKER);
    expect(clean(phone.querySelector('[class*="_kicker_"]')?.textContent)).toBe(FESTIVALS_KICKER);
  });

  it("negative control: none of the names the layouts shipped with is left", () => {
    // festivals/page.tsx and MobileFestivals.tsx until 8 Oct 2026.
    for (const shipped of ["Other big stages", "Other appearances", "Solo shows", "Festival stages"]) {
      expect(clean(desktop.textContent), shipped).not.toContain(shipped);
      expect(clean(phone.textContent), shipped).not.toContain(shipped);
    }
  });
});
