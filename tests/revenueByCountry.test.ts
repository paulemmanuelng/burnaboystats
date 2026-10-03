import { describe, it, expect } from "vitest";
import { revenueShows, revenueStands, type RevenueShow, type RevenueStand } from "../app/data/tourRevenue";
import {
  revenueByCountry,
  countryOfFlag,
  bestNightLine,
  leaderLine,
  standNote,
  summaryLine,
  usdM,
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
  artist: "Burna Boy", venue: "V", city: "C", flag: "🇬🇧", tour: "T", year: "2024", revenue: 100, source: "fixture", ...o,
});
const stand = (o: Partial<RevenueStand>): RevenueStand => ({
  artist: "Burna Boy", venue: "S", city: "C", flag: "🇨🇦", tour: "T", dates: "1–2 Jan", shows: 2, tickets: "1", revenue: 100, source: "fixture", ...o,
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

  it("a country with no chart entry still resolves, by its own name (PR #403's Manila show)", () => {
    expect(countryOfFlag("🇵🇭")).toEqual({ flag: "🇵🇭", name: "Philippines", continent: "Asia" });
    expect(countryOfFlag("🇸🇬")).toEqual({ flag: "🇸🇬", name: "Singapore", continent: "Asia" });
    expect(countryOfFlag("🇮🇪").continent).toBe("Europe");
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
    expect(standNote(a)).toBe("Total includes a 2-night run at S reported as one figure");
    const only = revenueByCountry([], [stand({})]).countries[0].leader;
    expect(only.best).toBeNull();
    expect(bestNightLine(only)).toMatch(/reported together/);
  });

  it("several stands and no single night still name every venue", () => {
    const two = revenueByCountry(
      [],
      [stand({ venue: "Scotiabank Arena", city: "Toronto" }), stand({ venue: "Centre Bell", city: "Montreal" })],
    ).countries[0].leader;
    expect(bestNightLine(two)).toBe(
      "4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal",
    );
  });

  it("the leader line carries the leader's total against the country's, never the country's alone", () => {
    for (const c of board.countries) {
      const line = leaderLine(c);
      expect(line).toContain(usdM(c.leader.total));
      if (c.artists.length > 1) expect(line).toContain(`${usdM(c.leader.total)} of ${usdM(c.total)}`);
      else expect(line).toMatch(/^· the only artist reported/);
    }
  });

  it("hisLeads counts the countries he leads", () => {
    expect(board.hisLeads).toBe(board.countries.filter((c) => c.leader.artist === "Burna Boy").length);
  });
});

describe("the summary splits single shows from stand nights", () => {
  it("counts match the board: single shows are the board's own count", () => {
    expect(board.singleShows).toBe(revenueShows.length);
    expect(board.standCount).toBe(revenueStands.length);
    expect(board.showCount).toBe(board.singleShows + revenueStands.reduce((n, s) => n + s.shows, 0));
  });

  it("reads as single shows and stands, nights in brackets", () => {
    const r = revenueByCountry([show({}), show({ flag: "🇫🇷" })], [stand({ shows: 3 })]);
    expect(summaryLine(r)).toBe(
      "2 single shows and 1 multi-night run (5 nights) in 3 countries on 2 continents",
    );
    const two = revenueByCountry([show({})], [stand({ shows: 3 }), stand({ flag: "🇬🇧" })]);
    expect(summaryLine(two)).toBe("1 single show and 2 multi-night runs (6 nights) in 2 countries on 2 continents");
    const noStands = revenueByCountry([show({})], []);
    expect(summaryLine(noStands)).toBe("1 reported show in 1 country on 1 continent");
  });
});

describe("reader-facing words follow the board's: multi-night runs, never stands", () => {
  it("no line this module prints says stand", () => {
    const one = revenueByCountry([show({ flag: "🇨🇦", revenue: 50 })], [stand({})]).countries[0].leader;
    const many = revenueByCountry([show({ flag: "🇨🇦", revenue: 50 })], [stand({}), stand({ venue: "T" })]).countries[0].leader;
    const only = revenueByCountry([], [stand({}), stand({ venue: "T" })]).countries[0].leader;
    const lines = [
      summaryLine(board),
      summaryLine(revenueByCountry([show({})], [stand({}), stand({})])),
      standNote(one)!, standNote(many)!, bestNightLine(only),
      ...board.countries.flatMap((c) => [leaderLine(c), ...c.artists.flatMap((a) => [bestNightLine(a), standNote(a) ?? ""])]),
    ];
    for (const l of lines) expect(l).not.toMatch(/\bstands?\b/i);
    expect(standNote(many)).toBe("Total includes 4 nights in 2 runs, each reported together · S, C; T, C");
  });
});

describe("continents", () => {
  it("all six are present; Africa is there with zero rather than left out (ruling 2)", () => {
    expect(board.continents.map((c) => c.continent).sort()).toEqual([...CONTINENT_ORDER].sort());
    const africa = board.continents.find((c) => c.continent === "Africa")!;
    expect(africa).toBeDefined();
    // Holds while no African venue has a reported gross; the page prints the
    // honest card for exactly this state and a real card the day one is added.
    if (![...revenueShows, ...revenueStands].some((s) => countryOfFlag(s.flag).continent === "Africa")) {
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
