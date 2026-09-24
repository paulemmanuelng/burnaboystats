// @vitest-environment node
import { describe, it, expect } from "vitest";
import * as certs from "../app/data/certifications";
import * as afro from "../app/data/afrobeats";
import { buildSiteIndex, hydrateSiteIndex, leadOfCredit, holdingFor } from "../scripts/cert-watch/site.mjs";
import { LIVE_ARTISTS, config, fixture } from "./certWatchHelpers";

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
    expect(dai.holdings["US|RIAA Latin"]).toMatchObject({ tier: "Platinum", x: 2, body: "RIAA Latin" });
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

  it("the frozen site-index fixture has the shape of a fresh build", () => {
    const frozen = JSON.parse(fixture("site-index.2026-09-24.json"));
    expect(Object.keys(frozen).sort()).toEqual(Object.keys(json).sort());
    expect(Object.keys(frozen.totals).sort()).toEqual(Object.keys(json.totals).sort());
    expect(Object.keys(frozen.releases[0]).sort()).toEqual(Object.keys(json.releases[0]).sort());
    expect(Object.keys(frozen.leadAliases[0]).sort()).toEqual(Object.keys(json.leadAliases[0]).sort());
  });
});
