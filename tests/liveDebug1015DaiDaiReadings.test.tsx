import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
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
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";

/**
 * Owner question #4 of the live debug of 15 Oct 2026 (Paul: "yes to all"):
 * the Dai Dai readings that can be read without him, re-read at their sources
 * on 15 Oct 2026. Every figure below is copied from
 * docs/sourcing/DAI-DAI-READINGS-2026-10-15.md, which records where each was
 * read. Each block ends on a negative control: the line origin/main served
 * that morning, which the same check refuses.
 *
 * The Billboard Global 200 run (3, 10, 17 Oct issues) is NOT here: it waits
 * for Paul's screenshots (Billboard answers bots with 402).
 */

const text = (html: string) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ");
const EN = text(renderToStaticMarkup(<DaiDaiPage />));
const ES = text(renderToStaticMarkup(<DaiDaiPageES />));
const doc = readFileSync("docs/sourcing/DAI-DAI-READINGS-2026-10-15.md", "utf8").replace(/\*\*/g, "").replace(/\s+/g, " ");
const day = (iso: string) => Date.parse(`${iso}T00:00:00Z`) / 86_400_000;
const inclusive = (from: string, to: string) => day(to) - day(from) + 1;
// The site's own long dates, as daiDai.ts formats them.
const longEn = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const longEs = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
// Since the re-read of 21 Oct 2026 (tests/liveDebug1021DaiDaiReadings.test.tsx,
// docs/sourcing/DAI-DAI-READINGS-2026-10-21.md) the constants no longer hold
// the 14–15 Oct readings themselves. What this file still holds is the 15 Oct
// doc, and the relation every later reading must keep to it: a later chart,
// and a count moved by exactly what happened in between.

