// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { identifyRow, normTitle, normalise, liftFeatures, TRIBUTE_RE, DASH_RE, locateRelease, evaluateRows } from "../scripts/cert-watch/match.mjs";
import { parseCards as parseBrCards, promusicaBr } from "../scripts/cert-watch/adapters/promusica-br.mjs";
import { parseRows as parseRiaaRows } from "../scripts/cert-watch/adapters/riaa.mjs";
import { tcsn, toRows as tcsnRows } from "../scripts/cert-watch/adapters/tcsn.mjs";
import { siteCaughtUp } from "../scripts/cert-watch/state.mjs";
import { coCreditBase } from "../scripts/cert-watch/site.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * SPEC §4.2–4.3, with REAL strings only. Each constant is the literal text a
 * register served (source named beside it); none is invented wording
 * (feedback-negative-controls-use-real-strings).
 */
const index = frozenIndex();
// The aliases valid for CERTIFICATIONS — what evaluateRows uses (site.mjs).
const identify = (credit: string, title: string, adapterId = "riaa", ownerTags = false, cfg = config, aliases = index.certAliases) =>
  identifyRow({ credit, title }, { adapterId, liveArtists: LIVE_ARTISTS, config: cfg, leadAliases: aliases, ownerTags });
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
    // Counted in the run details because it names one of the sixteen…
    expect((r as { namesOurs?: boolean }).namesOurs).toBe(true);
    // …while IFPI Austria's John Newman "Tribute" (a real row, 24 Sep 2026)
    // is dropped without being counted: it names none of them.
    const other = identify("John Newman", "Tribute", "ifpi-austria");
    expect(other.reject).toBe("tribute");
    expect((other as { namesOurs?: boolean }).namesOurs).toBe(false);
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

// ── Review fixes, 24 Sep 2026 ───────────────────────────────────────────────

describe("dashes: a register's hyphen is the site's en dash", () => {
  // Pro-Música Brasil, the "Rema" search (24 Sep 2026): "(2024) SINGLE | Rema |
  // Fame - A COLORS ENCORE | Universal Music | Ouro" — U+002D. The site ships
  // "Fame – A COLORS ENCORE" (app/data/afrobeats.ts, Rema) — U+2013, BR Gold.
  const br = parseBrCards(fixture("promusica-br/run-2026-09-24/artist__rema-p1.html.gz"), "x").filter((r) => r.title.startsWith("Fame"));
  const site = releaseOf(JSON.parse(fixture("site-index.2026-09-24.json")), "rema", "Fame – A COLORS ENCORE");

  it("the two real strings differ only in the dash, and fold to one key", () => {
    expect(br.map((r) => r.raw)).toEqual(["(2024) SINGLE | Rema | Fame - A COLORS ENCORE | Universal Music | Ouro (disco_ouro.png)"]);
    expect(br[0].title.codePointAt(5)).toBe(0x2d);
    expect(site.title.codePointAt(5)).toBe(0x2013);
    expect(br[0].title.toLowerCase()).not.toBe(site.title.toLowerCase());
    expect(normTitle(br[0].title)).toBe(normTitle(site.title));
    // Every dash of U+2010–U+2015 and U+2212 folds the same way.
    for (const cp of [0x2010, 0x2011, 0x2012, 0x2013, 0x2014, 0x2015, 0x2212]) {
      expect(normalise(`Fame ${String.fromCodePoint(cp)} A COLORS ENCORE`), cp.toString(16)).toBe(normalise(br[0].title));
    }
    expect("‐‑‒–—―−".replace(DASH_RE, "-")).toBe("-------");
  });

  it("the Brazilian Gold is in sync with the site — no NEW RELEASE — and a NEW PLAQUE where the site lacks it", () => {
    expect(evaluateRows(promusicaBr, br, { index, liveArtists: LIVE_ARTISTS, config }).candidates).toEqual([]);
    // LABELLED EDIT: the site without Rema's BR plaque on the record.
    const none = frozenIndex((j) => delete releaseOf(j, "rema", "Fame – A COLORS ENCORE").holdings["BR|"]);
    const c = evaluateRows(promusicaBr, br, { index: none, liveArtists: LIVE_ARTISTS, config }).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", release: "Fame – A COLORS ENCORE", title: "Fame - A COLORS ENCORE" });
  });
});

