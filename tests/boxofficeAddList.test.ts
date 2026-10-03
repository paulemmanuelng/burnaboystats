import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";

/**
 * The owner-sourced box-office list of 3 Oct 2026, landed exactly.
 *
 * Paul read TouringData's own X posts for every board artist and sent
 * screenshots; each batch was read enlarged and reconciled against TD's
 * running totals. The consolidated list is copied verbatim into
 * tests/fixtures/boxoffice-add-list-2026-10-03.json, so this test anchors the
 * board to that outside list rather than to tourRevenue.ts's own constants:
 * every row is on the board with exactly its gross and its headcount.
 *
 * Five rows were sent with the year marked CONFIRM. Each was dated from a
 * permitted source before it went on the board (the source is in the row's
 * comment in tourRevenue.ts); the years are pinned here.
 */

interface AddShow { artist: string; venue: string; city: string; flag: string; tour: string; year: string; tickets: string; revenue: number }
const list = JSON.parse(readFileSync("tests/fixtures/boxoffice-add-list-2026-10-03.json", "utf8")) as {
  add_shows: AddShow[];
  add_stand: { artist: string; venue: string; dates: string; shows: number; tickets: string; revenue: number; tour: string };
  set_tickets: { artist: string; venue: string; tickets: string }[];
  fix_tour_name: { artist: string; venue: string; from: string; to: string }[];
};

/** The CONFIRM rows, as dated: venue page, promoter page, press photo caption. */
const CONFIRMED: Record<string, string> = {
  "Davido|Accor Arena": "2024", // 31 Jan 2024 — Getty Images caption, concertaparis.fr
  "Asake|3Arena": "2024", // 1 Oct 2024 — Spin 1038, setlist.fm
  "Asake|YouTube Theater": "2024", // 27 Aug 2024 — youtubetheater.com, setlist.fm
  "Fireboy DML|Metro Theatre": "2023", // 2 Oct 2023 — handsometours.com
  "Fireboy DML|170 Russell": "2023", // 1 Oct 2023 — handsometours.com
};
const yearOf = (r: AddShow) => (/^\d{4}$/.test(r.year) ? r.year : CONFIRMED[`${r.artist}|${r.venue}`]);

describe("the 3 Oct 2026 TouringData list is on the board exactly", () => {
  it("the list is the one the owner sent: 36 shows, five of them to be dated", () => {
    expect(list.add_shows.length).toBe(36);
    expect(list.add_shows.filter((r) => !/^\d{4}$/.test(r.year)).map((r) => `${r.artist}|${r.venue}`).sort()).toEqual(Object.keys(CONFIRMED).sort());
  });

  it.each(list.add_shows.map((r) => [`${r.artist}, ${r.venue}`, r] as const))("%s", (_n, r) => {
    const rows = revenueShows.filter((s) => s.artist === r.artist && s.venue === r.venue && s.year === yearOf(r));
    expect(rows.length, "exactly one row on the board").toBe(1);
    expect([rows[0].revenue, rows[0].tickets, rows[0].tour, rows[0].flag]).toEqual([r.revenue, r.tickets, r.tour, r.flag]);
  });

  type Row = { artist: string; venue: string; tour: string; tickets?: string };
  /** What the list corrects on rows already on the board, as problems found. */
  const corrections = (board: Row[]) => [
    ...list.set_tickets.flatMap((t) => {
      const got = board.filter((s) => s.artist === t.artist && s.venue === t.venue).map((s) => s.tickets);
      return got.length === 1 && got[0] === t.tickets ? [] : [`${t.artist}, ${t.venue}: tickets ${got.join("/") || "missing"}`];
    }),
    ...list.fix_tour_name.flatMap((f) => {
      const got = board.filter((s) => s.artist === f.artist && s.venue === f.venue).map((s) => s.tour);
      return got.length === 1 && got[0] === f.to ? [] : [`${f.artist}, ${f.venue}: tour ${got.join("/") || "missing"}`];
    }),
  ];

  it("the headcounts the list supplies and the tour name it corrects are on their rows", () => {
    expect(corrections(revenueShows)).toEqual([]);
  });

  it("negative control: the rows as they shipped before this change fail it", () => {
    // Verbatim from tourRevenue.ts at 8bba895f.
    const shipped: Row[] = [
      { artist: "Fally Ipupa", venue: "La Défense Arena", tour: "Live In Concert", tickets: "39,048" },
      { artist: "Rema", venue: "Madison Square Garden", tour: "Heis Tour" },
      { artist: "Davido", venue: "Merriweather Post Pavilion", tour: "5ive Alive Tour" },
      { artist: "Tems", venue: "Radio City Music Hall", tour: "Born in the Wild Tour" },
    ];
    expect(corrections(shipped)).toEqual([
      "Davido, Merriweather Post Pavilion: tickets missing",
      "Tems, Radio City Music Hall: tickets missing",
      "Rema, Madison Square Garden: tickets missing",
      "Fally Ipupa, La Défense Arena: tour Live In Concert",
    ]);
  });

  it("Rema's 2025 tour is spelt one way on every row (HEIS Tour, as the list prints it)", () => {
    // The list's two new Rema rows say "HEIS Tour"; the MSG row shipped as
    // "Heis Tour" and was respelt to match. The control above carries the old
    // spelling but corrections() only checks the list's own fix_tour_name rows.
    const tours = new Set(revenueShows.filter((s) => s.artist === "Rema" && s.year === "2025").map((s) => s.tour));
    expect([...tours]).toEqual(["HEIS Tour"]);
  });

  it("the stand is carried at the list's figures", () => {
    const a = list.add_stand;
    const st = revenueStands.filter((s) => s.artist === a.artist && s.venue === a.venue);
    expect(st.map((s) => [s.revenue, s.tickets, s.shows, s.dates, s.tour])).toEqual([[a.revenue, a.tickets, a.shows, a.dates, a.tour]]);
  });
});
