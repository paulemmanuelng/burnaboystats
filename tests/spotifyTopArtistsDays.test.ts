import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  statBoxes,
  HIGHLIGHT,
  SPOTIFY_TOP_ARTISTS_DAILY,
  SPOTIFY_TOP_ARTISTS_CHART_DAY,
  topArtistsArchiveDay,
  spotifyTopArtistsDays,
  SPOTIFY_TOP_ARTISTS_WEEKLY_PEAK,
  spotifyWeekOf,
} from "../app/data/africasBiggest";
import { africaBoards } from "../app/lib/africaBoards";
import { updates } from "../app/data/updates";
import { BIGGEST_LEFT_OUT, BIGGEST_MEASURED_IDS } from "../app/records/africas-biggest/page";

/**
 * "Most days on Spotify's Global Daily Top Artists chart", added 7 Oct 2026.
 *
 * One dated reading (SPOTIFY_TOP_ARTISTS_DAILY) feeds the board's rows, note
 * and source. This file pins that reading to the verified table, pins the
 * strings derived from it, holds the "most" claim to the field, and anchors the
 * reading against figures typed independently of it: the August feed entries
 * (351 and 352 days) and the 7 Oct entry (400 days) must all reconcile with
 * 402 total days and a 139-day run on the chart dated 6 Oct 2026.
 */

const TA = SPOTIFY_TOP_ARTISTS_DAILY;
const box = statBoxes.find((b) => b.id === "spotify-top-artists-days")!;
const weekly = statBoxes.find((b) => b.id === "spotify-top-artists-peak")!;

describe("the 7 Oct 2026 reading", () => {
  it("pins Burna Boy's figures on the chart dated 6 Oct 2026", () => {
    expect(TA).toMatchObject({
      source: "charts.spotify.com Daily Top Artists: Global",
      chartSize: 200,
      archiveStart: "2021-10-21",
      chartDate: "2026-10-06",
      readOn: "2026-10-07",
      totalDays: 402,
      streak: 139,
      rank: 172,
      peak: 40,
      peakDate: "2022-07-08",
      firstEntry: "2022-07-08",
      datesRead: 552,
      maxGap: 3,
    });
    // Derived, not typed: 21 Oct 2021 is day 1 of the archive.
    expect(SPOTIFY_TOP_ARTISTS_CHART_DAY).toBe(1812);
    expect(topArtistsArchiveDay(TA.archiveStart)).toBe(1);
  });

  it("holds the verified African field, row for row", () => {
    expect(spotifyTopArtistsDays.map((r) => [r.name, r.flag, r.days, r.lastOn, r.lastRank, r.peak, r.peakOn])).toEqual([
      ["Burna Boy", "🇳🇬", 402, "2026-10-06", 172, 40, "2022-07-08"],
      ["Rema", "🇳🇬", 328, "2024-07-18", 195, 110, "2023-04-29"],
      ["Tems", "🇳🇬", 189, "2026-06-30", 180, 100, "2026-02-07"],
      ["Tyla", "🇿🇦", 126, "2026-02-02", 189, 106, "2025-12-31"],
      ["CKay", "🇳🇬", 115, "2022-02-13", 198, 53, "2021-10-23"],
      ["Asake", "🇳🇬", 65, "2026-08-04", 200, 28, "2026-05-01"],
      ["Ayra Starr", "🇳🇬", 60, "2024-06-27", 197, 124, "2024-05-31"],
      ["Wizkid", "🇳🇬", 15, "2026-01-27", 191, 33, "2024-11-22"],
      ["Davido", "🇳🇬", 13, "2026-08-02", 183, 34, "2025-04-18"],
      ["Seyi Vibez", "🇳🇬", 4, "2026-09-21", 182, 76, "2026-09-18"],
      ["Omah Lay", "🇳🇬", 3, "2026-04-05", 175, 139, "2026-04-03"],
    ]);
    expect([...TA.notFound]).toEqual(["Fireboy DML", "Black Sherif"]);
    expect(TA.notAfrican.map((r) => [r.name, r.nationality, r.days])).toEqual([
      ["Dave", "British", 389],
      ["GIMS", "French", 312],
      ["Stromae", "Belgian", 32],
      ["Damso", "Belgian", 11],
    ]);
  });

  it("is internally possible: no total outruns the archive, no position outruns the chart", () => {
    for (const r of spotifyTopArtistsDays) {
      expect(r.days, r.name).toBeLessThanOrEqual(topArtistsArchiveDay(r.lastOn));
      expect(r.lastRank, r.name).toBeLessThanOrEqual(TA.chartSize);
      expect(r.peak, r.name).toBeLessThanOrEqual(r.lastRank);
      expect(r.peakOn <= r.lastOn, r.name).toBe(true);
      expect(r.peakOn >= TA.archiveStart, r.name).toBe(true);
    }
    // His run sits inside his total and inside the time since his first day.
    expect(TA.streak).toBeLessThanOrEqual(TA.totalDays);
    expect(TA.totalDays).toBeLessThanOrEqual(topArtistsArchiveDay(TA.chartDate) - topArtistsArchiveDay(TA.firstEntry) + 1);
    expect(TA.datesRead).toBeLessThan(SPOTIFY_TOP_ARTISTS_CHART_DAY);
  });
});

