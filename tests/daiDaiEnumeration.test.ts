import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { allItems } from "../app/data/certifications";

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
};

/** Files that carry a hand-written enumeration, and the marker that finds one. */
const SURFACES = [
  "app/dai-dai/page.tsx",
  "app/dai-dai/es/page.tsx",
  "app/components/DaiDaiStory.tsx",
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

  it("every certified country appears in every enumeration", () => {
    const codes = [...new Set(cert!.certs.map((c) => c.c))];
    const missing: string[] = [];
    const perFile: Record<string, number> = Object.fromEntries(SURFACES.map((f) => [f, 0]));
    let found = 0;

    for (const file of SURFACES) {
      const lines = readFileSync(file, "utf8").split("\n");
      lines.forEach((line, i) => {
        if (!isEnumeration(line)) return;
        found++;
        perFile[file]++;
        for (const code of codes) {
          const names = NAMES[code];
          if (!names) {
            missing.push(`${file}:${i + 1} — no prose name known for ${code}; add it to NAMES`);
            continue;
          }
          if (!names.some((n) => line.includes(n))) {
            missing.push(`${file}:${i + 1} — never names ${code} (${names[0]})`);
          }
        }
      });
    }

    // PER FILE, not in aggregate. The first version asserted `found >= 3` across
    // all three surfaces — and the Spanish page alone carries three
    // enumerations, so rewording it past the marker left the total at 3, the
    // test green, and the Spanish copy (the one that shipped missing acts
    // before) checked by nothing at all.
    const silent = Object.entries(perFile)
      .filter(([, n]) => n === 0)
      .map(([file]) => `${file} — no enumeration matched; was it reworded past the marker?`);
    expect(silent, "a surface stopped being checked without failing").toEqual([]);
    expect(found, "no Dai Dai enumeration matched anywhere").toBeGreaterThanOrEqual(SURFACES.length);
    expect(missing).toEqual([]);
  });
});
