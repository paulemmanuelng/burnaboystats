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

describe("#4 Spotify Daily Top Songs Global: the streak re-read on the 14 Oct chart", () => {
  // Spotify's own row on the chart dated 14 Oct 2026, and its expanded panel.
  const READ = { date: "2026-10-14", pos: 36, prev: 38, peak: 1, streak: 146, total: 147, streams: "1,978,364" };
  // The previous body read: the 3 Oct chart, Streak 135, Total 136.
  const BEFORE = { date: "2026-10-03", streak: 135, total: 136 };
  // kworb's day-by-day history of the song: the eleven charts after it.
  const BETWEEN = [18, 29, 31, 33, 37, 29, 21, 29, 36, 38, 36];

  /** The streak row as each edition must print it: the 14 Oct figures under the 14 Oct date. */
  const enRowOk = (t: string) =>
    t.includes(`${READ.streak} straight days on the chart and ${READ.total} in all, counted through the chart dated 14 October 2026, which prints both figures in its own columns (Spotify Charts)`);
  const esRowOk = (t: string) =>
    t.includes(`${READ.streak} seguidos en la lista y ${READ.total} en total, contados hasta la lista del 14 de octubre de 2026, que imprime ambas cifras en sus propias columnas (Spotify Charts)`);

  it("the body read is Spotify's own 14 Oct row, and the sourcing doc records it", () => {
    expect(dd.DAI_DAI_SPOTIFY_BODY_READ).toMatchObject({ date: READ.date, streak: READ.streak, totalDaysOnChart: READ.total, peak: READ.peak, debutPosition: 114 });
    expect(dd.DAI_DAI_SPOTIFY_CONFIRMED_THROUGH).toBe(READ.date);
    expect(dd.daiDaiSpotifyStraightDays).toBe(READ.streak);
    expect(dd.daiDaiSpotifyDaysOnChart).toBe(READ.total);
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
    expect(dd.DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF).toBe(READ.date);
    expect(dd.DAI_DAI_SPOTIFY_TOP10_DAYS_AS_OF).toBe(READ.date);
    expect(doc).toContain("Days 147, T10 85, Pk 1 (x37)");
  });

  it("both editions print the 14 Oct figures under the 14 Oct date", () => {
    expect(enRowOk(EN), "EN streak row").toBe(true);
    expect(esRowOk(ES), "ES streak row").toBe(true);
    expect(EN).toContain("confirmed day by day through the chart dated 14 October 2026 — with 85 days inside the global Top 10 in all");
    expect(ES).toContain("confirmado día a día hasta la lista del 14 de octubre de 2026 — con 85 días dentro del top 10 mundial en total");
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