describe("certification aliases: a chart alias is used only where it is valid for certifications", () => {
  // TCSN's live list (23 Sep 2026 capture, id 170):
  //   {"milestone":"Platinum_2","title":"Happiness (Sarz)","artiste":"Sarz, Asake & Gunna","format":"Single"}
  // live-artists.mjs lists (Sarz, Happiness) as a record Wizkid is on — a
  // CHART alias. Wizkid's page holds no "Happiness"; Asake's does (NG Platinum ×2).
  it("the real Happiness row is Asake's, never Wizkid's", () => {
    expect(who(identify("Sarz, Asake & Gunna", "Happiness (Sarz)", "tcsn", true))).toEqual(["asake"]);
    // It FIRES with every alias as dumped (chart aliases included): the lead
    // the first live run reported.
    expect(who(identify("Sarz, Asake & Gunna", "Happiness (Sarz)", "tcsn", true, config, index.leadAliases))).toEqual(["asake", "wizkid"]);
    const bar = index.chartOnlyAliases.find((a: { artist: string; lead: string }) => a.artist === "wizkid" && a.lead === "Sarz");
    expect(bar?.why).toMatch(/no plaque on the site for "Happiness"/);
  });

  it("Victony & Tempoe's Soweto is Victony's, never Rema's (the ruling in config.chartOnlyAliases)", () => {
    // RIAA default_442609: "VICTONY X TEMPOE | SOWETO" — the 2022 original.
    const row = parseRiaaRows(fixture("riaa/run-2026-09-24/std__victony.html.gz")).find((r) => r.rowId === "default_442609")!;
    expect([row.credit, row.title]).toEqual(["VICTONY X TEMPOE", "SOWETO"]);
    expect(who(identify(row.credit, row.title))).toEqual(["victony"]);
    expect(who(identify(row.credit, row.title, "riaa", false, config, index.leadAliases))).toEqual(["rema", "victony"]);
    // LABELLED EDIT of config: the ruling removed — the alias passes the
    // derived checks (Rema's page holds a Soweto), which is why it is a ruling.
    const noRuling = frozenIndex(undefined, { ...config, chartOnlyAliases: [] });
    expect(noRuling.certAliases.some((a: { artist: string; lead: string }) => a.artist === "rema" && a.lead === "Victony")).toBe(true);
    // TCSN names Rema on the remix (id 56, "Victony, Tempoe & Rema ft. Don
    // Toliver | Soweto", Platinum_3): matched directly, and in sync.
    expect(who(identify("Victony, Tempoe & Rema ft. Don Toliver", "Soweto", "tcsn", true))).toEqual(["rema", "victony"]);
  });

  it("a chart title that drops the release's version is chart only (Second Sermon ≠ Second Sermon (Remix))", () => {
    const bar = index.chartOnlyAliases.find((a: { artist: string; title: string }) => a.artist === "black-sherif" && a.title === "Second Sermon");
    expect(bar?.why).toMatch(/different versions/);
    // …so Black Sherif's "Second Sermon (Remix)" no longer answers to the bare title.
    expect(locateRelease(index, "black-sherif", "Second Sermon", "single")).toBeNull();
    expect(locateRelease(index, "black-sherif", "Second Sermon (Remix)", "single")?.title).toBe("Second Sermon (Remix)");
  });

  it("keeps every alias the certification data stands on", () => {
    const has = (artist: string, lead: string, title: string) =>
      index.certAliases.some((a: { artist: string; lead: string; title: string }) => a.artist === artist && a.lead === lead && a.title === title);
    expect(has("wizkid", "Major Lazer", "Boom")).toBe(true); // config.leadAliases (Paul, 23 Sep)
    expect(has("burna-boy", "Dave", "Location")).toBe(true); // certifications.ts feature credit
    expect(has("burna-boy", "Shakira", "Dai Dai")).toBe(true); // chart alias on a certified record
    expect(has("rema", "Don Toliver", "Secondhand")).toBe(true); // the Secondhand precedent (CA Gold)
    expect(has("wizkid", "Drake", "One Dance")).toBe(true);
    // The TCSN-scoped title aliases: the ten confirmed by Paul on 24 Sep 2026
    // ("yes to all", SPEC §0.4), and Asake's "02:30" → "2:30", ruled the same
    // night (SPEC §0.5) — none marked for him to confirm.
    const tcsnTitles = config.titleAliases.filter((t: { register?: string }) => t.register === "tcsn");
    expect(tcsnTitles).toHaveLength(11);
    for (const t of tcsnTitles) {
      expect(t.why, t.printed).toMatch(/confirmed by Paul 24 Sep 2026$/);
      expect(t.ruledBy, t.printed).toBe("Paul");
    }
    // The two step-2 aliases (SNEP "JERUSALEMA", "love nwantiti"): confirmed
    // by Paul on 24 Sep 2026 too (SPEC §0.5). Every title alias now says who
    // ruled it, and none is still waiting for him.
    const step2 = config.titleAliases.filter((t: { register?: string }) => !t.register);
    expect(step2.map((t: { printed: string; release: string }) => [t.printed, t.release])).toEqual([
      ["JERUSALEMA", "Jerusalema (Remix)"],
      ["love nwantiti", "love nwantiti (ah ah ah)"],
    ]);
    for (const t of config.titleAliases) {
      expect(t.why, t.printed).toMatch(/confirmed by Paul 24 Sep 2026/);
      expect(t.why, t.printed).not.toMatch(/Paul to confirm/);
      expect(t.ruledBy, t.printed).toBe("Paul");
    }
    // Every dumped alias is either valid or chart only — none lost.
    expect(index.certAliases.length + index.chartOnlyAliases.length).toBe(index.leadAliases.length);
  });
});

