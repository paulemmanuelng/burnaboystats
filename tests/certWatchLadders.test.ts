// @vitest-environment node
import { describe, it, expect } from "vitest";
import { rankOf, compareRank, compareHolding } from "../scripts/cert-watch/match.mjs";
import { parseBadge } from "../scripts/cert-watch/adapters/riaa.mjs";
import { parseCertClass } from "../scripts/cert-watch/adapters/musiccanada.mjs";
import { parseTier as parseBpiTier } from "../scripts/cert-watch/adapters/bpi.mjs";
import { parseTier as parseSnepTier } from "../scripts/cert-watch/adapters/snep.mjs";
import { stepOf as zpavStep } from "../scripts/cert-watch/adapters/zpav.mjs";
import { parseCertField as seCert } from "../scripts/cert-watch/adapters/ifpi-sverige.mjs";
import { parseStatus as dkStatus } from "../scripts/cert-watch/adapters/ifpi-danmark.mjs";
import { parseStatus as nvpiStatus } from "../scripts/cert-watch/adapters/nvpi.mjs";
import { parseBadge as cnsBadge } from "../scripts/cert-watch/adapters/cns-ifpi.mjs";

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

/**
 * Step 2 registers (SPEC §3.2, §10 step 2). Every string below is one the
 * register printed, in the row cited.
 */
describe("step 2 tier forms, read in each register's own steps", () => {
  it("BPI: Silver … 10x Platinum; nothing else", () => {
    // BPI list, 23 Sep sweep: "SHAKIRA & BURNA BOY | DAI DAI | Silver", "TYLA | WATER | 2x Platinum"
    expect(parseBpiTier("Silver")).toEqual({ tier: "Silver", x: 1 });
    expect(parseBpiTier("Gold")).toEqual({ tier: "Gold", x: 1 });
    expect(parseBpiTier("Platinum")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseBpiTier("2x Platinum")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseBpiTier("10x Platinum")).toEqual({ tier: "Platinum", x: 10 });
    expect(parseBpiTier("Diamond")).toBeNull();
    expect(parseBpiTier("1x Platinum")).toBeNull();
  });

  it("SNEP: the card words and its export's words", () => {
    // "DAI DAI | SHAKIRA & BURNA BOY | … | Diamant | 27/08/2026"
    expect(parseSnepTier("Diamant")).toEqual({ tier: "Diamond", x: 1 });
    expect(parseSnepTier("Platine")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseSnepTier("Double Platine")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseSnepTier("Or")).toEqual({ tier: "Gold", x: 1 });
    // SNEP's CSV export: "Double or", "Triple Platine"
    expect(parseSnepTier("Double or")).toEqual({ tier: "Gold", x: 2 });
    expect(parseSnepTier("Triple Platine")).toEqual({ tier: "Platinum", x: 3 });
    expect(parseSnepTier("Double Diamant")).toBeNull();
    expect(parseSnepTier("Certification")).toBeNull();
  });

  it("ZPAV: the step is the FILLED date_N, never a row count", () => {
    // Dai Dai, złote płyty: date_1 2026-08-26 → 1× Gold
    expect(zpavStep({ date_1: "2026-08-26", date_2: null, date_3: null })).toEqual({ step: 1, date: "2026-08-26" });
    // DRAKE | ONE DANCE, platynowe płyty: ONE row, date_3 2021-08-11 → 3× Platinum
    expect(zpavStep({ date_1: null, date_2: null, date_3: "2021-08-11" })).toEqual({ step: 3, date: "2021-08-11" });
    expect(zpavStep({ date_1: null })).toBeNull();
    expect(zpavStep({ date_1: "2023-02-22", date_2: "2023-04-26" })).toBeNull();
  });

  it("Ifpi Sverige: the record's Guld/Platina field", () => {
    expect(seCert("Platina - cert.nr 11317 - 2026-09-18")).toMatchObject({ reading: { tier: "Platinum", x: 1 }, certNo: "11317", date: "2026-09-18" });
    expect(seCert("Guld - cert.nr 10451 - 2023-08-16").reading).toEqual({ tier: "Gold", x: 1 });
    expect(seCert("Platina x7 - cert.nr 7257 - 2016-11-11").reading).toEqual({ tier: "Platinum", x: 7 });
    expect(seCert("Diamant - cert.nr 1 - 2026-01-01").reading).toBeNull();
    expect(seCert("Platina").reading).toBeNull();
  });

  it("IFPI Danmark: Guld, Platin, NxPlatin; a blank status is null", () => {
    expect(dkStatus("Guld")).toEqual({ tier: "Gold", x: 1 });
    expect(dkStatus("Platin")).toEqual({ tier: "Platinum", x: 1 });
    expect(dkStatus("2xPlatin")).toEqual({ tier: "Platinum", x: 2 });
    expect(dkStatus("19xPlatin")).toEqual({ tier: "Platinum", x: 19 });
    expect(dkStatus("")).toBeNull();
    expect(dkStatus("Diamant")).toBeNull();
  });

  it("NVPI: status in any case, amount as the multiple", () => {
    expect(nvpiStatus("Platina", "")).toEqual({ tier: "Platinum", x: 1 });
    expect(nvpiStatus("Platina", "2")).toEqual({ tier: "Platinum", x: 2 });
    expect(nvpiStatus("goud", "")).toEqual({ tier: "Gold", x: 1 });
    expect(nvpiStatus("PLatina", "")).toEqual({ tier: "Platinum", x: 1 });
    expect(nvpiStatus("Zilver", "")).toEqual({ tier: "Silver", x: 1 });
    expect(nvpiStatus("Diamant", "")).toEqual({ tier: "Diamond", x: 1 });
    expect(nvpiStatus("Brons", "")).toBeNull();
    expect(nvpiStatus("Goud", "twee")).toBeNull();
  });

  it("ČNS IFPI: Zlatý and Platinový singl only; no multiples, never a guessed Diamond", () => {
    expect(cnsBadge("Zlatý singl")).toEqual({ tier: "Gold", x: 1 });
    expect(cnsBadge("Platinový singl")).toEqual({ tier: "Platinum", x: 1 });
    expect(cnsBadge("Diamantový singl")).toBeNull();
    expect(cnsBadge("Zlaté album")).toBeNull();
  });

  it("ranks a German-style 3× Gold below 1× Platinum and a 2× Diamond ZPAV row above Diamond", () => {
    expect(compareHolding("standard", { tier: "Gold", x: 3 }, { tier: "Platinum", x: 1 })).toBe("UPGRADE");
    expect(compareHolding("standard", { tier: "Diamond", x: 1 }, { tier: "Diamond", x: 2 })).toBe("UPGRADE");
    expect(compareHolding("standard", { tier: "Diamond", x: 1 }, { tier: "Platinum", x: 4 })).toBeNull();
  });
});
