import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { afrobeatsArtists, certCount, chartEntries } from "../app/data/afrobeats";
import { artistFaqs } from "../app/lib/boardFaqs";

// The sweep documents in docs/sweeps/ are the evidence for every figure on the
// Afrobeats Board. They lived outside the repo until 21 Aug 2026, which meant
// the site published 742 plaques whose source existed only on one laptop —
// answering "where did this number come from" meant a filesystem search.
//
// Committing them fixes that only for as long as they agree with the data. A
// document that silently drifts from the figure it is supposed to justify is
// worse than no document, because it looks like provenance while backing a
// number nobody checked. These tests hold the two together.

const DIR = join(process.cwd(), "docs", "sweeps");
const certDoc = (slug: string) => join(DIR, `${slug}-certifications-v1.md`);
const peakDoc = (slug: string) => join(DIR, `${slug}-chart-peaks-v1.md`);

/**
 * Chart-entry totals that deliberately DIFFER from their document, with the
 * reason. Wizkid's file counts "Dynamite" at South Africa #45; Tyla's later
 * sweep removed it as below TOSAC's published depth for that release window,
 * and Wizkid's own file deletes "Money & Love" ZA #98 for exactly that reason.
 * Applying his own rule to his own row gives 153, so the board says 153 and the
 * document still says 154. Recorded here rather than left as a failing test, so
 * that a future reader cannot "fix" the board back to a number its own
 * methodology rejects.
 */
const DOCUMENTED_ENTRY_DIVERGENCES: Record<string, { doc: number; data: number; why: string }> = {
  wizkid: { doc: 154, data: 153, why: '"Dynamite" ZA #45 removed under the same depth rule the file applies to "Money & Love" ZA #98' },
};