describe("namesakes in the lead-alias step", () => {
  // RIAA default_352312 (24 Sep 2026): "TYLA YAWEH | HIGH RIGHT NOW", the
  // American rapper. Wizkid's cert alias (Tyla, Dynamite) names TYLA as the lead.
  const yaweh = parseRiaaRows(fixture("riaa/run-2026-09-24/std__tyla.html.gz")).find((r) => r.rowId === "default_352312")!;
  const tyla = parseRiaaRows(fixture("riaa/run-2026-09-24/std__tyla.html.gz")).find((r) => r.rowId === "default_449891")!;

  it("a Tyla Yaweh credit never fires the Tyla lead alias", () => {
    expect([yaweh.credit, yaweh.title]).toEqual(["TYLA YAWEH", "HIGH RIGHT NOW"]);
    expect(index.certAliases.some((a: { artist: string; lead: string; title: string }) => a.artist === "wizkid" && a.lead === "Tyla" && a.title === "Dynamite")).toBe(true);
    // LABELLED EDIT: the real row's title swapped for the alias's title
    // "DYNAMITE" — no register pairs the two; this is the pairing the review
    // named, built from the real credit.
    expect(who(identify(yaweh.credit, "DYNAMITE"))).toEqual([]);
    // The same edit on Tyla's own real row (default_449891, "TYLA | CHANEL"):
    // the alias fires on the real lead, beside Tyla herself.
    expect([tyla.credit, tyla.title]).toEqual(["TYLA", "CHANEL"]);
    const r = identify(tyla.credit, "DYNAMITE");
    expect(who(r)).toEqual(["tyla", "wizkid"]);
    expect(r.matches.find((m) => m.artist === "wizkid")?.via).toBe("lead-alias");
  });

  it("Rema Namakula is not Rema", () => {
    // Deezer's artist search for "Rema", saved by the 23 Sep 2026 sweep
    // (covers/art-identity/dz-artist-rema.json): {"id":5942680,"name":"Rema Namakula"}.
    expect(who(identify("Rema Namakula", ""))).toEqual([]);
    // It FIRES without the namesake (LABELLED EDIT of config).
    const without = { ...config, namesakes: config.namesakes.filter((n: { artist: string }) => n.artist !== "rema") };
    expect(who(identify("Rema Namakula", "", "riaa", false, without))).toEqual(["rema"]);
    expect(who(identify("REMA", "CALM DOWN"))).toEqual(["rema"]);
  });
});

