import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { timelineEras, tourRun } from "../app/data/timeline";
import { tours, festivals, otherShows, type Festival } from "../app/data/tours";

/**
 * Tour prose that the tour data had moved out from under. Both found on the
 * live site after #351; each negative control is the string that shipped.
 */

const ROOT = process.cwd();
const read = (p: string) => readFileSync(join(ROOT, p), "utf8");

describe("/timeline dates the I Told Them… Tour from its itinerary", () => {
  // #351 moved Waldbühne from 5 July to 15 August 2025, which made it the
  // tour's last date. The timeline kept its typed span.
  const SHIPPED = "The arena-and-stadium run behind the album, November 2023 to July 2025.";

  const tour = tours.find((t) => t.name === "I Told Them… Tour");
  const entry = timelineEras.flatMap((e) => e.entries).find((e) => e.title === "The I Told Them… Tour");

  // Read the itinerary with the platform's own date parser, NOT tourRun — a
  // check built from the function it checks would balance for any value.
  const whens = (tour?.dates ?? []).map((d) => new Date(`${d.date} 12:00:00 UTC`));
  const monthYear = (d: Date) => d.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
  const first = monthYear(new Date(Math.min(...whens.map(Number))));
  const last = monthYear(new Date(Math.max(...whens.map(Number))));
  const span = `${first} to ${last}`;

  it("the tour and the entry both exist, and every show date parses", () => {
    expect(tour?.dates?.length).toBeGreaterThan(0);
    expect(entry).toBeDefined();
    for (const w of whens) expect(Number.isNaN(w.getTime())).toBe(false);
  });

  it("the itinerary still ends at Waldbühne, 15 Aug 2025 (waldbuehne-berlin.de, #351)", () => {
    // External anchor: if this moves, re-source the date — the span follows.
    expect(last).toBe("August 2025");
    expect(tour?.dates?.find((d) => +new Date(`${d.date} 12:00:00 UTC`) === Math.max(...whens.map(Number)))?.venue).toBe("Waldbühne");
  });

  it("catches the span that shipped", () => {
    expect(SHIPPED).not.toContain(span);
  });

  it("the entry prints the itinerary's first and last month", () => {
    expect(entry?.text).toContain(`, ${span}.`);
    expect(entry?.text).not.toContain(SHIPPED);
    expect(entry?.date).toBe(`${first.slice(-4)}–${last.slice(-2)}`);
    expect(tourRun("I Told Them… Tour")).toEqual({ from: first, to: last, years: entry?.date });
  });

  it("timeline.ts types no month-to-month span of its own", () => {
    const month = "(?:January|February|March|April|May|June|July|August|September|October|November|December)";
    expect(read("app/data/timeline.ts")).not.toMatch(new RegExp(`${month} \\d{4} to ${month} \\d{4}`));
  });

  it("an unknown tour name fails the build instead of printing a blank span", () => {
    expect(() => tourRun("No Such Tour")).toThrow(/No Such Tour/);
  });
});

describe("festival notes that say 'only … that year' hold against the page's own lists", () => {
  // /records/tours/festivals said SummerJam 2024 was "his only German festival
  // date that year", while the same page lists Lollapalooza Berlin (7–8 Sep,
  // headlined) and Superbloom, Munich (8 Sep, played).
  const SHIPPED = "Headlined the 37th edition (7 July) — his only German festival date that year.";

  const country = (f: Festival) => f.location.split(",").at(-1)!.trim();
  const contradicted = (headlined: Festival[]) => {
    const all = [...headlined, ...otherShows];
    return headlined
      .filter((f) => /\bonly\b[^.]*\bthat year\b/i.test(f.note))
      .flatMap((f) =>
        all
          .filter((g) => g !== f && g.year === f.year && country(g) === country(f))
          .map((g) => `${f.name} ${f.year} says only, but ${g.name} (${g.location}) is the same year`),
      );
  };

  it("catches the note that shipped", () => {
    const summerJam = festivals.find((f) => f.name === "SummerJam Festival" && f.year === "2024");
    expect(summerJam).toBeDefined();
    const asShipped = festivals.map((f) => (f === summerJam ? { ...f, note: SHIPPED } : f));
    const hits = contradicted(asShipped);
    expect(hits.some((h) => h.includes("Superbloom Festival"))).toBe(true);
    expect(hits.some((h) => h.includes("Lollapalooza Berlin"))).toBe(true);
  });

  it("no festival note claims an 'only' the lists contradict", () => {
    expect(contradicted(festivals)).toEqual([]);
    expect(read("app/data/tours.ts")).not.toContain(SHIPPED);
  });
});
