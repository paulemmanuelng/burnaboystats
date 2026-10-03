import { describe, it, expect } from "vitest";
import { revenueShows, revenueStands, type RevenueShow, type RevenueStand } from "../app/data/tourRevenue";
import {
  revenueByCountry,
  countryOfFlag,
  bestNightLine,
  standNote,
  CONTINENT_ORDER,
} from "../app/lib/revenueByCountry";

/**
 * /records/tours/revenue/countries is derived end to end from the revenue
 * board's rows. These checks hold for whatever the board carries — they are
 * written against the data, not a copy of today's figures, so they stay true
 * as shows are reported (PR #403 adds a batch while this page is built).
 */

const board = revenueByCountry();
const boardGross =
  revenueShows.reduce((n, s) => n + s.revenue, 0) + revenueStands.reduce((n, s) => n + s.revenue, 0);
const boardNights = revenueShows.length + revenueStands.reduce((n, s) => n + s.shows, 0);

const show = (o: Partial<RevenueShow>): RevenueShow => ({
  artist: "Burna Boy", venue: "V", city: "C", flag: "🇬🇧", tour: "T", year: "2024", revenue: 100, ...o,
});
const stand = (o: Partial<RevenueStand>): RevenueStand => ({
  artist: "Burna Boy", venue: "S", city: "C", flag: "🇨🇦", tour: "T", dates: "1–2 Jan", shows: 2, tickets: "1", revenue: 100, ...o,
});

describe("the totals reconcile with the board, not with themselves", () => {
  it("country totals sum to the board's grand total (single shows + stands)", () => {
    expect(board.countries.reduce((n, c) => n + c.total, 0)).toBe(boardGross);
    expect(board.grandTotal).toBe(boardGross);
  });

  it("continent totals sum to the same grand total", () => {
    expect(board.continents.reduce((n, c) => n + c.total, 0)).toBe(boardGross);
  });

  it("each country's artists sum to that country's total", () => {
    for (const c of board.countries) expect(c.artists.reduce((n, a) => n + a.total, 0)).toBe(c.total);
  });

  it("a stand counts its nights in shows", () => {
    expect(board.showCount).toBe(boardNights);
    const r = revenueByCountry([], [stand({ shows: 3 })]);
    expect(r.showCount).toBe(3);
    expect(r.countries[0].artists[0].shows).toBe(3);
  });
});

describe("every row lands in exactly one country and one continent", () => {
  it("every flag on the board resolves", () => {
    for (const s of [...revenueShows, ...revenueStands]) expect(() => countryOfFlag(s.flag)).not.toThrow();
  });

  it("one country per flag, one continent per country", () => {
    const flags = new Set([...revenueShows, ...revenueStands].map((s) => s.flag));
    expect(board.countries.map((c) => c.flag).sort()).toEqual([...flags].sort());
    for (const c of board.countries) {
      const homes = board.continents.filter((k) => k.countries.some((x) => x.flag === c.flag));
      expect(homes.map((h) => h.continent)).toEqual([c.continent]);
    }
  });

  it("an unknown flag fails loudly instead of vanishing", () => {
    // Liechtenstein: on no list the site keeps, and no row on the board.
    expect(() => countryOfFlag("🇱🇮")).toThrow(/OUTSIDE_HIS_MAP/);
    expect(() => revenueByCountry([show({ flag: "🇱🇮" })], [])).toThrow();
  });

  it("names come from the site's own lists", () => {
    expect(countryOfFlag("🇬🇧")).toEqual({ flag: "🇬🇧", name: "United Kingdom", continent: "Europe" });
    expect(countryOfFlag("🇺🇸").continent).toBe("North America");
    expect(countryOfFlag("🇯🇵")).toEqual({ flag: "🇯🇵", name: "Japan", continent: "Asia" });
  });
});

describe("leaders", () => {
  it("each country's leader holds the largest total there", () => {
    for (const c of board.countries) {
      expect(c.leader).toBe(c.artists[0]);
      for (const a of c.artists) expect(c.leader.total).toBeGreaterThanOrEqual(a.total);
    }
  });

  it("a tie on total goes to the better single night, then the name", () => {
    const r = revenueByCountry(
      [
        show({ artist: "Wizkid", revenue: 60 }), show({ artist: "Wizkid", revenue: 40 }),
        show({ artist: "Davido", revenue: 70 }), show({ artist: "Davido", revenue: 30 }),
      ],
      [],
    );
    expect(r.countries[0].leader.artist).toBe("Davido");
    const n = revenueByCountry([show({ artist: "Wizkid" }), show({ artist: "Asake" })], []);
    expect(n.countries[0].artists.map((a) => a.artist)).toEqual(["Asake", "Wizkid"]);
  });

  it("a stand counts toward the total — summing is fine for a total (ruling 1)", () => {
    const r = revenueByCountry([show({ artist: "Asake", flag: "🇨🇦", revenue: 150 })], [stand({ revenue: 200 })]);
    expect(r.countries[0].leader.artist).toBe("Burna Boy");
    expect(r.countries[0].leader.total).toBe(200);
  });

  it("the best night is a single night, never a stand", () => {
    const r = revenueByCountry([show({ flag: "🇨🇦", revenue: 50 })], [stand({ revenue: 900 })]);
    const a = r.countries[0].leader;
    expect(a.best?.revenue).toBe(50);
    expect(standNote(a)).toMatch(/2-night stand/);
    const only = revenueByCountry([], [stand({})]).countries[0].leader;
    expect(only.best).toBeNull();
    expect(bestNightLine(only)).toMatch(/reported together/);
  });

  it("hisLeads counts the countries he leads", () => {
    expect(board.hisLeads).toBe(board.countries.filter((c) => c.leader.artist === "Burna Boy").length);
  });
});

describe("continents", () => {
  it("all six are present; Africa is there with zero rather than left out (ruling 2)", () => {
    expect(board.continents.map((c) => c.continent).sort()).toEqual([...CONTINENT_ORDER].sort());
    const africa = board.continents.find((c) => c.continent === "Africa")!;
    expect(africa).toBeDefined();
    // Holds while no African venue has a reported gross; the page prints the
    // honest card for exactly this state and a real card the day one is added.
    if (!revenueShows.some((s) => countryOfFlag(s.flag).continent === "Africa")) {
      expect(africa.total).toBe(0);
      expect(africa.leader).toBeNull();
    }
  });

  it("continents with box office come first, by total", () => {
    const totals = board.continents.map((c) => c.total);
    expect(totals).toEqual([...totals].sort((a, b) => b - a));
    expect(board.continentCount).toBe(board.continents.filter((c) => c.total > 0).length);
  });

  it("countries within a continent are ordered by total", () => {
    for (const k of board.continents) {
      const t = k.countries.map((c) => c.total);
      expect(t).toEqual([...t].sort((a, b) => b - a));
    }
  });
});
