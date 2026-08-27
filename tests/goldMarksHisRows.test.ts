import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { revenueShows } from "../app/data/tourRevenue";

// Gold marks HIS nights. Both revenue boards list other artists too — 15 of the
// 43 rows on /records/tours/revenue, and Fally Ipupa's La Défense Arena night
// sits third in the top ten on /records/tours — so a gold gross applied to every
// row says the whole board is Burna Boy's. mobileRevenue.module.css had always
// scoped it (.gross muted, .grossHis gold); the two desktop boards had not.

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

/** The colour declared for a class, from its own rule block. */
const colorOf = (css: string, cls: string): string | null => {
  const m = new RegExp(`\\.${cls}\\s*\\{([^}]*)\\}`).exec(css);
  if (!m) return null;
  const c = /color:\s*([^;]+);/.exec(m[1]);
  return c ? c[1].trim() : null;
};

const BOARDS = [
  {
    what: "the 43-row revenue board",
    css: "app/records/tours/revenue/revenue.module.css",
    tsx: "app/components/RevenueBoard.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    what: "the top-ten table on /records/tours",
    css: "app/records/tours/tours.module.css",
    tsx: "app/records/tours/page.tsx",
    base: "grossCell",
    his: "grossCellHis",
  },
  {
    what: "the mobile revenue list",
    css: "app/components/mobileRevenue.module.css",
    tsx: "app/components/MobileRevenue.tsx",
    base: "gross",
    his: "grossHis",
  },
];

describe("gold marks Burna Boy's grosses, not everyone's", () => {
  it("both boards actually list other artists — otherwise this test proves nothing", () => {
    const others = revenueShows.filter((s) => s.artist !== "Burna Boy");
    expect(others.length).toBeGreaterThan(0);
    expect(
      revenueShows.slice(0, 10).filter((s) => s.artist !== "Burna Boy").length,
      "the top ten is all his, so the top-ten table cannot show the bug",
    ).toBeGreaterThan(0);
  });

  it.each(BOARDS.map((b) => [b.what, b] as const))("%s: the base gross is not gold", (_w, b) => {
    const css = read(b.css);
    expect(colorOf(css, b.base), `${b.base} has no colour declared`).not.toBeNull();
    expect(
      colorOf(css, b.base),
      `${b.base} is gold by default, so every artist's gross reads as his`,
    ).not.toMatch(/--gold/);
  });

  it.each(BOARDS.map((b) => [b.what, b] as const))("%s: only the his-variant is gold", (_w, b) => {
    expect(colorOf(read(b.css), b.his), `${b.his} must carry the gold`).toMatch(/--gold/);
  });

  it.each(BOARDS.map((b) => [b.what, b] as const))("%s: applies it conditionally", (_w, b) => {
    const tsx = read(b.tsx);
    expect(
      new RegExp(`styles\\.${b.his}`).test(tsx),
      `${b.tsx} never references ${b.his}, so the gold can never appear`,
    ).toBe(true);
  });
});
