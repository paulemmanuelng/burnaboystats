// @vitest-environment node
import { describe, it, expect } from "vitest";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { riaa, riaaLatin, parseRows } from "../scripts/cert-watch/adapters/riaa.mjs";
import { musiccanada, parseAwards } from "../scripts/cert-watch/adapters/musiccanada.mjs";
import { snep, parseCards } from "../scripts/cert-watch/adapters/snep.mjs";
import { ifpiSverige, parseRecord } from "../scripts/cert-watch/adapters/ifpi-sverige.mjs";
import { ifpiDanmark, parsePage as parseDkPage } from "../scripts/cert-watch/adapters/ifpi-danmark.mjs";
import { hydrateSiteIndex, buildSiteIndex } from "../scripts/cert-watch/site.mjs";
import * as certs from "../app/data/certifications";
import * as afro from "../app/data/afrobeats";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

/**
 * Replays of REAL register rows against the site index frozen at build time
 * (site-index.2026-09-24.json). Where the site is edited to show what a row
 * would have produced, the edit is LABELLED — and every edit is to the site,
 * never to the register row, except the one level-12 edit named below.
 */
const run = (adapter: typeof riaa, rows: unknown[], index = frozenIndex()) =>
  evaluateRows(adapter, rows, { index, liveArtists: LIVE_ARTISTS, config });

const mcRows = parseAwards(fixture("musiccanada/awards-p1-2026-09-23.json"));
const mcDaiDai = mcRows.filter((r) => r.rowId === "89702");

describe("Music Canada: the Dai Dai row (id 89702, double-platinum-single)", () => {
  it("is in sync with the real site (added in 2c7c709f on 22 Sep)", () => {
    const got = run(musiccanada, mcRows);
    expect(got.candidates.filter((c) => c.artist === "burna-boy")).toEqual([]);
    expect(got.counts.matched).toBeGreaterThanOrEqual(1);
  });

  it("is a NEW PLAQUE against the site as it stood before 2c7c709f", () => {
    // LABELLED EDIT: remove Burna Boy's CA holding for Dai Dai.
    const before = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Dai Dai").holdings["CA|"]);
    const got = run(musiccanada, mcDaiDai, before);
    expect(got.candidates).toHaveLength(1);
    expect(got.candidates[0]).toMatchObject({ kind: "NEW PLAQUE", artist: "burna-boy", release: "Dai Dai", country: "CA", tierRaw: "award_cert-double-platinum-single", holding: null });
  });

  it("is an UPGRADE when the site held a lower tier", () => {
    // LABELLED EDIT: the site at CA Platinum ×1.
    const lower = frozenIndex((j) => (releaseOf(j, "burna-boy", "Dai Dai").holdings["CA|"] = { tier: "Platinum", x: 1 }));
    expect(run(musiccanada, mcDaiDai, lower).candidates[0]).toMatchObject({ kind: "UPGRADE", reading: { tier: "Platinum", x: 2 } });
  });
});

