import { describe, it, expect } from "vitest";
import { ceremonies, pendingResults } from "../app/data/awards";
import { updates } from "../app/data/updates";

/**
 * HEAT Latin Music Awards 2026, read in the body's own nominee post of 24 Sep
 * 2026 (blog.losheat.tv/archivos/entretenimiento/7963). The body publishes its
 * categories in Spanish only, and the site records them as the body writes
 * them, as it does NRJ's "Collab' Internationale".
 */
describe("HEAT Latin Music Awards 2026", () => {
  const heat = ceremonies.find((c) => c.name === "HEAT Latin Music Awards")!;

  it("carries the body's three categories for Dai Dai, all pending until the 5 Nov gala", () => {
    expect(heat.noms.map((n) => n.category)).toEqual(["Canción del Año", "Mejor Video", "Mejor Canción Viral"]);
    for (const n of heat.noms) expect(n).toEqual({ year: 2026, category: n.category, work: "Dai Dai (with Shakira)", won: false });
    expect(pendingResults.find((p) => p.ceremony === heat.name)).toMatchObject({ year: 2026, date: "2026-11-05" });
  });

  it("never calls Mejor Video 'Best Music Video'", () => {
    // The lead's wording. The body's category is Mejor Video; its award for a
    // video's director (Director de Videoclips del Año) is a different one and
    // does not list Dai Dai.
    const LEAD = "Best Music Video";
    const texts = [...heat.noms.map((n) => n.category), ...updates.filter((u) => u.text.includes("HEAT")).map((u) => u.text)];
    expect(texts.length).toBeGreaterThan(heat.noms.length);
    expect(texts.filter((t) => t.includes(LEAD))).toEqual([]);
  });
});