describe("#4 Spotify Daily Top Songs Global: the streak re-read on the 14 Oct chart", () => {
  // Spotify's own row on the chart dated 14 Oct 2026, and its expanded panel.
  const READ = { date: "2026-10-14", pos: 36, prev: 38, peak: 1, streak: 146, total: 147, streams: "1,978,364" };
  // The previous body read: the 3 Oct chart, Streak 135, Total 136.
  const BEFORE = { date: "2026-10-03", streak: 135, total: 136 };
  // kworb's day-by-day history of the song: the eleven charts after it.
  const BETWEEN = [18, 29, 31, 33, 37, 29, 21, 29, 36, 38, 36];

  /** The streak row as each edition must print it: a reading's figures under its own date. */
  const enRowOk = (t: string, r: { streak: number; total: number; date: string } = READ) =>
    t.includes(`${r.streak} straight days on the chart and ${r.total} in all, counted through the chart dated ${longEn(r.date)}, which prints both figures in its own columns (Spotify Charts)`);
  const esRowOk = (t: string, r: { streak: number; total: number; date: string } = READ) =>
    t.includes(`${r.streak} seguidos en la lista y ${r.total} en total, contados hasta la lista del ${longEs(r.date)}, que imprime ambas cifras en sus propias columnas (Spotify Charts)`);
  const NOW = { streak: dd.DAI_DAI_SPOTIFY_BODY_READ.streak, total: dd.DAI_DAI_SPOTIFY_BODY_READ.totalDaysOnChart, date: dd.DAI_DAI_SPOTIFY_BODY_READ.date };

  it("the 15 Oct doc records Spotify's own 14 Oct row, and the body read is that chart or a later one, moved by the charts between", () => {
    expect(longEn(READ.date)).toBe("14 October 2026");
    expect(dd.DAI_DAI_SPOTIFY_BODY_READ).toMatchObject({ peak: READ.peak, debutPosition: 114 });
    expect(dd.DAI_DAI_SPOTIFY_BODY_READ.date >= READ.date).toBe(true);
    // The run has not broken since (Streak and Total both moved one a chart).
    const since = day(dd.DAI_DAI_SPOTIFY_BODY_READ.date) - day(READ.date);
    expect(dd.DAI_DAI_SPOTIFY_BODY_READ.streak - READ.streak).toBe(since);
    expect(dd.DAI_DAI_SPOTIFY_BODY_READ.totalDaysOnChart - READ.total).toBe(since);
    expect(dd.DAI_DAI_SPOTIFY_CONFIRMED_THROUGH).toBe(dd.DAI_DAI_SPOTIFY_BODY_READ.date);
    expect(dd.daiDaiSpotifyStraightDays).toBe(NOW.streak);
    expect(dd.daiDaiSpotifyDaysOnChart).toBe(NOW.total);
    for (const s of [`Streak ${READ.streak}`, `Total days on chart ${READ.total}`, `No. ${READ.pos}, Prev ${READ.prev}, Peak 1`, READ.streams, "regional-global-daily/2026-10-14"]) {
      expect(doc, s).toContain(s);
    }
  });

  it("the streak moved by exactly the charts in between, every one of them read", () => {
    expect(BETWEEN).toHaveLength(inclusive("2026-10-04", READ.date));
    expect(BEFORE.streak + BETWEEN.length).toBe(READ.streak);
    expect(BEFORE.total + BETWEEN.length).toBe(READ.total);
    expect(BETWEEN.at(-1)).toBe(READ.pos);
    expect(doc).toContain(BETWEEN.map((p, i) => `${4 + i} Oct ${p}`).join(" · "));
  });

  it("the No. 1 and Top 10 totals are confirmed through the same chart, unchanged", () => {
    // None of the eleven charts reached the Top 10, let alone No. 1.
    expect(BETWEEN.every((p) => p > 10)).toBe(true);
    expect(dd.DAI_DAI_SPOTIFY_NO1_DAYS).toBe(37);
    expect(dd.DAI_DAI_SPOTIFY_TOP10_DAYS).toBe(85);
    // Confirmed through the 14 Oct chart or a later one, never an earlier.
    expect(dd.DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF >= READ.date).toBe(true);
    expect(dd.DAI_DAI_SPOTIFY_TOP10_DAYS_AS_OF >= READ.date).toBe(true);
    expect(doc).toContain("Days 147, T10 85, Pk 1 (x37)");
  });

  it("both editions print the body read's figures under its own date (the 14 Oct figures until the 21 Oct re-read)", () => {
    expect(enRowOk(EN, NOW), "EN streak row").toBe(true);
    expect(esRowOk(ES, NOW), "ES streak row").toBe(true);
    // The 14 Oct row itself is no longer printed once a later chart is read.
    if (NOW.date > READ.date) {
      expect(enRowOk(EN)).toBe(false);
      expect(esRowOk(ES)).toBe(false);
    }
    expect(EN).toContain(`confirmed day by day through the chart dated ${longEn(dd.DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF)} — with 85 days inside the global Top 10 in all`);
    expect(ES).toContain(`confirmado día a día hasta la lista del ${longEs(dd.DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF)} — con 85 días dentro del top 10 mundial en total`);
  });

  it("negative control: the rows origin/main served on 15 Oct 2026 fail", () => {
    const mainEn = "135 straight days on the chart and 136 in all, counted through the chart dated 3 October 2026, which prints both figures in its own columns (Spotify Charts)";
    const mainEs = "135 seguidos en la lista y 136 en total, contados hasta la lista del 3 de octubre de 2026, que imprime ambas cifras en sus propias columnas (Spotify Charts)";
    expect(enRowOk(mainEn)).toBe(false);
    expect(esRowOk(mainEs)).toBe(false);
    expect(EN).not.toContain(mainEn);
    expect(ES).not.toContain(mainEs);
  });
});

