import { describe, it, expect } from "vitest";
import { getStatCards } from "../app/lib/statCards";
import { allItems, tierOf, COUNTRIES } from "../app/data/certifications";

/**
 * The live debug pass of 15 Oct 2026, tools lane: /share. The negative
 * control is the sentence the site served.
 */

// ── tools-share-1 ───────────────────────────────────────────────────────────

describe("tools-share-1: the default card's explainer names its Diamond bodies as prose", () => {
  const detail = () => getStatCards().find((c) => c.id === "african-giant")!.detail;
  /** A mid-dot list inside a sentence. */
  const dotInProse = (s: string) => / · /.test(s);
  /** The bodies behind the Diamond plaques, read from the plaques themselves. */
  const bodies = [...new Set(allItems.flatMap((it) => it.certs.filter((c) => tierOf(c.level) === "diamond").map((c) => COUNTRIES[c.c]?.body ?? c.c)))];

  it("there is more than one Diamond body, so the sentence lists them", () => {
    expect(bodies.length).toBeGreaterThan(1);
  });

  it("the sentence reads 'across A and B' (or 'A, B and C'), with no ' · ' inside it", () => {
    const d = detail();
    expect(dotInProse(d)).toBe(false);
    const list = d.match(/ of them are Diamond, across (.+)\.$/)![1];
    expect(list).toBe(`${bodies.slice(0, -1).join(", ")} and ${bodies.at(-1)}`);
  });

  it("the owner-ruled clauses stay word for word: both 'on the label's own plaque' routes are still there", () => {
    expect(detail().match(/on the label's own plaque/g)?.length).toBe(2);
  });

  it("negative control: the sentence the site served", () => {
    // /share at 1440, 15 Oct 2026, "Behind this number" (main innerText):
    const SERVED = "8 of them are Diamond, across SNEP · Sony Music Türkiye.";
    expect(dotInProse(SERVED)).toBe(true);
  });
});
