// @vitest-environment node
import { describe, it, expect } from "vitest";
import { rankOf, compareRank, compareHolding } from "../scripts/cert-watch/match.mjs";
import { parseBadge } from "../scripts/cert-watch/adapters/riaa.mjs";
import { parseCertClass } from "../scripts/cert-watch/adapters/musiccanada.mjs";

/**
 * Multiples are read in each register's OWN steps (SPEC §4.4). Every form
 * below is one a register served; an unseen form gives null — never a guess.
 */
describe("RIAA badges (level keeps the count)", () => {
  it("reads the forms RIAA serves", () => {
    // Latin, default_451299 "2X Platino"
    expect(parseBadge("badge LA level 2")).toMatchObject({ code: "LA", level: 2, programme: "RIAA Latin", reading: { tier: "Platinum", x: 2, level: 2 } });
    // Standard, default_424119 One Dance — titled "1X Diamond", eleven times Platinum
    expect(parseBadge("badge DI level 11")).toMatchObject({ programme: null, reading: { tier: "Diamond", x: 1, level: 11 } });
    // Album, default_36107 BUJU BANTON — "Gold"
    expect(parseBadge("badge ST level 0")).toMatchObject({ programme: null, reading: { tier: "Gold", x: 1, level: 0 } });
    // Latin Diamante forms from the Shakira search: level 43 "4X Diamante", 16 "1X Diamante"
    expect(parseBadge("badge LA level 43")?.reading).toEqual({ tier: "Diamond", x: 4, level: 43 });
    expect(parseBadge("badge LA level 16")?.reading).toEqual({ tier: "Diamond", x: 1, level: 16 });
  });

  it("gives null for a badge it has never seen", () => {
    expect(parseBadge("badge MV level 1")?.reading).toBeNull();
    expect(parseBadge("Gold")).toBeNull();
  });

  it("ranks in units: level 11 is above the site's Diamond, level 10 is not", () => {
    const siteDiamond = { tier: "Diamond", x: 1 };
    expect(compareHolding("riaa", siteDiamond, parseBadge("badge DI level 11")!.reading)).toBe("UPGRADE");
    expect(compareHolding("riaa", siteDiamond, parseBadge("badge DI level 10")!.reading)).toBeNull();
    // Santa (Ayra Starr) is held as Platinum ×16 (RIAA Latin); LA level 16 is in sync.
    expect(compareHolding("riaa", { tier: "Platinum", x: 16 }, parseBadge("badge LA level 16")!.reading)).toBeNull();
    // Gold (0.5) sits below 1× Platinum.
    expect(compareRank(rankOf("riaa", { tier: "Gold", x: 1 })!, rankOf("riaa", parseBadge("badge DI level 1")!.reading)!)).toBe(-1);
  });
});

describe("Music Canada classes (each step its own id)", () => {
  it("reads the tier words Music Canada serves", () => {
    // id 89702, Shakira, Burna Boy / Dai Dai
    expect(parseCertClass(["award_cert-double-platinum-single"])).toMatchObject({ reading: { tier: "Platinum", x: 2 }, format: "single" });
    // id 89706, sombr / back to friends (served 22 Sep 2026)
    expect(parseCertClass(["award_cert-seven-times-platinum-single"])).toMatchObject({ reading: { tier: "Platinum", x: 7 }, format: "single" });
    expect(parseCertClass(["award_cert-quadruple-platinum-albums"])).toMatchObject({ reading: { tier: "Platinum", x: 4 }, format: "album" });
    expect(parseCertClass(["award_cert-gold-albums"])).toMatchObject({ reading: { tier: "Gold", x: 1 }, format: "album" });
  });

  it("gives null for a tier word it has never seen", () => {
    expect(parseCertClass(["award_cert-double-diamond-single"]).reading).toBeNull();
    expect(parseCertClass(["award_type-single"]).reading).toBeNull();
  });
});

describe("the standard ladder", () => {
  it("orders tier first, then multiple: a 3× Gold is below 1× Platinum", () => {
    const r = (tier: string, x = 1) => rankOf("standard", { tier, x })!;
    expect(compareRank(r("Gold", 3), r("Platinum", 1))).toBe(-1);
    expect(compareRank(r("Platinum", 2), r("Platinum", 1))).toBe(1);
    expect(compareRank(r("Silver"), r("Gold"))).toBe(-1);
    expect(compareRank(r("Diamond"), r("Platinum", 9))).toBe(1);
  });

  it("never reports a register reading the site is ahead of or equal to", () => {
    expect(compareHolding("standard", { tier: "Platinum", x: 2 }, { tier: "Platinum", x: 2 })).toBeNull();
    expect(compareHolding("standard", { tier: "Platinum", x: 2 }, { tier: "Gold", x: 1 })).toBeNull();
    expect(compareHolding("standard", { tier: "Gold", x: 1 }, { tier: "Platinum", x: 1 })).toBe("UPGRADE");
    expect(compareHolding("standard", null, { tier: "Gold", x: 1 })).toBe("NEW PLAQUE");
  });
});
