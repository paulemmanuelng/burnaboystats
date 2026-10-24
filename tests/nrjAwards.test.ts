import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  AWARDS_EDITED_ON,
  ceremonies,
  pendingResults,
  totalNominations,
  totalWins,
  pendingNominations,
  decidedNominations,
} from "../app/data/awards";
import { updates } from "../app/data/updates";
import { openingClause } from "../app/lib/bandHeadline";
import { onThisDayEvents } from "../app/lib/onThisDay";

/**
 * NRJ Music Awards 2026, Cannes, 23 Oct 2026 — read 24 Oct 2026.
 *
 * The result is NRJ's own palmarès (nrj.fr/music-awards/palmares): "Collab'
 * Internationale / Shakira & Burna Boy", the other five printed as "Ils étaient
 * nommés dans cette catégorie". NRJ's winners article of 24/10/2026 00:20 has
 * "Collab' Internationale : Shakira & Burna Boy "Dai Dai"" and the ceremony "ce
 * vendredi 23 octobre, en direct du Palais des Festivals de Cannes". The
 * nomination was read on NRJ's own pages on 16 Sep 2026 and has been counted
 * since, so the result moves a win and the pending count, not the nominations.
 * No source read calls the win a first, so the feed line claims none.
 */
const NRJ = "NRJ Music Awards";
const CATEGORY = "Collab' Internationale";
const BLMA = "Billboard Latin Music Awards";
const nrj = ceremonies.find((c) => c.name === NRJ)!;
const HEADLINE = `${CATEGORY} at the 2026 ${NRJ}`;
const entry = updates.find((u) => openingClause(u.text) === HEADLINE)!;
/** The five other nominees, as NRJ's palmarès prints them. */
const OTHERS = ["David Guetta & Jennifer Lopez", "Hugel & Solto", "Justė / Jaxstyle / Jon", "Martin Garrix & Ed Sheeran", "Tame Impala & Jennie"];

/** A feed line that claims a first, or calls a certification a plaque (B-10). */
const refused = (t: string) => [...t.matchAll(/\bfirst\b|\bplaques?\b/gi)].map((m) => m[0]);

describe("NRJ Music Awards 2026", () => {
  it("carries the one category he was nominated in, as a win on the ceremony's day", () => {
    expect(nrj.noms).toEqual([
      { year: 2026, date: "2026-10-23", category: CATEGORY, work: "Dai Dai (with Shakira)", won: true },
    ]);
  });

  it("is resolved: nothing is left pending for it", () => {
    expect(pendingResults.filter((p) => p.ceremony === NRJ)).toEqual([]);
    // The pending list stays in date order without it.
    const days = pendingResults.map((p) => p.date);
    expect(days).toEqual([...days].sort());
  });

  it("moves one nomination from pending to won, and the nomination count not at all", () => {
    // By relation, as tests/blmaAwards.test.ts does: the absolute totals are
    // tests/handoffTotals.test.ts's job. Recomputed WITHOUT this body:
    const others = ceremonies.filter((c) => c.name !== NRJ);
    const isPending = (name: string, n: { year: number; won: boolean }) =>
      !n.won && pendingResults.some((p) => p.ceremony === name && p.year === n.year);
    const pendingElsewhere = others.reduce((sum, c) => sum + c.noms.filter((n) => isPending(c.name, n)).length, 0);
    const nomsElsewhere = others.reduce((sum, c) => sum + c.noms.length, 0);
    const winsElsewhere = others.reduce((sum, c) => sum + c.noms.filter((n) => n.won).length, 0);
    expect(totalNominations - nomsElsewhere).toBe(1);
    expect(totalWins - winsElsewhere).toBe(1);
    expect(pendingNominations).toBe(pendingElsewhere);
    // The day before, rebuilt: the same row, won: false, with NRJ pending.
    const before = { wins: winsElsewhere, noms: nomsElsewhere + 1, pending: pendingElsewhere + 1 };
    expect(totalWins - before.wins).toBe(1);
    expect(totalNominations).toBe(before.noms);
    expect(before.pending - pendingNominations).toBe(1);
    expect(decidedNominations - (before.noms - before.pending)).toBe(1);
  });

  it("is on the calendar on 23 October, dated by its own row", () => {
    const events = onThisDayEvents.filter((e) => e.source.data === "ceremonies" && e.source.ceremony === NRJ);
    expect(events.map((e) => [e.date, e.kind, e.headline])).toEqual([["2026-10-23", "award", `${NRJ}: ${CATEGORY}`]]);
  });

  it("dates the stamp to the day the result was read", () => {
    const src = readFileSync(join(process.cwd(), "app/data/awards.ts"), "utf8");
    const at = src.indexOf(`name: "${NRJ}"`);
    expect(at).toBeGreaterThan(-1);
    expect(src.slice(at, src.indexOf(`category: "${CATEGORY}"`, at))).toContain("read 24 Oct 2026");
    // At least the day this result was read; a later awards edit moves it on.
    expect(AWARDS_EDITED_ON >= "2026-10-24").toBe(true);
  });

  it("logs one big Awards line, dated the ceremony, above the 22 Oct BLMA line", () => {
    expect(updates.filter((u) => openingClause(u.text) === HEADLINE)).toHaveLength(1);
    expect(entry).toMatchObject({ date: nrj.noms[0].date, category: "Awards", big: true, href: "/records/awards" });
    // Above the BLMA line it was added over; a newer entry may later lead the
    // feed (leads1010Stamps and phoneHomeProof hold the top by relation).
    const blma = updates.findIndex((u) => u.text.includes(BLMA));
    expect(blma).toBeGreaterThan(-1);
    expect(updates.indexOf(entry)).toBeLessThan(blma);
    expect(entry.text.length).toBeLessThan(300);
    for (const name of OTHERS) expect(entry.text).toContain(name);
    expect(entry.text).toContain("Cannes on 23 October");
    expect(refused(entry.text)).toEqual([]);
    // The 16 Sep nomination line stays, a dated snapshot.
    expect(updates.some((u) => u.date === "2026-09-16" && u.text.startsWith(`Nominated at the ${NRJ}`))).toBe(true);
  });

  it("negative control: the check catches a first or a plaque in the line", () => {
    expect(refused(entry.text.replace("with Shakira won", "with Shakira, his first NRJ award, won"))).toEqual(["first"]);
    expect(refused(`${entry.text} A plaque marks it.`)).toEqual(["plaque"]);
  });
});
