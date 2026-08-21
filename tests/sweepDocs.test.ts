import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { afrobeatsArtists, certCount, chartEntries } from "../app/data/afrobeats";

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