/** TCSN's archived register prints a tier bare ("Gold"); the live list — all
 *  the parser reads — prints "Gold_1". LABELLED EDIT of the notation only. */
const liveMilestone = (e: { milestone: string }) => ({ ...e, milestone: `${e.milestone}_1` });

describe("co-credit suffixes on site titles", () => {
  // Real TCSN rows from its 21 Feb 2026 full register (Wayback capture
  // 20260221213029 of the _next/data JSON, read by the 23 Sep sweep):
  const rows = tcsnRows(
    [
      { id: 2579, milestone: "Silver", title: "Time N Affection", artiste: "Rema & Chris Brown", format: "Single", label: "", certifiedDate: "2025-02-06T00:00:00", isClaimed: false },
      { id: 1925, milestone: "Gold", title: "Dynamite (Tyla)", artiste: "Tyla & Wizkid", format: "Single", label: "", certifiedDate: "2025-02-06T00:00:00", isClaimed: false },
      { id: 1868, milestone: "Gold", title: "Lalala", artiste: "Young Jonn & Rema", format: "Single", label: "", certifiedDate: "2025-02-06T00:00:00", isClaimed: false },
      { id: 1968, milestone: "Gold", title: "Turbulence", artiste: "Wizkid & Asake", format: "Single", label: "", certifiedDate: "2025-02-06T00:00:00", isClaimed: false },
    ].map(liveMilestone)
  );
  const run = (idx = index) => evaluateRows(tcsn, rows, { index: idx, liveArtists: LIVE_ARTISTS, config });

  it("the plain titles the register prints find the site's suffixed releases — all in sync", () => {
    // The trap: the plain title is no key of the suffixed release's own title.
    expect(normTitle("Time N Affection")).not.toBe(normTitle("Time N Affection (w/ Chris Brown)"));
    expect(index.artists.rema.byTitle.has(normTitle("Time N Affection"))).toBe(false);
    expect(coCreditBase("Time N Affection (w/ Chris Brown)", LIVE_ARTISTS)).toBe("Time N Affection");
    expect(coCreditBase("Dynamite — Tyla & Wizkid", LIVE_ARTISTS)).toBe("Dynamite");
    expect(coCreditBase("Mood (Wizkid ft. BNXN)", LIVE_ARTISTS)).toBe("Mood");
    expect(coCreditBase("Fame – A COLORS ENCORE", LIVE_ARTISTS)).toBeNull();
    const got = run();
    expect(got.candidates).toEqual([]);
    // Rema, Tyla, Wizkid ×2, Rema, Asake: six matches, every one in sync.
    expect(got.counts.inSync).toBe(6);
    for (const [artist, title, site] of [
      ["rema", "Time N Affection", "Time N Affection (w/ Chris Brown)"],
      ["tyla", "Dynamite", "Dynamite — Tyla & Wizkid"],
      ["wizkid", "Dynamite", "Dynamite (Tyla & Wizkid)"],
      ["rema", "Lalala", "Lalala (Young Jonn & Rema)"],
      ["wizkid", "Turbulence", "Turbulence (w/ Asake)"],
    ]) expect(locateRelease(index, artist, title, "single")?.title, `${artist} ${title}`).toBe(site);
  });

  it("a real new plaque on a suffixed release is a NEW PLAQUE, shown under the site's own title", () => {
    // LABELLED EDIT: the site without Rema's NG Silver on Time N Affection.
    const none = frozenIndex((j) => delete releaseOf(j, "rema", "Time N Affection (w/ Chris Brown)").holdings["NG|"]);
    const c = run(none).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", artist: "rema", release: "Time N Affection (w/ Chris Brown)", title: "Time N Affection" });
  });

  it("strips only a CO-CREDIT: versions and subtitles stay significant", () => {
    const loc = (artist: string, title: string) => locateRelease(index, artist, title, "single")?.title ?? null;
    expect(loc("davido", "Drift (Remix)")).toBe("Drift (Remix) (Teejay & Davido)");
    expect(loc("davido", "Drift")).toBeNull();
    expect(loc("rema", "Fame")).toBeNull(); // "Fame – A COLORS ENCORE" is a subtitle
    expect(loc("wizkid", "Frames")).toBeNull(); // "Frames (Who's Gonna Know)"
    expect(loc("seyi-vibez", "On God")).toBeNull(); // two releases: "(Kashy)" and "(Vibez Inc, …)"
  });
});

