import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { CHART_COUNTRIES } from "../app/data/charts";
import { COUNTRIES } from "../app/data/certifications";
import { afrobeatsArtists, chartCountryMeta, countryMeta } from "../app/data/afrobeats";

// afrobeats.ts's EXTRA_COUNTRIES is the board's fallback map: countryMeta reads
// COUNTRIES, then CHART_COUNTRIES, then it; chartCountryMeta reads
// CHART_COUNTRIES, then it. A code it shares with either map is never reached,
// and an unreached copy drifts unseen. Until 14 Oct 2026 it held the two
// Billboard worldwide charts with their globes swapped and GLBX misnamed
// "Billboard Global 200 Excl. US" — invisible on the site, but read by anyone
// reading the code (the GBEDU CLASH answers took it for the board's own set).

const SRC = readFileSync(join(process.cwd(), "app/data/afrobeats.ts"), "utf8");

/** The codes the EXTRA_COUNTRIES literal defines, read from its source. */
const extraKeys = (src: string) => {
  const start = src.indexOf("const EXTRA_COUNTRIES");
  const block = src.slice(start, src.indexOf("\n};", start));
  return [...block.matchAll(/^\s{2}([A-Z]{2,4}):\s*\{/gm)].map((m) => m[1]);
};
const shadowed = (src: string) => extraKeys(src).filter((k) => k in COUNTRIES || k in CHART_COUNTRIES);

describe("the board's fallback country map", () => {
  it("defines no code that COUNTRIES or CHART_COUNTRIES already carries", () => {
    expect(extraKeys(SRC).length).toBeGreaterThan(0);
    expect(shadowed(SRC)).toEqual([]);
  });

  it("negative control: the shipped GLB line would be caught", () => {
    const shipped = '  GLB: { name: "Global", flag: "🌐", body: "Billboard Global 200" },\n';
    const start = SRC.indexOf("const EXTRA_COUNTRIES");
    const open = SRC.indexOf("{", SRC.indexOf("=", start)) + 2;
    expect(shadowed(SRC.slice(0, open) + shipped + SRC.slice(open))).toEqual(["GLB"]);
  });

  it("a board chart row on either Billboard worldwide chart reads charts.ts's entry", () => {
    const codes = new Set(afrobeatsArtists.flatMap((a) => a.charts.flatMap((r) => r.entries.map((e) => e.c))));
    for (const c of ["GLB", "GLBX"]) {
      expect(codes.has(c), `${c} is charted on the board`).toBe(true);
      const { name, flag, body } = CHART_COUNTRIES[c];
      expect(chartCountryMeta(c)).toEqual({ name, flag, body });
      expect(countryMeta(c)).toMatchObject({ name, flag, body });
    }
    // The pair is told apart by its globe and by Billboard's own names.
    expect(CHART_COUNTRIES.GLB.flag).not.toBe(CHART_COUNTRIES.GLBX.flag);
    expect(CHART_COUNTRIES.GLB.body).toBe("Billboard Global 200");
    expect(CHART_COUNTRIES.GLBX.body).toBe("Billboard Global Excl. US");
  });
});
