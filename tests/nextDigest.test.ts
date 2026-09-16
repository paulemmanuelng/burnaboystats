import { describe, it, expect } from "vitest";
import { nextDigestDay, nextDigestLabel } from "../app/lib/nextDigest";

// The "you're in" ticket names the next send — derived in London time, never
// typed, and today counts on a Saturday only until 18:00 there.

describe("the ticket's next Saturday, in London", () => {
  it("is the coming Saturday on a weekday", () => {
    expect(nextDigestDay(new Date("2026-09-16T10:00:00Z"))).toBe("2026-09-19"); // Wednesday
    expect(nextDigestLabel(new Date("2026-09-16T10:00:00Z"))).toBe("Saturday 19 September");
  });
  it("counts today on a Saturday before 18:00 London, and next week after", () => {
    // 19 Sep 2026 is BST: 16:59Z is 17:59 London, 17:00Z is 18:00 London.
    expect(nextDigestDay(new Date("2026-09-19T16:59:00Z"))).toBe("2026-09-19");
    expect(nextDigestDay(new Date("2026-09-19T17:00:00Z"))).toBe("2026-09-26");
  });
  it("asks in London time, not UTC — a Friday night in New York is already Saturday in London", () => {
    // Fri 18 Sep 23:30 in New York = Sat 19 Sep 04:30 London → today counts.
    expect(nextDigestDay(new Date("2026-09-19T03:30:00Z"))).toBe("2026-09-19");
    // Winter: 28 Nov 2026 is GMT, so 18:00Z IS 18:00 London.
    expect(nextDigestDay(new Date("2026-11-28T17:59:00Z"))).toBe("2026-11-28");
    expect(nextDigestDay(new Date("2026-11-28T18:00:00Z"))).toBe("2026-12-05");
  });
});
