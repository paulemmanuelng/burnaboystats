import { describe, it, expect } from "vitest";
import { ceremonies, pendingResults, totalNominations, totalWins, ceremonyCount, pendingNominations, decidedNominations } from "../app/data/awards";
import { updates } from "../app/data/updates";

/**
 * Nickelodeon Kids' Choice Awards 2026, read 10 Oct 2026 in two places
 * Nickelodeon runs: its KCA press site (nickkcapress.com, the release naming
 * Alex Warren as host) lists "“Dai Dai” – Shakira, Burna Boy" under FAVORITE
 * MUSIC COLLABORATION, one of eight, and the voting site's data
 * (kca.nick.tv/mik-assets/data/production/us.js) carries the option "Dai Dai",
 * subtitle "Shakira, Burna Boy", "winner":false. The show is live from
 * Television City, Los Angeles, on Saturday 14 November.
 *
 * The lead was a parody account's post, and it had both details wrong: it
 * called the category "Favorite Collaboration" and put the show in the spring.
 */
const KCA = "Nickelodeon Kids' Choice Awards";
const kca = ceremonies.find((c) => c.name === KCA)!;
const entry = updates.find((u) => u.text.startsWith("Up for a Kids' Choice Award"))!;

/** The lead's name for the category, verbatim. */
const LEAD_CATEGORY = "Favorite Collaboration";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/** The last day a feed line names ("… on 14 November", "… the gala is 5 November in …"), as ISO in the given year. */
const dayNamed = (text: string, year: number) => {
  const m = [...text.matchAll(new RegExp(`\\b(\\d{1,2}) (${MONTHS.join("|")})\\b`, "g"))].at(-1);
  return m ? `${year}-${String(MONTHS.indexOf(m[2]) + 1).padStart(2, "0")}-${m[1].padStart(2, "0")}` : null;
};

describe("Nickelodeon Kids' Choice Awards 2026", () => {
  it("carries the one category Nickelodeon lists him in, pending until the 14 Nov show", () => {
    expect(kca.noms).toEqual([{ year: 2026, category: "Favorite Music Collaboration", work: "Dai Dai (with Shakira)", won: false }]);
    expect(pendingResults.find((p) => p.ceremony === KCA)).toEqual({
      ceremony: KCA,
      year: 2026,
      date: "2026-11-14",
      where: "Television City, Los Angeles",
    });
  });

  it("moves the totals by one nomination and one body, and the strike rate not at all", () => {
    // By relation, not by pin: the absolute totals are tests/handoffTotals.test.ts's
    // job, and a pin here would break on the next unrelated result (NRJ's, 23 Oct,
    // moves pending and decided by one each). Recomputed WITHOUT this body:
    const others = ceremonies.filter((c) => c.name !== KCA);
    const isPending = (name: string, n: { year: number; won: boolean }) =>
      !n.won && pendingResults.some((p) => p.ceremony === name && p.year === n.year);
    const pendingElsewhere = others.reduce((sum, c) => sum + c.noms.filter((n) => isPending(c.name, n)).length, 0);
    const nomsElsewhere = others.reduce((sum, c) => sum + c.noms.length, 0);
    const winsElsewhere = others.reduce((sum, c) => sum + c.noms.filter((n) => n.won).length, 0);
    expect(others).toHaveLength(ceremonies.length - 1);
    // One body, one nomination, no win.
    expect(ceremonyCount - others.length).toBe(1);
    expect(totalNominations - nomsElsewhere).toBe(1);
    expect(totalWins - winsElsewhere).toBe(0);
    // Pending, not lost: it is counted among the pending, so the decided count
    // (the strike rate's denominator) is what it would be without it.
    expect(kca.noms.every((n) => isPending(KCA, n))).toBe(true);
    expect(pendingNominations - pendingElsewhere).toBe(1);
    expect(decidedNominations).toBe(nomsElsewhere - pendingElsewhere);
  });

  /** The texts this site prints about the nomination that use the lead's name for the category. */
  const leadNamed = (noms: { category: string }[], lines: string[]) =>
    [...noms.map((n) => n.category), ...lines].filter((t) => t.includes(LEAD_CATEGORY));

  it("never uses the lead's category name", () => {
    const lines = updates.filter((u) => /Kids' Choice/.test(u.text)).map((u) => u.text);
    // Anti-vacuity: the check reads the nomination's category AND the feed line.
    expect(lines).toContain(entry.text);
    expect(kca.noms.length).toBeGreaterThan(0);
    expect(leadNamed(kca.noms, lines)).toEqual([]);
  });

  it("negative control: the same check catches a nomination filed under the lead's name", () => {
    // The nomination as the lead's post had it: the shipped row, with its
    // category swapped for the post's "Favorite Collaboration".
    const asTheLeadHadIt = kca.noms.map((n) => ({ ...n, category: LEAD_CATEGORY }));
    expect(leadNamed(asTheLeadHadIt, [entry.text])).toEqual([LEAD_CATEGORY]);
    // And the feed line, had it used the lead's name in place of Nickelodeon's.
    const lineAsTheLeadHadIt = entry.text.replace("Favorite Music Collaboration", LEAD_CATEGORY);
    expect(lineAsTheLeadHadIt).not.toBe(entry.text);
    expect(leadNamed(kca.noms, [lineAsTheLeadHadIt])).toEqual([lineAsTheLeadHadIt]);
  });

  it("logs one Awards line on 8 October that names the day the pending row holds", () => {
    expect(updates.filter((u) => /Kids' Choice/.test(u.text))).toHaveLength(1);
    expect(entry).toMatchObject({ date: "2026-10-08", category: "Awards", href: "/records/awards" });
    expect(entry.text.length).toBeLessThanOrEqual(300);
    expect(dayNamed(entry.text, 2026)).toBe(pendingResults.find((p) => p.ceremony === KCA)!.date);
  });

  it("negative control: the reader dates the HEAT line as shipped (25 Sep 2026) to its own gala, not this show", () => {
    const heat = updates.find((u) => u.text.startsWith("Three HEAT Latin Music Awards 2026 nominations"))!;
    const heatDay = dayNamed(heat.text, 2026);
    expect(heatDay).toBe(pendingResults.find((p) => p.ceremony === "HEAT Latin Music Awards")!.date);
    expect(heatDay).not.toBe(pendingResults.find((p) => p.ceremony === KCA)!.date);
  });
});
