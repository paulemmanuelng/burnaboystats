import { describe, it, expect } from "vitest";
import {
  AWARD_BODY_TIERS,
  ceremonies,
  pendingResults,
  rankedCeremonies,
  totalNominations,
  totalWins,
  ceremonyCount,
  pendingNominations,
  decidedNominations,
} from "../app/data/awards";
import { updates } from "../app/data/updates";

/**
 * LOS40 Music Awards Santander 2026, read 22 Oct 2026 on LOS40's own site: the
 * full nominee list (los40.com/los40_music_awards/2026/nominados/) prints the
 * card "SHAKIRA Y BURNA BOY / DAI DAI" under "Mejor canción latina" in its
 * GLOBAL LATINA section, and the Global Latina article of the same day lists
 * "‘Dai Dai’ (Shakira y Burna Boy)" under "Mejor Canción Latina", one of six.
 * The gala is on 20 November at the Palau Sant Jordi, Barcelona.
 *
 * The lead was a parody account's post. The body publishes the category in
 * Spanish only, and the site records it as the body writes it, as it does
 * HEAT's and NRJ's: "Best Latin Song" is a gloss, not a name to print.
 */
const LOS40 = "LOS40 Music Awards";
const los40 = ceremonies.find((c) => c.name === LOS40)!;
const entry = updates.find((u) => u.text.startsWith("Up for a LOS40 Music Award"))!;

/** The English gloss, which is not the body's name for the category. */
const GLOSS = "Best Latin Song";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/** The last day a feed line names ("… on 20 November."), as ISO in the given year. */
const dayNamed = (text: string, year: number) => {
  const m = [...text.matchAll(new RegExp(`\\b(\\d{1,2}) (${MONTHS.join("|")})\\b`, "g"))].at(-1);
  return m ? `${year}-${String(MONTHS.indexOf(m[2]) + 1).padStart(2, "0")}-${m[1].padStart(2, "0")}` : null;
};

describe("LOS40 Music Awards 2026", () => {
  it("carries the one category LOS40 lists him in, pending until the 20 Nov gala", () => {
    expect(los40.noms).toEqual([{ year: 2026, category: "Mejor Canción Latina", work: "Dai Dai (with Shakira)", won: false }]);
    expect(pendingResults.find((p) => p.ceremony === LOS40)).toEqual({
      ceremony: LOS40,
      year: 2026,
      date: "2026-11-20",
      where: "Palau Sant Jordi, Barcelona",
    });
  });

  it("sits in date order among the pending ceremonies, after the Kids' Choice show and before BreakTudo", () => {
    const days = pendingResults.map((p) => p.date);
    expect(days).toEqual([...days].sort());
    const i = pendingResults.findIndex((p) => p.ceremony === LOS40);
    expect(pendingResults[i - 1].ceremony).toBe("Nickelodeon Kids' Choice Awards");
    expect(pendingResults[i + 1].ceremony).toBe("BreakTudo Awards");
  });

  it("is placed in one tier, beside NRJ's radio-network awards", () => {
    const tiers = AWARD_BODY_TIERS.filter((t) => t.bodies.includes(LOS40));
    expect(tiers.map((t) => t.tier)).toEqual(["International"]);
    const bodies = tiers[0].bodies;
    expect(bodies[bodies.indexOf(LOS40) - 1]).toBe("NRJ Music Awards");
    // Placed on purpose, so it does not fall to the end of the list.
    const order = rankedCeremonies.map((c) => c.name);
    expect(order.indexOf(LOS40)).toBe(order.indexOf("NRJ Music Awards") + 1);
    expect(order.at(-1)).not.toBe(LOS40);
  });

  it("moves the totals by one nomination and one body, and the strike rate not at all", () => {
    // By relation, as tests/kcaAwards.test.ts does: the absolute totals are
    // tests/handoffTotals.test.ts's job. Recomputed WITHOUT this body:
    const others = ceremonies.filter((c) => c.name !== LOS40);
    const isPending = (name: string, n: { year: number; won: boolean }) =>
      !n.won && pendingResults.some((p) => p.ceremony === name && p.year === n.year);
    const pendingElsewhere = others.reduce((sum, c) => sum + c.noms.filter((n) => isPending(c.name, n)).length, 0);
    const nomsElsewhere = others.reduce((sum, c) => sum + c.noms.length, 0);
    const winsElsewhere = others.reduce((sum, c) => sum + c.noms.filter((n) => n.won).length, 0);
    expect(others).toHaveLength(ceremonies.length - 1);
    expect(ceremonyCount - others.length).toBe(1);
    expect(totalNominations - nomsElsewhere).toBe(1);
    expect(totalWins - winsElsewhere).toBe(0);
    // Pending, not lost: the decided count (the strike rate's denominator) is
    // what it would be without it.
    expect(los40.noms.every((n) => isPending(LOS40, n))).toBe(true);
    expect(pendingNominations - pendingElsewhere).toBe(1);
    expect(decidedNominations).toBe(nomsElsewhere - pendingElsewhere);
  });

  /** The texts this site prints about the nomination that use the English gloss. */
  const glossed = (noms: { category: string }[], lines: string[]) => [...noms.map((n) => n.category), ...lines].filter((t) => t.includes(GLOSS));

  it("prints the body's own name for the category, never the English gloss", () => {
    const lines = updates.filter((u) => /LOS40/.test(u.text)).map((u) => u.text);
    // Anti-vacuity: the check reads the nomination's category AND the feed line.
    expect(lines).toContain(entry.text);
    expect(entry.text).toContain(los40.noms[0].category);
    expect(glossed(los40.noms, lines)).toEqual([]);
  });

  it("negative control: the same check catches the category filed under its gloss", () => {
    const asGlossed = los40.noms.map((n) => ({ ...n, category: GLOSS }));
    expect(glossed(asGlossed, [entry.text])).toEqual([GLOSS]);
    const lineGlossed = entry.text.replace("Mejor Canción Latina", GLOSS);
    expect(lineGlossed).not.toBe(entry.text);
    expect(glossed(los40.noms, [lineGlossed])).toEqual([lineGlossed]);
  });

  it("logs one Awards line on 22 October that names the day the pending row holds", () => {
    expect(updates.filter((u) => /LOS40/.test(u.text))).toHaveLength(1);
    expect(entry).toMatchObject({ date: "2026-10-22", category: "Awards", href: "/records/awards" });
    expect(entry.text.length).toBeLessThanOrEqual(300);
    expect(dayNamed(entry.text, 2026)).toBe(pendingResults.find((p) => p.ceremony === LOS40)!.date);
  });

  it("negative control: the reader dates the Kids' Choice line to its own show, not this gala", () => {
    const kca = updates.find((u) => u.text.startsWith("Up for a Kids' Choice Award"))!;
    const kcaDay = dayNamed(kca.text, 2026);
    expect(kcaDay).toBe(pendingResults.find((p) => p.ceremony === "Nickelodeon Kids' Choice Awards")!.date);
    expect(kcaDay).not.toBe(pendingResults.find((p) => p.ceremony === LOS40)!.date);
  });
});