describe("the most-days claim", () => {
  it("Burna Boy's total exceeds every other listed African artist's", () => {
    const others = spotifyTopArtistsDays.filter((r) => r.name !== HIGHLIGHT);
    expect(others.length).toBe(TA.field.length);
    for (const r of others) expect(TA.totalDays, r.name).toBeGreaterThan(r.days);
    expect(spotifyTopArtistsDays[0].name).toBe(HIGHLIGHT);
  });

  it("counts African artists by nationality: the excluded acts are in no row", () => {
    const rows = spotifyTopArtistsDays.map((r) => r.name);
    for (const r of TA.notAfrican) expect(rows, r.name).not.toContain(r.name);
    for (const name of TA.notFound) expect(rows, name).not.toContain(name);
    for (const r of spotifyTopArtistsDays) expect(["🇳🇬", "🇿🇦"], r.name).toContain(r.flag);
  });

  it("the board, the phone and the badge all lead with him", () => {
    expect(box.entries![0].name).toBe(HIGHLIGHT);
    const phone = africaBoards.find((b) => b.id === box.id)!;
    expect(phone.leads).toBe(true);
    expect(phone.badge).toBe("Leads");
    expect(phone.rows.map((r) => [r.name, r.value])).toEqual(box.entries!.map((e) => [e.name, e.value]));
  });
});

