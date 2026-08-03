import { magnitudeOf, barsFor } from "../../app/lib/boardBars";
import { statBoxes } from "../../app/data/africasBiggest";

// The bars on /records/africas-biggest were drawn from a naive digit-strip,
// which got two whole classes of value wrong: it read "No. 20" as 0.2 (keeping
// the dot from "No.") so the worst placing drew the longest bar, and it read
// "959M" as 959 against "1.12B" as 1.12 so the order inverted. Both are silent
// — the page still renders, it just lies. Hence tests.
describe("magnitudeOf", () => {
  it("resolves the unit so mixed magnitudes compare", () => {
    expect(magnitudeOf("1.12B")).toBe(1.12e9);
    expect(magnitudeOf("959M")).toBe(9.59e8);
    expect(magnitudeOf("1.12B")!).toBeGreaterThan(magnitudeOf("959M")!);
    expect(magnitudeOf("$30.46M")).toBe(3.046e7);
    expect(magnitudeOf("9")).toBe(9);
  });

  it("refuses placings, in either notation", () => {
    for (const v of ["No. 1", "No. 20", "no 3", "#1", "#9"]) {
      expect(magnitudeOf(v)).toBeUndefined();
    }
  });

  it("never reads the dot in 'No.' as a decimal point", () => {
    // The original bug, stated directly: No. 20 outranks No. 9, so whatever a
    // parser returns for them must not invert that.
    expect(magnitudeOf("No. 20")).toBeUndefined();
    expect(magnitudeOf("No. 9")).toBeUndefined();
  });
});

describe("barsFor", () => {
  it("scales within the board, longest at 1", () => {
    expect(barsFor(["1.986B", "1.947B", "1.195B"])).toEqual([
      1,
      1.947 / 1.986,
      1.195 / 1.986,
    ]);
  });

  it("gives a placing board no bars at all", () => {
    expect(barsFor(["No. 1", "No. 2", "No. 20"])).toEqual([
      undefined,
      undefined,
      undefined,
    ]);
    expect(barsFor(["#1", "#5", "#9"])).toEqual([undefined, undefined, undefined]);
  });

  it("orders the mixed-unit YouTube board correctly", () => {
    const bars = barsFor(["1.12B", "1.11B", "1.02B", "959M", "741M"]);
    expect(bars[0]).toBe(1);
    // Every later entry is shorter than the one before it — the property that
    // actually broke, rather than a set of magic widths.
    for (let i = 1; i < bars.length; i++) {
      expect(bars[i]!).toBeLessThan(bars[i - 1]!);
    }
  });
});

describe("every board on /records/africas-biggest", () => {
  it("either bars all of its rows or none of them", () => {
    for (const box of statBoxes) {
      const entries =
        box.layout === "year"
          ? (box.rows?.find((r) => !r.inProgress) ?? box.rows?.[0])?.entries ?? []
          : box.entries ?? [];
      if (entries.length === 0) continue;
      const bars = barsFor(entries.map((e) => e.value));
      const barred = bars.filter((b) => b !== undefined).length;
      expect(`${box.id}: ${barred}`).toBe(
        `${box.id}: ${barred === 0 ? 0 : entries.length}`
      );
    }
  });

  it("never draws a bar next to a placing", () => {
    for (const box of statBoxes) {
      const entries = box.layout === "year" ? [] : box.entries ?? [];
      const bars = barsFor(entries.map((e) => e.value));
      entries.forEach((e, i) => {
        if (/^\s*(?:no\.?\s*|#)\s*\d/i.test(e.value ?? "")) {
          expect(`${box.id} ${e.value}: ${bars[i]}`).toBe(
            `${box.id} ${e.value}: undefined`
          );
        }
      });
    }
  });
});

describe("the monthly-listeners leaderboard", () => {
  it("is ordered by the values it displays", () => {
    // The board is titled "Highest monthly-listeners peak", and StatBox derives
    // its "He leads" badge from whoever sits at row one — so a row out of order
    // publishes a claim the board's own numbers don't support. This is what the
    // bot's mis-aimed write produced: Tyla at 58.99M above Burna Boy at 58.48M,
    // on a board that still showed him leading.
    const board = statBoxes.find((b) => b.id === "monthly-listeners-peak")!;
    const values = (board.entries ?? []).map((e) => magnitudeOf(e.value ?? "")!);
    expect(values.every((v) => Number.isFinite(v))).toBe(true);
    expect(values).toEqual([...values].sort((a, b) => b - a));
  });
});
