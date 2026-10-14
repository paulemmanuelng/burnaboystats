import { describe, it, expect } from "vitest";
import { updates } from "../app/data/updates";
import { leadClause } from "../app/lib/updateClause";
import { ABBREV, MIN, clauseCut, firstClause, openingClause } from "../app/lib/bandHeadline";

/**
 * Job 4 · J4-8: an /updates row's lead clause, at weight 500, is the entry up
 * to and including its first colon or full stop (fix 125's boundary), cut by
 * the site's ONE clause rule — bandHeadline's clauseCut, with its ABBREV list
 * and its MIN step-over — so the row's bold lead, the home band's headline
 * and the /updates link preview's headline (Job 6) can never disagree.
 *
 * Every assertion runs over the whole feed as it stands, and no case is found
 * by its position: a human adds entries at the top, so a case is found by its
 * date and its opening words.
 */

const entry = (date: string, opening: string) => {
  const u = updates.find((x) => x.date === date && x.text.startsWith(opening));
  if (!u) throw new Error(`no ${date} entry opening "${opening}"`);
  return u.text;
};
const ABBR_END = new RegExp(`\\b(?:${ABBREV.join("|")})\\.$`);

describe("leadClause over the whole feed", () => {
  it("lead + rest is the entry; the lead ends at a colon or a full stop, or is the whole entry", () => {
    expect(updates.length).toBeGreaterThan(300);
    for (const u of updates) {
      const { lead, rest } = leadClause(u.text);
      expect(lead + rest, u.date).toBe(u.text);
      if (rest) {
        expect(lead, `${u.date}: ${lead}`).toMatch(/[:.]$/);
        // the boundary is followed by whitespace, so a figure ("13.04M") is never split
        expect(rest, `${u.date}: ${lead}`).toMatch(/^\s/);
      } else expect(lead).toBe(u.text);
    }
  });

  it("never ends a lead on an abbreviation, an initial or a stub", () => {
    for (const u of updates) {
      const { lead, rest } = leadClause(u.text);
      if (!rest) continue;
      expect(lead, u.date).not.toMatch(ABBR_END);
      expect(lead, u.date).not.toMatch(/(?:^|[\s“(])[A-Z]\.$/);
      expect(lead.trim().length, `${u.date}: ${lead}`).toBeGreaterThan(MIN);
    }
  });

  it("is the one rule: a lead without its colon or full stop is firstClause(text, { dash: false })", () => {
    for (const u of updates) {
      const { lead, rest } = leadClause(u.text);
      if (rest) expect(lead.replace(/[:.]$/, "").trim(), u.date).toBe(firstClause(u.text, { dash: false }));
      else {
        expect(clauseCut(u.text, { dash: false }), u.date).toBeNull();
        expect(firstClause(u.text, { dash: false })).toBe(u.text.trim());
      }
    }
  });

  it("most entries lead with a colon clause; some with a sentence; some are one clause", () => {
    const kinds = { colon: 0, stop: 0, whole: 0 };
    for (const u of updates) {
      const { lead, rest } = leadClause(u.text);
      kinds[!rest ? "whole" : lead.endsWith(":") ? "colon" : "stop"]++;
    }
    expect(kinds.colon).toBeGreaterThan(kinds.stop + kinds.whole);
    expect(kinds.stop).toBeGreaterThan(0);
    expect(kinds.whole).toBeGreaterThan(0);
  });
});

describe("leadClause: the cases the rule exists for", () => {
  it('"Holding at No. 20:" is kept whole — the "No." is not a full stop', () => {
    expect(leadClause(entry("2026-09-16", "Holding at No. 20:")).lead).toBe("Holding at No. 20:");
  });

  it("“B. D'OR” is not cut at its initial: MIN steps over it", () => {
    const { lead } = leadClause(entry("2026-09-18", "“B. D'OR”"));
    expect(lead.startsWith("“B. D'OR” with Wizkid")).toBe(true);
    expect(lead).toMatch(/\.$/);
  });

  it("“Global 200 Excl. US” is not cut at “Excl.”", () => {
    const text = updates.find((u) => u.date === "2026-07-21" && /Global 200 Excl\. US/.test(u.text))!.text;
    const { lead } = leadClause(text);
    expect(lead).not.toMatch(/Excl\.$/);
    expect(lead).toContain("Excl. US");
  });

  it("an entry with no colon or sentence break is all lead", () => {
    expect(leadClause("Dai Dai holds at No. 1 in Nigeria for a ninth week")).toEqual({
      lead: "Dai Dai holds at No. 1 in Nigeria for a ninth week",
      rest: "",
    });
  });

  it("the band keeps its own cut: openingClause still also stops at a spaced em dash", () => {
    const t = "Nine weeks at No. 1 in France — the longest run by any African act there.";
    expect(openingClause(t)).toBe("Nine weeks at No. 1 in France");
    expect(firstClause(t, { dash: false })).toBe(t);
  });
});

describe("leadClause negative controls", () => {
  it("the cut that shipped in #238 took the 18 Sep entry down to “B", () => {
    // git show 352959d6:app/lib/bandHeadline.ts:51, verbatim.
    const SHIPPED_IN_238 = /^(.+?)(?::\s|\s—\s|(?<!\bNo)(?<!\bU\.S)\.\s(?=[A-Z“]))/;
    expect(SHIPPED_IN_238.exec(entry("2026-09-18", "“B. D'OR”"))?.[1]).toBe("“B");
  });

  it("a private abbreviation list without Excl (the plan's first draft) cut the 21 Jul entry at “Excl.”", () => {
    const DRAFT = ["No", "Nos", "vs", "St", "Mr", "Mrs", "Dr", "ft", "feat", "Jr", "Vol", "Inc", "Ltd"];
    const cut = new RegExp(`^(.*?(?::|(?<!\\b(?:${DRAFT.join("|")}))\\.))\\s`);
    const text = updates.find((u) => u.date === "2026-07-21" && /Global 200 Excl\. US/.test(u.text))!.text;
    expect(cut.exec(text)?.[1]).toMatch(/Excl\.$/);
    expect(leadClause(text).lead).not.toMatch(/Excl\.$/);
  });
});