describe("the board's printed strings, all derived from the reading", () => {
  it("prints the top five with their totals and best placings", () => {
    expect(box.title).toBe("Most days on Spotify's Global Daily Top Artists chart");
    expect(box.meta).toBe("Spotify Daily Top Artists Global · African artists · total days");
    expect(box.entries).toEqual([
      { name: "Burna Boy", sub: "🇳🇬 Nigeria · best No. 40", value: "402 days" },
      { name: "Rema", sub: "🇳🇬 Nigeria · best No. 110", value: "328 days" },
      { name: "Tems", sub: "🇳🇬 Nigeria · best No. 100", value: "189 days" },
      { name: "Tyla", sub: "🇿🇦 South Africa · best No. 106", value: "126 days" },
      { name: "CKay", sub: "🇳🇬 Nigeria · best No. 53", value: "115 days" },
    ]);
  });

  it("the note says what the number counts, and gives the run separately", () => {
    expect(box.note).toBe(
      "Burna Boy has spent more days on Spotify's Global Daily Top Artists chart than any other African artist: 402 in all, counted across every daily chart since Spotify's archive of it began on 21 October 2021. That is a total, not one unbroken run. " +
        "Rema is next on 328, 74 days behind, and was last on the chart on 18 July 2024. " +
        "On the chart dated 6 October 2026 Burna Boy was No. 172, on a current run of 139 straight days, and the only African artist on it. " +
        "His best placing is No. 40, on 8 July 2022, his first day on the chart.",
    );
  });

  it("the source names Spotify Charts, the read, the method and who is left out", () => {
    const src = box.source;
    expect(src.startsWith("Total days on Spotify's Daily Top Artists: Global chart (the top 200 artists each day)")).toBe(true);
    expect(src).toContain("from the chart's own data on Spotify Charts (charts.spotify.com)");
    expect(src).toContain("read 7 October 2026 as of the chart dated 6 October 2026, day 1,812 of an archive that begins on 21 October 2021");
    expect(src).toContain("Last on the chart: Rema 18 July 2024, Tems 30 June 2026, Tyla 2 February 2026 and CKay 13 February 2022.");
    expect(src).toContain("The ranking continues Asake (65), Ayra Starr (60), Wizkid (15), Davido (13), Seyi Vibez (4) and Omah Lay (3).");
    expect(src).toContain("Dave (British, 389 days), GIMS (French, 312 days), Stromae (Belgian, 32 days) and Damso (Belgian, 11 days)");
    expect(src).toContain("Fireboy DML and Black Sherif were on none of the dates read.");
    expect(src).toContain("552 of the 1,812 chart dates were read");
    expect(src).toContain("no unread stretch is longer than three days");
    expect(src).toContain("CKay was already on the archive's first chart, so CKay's count starts there, on 21 October 2021.");
  });

  it("types none of the reading's figures outside the two constants", () => {
    const file = readFileSync("app/data/africasBiggest.ts", "utf8");
    /** The file with one `export const NAME = { … } as const;` block cut out. */
    const without = (src: string, name: string) => {
      const start = src.indexOf(`export const ${name} = {`);
      const end = src.indexOf("} as const;", start);
      expect(start, name).toBeGreaterThan(0);
      return src.slice(0, start) + src.slice(end);
    };
    const code = without(without(file, "SPOTIFY_TOP_ARTISTS_DAILY"), "SPOTIFY_TOP_ARTISTS_WEEKLY_PEAK")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "");
    const typed = (src: string, figures: string[]) =>
      figures.filter((f) => new RegExp(`(?<![\\d,.])${f}(?![\\d,])`).test(src));
    expect(typed(code, ["402", "139", "172", "328", "552", "1,812", "1812"])).toEqual([]);
    expect(typed(code, ["64"])).toEqual([]);
    // Negative control: the weekly board's note as it shipped (origin/main,
    // 7 Oct 2026) typed its peak into the prose.
    const shipped =
      'note: "Burna Boy hit a new career peak of No. 64 on Spotify\'s Global Weekly Top Artists chart in the week of 17–23 July 2026, on the back of the “Dai Dai” run.';
    expect(typed(shipped, ["64"])).toEqual(["64"]);
  });
});

describe("the board never calls the total a run", () => {
  /** Calling the all-time total a run: "the longest run", "a 402-day run". */
  const TOTAL_AS_RUN = /\blongest run\b|\b\d{3}[- ]day run\b|\brun of \d{3} days\b/i;

  it("the board's note and source never do", () => {
    expect(box.note).not.toMatch(TOTAL_AS_RUN);
    expect(box.source).not.toMatch(TOTAL_AS_RUN);
    const entry = updates.find((u) => u.date === "2026-10-07" && u.text.includes("Daily Top Artists"))!;
    expect(entry.text).not.toMatch(TOTAL_AS_RUN);
  });

  it("negative control: the feed line of 18 Aug 2026 did, as shipped", () => {
    const shipped =
      "352 days on Spotify's Global Daily Top Artists chart: Burna Boy stretches the longest run any African artist has managed there, at No. 105 on the 17 August list against a career peak of No. 40 — and still the only African name on it.";
    expect(shipped).toMatch(TOTAL_AS_RUN);
  });
});

