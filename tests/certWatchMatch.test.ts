// @vitest-environment node
import { describe, it, expect } from "vitest";
import { identifyRow, normTitle, liftFeatures, TRIBUTE_RE, locateRelease } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, frozenIndex } from "./certWatchHelpers";

/**
 * SPEC §4.2–4.3, with REAL strings only. Each constant is the literal text a
 * register served (source named beside it); none is invented wording
 * (feedback-negative-controls-use-real-strings).
 */
const index = frozenIndex();
const identify = (credit: string, title: string, adapterId = "riaa", ownerTags = false) =>
  identifyRow({ credit, title }, { adapterId, liveArtists: LIVE_ARTISTS, config, leadAliases: index.leadAliases, ownerTags });
const who = (r: { matches: { artist: string }[] }) => r.matches.map((m) => m.artist).sort();

describe("identify: which of the sixteen a row belongs to", () => {
  it("matches the credit strings registers really print", () => {
    expect(who(identify("SHAKIRA & BURNA BOY", "DAI DAI"))).toEqual(["burna-boy"]); // RIAA default_451299
    expect(who(identify("Shakira, Burna Boy", "Dai Dai", "musiccanada"))).toEqual(["burna-boy"]); // Music Canada id 89702
    expect(who(identify("Dave feat. Tems", "Raindance", "ifpi-danmark"))).toEqual(["tems"]); // IFPI Danmark (23 Sep sweep)
    expect(who(identify("Tems, Dave", "Raindance (feat. Tems)", "ifpi-greece"))).toEqual(["tems"]); // ifpi.gr digital_ien
  });

  it("reads a featured artist out of the title when the credit names the lead only", () => {
    // RIAA default_424119: the artist cell is the lead alone.
    const r = identify("DRAKE", "ONE DANCE (FEAT. WIZKID & KYLA)");
    expect(who(r)).toEqual(["wizkid"]);
    expect(r.creditField).toContain("WIZKID & KYLA");
    expect(liftFeatures("GINGER (FT. BURNA BOY)")).toEqual({ base: "GINGER", lifted: ["BURNA BOY"] });
  });

  it("never matches BNXN on BUJU BANTON (RIAA default_36107, badge ST level 0)", () => {
    expect(who(identify("BUJU BANTON", "TIL SHILOH"))).toEqual([]);
  });

  it("matches a Buju-era credit to BNXN — with a flag", () => {
    // BPI's credit for Mood, recorded in docs/sweeps/bnxn-certifications-v1.md:
    // "| 🇬🇧 UK | BPI | Mood | Silver | 02.08.2024 | `WIZKID FT BUJU` |"
    const r = identify("WIZKID FT BUJU", "MOOD", "bpi");
    expect(who(r)).toEqual(["bnxn", "wizkid"]);
    const bnxn = r.matches.find((m) => m.artist === "bnxn");
    expect(bnxn?.via).toBe("buju");
    expect(bnxn?.flags.join(" ")).toMatch(/Buju-era credit — confirm it is BNXN/);
    // …and it locates his board's "Mood (Wizkid ft. BNXN)" through the alias title.
    expect(locateRelease(index, "bnxn", r.title, "single")?.title).toBe("Mood (Wizkid ft. BNXN)");
  });

  it("keeps TCSN's owner tag with its owner: Reason (Omah Lay) is never Asake's Reason", () => {
    // Real rows from TCSN's live certification capture (23 Sep 2026):
    //   {"title": "Reason (Omah Lay)", "artiste": "Omah Lay", "milestone": "Platinum_5"}
    //   {"title": "Reason", "artiste": "Asake ft. Russ", "milestone": "Platinum_1"}
    const omah = identify("Omah Lay", "Reason (Omah Lay)", "tcsn", true);
    expect(who(omah)).toEqual(["omah-lay"]);
    expect(omah.ownerTag).toBe("Omah Lay");
    expect(omah.title).toBe("Reason");
    const asake = identify("Asake ft. Russ", "Reason", "tcsn", true);
    expect(who(asake)).toEqual(["asake"]);
    expect(asake.ownerTag).toBeNull();
    // Each locates its OWN release, never the other's.
    expect(locateRelease(index, "omah-lay", omah.title, "single")?.artist).toBe("omah-lay");
    expect(locateRelease(index, "asake", asake.title, "single")?.artist).toBe("asake");
  });

  it("flags a co-credited artist on a record TCSN tags as someone else's", () => {
    // {"title": "Bad Vibes (Ayra Starr)", "artiste": "Ayra Starr & Seyi Vibez"}
    const r = identify("Ayra Starr & Seyi Vibez", "Bad Vibes (Ayra Starr)", "tcsn", true);
    expect(who(r)).toEqual(["ayra-starr", "seyi-vibez"]);
    const seyi = r.matches.find((m) => m.artist === "seyi-vibez");
    expect(seyi?.flags.join(" ")).toMatch(/files this as "Ayra Starr"'s record/);
  });

  it("matches the truncated IFPI Danmark Boom row to Wizkid through the lead alias, flagged", () => {
    // ifpi.dk, 01.08.2017: "Major Lazer Feat. Moti Ty Dolla $ign...\tBoom\tWarner Music\tTrack\tPlatin"
    const r = identify("Major Lazer Feat. Moti Ty Dolla $ign...", "Boom", "ifpi-danmark");
    expect(who(r)).toEqual(["wizkid"]);
    expect(r.matches[0].via).toBe("lead-alias");
    expect(r.matches[0].flags.join(" ")).toMatch(/credit truncated by the register/);
    // The lead alone is not enough: the title must be the alias's title…
    expect(who(identify("Major Lazer Feat. Moti Ty Dolla $ign...", "Lean On", "ifpi-danmark"))).toEqual([]);
    // …and the title alone is not enough: the credit must name the lead.
    // ifpi.dk, 22.03.2012: "Italo Brothers\tBoom\tD:W\tStreaming\tGuld"
    expect(who(identify("Italo Brothers", "Boom", "ifpi-danmark"))).toEqual([]);
  });

  it("treats a version qualifier as significant: Sungba is not Sungba (Remix)", () => {
    expect(normTitle("SUNGBA")).not.toBe(normTitle("Sungba (Remix)"));
    expect(normTitle("Sungba - Remix")).toBe(normTitle("Sungba (Remix)"));
    // BPI files the remix as plain "SUNGBA", credited to Asake: it is Asake's
    // row, and never Burna Boy's "Sungba (Remix)".
    const r = identify("ASAKE", "SUNGBA", "bpi");
    expect(who(r)).toEqual(["asake"]);
    expect(locateRelease(index, "burna-boy", "SUNGBA", "single")).toBeNull();
  });

  it("rejects tribute and karaoke acts, which carry real names in the title", () => {
    // Deezer, recorded in memory: "Be Honest (8-Bit Jorja Smith & Burna Boy
    // Emulation)" by 8-Bit Arcade — it contains "Burna Boy", which is the trap.
    const title = "Be Honest (8-Bit Jorja Smith & Burna Boy Emulation)";
    expect(/burna boy/i.test(title)).toBe(true);
    expect(TRIBUTE_RE.test(title)).toBe(true);
    const r = identify("8-Bit Arcade", title, "musiccanada");
    expect(r.reject).toBe("tribute");
    expect(r.matches).toEqual([]);
  });

  it("rejects the namesakes live-artists.mjs names (shipped comments) and the ones found live", () => {
    expect(who(identify("Reman", "x"))).toEqual([]);
    expect(who(identify("La Suprema Corte", "x"))).toEqual([]);
    expect(who(identify("Mackay", "x"))).toEqual([]);
    expect(who(identify("McKay", "x"))).toEqual([]);
    for (const n of ["Olamide Badoo", "Tijani Olamide", "Yusuf Olamide Olotu"]) expect(who(identify(n, "x"))).toEqual([]);
    expect(who(identify("I Shot The Sheriff", "x"))).toEqual([]);
    expect(who(identify("SHERIFF", "x"))).toEqual([]);
    // RIAA default_352312, first live dry run (24 Sep 2026): the American rapper.
    expect(who(identify("TYLA YAWEH", "HIGH RIGHT NOW"))).toEqual([]);
    // …while the real artists still match beside a namesake.
    expect(who(identify("Olamide", "x"))).toEqual(["olamide"]);
    expect(who(identify("TYLA", "WATER"))).toEqual(["tyla"]);
  });

  it("holds TCSN's Asake | Bad Influence and never makes it a candidate", () => {
    // {"title": "Bad Influence", "artiste": "Asake", "milestone": "Platinum_2"}
    const r = identify("Asake", "Bad Influence", "tcsn", true);
    expect(r.held?.why).toMatch(/Omah Lay's song/);
    expect(r.matches).toEqual([]);
  });

  it("matches a row naming two of the sixteen once for each", () => {
    // RIAA default_439380: "WIZKID | ESSENCE (FEAT. TEMS)"
    expect(who(identify("WIZKID", "ESSENCE (FEAT. TEMS)"))).toEqual(["tems", "wizkid"]);
  });
});
