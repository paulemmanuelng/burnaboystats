import { describe, it, expect } from "vitest";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { tours } from "../app/data/tours";
import { updates } from "../app/data/updates";

/**
 * No Sign of Weakness, North America: TouringData's three X posts of 13 Nov
 * 2026, read from the owner's screenshot (burna-read.md, 13 Nov 2026).
 *   1. "$5.96M Revenue (North America) / 70,355 (60.07%) Tickets Sold / 13/13
 *      Reported Shows"
 *   2. twelve venue rows, Toronto's "(2 shows)" among them
 *   3. "$9,086,866 Revenue ($534,522 avg.) / 101,301 Tickets Sold (5,959 avg.)
 *      / $89.70 Average Price / 17/21 Reported Shows"
 * The figures below are typed from the screenshot, not read off the data, so
 * the data is held to the post.
 */
const TOUR = "No Sign of Weakness Tour";
const SRC = "TouringData, X post of 13 Nov 2026 (NO SIGN OF WEAKNESS), from the owner's screenshot";

// [venue, city, tickets, gross], as TD prints them (venue and city in the site's spelling).
const NIGHTS: [string, string, string, number][] = [
  ["Capital One Arena", "Washington, D.C.", "7,881", 792493],
  ["UBS Arena", "Elmont, NY", "9,121", 727668],
  ["Prudential Center", "Newark", "8,814", 622557],
  ["Intuit Dome", "Inglewood", "3,996", 464509],
  ["Bell Centre", "Montreal", "4,606", 384423],
  ["Climate Pledge Arena", "Seattle", "4,876", 357633],
  ["American Airlines Center", "Dallas", "3,788", 330346],
  ["Oakland Arena", "Oakland", "2,598", 317215],
  ["State Farm Arena", "Atlanta", "5,145", 290714],
  ["Toyota Center", "Houston", "3,356", 263243],
  ["Red Rocks Amphitheatre", "Morrison, CO", "2,947", 211116],
];
const TORONTO = { venue: "Scotiabank Arena", city: "Toronto", shows: 2, tickets: "13,227", revenue: 1201326, dates: "17–18 December 2025" };
// TD's 14 Mar 2026 Oceania post, already on the board.
const OCEANIA: [string, number, number][] = [
  ["Qudos Bank Arena", 1116628, 10401],
  ["Sidney Myer Music Bowl", 805250, 8237],
  ["RAC Arena", 644871, 6835],
  ["Brisbane Entertainment Centre", 556874, 5473],
];

const n = (s: string) => Number(s.replace(/,/g, ""));
const nsowRows = revenueShows.filter((r) => r.artist === "Burna Boy" && r.tour === TOUR);
const naRows = nsowRows.filter((r) => r.source === SRC);
const torontoStand = revenueStands.find((r) => r.tour === TOUR);

describe("No Sign of Weakness North America on the box-office board", () => {
  it("carries TD's eleven single nights exactly, each sourced to the 13 Nov post", () => {
    expect(naRows.map((r) => [r.venue, r.city, r.tickets, r.revenue])).toEqual(
      [...NIGHTS].sort((a, b) => b[3] - a[3]).map(([v, c, t, g]) => [v, c, t, g]),
    );
    for (const r of naRows) expect([r.year, r.flag === "🇺🇸" || r.flag === "🇨🇦"], r.venue).toEqual(["2025", true]);
  });

  it("carries Toronto as one two-night run, not a ranked night", () => {
    expect(torontoStand).toMatchObject({ ...TORONTO, artist: "Burna Boy", source: SRC });
    expect(nsowRows.some((r) => r.venue === "Scotiabank Arena")).toBe(false);
  });

  it("every row's venue and city is a No Sign of Weakness date in tours.ts", () => {
    const dates = tours.find((t) => t.name === TOUR)!.dates!;
    for (const r of [...naRows, torontoStand!])
      expect(dates.some((d) => d.venue === r.venue && d.city === r.city), r.venue).toBe(true);
  });

  it("the twelve venue rows sum to TD's North America total, 13/13", () => {
    const gross = naRows.reduce((t, r) => t + r.revenue, 0) + torontoStand!.revenue;
    const tickets = naRows.reduce((t, r) => t + n(r.tickets!), 0) + n(torontoStand!.tickets);
    expect({ gross, tickets, shows: naRows.length + torontoStand!.shows }).toEqual({ gross: 5963243, tickets: 70355, shows: 13 });
    expect((gross / 1e6).toFixed(2)).toBe("5.96");
  });

  it("with the four Oceania nights they make TD's 17/21 tour total exactly", () => {
    const oceania = OCEANIA.map(([venue, g, t]) => {
      const r = nsowRows.find((x) => x.venue === venue && x.revenue === g)!;
      expect(n(r.tickets!), venue).toBe(t);
      return r;
    });
    const rows = [...oceania, ...naRows];
    const gross = rows.reduce((t, r) => t + r.revenue, 0) + torontoStand!.revenue;
    const tickets = rows.reduce((t, r) => t + n(r.tickets!), 0) + n(torontoStand!.tickets);
    expect({ gross, tickets }).toEqual({ gross: 9086866, tickets: 101301 });
    // TD's averages and price follow from the totals over 17 shows.
    expect(Math.round(gross / 17)).toBe(534522);
    expect(Math.round(tickets / 17)).toBe(5959);
    expect((gross / tickets).toFixed(2)).toBe("89.70");
    // Every board row of the tour is one of these: nothing else is counted.
    expect(nsowRows.length).toBe(15);
  });

  it("the tour's total on /records/tours is TD's, over 17 reported shows", () => {
    const t = tours.find((x) => x.name === TOUR)!;
    expect({ gross: t.gross, tickets: t.tickets, shows: t.shows }).toEqual({ gross: "$9.09M", tickets: "101,301", shows: 17 });
    // Boston was played (Legit.ng, Notjustok, 4 Dec 2025) and stays listed,
    // though TD's 13 North American shows leave it out.
    expect(t.dates!.some((d) => d.venue === "TD Garden" && d.date === "Dec 3, 2025")).toBe(true);
  });

  it("the feed line states TD's figures plainly, under 300 characters", () => {
    const u = updates.find((x) => x.date === "2026-11-13" && x.text.startsWith("No Sign of Weakness in North America"))!;
    expect(u.text).toContain("$5.96M from 70,355 tickets");
    expect(u.text).toContain("$9,086,866 from 101,301 tickets");
    expect(u.text).toContain("17 of 21 shows reported");
    expect(u.text.length).toBeLessThan(300);
    expect(u.text).not.toMatch(/record|biggest|first|highest/i);
  });
});
