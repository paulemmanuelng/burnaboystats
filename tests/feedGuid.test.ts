import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { updates } from "../app/data/updates";
import { feedGuids, RETIRED_FEED_SLOTS } from "../app/lib/feedGuid";

/**
 * Removing a feed entry must not renumber the others.
 *
 * Live, 26 Sep 2026: PR #340 took 15 board-artist entries out of updates.ts and
 * 18 of the 323 surviving RSS guids changed. "/timeline#2026-09-17-22" became
 * "/timeline#2026-09-17-15"; "/records/awards#2026-09-17-14", once the Headies
 * correction, now named "The strike rate now counts decided nominations
 * only…". A reader that trusts guids showed 17 old items as new and would
 * never show the one whose guid it had already seen.
 *
 * tests/siteDebugGroupF.test.ts (F-01) covers ADDING entries; this covers
 * taking them away.
 */

const slotOf = (guid: string) => {
  const m = /#(\d{4}-\d{2}-\d{2})-(\d+)$/.exec(guid)!;
  return { date: m[1], n: Number(m[2]) };
};

describe("removing an entry keeps every other guid", () => {
  it("for each entry in the log, once its slot is retired", () => {
    const now = feedGuids(updates);
    for (let i = 0; i < updates.length; i++) {
      const rest = [...updates.slice(0, i), ...updates.slice(i + 1)];
      const after = feedGuids(rest, [...RETIRED_FEED_SLOTS, slotOf(now[i])]);
      const expected = [...now.slice(0, i), ...now.slice(i + 1)];
      const moved = after.filter((g, k) => g !== expected[k]);
      expect(moved, `removing "${updates[i].text.slice(0, 50)}…" renumbered these`).toEqual([]);
    }
  });

  it("and a new entry on that date never inherits the removed guid", () => {
    const now = feedGuids(updates);
    // The newest entry of its date: remove it, then log another under the same href and date.
    const i = 0;
    const gone = now[i];
    const rest = updates.slice(1);
    const next = [{ ...updates[i], text: "a new entry" }, ...rest];
    const after = feedGuids(next, [...RETIRED_FEED_SLOTS, slotOf(gone)]);
    expect(after[0]).not.toBe(gone);
    expect(after.slice(1)).toEqual(now.slice(1));
  });

  it("negative control: without the retired slot, one removal renumbers its date", () => {
    // The oldest 17 Sep 2026 entry, taken out the way PR #340 took its fifteen.
    const now = feedGuids(updates);
    const i = updates.map((u) => u.date).lastIndexOf("2026-09-17");
    expect(i).toBeGreaterThanOrEqual(0);
    const rest = [...updates.slice(0, i), ...updates.slice(i + 1)];
    const after = feedGuids(rest, RETIRED_FEED_SLOTS);
    const expected = [...now.slice(0, i), ...now.slice(i + 1)];
    const moved = after.filter((g, k) => g !== expected[k]);
    // Every other 17 Sep entry moves down one — "/timeline#2026-09-17-15"
    // among them, the guid that shipped after #340.
    expect(moved.length).toBe(updates.filter((u) => u.date === "2026-09-17").length - 1);
    expect(expected).toContain("/timeline#2026-09-17-15");
    expect(after).not.toContain("/timeline#2026-09-17-15");
  });
});

describe("every guid the feed has served is still served, or its slot is retired", () => {
  // The feed's guids on 26 Sep 2026, read from the live /rss.xml. An entry
  // removed since must retire its slot (RETIRED_FEED_SLOTS); an href edited
  // since moves its guid too, and shows the item again as unread — if that is
  // the intent, take the old guid out of the fixture in the same commit.
  const published: string[] = JSON.parse(readFileSync("tests/fixtures/feed-guids-2026-09-26.json", "utf8")).guids;
  const lost = (served: string[], retired: readonly { date: string; n: number }[]) => {
    const now = new Set(served);
    const skip = new Set(retired.map((r) => `${r.date}#${r.n}`));
    return published.filter((g) => !now.has(g) && !skip.has(`${slotOf(g).date}#${slotOf(g).n}`));
  };

  it("holds for the feed as built", () => {
    expect(published.length).toBe(323);
    expect(lost(feedGuids(updates), RETIRED_FEED_SLOTS)).toEqual([]);
  });

  it("negative control: an entry removed with no retired slot loses a published guid", () => {
    const i = updates.map((u) => u.date).lastIndexOf("2026-09-17");
    const rest = [...updates.slice(0, i), ...updates.slice(i + 1)];
    expect(lost(feedGuids(rest, RETIRED_FEED_SLOTS), RETIRED_FEED_SLOTS).length).toBeGreaterThan(0);
  });
});
