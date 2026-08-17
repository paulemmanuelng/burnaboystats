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
