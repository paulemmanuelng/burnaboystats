import { describe, it, expect } from "vitest";
import { updates } from "../app/data/updates";

/**
 * The feed is stored newest-first and everything downstream trusts that:
 * app/updates/page.tsx's lastEntry, lib/digest.ts's week window and
 * lib/bandHeadline.ts's home band all read updates[0] as the latest fact. On
 * 16 Sep 2026 a 12 September entry sat below an 11 September one — harmless
 * that day, but the next out-of-order entry could be the one the band leads
 * with. Dates are ISO strings, so string comparison is date comparison.
 */
describe("updates feed order", () => {
  it("never goes back up in date as it goes down the array", () => {
    for (let i = 0; i + 1 < updates.length; i++) {
      expect(
        updates[i].date >= updates[i + 1].date,
        `entry ${i} (${updates[i].date}: ${updates[i].text.slice(0, 40)}…) sits above a newer entry ${i + 1} (${updates[i + 1].date})`,
      ).toBe(true);
    }
  });
});
