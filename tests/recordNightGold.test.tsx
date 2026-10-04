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

/**
 * N6 (the owner, 4 Oct 2026): the record-night figure is gold only while that
 * night is his. The canvas (GXShowsDesk, GXShowsPhone, GXOG) drew it
 * `var(--gold)` / #ffb627 whoever held No. 1. Today the night is his, so the
 * live board cannot show the other half of the rule: this file puts another
 * artist's night at the top of the board — a copy of Fally Ipupa's La Défense
 * Arena row, a dollar above his London Stadium — and renders every place the
 * record figure prints.
 */

const BIGGER = vi.hoisted(() => ({ value: 0 }));
vi.mock("../app/data/tourRevenue", async (orig) => {
  const m = await orig<typeof import("../app/data/tourRevenue")>();
  const fally = m.revenueShows.find((s) => s.artist === "Fally Ipupa")!;
  BIGGER.value = m.revenueShows[0].revenue + 1;
  return { ...m, revenueShows: [{ ...fally, revenue: BIGGER.value }, ...m.revenueShows] };
});

import RevenuePage from "../app/records/tours/revenue/page";
import { showsBoard } from "../app/lib/showsBoard";
import { trees } from "./fixtures/phoneTrees";
import * as og from "../app/records/tours/revenue/opengraph-image";

describe("N6: another artist at No. 1 — the record figure prints in ink", () => {
  const b = showsBoard();
  const page = trees(renderToStaticMarkup(<RevenuePage />));

  it("the board's No. 1 is not his here, so the rule is exercised", () => {
    expect(b.top.artist).toBe("Fally Ipupa");
    expect(b.top.his).toBe(false);
  });

  it("desktop card: no gold class on the figure", () => {
    const fig = page.desktop!.querySelector('[aria-label="The biggest night on the board"] [class*="recordFigure"]')!;
    expect(fig).not.toBeNull();
    expect(fig.className).not.toMatch(/recordFigureHis/);
  });

  it("phone card: the ink class is on the figure", () => {
    const fig = page.phone!.querySelector('[aria-label="The biggest night on the board"] [class*="recordFigure"]')!;
    expect(fig.className).toMatch(/recordOther/);
  });

  it("the share card: bigHis is false", async () => {
    const meta = og.generateImageMetadata();
    expect(meta.length).toBe(1);
    const src = (await import("node:fs")).readFileSync("app/records/tours/revenue/opengraph-image.tsx", "utf8");
    expect(src).toMatch(/bigHis: b\.top\.his/);
  });

  it("negative control: with his night back on top the gold returns (the live board)", async () => {
    const { showsBoard: live } = await vi.importActual<typeof import("../app/lib/showsBoard")>("../app/lib/showsBoard");
    const { revenueShows: real } = await vi.importActual<typeof import("../app/data/tourRevenue")>("../app/data/tourRevenue");
    expect(live(real).top.his).toBe(true);
  });
});
