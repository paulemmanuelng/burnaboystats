// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import * as certs from "../app/data/certifications";
import * as afro from "../app/data/afrobeats";
import { buildSiteIndex, hydrateSiteIndex, leadOfCredit, holdingFor } from "../scripts/cert-watch/site.mjs";
import { LIVE_ARTISTS, config, fixture } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * The watcher's picture of the site is built from the REAL app/data modules,
 * so a plaque added by hand is seen on the next run. Nothing here types a
 * count: every total is derived from the modules the site itself renders.
 */
const json = buildSiteIndex(certs, afro, LIVE_ARTISTS, config);
const index = hydrateSiteIndex(json, LIVE_ARTISTS);

describe("buildSiteIndex over the real app/data", () => {
  it("indexes every plaque exactly once (derived, never typed)", () => {
    const expected = certs.totalAwards() + afro.afrobeatsArtists.reduce((n, a) => n + afro.certCount(a), 0);
    expect(json.totals.plaques).toBe(expected);
    const counted = json.releases.reduce((n: number, r: { holdings: object }) => n + Object.keys(r.holdings).length, 0);
    expect(counted).toBe(expected);
    expect(json.totals.burnaPlaques).toBe(certs.totalAwards());
  });

  it("keys a plaque by (country, programme): Dai Dai US is RIAA Latin, CO is label-issued", () => {
    const dai = index.artists["burna-boy"].byTitle.get("dai dai")[0];
    // The multiple is READ from certifications.ts, never typed: PR #320 moved
    // it from 2 to 6 (RIAA's own post of 23 Sep 2026), and a typed 2 went red.
    const us = certs.singles.find((r) => r.title === "Dai Dai")!.certs.find((c) => c.c === "US" && c.body === "RIAA Latin")!;
    expect(us).toBeTruthy();
    expect(dai.holdings["US|RIAA Latin"]).toEqual({ tier: us.level, x: us.x ?? 1, body: "RIAA Latin" });
    expect(dai.holdings["US|RIAA Latin"].tier).toBe("Platinum");
    expect(dai.holdings["US|"]).toBeUndefined();
    expect(dai.holdings["CO|Sony Music Colombia"]).toMatchObject({ tier: "Gold" });
    // So a Pro Música Colombia row (programme null) can never compare with it.
    expect(dai.holdings["CO|"]).toBeUndefined();
  });

  it("covers exactly the site's sixteen artists", () => {
    expect(new Set(Object.keys(LIVE_ARTISTS))).toEqual(new Set(["burna-boy", ...afro.afrobeatsSlugs]));
  });

  it("refuses a LIVE_ARTISTS that disagrees with the site", () => {
    const { tems, ...fifteen } = LIVE_ARTISTS;
    expect(tems).toBeTruthy();
    expect(() => buildSiteIndex(certs, afro, fifteen, config)).toThrow(/LIVE_ARTISTS and the site disagree/);
  });

  it("reads Burna Boy's feature credits as lead aliases", () => {
    expect(leadOfCredit("Dave ft. Burna Boy", LIVE_ARTISTS["burna-boy"].credit)).toBe("Dave");
    expect(leadOfCredit("Master KG, Nomcebo & Burna Boy", LIVE_ARTISTS["burna-boy"].credit)).toBe("Master KG");
    expect(leadOfCredit("feat. Popcaan", LIVE_ARTISTS["burna-boy"].credit)).toBeNull();
    const has = (artist: string, lead: string, title: string) =>
      json.leadAliases.some((a: { artist: string; lead: string; title: string }) => a.artist === artist && a.lead === lead && a.title === title);
    expect(has("burna-boy", "Dave", "Location")).toBe(true);
    expect(has("wizkid", "Major Lazer", "Boom")).toBe(true);
    expect(has("wizkid", "Drake", "One Dance")).toBe(true);
  });

  it("finds a release by an alias title, but a release's own title wins", () => {
    // live-artists.mjs: { artist: "Wizkid", title: "Mood", release: "Mood (Wizkid ft. BNXN)" }
    expect(holdingFor(index, "bnxn", "MOOD", "US", null).release?.title).toBe("Mood (Wizkid ft. BNXN)");
  });

  /**
   * CHANGED SINCE THE FREEZE. The dump in tests/fixtures/cert-watch was captured
   * on 24 Sep 2026, before the debug-fix branch corrected three Burna Boy
   * feature credits in app/data/certifications.ts. A fresh build reads the
   * corrected credits, so its certification aliases differ from the dump's by
   * exactly these entries, listed by hand with the item that made each change.
   *
   * The fixture is NOT regenerated to absorb them: other watcher tests read
   * that snapshot as it was (Dai Dai at RIAA Latin 2X, for one). When the
   * fixture is next re-frozen, these lists must be emptied; the checks below
   * fail if an entry is already in the dump.
   */
  const ALIASES_GAINED_SINCE_FREEZE = [
    // F-10: Talibans II is credited "Byron Messia ft. Burna Boy"; the dump's
    // "with Byron Messia" named no lead, so it had no alias.
    { id: "burna-boy|Byron Messia|Talibans II", item: "F-10" },
    // A-32: Lenu (Remix) is credited "BNXN ft. Burna Boy"; the dump's row had
    // no credit at all.
    { id: "burna-boy|BNXN|Lenu (Remix)", item: "A-32" },
  ];
  const ALIASES_RENAMED_SINCE_FREEZE = [
    // F-10: DJ Tárico keeps his accent. match.mjs folds diacritics, so the
    // watcher matches the same register rows under either spelling.
    { from: "burna-boy|DJ Tarico|Yaba Buluku (Remix)", to: "burna-boy|DJ Tárico|Yaba Buluku (Remix)", item: "F-10" },
  ];

  it("decides which aliases match CERTIFICATIONS the same way for a fresh build and the frozen dump", () => {
    const fresh = hydrateSiteIndex(json, LIVE_ARTISTS, config);
    const frozen = hydrateSiteIndex(JSON.parse(fixture("site-index.2026-09-24.json")), LIVE_ARTISTS, config);
    const ids = (l: { artist: string; lead: string; title: string }[]) => l.map((a) => `${a.artist}|${a.lead}|${a.title}`).sort();
    // The lists describe the dump honestly: nothing "gained" is in it yet,
    // and every rename starts from a spelling it holds.
    const frozenIds = ids(frozen.certAliases);
    for (const g of ALIASES_GAINED_SINCE_FREEZE) expect(frozenIds, g.item).not.toContain(g.id);
    for (const r of ALIASES_RENAMED_SINCE_FREEZE) expect(frozenIds, r.item).toContain(r.from);
    const renamed = new Map(ALIASES_RENAMED_SINCE_FREEZE.map((r) => [r.from, r.to]));
    const expected = [...frozenIds.map((id) => renamed.get(id) ?? id), ...ALIASES_GAINED_SINCE_FREEZE.map((g) => g.id)].sort();
    expect(expected).toEqual(ids(fresh.certAliases));
    expect(ids(frozen.chartOnlyAliases)).toEqual(ids(fresh.chartOnlyAliases));
    // Every chart-only alias is a chart alias (live-artists.mjs); the site's
    // own feature credits and config's rulings are never gated.
    expect(fresh.chartOnlyAliases.every((a: { source: string }) => a.source === "live-artists.mjs")).toBe(true);
    // The frozen dump still carries the alternate the barred Second Sermon
    // alias taught it; hydration drops it (a fresh build never adds it).
    const raw = JSON.parse(fixture("site-index.2026-09-24.json")).releases.find((r: { artist: string; title: string }) => r.artist === "black-sherif" && r.title === "Second Sermon (Remix)");
    expect(raw.altTitles).toEqual(["second sermon"]);
    expect(frozen.artists["black-sherif"].byAlt.has("second sermon")).toBe(false);
    expect(json.releases.find((r: { artist: string; title: string }) => r.artist === "black-sherif" && r.title === "Second Sermon (Remix)").altTitles).toEqual([]);
  });

  it("the frozen site-index fixture has the shape of a fresh build", () => {
    const frozen = JSON.parse(fixture("site-index.2026-09-24.json"));
    expect(Object.keys(frozen).sort()).toEqual(Object.keys(json).sort());
    expect(Object.keys(frozen.totals).sort()).toEqual(Object.keys(json.totals).sort());
    expect(Object.keys(frozen.releases[0]).sort()).toEqual(Object.keys(json.releases[0]).sort());
    expect(Object.keys(frozen.leadAliases[0]).sort()).toEqual(Object.keys(json.leadAliases[0]).sort());
  });
});