describe("RIAA", () => {
  const latinRow = parseRows(fixture("riaa/latin-search-burna-2026-09-24.html.gz")).filter((r) => r.rowId === "default_451299");

  it("the Latin Dai Dai row is in sync with the site's RIAA Latin plaque", () => {
    expect(run(riaaLatin, latinRow).candidates).toEqual([]);
  });

  it("the Latin row never compares with a standard-programme holding", () => {
    // LABELLED EDIT: the same 2× held as a STANDARD US plaque instead.
    const std = frozenIndex((j) => {
      const r = releaseOf(j, "burna-boy", "Dai Dai");
      delete r.holdings["US|RIAA Latin"];
      r.holdings["US|"] = { tier: "Platinum", x: 2 };
    });
    const c = run(riaaLatin, latinRow, std).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", programme: "RIAA Latin", holding: null });
  });

  it("suppresses One Dance and Wait For U at badge DI level 11 (known divergences)", () => {
    const od = parseRows(fixture("riaa/search-one-dance.html.gz"));
    const wfu = parseRows(fixture("riaa/search-wait-for-u.html.gz"));
    const got = run(riaa, [...od, ...wfu]);
    expect(got.candidates).toEqual([]);
    expect(got.suppressed.divergences.map((d) => `${d.artist}|${d.title}|${d.readingRaw}`).sort()).toEqual([
      "tems|Wait For U|badge DI level 11",
      "wizkid|One Dance|badge DI level 11",
    ]);
  });

  it("surfaces One Dance again at level 12", () => {
    // LABELLED EDIT to the register row: level 11 → 12, the reading that
    // would mean RIAA certified a twelfth million.
    const html = fixture("riaa/search-one-dance.html.gz").replaceAll("badge DI level 11", "badge DI level 12");
    const got = run(riaa, parseRows(html));
    expect(got.candidates).toHaveLength(1);
    expect(got.candidates[0]).toMatchObject({ kind: "UPGRADE", artist: "wizkid", release: "One Dance", tierRaw: "badge DI level 12" });
  });

  it("finds nothing where the site is in sync or ahead", () => {
    // Burna Boy's eight rows on the standard 'burna' search: all held.
    const burna = parseRows(fixture("riaa/search-burna.html.gz")).filter((r) => r.programme === null);
    expect(run(riaa, burna).candidates).toEqual([]);
    // LABELLED EDIT: the site AHEAD — Last Last at US Platinum ×3 — still nothing.
    const ahead = frozenIndex((j) => (releaseOf(j, "burna-boy", "Last Last").holdings["US|"] = { tier: "Platinum", x: 3 }));
    expect(run(riaa, burna, ahead).candidates).toEqual([]);
  });

  it("never gives Burna Boy's Location another act's LOCATION (title-only would read Diamond)", () => {
    // RIAA search 'location' (23 Sep sweep): KHALID | LOCATION is default_291948,
    // badge DI level 10 — matched on title alone it would be a phantom
    // Gold → Diamond upgrade for "Location" (Dave ft. Burna Boy, default_428226).
    const rows = parseRows(fixture("riaa/search-location.html.gz"));
    expect(rows.find((r) => r.rowId === "default_291948")).toMatchObject({ credit: "KHALID", title: "LOCATION", tierRaw: "badge DI level 10" });
    const got = run(riaa, rows.filter((r) => r.programme === null));
    expect(got.candidates).toEqual([]);
    expect(got.counts.matched).toBe(1); // Dave's row only, in sync at Gold
  });

  it("a row missing from the register produces no candidate — absence is not evidence", () => {
    expect(run(riaa, []).candidates).toEqual([]);
  });

  it("never matches TYLA YAWEH to Tyla (first live dry run, 24 Sep 2026)", () => {
    const rows = parseRows(fixture("riaa/run-2026-09-24/std__tyla.html.gz"));
    expect(rows.some((r) => r.credit === "TYLA YAWEH")).toBe(true);
    expect(run(riaa, rows.filter((r) => r.programme === null)).candidates).toEqual([]);
  });

  it("Victony & Tempoe's Soweto (the original) is Victony's plaque, never a Rema lead", () => {
    // RIAA default_442609 "VICTONY X TEMPOE | SOWETO": the credit does not name
    // Rema, and it is the 2022 original he is not on (the Rema sweep removed
    // the Spanish Gold on the same credit). live-artists.mjs lists (Victony,
    // Soweto) for the CHARTS; config.chartOnlyAliases keeps it out of
    // certification matching.
    const rows = parseRows(fixture("riaa/run-2026-09-24/std__victony.html.gz")).filter((r) => r.rowId === "default_442609");
    const got = run(riaa, rows);
    expect(got.candidates).toEqual([]);
    expect(got.counts.inSync).toBe(1); // Victony's own US Gold
    // It FIRES with the chart aliases (LABELLED EDIT: every dumped alias used
    // for certifications, as before the review): the first live run's lead.
    const idx = frozenIndex();
    const before = run(riaa, rows, { ...idx, certAliases: idx.leadAliases });
    const rema = before.candidates.find((c) => c.artist === "rema");
    expect(rema).toMatchObject({ kind: "NEW PLAQUE", release: "Soweto" });
    expect(rema!.flags.join(" ")).toMatch(/credit does not name Rema/);
  });
});

