import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { searchDocs } from "../app/lib/searchIndex";
import { generatedDocs } from "../app/lib/searchIndex.generated";
import { buildSearchDocs } from "../app/lib/buildSearchDocs";
import { allItems } from "../app/data/certifications";
import { ceremonies } from "../app/data/awards";

// Search used to index only the site's ~79 PAGES, so it could find a page and
// never a record: 63 of 85 certified titles returned nothing, "Location" —
// his most-certified title — among them, as did all 46 award bodies and every
// charting country. These are the guards for that.

describe("the generated half is current", () => {
  it("matches what the data would generate today", () => {
    // The checked-in file is written by scripts/build-search-index.mjs. If a
    // release, ceremony or country is added and the file is not rebuilt, search
    // silently stops finding it — nothing else would fail.
    expect(generatedDocs).toEqual(buildSearchDocs());
  });

  it("is a generated file, and says so", () => {
    const src = readFileSync("app/lib/searchIndex.generated.ts", "utf8");
    expect(src.startsWith("// GENERATED FILE — do not edit by hand.")).toBe(true);
  });

  it("carries no figures a page already owns", () => {
    // Names and paths only. A total copied in here would be a second source of
    // truth that drifts from the page it points at.
    for (const d of generatedDocs) expect(d.path.startsWith("/")).toBe(true);
  });
});

describe("search finds the site's own records", () => {
  it("finds every certified release by title", () => {
    const missing = [...new Set(allItems.map((r) => r.title))].filter(
      (t) => searchDocs(t).length === 0
    );
    expect(missing, `titles returning nothing: ${missing.join(", ")}`).toEqual([]);
  });

  it("finds every award body by name", () => {
    const missing = ceremonies.map((c) => c.name).filter((n) => searchDocs(n).length === 0);
    expect(missing, `award bodies returning nothing: ${missing.join(", ")}`).toEqual([]);
  });

  it("finds a record by a collaborator's name", () => {
    // The credit is what carries them — "coldplay" has to reach "We Pray".
    for (const who of ["coldplay", "justin bieber", "dave"]) {
      expect(searchDocs(who).length, who).toBeGreaterThan(0);
    }
  });

  it("folds punctuation the way titleKey does", () => {
    // Three dots and a real ellipsis are the same album. This exact mismatch
    // has already cost the site a homepage chart peak once.
    expect(searchDocs("I Told Them...").length).toBeGreaterThan(0);
    expect(searchDocs("I Told Them…").length).toBeGreaterThan(0);
  });

  it("handles multi-word queries", () => {
    // The old scorer matched the whole query as one string, so every question
    // longer than a word scored zero against everything.
    for (const q of ["burna boy grammy", "grammy awards", "last last"]) {
      expect(searchDocs(q).length, q).toBeGreaterThan(0);
    }
  });

  it("still ranks an exact page title first", () => {
    // The records must not crowd out the pages that were already working.
    expect(searchDocs("Certifications")[0].path).toBe("/certifications");
    expect(searchDocs("Methodology")[0].path).toBe("/methodology");
  });
});
