import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ceremonies, pendingResults, type PendingCeremony } from "../app/data/awards";

// `won: false` carries two meanings in awards.ts — lost, and not decided yet —
// and the data cannot tell them apart. That matters because the second one has
// an expiry date: on 11 September 2026 AFRIMMA's four rows are honest pending
// entries, and on 13 September the identical rows are an unread result being
// published as four losses. Nothing about the file changes in between, so
// nothing could ever have flagged it.
//
// `pendingResults` supplies the missing fact — the day each ceremony is held —
// and this file turns it into a deadline. The point is not that these tests
// pass today; it is that they stop passing the morning after a ceremony, which
// is the only moment anyone would otherwise have to notice on their own.
//
// Resolving a failure means reading the winners at the awarding body itself.
// Press summaries are not sufficient and the reason is on the record twice: the
// AEA USA 2025 lists where press read nominee #1 as the winner, and — while
// this file was being written — a search engine that reported AFRIMMA's 12
// September 2026 ceremony as already held, complete with winners, eight days
// before the date, having silently mixed it up with AFRIMA.

const daysUntil = (iso: string, now: Date) =>
  Math.floor((Date.parse(`${iso}T23:59:59Z`) - now.getTime()) / 86_400_000);

/** Pending rows whose ceremony has already been held. */
export const overdue = (list: PendingCeremony[], now = new Date()) =>
  list
    .filter((p) => daysUntil(p.date, now) < 0)
    .map((p) => `${p.ceremony} ${p.year} was held on ${p.date} — read the winners at the body and resolve it`);

describe("the deadline rule", () => {
  const AFRIMMA: PendingCeremony = {
    ceremony: "African Muzik Magazine Awards (AFRIMMA)",
    year: 2026,
    date: "2026-09-12",
    where: "Dallas",
  };

  it("stays quiet while the ceremony is still ahead", () => {
    expect(overdue([AFRIMMA], new Date("2026-09-11T12:00:00Z"))).toHaveLength(0);
  });

  it("stays quiet on the day itself, which may still be running", () => {
    expect(overdue([AFRIMMA], new Date("2026-09-12T21:00:00Z"))).toHaveLength(0);
  });

  it("fires the morning after", () => {
    const out = overdue([AFRIMMA], new Date("2026-09-13T09:00:00Z"));
    expect(out).toHaveLength(1);
    expect(out[0]).toContain("read the winners at the body");
  });
});

describe("pending ceremonies", () => {
  it("none of them has already happened", () => {
    // When this fails, the ceremony has been held. Go to its own winners list,
    // flip any win in `ceremonies`, delete the row from `pendingResults`, and
    // expect handoffTotals.test.ts's win/nomination pins to need bumping.
    expect(overdue(pendingResults)).toEqual([]);
  });

  it("each names a real ceremony with unresolved nominations in that year", () => {
    // A pending row pointing at nothing is worse than no row: it looks like
    // cover while guarding an empty set. This catches a ceremony being renamed,
    // and a row left behind after its noms were resolved.
    for (const p of pendingResults) {
      const c = ceremonies.find((x) => x.name === p.ceremony);
      expect(c, `pendingResults names "${p.ceremony}", which is not a ceremony in awards.ts`).toBeDefined();
      const noms = c!.noms.filter((n) => n.year === p.year);
      expect(noms.length, `no ${p.year} nominations under "${p.ceremony}"`).toBeGreaterThan(0);
      expect(
        noms.every((n) => !n.won),
        `"${p.ceremony}" ${p.year} already records a win, so its result is in — remove it from pendingResults`
      ).toBe(true);
    }
  });

  it("holds an ISO date and a venue for every row", () => {
    for (const p of pendingResults) {
      expect(p.date, `${p.ceremony}: date must be ISO YYYY-MM-DD`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(p.date.slice(0, 4)).toBe(String(p.year));
      expect(p.where.length, `${p.ceremony}: say where it is held`).toBeGreaterThan(0);
    }
  });

  it("lists no ceremony twice", () => {
    const names = pendingResults.map((p) => `${p.ceremony} ${p.year}`);
    expect(new Set(names).size).toBe(names.length);
  });

  it("covers every block the file's own comments mark PENDING", () => {
    // The comments beside the nominations and the registry are two records of
    // the same fact, and they had already drifted: AFRIMMA's pending status
    // lived only in a header paragraph 270 lines above the rows it described,
    // where nothing beside those rows said they were unresolved. A block that
    // says PENDING and is absent from the registry gets no deadline at all.
    const src = readFileSync(join(process.cwd(), "app", "data", "awards.ts"), "utf8");
    const body = src.slice(src.indexOf("export const ceremonies"));
    const blocks = body.split(/\n  \{\n    name: "/).slice(1);
    const marked = blocks
      .filter((b) => /\bPENDING\b/.test(b))
      .map((b) => b.slice(0, b.indexOf('"')));
    expect(marked.length, "no ceremony block is marked PENDING any more — did the marker change?").toBeGreaterThan(0);
    const missing = marked.filter((n) => !pendingResults.some((p) => p.ceremony === n));
    expect(missing, `marked PENDING but carrying no date in pendingResults: ${missing.join(", ")}`).toEqual([]);
  });
});
