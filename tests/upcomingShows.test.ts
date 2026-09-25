import { describe, it, expect } from "vitest";
import { upcomingShows } from "../app/data/tours";
import { updates } from "../app/data/updates";

/**
 * The announced-shows list on /records/tours: the one forward-looking list in
 * tours.ts, printed in the order it is stored.
 */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** "29 Oct 2026" → "2026-10-29"; a bare "2027" sorts after every dated show that year. */
const sortKey = (when: string): string => {
  const d = /^(\d{1,2}) ([A-Z][a-z]{2}) (\d{4})$/.exec(when);
  if (d) return `${d[3]}-${String(MONTHS.indexOf(d[2]) + 1).padStart(2, "0")}-${d[1].padStart(2, "0")}`;
  const y = /^(\d{4})$/.exec(when);
  if (y) return `${y[1]}-99`;
  throw new Error(`unreadable "when": ${when}`);
};

describe("announced shows", () => {
  it("are listed in date order", () => {
    const keys = upcomingShows.map((u) => sortKey(u.when));
    expect(keys).toEqual([...keys].sort());
  });
});

describe("Apple Music Hall, 29 October 2026", () => {
  // The lead that brought this in said he would be "The first African artist
  // to perform live at the Apple Music Hall". Not established: the opening run
  // is not over, more dates can be added, and Elton John opens the venue. What
  // stands, on applemusichall.com's own lineup of 25 Sep 2026, is that he is
  // the only African artist among the eight shows announced for it.
  const FIRST = /first African artist to (perform|play|headline)[^.]*Apple Music Hall/i;
  const show = upcomingShows.find((u) => u.venue === "Apple Music Hall")!;
  const feed = updates.filter((u) => u.text.includes("Apple Music Hall"));

  it("carries the venue's own date and capacity", () => {
    expect(show).toMatchObject({ city: "London", when: "29 Oct 2026", cap: 600 });
  });

  it("says 'the only African artist among the eight shows', never 'the first'", () => {
    // The lead's own line is what the guard refuses.
    expect("The first African artist to perform live at the Apple Music Hall").toMatch(FIRST);
    expect(feed.length).toBeGreaterThan(0);
    for (const text of [show.note, ...feed.map((u) => u.text)]) {
      expect(text).toContain("the only African artist among the eight shows announced for its opening run");
      expect(text).not.toMatch(FIRST);
    }
  });
});