describe("#4 Spotify Weekly Top Songs Global: the stay re-read on the 8 Oct chart", () => {
  // Spotify's own row, "Top Songs Global · October 2 - 8, 2026": Streak 20,
  // First entry date May 28, 2026, Total weeks on chart 20.
  const READ = { first: "2026-05-28", chart: "2026-10-08", weeks: 20 };
  const NOW = { chart: dd.DAI_DAI_SPOTIFY_WEEKLY_AS_OF, weeks: dd.DAI_DAI_SPOTIFY_WEEKLY_WEEKS_ON_CHART };
  const enOk = (t: string, r: { chart: string; weeks: number } = READ) =>
    t.includes(`in a ${r.weeks}-week stay counted through the chart dated ${longEn(r.chart)}, peaking at 40.28M streams in a single week`);
  const esOk = (t: string, r: { chart: string; weeks: number } = READ) =>
    t.includes(`en una estancia de ${r.weeks} semanas contada hasta la lista del ${longEs(r.chart)}, con un pico de 40,28 millones de reproducciones en una sola semana`);

  it("the stay is Spotify's own row, and one chart a week from the first entry", () => {
    expect(longEn(READ.chart)).toBe("8 October 2026");
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_FIRST_CHART).toBe(READ.first);
    // The 8 Oct chart or a later one, with one week added per chart since.
    expect(NOW.chart >= READ.chart).toBe(true);
    expect(NOW.weeks - READ.weeks).toBe((day(NOW.chart) - day(READ.chart)) / 7);
    // Twenty weekly charts, 28 May to 8 Oct, none missed (Streak = Total).
    expect((day(READ.chart) - day(READ.first)) / 7 + 1).toBe(READ.weeks);
    for (const s of ["October 2 - 8, 2026", "Streak 20", "Total weeks on chart 20", "First entry date May 28, 2026"]) expect(doc, s).toContain(s);
    // The six weeks at No. 1 and the peak week are unchanged.
    expect(dd.DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS).toBe(6);
    expect(doc).toContain("a peak week of 40,283,139 streams");
  });

  it("both editions print the stay and the chart from the constants", () => {
    expect(enOk(EN, NOW), "EN weekly row").toBe(true);
    expect(esOk(ES, NOW), "ES weekly row").toBe(true);
  });

  it("negative control: the rows origin/main served on 15 Oct 2026 fail", () => {
    const mainEn = "in a 16-week stay counted through the chart dated 10 September 2026, peaking at 40.28M streams in a single week";
    const mainEs = "en una estancia de 16 semanas contada hasta la lista del 10 de septiembre de 2026, con un pico de 40,28 millones de reproducciones en una sola semana";
    expect(enOk(mainEn)).toBe(false);
    expect(esOk(mainEs)).toBe(false);
    expect(EN).not.toContain(mainEn);
    expect(ES).not.toContain(mainEs);
  });
});

