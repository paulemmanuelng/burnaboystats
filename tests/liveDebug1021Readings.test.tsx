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
import {
  statBoxes,
  spotifyLeadStreams,
  streamsShort,
  SPOTIFY_LEAD_STREAMS_READ_ON,
  SPOTIFY_LEAD_STREAMS_READ_ON_LONG,
  STREAMS_200M_READ_ON,
  LISTENERS_PEAKS_READ_ON,
  BURNA_PEAK_LISTENERS,
} from "../app/data/africasBiggest";
import { allFirsts } from "../app/data/firsts";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import { pageFaqs } from "../app/records/africas-biggest/page";

/**
 * Paul, 21 Oct 2026: "update stream count and anything else that is outdated
 * since our last update". The hand-kept readings the stats bot does not
 * refresh, re-read on 21 Oct 2026 at the sources they were first read from.
 * Every figure below is copied from the three sourcing docs of that day,
 * which record where each was read:
 *   docs/sourcing/DAI-DAI-READINGS-2026-10-21.md
 *   docs/sourcing/spotify-lead-streams-2026-10-21.md
 *   docs/sourcing/BOARD-READINGS-2026-10-21.md
 * Each block ends on a negative control: the line origin/main (3601f91e)
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
const DAI = flat("docs/sourcing/DAI-DAI-READINGS-2026-10-21.md");
const LEAD = flat("docs/sourcing/spotify-lead-streams-2026-10-21.md");
const BOARDS = flat("docs/sourcing/BOARD-READINGS-2026-10-21.md");
const day = (iso: string) => Date.parse(`${iso}T00:00:00Z`) / 86_400_000;
const board = (id: string) => statBoxes.find((b) => b.id === id)!;

describe("Dai Dai, Spotify Daily Top Songs Global: the streak re-read on the 19 Oct chart", () => {
  // Spotify's own row on the chart dated 19 Oct 2026, and its expanded panel.
  const READ = { date: "2026-10-19", pos: 50, prev: 36, streak: 151, total: 152, streams: "1,798,325" };
  // The previous body read: the 14 Oct chart, Streak 146, Total 147.
  const BEFORE = { date: "2026-10-14", streak: 146, total: 147 };
  // kworb's day-by-day history of the song: the five charts after it.
  const BETWEEN = [38, 42, 26, 36, 50];
  const enRow = (streak: number, total: number, date: string) =>
    `${streak} straight days on the chart and ${total} in all, counted through the chart dated ${date}, which prints both figures in its own columns (Spotify Charts)`;
  const esRow = (streak: number, total: number, date: string) =>
    `${streak} seguidos en la lista y ${total} en total, contados hasta la lista del ${date}, que imprime ambas cifras en sus propias columnas (Spotify Charts)`;

  it("the body read is Spotify's own 19 Oct row, and the sourcing doc records it", () => {
    expect(dd.DAI_DAI_SPOTIFY_BODY_READ).toMatchObject({ date: READ.date, streak: READ.streak, totalDaysOnChart: READ.total, peak: 1, debutPosition: 114 });
    expect(dd.DAI_DAI_SPOTIFY_CONFIRMED_THROUGH).toBe(READ.date);
    expect(dd.daiDaiSpotifyStraightDays).toBe(READ.streak);
    expect(dd.daiDaiSpotifyDaysOnChart).toBe(READ.total);
    for (const s of [`Streak ${READ.streak}`, `Total days on chart ${READ.total}`, `No. ${READ.pos}, Prev ${READ.prev}, Peak 1`, READ.streams, "regional-global-daily/2026-10-19", '"Global - 2026/10/19"']) {
      expect(DAI, s).toContain(s);
    }
  });

  it("the streak moved by exactly the charts in between, every one of them read", () => {
    expect(BETWEEN).toHaveLength(day(READ.date) - day(BEFORE.date));
    expect(BEFORE.streak + BETWEEN.length).toBe(READ.streak);
    expect(BEFORE.total + BETWEEN.length).toBe(READ.total);
    expect(BETWEEN.at(-1)).toBe(READ.pos);
    expect(DAI).toContain(BETWEEN.map((p, i) => `${15 + i} Oct ${p}`).join(" · "));
  });

  it("the No. 1 and Top 10 totals are confirmed through the same chart, unchanged", () => {
    expect(BETWEEN.every((p) => p > 10)).toBe(true);
    expect(dd.DAI_DAI_SPOTIFY_NO1_DAYS).toBe(37);
    expect(dd.DAI_DAI_SPOTIFY_TOP10_DAYS).toBe(85);
    expect(dd.DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF).toBe(READ.date);
    expect(dd.DAI_DAI_SPOTIFY_TOP10_DAYS_AS_OF).toBe(READ.date);
    expect(DAI).toContain("Days 152, T10 85, Pk 1 (x37)");
  });

  it("both editions print the 19 Oct figures under the 19 Oct date", () => {
    expect(EN).toContain(enRow(READ.streak, READ.total, "19 October 2026"));
    expect(ES).toContain(esRow(READ.streak, READ.total, "19 de octubre de 2026"));
    expect(EN).toContain("confirmed day by day through the chart dated 19 October 2026 — with 85 days inside the global Top 10 in all");
    expect(ES).toContain("confirmado día a día hasta la lista del 19 de octubre de 2026 — con 85 días dentro del top 10 mundial en total");
  });

  it("negative control: the rows origin/main served on 21 Oct 2026 fail", () => {
    const mainEn = enRow(146, 147, "14 October 2026");
    const mainEs = esRow(146, 147, "14 de octubre de 2026");
    expect(mainEn).not.toBe(enRow(READ.streak, READ.total, "19 October 2026"));
    expect(EN).not.toContain(mainEn);
    expect(ES).not.toContain(mainEs);
  });
});

describe("Dai Dai, Spotify Weekly Top Songs Global: the stay re-read on the 15 Oct chart", () => {
  // Spotify's own row, "Top Songs Global · October 9 - 15, 2026": Streak 21,
  // First entry date May 28, 2026, Total weeks on chart 21.
  const READ = { first: "2026-05-28", chart: "2026-10-15", weeks: 21 };
  const enLine = (weeks: number, date: string) => `in a ${weeks}-week stay counted through the chart dated ${date}, peaking at 40.28M streams in a single week`;
  const esLine = (weeks: number, date: string) => `en una estancia de ${weeks} semanas contada hasta la lista del ${date}, con un pico de 40,28 millones de reproducciones en una sola semana`;

  it("the stay is Spotify's own row, one chart a week from the first entry, none missed", () => {
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_FIRST_CHART).toBe(READ.first);
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_AS_OF).toBe(READ.chart);
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_WEEKS_ON_CHART).toBe(READ.weeks);
    expect((day(READ.chart) - day(READ.first)) / 7 + 1).toBe(READ.weeks);
    for (const s of ["October 9 - 15, 2026", "Streak 21", "Total weeks on chart 21", "First entry date May 28, 2026", "Wks 21, Pk 1 (x6)", "PkStreams 40,283,139"]) expect(DAI, s).toContain(s);
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS).toBe(6);
  });

  it("both editions print the stay and the chart from the constants", () => {
    expect(EN).toContain(enLine(READ.weeks, "15 October 2026"));
    expect(ES).toContain(esLine(READ.weeks, "15 de octubre de 2026"));
  });

  it("negative control: the rows origin/main served on 21 Oct 2026 fail", () => {
    expect(EN).not.toContain(enLine(20, "8 October 2026"));
    expect(ES).not.toContain(esLine(20, "8 de octubre de 2026"));
  });
});

describe("Dai Dai, Apple Music and iTunes: the days at No. 1 re-read on kworb's charts of 20 Oct", () => {
  const READ = { appleEurope: 69, appleWorld: 11, itunesWorld: 40, itunesEurope: 16, date: "2026-10-20" };

  it("the four counts are unchanged, now counted to kworb's 20 Oct pages", () => {
    expect(dd.DAI_DAI_APPLE_EUROPE_NO1_DAYS).toBe(READ.appleEurope);
    expect(dd.DAI_DAI_APPLE_WORLDWIDE_NO1_DAYS).toBe(READ.appleWorld);
    expect(dd.DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS).toBe(READ.itunesWorld);
    expect(dd.DAI_DAI_ITUNES_EUROPE_NO1_DAYS).toBe(READ.itunesEurope);
    expect(dd.DAI_DAI_APPLE_ITUNES_DAYS_AS_OF).toBe(READ.date);
    for (const s of [
      "| Worldwide iTunes (`/ww/`) | 22 | 159 | 40 | 40 |",
      "| European iTunes (`/eu/`) | 10 | 159 | 16 | 16 |",
      "| Worldwide Apple Music (`/apple_songs/`) | 19 | 153 | 11 | 11 |",
      "| European Apple Music (`/apple_songs_eu/`) | 6 | 158 | 69 | 69 |",
    ]) expect(DAI, s).toContain(s);
  });

  it("both editions date the rows 20 October 2026", () => {
    expect(EN).toContain("No. 1 on Apple Music's European songs chart, as last counted on 20 October 2026 — plus 11 days atop the worldwide Apple Music chart");
    expect(EN).toContain("No. 1 on the worldwide iTunes songs chart, as last counted on 20 October 2026, and 16 days atop the European iTunes chart");
    expect(ES).toContain("el número 1 de la lista europea de Apple Music, según el último recuento, del 20 de octubre de 2026");
    expect(ES).toContain("el número 1 de la lista mundial de canciones de iTunes, según el último recuento, del 20 de octubre de 2026");
  });

  it("negative control: the dates origin/main served on 21 Oct 2026 fail", () => {
    expect(EN).not.toContain("as last counted on 14 October 2026");
    expect(ES).not.toContain("según el último recuento, del 14 de octubre de 2026");
  });
});

describe("Africa's Biggest: Spotify streams as a lead artist, re-read on ChartMasters on 21 Oct", () => {
  // ChartMasters' public artist pages, "Spotify statistics", read 21 Oct 2026.
  const READ: Record<string, [lead: string, feat: string]> = {
    "Burna Boy": ["8.1B", "3.1B"], Rema: ["6.4B", "412.5M"], Wizkid: ["5.0B", "7.0B"], Tems: ["4.9B", "1.6B"],
    Tyla: ["4.8B", "138.4M"], Asake: ["4.1B", "410.3M"], "Ayra Starr": ["3.6B", "784.9M"], Davido: ["3.4B", "806.8M"],
    "Omah Lay": ["3.1B", "657.0M"], CKay: ["3.0B", "77.8M"],
  };
  const slug = (name: string) => name.toLowerCase().replace(/ /g, "-");
  const faq = pageFaqs.find((f) => f.q === "Who is the most-streamed African artist on Spotify?")!;

  it("the whole list is the 21 Oct reading, one day's figures, as the doc records them", () => {
    expect(SPOTIFY_LEAD_STREAMS_READ_ON).toBe("2026-10-21");
    expect(spotifyLeadStreams.map((r) => r.name)).toEqual(Object.keys(READ));
    for (const r of spotifyLeadStreams) {
      expect([streamsShort(r.lead), streamsShort(r.feat)], r.name).toEqual(READ[r.name]);
      expect(LEAD, r.name).toContain(`| ${slug(r.name)} | ${READ[r.name][0].toLowerCase()} | ${READ[r.name][1].toLowerCase()} |`);
    }
  });

  it("the answer names the leader and the next two from the reading, under its date", () => {
    expect(faq.a).toContain("it is Burna Boy: 8.1B Spotify streams as a lead artist");
    expect(faq.a).toContain("ahead of Rema (6.4B) and Wizkid (5.0B) on ChartMasters' count, read 21 October 2026.");
    expect(SPOTIFY_LEAD_STREAMS_READ_ON_LONG).toBe("21 October 2026");
    expect(faq.a).toContain("Wizkid's overall Spotify total is higher, because 7.0B of it comes from songs where Wizkid is the featured artist.");
  });

  it("negative control: the answer origin/main served on 21 Oct 2026 fails", () => {
    const main = "it is Burna Boy: 8.0B Spotify streams as a lead artist, the most of any African artist, ahead of Rema (6.3B) and Wizkid (4.9B) on ChartMasters' count, read 30 September 2026.";
    expect(faq.a).not.toContain(main);
  });
});

describe("Africa's Biggest: the 200M-songs board recounted on kworb on 21 Oct", () => {
  const b = board("most-200m-stream-songs");
  const rows = () => b.entries!.map((e) => [e.name, e.value]);

  it("Rema's seventh broke the tie with Tyla; every other count stood", () => {
    expect(STREAMS_200M_READ_ON).toBe("2026-10-21");
    expect(rows()).toEqual([["Burna Boy", "15"], ["Tems", "8"], ["Rema", "7"], ["Tyla", "6"], ["CKay & Seether", "4"]]);
    // No tie left between Rema and Tyla, and the doc has the counts and the crossing.
    expect(b.entries!.filter((e) => e.tie).map((e) => e.name)).toEqual([]);
    expect(b.entries!.find((e) => e.name === "Tyla")!.sub).not.toContain("tied");
    for (const s of ["| Rema | 2026/10/20 | 7 | 6 | 2 |", "| Tyla | 2026/10/20 | 6 | 6 | 6 |", "| Burna Boy | 2026/10/20 | 15 | 15 | 9 |", '"Dumebi", at 200,184,252']) expect(BOARDS, s).toContain(s);
  });

  it("the source line quotes the two near-the-line songs at today's reading", () => {
    expect(b.source).toContain("“love nwantiti” (208M)");
    expect(b.source).toContain("“Careless Whisper” (208M)");
    expect(BOARDS).toContain("207,772,321");
    expect(BOARDS).toContain("208,108,768");
  });

  it("negative control: the board origin/main served on 21 Oct 2026 fails", () => {
    const main = [["Burna Boy", "15"], ["Tems", "8"], ["Tyla", "6"], ["Rema", "6"], ["CKay & Seether", "4"]];
    expect(rows()).not.toEqual(main);
    expect(b.source).not.toContain("(204M)");
    expect(b.source).not.toContain("(205M)");
  });
});

describe("Africa's Biggest: the listener peaks re-read on kworb on 21 Oct", () => {
  it("the four kworb peaks are unchanged, and the board's read date moves", () => {
    expect(LISTENERS_PEAKS_READ_ON).toBe("2026-10-21");
    const b = board("monthly-listeners-peak");
    expect(b.entries!.slice(0, 4).map((e) => e.value)).toEqual([BURNA_PEAK_LISTENERS, "46.58M", "45.58M", "40.01M"]);
    expect(BURNA_PEAK_LISTENERS).toBe("60.13M");
    for (const s of ["| Burna Boy | 60,131,126 | 60.13M |", "| Tyla | 46,584,665 | 46.58M |", "| Tems | 45,584,120 | 45.58M |", "| Rema | 40,010,586 | 40.01M |"]) expect(BOARDS, s).toContain(s);
  });
});

describe("Firsts: the 50M rivals' counts dated to kworb's 20 Oct pages", () => {
  const f = allFirsts.find((x) => x.title === "First African artist with 50 songs past 50 million Spotify streams")!;

  it("prints the counts the doc records, with the pages' date", () => {
    expect(f.text).toContain("On kworb's 20 October 2026 pages, Wizkid is next with 40, Asake with 31.");
    expect(f.asOf).toBe("2026-10-20");
    expect(BOARDS).toContain("Burna Boy 52, Wizkid 40, Asake 31");
  });

  it("negative control: the line origin/main served on 21 Oct 2026 fails", () => {
    expect(f.text).not.toContain("Wizkid is next with 39, Asake with 29");
  });
});
