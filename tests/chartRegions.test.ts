import { describe, it, expect } from "vitest";
import { CHART_COUNTRIES, albumCharts, singleCharts, featureCharts } from "../app/data/charts";
import { afrobeatsArtists } from "../app/data/afrobeats";
import {
  chartGroups, matchesQuery, mostCharted, MOST_CHARTED_SHOWN, REGION_OF, REGION_ORDER, regionOf, type Region,
} from "../app/lib/chartRegions";
import { read } from "./fixtures/cssRules";

/**
 * Job 3 · J3-8 (design review 8 Oct 2026; fixes 58, 71): the /records/charts
 * filter groups its territories by continent. Fix 58's sum test: the groups
 * over CHART_COUNTRIES are Africa 3 · Europe 34 · Americas 19 · Asia–Pacific
 * 13 · Global 2, and they add up to every key of CHART_COUNTRIES, no code twice
 * and none left over. Every code any chart page prints has a group (the board
 * artists chart in seven codes Burna Boy does not). Fix 71's match rule: a code
 * prefix, or a word of the name.
 */

const KEYS = Object.keys(CHART_COUNTRIES);
const burna = [...albumCharts, ...singleCharts, ...featureCharts];

describe("fix 58: the continent groups cover CHART_COUNTRIES exactly", () => {
  const groups = chartGroups(KEYS);

  it("Africa 3 · Europe 34 · Americas 19 · Asia–Pacific 13 · Global 2, in that order", () => {
    expect(groups.map((g) => [g.region, g.codes.length])).toEqual([
      ["Africa", 3],
      ["Europe", 34],
      ["Americas", 19],
      ["Asia–Pacific", 13],
      ["Global", 2],
    ]);
  });

  it("the groups sum to the keys of CHART_COUNTRIES, with no code twice and none missing", () => {
    const all = groups.flatMap((g) => g.codes);
    expect(all.length).toBe(KEYS.length);
    expect(new Set(all).size).toBe(all.length);
    expect([...all].sort()).toEqual([...KEYS].sort());
  });

  it("PT, MD, UA sit with Europe and IL with Asia–Pacific; MO is not in the data", () => {
    for (const c of ["PT", "MD", "UA", "TR", "RU"]) expect(regionOf(c), c).toBe("Europe");
    for (const c of ["IL", "KZ", "AE", "SA", "LB"]) expect(regionOf(c), c).toBe("Asia–Pacific");
    expect(regionOf("EG")).toBe("Africa");
    expect(KEYS).not.toContain("MO");
  });

  it("each run keeps the page's own chip order", () => {
    for (const g of groups) expect(g.codes).toEqual(KEYS.filter((k) => REGION_OF[k] === g.region));
  });

  it("every chart code on any page has a group — his and all twenty board artists'", () => {
    const codes = new Set([...burna, ...afrobeatsArtists.flatMap((a) => a.charts)].flatMap((r) => r.entries.map((e) => e.c)));
    for (const c of codes) expect(() => regionOf(c), c).not.toThrow();
    // The codes only a board artist charts in.
    const boardOnly = [...codes].filter((c) => !KEYS.includes(c)).sort();
    expect(boardOnly.length).toBeGreaterThan(0);
    for (const c of boardOnly) expect(REGION_ORDER).toContain(REGION_OF[c]);
  });

  it("a board page's groups are its own territories, empty groups left out", () => {
    for (const a of afrobeatsArtists) {
      const own = [...new Set(a.charts.flatMap((r) => r.entries.map((e) => e.c)))];
      const g = chartGroups(own);
      expect(g.flatMap((x) => x.codes).sort(), a.slug).toEqual([...own].sort());
      for (const x of g) expect(x.codes.length, `${a.slug} ${x.region}`).toBeGreaterThan(0);
      const regions = g.map((x) => x.region);
      expect(regions, a.slug).toEqual(REGION_ORDER.filter((r) => regions.includes(r)));
    }
  });
});

