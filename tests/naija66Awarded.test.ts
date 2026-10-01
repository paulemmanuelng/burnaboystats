// @vitest-environment node
import { describe, it, expect } from "vitest";
describe("prizes awarded off the site (Paul, 1 Oct 2026: codes 1 and 2 were won on X)", () => {
  it("only prizes 1 and 2 are marked awarded", async () => {
    const { NAIJA66_PRIZES } = await import("../app/data/naija66");
    expect(NAIJA66_PRIZES.filter((p) => p.awarded).map((p) => p.prize)).toEqual([1, 2]);
  });
  it("an awarded prize's page is not a prize page, so spot and reveal treat it as a decoy", async () => {
    const { NAIJA66_PRIZES } = await import("../app/data/naija66");
    const { prizeOnPage } = await import("../app/lib/naija66/state");
    for (const p of NAIJA66_PRIZES) expect(prizeOnPage(p.path)?.prize, p.path).toBe(p.awarded ? undefined : p.prize);
  });
  it("the board shows an awarded prize as claimed, with no time and no code tail", async () => {
    const { publicPrizes } = await import("../app/lib/naija66/state");
    const board = publicPrizes([null, null, null, null, null], Date.parse("2026-10-01T17:30:00Z"));
    expect(board.map((b) => b.state)).toEqual(["claimed", "claimed", "live", "live", "sleeping"]);
    expect(board[0].claimedAt).toBeUndefined();
    expect(board[0].tail).toBeUndefined();
  });
});


describe("the here card is hidden (Paul, 1 Oct 18:40 WAT: hide it in a word or phrase)", () => {
  it("is off in the live config", async () => {
    const { NAIJA66_HERE_CARD } = await import("../app/data/naija66");
    expect(NAIJA66_HERE_CARD).toBe(false);
  });
});
