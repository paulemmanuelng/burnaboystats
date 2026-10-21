import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { festivals, otherShows, concerts, upcomingShows, TOURS_EDITED_ON, FESTIVALS_VERIFIED_ON } from "../app/data/tours";
import { performedCountries } from "../app/data/performedCountries";
import { tourMapTotals } from "../app/lib/tourMapData";
import { splitAnnounced, splitPlayed } from "../app/lib/announcedShows";
import { updates } from "../app/data/updates";

/**
 * Rolling Loud India 2026 (owner, 21 Oct 2026: "burna headlining rolling loud
 * in india"). Read on permitted sources the same day: the festival's ticket
 * page on District (rollingloud.com/india redirects there), whose lineup
 * poster sets "SATURDAY, 12 DECEMBER" over BURNA BOY · METRO BOOMIN, first and
 * largest, and "SUNDAY, 13 DECEMBER" over KARAN AUJLA · SKEPTA; the venue is
 * "to be announced, Mumbai". Press of 19 Oct 2026, the day the lineup was
 * announced (Hollywood Reporter India, Time Out India, TicketNews), has him
 * and Metro Boomin closing the opening day, and his first show in India.
 *
 * It is a show to come, so it is an announced show and nothing else: it is in
 * no festival list, no count, and India is not on the performance map until
 * the night is played and moved into `festivals` by hand.
 */

const RL = upcomingShows.find((u) => u.venue === "Rolling Loud India")!;
const ENTRY = updates.find((u) => u.text.includes("Rolling Loud India"))!;

/** The record lists a played night lands in; an announced one must not. */
const recordedAs = (name: string, lists = { festivals, otherShows, concerts }) =>
  Object.entries(lists)
    .filter(([, rows]) => rows.some((r) => r.name.includes(name)))
    .map(([list]) => list);

describe("Rolling Loud India: an announced show, as the festival's own bill reads", () => {
  it("is announced for Saturday 12 Dec 2026 in Mumbai, India, with no venue or capacity printed", () => {
    expect(RL).toMatchObject({ city: "Mumbai", country: "India", when: "12 Dec 2026" });
    expect(RL.cap).toBeUndefined();
    expect(RL.note).toContain("The venue is still to be announced.");
  });

  it("the note reads the bill: top of the opening day with Metro Boomin, Karan Aujla and Skepta on the Sunday", () => {
    expect(RL.note).toMatch(/^Top of the opening day's bill, with Metro Boomin,/);
    expect(RL.note).toContain("Karan Aujla and Skepta heading the Sunday");
    expect(RL.short).toBe("Top of the Saturday bill with Metro Boomin. His first show in India.");
    expect(RL.source).toBe("Lineup announced by Rolling Loud India, 19 October 2026");
  });

  it("a festival slot reports no gross of his: `noBoxOffice`, and no on-sale link until the owner says yes", () => {
    expect(RL.noBoxOffice).toBe(true);
    expect(RL.onSale).toBeUndefined();
  });

  it("the comment over the row names the pages it was read on", () => {
    const src = readFileSync("app/data/tours.ts", "utf8");
    const at = src.indexOf('venue: "Rolling Loud India"');
    expect(at).toBeGreaterThan(0);
    const block = src.slice(src.lastIndexOf("  {\n", at), at);
    expect(block).toContain("district.in/events/rolling-loud-india-2026-buy-tickets");
    expect(block).toContain("rollingloud.com/india");
    expect(block).toContain("Hollywood Reporter India");
    expect(block).toContain("Time Out India");
  });
});

describe("an announced show counts for nothing until it is played", () => {
  it("is in no festival list, so the headlined count and the appearances do not move", () => {
    expect(recordedAs("Rolling Loud")).toEqual([]);
    // 58 on main before this row (21 Oct 2026). A literal, so a row counted
    // early moves it; it moves to 59 when the show is filed as played.
    expect(tourMapTotals.appearances).toBe(58);
  });

  it("India is not on the performance map, so the country count does not move", () => {
    expect(performedCountries.some((c) => c.name === "India")).toBe(false);
    expect(tourMapTotals.countries).toBe(performedCountries.length);
  });

  it("the deadline alarm rings for it from 13 Dec 2026, with nothing to wait for", () => {
    expect(splitAnnounced([RL], "2026-12-12").played).toEqual([]);
    const played = splitAnnounced(upcomingShows, "2026-12-13").played;
    expect(played).toContain(RL);
    expect(splitPlayed(played).noReport).toContain(RL);
  });

  it("negative control: the row filed in `festivals` as a played headline would be counted", () => {
    const asIfPlayed = [...festivals, { year: "2026", date: "2026-12-12", name: "Rolling Loud India", location: "Mumbai, India", note: RL.note }];
    expect(recordedAs("Rolling Loud", { festivals: asIfPlayed, otherShows, concerts })).toEqual(["festivals"]);
  });

  it("the tour data's stamp moved to the day of the edit; the festival lists' did not, as they are unchanged", () => {
    expect(TOURS_EDITED_ON).toBe("2026-10-21");
    expect(FESTIVALS_VERIFIED_ON).toBe("2026-10-16");
  });
});

describe("the /updates entry", () => {
  it("is one Burna Boy log line, dated the day the lineup was announced", () => {
    expect(ENTRY).toMatchObject({ date: "2026-10-19", category: "Tours", href: "/records/tours" });
    expect(ENTRY.text.length).toBeLessThanOrEqual(300);
    expect(ENTRY.text).toMatch(/^Burna Boy will headline Rolling Loud India in Mumbai on Saturday 12 December:/);
    expect(updates.filter((u) => u.text.includes("Rolling Loud India"))).toHaveLength(1);
  });

  it("says nothing the home board's NEW detector would read as a chart No. 1 beside India", () => {
    expect(ENTRY.text).not.toMatch(/\bNo\. 1s\b|\btops the\b|\btopped the\b|\benters at No\. 1\b/i);
  });
});
