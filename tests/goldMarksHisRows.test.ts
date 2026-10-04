import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { revenueShows } from "../app/data/tourRevenue";

// SCOPE OF THE RULE (Paul, 4 Oct 2026, ruling on c6 / tyla-totals-10).
// "Gold marks Burna, and only Burna" governs MIXED lists: board rows, ranks,
// leaders, head-to-heads — anywhere his figures sit beside other artists'.
// It does NOT govern a board artist's OWN page: asked "should gold stay
// Burna-only there too?", the owner said "no, do what's best", and the call is
// that the page's subject keeps gold on its own headline figures — the desktop
// "By the numbers" lead card (.numLead .numValue in artist.module.css) and the
// phone hero's kicker and total (mobileCerts.module.css .kicker / .total,
// shared with Burna's own screen). The last describe block below pins that
// exception so nobody "fixes" it into --text, and no guard in this file scans
// those pages.
//
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
  {
    // The /records hub's box-office table (found while shooting the 3 Oct
    // debug fixes): Fally Ipupa's La Défense Arena night sits third, and his
    // $3.16M printed gold on both layouts.
    what: "the box-office table on the desktop /records hub",
    css: "app/records/records.module.css",
    tsx: "app/records/page.tsx",
    base: "gross",
    his: "grossHis",
  },
  {
    what: "the box-office list on the phone /records hub",
    css: "app/components/mobileRecords.module.css",
    tsx: "app/components/MobileRecords.tsx",
    base: "showGross",
    his: "showGrossHis",
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

describe("the /records hub: negative control", () => {
  it("the gross rules as they shipped at 6005ca8e are caught", () => {
    // records.module.css:212 and mobileRecords.module.css:216, verbatim.
    const desktop = `.gross {
  text-align: right;
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 19px;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
}`;
    const phone = `.showGross {
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--gold);
  font-variant-numeric: tabular-nums;
  flex: none;
}`;
    expect(colorOf(desktop, "gross")).toMatch(/--gold/);
    expect(colorOf(phone, "showGross")).toMatch(/--gold/);
  });

  it("the hub shows another artist in its rows, so the rule is exercised", () => {
    // app/records/page.tsx feeds both layouts revenueShows.slice(0, 8).
    expect(revenueShows.slice(0, 8).some((s) => s.artist !== "Burna Boy")).toBe(true);
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

// The exception, pinned (Paul, 4 Oct 2026). A board artist's own page is not a
// mixed list: its lead figure is its subject's, as Burna's is on his. The
// mixed cell on the same page — the head-to-head — still gives gold to Burna
// only, and that is asserted here too, so the two halves of the ruling cannot
// drift into each other.
describe("a board artist's own page keeps gold for its own headline (ruling, 4 Oct 2026)", () => {
  const block = (css: string, selector: string) => {
    const esc = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
    const m = new RegExp(`(^|\\n)${esc}\\s*\\{([^}]*)\\}`).exec(css);
    return m ? m[2] : null;
  };
  const colour = (css: string, selector: string) => /color:\s*([^;]+);/.exec(block(css, selector) ?? "")?.[1].trim() ?? null;

  it("the desktop lead card's value is gold", () => {
    expect(colour(read("app/afrobeats/[artist]/artist.module.css"), ".numLead .numValue")).toBe("var(--gold)");
  });

  it("the phone hero's kicker and total are gold (the screen Burna's page shares)", () => {
    const css = read("app/components/mobileCerts.module.css");
    expect(colour(css, ".kicker")).toBe("var(--gold)");
    expect(colour(css, ".total")).toBe("var(--gold)");
  });

  it("the head-to-head on the same page still gives gold to Burna only", () => {
    const tsx = read("app/afrobeats/[artist]/page.tsx");
    expect(tsx).toMatch(/rival\.isBurna \? `\$\{styles\.compareValue\} \$\{styles\.compareGold\}` : styles\.compareValue/);
    // The plain cell declares no colour of its own (it inherits the text
    // colour); only the Burna variant adds gold.
    expect(colorOf(read("app/afrobeats/[artist]/artist.module.css"), "compareValue") ?? "inherited").not.toMatch(/--gold/);
    expect(colorOf(read("app/afrobeats/[artist]/artist.module.css"), "compareGold")).toBe("var(--gold)");
  });

  it("negative control: the selector reader sees the rule as it shipped, and a --text rule as not gold", () => {
    // artist.module.css:160 as shipped since #120 (173a1564, 20 Aug 2026).
    expect(colour(".numLead .numValue { color: var(--gold); }", ".numLead .numValue")).toBe("var(--gold)");
    expect(colour(".numLead .numValue { color: var(--text); }", ".numLead .numValue")).not.toBe("var(--gold)");
  });
});
