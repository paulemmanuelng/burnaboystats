import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", async () => {
  const { createElement } = await import("react");
  return {
    default: ({ href, children, ...rest }: { href: string; children?: unknown }) =>
      createElement("a", { href, ...rest }, children as never),
  };
});

import * as dd from "../app/data/daiDai";
import { weeksOnChart, weeksAtPeak, BURNA_LAST_CHART_SWEEP } from "../app/data/charts";
import {
  statBoxes,
  spotifyLeadStreams,
  streamsShort,
  SPOTIFY_LEAD_STREAMS_READ_ON,
  STREAMS_200M_READ_ON,
  SPOTIFY_TOP_ARTISTS_DAILY,
} from "../app/data/africasBiggest";
import { spotifyFollowersRead, SPOTIFY_FOLLOWERS_READ_ON } from "../app/data/spotify";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import { pageFaqs } from "../app/records/africas-biggest/page";
import { allFirsts } from "../app/data/firsts";

/**
 * Paul, 4 Nov 2026: refresh the stale data. The hand-kept readings the stats
 * bot does not refresh, re-read on 4 Nov 2026 at the sources they were first
 * read from. Every figure below is copied from the three sourcing docs of that
 * day, which record where each was read:
 *   docs/sourcing/DAI-DAI-READINGS-2026-11-04.md
 *   docs/sourcing/BOARD-READINGS-2026-11-04.md
 *   docs/sourcing/spotify-lead-streams-2026-11-04.md
 * Each block ends on a negative control: the line origin/main (35fe0849)
 * served that morning, which the same check refuses.
 */

const text = (html: string) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ");
const flat = (path: string) => readFileSync(path, "utf8").replace(/\*\*/g, "").replace(/\s+/g, " ");
const EN = text(renderToStaticMarkup(<DaiDaiPage />));
const ES = text(renderToStaticMarkup(<DaiDaiPageES />));
const DAI = flat("docs/sourcing/DAI-DAI-READINGS-2026-11-04.md");
const BOARDS = flat("docs/sourcing/BOARD-READINGS-2026-11-04.md");
const LEAD = flat("docs/sourcing/spotify-lead-streams-2026-11-04.md");
const day = (iso: string) => Date.parse(`${iso}T00:00:00Z`) / 86_400_000;

describe("Dai Dai, Spotify Daily Top Songs Global: the streak re-read on the 2 Nov chart", () => {
  // Spotify's own row on the chart dated 2 Nov 2026, and its expanded panel.
  const READ = { date: "2026-11-02", pos: 59, prev: 50, streak: 165, total: 166, streams: "1,596,294" };
  // The previous body read: the 19 Oct chart, Streak 151, Total 152.
  const BEFORE = { date: "2026-10-19", streak: 151, total: 152 };
  // kworb's day-by-day history of the song: the thirteen charts between them, then the 2 Nov one.
  const BETWEEN = [51, 44, 46, 38, 29, 34, 47, 49, 54, 55, 53, 56, 50, 59];
  const enRow = (streak: number, total: number, date: string) =>
    `${streak} straight days on the chart and ${total} in all, counted through the chart dated ${date}, which prints both figures in its own columns (Spotify Charts)`;
  const esRow = (streak: number, total: number, date: string) =>
    `${streak} seguidos en la lista y ${total} en total, contados hasta la lista del ${date}, que imprime ambas cifras en sus propias columnas (Spotify Charts)`;

  it("the body read is Spotify's own 2 Nov row, and the sourcing doc records it", () => {
    expect(dd.DAI_DAI_SPOTIFY_BODY_READ).toMatchObject({ date: READ.date, streak: READ.streak, totalDaysOnChart: READ.total, peak: 1, debutPosition: 114 });
    expect(dd.DAI_DAI_SPOTIFY_CONFIRMED_THROUGH).toBe(READ.date);
    expect(dd.daiDaiSpotifyStraightDays).toBe(READ.streak);
    expect(dd.daiDaiSpotifyDaysOnChart).toBe(READ.total);
    for (const s of [
      `Streak ${READ.streak}`,
      `Total days on chart ${READ.total}`,
      `No. ${READ.pos}, Prev ${READ.prev}, Peak 1`,
      READ.streams,
      "regional-global-daily/2026-11-02",
      '"Global - 2026/11/02"',
    ]) {
      expect(DAI, s).toContain(s);
    }
  });

  it("the streak moved by exactly the charts since, every one of them read", () => {
    expect(BETWEEN).toHaveLength(day(READ.date) - day(BEFORE.date));
    expect(BEFORE.streak + BETWEEN.length).toBe(READ.streak);
    expect(BEFORE.total + BETWEEN.length).toBe(READ.total);
    expect(BETWEEN.at(-1)).toBe(READ.pos);
    const dated = ["20 Oct", "21 Oct", "22 Oct", "23 Oct", "24 Oct", "25 Oct", "26 Oct", "27 Oct", "28 Oct", "29 Oct", "30 Oct", "31 Oct", "1 Nov"];
    expect(DAI).toContain(dated.map((d, i) => `${d} ${BETWEEN[i]}`).join(" · "));
  });

  it("the No. 1 and Top 10 totals are confirmed through the same chart, unchanged", () => {
    expect(BETWEEN.every((p) => p > 10)).toBe(true);
    expect(dd.DAI_DAI_SPOTIFY_NO1_DAYS).toBe(37);
    expect(dd.DAI_DAI_SPOTIFY_TOP10_DAYS).toBe(85);
    expect(dd.DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF).toBe(READ.date);
    expect(dd.DAI_DAI_SPOTIFY_TOP10_DAYS_AS_OF).toBe(READ.date);
    expect(DAI).toContain("Days 166, T10 85, Pk 1 (x37)");
  });

  it("both editions print the 2 Nov figures under the 2 Nov date", () => {
    expect(EN).toContain(enRow(READ.streak, READ.total, "2 November 2026"));
    expect(ES).toContain(esRow(READ.streak, READ.total, "2 de noviembre de 2026"));
    expect(EN).toContain("confirmed day by day through the chart dated 2 November 2026 — with 85 days inside the global Top 10 in all");
    expect(ES).toContain("confirmado día a día hasta la lista del 2 de noviembre de 2026 — con 85 días dentro del top 10 mundial en total");
  });

  it("negative control: the rows origin/main served on 4 Nov 2026 fail", () => {
    const mainEn = enRow(151, 152, "19 October 2026");
    const mainEs = esRow(151, 152, "19 de octubre de 2026");
    expect(mainEn).not.toBe(enRow(READ.streak, READ.total, "2 November 2026"));
    expect(EN).not.toContain(mainEn);
    expect(ES).not.toContain(mainEs);
  });
});

