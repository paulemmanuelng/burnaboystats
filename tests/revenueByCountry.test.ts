import { describe, it, expect } from "vitest";
import { revenueShows, revenueStands, type RevenueShow, type RevenueStand } from "../app/data/tourRevenue";
import {
  revenueByCountry,
  countryOfFlag,
  heroFigures,
  ladderRows,
  leaderLine,
  leadsOnTotal,
  runParts,
  runsNote,
  summaryLine,
  usdFull,
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
    expect(runsNote(a)).toBe("Total includes a 2-night run, reported as one figure.");
    const only = revenueByCountry([], [stand({})]).countries[0].leader;
    expect(only.best).toBeNull();
    // A run-only artist prints the runs themselves in the best-night slot;
    // there is no note to add.
    expect(runsNote(only)).toBeNull();
  });

  it("a run prints its marker, gross, place, and the board's run meta: tour · dates · tickets over nights", () => {
    const st = revenueByCountry([], [stand({ venue: "Scotiabank Arena", city: "Toronto", tour: "I Told Them… Tour", dates: "24–25 February 2024", tickets: "29,579", revenue: 2801928 })])
      .countries[0].leader.stands[0];
    expect(runParts(st, usdFull)).toEqual({
      marker: "Run · 2 nights",
      gross: "$2,801,928",
      place: "Scotiabank Arena, Toronto",
      meta: "I Told Them… Tour · 24–25 February 2024 · 29,579 tickets over 2 nights",
    });
    expect(runParts(st).gross).toBe("$2.80M");
  });

  it("several runs beside single nights: one note, nights and runs counted", () => {
    const two = revenueByCountry(
      [show({ flag: "🇨🇦", revenue: 50 })],
      [stand({ venue: "Scotiabank Arena", city: "Toronto" }), stand({ venue: "Centre Bell", city: "Montreal" })],
    ).countries[0].leader;
    expect(runsNote(two)).toBe("Total includes 4 nights in 2 runs, each reported as one figure.");
  });

  it("negative control: the note as the page shipped it named the venues the runs now print themselves", () => {
    // The live desktop row for Burna Boy in Canada, a7530590, verbatim.
    const shipped = "Total includes 4 nights in 2 runs, each reported together · Scotiabank Arena, Toronto; Centre Bell, Montreal";
    const canada = revenueByCountry().countries.find((c) => c.name === "Canada")!.leader;
    expect(runsNote(canada)).not.toBe(shipped);
    expect(runsNote(canada)).not.toMatch(/Scotiabank|Centre Bell/);
  });

  it("the leader line carries the leader's total against the country's, never the country's alone", () => {
    for (const c of board.countries)
      for (const fmt of [usdM, usdFull]) {
        const line = leaderLine(c, fmt);
        expect(line).toContain(fmt(c.leader.total));
        if (c.artists.length > 1) expect(line).toContain(`${fmt(c.leader.total)} of ${fmt(c.total)}`);
        else expect(line).toMatch(/^· the only artist reported/);
      }
  });

  it("the leader line prints the leader's share of the country and its nights; the phone drops “reported”", () => {
    const us = board.countries.find((c) => c.name === "United States")!;
    const share = `${((100 * us.leader.total) / us.total).toFixed(1)}%`;
    expect(leaderLine(us, usdFull)).toBe(`leads · ${usdFull(us.leader.total)} of ${usdFull(us.total)} · ${share} · ${us.shows} nights reported`);
    expect(leaderLine(us, usdM, { reported: false })).toBe(`leads · ${usdM(us.leader.total)} of ${usdM(us.total)} · ${share} · ${us.shows} nights`);
    // One night: singular (review fix 7, "1 nights" on the canvas).
    const one = revenueByCountry([show({ flag: "🇯🇵", artist: "Tyla" })], []).countries[0];
    expect(leaderLine(one, usdM, { reported: false })).toBe("· the only artist reported · $0K · 1 night");
    expect(leaderLine(one)).not.toMatch(/1 nights/);
  });

  it("“Leads on total”: named when the leader does not hold the biggest single night there (fix 7)", () => {
    const canada = board.countries.find((c) => c.name === "Canada")!;
    const top = canada.artists.filter((a) => a.best).sort((a, b) => b.best!.revenue - a.best!.revenue)[0];
    if (top.artist !== canada.leader.artist) {
      const desk = leadsOnTotal(canada, usdFull, "desk")!;
      const phone = leadsOnTotal(canada, usdM, "phone")!;
      expect(desk).toContain(`${top.artist} has the biggest single night here, ${usdFull(top.best!.revenue)} at ${top.best!.venue}.`);
      expect(phone).toContain(`of ${canada.leader.artist}’s ${usdM(canada.leader.total)}.`);
      expect(desk).toContain(`of ${canada.leader.artist}’s total.`);
      // Negative control: the canvas's phone line said "his" (GXCountriesPhone:193).
      expect(phone).not.toMatch(/\bhis\b/);
    }
    // A leader with the biggest night too: no callout.
    const r = revenueByCountry([show({ revenue: 90 }), show({ artist: "Wizkid", revenue: 10 })], []).countries[0];
    expect(leadsOnTotal(r, usdM, "phone")).toBeNull();
    // One run: singular grammar.
    const one = revenueByCountry([show({ flag: "🇨🇦", artist: "Asake", revenue: 150 })], [stand({ revenue: 200 })]).countries[0];
    expect(leadsOnTotal(one, usdFull, "desk")).toBe("1 run makes up $200 (100.0%) of Burna Boy’s total. Asake has the biggest single night here, $150 at V.");
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
    const lines = [
      summaryLine(board),
      summaryLine(revenueByCountry([show({})], [stand({}), stand({})])),
      runsNote(one)!, runsNote(many)!,
      ...board.countries.flatMap((c) => [
        leaderLine(c), leaderLine(c, usdFull), leadsOnTotal(c, usdFull, "desk") ?? "", leadsOnTotal(c, usdM, "phone") ?? "",
        ...c.artists.flatMap((a) => [runsNote(a) ?? "", ...a.stands.flatMap((st) => Object.values(runParts(st)))]),
      ]),
    ];
    for (const l of lines) expect(l).not.toMatch(/\bstands?\b/i);
  });
});

