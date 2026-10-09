import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { GET as toursCsv } from "../app/api/v1/tours.csv/route";
import { GET as toursJson } from "../app/api/v1/tours/route";
import { GET as indexJson } from "../app/api/v1/route";
import ToursPage from "../app/records/tours/page";
import RevenuePage from "../app/records/tours/revenue/page";
import CountriesPage from "../app/records/tours/revenue/countries/page";
import FestivalsPage from "../app/records/tours/festivals/page";
import { DATA_DOWNLOADS, TOURS_HEADER, downloadBySlug, downloadFilename, isoOfFlag } from "../app/lib/dataDownloads";
import { lastUpdated } from "../app/lib/api";
import { CREDIT_LINE } from "../app/lib/credit";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { countryOfFlag } from "../app/lib/revenueByCountry";

/**
 * Quick win 5, tours part (design review of 8 Oct 2026, T-11): the tours
 * pages never linked the open data behind them, and the box-office board had
 * no spreadsheet beside the certifications, chart and awards files. tours.csv
 * is the Highest-grossing shows board, one row per reported gross, built the
 * way the other three are (app/lib/dataDownloads.ts); each tours page's source
 * note ends "Download CSV ↓ · JSON · CC BY 4.0 · cite as “Data from Burna Boy
 * Stats (burnaboystats.com)”" — the site's one credit line (lib/credit.ts).
 * Since J0-9 (design review 8 Oct 2026, fix 13) that note is the provenance
 * component's P3 and the line its data line, with ↗ on the two links that
 * leave the site: "Download CSV ↓ · JSON ↗ · CC BY 4.0 ↗ · cite as …".
 */

/** A strict RFC 4180 reader, as tests/dataDownloads.test.tsx's. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\r" && text[i + 1] === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; }
    else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows;
}

async function fetchCsv() {
  const res = toursCsv();
  const bytes = new Uint8Array(await res.arrayBuffer());
  const text = new TextDecoder("utf-8", { ignoreBOM: true }).decode(bytes);
  return { res, bytes, text, rows: parseCsv(text.replace(/^﻿/, "")) };
}

describe("tours.csv — the box-office board as a spreadsheet", () => {
  it("is served as a dated CSV download with a BOM, from a static route", async () => {
    const { res, bytes } = await fetchCsv();
    expect(res.headers.get("Content-Type")).toBe("text/csv; charset=utf-8");
    expect(res.headers.get("Content-Disposition")).toBe(`attachment; filename="burnaboystats-tours-${lastUpdated}.csv"`);
    expect(downloadFilename("tours")).toBe(`burnaboystats-tours-${lastUpdated}.csv`);
    expect([...bytes.slice(0, 3)]).toEqual([0xef, 0xbb, 0xbf]);
  });

  it("has one row per reported gross: every single show in board order, ranked, then every run, unranked", async () => {
    const [header, ...body] = (await fetchCsv()).rows;
    expect(header).toEqual([...TOURS_HEADER]);
    expect(body.every((r) => r.length === header.length)).toBe(true);
    const col = (name: (typeof TOURS_HEADER)[number]) => header.indexOf(name);
    const shows = body.filter((r) => r[col("kind")] === "single show");
    const runs = body.filter((r) => r[col("kind")] === "multi-night run");
    expect(shows.length).toBe(revenueShows.length);
    expect(runs.length).toBe(revenueStands.length);
    expect(body.length).toBe(downloadBySlug("tours").count);
    expect(shows.map((r) => r[col("rank")])).toEqual(revenueShows.map((_, i) => String(i + 1)));
    // A run is one combined figure; it never takes a place among single nights.
    expect(runs.every((r) => r[col("rank")] === "")).toBe(true);
    expect(shows.map((r) => Number(r[col("gross_usd")]))).toEqual(revenueShows.map((s) => s.revenue));
    expect(runs.map((r) => Number(r[col("gross_usd")]))).toEqual(revenueStands.map((s) => s.revenue));
    expect(runs.map((r) => Number(r[col("shows")]))).toEqual(revenueStands.map((s) => s.shows));
    expect(shows.map((r) => r[col("artist")])).toEqual(revenueShows.map((s) => s.artist));
    // Tickets as the count, not the published string with its comma.
    const top = revenueShows[0];
    expect(shows[0][col("tickets")]).toBe(top.tickets ? top.tickets.replace(/,/g, "") : "");
  });

  it("names each country, and its code is the flag's own letters", async () => {
    const [header, ...body] = (await fetchCsv()).rows;
    expect(isoOfFlag("🇬🇧")).toBe("GB");
    expect(isoOfFlag("🇺🇸")).toBe("US");
    const rows = [...revenueShows, ...revenueStands];
    expect(body.map((r) => r[header.indexOf("country_code")])).toEqual(rows.map((r) => isoOfFlag(r.flag)));
    expect(body.map((r) => r[header.indexOf("country")])).toEqual(rows.map((r) => countryOfFlag(r.flag).name));
    expect(body.every((r) => /^[A-Z]{2}$/.test(r[header.indexOf("country_code")]))).toBe(true);
  });

  it("publishes no row's source note (the owner's ruling: sources stay in the data)", async () => {
    const { text } = await fetchCsv();
    expect(TOURS_HEADER).not.toContain("source");
    for (const r of [...revenueShows, ...revenueStands]) expect(text).not.toContain(r.source);
    expect(text).not.toMatch(/screenshot/i);
  });

  it("is listed with the other files in /api/v1, and the tours JSON points at it", async () => {
    const index = await indexJson().json();
    expect(index.data.downloads.map((d: { path: string }) => d.path)).toContain("/api/v1/tours.csv");
    expect(DATA_DOWNLOADS.map((d) => d.slug)).toEqual(["certifications", "chart-peaks", "awards", "tours"]);
    const tours = await toursJson().json();
    expect(tours.description).toContain("/api/v1/tours.csv");
  });
});

// ── The line on each tours page's source note ─────────────────────────────
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const clean = (s: string | null | undefined) => (s ?? "").replace(/[\s ]+/g, " ").trim();
// The citation is the one credit line, word for word (design review C-17).
const LINE = `Download CSV ↓ · JSON ↗ · CC BY 4.0 ↗ · cite as “${CREDIT_LINE}”`;
const JSON_LINE = `JSON ↗ · CC BY 4.0 ↗ · cite as “${CREDIT_LINE}”`;

/** The data lines in each layout of a rendered page. */
function linesOf(page: () => React.ReactElement) {
  const doc = parse(renderToStaticMarkup(page()));
  const desktop = doc.querySelector('[class*="_desktopOnly_"]')!;
  const all = [...doc.querySelectorAll("[data-provenance] [data-provenance-data]")];
  return { desktop: all.filter((l) => desktop.contains(l)), phone: all.filter((l) => !desktop.contains(l)) };
}