describe("the feed's typed day counts reconcile with the reading", () => {
  // Each entry is a snapshot typed on its own day; the reading was taken on
  // 7 Oct. A day inside his current run adds one to the total, so a feed count
  // for chart date D must equal 402 - (6 Oct - D) while D is inside the run.
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const runStart = topArtistsArchiveDay(TA.chartDate) - TA.streak + 1;
  const anchors = updates.flatMap((u) => {
    const n = /^(\d{3}) days(?: in all)? on Spotify's Global Daily Top Artists chart/.exec(u.text);
    const d = /(?:on the (\d{1,2}) ([A-Z][a-z]+) list|chart dated (\d{1,2}) ([A-Z][a-z]+))/.exec(u.text);
    if (!n || !d) return [];
    const day = Number(d[1] ?? d[3]);
    const month = MONTHS.indexOf(d[2] ?? d[4]);
    const iso = new Date(Date.UTC(Number(u.date.slice(0, 4)), month, day)).toISOString().slice(0, 10);
    return [{ entry: u.date, chartDate: iso, n: Number(n[1]), text: u.text }];
  });

  it("finds the August readings and the 400-day entry", () => {
    expect(anchors.map((a) => [a.entry, a.chartDate, a.n])).toEqual([
      ["2026-10-07", "2026-10-04", 400],
      ["2026-08-18", "2026-08-17", 352],
      ["2026-08-17", "2026-08-16", 351],
    ]);
  });

  it("every one equals the reading's total less the days since", () => {
    for (const a of anchors) {
      const d = topArtistsArchiveDay(a.chartDate);
      expect(d, `${a.entry}: ${a.chartDate} is inside the run`).toBeGreaterThanOrEqual(runStart);
      expect(a.n, `${a.entry}: ${a.chartDate}`).toBe(TA.totalDays - (topArtistsArchiveDay(TA.chartDate) - d));
    }
  });

  it("the feed's career peak is the reading's", () => {
    for (const a of anchors.filter((x) => /career peak/.test(x.text))) expect(a.text).toContain(`career peak of No. ${TA.peak}`);
  });

  it("the 400-day entry names the runner-up the board names", () => {
    const entry = anchors.find((a) => a.n === 400)!;
    const [, second] = spotifyTopArtistsDays;
    expect(entry.text).toContain(`${second.name} is next on ${second.days}.`);
  });
});

describe("the weekly-peak board beside it", () => {
  it("pins his weekly peak to the chart Spotify Charts prints", () => {
    expect(SPOTIFY_TOP_ARTISTS_WEEKLY_PEAK).toEqual({ rank: 64, chartDate: "2026-07-23", readOn: "2026-10-07" });
    expect(weekly.entries!.find((e) => e.name === HIGHLIGHT)!.value).toBe("No. 64");
    expect(weekly.note).toContain("career peak of No. 64 on Spotify's Global Weekly Top Artists chart in the week of 17–23 July 2026");
  });

  it("spells a chart week as the album board does", () => {
    expect(spotifyWeekOf("2026-07-23")).toBe("17–23 July 2026");
    // The album board's own weeks (its source line), from their closing Thursdays.
    const album = statBoxes.find((b) => b.id === "spotify-global-album-peak")!.source;
    for (const [thu, week] of [
      ["2022-07-14", "8–14 July 2022"],
      ["2023-05-04", "28 April–4 May 2023"],
      ["2024-03-28", "22–28 March 2024"],
    ]) {
      expect(spotifyWeekOf(thu)).toBe(week);
      expect(album).toContain(week);
    }
  });

  it("names Spotify Charts as its source for his row", () => {
    expect(weekly.source).toContain("Burna Boy's No. 64, on the chart for the week of 17–23 July 2026, is read on Spotify Charts itself (charts.spotify.com), last on 7 October 2026");
    expect(weekly.source).not.toContain("per chart-tracking accounts");
  });

  it("negative control: the source as shipped credited trackers alone", () => {
    const shipped =
      "Best all-time peak on Spotify's Global Weekly Top Artists chart, per chart-tracking accounts. Nigerian artists only — the underlying list does not cover the rest of Africa. As of July 2026.";
    expect(shipped).toContain("per chart-tracking accounts");
    expect(shipped).not.toContain("Spotify Charts");
  });

  it("the July feed entry states the same peak and week", () => {
    const entry = updates.find((u) => u.date === "2026-07-25" && u.text.includes("Global Top Artists"))!;
    expect(entry.text).toContain(`No. ${SPOTIFY_TOP_ARTISTS_WEEKLY_PEAK.rank} for the week of 17–23 July`);
  });
});

describe("its place on the page", () => {
  it("sits right after the weekly-peak board", () => {
    const i = statBoxes.findIndex((b) => b.id === weekly.id);
    expect(statBoxes[i + 1]?.id).toBe(box.id);
  });

  it("is a one-service board the biggest-artist answer leaves out, with its reason", () => {
    expect(BIGGEST_MEASURED_IDS).not.toContain(box.id);
    expect(BIGGEST_LEFT_OUT[box.id]).toMatch(/^one service's chart/);
  });
});