describe("Dai Dai, Spotify Weekly Top Songs Global: the stay re-read on the 29 Oct chart", () => {
  // Spotify's own row, "Top Songs Global · October 23 - 29, 2026": Streak 23,
  // First entry date May 28, 2026, Total weeks on chart 23.
  const READ = { first: "2026-05-28", chart: "2026-10-29", weeks: 23 };
  const enLine = (weeks: number, date: string) => `in a ${weeks}-week stay counted through the chart dated ${date}, peaking at 40.28M streams in a single week`;
  const esLine = (weeks: number, date: string) => `en una estancia de ${weeks} semanas contada hasta la lista del ${date}, con un pico de 40,28 millones de reproducciones en una sola semana`;

  it("the stay is Spotify's own row, one chart a week from the first entry, none missed", () => {
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_FIRST_CHART).toBe(READ.first);
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_AS_OF).toBe(READ.chart);
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_WEEKS_ON_CHART).toBe(READ.weeks);
    expect((day(READ.chart) - day(READ.first)) / 7 + 1).toBe(READ.weeks);
    for (const s of ["October 23 - 29, 2026", "Streak 23", "Total weeks on chart 23", "First entry date May 28, 2026", "Wks 23, Pk 1 (x6)", "PkStreams 40,283,139"]) expect(DAI, s).toContain(s);
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS).toBe(6);
  });

  it("both editions print the stay and the chart from the constants", () => {
    expect(EN).toContain(enLine(READ.weeks, "29 October 2026"));
    expect(ES).toContain(esLine(READ.weeks, "29 de octubre de 2026"));
  });

  it("negative control: the rows origin/main served on 4 Nov 2026 fail", () => {
    expect(EN).not.toContain(enLine(21, "15 October 2026"));
    expect(ES).not.toContain(esLine(21, "15 de octubre de 2026"));
  });
});

