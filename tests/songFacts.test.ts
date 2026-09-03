import { describe, it, expect } from "vitest";
import { songs } from "../app/data/songs";
import { allItems, COUNTRIES, tierOf } from "../app/data/certifications";

/**
 * A hand-typed certification list in songs.ts has to match the cert data.
 *
 * That file's own header says each song's certifications are "pulled live from
 * data/certifications.ts by title, so those pages never drift". That is true of
 * the tables — but not of the `extraFacts` strings, which are typed by hand
 * beside them. "On the Low" listed Platinum in "the UK, NZ & Switzerland" and
 * stayed that way after Sweden certified it, so the page named three of four.
 *
 * The tables were right the whole time. Only the sentence was wrong, which is
 * why nothing caught it.
 */

/** How the facts abbreviate country names. */
const ALIAS: Record<string, string> = {
  "United Kingdom": "UK",
  "New Zealand": "NZ",
  "United States": "US",
};

describe("song-page extra facts", () => {
  it("a fact that names Platinum countries names all of them", () => {
    const problems: string[] = [];
    for (const song of songs) {
      const cert = (allItems as any[]).find((r) => r.title === song.title);
      if (!cert) continue;
      // Platinum exactly — Diamond is a separate tier and is stated separately.
      const platinum = cert.certs
        .filter((c: any) => tierOf(c.level) === "platinum")
        .map((c: any) => COUNTRIES[c.c]?.name ?? c.c);
      for (const f of song.extraFacts ?? []) {
        if (!/Platinum in /.test(f.l)) continue;
        const names = (name: string) => f.l.includes(name) || f.l.includes(ALIAS[name] ?? name);
        // Only a fact that ENUMERATES is held to completeness. "4x Platinum in
        // Italy" names one country as a figure in its own right and is not
        // claiming to be the whole list; "plus Platinum in the UK, NZ,
        // Switzerland & Sweden" is, and that is the form that went stale.
        if (platinum.filter(names).length < 2) continue;
        const missing = platinum.filter((name: string) => !names(name));
        if (missing.length)
          problems.push(`${song.title}: fact omits Platinum in ${missing.join(", ")} — "${f.l}"`);
      }
    }
    expect(problems).toEqual([]);
  });
});
