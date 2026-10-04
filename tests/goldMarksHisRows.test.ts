import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { revenueShows } from "../app/data/tourRevenue";

// Gold marks HIS nights. Both revenue boards list other artists too — more than
// half of the rows on /records/tours/revenue, and Fally Ipupa's La Défense Arena night
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
    what: "the revenue board",
    css: "app/records/tours/revenue/revenue.module.css",
    tsx: "app/components/RevenueBoard.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    // The stands beneath the board were all his until Wizkid's O2 run joined
    // them (3 Oct 2026); a gold-by-default stand gross would print his money.
    what: "the stands beneath the desktop revenue board",
    css: "app/records/tours/revenue/revenue.module.css",
    tsx: "app/records/tours/revenue/page.tsx",
    base: "standGross",
    his: "standGrossHis",
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

// The rank cell too (debug pass 3 Oct 2026, bo-01 and C2). The desktop board
// lit every top-three rank gold — the design's rule — so Fally Ipupa's "03"
// was gold; the countries page lit every "01", so Tyla's in Japan, the
// Philippines and Singapore were. Gold marks his figures only: the owner's
// rule wins over the old artboard.
describe("gold marks his ranks only, on both box-office pages", () => {
  const rankTopUse = (tsx: string) =>
    [...tsx.matchAll(/([^\n]*)\?\s*styles\.rankTop/g)].map((m) => m[1].replace(/.*\$\{/, "").trim());

  it("the revenue board lights a top-three rank only on his rows", () => {
    const uses = rankTopUse(read("app/components/RevenueBoard.tsx"));
    expect(uses.length).toBe(1);
    expect(uses[0]).toMatch(/s\.artist === HIS && rank <= 3/);
  });

  it("the countries page lights a No. 1 only on his rows", () => {
    const uses = rankTopUse(read("app/components/RevenueCountries.tsx"));
    expect(uses.length).toBe(1);
    expect(uses[0]).toMatch(/a\.his && rank === 1/);
  });

  it("negative control: the conditions as they shipped at 6005ca8e are caught", () => {
    // RevenueBoard.tsx:103 and RevenueCountries.tsx:47, verbatim.
    const board = rankTopUse("className={`${styles.rank} ${rank <= 3 ? styles.rankTop : \"\"}`}");
    const countries = rankTopUse("<span role=\"cell\" className={`${styles.rank} ${rank === 1 ? styles.rankTop : \"\"}`}>");
    expect(board[0]).not.toMatch(/s\.artist === HIS && rank <= 3/);
    expect(countries[0]).not.toMatch(/a\.his && rank === 1/);
  });

  it("the data still puts another artist in the board's top three, so the rule is exercised", () => {
    expect(revenueShows.slice(0, 3).some((s) => s.artist !== "Burna Boy")).toBe(true);
  });
});
