import { describe, it, expect } from "vitest";
import { africaBoards } from "../app/lib/africaBoards";
import { statBoxes } from "../app/data/africasBiggest";

/**
 * The phone's year boards are DERIVED from app/data/africasBiggest.ts, and
 * until 16 Sep 2026 the derivation read only entries[0] — so the 2026 row of
 * the most-streamed board named Tems alone while the same data (and the
 * desktop that reads it) marked Tems, Burna Boy and Wizkid joint first within
 * the count's ten-million resolution. The rule the data declares has to
 * survive the trip to the smaller screen.
 */
describe("mobile year boards honour the data's ties", () => {
  const box = statBoxes.find((b) => b.id === "most-streamed-african-artist")!;
  const board = africaBoards.find((b) => b.id === box.id)!;

  it("names every member of a tied leading group, in the data's order", () => {
    for (const [i, year] of (box.rows ?? []).entries()) {
      const group = [year.entries[0]];
      for (const e of year.entries.slice(1)) {
        if (!e.tie) break;
        group.push(e);
      }
      const row = board.rows[i];
      for (const e of group) expect(row.name, `${year.label}`).toContain(e.name);
      if (group.length > 1) {
        expect(row.sub).toContain("joint");
        expect(row.name).toMatch(/ & /);
      } else {
        expect(row.name).toBe(group[0].name);
        expect(row.sub).not.toContain("joint");
      }
    }
  });

  it("the 2026 row is currently a three-way tie and says so", () => {
    // The live bot maintains the tie flags; when the race separates, this
    // case is the one to retire, not the rule above.
    const row = board.rows.find((r) => r.sub.includes("2026"))!;
    expect(row.name).toBe("Tems, Burna Boy & Wizkid");
    expect(row.sub).toBe("🇳🇬 2026 · in progress · joint");
    expect(row.value).toBe("—");
    expect(row.his).toBe(false);
  });
});
