import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { allItems } from "../app/data/certifications";
import { plaqueSentence } from "../app/components/daiDaiStoryFacts";

/**
 * The "Dai Dai" certification sentence names every country the data holds.
 *
 * The count beside it is derived — `daiDaiCertCount` — but the LIST is typed by
 * hand, six times, in three files and two languages. When IFPI Austria certified
 * the record Platinum on 4 Sep 2026 the count went to 13 and every one of the
 * six sentences went on naming twelve. Two of them are FAQ answers that are also
 * emitted as FAQPage structured data, so the short list is what an answer engine
 * quotes; and inside one component the rail note said "Platinum in 5 more" two
 * scenes before the body named four.
 *
 * songFacts.test.ts guards exactly this failure mode for songs.ts `extraFacts`.
 * The /dai-dai enumerations sat outside it. This is that guard, for them.
 */

/** How the prose writes each country, in both languages. */
const NAMES: Record<string, string[]> = {
  FR: ["France", "Francia"],
  US: ["the US", "the U.S.", "Estados Unidos", "EE. UU."],
  ES: ["Spain", "España"],
  SK: ["Slovakia", "Eslovaquia"],
  PT: ["Portugal"],
  HU: ["Hungary", "Hungría"],
  AT: ["Austria"],
  CO: ["Colombia"],
  GR: ["Greece", "Grecia"],
  CZ: ["the Czech Republic", "Chequia"],
  IT: ["Italy", "Italia"],
  PL: ["Poland", "Polonia"],
  UK: ["the UK", "the United Kingdom", "el Reino Unido", "Reino Unido"],
  BE: ["Belgium", "Bélgica"],
  SE: ["Sweden", "Suecia"],
  CA: ["Canada", "Canadá"],
  DE: ["Germany", "Alemania"],
  DK: ["Denmark", "Dinamarca"],
};

/** The pages that used to carry a hand-written enumeration. The story's
 *  chapter 05 left this list on 27 Sep 2026, and both FAQ answers on 28 Sep,
 *  after they kept "Silver in the UK" past the BPI's Gold of 25 Sep: every
 *  copy is now built from the plaque wall (daiDaiStoryFacts.plaqueSentence),
 *  checked by the last test below. These pages may not type one again. */
const SURFACES = [
  "app/dai-dai/page.tsx",
  "app/dai-dai/es/page.tsx",
];

/** A line is an enumeration if it names the anchor country in either language. */
const isEnumeration = (line: string) =>
  /Diamond in France|diamante en Francia/i.test(line);

describe("the Dai Dai certification sentence names every country", () => {
  const cert = (allItems as { title: string; certs: { c: string }[] }[]).find(
    (r) => r.title === "Dai Dai"
  );

  it("the data still has Dai Dai, so this guard is testing something", () => {
    expect(cert, "Dai Dai not found in certifications.ts").toBeTruthy();
    expect(cert!.certs.length).toBeGreaterThan(0);
  });

  it("no page types the enumeration; both FAQ answers build it", () => {
    // Negative control: the English answer as it shipped until 28 Sep 2026.
    expect(isEnumeration("“Dai Dai” has 17 certifications: Diamond in France from SNEP, 2× Platinum in Canada")).toBe(true);
    for (const file of SURFACES) {
      const src = readFileSync(file, "utf8");
      const typed = src.split("\n").map((l, i) => [i + 1, l] as const).filter(([, l]) => isEnumeration(l));
      expect(typed.map(([n]) => `${file}:${n}`), "a typed enumeration is back").toEqual([]);
      expect(src, file).toMatch(/\$\{plaqueSentence\("(?:en|es)"\)\}/);
    }
  });

  it("the story's built sentence names every certified country, in both editions", () => {
    const codes = [...new Set(cert!.certs.map((c) => c.c))];
    for (const lang of ["en", "es"] as const) {
      const line = plaqueSentence(lang);
      expect(isEnumeration(line), `${lang}: ${line}`).toBe(true);
      expect(codes.filter((code) => !NAMES[code]?.some((n) => line.includes(n))), lang).toEqual([]);
    }
  });
});
