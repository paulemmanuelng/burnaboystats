import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/visualized",
}));

import VisualizedPage from "../../app/records/visualized/page";
import vizStyles from "../../app/components/mobileVisualized.module.css";
import { trees, text } from "../fixtures/phoneTrees";
import { winning } from "../fixtures/cssRules";

/**
 * phoneChartRoute (site review 8 Oct 2026, Job 5 · J5-1; canvas "Data
 * Modules" §1): every phone chart ends in one 48px whole-row link to the page
 * that holds its figure — a gold mono label and → — so the phone
 * /records/visualized goes from one link to one per chart.
 */
const CSS = readFileSync("app/components/mobileVisualized.module.css", "utf8");
const top = (m: string | null) => m === null;

/** A route exists when its page does (no query, no fragment). */
const routeExists = (href: string) => existsSync(join("app", href.replace(/^\//, ""), "page.tsx"));

/** The chart blocks of a phone tree: each block that carries a chart title. */
const blocksOf = (phone: Element) =>
  [...phone.querySelectorAll(`.${vizStyles.chartTitle}`)].map((h) => h.parentElement!);

/** What is wrong with one block's route row, or null. */
function routeProblem(block: Element): string | null {
  const rows = [...block.querySelectorAll("a")].filter((a) => a.classList.contains(vizStyles.routeRow));
  const title = text(block.querySelector(`.${vizStyles.chartTitle}`));
  if (rows.length !== 1) return `${title}: ${rows.length} route rows`;
  const a = rows[0];
  if (block.lastElementChild !== a) return `${title}: the route row is not the block's last child`;
  const href = a.getAttribute("href") ?? "";
  if (!href.startsWith("/") || /[?#]/.test(href)) return `${title}: ${href} is not a bare internal route`;
  if (!routeExists(href)) return `${title}: ${href} has no page under app/`;
  if (!/→$/.test(text(a))) return `${title}: "${text(a)}" does not end in →`;
  return null;
}

describe("phoneChartRoute: one 48px route row per phone chart", () => {
  const { phone } = trees(renderToStaticMarkup(<VisualizedPage />));

  it("every chart block ends in exactly one route row to a page that exists", () => {
    const blocks = blocksOf(phone!);
    // The line charts, the scatter, the map, the bar sets and the donuts.
    expect(blocks.length).toBeGreaterThanOrEqual(10);
    expect(blocks.map(routeProblem).filter(Boolean)).toEqual([]);
    // One link per chart, so the screen's route rows number its charts.
    expect(phone!.querySelectorAll(`a.${vizStyles.routeRow}`).length).toBe(blocks.length);
  });

  it("each label is the destination's own words, never a typed figure", () => {
    for (const a of phone!.querySelectorAll(`a.${vizStyles.routeRow}`)) {
      expect(text(a), a.getAttribute("href") ?? "").not.toMatch(/\d/);
    }
  });

  it("the row is a 48px whole row: gold mono 11px label, a line rule above", () => {
    expect(winning(CSS, ".routeRow", "min-height", top)).toBe("48px");
    expect(winning(CSS, ".routeRow", "font-size", top)).toBe("11px");
    expect(winning(CSS, ".routeRow", "font-family", top)).toMatch(/--font-mono/);
    expect(winning(CSS, ".routeRow", "color", top)).toBe("var(--gold)");
    expect(winning(CSS, ".routeRow", "border-top", top)).toBe("1px solid var(--line)");
  });

  it("negative control: the shipped block markup carried no link", () => {
    // MobileVisualized.tsx:137–163 on main e85e6efe: title, bars, note — and
    // nothing to go to.
    const shipped = new DOMParser().parseFromString(
      `<div class="${vizStyles.chart}"><h2 class="${vizStyles.chartTitle}">Certifications by country</h2><div class="${vizStyles.bars}"></div><p class="${vizStyles.chartNote}">The 6 biggest of 31 certifying countries.</p></div>`,
      "text/html",
    ).body.firstElementChild!;
    expect(routeProblem(shipped)).toBe("Certifications by country: 0 route rows");
  });
});