describe("rows other registers served (real strings)", () => {
  const bpi = { id: "bpi", country: "UK", programme: null, ladder: "standard" };

  it("BPI's ASAKE | SUNGBA never yields a Burna Boy candidate (a kept plaque)", () => {
    // BPI detail page, 23 Sep sweep: "Single ASAKE SUNGBA Most Recent
    // Certification Silver … Most Recent Certification Date 17 January 2025".
    const row = { credit: "ASAKE", title: "SUNGBA", format: "single", tierRaw: "Silver", reading: { tier: "Silver", x: 1 }, raw: "ASAKE | SUNGBA | Most Recent Certification Silver" };
    const got = run(bpi as typeof riaa, [row]);
    expect(got.candidates.filter((c) => c.artist === "burna-boy")).toEqual([]);
  });

  it("TCSN's Asake | Bad Influence is held, never a candidate", () => {
    const tcsn = { id: "tcsn", country: "NG", programme: null, ladder: "standard", ownerTags: true };
    const row = { credit: "Asake", title: "Bad Influence", format: "single", tierRaw: "Platinum_2", reading: { tier: "Platinum", x: 2 }, raw: '{"title": "Bad Influence", "artiste": "Asake"}' };
    const got = run(tcsn as typeof riaa, [row]);
    expect(got.candidates).toEqual([]);
    expect(got.suppressed.held).toHaveLength(1);
  });

  it("an unparsed tier on a matched row is listed as UNREADABLE TIER, never skipped", () => {
    // LABELLED EDIT: the Dai Dai MC row with its class renamed to a word never seen.
    const row = { ...mcDaiDai[0], tierRaw: "award_cert-double-diamond-single", reading: null };
    const before = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Dai Dai").holdings["CA|"]);
    expect(run(musiccanada, [row], before).candidates[0]).toMatchObject({ kind: "UNREADABLE TIER" });
  });
});

describe("SNEP replaces a card on upgrade (step 2)", () => {
  const run = (rows: unknown[], index = frozenIndex()) => evaluateRows(snep, rows, { index, liveArtists: LIVE_ARTISTS, config });
  const cards = parseCards(fixture("snep/q-burna.html.gz"));

  it("the superseded Platine card (30/07/2026) yields nothing against the site's Diamond", () => {
    const platine = cards.filter((r) => r.title === "DAI DAI" && r.tierRaw === "Platine");
    expect(platine).toHaveLength(1);
    expect(platine[0].dateRaw).toBe("30/07/2026");
    expect(run(platine).candidates).toEqual([]);
  });

  it("the Diamant card is in sync with the real site, and an UPGRADE against the site at Platinum", () => {
    expect(run(cards).candidates.filter((c) => c.artist === "burna-boy")).toEqual([]);
    // LABELLED EDIT: the site as it stood before the FR upgrade — Platinum.
    const before = frozenIndex((j) => (releaseOf(j, "burna-boy", "Dai Dai").holdings["FR|"] = { tier: "Platinum", x: 1 }));
    const got = run(cards.filter(snep.control.find), before).candidates;
    expect(got).toHaveLength(1);
    expect(got[0]).toMatchObject({ kind: "UPGRADE", country: "FR", reading: { tier: "Diamond", x: 1 }, tierRaw: "Diamant" });
  });

  it("reads SNEP's JERUSALEMA card as the remix through config.titleAliases, in sync at Diamond", () => {
    // Live dry run, 24 Sep 2026: "Singles | JERUSALEMA | MASTER KG FEAT. BURNA
    // BOY & NOMCEBO ZIKODE | … | Diamant | constat 23/10/2020".
    const rows = parseCards(fixture("snep/run-2026-09-24/q__burna-boy.html.gz")).filter((r) => r.title === "JERUSALEMA");
    expect(rows).toHaveLength(1);
    expect(rows[0].credit).toBe("MASTER KG FEAT. BURNA BOY & NOMCEBO ZIKODE");
    expect(run(rows).candidates).toEqual([]);
    // Without the alias it would be a NEW RELEASE — the alias is what explains it.
    const bare = { ...config, titleAliases: [] };
    const idx = hydrateSiteIndex(JSON.parse(fixture("site-index.2026-09-24.json")), LIVE_ARTISTS, bare);
    const noAlias = evaluateRows(snep, rows, { index: idx, liveArtists: LIVE_ARTISTS, config: bare });
    expect(noAlias.candidates[0]).toMatchObject({ kind: "NEW RELEASE", artist: "burna-boy" });
  });
});