describe("#4 Apple Music and iTunes: the days at No. 1 re-read on kworb's charts of 14 Oct", () => {
  // kworb's four charts dated 2026/10/14, "Pk 1 (x?)": days at No. 1.
  const READ = { appleEurope: 69, appleWorld: 11, itunesWorld: 40, itunesEurope: 16, date: "2026-10-14" };
  // Each sentence from its second word: the list capitalises a row's first
  // letter ("At No. 1 …", "En el número 1 …"). Counted to the date the
  // constants carry: 14 Oct until the 21 Oct re-read, which found all four
  // unchanged (closed totals) on the pages dated 20 Oct.
  const AS_OF = dd.DAI_DAI_APPLE_ITUNES_DAYS_AS_OF;
  const EN_APPLE = `No. 1 on Apple Music's European songs chart, as last counted on ${longEn(AS_OF)} — plus ${READ.appleWorld} days atop the worldwide Apple Music chart`;
  const EN_ITUNES = `No. 1 on the worldwide iTunes songs chart, as last counted on ${longEn(AS_OF)}, and ${READ.itunesEurope} days atop the European iTunes chart`;
  const ES_APPLE = `el número 1 de la lista europea de Apple Music, según el último recuento, del ${longEs(AS_OF)} — más ${READ.appleWorld} días en la cima de la lista mundial de Apple Music`;
  const ES_ITUNES = `el número 1 de la lista mundial de canciones de iTunes, según el último recuento, del ${longEs(AS_OF)}, y ${READ.itunesEurope} días en la cima de la lista europea de iTunes`;
  const rowsOk = (t: string, apple: string, itunes: string) => t.includes(apple) && t.includes(itunes);

  it("the four counts and their date are kworb's 14 Oct pages", () => {
    expect(dd.DAI_DAI_APPLE_EUROPE_NO1_DAYS).toBe(READ.appleEurope);
    expect(dd.DAI_DAI_APPLE_WORLDWIDE_NO1_DAYS).toBe(READ.appleWorld);
    expect(dd.DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS).toBe(READ.itunesWorld);
    expect(dd.DAI_DAI_ITUNES_EUROPE_NO1_DAYS).toBe(READ.itunesEurope);
    // Closed totals: the date may move on, the counts may not.
    expect(dd.DAI_DAI_APPLE_ITUNES_DAYS_AS_OF >= READ.date).toBe(true);
    for (const s of [
      "| European Apple Music (`/apple_songs_eu/`) | 3 | 152 | 69 | 58 |",
      "| Worldwide Apple Music (`/apple_songs/`) | 12 | 147 | 11 | 11 |",
      "| Worldwide iTunes (`/ww/`) | 8 | 153 | 40 | 40 |",
      "| European iTunes (`/eu/`) | 7 | 153 | 16 | 15 |",
      // The Apple Music Europe run is closed: the last day at No. 1 is 31 Aug.
      "2026/08/31 No. 1 (x69); 2026/09/01 No. 2 (x69)",
    ]) expect(doc, s).toContain(s);
  });

  it("the iTunes-countries count was not re-read, so it keeps its own date", () => {
    expect(dd.DAI_DAI_ITUNES_NO1_COUNTRIES).toBe(73);
    expect(dd.DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF).toBe("2026-08-21");
    expect(EN).toContain("Belarus the newest, as last counted on 21 August 2026");
  });

  it("both editions print the counts from the constants, under their date", () => {
    expect(rowsOk(EN, EN_APPLE, EN_ITUNES), "EN Apple/iTunes rows").toBe(true);
    expect(rowsOk(ES, ES_APPLE, ES_ITUNES), "ES Apple/iTunes rows").toBe(true);
    expect(EN).toContain(`${READ.appleEurope} days`);
    expect(ES).toContain(`${READ.appleEurope} días`);
  });

  it("negative control: the rows origin/main served on 15 Oct 2026 fail", () => {
    const main = {
      enApple: "No. 1 on Apple Music's European songs chart, as last counted on 21 August 2026 — plus 11 days atop the worldwide Apple Music chart",
      enItunes: "No. 1 on the worldwide iTunes songs chart, as last counted on 21 August 2026, and 15 days atop the European iTunes chart",
      esApple: "el número 1 de la lista europea de Apple Music, según el último recuento, del 21 de agosto de 2026 — más 11 días en la cima de la lista mundial de Apple Music",
      esItunes: "el número 1 de la lista mundial de canciones de iTunes, según el último recuento, del 21 de agosto de 2026, y 15 días en la cima de la lista europea de iTunes",
    };
    expect(rowsOk(`58 days ${main.enApple} 40 days ${main.enItunes}`, EN_APPLE, EN_ITUNES)).toBe(false);
    expect(rowsOk(`58 días ${main.esApple} 40 días ${main.esItunes}`, ES_APPLE, ES_ITUNES)).toBe(false);
    for (const line of Object.values(main)) {
      expect(EN).not.toContain(line);
      expect(ES).not.toContain(line);
    }
  });
});