describe("each tours page's source note links its data, on both layouts", () => {
  const pages: [string, () => React.ReactElement][] = [
    ["/records/tours", ToursPage],
    ["/records/tours/revenue", RevenuePage],
    ["/records/tours/revenue/countries", CountriesPage],
  ];
  for (const [path, page] of pages) {
    it(`${path}: one line in each layout, CSV and JSON linked`, () => {
      const { desktop, phone } = linesOf(page);
      for (const [tree, lines] of [["desktop", desktop], ["phone", phone]] as const) {
        expect(lines.length, `${path} ${tree}`).toBe(1);
        expect(clean(lines[0].textContent), `${path} ${tree}`).toBe(LINE);
        const csv = lines[0].querySelector('a[href="/api/v1/tours.csv"]')!;
        expect(csv, `${path} ${tree}`).not.toBeNull();
        expect(csv.getAttribute("download")).toBe(downloadFilename("tours"));
        expect(lines[0].querySelector('a[href="/api/v1/tours"]'), `${path} ${tree}`).not.toBeNull();
        expect(lines[0].querySelector('a[href="https://creativecommons.org/licenses/by/4.0/"]'), `${path} ${tree}`).not.toBeNull();
        // P3's data line: a <p> whose links carry the component's own data-link
        // class (gold, underlined on hover), not the prose-link underline.
        expect(lines[0].tagName).toBe("P");
        const links = [...lines[0].querySelectorAll("a")];
        expect(links.length).toBe(3);
        expect(links.every((a) => /dataLink/.test(a.getAttribute("class") ?? "")), `${path} ${tree}`).toBe(true);
      }
    });
  }

  it("/records/tours/festivals: the JSON only — its appearances are not in tours.csv", () => {
    const { desktop, phone } = linesOf(FestivalsPage);
    for (const lines of [desktop, phone]) {
      expect(lines.length).toBe(1);
      expect(clean(lines[0].textContent)).toBe(JSON_LINE);
      expect(lines[0].querySelector('a[href="/api/v1/tours.csv"]')).toBeNull();
      expect(lines[0].querySelector('a[href="/api/v1/tours"]')).not.toBeNull();
    }
  });

  it("no separator starts a line: each '·' is held to the word before it", () => {
    const html = renderToStaticMarkup(ToursPage());
    const line = parse(html).querySelector("[data-provenance] [data-provenance-data]")!;
    expect(line.textContent).not.toMatch(/ ·/);
    expect(line.textContent).toMatch(/ ·/);
  });
});