describe("Ifpi Sverige: Tyla's Water (step 2)", () => {
  const water = () => {
    const rec = parseRecord(fixture("sverige/record-12096186.html", "latin1"));
    return [{ rowId: "12096186", credit: rec.artist, title: rec.title, format: "single", tierRaw: rec.cert, reading: rec.reading, dateRaw: rec.date, raw: rec.cert }];
  };
  const run = (index = frozenIndex()) => evaluateRows(ifpiSverige, water(), { index, liveArtists: LIVE_ARTISTS, config });

  it("is in sync with the real site (added in PR #317)", () => {
    expect(run().candidates).toEqual([]);
  });

  it("is an UPGRADE Gold → Platinum against the site as it stood before PR #317", () => {
    // LABELLED EDIT: Tyla's Water at SE Gold.
    const before = frozenIndex((j) => (releaseOf(j, "tyla", "Water").holdings["SE|"] = { tier: "Gold", x: 1 }));
    const c = run(before).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "UPGRADE", artist: "tyla", release: "Water", country: "SE", tierRaw: "Platina - cert.nr 11312 - 2026-09-18", holding: { tier: "Gold", x: 1 } });
  });
});

describe("the site ahead of the register (step 3)", () => {
  it("the real 24 Sep Latin row (badge LA level 2) against the REAL site (×6 since PR #320) is never a candidate", () => {
    const real = hydrateSiteIndex(buildSiteIndex(certs, afro, LIVE_ARTISTS, config), LIVE_ARTISTS, config);
    const us = real.artists["burna-boy"].byTitle.get("dai dai")[0].holdings["US|RIAA Latin"];
    // Derived: whatever certifications.ts holds, it is above level 2.
    expect(us.tier).toBe("Platinum");
    expect(us.x).toBeGreaterThan(2);
    const latinRow = parseRows(fixture("riaa/latin-search-burna-2026-09-24.html.gz")).filter((r) => r.rowId === "default_451299");
    expect(latinRow[0].tierRaw).toBe("badge LA level 2");
    const got = run(riaaLatin, latinRow, real);
    expect(got.candidates).toEqual([]);
    expect(got.counts.inSync).toBe(1);
  });
});

describe("IFPI Danmark: Boom through the lead alias (step 2)", () => {
  const run = (rows: unknown[], index = frozenIndex()) => evaluateRows(ifpiDanmark, rows, { index, liveArtists: LIVE_ARTISTS, config });
  const boom = parseDkPage(fixture("danmark/boom-recheck.html.gz")).filter((r) => r.title === "Boom" && r.credit.startsWith("Major Lazer"));

  it("Boom is Wizkid's through config.leadAliases, flagged as truncated, and in sync at Platin", () => {
    const got = run(boom);
    expect(got.counts.matched).toBe(2);
    expect(got.candidates).toEqual([]);
    // LABELLED EDIT: the site without a DK plaque on Boom.
    const none = frozenIndex((j) => delete releaseOf(j, "wizkid", "Boom").holdings["DK|"]);
    const c = run(boom, none).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", artist: "wizkid", release: "Boom", reading: { tier: "Platinum", x: 1 } });
    expect(c[0].flags.join(" ")).toMatch(/credit truncated by the register/);
  });

  it("Raindance at Platin is in sync with the site", () => {
    expect(run(parseDkPage(fixture("danmark/page6.html.gz"))).candidates.filter((c) => c.artist === "tems")).toEqual([]);
  });
});