describe("#4 UK Official Singles Chart: the stay re-read on the chart of 15 October", () => {
  // The OCC's own song page, Official Singles Chart block, read 15 Oct 2026:
  // 19 weeks, 11/06/2026 to 15/10/2026; No. 43 on the chart of 9-15 Oct.
  const READ = { first: "2026-06-11", chart: "2026-10-15", pos: 43, weeks: 19, peakWeeks: 5 };
  const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const ES_MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const iso = (d: string, month: number) => `2026-${String(month + 1).padStart(2, "0")}-${d.padStart(2, "0")}`;
  type Stay = { weeks: number; chart: string; pos: number } | null;
  const enStay = (t: string): Stay => {
    const m = /in a (\d+)-week stay counted through the chart of (\d{1,2}) ([A-Z][a-z]+) \(No\. (\d+)\)/.exec(t);
    return m ? { weeks: +m[1], chart: iso(m[2], EN_MONTHS.indexOf(m[3])), pos: +m[4] } : null;
  };
  const esStay = (t: string): Stay => {
    const m = /en una estancia de (\d+) semanas contada hasta la lista del (\d{1,2}) de ([a-z]+) \(N\.º (\d+)\)/.exec(t);
    return m ? { weeks: +m[1], chart: iso(m[2], ES_MONTHS.indexOf(m[3])), pos: +m[4] } : null;
  };
  /** A stay is honest when its weeks are the OCC run from 11 June to the chart
   *  it names, one chart a week with none missed (the run's own count). */
  const honest = (s: Stay) => s !== null && s.weeks === (day(s.chart) - day(READ.first)) / 7 + 1;

  it("charts.ts and the constants hold the OCC run: 19 weeks, 11 Jun to 15 Oct, No. 43", () => {
    expect(weeksOnChart("Dai Dai", "UK")).toBe(READ.weeks);
    expect(weeksAtPeak("Dai Dai", "UK")).toBe(READ.peakWeeks);
    expect(dd.DAI_DAI_UK_FIRST_CHART).toBe(READ.first);
    expect(dd.DAI_DAI_UK_LATEST_CHART).toBe(READ.chart);
    expect(dd.DAI_DAI_UK_LATEST_POS).toBe(READ.pos);
    expect((day(READ.chart) - day(READ.first)) / 7 + 1).toBe(READ.weeks);
    // The doc lists every week of the run, the first and the last as read.
    const weeks = [...doc.matchAll(new RegExp(`- (\\d{1,2}) (${EN_MONTHS.join("|")}): No\\. (\\d+)`, "g"))];
    expect(weeks).toHaveLength(READ.weeks);
    expect(weeks[0][0]).toBe("- 11 June: No. 87");
    expect(weeks.at(-1)![0]).toBe(`- 15 October: No. ${READ.pos}`);
    expect(weeks.filter((w) => w[3] === "2")).toHaveLength(READ.peakWeeks);
    expect(doc).toContain("9 October 2026 - 15 October 2026\"): No. 43, LW 40, Peak 2, Weeks 19");
    // A row re-read on 15 Oct 2026 moves the chart file's read stamp (to that
    // day or a later read: the Global 200 row was read on 16 Oct 2026).
    expect(BURNA_LAST_CHART_SWEEP >= "2026-10-15").toBe(true);
  });

  it("both editions print the stay through the chart of 15 October, and it is the run's own count", () => {
    const en = enStay(EN);
    const es = esStay(ES);
    expect(en).toEqual({ weeks: READ.weeks, chart: READ.chart, pos: READ.pos });
    expect(es).toEqual({ weeks: READ.weeks, chart: READ.chart, pos: READ.pos });
    expect(honest(en)).toBe(true);
    expect(honest(es)).toBe(true);
  });

  it("negative control: the line origin/main served on 15 Oct 2026 fails (17 weeks beside the chart of 24 September, when the run there was 16)", () => {
    const mainEn = "in a 17-week stay counted through the chart of 24 September (No. 31)";
    const mainEs = "en una estancia de 17 semanas contada hasta la lista del 24 de septiembre (N.º 31)";
    expect(enStay(mainEn)).toEqual({ weeks: 17, chart: "2026-09-24", pos: 31 });
    expect(honest(enStay(mainEn))).toBe(false);
    expect(honest(esStay(mainEs))).toBe(false);
    expect(EN).not.toContain(mainEn);
    expect(ES).not.toContain(mainEs);
  });
});
