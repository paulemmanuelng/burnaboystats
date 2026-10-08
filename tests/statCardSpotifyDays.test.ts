// @vitest-environment node
import { describe, it, expect, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { findCard, getStatCards, spotifyDaysCard } from "../app/lib/statCards";
import {
  statBoxes,
  HIGHLIGHT,
  SPOTIFY_TOP_ARTISTS_DAILY,
  spotifyTopArtistsDays,
  type TopArtistsDaysRow,
} from "../app/data/africasBiggest";
import { BURNA_PORTRAIT } from "../app/lib/artistImages";
import { GET } from "../app/stat-card/route";

/**
 * The "spotify-days" share card (Paul, 8 Oct 2026): his total days on
 * Spotify's Global Daily Top Artists chart, off the days board on
 * /records/africas-biggest (PR #440): one dated reading, SPOTIFY_TOP_ARTISTS_DAILY.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const MOST = /\bmost\b/i;
/** tests/spotifyTopArtistsDays.test.ts's guard: a total is never a run. */
const TOTAL_AS_RUN = /\blongest run\b|\b\d{3}[- ]day run\b|\brun of \d{3} days\b|\blongest any\b|\bhas lasted\b/i;
const TA = SPOTIFY_TOP_ARTISTS_DAILY;
const card = getStatCards().find((c) => c.id === "spotify-days")!;
const box = statBoxes.find((b) => b.id === "spotify-top-artists-days")!;
const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
/** The reading's rows with one artist's total changed — a re-read's shape. */
const withDays = (name: string, days: number): TopArtistsDaysRow[] =>
  spotifyTopArtistsDays.map((r) => (r.name === name ? { ...r, days } : r)).sort((a, b) => b.days - a.days);

/**
 * His own sentences ("he", "his") all come before the first other artist is
 * named, so no pronoun can be read as theirs. As first written the detail put
 * "On that chart he was No. 172" straight after Rema's "last on the chart on
 * 18 July 2024", and read as Rema's chart (8 Oct 2026 review).
 */
const hisFactsFirst = (detail: string, rows: readonly TopArtistsDaysRow[]) => {
  const names = rows.filter((r) => r.name !== HIGHLIGHT).map((r) => r.name);
  const firstOther = Math.min(...names.map((n) => detail.search(new RegExp(`\\b${n}\\b`))).filter((i) => i >= 0), detail.length);
  const pronouns = [...detail.matchAll(/\b(he|his|him)\b/gi)].map((m) => m.index!);
  return pronouns.every((i) => i < firstOther);
};
/** The detail as the branch first wrote it, letter for letter. */
const FIRST_WRITTEN =
  "402 days on Spotify's Global Daily Top Artists chart, counted across every daily chart since Spotify's archive of it began on 21 October 2021, " +
  "as of the chart dated 6 October 2026 — a total, not one unbroken run. " +
  "More than any other African artist, counted by nationality: Rema is next, on 328 days, last on the chart on 18 July 2024. " +
  "On that chart he was No. 172, on a current run of 139 straight days. His best placing is No. 40, on 8 July 2022, his first day on the chart.";

describe("the live card is the board's figure", () => {
  const him = spotifyTopArtistsDays.find((r) => r.name === HIGHLIGHT)!;

  it("is listed on /share and resolves on /stat-card", () => {
    expect(card).toBeDefined();
    expect(findCard("spotify-days")).toEqual(card);
    expect(read("app/share/page.tsx")).toContain("getStatCards().map(");
  });

  it("prints the total on his board row, as of the reading's chart", () => {
    const row = box.entries!.find((e) => e.name === HIGHLIGHT)!;
    expect(`${card.value} days`).toBe(row.value);
    expect(card.value).toBe(him.days.toLocaleString("en-US"));
    expect(card.asOf).toBe(TA.chartDate);
    expect(box.source).toContain(`as of the chart dated ${longDate(card.asOf)}`);
  });

  it("says “the most” only while the board's rows have no one level with or past him", () => {
    const alone = spotifyTopArtistsDays.every((r) => r === him || r.days < him.days);
    expect(MOST.test(`${card.label} ${card.kicker}`)).toBe(alone);
    if (alone) expect(box.note).toContain("more days on Spotify's Global Daily Top Artists chart than any other African artist");
  });

  it("calls the figure a total, never a run, and its second fact is the reading's dated peak", () => {
    expect(card.label.startsWith("total ")).toBe(true);
    for (const t of [card.label, card.kicker, card.detail]) expect(t).not.toMatch(TOTAL_AS_RUN);
    expect(card.kicker).toContain(`best placing No. ${TA.peak}, on ${longDate(TA.peakDate)}`);
    // The board's own account of the figure, in the card's words.
    expect(card.detail).toContain(`since Spotify's archive of it began on ${longDate(TA.archiveStart)}, as of the chart dated ${longDate(TA.chartDate)}`);
    expect(box.note).toContain("That is a total, not one unbroken run.");
  });

  it("gives his facts before any other artist's, and names the chart his rank is on", () => {
    expect(hisFactsFirst(card.detail, spotifyTopArtistsDays)).toBe(true);
    // The guard, on the sentence the branch first carried.
    expect(hisFactsFirst(FIRST_WRITTEN, spotifyTopArtistsDays)).toBe(false);
    if (him.lastOn === TA.chartDate) expect(card.detail).toContain(`On the chart dated ${longDate(TA.chartDate)} he was No. ${him.lastRank},`);
    expect(card.detail).not.toContain("On that chart");
  });

  it("cites what the board cites, and is gold like every share card", () => {
    expect(card.source).toBe("Spotify Charts");
    expect(box.source).toContain("Spotify Charts (charts.spotify.com)");
    expect(card.href).toBe("/records/africas-biggest");
    expect(Object.keys(card).sort()).toEqual(["asOf", "chip", "detail", "href", "id", "kicker", "label", "source", "value", "watermark"]);
  });

  it("types nothing: the builder holds no figure, date or name", () => {
    const src = read("app/lib/statCards.ts");
    const at = src.indexOf("export function spotifyDaysCard");
    const block = src.slice(at, src.indexOf("\n}\n", at));
    expect(block.length).toBeGreaterThan(0);
    expect(block).not.toMatch(/value: "/);
    expect(block).not.toMatch(/\b\d{2,}\b|20\d\d-|Rema|Nigeria/);
  });
});

describe("the reading of 7 Oct 2026, and re-reads it has not seen", () => {
  it("the chart dated 6 Oct 2026: 402 days, alone at the top", () => {
    expect(spotifyDaysCard(spotifyTopArtistsDays)).toEqual({
      id: "spotify-days",
      source: "Spotify Charts",
      watermark: "DAYS",
      href: "/records/africas-biggest",
      detail:
        "402 days on Spotify's Global Daily Top Artists chart, counted across every daily chart since Spotify's archive of it began on 21 October 2021, " +
        "as of the chart dated 6 October 2026 — a total, not one unbroken run. " +
        "On the chart dated 6 October 2026 he was No. 172, on a current run of 139 straight days. His best placing is No. 40, on 8 July 2022, his first day on the chart. " +
        "No other African artist, counted by nationality, has spent as many days on it: Rema is next, on 328 days, last on the chart on 18 July 2024.",
      value: "402",
      label: "total days on Spotify's Global Daily Top Artists chart",
      kicker: "The most of any African artist — best placing No. 40, on 8 July 2022",
      chip: "Chart days",
      asOf: "2026-10-06",
    });
  });

  it("negative control: level at the top, the “most” goes", () => {
    const rows = withDays("Rema", 402);
    const c = spotifyDaysCard(rows);
    expect(c.value).toBe("402");
    expect(c.kicker).toBe("Joint first among African artists — best placing No. 40, on 8 July 2022");
    expect(MOST.test(`${c.label} ${c.kicker}`)).toBe(false);
    expect(c.detail.endsWith(" Rema has as many days as Burna Boy.")).toBe(true);
    expect(c.detail).not.toContain("No other African artist");
    expect(hisFactsFirst(c.detail, rows)).toBe(true);
  });

  it("negative control: passed, the card gives his rank and the note names the leader", () => {
    const rows = withDays("Rema", 450);
    const c = spotifyDaysCard(rows);
    expect(c.value).toBe("402");
    expect(c.kicker).toBe("No. 2 among African artists — best placing No. 40, on 8 July 2022");
    expect(MOST.test(`${c.label} ${c.kicker}`)).toBe(false);
    expect(c.detail.endsWith(" Rema has more: 450 days.")).toBe(true);
    expect(c.detail).not.toContain("No other African artist");
    expect(hisFactsFirst(c.detail, rows)).toBe(true);
  });

  it("negative control: passed and level with the next, the rank says joint and names who is level", () => {
    const rows = withDays("Rema", 450).map((r) => (r.name === "Tems" ? { ...r, days: 402 } : r)).sort((a, b) => b.days - a.days);
    const c = spotifyDaysCard(rows);
    expect(c.kicker).toBe("Joint No. 2 among African artists — best placing No. 40, on 8 July 2022");
    expect(MOST.test(`${c.label} ${c.kicker}`)).toBe(false);
    expect(c.detail.endsWith(" Rema has more: 450 days. Tems has as many days as Burna Boy.")).toBe(true);
    expect(hisFactsFirst(c.detail, rows)).toBe(true);
  });

  it("a four-figure total takes its comma, as the board prints it", () => {
    expect(spotifyDaysCard(withDays(HIGHLIGHT, 1234)).value).toBe("1,234");
  });
});

describe("/stat-card renders the card", () => {
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
  });
  const size = (b: Buffer) => ({ w: b.readUInt32BE(16), h: b.readUInt32BE(20) });

  it.each([
    ["square", 1080, 1080],
    ["story", 1080, 1920],
  ] as const)("%s: a %ix%i PNG", async (ratio, w, h) => {
    // No network: the portrait answers a plain dark square.
    const dark = await sharp({ create: { width: 640, height: 640, channels: 3, background: "#0c0a09" } }).png().toBuffer();
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input instanceof Request ? input.url : input);
      if (url === BURNA_PORTRAIT) return new Response(new Uint8Array(dark), { headers: { "Content-Type": "image/png" } });
      return realFetch(input as never, init as never);
    }) as typeof fetch;
    const res = GET(new Request(`http://x/stat-card?stat=spotify-days&ratio=${ratio}`));
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("image/png");
    const b = Buffer.from(await res.arrayBuffer());
    expect(b.subarray(0, 4).toString("hex")).toBe("89504e47");
    expect(size(b)).toEqual({ w, h });
  }, 60000);
});
