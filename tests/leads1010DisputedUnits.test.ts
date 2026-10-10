import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { disputedCounts } from "../app/data/rejectedClaims";

/**
 * "Dai Dai" — the worldwide-units figures that circulate.
 *
 * The site publishes no worldwide units total for a single: no certifying body
 * or platform states one. The 6,050,000 of September 2026 has its row under
 * "Counts that circulate higher than mine" on /methodology; the "estimated 10
 * million" of October 2026 (a fan post on X, read as a lead only) joins that
 * same row rather than a second one, and nowhere else on the site prints it as
 * a figure.
 */
const row = disputedCounts.find((c) => /6,050,000/.test(c.claim))!;

/** The figure stated as one: "10 million units", "10M units", "an estimated 10 million". Not
 *  "10,000,000 units": that is the RIAA's Diamond threshold, which the site
 *  prints as a body's level (app/data/afrobeats.ts). */
const TEN_MILLION_UNITS = /\b10(?: million|M)\s+units\b|\bestimated 10 million\b/i;

function filesUnder(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return filesUnder(p);
    return /\.(ts|tsx|mjs)$/.test(name) ? [p] : [];
  });
}

describe("Dai Dai's circulating worldwide-units figures", () => {
  it("one row carries both, the newer one quoted as its poster labels it", () => {
    expect(disputedCounts.filter((c) => /Dai Dai/.test(c.claim))).toHaveLength(1);
    expect(row.claim).toBe("“Dai Dai” — 6,050,000 units sold worldwide (and, since October 2026, “an estimated 10 million”)");
    expect(row.reason).toContain("The later “estimated 10 million”, from October 2026, is by its own label the same kind of figure.");
    // The rebuttal's own ending is unchanged: no worldwide total here.
    expect(row.reason).toContain("publishes no worldwide total");
  });

  it("no other file in app/ states it as a figure", () => {
    const hits = filesUnder(join(process.cwd(), "app"))
      .filter((f) => !f.endsWith(join("app", "data", "rejectedClaims.ts")))
      .filter((f) => TEN_MILLION_UNITS.test(readFileSync(f, "utf8")))
      .map((f) => f.slice(process.cwd().length + 1));
    expect(hits).toEqual([]);
  });

  it("negative control: the lead's own wording is caught", () => {
    // The fan post, as the lead quoted it on 9 Oct 2026.
    expect(TEN_MILLION_UNITS.test("'Dai Dai' has now sold an estimated 10 million units globally")).toBe(true);
    // And a body's threshold is not: afrobeats.ts's own line on the RIAA ladder.
    const riaa = readFileSync(join(process.cwd(), "app/data/afrobeats.ts"), "utf8");
    expect(riaa).toContain("Diamond IS 10,000,000 units");
    expect(TEN_MILLION_UNITS.test("Diamond IS 10,000,000 units")).toBe(false);
  });
});
