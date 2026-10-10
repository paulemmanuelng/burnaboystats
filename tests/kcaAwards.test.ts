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
    expect([totalWins, totalNominations, ceremonyCount]).toEqual([83, 249, 49]);
    // Pending, not lost: the decided count — the strike rate's denominator —
    // holds at the 238 it was before the nomination.
    expect([pendingNominations, decidedNominations]).toEqual([11, 238]);
  });

  it("never uses the lead's category name", () => {
    const texts = [...kca.noms.map((n) => n.category), entry.text];
    expect(texts.filter((t) => t.includes(LEAD_CATEGORY))).toEqual([]);
    // Negative control: the lead's own category, as its post wrote it, is caught.
    expect([LEAD_CATEGORY].filter((t) => t.includes(LEAD_CATEGORY))).toEqual([LEAD_CATEGORY]);
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
