import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { compactGross } from "../app/lib/grossLabel";

/**
 * The phone board prints a compact gross, and it has to keep the ranking the
 * desktop's full figures show. At 800e4211 it printed `$X.XXM` for every row;
 * with the board's 83 rows, many under $200K, neighbours collapsed into one
 * label — #81–83 all read "$0.05M". The rule: no two neighbouring rows with
 * different grosses print the same label.
 */
const collisions = (fmt: (n: number) => string) => {
  const out: string[] = [];
  for (let i = 1; i < revenueShows.length; i++) {
    const a = revenueShows[i - 1], b = revenueShows[i];
    if (a.revenue !== b.revenue && fmt(a.revenue) === fmt(b.revenue)) out.push(`#${i}/#${i + 1} ${fmt(b.revenue)}`);
  }
  return out;
};

describe("the phone board's gross labels", () => {
  it("no two neighbouring rows with different grosses print the same label", () => {
    expect(collisions(compactGross)).toEqual([]);
  });

  it("negative control: the label as it shipped at 800e4211 fails it", () => {
    // The page's own expression at 800e4211, applied to the same rows.
    const shipped = (n: number) => `$${(n / 1e6).toFixed(2)}M`;
    const hits = collisions(shipped);
    expect(hits).toContain("#82/#83 $0.05M");
    expect(hits.length).toBeGreaterThan(3);
  });

  it("reads as money at both ends of the board", () => {
    expect(compactGross(6147209)).toBe("$6.147M");
    expect(compactGross(965925)).toBe("$965.9K");
    expect(compactGross(47221)).toBe("$47.2K");
  });

  it("is what the leaderboard's phone rows and stands actually print", () => {
    const src = readFileSync("app/records/tours/revenue/page.tsx", "utf8");
    expect(src.match(/gross: compactGross\(s\.revenue\)/g)?.length).toBe(2);
    expect(src).not.toMatch(/gross: `\$\$\{\(s\.revenue \/ 1e6\)/);
  });
});

describe("the stands beneath the board", () => {
  it("are ordered by combined gross, highest first, as the board above them is", () => {
    const rev = revenueStands.map((s) => s.revenue);
    expect(rev).toEqual([...rev].sort((a, b) => b - a));
    expect(revenueStands.length).toBeGreaterThan(1);
  });
});
