import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  AWARD_BODY_TIERS,
  AWARDS_EDITED_ON,
  DOCK_MAJORS,
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
import { bandEntry, openingClause } from "../app/lib/bandHeadline";
import { onThisDayEvents } from "../app/lib/onThisDay";

/**
 * Billboard Latin Music Awards 2026, Miami, 22 Oct 2026 — read 23 Oct 2026.
 *
 * The result is Billboard's own winners page, "Crossover Artist of the Year /
 * Bruno Mars / WINNER: Burna Boy / DJ Snake / Shenseea / Steve Aoki" (Paul's
 * hand read; billboard.com is not read from here), with the broadcaster's:
 * Telemundo's winners page names him among those "reconocidos con un premio
 * cada uno", dateline "Miami, FL — 22 de octubre de 2026". The nomination is
 * Telemundo's finalists page (9 Sep, updated 21 Sep 2026), his only category.
 *
 * It is NOT the Billboard Music Awards, the BBMAs his 2023 Top Afrobeats
 * Artist came from: a separate show with a body of its own. No source read
 * calls this win a first, so the feed line claims none.
 */
const BLMA = "Billboard Latin Music Awards";
const BBMA = "Billboard Music Awards";
const blma = ceremonies.find((c) => c.name === BLMA)!;
const entry = updates.find((u) => u.text.includes(BLMA))!;
const CATEGORY = "Crossover Artist of the Year";
/** The four other finalists, as Telemundo's list and Billboard's print them. */
const OTHERS = ["Bruno Mars", "DJ Snake", "Shenseea", "Steve Aoki"];

/** A feed line that claims a first, or calls a certification a plaque (B-10). */
const refused = (t: string) => [...t.matchAll(/\bfirst\b|\bplaques?\b/gi)].map((m) => m[0]);

describe("Billboard Latin Music Awards 2026", () => {
  it("carries the one category he was a finalist in, as a win on the ceremony's day", () => {
    expect(blma.noms).toEqual([{ year: 2026, date: "2026-10-22", category: CATEGORY, won: true }]);
    // Resolved, so there is nothing pending for it.
    expect(pendingResults.filter((p) => p.ceremony === BLMA)).toEqual([]);
  });

  it("is a body of its own: the Billboard Music Awards keep their two rows", () => {
    expect(ceremonies.filter((c) => c.name === BLMA)).toHaveLength(1);
    const bbma = ceremonies.find((c) => c.name === BBMA)!;
    expect(bbma.noms.map((n) => `${n.year} ${n.category} ${n.won}`)).toEqual([
      "2023 Top Afrobeats Artist true",
      "2024 Top Afrobeats Artist false",
    ]);
    expect(bbma.noms.some((n) => n.category === CATEGORY)).toBe(false);
  });

  it("is placed in one tier, right after the iHeartRadio Music Awards, and is not a dock major", () => {
    const tiers = AWARD_BODY_TIERS.filter((t) => t.bodies.includes(BLMA));
    expect(tiers.map((t) => t.tier)).toEqual(["International"]);
    const bodies = tiers[0].bodies;
    expect(bodies[bodies.indexOf(BLMA) - 1]).toBe("iHeartRadio Music Awards");
    expect(DOCK_MAJORS).not.toContain(BLMA);
    expect(DOCK_MAJORS).toContain(BBMA);
    // Placed on purpose, so it does not fall to the end of the list.
    const order = rankedCeremonies.map((c) => c.name);
    expect(order.indexOf(BLMA)).toBe(order.indexOf("iHeartRadio Music Awards") + 1);
    expect(order.at(-1)).not.toBe(BLMA);
  });

  it("moves the totals by one win, one nomination and one body, decided at once", () => {
    // By relation, as tests/los40Awards.test.ts does: the absolute totals are
    // tests/handoffTotals.test.ts's job. Recomputed WITHOUT this body:
    const others = ceremonies.filter((c) => c.name !== BLMA);
    const isPending = (name: string, n: { year: number; won: boolean }) =>
      !n.won && pendingResults.some((p) => p.ceremony === name && p.year === n.year);
    const pendingElsewhere = others.reduce((sum, c) => sum + c.noms.filter((n) => isPending(c.name, n)).length, 0);
    const nomsElsewhere = others.reduce((sum, c) => sum + c.noms.length, 0);
    const winsElsewhere = others.reduce((sum, c) => sum + c.noms.filter((n) => n.won).length, 0);
    expect(ceremonyCount - others.length).toBe(1);
    expect(totalNominations - nomsElsewhere).toBe(1);
    expect(totalWins - winsElsewhere).toBe(1);
    // A result, not a pending row: the strike rate's denominator grows by one.
    expect(pendingNominations).toBe(pendingElsewhere);
    expect(decidedNominations).toBe(nomsElsewhere - pendingElsewhere + 1);
  });

  it("is on the calendar on 22 October, dated by its own row", () => {
    const events = onThisDayEvents.filter((e) => e.source.data === "ceremonies" && e.source.ceremony === BLMA);
    expect(events.map((e) => [e.date, e.kind, e.headline])).toEqual([["2026-10-22", "award", `${BLMA}: ${CATEGORY}`]]);
  });

  it("dates the stamp to the day it was read", () => {
    const src = readFileSync(join(process.cwd(), "app/data/awards.ts"), "utf8");
    const at = src.indexOf(`name: "${BLMA}"`);
    expect(at).toBeGreaterThan(-1);
    expect(src.slice(at, src.indexOf(`category: "${CATEGORY}"`, at))).toContain("Read 23 Oct 2026");
    expect(AWARDS_EDITED_ON).toBe("2026-10-23");
  });

  it("logs one big Awards line, dated the ceremony, that leads the feed and the band", () => {
    expect(updates.filter((u) => u.text.includes(BLMA))).toHaveLength(1);
    expect(entry).toMatchObject({ date: blma.noms[0].date, category: "Awards", big: true, href: "/records/awards" });
    expect(updates[0]).toBe(entry);
    expect(bandEntry()).toBe(entry);
    expect(entry.text.length).toBeLessThan(300);
    // The band's headline is the category and the show, whole.
    expect(openingClause(entry.text)).toBe(`${CATEGORY} at the 2026 ${BLMA}`);
    for (const name of OTHERS) expect(entry.text).toContain(name);
    expect(refused(entry.text)).toEqual([]);
  });

  it("negative control: the check catches a first or a plaque in the line", () => {
    expect(refused(entry.text.replace("Burna Boy won", "Burna Boy, the first African to win,"))).toEqual(["first"]);
    expect(refused(`${entry.text} A plaque marks it.`)).toEqual(["plaque"]);
  });
});
