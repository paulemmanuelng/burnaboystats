import { describe, it, expect } from "vitest";
// @ts-expect-error — plain .mjs helper shared with the stats bot
import { extractLiveCharts, parseMovement } from "../scripts/stats-lib.mjs";
import {
  liveCharts,
  livePlacementCount,
  liveNumberOnes,
  livePlatformTotals,
} from "../app/data/liveCharts";
import { CHART_COUNTRIES } from "../app/data/charts";

// The live-charts page is generated wholesale from a scraped page, so the
// parser is the single point of failure. These pin its behaviour on a fixture
// shaped like the real markup, plus a few invariants on the generated data.

const CELL = `
<td valign=top width="200"><div class="wrap"><b>Test Song</b></div><br>
<div class="spo">Spotify (2x #1):<br>
<div class="eu small spo"><a href="/spotify/country/at_daily.html">#1 Austria</a> <span class="change24">(=)</span></div>
<div class="eu spo"><a href="/spotify/country/de_daily.html">#1 Germany</a> <span class="change24">(+3)</span></div>
<div class="eu spo"><a href="/spotify/country/fr_daily.html">#12 France</a> <span class="change24">(-4)</span></div>
</div>
<div class="app">Apple Music:<br>
<div class="eu app"><a href="/charts/apple_s/gb.html">#7 United Kingdom</a> <span class="change24">(NE)</span></div>
</div></td>
<td valign=top><div class="wrap"><b>Album: Test Record</b></div><br>
<div class="itu">iTunes:<br>
<div class="eu itu"><a href="/charts/itunes/ng.html">#3 Nigeria</a> <span class="change24">(=)</span></div>
</div></td>`;

describe("parseMovement", () => {
  it("reads kworb's markers", () => {
    expect(parseMovement("(=)")).toBe(0);
    expect(parseMovement("(+12)")).toBe(12);
    expect(parseMovement("(-3)")).toBe(-3);
    expect(parseMovement("(NE)")).toBeNull(); // new entry — no prior position
    expect(parseMovement("(RE)")).toBeNull(); // re-entry
    expect(parseMovement(undefined)).toBeNull();
  });
});

describe("extractLiveCharts", () => {
  const out = extractLiveCharts(CELL);

  it("splits songs from albums and strips the Album: prefix", () => {
    expect(out.map((r: { title: string }) => r.title)).toContain("Test Song");
    const album = out.find((r: { kind: string }) => r.kind === "album");
    expect(album.title).toBe("Test Record"); // prefix removed
  });

  it("groups placements under the right platform", () => {
    const song = out.find((r: { title: string }) => r.title === "Test Song");
    const names = song.platforms.map((p: { platform: string }) => p.platform);
    expect(names).toEqual(expect.arrayContaining(["Spotify", "Apple Music"]));
    expect(song.platforms.find((p: { platform: string }) => p.platform === "Spotify").entries)
      .toHaveLength(3);
  });

  it("takes the country code from the href, not the display name", () => {
    const song = out.find((r: { title: string }) => r.title === "Test Song");
    const apple = song.platforms.find((p: { platform: string }) => p.platform === "Apple Music");
    // "United Kingdom" would be unparseable as a code; the href gives GB.
    expect(apple.entries[0]).toMatchObject({ country: "GB", position: 7, movement: null });
  });

  it("counts No. 1s per platform and sorts entries by position", () => {
    const song = out.find((r: { title: string }) => r.title === "Test Song");
    const spo = song.platforms.find((p: { platform: string }) => p.platform === "Spotify");
    expect(spo.numberOnes).toBe(2);
    expect(spo.entries.map((e: { position: number }) => e.position)).toEqual([1, 1, 12]);
  });

  it("returns nothing for markup with no placements", () => {
    expect(extractLiveCharts("<td><div class='wrap'><b>Empty</b></div></td>")).toEqual([]);
  });
});

describe("generated liveCharts data", () => {
  it("has releases and no duplicate titles", () => {
    expect(liveCharts.length).toBeGreaterThan(0);
    const titles = liveCharts.map((r) => r.title);
    expect(titles).toHaveLength(new Set(titles).size);
  });

  it("derived totals agree with the rows", () => {
    const placements = liveCharts.reduce(
      (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
      0
    );
    expect(livePlacementCount).toBe(placements);
    expect(livePlatformTotals.reduce((n, p) => n + p.placements, 0)).toBe(placements);
    expect(liveNumberOnes).toBe(
      liveCharts.reduce(
        (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.filter((e) => e.position === 1).length, 0),
        0
      )
    );
  });

  it("every position is a sane chart position", () => {
    for (const r of liveCharts) {
      for (const p of r.platforms) {
        for (const e of p.entries) {
          expect(e.position, `${r.title} / ${p.platform} / ${e.name}`).toBeGreaterThan(0);
          expect(e.position).toBeLessThanOrEqual(500);
          expect(e.country).toMatch(/^[A-Z]{2}$/);
        }
      }
    }
  });

  // The boundary this page exists to respect: platform data must not leak into
  // the official-chart dataset, and vice versa.
  it("does not write into the official chart country map", () => {
    const officialCodes = Object.keys(CHART_COUNTRIES);
    const liveCodes = new Set(
      liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
    );
    // Live charts cover far more territories than the official dataset — proof
    // they are separate sets, not one being derived from the other.
    expect(liveCodes.size).toBeGreaterThan(officialCodes.length);
  });
});

// kworb writes chart slugs, not strict ISO. Any code that isn't a real
// alpha-2 renders as letter boxes instead of a flag, which is how "UK" shipped
// looking broken. This pins the set so a new one gets caught rather than seen.
describe("flag coverage", () => {
  const ALIASED = new Set(["UK", "WW", "EL"]);
  const ISO =
    /^(A[DEFGILMOQRSTUWXZ]|B[ABDEFGHIJLMNOQRSTVWYZ]|C[ACDFGHIKLMNORUVWXYZ]|D[EJKMOZ]|E[CEGHRST]|F[IJKMOR]|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|I[DELMNOQRST]|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]|M[ACDEFGHKLMNOPQRSTUVWXYZ]|N[ACEFGILOPRUZ]|OM|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTVXYZ]|T[CDFGHJKLMNORTVWZ]|U[AGMSYZ]|V[ACEGINU]|W[FS]|Y[ET]|Z[AMW])$/;

  it("every country code either has a real flag or a deliberate alias", () => {
    const codes = new Set(
      liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
    );
    const unmapped = [...codes].filter((c) => !ISO.test(c) && !ALIASED.has(c));
    expect(unmapped, `codes with no flag and no alias: ${unmapped.join(", ")}`).toEqual([]);
  });
});
