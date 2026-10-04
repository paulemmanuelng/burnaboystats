import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
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
import { declaredAt, trees } from "./fixtures/phoneTrees";

/**
 * The owner, 4 Oct 2026, on the phone hero of /records/tours/revenue: "the
 * $6.147M here is too big in font size, reduce it a bit and the there's so
 * much gold there fix it". The record night's figure keeps the gold (while the
 * night is his, N6 — tests/recordNightGold); the figure tiles under it go to
 * ink, and the figure drops from 44px to 36px. PHONE ONLY: "pc version is ok,
 * no need to shrink pc" — the desktop hero is unchanged, gold tiles included.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const page = trees(renderToStaticMarkup(<RevenuePage />));
const goldTiles = (root: Element) => [...root.querySelectorAll('[class*="figHis"]')];

describe("shows hero: one gold figure, a smaller record night (owner, 4 Oct 2026)", () => {
  it("no figure tile is gold on the phone", () => {
    expect(page.phone!.querySelectorAll('[class*="figValue"]').length).toBeGreaterThan(0);
    expect(goldTiles(page.phone!)).toEqual([]);
    expect(read("app/components/mobileRevenue.module.css")).not.toMatch(/\.figHis\b/);
  });

  it("the desktop hero is untouched: its two his tiles keep the gold", () => {
    expect(goldTiles(page.desktop!)).toHaveLength(2);
  });

  it("the record night keeps the gold while it is his", () => {
    const fig = page.phone!.querySelector('[class*="recordFigure"]')!;
    expect(fig.className).toMatch(/recordFigureHis/);
  });

  it("the phone record figure is 36px, down from 44", () => {
    const css = read("app/components/mobileRevenue.module.css");
    for (const w of [320, 390]) expect(declaredAt(css, ".recordFigure.recordFigure", "font-size", w), `${w}`).toContain("36px");
  });

  it("negative control: the tiles as #413 shipped them carry the gold class", () => {
    const shipped = new DOMParser().parseFromString(
      `<div><span class="figValue figHis">9 of 10</span><span class="figValue figHis">65.7%</span></div>`,
      "text/html",
    );
    expect(goldTiles(shipped.body)).toHaveLength(2);
  });
});
