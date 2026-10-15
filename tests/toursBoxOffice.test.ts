import { describe, it, expect } from "vitest";
import { tours } from "../app/data/tours";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { boardVenue, tourBoxOffice } from "../app/lib/tourBoxOffice";
import { shortGross } from "../app/lib/grossLabel";
import { standDays } from "../app/lib/multiNightRuns";
import { showDateIso } from "../app/lib/tourDeepLink";
import { nightsOf, nightsSpan } from "../app/lib/tourNights";

/**
 * J3-11 (design review 8 Oct 2026, fixes 59, 60, 73): the tour tables print
 * each night's Tickets, Gross and Board from the Highest-grossing shows board.
 * This holds the match itself — every one of his board rows lands on exactly
 * one night of its tour, a run on exactly its nights, and the ranks are the
 * board's own — so a table can never print a figure against the wrong night.
 * Every expected figure is read off the data, never typed.
 */

const HIS = "Burna Boy";
const box = tourBoxOffice(tours);
const his = revenueShows.map((s, i) => ({ s, rank: i + 1 })).filter(({ s }) => s.artist === HIS);
const hisRuns = revenueStands.filter((r) => r.artist === HIS);
/** Every (tour, ISO night) the box office holds, with what it holds. */
const entries = Object.entries(box).flatMap(([tour, nights]) => Object.entries(nights).map(([iso, n]) => ({ tour, iso, n })));

/** His board rows no tour lists a date for (Love, Damini is `partial`):
 *  pinned by name, so a new orphan fails rather than vanishing quietly. */
const DATELESS = ["La Défense Arena 2023", "American Airlines Center 2023"];