describe("Most charted (J3-8): the territories with the most entries", () => {
  it(`returns ${MOST_CHARTED_SHOWN}, each with at least as many entries as any left out, ties by code`, () => {
    const per = new Map<string, number>();
    for (const r of burna) for (const e of r.entries) per.set(e.c, (per.get(e.c) ?? 0) + 1);
    const top = mostCharted(burna, MOST_CHARTED_SHOWN);
    expect(top).toHaveLength(MOST_CHARTED_SHOWN);
    const rest = [...per.keys()].filter((c) => !top.includes(c));
    const floor = Math.min(...top.map((c) => per.get(c)!));
    for (const c of rest) expect(per.get(c)!, c).toBeLessThanOrEqual(floor);
    for (let i = 1; i < top.length; i++) {
      const [a, b] = [per.get(top[i - 1])!, per.get(top[i])!];
      expect(a > b || (a === b && top[i - 1] < top[i]), `${top[i - 1]} before ${top[i]}`).toBe(true);
    }
    // His home market leads it.
    expect(top[0]).toBe("NG");
  });
});

describe("fix 71: a match is a code prefix or a word of the name", () => {
  const hits = (q: string) => KEYS.filter((c) => matchesQuery(q, c, CHART_COUNTRIES[c].name));

  it("“ni” → NG Nigeria, NI Nicaragua", () => expect(hits("ni")).toEqual(["NG", "NI"]));
  it("“gl” → GLB, GLBX", () => expect(hits("gl")).toEqual(["GLB", "GLBX"]));
  it("“zz” → none", () => expect(hits("zz")).toEqual([]));
  it("“u” → US, UK, AE (United Arab Emirates), UY, UA, GLBX (“… excl. US”)", () =>
    expect(hits("u")).toEqual(["US", "UK", "AE", "UY", "UA", "GLBX"]));
  it("case and accents fold; an empty query matches nothing", () => {
    expect(hits("NI")).toEqual(hits("ni"));
    expect(matchesQuery("cote", "CI", "Côte d'Ivoire")).toBe(true);
    expect(hits("  ")).toEqual([]);
  });
});

describe("negative controls: the design file's stale figures and the phone's curated rail fail", () => {
  it("the canvas's prose split (Ledgers.dc.html §4) sums to 68, not the keys", () => {
    const prose = "Africa 3 · Europe 31 · Americas 19 · Asia–Pacific 13 · Global 2";
    const sum = [...prose.matchAll(/(\d+)/g)].reduce((n, m) => n + Number(m[1]), 0);
    expect(sum).not.toBe(KEYS.length);
  });

  it("MobileOfficialCharts' shipped COUNTRY_RAIL, as a grouping, does not cover the keys", () => {
    const src = read("app/components/MobileOfficialCharts.tsx");
    const rail = [...src.slice(src.indexOf("const COUNTRY_RAIL"), src.indexOf("];", src.indexOf("const COUNTRY_RAIL"))).matchAll(/"([A-Z]+)"/g)].map((m) => m[1]);
    expect(rail.length).toBeGreaterThan(0);
    expect(chartGroups(rail).flatMap((g) => g.codes).length).toBeLessThan(KEYS.length);
  });

  it("the canvas's “ni” frame (NG, NI, FI) fails the rule on FI", () => {
    const drawn = "🇳🇬:NG 🇳🇮:NI 🇫🇮:FI".split(" ").map((x) => x.split(":")[1]);
    expect(drawn.filter((c) => matchesQuery("ni", c, CHART_COUNTRIES[c].name))).not.toEqual(drawn);
    expect(matchesQuery("ni", "FI", CHART_COUNTRIES.FI.name)).toBe(false);
  });

  it("a code no group holds throws, so a new territory cannot drop out of the filter", () => {
    expect(() => regionOf("ZZ")).toThrow(/ZZ/);
    const r: Region = regionOf("NG");
    expect(r).toBe("Africa");
  });
});
