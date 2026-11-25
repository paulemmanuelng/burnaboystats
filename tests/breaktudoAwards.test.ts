import { describe, it, expect } from "vitest";
import { ceremonies, pendingResults } from "../app/data/awards";

/**
 * BreakTudo Awards 2026, São Paulo, 24 Nov 2026. Burna Boy was nominated in two
 * categories (the body's English list, read in the Wayback captures of 16 and
 * 18 Sep 2026). Decided 25 Nov 2026 on Paul's word, from his own read of
 * BreakTudo's announcements: he won neither. BreakTudo's own sites serve a
 * Cloudflare challenge, which this site does not get around.
 */
describe("BreakTudo Awards 2026", () => {
  const bt = ceremonies.find((c) => c.name === "BreakTudo Awards")!;

  it("records both 2026 nominations as not won", () => {
    expect(bt.noms.filter((n) => n.year === 2026)).toEqual([
      { year: 2026, category: "International Male Artist", won: false },
      { year: 2026, category: "International Hit of the Year", work: "Dai Dai (with Shakira)", won: false },
    ]);
  });

  it("is off the pending list now the ceremony is decided", () => {
    expect(pendingResults.find((p) => p.ceremony === "BreakTudo Awards")).toBeUndefined();
  });
});