describe("Dai Dai, UK Official Singles Chart: the stay re-read on the chart of 5 November", () => {
  // The OCC's own song page, Official Singles Chart block, read 4 Nov 2026:
  // 22 weeks, 11/06/2026 to 05/11/2026; No. 45 on the chart of 30 Oct-5 Nov.
  const READ = { first: "2026-06-11", chart: "2026-11-05", pos: 45, weeks: 22, peakWeeks: 5 };
  const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const enStay = (w: number, d: string, pos: number) => `in a ${w}-week stay counted through the chart of ${d} (No. ${pos})`;
  const esStay = (w: number, d: string, pos: number) => `en una estancia de ${w} semanas contada hasta la lista del ${d} (N.º ${pos})`;

  it("charts.ts and the constants hold the OCC run: 22 weeks, 11 Jun to 5 Nov, No. 45", () => {
    expect(weeksOnChart("Dai Dai", "UK")).toBe(READ.weeks);
    expect(weeksAtPeak("Dai Dai", "UK")).toBe(READ.peakWeeks);
    expect(dd.DAI_DAI_UK_FIRST_CHART).toBe(READ.first);
    expect(dd.DAI_DAI_UK_LATEST_CHART).toBe(READ.chart);
    expect(dd.DAI_DAI_UK_LATEST_POS).toBe(READ.pos);
    expect((day(READ.chart) - day(READ.first)) / 7 + 1).toBe(READ.weeks);
    // The doc lists every week of the run, the first and the last as read.
    const weeks = [...DAI.matchAll(new RegExp(`- (\\d{1,2}) (${EN_MONTHS.join("|")}): No\\. (\\d+)`, "g"))];
    expect(weeks).toHaveLength(READ.weeks);
    expect(weeks[0][0]).toBe("- 11 June: No. 87");
    expect(weeks.at(-1)![0]).toBe(`- 5 November: No. ${READ.pos}`);
    expect(weeks.filter((w) => w[3] === "2")).toHaveLength(READ.peakWeeks);
    expect(DAI).toContain("22 weeks - 11/06/2026 to 05/11/2026");
    // A row re-read on 4 Nov 2026 moved the chart file's read stamp, and the
    // file says so in a dated note. The 11 Nov read of the Billboard globals
    // moved it on again; it never goes back.
    expect(BURNA_LAST_CHART_SWEEP >= "2026-11-04").toBe(true);
    expect(readFileSync("app/data/charts.ts", "utf8")).toContain("// UK: re-read 4 Nov 2026 at the OCC's own song page");
  });

  it("both editions print the stay through the chart of 5 November", () => {
    expect(EN).toContain(enStay(READ.weeks, "5 November", READ.pos));
    expect(ES).toContain(esStay(READ.weeks, "5 de noviembre", READ.pos));
  });

  it("negative control: the line origin/main served on 4 Nov 2026 fails", () => {
    expect(EN).not.toContain(enStay(19, "15 October", 43));
    expect(ES).not.toContain(esStay(19, "15 de octubre", 43));
  });
});

describe("Africa's Biggest: Spotify streams as a lead artist, re-read on ChartMasters on 4 Nov", () => {
  // ChartMasters' public artist pages, "Spotify statistics", read 4 Nov 2026.
  const READ: Record<string, [lead: string, feat: string]> = {
    "Burna Boy": ["8.2B", "3.2B"], Rema: ["6.5B", "415.5M"], Wizkid: ["5.0B", "7.0B"], Tems: ["4.9B", "1.6B"],
    Tyla: ["4.8B", "139.6M"], Asake: ["4.2B", "418.7M"], "Ayra Starr": ["3.7B", "794.3M"], Davido: ["3.5B", "813.5M"],
    "Omah Lay": ["3.2B", "660.7M"], CKay: ["3.1B", "78.3M"],
  };
  const slug = (name: string) => name.toLowerCase().replace(/ /g, "-");
  const faq = pageFaqs.find((f) => f.q === "Who is the most-streamed African artist on Spotify?")!;

  it("the whole list is the 4 Nov reading, one day's figures, as the doc records them", () => {
    expect(SPOTIFY_LEAD_STREAMS_READ_ON).toBe("2026-11-04");
    expect(spotifyLeadStreams.map((r) => r.name)).toEqual(Object.keys(READ));
    for (const r of spotifyLeadStreams) {
      expect([streamsShort(r.lead), streamsShort(r.feat)], r.name).toEqual(READ[r.name]);
      expect(LEAD, r.name).toContain(`| ${slug(r.name)} | ${READ[r.name][0].toLowerCase()} | ${READ[r.name][1].toLowerCase()} |`);
    }
  });

  it("the answer names the leader and the next two from the reading, under its date", () => {
    expect(faq.a).toContain("it is Burna Boy: 8.2B Spotify streams as a lead artist");
    expect(faq.a).toContain("ahead of Rema (6.5B) and Wizkid (5.0B) on ChartMasters' count, read 4 November 2026.");
  });

  it("negative control: the answer origin/main served on 4 Nov 2026 fails", () => {
    expect(faq.a).not.toContain("it is Burna Boy: 8.1B Spotify streams as a lead artist");
    expect(faq.a).not.toContain("ahead of Rema (6.4B) and Wizkid (5.0B) on ChartMasters' count, read 21 October 2026.");
  });
});

