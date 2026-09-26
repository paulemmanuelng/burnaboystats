import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { tours } from "../app/data/tours";

/**
 * The Life on the Outside Tour (2018), checked against the venues' own
 * listings in the On This Day date checks. Each SHIPPED line is the row the
 * site printed before the fix.
 */

const source = readFileSync(join(process.cwd(), "app/data/tours.ts"), "utf8");
const tour = tours.find((t) => t.name === "Life on the Outside Tour");
const dates = tour?.dates ?? [];
const on = (date: string) => dates.filter((d) => d.date === date);

describe("Life on the Outside Tour dates match the venues' own listings", () => {
  it("the tour exists and every date parses", () => {
    expect(dates.length).toBeGreaterThan(0);
    for (const d of dates) expect(Number.isNaN(new Date(`${d.date} 12:00:00 UTC`).getTime())).toBe(false);
  });

  it("the dates run in order", () => {
    const whens = dates.map((d) => +new Date(`${d.date} 12:00:00 UTC`));
    expect(whens).toEqual([...whens].sort((a, b) => a - b));
  });

  // Each venue's own calendar has another act, or nothing, on that night.
  const SHIPPED_UK = [
    `{ date: "Sep 20, 2018", venue: "The Garage", city: "Glasgow", country: "UK", cap: 600 }`,
    `{ date: "Sep 22, 2018", venue: "O2 Academy", city: "Newcastle", country: "UK", cap: 2000 }`,
    `{ date: "Sep 23, 2018", venue: "O2 Academy", city: "Leeds", country: "UK", cap: 2300 }`,
    `{ date: "Sep 24, 2018", venue: "O2 Ritz", city: "Manchester", country: "UK", cap: 1500 }`,
  ];

  it("lists no September 2018 UK show", () => {
    for (const row of SHIPPED_UK) expect(source).not.toContain(row);
    expect(dates.filter((d) => d.country === "UK" && d.date.startsWith("Sep "))).toEqual([]);
  });

  it("31 May 2018 is Underground Arts, not The Foundry", () => {
    expect(source).not.toContain(`{ date: "May 31, 2018", venue: "The Foundry", city: "Philadelphia", country: "USA", cap: 450 }`);
    expect(on("May 31, 2018").map((d) => `${d.venue}, ${d.city}`)).toEqual(["Underground Arts, Philadelphia"]);
  });

  it("12 Jun 2018 is The Crocodile, Seattle", () => {
    expect(on("Jun 12, 2018").map((d) => `${d.venue}, ${d.city}`)).toEqual(["The Crocodile, Seattle"]);
  });
});