describe("the hero and the ladder (Claude Design round 1, Job 1)", () => {
  const h = heroFigures(board);
  it("his total and share are summed from his rows in every country; the others are the rest", () => {
    const his = [...revenueShows, ...revenueStands].filter((r) => r.artist === "Burna Boy").reduce((n, r) => n + r.revenue, 0);
    expect(h.hisTotal).toBe(his);
    expect(h.hisShare).toBeCloseTo(his / boardGross, 12);
    expect(h.othersTotal).toBe(boardGross - his);
    expect(h.otherArtists).toBe(new Set([...revenueShows, ...revenueStands].map((r) => r.artist).filter((a) => a !== "Burna Boy")).size);
    expect(h.continentsAll).toBe(CONTINENT_ORDER.length);
  });

  it("the ladder: every country, by total; linear against the largest; his part of each", () => {
    const rows = ladderRows(board);
    expect(rows.map((r) => r.name)).toEqual(board.countries.map((c) => c.name));
    expect(rows[0].w).toBe(1);
    for (const [i, r] of rows.entries()) {
      const c = board.countries[i];
      expect(r.w).toBeCloseTo(c.total / board.countries[0].total, 12);
      expect(r.his).toBeCloseTo((c.artists.find((a) => a.his)?.total ?? 0) / c.total, 12);
      expect(r.leader).toBe(c.leader.artist);
      expect(r.rank).toBe(String(i + 1).padStart(2, "0"));
    }
    // A country he never played reads 0, never NaN: Tyla's Japan.
    expect(rows.find((r) => r.name === "Japan")?.his).toBe(0);
  });

  it("negative control: bo-derive.js's money form printed $0.39M; the live rule prints thousands", () => {
    // GXCountriesDesk / bo-derive.js:10 — "$0.39M" for Singapore (review fix 4).
    const singapore = board.countries.find((c) => c.name === "Singapore")!;
    expect(`$${(singapore.total / 1e6).toFixed(2)}M`).toBe("$0.39M");
    expect(usdM(singapore.total)).toBe("$385K");
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