describe("every board night lands on one tour date", () => {
  it("the board is ranked by gross, so a row's place is its rank", () => {
    for (let i = 1; i < revenueShows.length; i++) expect(revenueShows[i - 1].revenue, revenueShows[i].venue).toBeGreaterThanOrEqual(revenueShows[i].revenue);
  });

  it("each of his single nights matches exactly one date of its own tour, at its rank — except the two the tour lists no date for", () => {
    const orphans: string[] = [];
    for (const { s, rank } of his) {
      const hits = entries.filter((e) => e.n.kind === "night" && e.n.rank === rank);
      if (hits.length === 0) {
        orphans.push(`${s.venue} ${s.year}`);
        continue;
      }
      expect(hits.length, `${s.venue} ${s.year}`).toBe(1);
      const [{ tour, iso, n }] = hits;
      expect(tour, s.venue).toBe(s.tour);
      expect(iso.slice(0, 4), s.venue).toBe(s.year);
      const night = tours.find((t) => t.name === tour)!.dates!.find((d) => showDateIso(d.date) === iso)!;
      expect(boardVenue(night.venue), s.venue).toBe(s.venue);
      expect(n.kind === "night" && [n.tickets, n.grossFull, n.grossShort], s.venue).toEqual([
        s.tickets,
        `$${s.revenue.toLocaleString("en-US")}`,
        shortGross(s.revenue),
      ]);
    }
    expect(orphans).toEqual(DATELESS);
  });

  it("every run covers exactly its stand's nights, carries the body's own figures, and has no rank (fix 60)", () => {
    expect(hisRuns.length).toBeGreaterThan(0);
    for (const r of hisRuns) {
      const hits = entries.filter((e) => e.n.kind === "run" && e.tour === r.tour && e.n.grossFull === `$${r.revenue.toLocaleString("en-US")}`);
      expect(hits.map((h) => h.iso), r.venue).toEqual(standDays(r.dates));
      expect(hits.length, r.venue).toBe(r.shows);
      for (const { n } of hits) {
        expect(n).toEqual({ kind: "run", tickets: r.tickets, grossFull: `$${r.revenue.toLocaleString("en-US")}`, grossShort: shortGross(r.revenue), nights: r.shows, dates: standDays(r.dates) });
        expect("rank" in n).toBe(false);
      }
    }
  });

  it("a tour with no board night has no entry, so it keeps its five columns (fix 73)", () => {
    const without = tours.filter((t) => !nightsOf(box, t.name)).map((t) => t.name);
    expect(without).toEqual(tours.filter((t) => !his.some(({ s }) => s.tour === t.name)).map((t) => t.name));
    expect(without.length).toBeGreaterThan(0);
    expect(without.length).toBeLessThan(tours.length);
  });

  it("Madison Square Garden (One Night in Space) is the board's Madison Square Garden, 2022", () => {
    const sd = tours.find((t) => t.name === "Space Drift World Tour")!;
    const msg = sd.dates!.find((d) => d.venue.startsWith("Madison Square Garden"))!;
    expect(msg.venue).toBe("Madison Square Garden (One Night in Space)");
    const n = box[sd.name][showDateIso(msg.date)!];
    const row = his.find(({ s }) => s.venue === "Madison Square Garden" && s.tour === sd.name)!;
    expect(n).toMatchObject({ kind: "night", rank: row.rank });
  });

  it("negative control: matched without the bracket strip, tours.ts's shipped MSG venue finds no board row", () => {
    // tours.ts's own venue string, against tourRevenue.ts's "Madison Square Garden".
    const shipped = "Madison Square Garden (One Night in Space)";
    expect(his.filter(({ s }) => s.venue === shipped)).toEqual([]);
    expect(his.filter(({ s }) => s.venue === boardVenue(shipped)).length).toBe(1);
  });

  it("the real data builds without a throw: no night matches two rows, every run is one block of its table", () => {
    expect(() => tourBoxOffice(tours)).not.toThrow();
  });

  it("a run whose nights are not one block of the table throws, since its figures could not span them", () => {
    const t = tours.find((x) => x.name === "I Told Them… Tour")!;
    const [first, second] = t.dates!.filter((d) => d.venue === "Scotiabank Arena");
    const other = t.dates!.find((d) => d.venue === "BMO Stadium")!;
    expect(() => tourBoxOffice([{ ...t, dates: [first, other, second] }])).toThrow(/not one block/);
    expect(() => tourBoxOffice([{ ...t, dates: [first, second, other] }])).not.toThrow();
  });
});

describe("the words and figures the tables print", () => {
  it("shortGross: two places from $1M, whole thousands below", () => {
    expect(shortGross(1224617)).toBe("$1.22M");
    expect(shortGross(2801928)).toBe("$2.80M");
    expect(shortGross(435723)).toBe("$436K");
  });

  it("standDays reads the data's own run dates", () => {
    expect(standDays("28–29 February 2024")).toEqual(["2024-02-28", "2024-02-29"]);
    expect(standDays("24–25 February 2024")).toEqual(["2024-02-24", "2024-02-25"]);
    expect(standDays("28–29 November and 1 December 2021")).toEqual(["2021-11-28", "2021-11-29", "2021-12-01"]);
    for (const r of revenueStands) expect(standDays(r.dates).length, r.venue).toBe(r.shows);
    expect(() => standDays("late February 2024")).toThrow();
  });

  it("nightsSpan: one month, across a month, across a year, each end held whole", () => {
    const nb = (s: string) => s.replace(/ /g, " ");
    expect(nb(nightsSpan(["2024-02-24", "2024-02-25"]))).toBe("Feb 24 – 25, 2024");
    expect(nb(nightsSpan(["2021-11-28", "2021-11-29", "2021-12-01"]))).toBe("Nov 28 – Dec 1, 2021");
    expect(nb(nightsSpan(["2025-12-31", "2026-01-01"]))).toBe("Dec 31, 2025 – Jan 1, 2026");
    expect(nightsSpan(["2024-02-24", "2024-02-25"])).not.toMatch(/\d, \d|Feb \d/);
  });
});