describe("a row with no format that fits an album and a single", () => {
  // TCSN, Wayback capture 20251002222239 of the _next/data JSON (23 Sep sweep):
  //   {"id":893,"milestone":"Gold","title":"I Told Them","artiste":"Burna Boy ft. GZA","format":""}
  // Burna Boy's page has the album "I Told Them..." (NG Platinum) and the
  // single "I Told Them" (NG Gold): both normalise to "i told them".
  const [row] = tcsnRows([{ id: 893, milestone: "Gold", title: "I Told Them", artiste: "Burna Boy ft. GZA", format: "", label: "", certifiedDate: "2025-01-05T00:00:00", isClaimed: false }].map(liveMilestone));
  const run = (idx = index) => evaluateRows(tcsn, [row], { index: idx, liveArtists: LIVE_ARTISTS, config });

  it("is in sync when every release it could be already holds it", () => {
    expect(row.format).toBe("unknown");
    const got = run();
    expect(got.candidates).toEqual([]);
    expect(got.counts.inSync).toBe(1);
  });

  it("is flagged AMBIGUOUS — never silently the album's — when one of them lacks it", () => {
    // LABELLED EDIT: the single without its NG Gold. Settling on the album
    // (NG Platinum, ahead) would have said nothing at all.
    const noSingle = frozenIndex((j) => delete releaseOf(j, "burna-boy", "I Told Them").holdings["NG|"]);
    // The first hit is the album — what a single-answer locate settled on.
    expect(locateRelease(noSingle, "burna-boy", row.title, row.format)?.title).toBe("I Told Them...");
    const c = run(noSingle).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "AMBIGUOUS", release: null, format: "unknown" });
    expect(c[0].alternatives).toEqual([
      { title: "I Told Them...", format: "album", holding: { tier: "Platinum", x: 1 } },
      { title: "I Told Them", format: "single", holding: null },
    ]);
    expect(c[0].flags.join(" ")).toMatch(/the register gives no format, and the site has 2 releases this title fits \(album "I Told Them\.\.\." and single "I Told Them"\)/);
    // Carried to a later run, it clears only when EVERY release holds it.
    expect(siteCaughtUp(noSingle, c[0], "standard")).toBe(false);
    expect(siteCaughtUp(index, c[0], "standard")).toBe(true);
  });

  it("the same row WITH a format finds its one release", () => {
    // The 21 Feb 2026 capture's row for the same record: id 2105, format "Single".
    const [single] = tcsnRows([{ id: 2105, milestone: "Gold", title: "I Told Them", artiste: "Burna Boy ft. GZA", format: "Single", label: "", certifiedDate: "2025-02-06T00:00:00", isClaimed: false }].map(liveMilestone));
    const noSingle = frozenIndex((j) => delete releaseOf(j, "burna-boy", "I Told Them").holdings["NG|"]);
    const c = evaluateRows(tcsn, [single], { index: noSingle, liveArtists: LIVE_ARTISTS, config }).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", release: "I Told Them", format: "single" });
  });
});