describe("sweep documents back the Afrobeats Board", () => {
  it("ships a certifications and a chart-peaks document for every artist", () => {
    const missing = afrobeatsArtists.flatMap((a) =>
      [certDoc(a.slug), peakDoc(a.slug)].filter((f) => !existsSync(f)).map((f) => `${a.name}: ${f}`),
    );
    expect(missing, "every board artist needs both sweep documents committed").toEqual([]);
  });

  it("states a certification total matching the data, for every artist", () => {
    for (const a of afrobeatsArtists) {
      const m = readFileSync(certDoc(a.slug), "utf8").match(/## Total: \*\*(\d+) certifications\*\*/);
      expect(m, `${a.name}: no "## Total: **N certifications**" line to check against`).not.toBeNull();
      expect(Number(m![1]), `${a.name}: the sweep document and afrobeats.ts disagree on the plaque count`).toBe(certCount(a));
    }
  });

  // The header was guarded and the BODY was not, so four files stated two
  // different plaque totals for the same artist. The first version of this
  // check was then fitted to those four bugs and MISSED A FIFTH: Rema's body
  // said `Rema = **80**.` — period outside the bold — against a header of 82,
  // and the regex required the period inside. It also had no anti-vacuity
  // assertion, so it could have matched nothing anywhere and stayed green.
  //
  // Both are fixed here: more phrasings, and a floor on how many files it
  // actually reads a figure out of.
  it("no body figure contradicts the file's own plaque total", () => {
    // Only phrasings that mean THIS artist's own plaque count. A tier table's
    // gross, or a sentence about Burna Boy's 230, is a different claim.
    const CLAIMS = [
      /\*\*Plaque count \(this file[^)]*\): (\d+)\.?\*\*/g,
      /\*\*(\d+) plaques\*\* \(this file/g,
      // "**Wizkid = 155.**" and "Rema = **82**." — the bold may wrap the whole
      // clause or only the numeral, and the period may fall either side.
      /\*\*[A-Z][a-zA-Z .]+ = (\d+)\.?\*\*/g,
      /\b[A-Z][a-zA-Z ]+ = \*\*(\d+)\*\*\.?/g,
      // Decomposition lines, but ONLY those that name what they decompose. A
      // bare "= **N** ✓" also matches legitimate sub-sums — Rema's 121
      // announcements, Ayra Starr's group splits — and would fail on those.
      // Matched per LINE rather than per segment because the label sits at the
      // start and the total at the end, with "·" between them:
      //   "**Tier split:** Platinum **53** · Gold **14** · Silver **13** = **80** ✓"
      /^.*(?:tier split|country split|per country|sections?:).*?=\s*\*\*(\d+)\*\*\s*✓.*$/gim,
      // The ledger foot: " 82 plaques    ≥121 announcements"
      /^\s*(\d+) plaques\s{2,}/gm,
    ];
    const wrong: string[] = [];
    let filesWithAFigure = 0;
    for (const a of afrobeatsArtists) {
      if (!a.swept) continue;
      const doc = readFileSync(certDoc(a.slug), "utf8");
      const actual = certCount(a);
      let sawOne = false;
      for (const re of CLAIMS) {
        for (const m of doc.matchAll(re)) {
          sawOne = true;
          if (Number(m[1]) !== actual) {
            wrong.push(`${a.name}: body says ${m[1]}, data has ${actual} — "${m[0].trim().slice(0, 60)}"`);
          }
        }
      }
      if (sawOne) filesWithAFigure++;
    }

    // Anti-vacuity. Without this the whole check passes by matching nothing,
    // which is how the Rema defect survived the first version.
    expect(
      filesWithAFigure,
      "the body patterns matched a plaque figure in almost no file — they have gone stale against the documents"
    ).toBeGreaterThanOrEqual(Math.ceil(afrobeatsArtists.filter((a) => a.swept).length / 2));

    expect(
      wrong,
      "a sweep document states a plaque count that its own guarded header contradicts"
    ).toEqual([]);
  });

  // The check above holds the stated TOTAL to the data. It cannot see a
  // decomposition whose parts no longer add up to the total it prints —
  // "Platinum 53 · Gold 13 · Silver 13 = **80**" states the right answer to the
  // wrong sum, and that is how these files drift: someone corrects the headline
  // and leaves the addends. So the arithmetic is checked as arithmetic.
  it("every decomposition's parts add up to the total it states", () => {
    const LINE = /^.*(?:tier split|country split|per country|sections?:).*?=\s*\*\*(\d+)\*\*\s*✓.*$/gim;
    const bad: string[] = [];
    let checked = 0;
    for (const a of afrobeatsArtists) {
      if (!a.swept) continue;
      const doc = readFileSync(certDoc(a.slug), "utf8");
      for (const m of doc.matchAll(LINE)) {
        const line = m[0];
        const stated = Number(m[1]);
        // Match the written arithmetic directly rather than scraping numbers
        // off the line — "a + b + c = **N**", or bold figures separated by "·"
        // where the file writes the split that way. Anything else is left
        // alone: a guess at which numerals are addends is how a check like this
        // starts failing on prose.
        const sums: { parts: number[]; total: number }[] = [];
        for (const e of line.matchAll(/(\d+(?:\s*\+\s*\d+)+)\s*=\s*\*\*(\d+)\*\*/g)) {
          sums.push({ parts: e[1].split("+").map((p) => Number(p.trim())), total: Number(e[2]) });
        }
        if (!sums.length) {
          // "**53** · Gold **14** · Silver **13** = **80** ✓" — every bold
          // figure LEFT of the "=" is an addend, including the last one, which
          // is followed by the equals rather than by another "·".
          const lhs = line.slice(0, line.lastIndexOf("="));
          const dotted = [...lhs.matchAll(/\*\*(\d+)\*\*/g)].map((x) => Number(x[1]));
          if (dotted.length >= 2) sums.push({ parts: dotted, total: stated });
        }
        for (const { parts, total } of sums) {
          checked++;
          const sum = parts.reduce((t, n) => t + n, 0);
          if (sum !== total) {
            bad.push(`${a.name}: ${parts.join(" + ")} = ${sum}, but the line states ${total} — "${line.trim().slice(0, 80)}"`);
          }
        }
      }
    }
    expect(checked, "no decomposition arithmetic was parsed — the phrasings have drifted").toBeGreaterThan(3);
    expect(bad, "a decomposition's parts no longer sum to the total it prints").toEqual([]);
  });

  it("states a chart-entry total matching the data, bar the documented divergence", () => {
    for (const a of afrobeatsArtists) {
      // Phrasing varies across the nine files ("104 + 19 = 123 chart entries",
      // "49 singles + 17 albums = 66 chart entries", "= 118 total chart
      // entries"), so anchor on the sum rather than the whole sentence.
      const m = readFileSync(peakDoc(a.slug), "utf8").match(/=\s*(\d+)\s*(?:total\s+)?chart entries/);
      expect(m, `${a.name}: no "= N chart entries" total to check against`).not.toBeNull();
      const stated = Number(m![1]);
      const known = DOCUMENTED_ENTRY_DIVERGENCES[a.slug];
      if (known) {
        expect(stated, `${a.name}: the divergence record is stale — the document no longer says ${known.doc}`).toBe(known.doc);
        expect(chartEntries(a), `${a.name}: the board no longer says ${known.data} (${known.why})`).toBe(known.data);
      } else {
        expect(stated, `${a.name}: the sweep document and afrobeats.ts disagree on the chart-entry count`).toBe(chartEntries(a));
      }
    }
  });

  it("tells a READER why Nigeria will not match TurnTable, on both layouts", () => {
    // The comment in afrobeats.ts only helps someone reading the repo. The fan
    // who checks the live dashboard and finds the Silvers missing never sees
    // it. This holds the reader-facing explanation in place — and on BOTH
    // layouts, because /methodology renders its closing blocks as hardcoded
    // JSX on desktop and from the `closingSections` array on mobile, so an
    // addition to one ships nothing to the other.
    const CAPTURE = "web.archive.org/web/20260221224010";
    const method = readFileSync(join(process.cwd(), "app", "methodology", "page.tsx"), "utf8");
    const desktop = method.slice(method.indexOf("Closing blocks"));
    const mobileArray = method.slice(0, method.indexOf("export default"));
    expect(desktop, "the desktop closing blocks lost the Nigeria explanation").toContain(CAPTURE);
    expect(mobileArray, "closingSections lost it, so mobile ships without it").toContain(CAPTURE);
    for (const src of [desktop, mobileArray]) expect(src).toContain("500 rows");
  });

  it("asks the Nigeria question on exactly the artists it applies to", () => {
    for (const a of afrobeatsArtists) {
      const silver = a.releases.flatMap((r) => r.certs).filter((c) => c.c === "NG" && c.level === "Silver").length;
      const asked = artistFaqs(a).some((f) => f.q.includes("TurnTable"));
      expect(asked, `${a.name} has ${silver} Nigerian Silver plaques but the FAQ ${asked ? "asks" : "does not ask"} the question`).toBe(silver > 0);
    }
  });

  it("keeps Nigeria's archive-only provenance recorded where the data lives", () => {
    // The question that prompted all of this: Seyi Vibez's 20 Silvers are absent
    // from TurnTable's live dashboard, which caps at 500 rows and serves no
    // Silver at all. If that explanation ever falls out of afrobeats.ts, the
    // next person to check the live register concludes the board is wrong.
    const src = readFileSync(join(process.cwd(), "app", "data", "afrobeats.ts"), "utf8");
    expect(src).toMatch(/500 rows/);
    expect(src).toMatch(/docs\/sweeps\//);
    expect(src.toLowerCase()).toContain("silver");
  });
});