describe("Africa's Biggest: the 200M-songs board recounted on kworb on 4 Nov", () => {
  const b = statBoxes.find((x) => x.id === "most-200m-stream-songs")!;

  it("every count stood; the doc has the counts", () => {
    expect(STREAMS_200M_READ_ON).toBe("2026-11-04");
    expect(b.entries!.map((e) => [e.name, e.value])).toEqual([["Burna Boy", "15"], ["Tems", "8"], ["Rema", "7"], ["Tyla", "6"], ["CKay & Seether", "4"]]);
    for (const s of ["| Burna Boy | 2026/11/03 | 15 | 15 | 9 |", "| Rema | 2026/11/03 | 7 | 7 | 2 |", "| Tyla | 2026/11/02 | 6 | 6 | 6 |", "| Seether | 2026/10/31 | 4 | 4 | 2 |"]) expect(BOARDS, s).toContain(s);
  });

  it("the source line quotes the two near-the-line songs at the 4 Nov reading", () => {
    expect(b.source).toContain("“love nwantiti” (209M)");
    expect(b.source).toContain("“Careless Whisper” (210M)");
    expect(BOARDS).toContain("209,017,847");
    expect(BOARDS).toContain("209,754,109");
  });

  it("negative control: the source origin/main served on 4 Nov 2026 fails", () => {
    expect(b.source).not.toContain("(208M)");
    expect(b.source).not.toContain("read 21 October 2026");
  });
});

describe("Africa's Biggest: the Daily Top Artists walk, 7 Oct to 2 Nov", () => {
  it("the reading is the doc's: 27 charts read, 429 days on the 2 Nov chart", () => {
    expect(SPOTIFY_TOP_ARTISTS_DAILY.chartDate).toBe("2026-11-02");
    expect(BOARDS).toContain("Total days on chart 429");
    expect(BOARDS).toContain("579 of the 1,839 chart dates");
    // One position per chart read, 7 Oct to 2 Nov, the last his row on 2 Nov.
    const positions = /His positions: ([\d, ]+)/.exec(BOARDS)![1].split(", ").map(Number);
    expect(positions).toHaveLength(day("2026-11-02") - day("2026-10-06"));
    expect(positions.at(-1)).toBe(SPOTIFY_TOP_ARTISTS_DAILY.rank);
  });
});

describe("Spotify followers, all 23 rows re-read on 4 Nov", () => {
  const fmt = (n: number) => n.toLocaleString("en-US");

  it("every row is the doc's 4 Nov count, highest first", () => {
    expect(SPOTIFY_FOLLOWERS_READ_ON).toBe("2026-11-04");
    expect(spotifyFollowersRead).toHaveLength(23);
    for (const r of spotifyFollowersRead) expect(BOARDS, r.name).toContain(`| ${r.name} | ${fmt(r.followers)} |`);
    const counts = spotifyFollowersRead.map((r) => r.followers);
    expect(counts).toEqual([...counts].sort((a, b) => b - a));
  });

  it("negative control: the 11 Oct counts origin/main served are not the rows", () => {
    const burna = spotifyFollowersRead.find((r) => r.name === "Burna Boy")!;
    expect(burna.followers).not.toBe(18_121_851);
    expect(BOARDS).toContain(`| Burna Boy | ${fmt(burna.followers)} | 18,121,851 |`);
  });
});

describe("Firsts: the 50M rivals' counts re-read on kworb's 3 Nov pages", () => {
  const f = allFirsts.find((x) => x.title === "First African artist with 50 songs past 50 million Spotify streams")!;

  it("prints the counts the doc records, dated to the pages", () => {
    expect(f.text).toContain("On kworb's 3 November 2026 pages, Wizkid is next with 40, Asake with 32.");
    expect(f.asOf).toBe("2026-11-03");
    expect(BOARDS).toContain("stamped 2026/11/03");
    expect(BOARDS).toContain("Burna Boy 52, Wizkid 40, Asake 32");
  });

  it("negative control: the line origin/main (35fe0849) served on 4 Nov fails", () => {
    expect(f.text).not.toContain("On kworb's 20 October 2026 pages, Wizkid is next with 40, Asake with 31.");
  });
});
