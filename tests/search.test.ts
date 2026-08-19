import { describe, it, expect } from "vitest";
import { searchDocs, searchIndex } from "../app/lib/searchIndex";

describe("searchDocs", () => {
  it("returns nothing for an empty query", () => {
    expect(searchDocs("")).toEqual([]);
    expect(searchDocs("   ")).toEqual([]);
  });

  it("matches a page by its title", () => {
    const top = searchDocs("certifications")[0];
    expect(top.path).toBe("/certifications");
  });

  it("matches a page by a keyword that isn't in the title", () => {
    expect(searchDocs("grammy")[0].path).toBe("/records/awards");
    expect(searchDocs("ferrari")[0].path).toBe("/records/cars");
    expect(searchDocs("net worth").some((d) => d.path === "/records/cars")).toBe(true);
  });

  it("is case-insensitive", () => {
    expect(searchDocs("BILLBOARD")[0].path).toBe("/records/charts");
  });

  it("ranks an exact title above a keyword-only match", () => {
    // "awards" is the Awards page title; it should lead.
    expect(searchDocs("awards")[0].path).toBe("/records/awards");
  });

  it("respects the result limit", () => {
    expect(searchDocs("a", 3).length).toBeLessThanOrEqual(3);
  });

  it("has a unique path for every indexed page", () => {
    const paths = searchIndex.map((d) => d.path);
    expect(new Set(paths).size).toBe(paths.length);
  });
});

// The board's search docs were first inserted at the TOP of the index, which
// broke "billboard" — score() ties resolve on array order, so Wizkid's chart
// page displaced Burna Boy's. This site is about Burna Boy: a generic query
// stays on his pages, and the board earns its traffic on artist names.
describe("The Afrobeats Board in search", () => {
  // This asserted only the FIRST result, and passed while ranks 2-8 were
  // entirely board pages: a search for "charts" offered ten other artists'
  // boards and pushed /records/charts to twelfth, and "spotify" returned nine
  // board pages and none of his. The palette shows eight, so eight is what has
  // to be checked.
  it("never displaces Burna Boy's own pages on a generic query", () => {
    const HIS = {
      charts: "/records/charts",
      chart: "/records/charts",
      billboard: "/records/charts",
      spotify: "/live-charts",
      "apple music": "/live-charts",
      live: "/live-charts",
      certifications: "/certifications",
      gold: "/certifications",
      platinum: "/certifications",
    };
    for (const [q, his] of Object.entries(HIS)) {
      const top = searchDocs(q, 8).map((d) => d.path);
      expect(top[0].startsWith("/afrobeats"), `"${q}" leads with ${top[0]}`).toBe(false);
      expect(top, `"${q}" should still surface ${his}; got ${top.join(", ")}`).toContain(his);
    }
  });

  it("finds each board artist by name", () => {
    for (const [q, path] of [
      ["wizkid", "/afrobeats/wizkid"],
      ["tems", "/afrobeats/tems"],
      ["ayra starr", "/afrobeats/ayra-starr"],
      ["asake", "/afrobeats/asake"],
      ["seyi vibez", "/afrobeats/seyi-vibez"],
    ] as const) {
      expect(searchDocs(q).some((d) => d.path === path), q).toBe(true);
    }
  });

  it("finds an artist's chart board by an artist-qualified query", () => {
    expect(searchDocs("wizkid chart history").some((d) => d.path === "/afrobeats/wizkid/charts")).toBe(true);
    expect(searchDocs("tyla charts").some((d) => d.path === "/afrobeats/tyla/charts")).toBe(true);
  });

  it("indexes every board route", () => {
    const paths = new Set(searchIndex.map((d) => d.path));
    expect(paths.has("/afrobeats")).toBe(true);
    for (const slug of ["wizkid", "davido", "rema", "tems", "tyla", "ayra-starr", "asake", "omah-lay", "seyi-vibez"])
      expect(paths.has(`/afrobeats/${slug}`), slug).toBe(true);
    for (const slug of ["wizkid", "davido", "rema", "tems", "tyla", "ayra-starr"])
      expect(paths.has(`/afrobeats/${slug}/charts`), slug).toBe(true);
  });
});
