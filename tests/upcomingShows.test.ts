import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
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

describe("the phone's one-line notes", () => {
  it("every show has one, short enough for two lines at 375px", () => {
    for (const u of upcomingShows) {
      expect(u.short.trim().length, u.venue).toBeGreaterThan(0);
      expect(u.short.length, u.venue).toBeLessThanOrEqual(80);
    }
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
    expect(show.short).not.toMatch(FIRST);
  });
});

describe("the phone's announced card is on the 11px floor", () => {
  // The one-row redesign shipped its source line at 10.5px.
  const under = (css: string) =>
    [...css.matchAll(/\.(upcoming\w*)\s*\{([^}]*)\}/g)]
      .map((m) => [m[1], /font-size:\s*([\d.]+)px/.exec(m[2])?.[1]] as const)
      .filter(([, size]) => size !== undefined && Number(size) < 11)
      .map(([name]) => name);
  const css = readFileSync(join(__dirname, "../app/components/mobileTours.module.css"), "utf8");

  it("every .upcoming* rule with a px size", () => {
    expect(css).toMatch(/\.upcomingSource\s*\{/);
    expect(under(css)).toEqual([]);
  });

  it("negative control: the shipped source line", () => {
    const shipped = `.upcomingSource {\n  font-family: var(--font-mono), monospace;\n  font-size: 10.5px;\n  letter-spacing: 0.04em;\n  color: var(--text-muted);\n  margin-top: 5px;\n}`;
    expect(under(shipped)).toEqual(["upcomingSource"]);
  });
});
