import { render, within } from "@testing-library/react";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { GET as certificationsCsv } from "../app/api/v1/certifications.csv/route";
import { GET as chartPeaksCsv } from "../app/api/v1/chart-peaks.csv/route";
import { GET as awardsCsv } from "../app/api/v1/awards.csv/route";
import { GET as certificationsJson } from "../app/api/v1/certifications/route";
import { GET as chartsJson } from "../app/api/v1/charts/route";
import { GET as awardsJson } from "../app/api/v1/awards/route";
import { GET as afrobeatsJson } from "../app/api/v1/afrobeats/route";
import { GET as indexJson } from "../app/api/v1/route";
import { GET as llmsTxt } from "../app/llms.txt/route";
import PressPage from "../app/press/page";
import ApiPage from "../app/api/page";

import {
  DATA_DOWNLOADS,
  DATASET_CITATION,
  csvCell,
  dataDateLabel,
  downloadBySlug,
  downloadFilename,
  issuerVintageNote,
} from "../app/lib/dataDownloads";
import { API_CACHE_CONTROL, lastUpdated } from "../app/lib/api";
import { totalAwards, COUNTRIES as BURNA_COUNTRIES } from "../app/data/certifications";
import { chartEntryCount } from "../app/data/charts";
import { totalNominations, totalWins, pendingNominations } from "../app/data/awards";
import { sweptArtists, certCount, chartEntries, countryMeta } from "../app/data/afrobeats";
import { CERT_PROGRAMS, exclusionFor, type CertFormat } from "../app/data/certThresholds";
import {
  comparableArtists,
  priceArtist,
  PLAQUE_NOTE_HEADINGS,
  PLAQUE_NOTE_ORDER,
} from "../app/lib/certUnits";

/**
 * The CSV downloads on /press — the dataset for someone who works in Excel.
 *
 * Everything here is read the way a journalist's spreadsheet reads it: the
 * BYTES the route serves, split by an RFC 4180 parser. A check on the rows in
 * memory could not see a missing BOM (Fetch's text() strips it) or a comma
 * that shifted every column after "Love, Damini" one to the right.
 */

const ROUTES = {
  certifications: certificationsCsv,
  "chart-peaks": chartPeaksCsv,
  awards: awardsCsv,
} as const;

/** A strict RFC 4180 reader: quoted fields, doubled quotes, CRLF records. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (ch === '"') quoted = false;
      else field += ch;
    } else if (ch === '"' && field === "") quoted = true;
    else if (ch === ",") { row.push(field); field = ""; }
    else if (ch === "\r" && text[i + 1] === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; }
    else field += ch;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows;
}

async function fetchCsv(slug: keyof typeof ROUTES) {
  const res = ROUTES[slug]();
  const bytes = new Uint8Array(await res.arrayBuffer());
  const text = new TextDecoder("utf-8", { ignoreBOM: true }).decode(bytes);
  return { res, bytes, text, rows: parseCsv(text.replace(/^\uFEFF/, "")) };
}

const json = async (res: Response) => (await res.json()) as Record<string, any>;

describe("the three files", () => {
  it("serve with the headers a spreadsheet and a reuser both need", async () => {
    for (const slug of Object.keys(ROUTES) as (keyof typeof ROUTES)[]) {
      const { res } = await fetchCsv(slug);
      expect(res.headers.get("Content-Type")).toBe("text/csv; charset=utf-8");
      expect(res.headers.get("Content-Disposition")).toBe(
        `attachment; filename="burnaboystats-${slug}-${lastUpdated}.csv"`,
      );
      expect(downloadFilename(slug)).toBe(`burnaboystats-${slug}-${lastUpdated}.csv`);
      // The API's own CORS, cache and licence headers — the files are the same
      // CC BY data in another shape.
      expect(res.headers.get("Access-Control-Allow-Origin")).toBe("*");
      expect(res.headers.get("X-License")).toBe("CC-BY-4.0");
      expect(res.headers.get("Cache-Control")).toBe(API_CACHE_CONTROL);
    }
  });

  it("are prerendered like every other /api/v1 route", () => {
    for (const slug of Object.keys(ROUTES)) {
      const src = readFileSync(`app/api/v1/${slug}.csv/route.ts`, "utf8");
      expect(src).toMatch(/export const dynamic\s*=\s*"force-static"/);
    }
  });

  it("open with a UTF-8 byte-order mark, and carry accents as UTF-8", async () => {
    for (const slug of Object.keys(ROUTES) as (keyof typeof ROUTES)[]) {
      const { bytes } = await fetchCsv(slug);
      expect([...bytes.slice(0, 3)], `${slug}.csv has no BOM — Excel will read it as Windows-1252`).toEqual([0xef, 0xbb, 0xbf]);
    }
    // A real nomination title with an accent, as its UTF-8 bytes: without the
    // BOM, Excel renders this "4 KampÃ© II (Remix)".
    const { bytes, rows } = await fetchCsv("awards");
    const kampe = new TextEncoder().encode("4 Kampé II (Remix)");
    const hay = Buffer.from(bytes);
    expect(hay.indexOf(Buffer.from(kampe))).toBeGreaterThan(0);
    expect(rows.some((r) => r[3] === "4 Kampé II (Remix)")).toBe(true);
  });

  it("carry exactly the published headers", async () => {
    const HEADERS = {
      certifications:
        "artist,release,credit,format,kind,country_code,country,certifying_body,level,multiplier,certified_units,units_note,priced,unpriced_reason,register_url,verified_on,source,plus_level",
      "chart-peaks":
        "artist,release,credit,format,kind,country_code,country,chart,peak,weeks_at_peak,weeks_on_chart,note",
      awards: "ceremony,year,category,work,result",
    };
    for (const [slug, header] of Object.entries(HEADERS)) {
      const { text } = await fetchCsv(slug as keyof typeof ROUTES);
      expect(text.slice(1, text.indexOf("\r\n"))).toBe(header);
    }
  });

  it("give every record exactly as many fields as the header", async () => {
    for (const slug of Object.keys(ROUTES) as (keyof typeof ROUTES)[]) {
      const { rows } = await fetchCsv(slug);
      const width = rows[0].length;
      const ragged = rows.filter((r) => r.length !== width);
      expect(ragged.slice(0, 3), `${slug}.csv has rows of the wrong width`).toEqual([]);
    }
  });
});

describe("row counts are the site's own counts", () => {
  it("certifications: Burna Boy's plaques plus the board's", async () => {
    const { rows } = await fetchCsv("certifications");
    const body = rows.slice(1);
    const board = sweptArtists.reduce((n, a) => n + certCount(a), 0);
    expect(body.filter((r) => r[0] === "Burna Boy").length).toBe(totalAwards());
    expect(body.filter((r) => r[0] !== "Burna Boy").length).toBe(board);
    expect(body.length).toBe(totalAwards() + board);
    // Every board artist is in the file, under their own name.
    for (const a of sweptArtists)
      expect(body.filter((r) => r[0] === a.name).length, a.name).toBe(certCount(a));
    // And the page's advertised count is the file's length.
    expect(DATA_DOWNLOADS.find((d) => d.slug === "certifications")!.count).toBe(body.length);
  });

  it("chart peaks: every official chart entry, his and the board's", async () => {
    const { rows } = await fetchCsv("chart-peaks");
    const body = rows.slice(1);
    const board = sweptArtists.reduce((n, a) => n + chartEntries(a), 0);
    expect(body.filter((r) => r[0] === "Burna Boy").length).toBe(chartEntryCount);
    expect(body.length).toBe(chartEntryCount + board);
    expect(DATA_DOWNLOADS.find((d) => d.slug === "chart-peaks")!.count).toBe(body.length);
  });

  it("awards: every nomination, with won/pending/nominated reconciling to the site", async () => {
    const { rows } = await fetchCsv("awards");
    const body = rows.slice(1);
    expect(body.length).toBe(totalNominations);
    expect(body.filter((r) => r[4] === "won").length).toBe(totalWins);
    expect(body.filter((r) => r[4] === "pending").length).toBe(pendingNominations);
    expect(body.filter((r) => r[4] === "nominated").length).toBe(
      totalNominations - totalWins - pendingNominations,
    );
    expect(new Set(body.map((r) => r[4]))).toEqual(new Set(["won", "pending", "nominated"]));
  });
});

describe("RFC 4180 quoting", () => {
  it("keeps a real title with a comma in one field", async () => {
    const { text, rows } = await fetchCsv("certifications");
    // "Love, Damini" — his 2022 album, and exactly the title a naive join splits.
    expect(text).toContain('Burna Boy,"Love, Damini",Burna Boy,album,Albums,');
    const row = rows.find((r) => r[1] === "Love, Damini");
    expect(row).toBeDefined();
    expect(row!.length).toBe(rows[0].length);
    // Negative control: the same row joined without quoting is one field too
    // wide, which is the defect the quoting exists to prevent.
    const naive = row!.join(",");
    expect(parseCsv(naive)[0].length).toBe(rows[0].length + 1);
  });

  it("doubles a double quote inside a field", () => {
    // The HTML credit /press actually ships beside its Copy HTML button.
    const SHIPPED = 'Data: <a href="https://burnaboystats.com">Burna Boy Stats</a>';
    expect(readFileSync("app/press/page.tsx", "utf8")).toContain(`'${SHIPPED}'`);
    const cell = csvCell(SHIPPED);
    expect(cell).toBe('"Data: <a href=""https://burnaboystats.com"">Burna Boy Stats</a>"');
    expect(parseCsv(`${cell},x`)[0]).toEqual([SHIPPED, "x"]);
  });

  it("writes blank, not zero, for a figure nobody published", () => {
    expect(csvCell(null)).toBe("");
    expect(csvCell(undefined)).toBe("");
    expect(csvCell(0)).toBe("0");
  });
});

describe("figures match /api/v1", () => {
  it("Dai Dai's US plaque is RIAA Latin 6x Platinum, 360,000 units — as the JSON says", async () => {
    const { rows } = await fetchCsv("certifications");
    const [h, ...body] = rows;
    const col = (r: string[], k: string) => r[h.indexOf(k)];
    const csv = body.find((r) => r[0] === "Burna Boy" && r[1] === "Dai Dai" && col(r, "country_code") === "US")!;
    const api = (await json(certificationsJson())).data.releases
      .find((r: any) => r.title === "Dai Dai")
      .certifications.find((c: any) => c.countryCode === "US");
    expect(col(csv, "certifying_body")).toBe(api.body);
    expect(col(csv, "level")).toBe(api.level);
    expect(Number(col(csv, "multiplier"))).toBe(api.multiplier);
    expect(col(csv, "country")).toBe(api.country);
    expect(col(csv, "credit")).toBe("Shakira & Burna Boy");
    // Anchored to the RIAA's own register (6× Platino, 23 Sep 2026, #320), not
    // to the data module: RIAA Latin's 6x Platino is 360,000 units (60,000
    // each), never the standard programme's 6,000,000.
    expect(col(csv, "multiplier")).toBe("6");
    expect(col(csv, "certified_units")).toBe("360000");
    expect(col(csv, "priced")).toBe("true");
  });

  it("Ayra Starr's Santa matches /api/v1/afrobeats — 16x Platino, 960,000 units", async () => {
    const { rows } = await fetchCsv("certifications");
    const [h, ...body] = rows;
    const col = (r: string[], k: string) => r[h.indexOf(k)];
    const csv = body.find((r) => r[0] === "Ayra Starr" && r[1] === "Santa" && col(r, "country_code") === "US")!;
    const api = (await json(afrobeatsJson())).data.artists
      .find((a: any) => a.name === "Ayra Starr")
      .releases.find((r: any) => r.title === "Santa")
      .certifications.find((c: any) => c.countryCode === "US");
    expect(col(csv, "certifying_body")).toBe(api.body);
    expect(col(csv, "level")).toBe(api.level);
    expect(Number(col(csv, "multiplier"))).toBe(api.multiplier);
    expect(col(csv, "kind")).toBe("Lead singles");
    expect(col(csv, "certified_units")).toBe("960000");
  });

  it("an unpriceable plaque is listed with its reason, never scored", async () => {
    const { rows } = await fetchCsv("certifications");
    const [h, ...body] = rows;
    const col = (r: string[], k: string) => r[h.indexOf(k)];
    const co = body.find((r) => r[1] === "Dai Dai" && col(r, "country_code") === "CO")!;
    expect(col(co, "priced")).toBe("false");
    expect(col(co, "certified_units")).toBe("");
    expect(col(co, "unpriced_reason").length).toBeGreaterThan(0);
  });

  it("Dai Dai's chart rows carry the peak and longevity /api/v1/charts publishes", async () => {
    const { rows } = await fetchCsv("chart-peaks");
    const [h, ...body] = rows;
    const col = (r: string[], k: string) => r[h.indexOf(k)];
    const api = (await json(chartsJson())).data.releases.find((r: any) => r.title === "Dai Dai");
    for (const e of api.entries.slice(0, 3)) {
      const csv = body.find((r) => r[0] === "Burna Boy" && r[1] === "Dai Dai" && col(r, "country_code") === e.countryCode)!;
      expect(col(csv, "country")).toBe(e.country);
      expect(col(csv, "chart")).toBe(e.chart ?? "");
      expect(Number(col(csv, "peak"))).toBe(e.peak);
      expect(col(csv, "weeks_at_peak")).toBe(e.weeksAtPeak === undefined ? "" : String(e.weeksAtPeak));
      expect(col(csv, "weeks_on_chart")).toBe(e.weeks === undefined ? "" : String(e.weeks));
    }
  });

  it("every one of his certification and chart rows reconciles to the JSON, not just the samples", async () => {
    const cert = (await fetchCsv("certifications")).rows.slice(1).filter((r) => r[0] === "Burna Boy");
    const apiCerts = (await json(certificationsJson())).data.releases.flatMap((r: any) =>
      r.certifications.map((c: any) => [r.title, c.countryCode, c.body, c.level, String(c.multiplier)].join("|")),
    );
    expect(cert.map((r) => [r[1], r[5], r[7], r[8], r[9]].join("|")).sort()).toEqual([...apiCerts].sort());

    const chart = (await fetchCsv("chart-peaks")).rows.slice(1).filter((r) => r[0] === "Burna Boy");
    const apiCharts = (await json(chartsJson())).data.releases.flatMap((r: any) =>
      r.entries.map((e: any) => [r.title, e.countryCode, e.chart ?? "", String(e.peak)].join("|")),
    );
    expect(chart.map((r) => [r[1], r[5], r[7], r[8]].join("|")).sort()).toEqual([...apiCharts].sort());
  });

  it("the Grammy for Twice as Tall reads won, as /api/v1/awards has it", async () => {
    const { rows } = await fetchCsv("awards");
    const csv = rows.find((r) => r[0] === "Grammy Awards" && r[1] === "2021" && r[3] === "Twice as Tall")!;
    const api = (await json(awardsJson())).data.nominations.find(
      (n: any) => n.ceremony === "Grammy Awards" && n.year === 2021 && n.work === "Twice as Tall",
    );
    expect(csv[2]).toBe(api.category);
    expect(api.won).toBe(true);
    expect(csv[4]).toBe("won");
  });
});

/** certifications.csv, read the way a spreadsheet reads it, with a by-name
 *  column getter. */
async function certSheet() {
  const [h, ...body] = (await fetchCsv("certifications")).rows;
  const col = (r: string[], k: string) => {
    const i = h.indexOf(k);
    if (i < 0) throw new Error(`no ${k} column`);
    return r[i];
  };
  const find = (artist: string, release: string, country: string) => {
    const hits = body.filter((r) => col(r, "artist") === artist && col(r, "release") === release && col(r, "country_code") === country);
    expect(hits.length, `${artist} / ${release} / ${country}`).toBe(1);
    return hits[0];
  };
  return { h, body, col, find };
}

describe("units_note carries the notes /compare prints beside the same figure", () => {
  type NoteKey = (typeof PLAQUE_NOTE_ORDER)[number];
  // The artists the file carries: Burna Boy and the swept board.
  const inFile = comparableArtists.filter(
    (a) => a.slug === "burna-boy" || sweptArtists.some((s) => s.slug === a.slug),
  );
  const plaqueKey = (artist: string, release: string, format: string, country: string, program: string) =>
    [artist, release, format, country, program].join("|");

  /** What the ENGINE flags, read off its own lines: price each release alone,
   *  Nigeria and features in — /compare's song-against-song view, where a line
   *  is one plaque — and collect the lines carrying each mark. priceArtist
   *  and the CSV share plaqueNotes, so this proves the CSV says what /compare
   *  says; the real-row checks below are what catch a bug in plaqueNotes
   *  itself. */
  const engine = (() => {
    const sets = Object.fromEntries(PLAQUE_NOTE_ORDER.map((k) => [k, new Set<string>()])) as Record<NoteKey, Set<string>>;
    for (const a of inFile)
      for (const r of a.releases) {
        const p = priceArtist({ ...a, releases: [r] }, { includeNigeria: true, includeFeatures: true });
        for (const line of p.byCountry)
          for (const k of PLAQUE_NOTE_ORDER)
            if (line[k]) sets[k].add(plaqueKey(a.name, r.title, r.format, line.country, line.program ?? ""));
      }
    return sets;
  })();

  // A label's row names the register its units are priced at instead of
  // "This body" (3 Oct 2026) — the same ‡ note, read back to its heading here.
  const parts = (r: string[], col: (r: string[], c: string) => string) =>
    col(r, "units_note")
      .split("; ")
      .map((p) => (p === issuerVintageNote(countryMeta(col(r, "country_code")).body) ? PLAQUE_NOTE_HEADINGS.vintage : p));

  it("flags exactly the plaques the engine flags, note by note", async () => {
    const { body, col } = await certSheet();
    for (const k of PLAQUE_NOTE_ORDER) {
      const label = PLAQUE_NOTE_HEADINGS[k];
      const csv = new Set(
        body
          .filter((r) => parts(r, col).includes(label))
          .map((r) => {
            const b = col(r, "certifying_body");
            return plaqueKey(col(r, "artist"), col(r, "release"), col(r, "format"), col(r, "country_code"), CERT_PROGRAMS[b] ? b : "");
          }),
      );
      // Each note is live in the data — otherwise the equality below is vacuous.
      expect(engine[k].size, `the engine flags no ${k}`).toBeGreaterThan(0);
      expect([...csv].sort(), label).toEqual([...engine[k]].sort());
    }
  });

  it("uses /compare's own headings, in the order its marks run, and nothing else", async () => {
    const src = readFileSync("app/compare/page.tsx", "utf8");
    for (const k of PLAQUE_NOTE_ORDER) expect(src).toContain(`{PLAQUE_NOTE_HEADINGS.${k}}`);
    const { body, col } = await certSheet();
    const order = PLAQUE_NOTE_ORDER.map((k) => PLAQUE_NOTE_HEADINGS[k]);
    for (const r of body) {
      const note = col(r, "units_note");
      if (!note) continue;
      const ps = parts(r, col);
      for (const p of ps) expect(order, note).toContain(p);
      expect(ps, note).toEqual([...ps].sort((x, y) => order.indexOf(x) - order.indexOf(y)));
    }
  });

  it("a label's row names the register it is priced at, not 'This body' (3 Oct 2026)", async () => {
    const { body, col, find } = await certSheet();
    const issuerRows = body.filter((r) => col(r, "source") === "label" && col(r, "certified_units") !== "");
    expect(issuerRows.length).toBeGreaterThan(10); // Tyla's ten, Tems's No.1, Burna's 19×
    for (const r of issuerRows) {
      expect(col(r, "units_note"), col(r, "release")).not.toContain(PLAQUE_NOTE_HEADINGS.vintage);
      expect(col(r, "units_note"), col(r, "release")).toContain("Priced at RiSA's thresholds — RiSA raised its thresholds since 2015");
    }
    // Negative control, the cell that shipped on Tyla's "Water".
    expect(col(find("Tyla", "Water", "ZA"), "units_note")).not.toBe("This body raised its thresholds since 2015");
    // A register row keeps /compare's heading: RiSA is the body there.
    const registerZa = body.find((r) => col(r, "country_code") === "ZA" && col(r, "source") === "register" && col(r, "units_note"))!;
    expect(col(registerZa, "units_note")).toContain(PLAQUE_NOTE_HEADINGS.vintage);
  });

  it("real rows: the Greek, Swedish, Polish and New Zealand plaques /compare marks", async () => {
    const { col, find } = await certSheet();
    // Greece is priced at IFPI's June 2013 level — ¶, and nothing else here.
    expect(col(find("Burna Boy", "Dai Dai", "GR"), "units_note")).toBe(PLAQUE_NOTE_HEADINGS.historic);
    // Sweden's § is its SINGLES' stream ratio: Gbona carries it, his album
    // Gold does not.
    expect(col(find("Burna Boy", "Gbona", "SE"), "units_note")).toContain(PLAQUE_NOTE_HEADINGS.assumed);
    expect(col(find("Burna Boy", "Love, Damini", "SE"), "units_note")).toBe("");
    // Poland's ¶ is its singles' 2 zł rate: Dai Dai carries it, Rema's album
    // does not (its ‡ stands — ZPAV raised its album levels in 2025).
    expect(col(find("Burna Boy", "Dai Dai", "PL"), "units_note")).toContain(PLAQUE_NOTE_HEADINGS.historic);
    expect(col(find("Rema", "Rave & Roses", "PL"), "units_note")).not.toContain(PLAQUE_NOTE_HEADINGS.historic);
    expect(col(find("Rema", "Rave & Roses", "PL"), "units_note")).toContain(PLAQUE_NOTE_HEADINGS.vintage);
    // RMNZ defines no multiple: Last Last's 3x Platinum is priced as 3 × base.
    const lastLast = find("Burna Boy", "Last Last", "NZ");
    expect(col(lastLast, "multiplier")).toBe("3");
    expect(col(lastLast, "units_note")).toBe(PLAQUE_NOTE_HEADINGS.caveat);
  });

  it("stays blank on a programme's plaque and on an unpriced one", async () => {
    const { col, find } = await certSheet();
    // RIAA Latin publishes its own scale for multiples, so a 6x Platino
    // assumes nothing.
    const us = find("Burna Boy", "Dai Dai", "US");
    expect(Number(col(us, "multiplier"))).toBeGreaterThan(1);
    expect(col(us, "units_note")).toBe("");
    // No figure, nothing to qualify — unpriced_reason speaks for it.
    const co = find("Burna Boy", "Dai Dai", "CO");
    expect(col(co, "certified_units")).toBe("");
    expect(col(co, "units_note")).toBe("");
  });

  it("units are blank ONLY where the body publishes no threshold, as /press says", async () => {
    const { body, col } = await certSheet();
    for (const r of body) {
      const blank = col(r, "certified_units") === "";
      expect(col(r, "priced"), `${col(r, "release")} ${col(r, "country_code")}`).toBe(blank ? "false" : "true");
      expect(col(r, "unpriced_reason") !== "", `${col(r, "release")} ${col(r, "country_code")}`).toBe(blank);
      if (blank) {
        const b = col(r, "certifying_body");
        expect(
          exclusionFor(col(r, "country_code"), col(r, "format") as CertFormat, CERT_PROGRAMS[b] ? b : undefined),
          `${col(r, "release")} ${col(r, "country_code")} is blank but its body publishes a threshold`,
        ).not.toBeNull();
      }
    }
  });
});

describe("register_url links only a register that can show the plaque", () => {
  it("Dai Dai's Colombian Gold, issued by Sony Music Colombia, gets no Pro Música link", async () => {
    const { col, find } = await certSheet();
    const co = find("Burna Boy", "Dai Dai", "CO");
    expect(col(co, "certifying_body")).toBe("Sony Music Colombia");
    // Negative control: the country's own register exists and is Pro
    // Música's — the blank is the issuer override's doing, not a missing link.
    expect(BURNA_COUNTRIES.CO.url).toMatch(/pro-musica\.co/);
    expect(col(co, "register_url")).toBe("");
    // A Colombian plaque Pro Música did award keeps its register.
    expect(col(find("Rema", "Bubalu", "CO"), "register_url")).toBe(countryMeta("CO").url);
  });

  it("RIAA Latin, a programme of the RIAA's own, keeps the RIAA register", async () => {
    const { col, find } = await certSheet();
    const us = find("Burna Boy", "Dai Dai", "US");
    expect(col(us, "certifying_body")).toBe("RIAA Latin");
    expect(col(us, "register_url")).toBe(BURNA_COUNTRIES.US.url);
    expect(col(find("Ayra Starr", "Santa", "US"), "register_url")).toBe(countryMeta("US").url);
  });

  it("Tyla's album Or, announced by SNEP on X but not in its database, gets no SNEP link", async () => {
    // source: "announcement" (3 Oct 2026). The body is SNEP itself — no issuer
    // override — but a link to snepmusique.com's search would find nothing.
    const { col, find } = await certSheet();
    const fr = find("Tyla", "Tyla", "FR");
    expect(col(fr, "certifying_body")).toBe("SNEP");
    expect(col(fr, "register_url")).toBe("");
    // Negative control: her French singles ARE database rows and keep the link.
    expect(col(find("Tyla", "Water", "FR"), "register_url")).toBe(countryMeta("FR").url);
  });

  it("every other row carries its country's register", async () => {
    const { body, col } = await certSheet();
    // The body's own publication, its register not yet listing the row: no
    // register link (Dai Dai 🇩🇰 since 5 Oct 2026, C-05).
    const announced = new Set(["Tyla|Tyla|FR", "Burna Boy|Dai Dai|DK"]);
    for (const r of body) {
      const c = col(r, "country_code");
      const country = col(r, "artist") === "Burna Boy" ? BURNA_COUNTRIES[c] : countryMeta(c);
      const b = col(r, "certifying_body");
      if (announced.has(`${col(r, "artist")}|${col(r, "release")}|${c}`)) continue;
      const otherIssuer = b !== country.body && !CERT_PROGRAMS[b];
      expect(col(r, "register_url"), `${col(r, "release")} ${c}`).toBe(otherIssuer ? "" : (country.url ?? ""));
    }
  });
});

describe("source says what each plaque was read from (PR #400 review)", () => {
  it("names exactly the plaques that are not register rows", async () => {
    const { body, col } = await certSheet();
    const off = body
      .filter((r) => col(r, "source") !== "register")
      .map((r) => `${col(r, "artist")}|${col(r, "release")}|${col(r, "country_code")}|${col(r, "source")}`)
      .sort();
    expect(off).toEqual(
      [
        "Burna Boy|Dai Dai|CO|label",
        // Read on Hitlisten, IFPI Danmark's chart; its register had no row on
        // 5 Oct 2026. The CSV said "register", with a register link that finds
        // nothing, until then (C-05/D-02).
        "Burna Boy|Dai Dai|DK|announcement",
        "Burna Boy|All Eyes on Me|ZA|label",
        "Tems|No.1|ZA|label",
        "Tyla|Tyla|FR|announcement",
        ...["Tyla", "Water", "Push 2 Start", "Truth or Dare", "Jump", "Art", "No.1", "Safer", "Water (Remix) (ft. Travis Scott)", "Chanel"].map(
          (t) => `Tyla|${t}|ZA|label`,
        ),
      ].sort(),
    );
    // Negative control: a register row says so, and every row has a value.
    expect(col(body.find((r) => col(r, "release") === "Water" && col(r, "country_code") === "FR" && col(r, "artist") === "Tyla")!, "source")).toBe("register");
    for (const r of body) expect(["register", "label", "announcement"]).toContain(col(r, "source"));
  });
});

describe("kind, and the column that filters across artists", () => {
  const SPLIT = new Set(["Albums", "Lead singles", "Featured appearances"]);

  it("certifications.csv uses one vocabulary for everyone", async () => {
    const { body, col } = await certSheet();
    expect(new Set(body.map((r) => col(r, "kind")))).toEqual(SPLIT);
    for (const r of body) expect(col(r, "format")).toBe(col(r, "kind") === "Albums" ? "album" : "single");
  });

  it("chart-peaks.csv: his rows split lead from featured, the board's cannot, and says so", async () => {
    const [h, ...body] = (await fetchCsv("chart-peaks")).rows;
    const col = (r: string[], k: string) => r[h.indexOf(k)];
    const kinds = (burna: boolean) => new Set(body.filter((r) => (col(r, "artist") === "Burna Boy") === burna).map((r) => col(r, "kind")));
    expect(kinds(true)).toEqual(SPLIT);
    // The board's chart data records Singles / Albums only. If it ever gains a
    // lead-or-featured split, this fails and the description below is rewritten.
    expect(kinds(false)).toEqual(new Set(["Singles", "Albums"]));
    // format is the same two values on every row, whoever's it is.
    for (const r of body) expect(col(r, "format")).toBe(col(r, "kind") === "Albums" ? "album" : "single");
    const what = downloadBySlug("chart-peaks").what;
    expect(what).toMatch(/Filter across artists on format/);
    expect(what).toMatch(/kind splits Burna Boy's singles into lead and featured/);
  });
});

describe("awards: the description and the values agree", () => {
  it("names every result the file holds, and no result it does not", async () => {
    const { rows } = await fetchCsv("awards");
    const values = new Set(rows.slice(1).map((r) => r[4]));
    const what = downloadBySlug("awards").what;
    for (const v of values) expect(what).toMatch(new RegExp(`\\b${v}\\b`));
    // Negative control: the line the file first shipped with promised a
    // "lost" the file never writes.
    expect(values.has("lost")).toBe(false);
    expect(what).not.toContain("won, lost or is still pending");
    expect(what).not.toMatch(/\blost\b/);
  });

  it("/api/v1/awards says what ITS rows do, and points to the file that splits them", async () => {
    const res = await json(awardsJson());
    // The JSON carries `won` alone — no result field to separate a loss from a
    // pending one — so it must say it does not, and not that nothing can.
    expect(res.data.nominations.every((n: any) => !("result" in n))).toBe(true);
    expect(res.description).not.toContain("the dataset does not distinguish them");
    expect(res.description).toContain("this endpoint does not separate the two");
    expect(res.description).toContain(downloadBySlug("awards").path);
  });
});

describe("/press offers the downloads", () => {
  // /press renders TWO trees since 30 Sep 2026 (design response items 42 and
  // 62): the phone screen, then the desktop column inside .desktopOnly, which
  // is display:none below 900px. This block used to rest on the page being one
  // responsive tree; that premise is gone, so every check below now runs on
  // BOTH trees — a download that exists in one layout only is a download half
  // the readers never see.
  const pressTrees = () => {
    const { container } = render(<PressPage />);
    const desktop = container.querySelector('[class*="desktopOnly"]') as HTMLElement;
    const sections = [...container.querySelectorAll("section")].filter((s) =>
      /^(m-)?downloads$/.test(s.getAttribute("aria-labelledby") ?? ""),
    ) as HTMLElement[];
    const inDesktop = sections.filter((s) => desktop?.contains(s));
    const inPhone = sections.filter((s) => !desktop?.contains(s));
    return { container, desktop, inDesktop, inPhone };
  };

  /** What a tree must hold. Throws with a message naming the tree. */
  const expectDownloads = (section: HTMLElement, tree: string) => {
    expect(within(section).getByRole("heading", { level: 2 }).textContent, tree).toBe("Download the data");
    const links = [...section.querySelectorAll("a[download]")] as HTMLAnchorElement[];
    expect(links.map((a) => a.getAttribute("href")), tree).toEqual([
      "/api/v1/certifications.csv",
      "/api/v1/chart-peaks.csv",
      "/api/v1/awards.csv",
    ]);
    for (const d of DATA_DOWNLOADS) {
      const a = links.find((l) => l.getAttribute("href") === d.path)!;
      expect(a.getAttribute("download"), tree).toBe(downloadFilename(d.slug));
      // The whole row is the link (item 50): the file, its count and its full
      // description are all inside it.
      expect(a.textContent!.replace(/\s+/g, " "), tree).toContain(
        `${d.slug}.csv · ${d.count.toLocaleString("en-GB")} ${d.countOf}`,
      );
      expect(a.textContent, tree).toContain(d.what);
    }
    // The citation fills in the data date, and the page prints it.
    expect(DATASET_CITATION).toContain(dataDateLabel);
    expect(section.textContent, tree).toContain(DATASET_CITATION);
    expect(within(section).getByRole("heading", { level: 3 }).textContent, tree).toBe("How to cite");
    expect(section.querySelector('a[href="/methodology"]'), tree).not.toBeNull();
    expect(section.textContent, tree).toMatch(/floor/);
    expect(section.textContent, tree).toMatch(/TCSN/);
  };

  it("renders the section once in each tree: the phone screen and the desktop column", () => {
    const { desktop, inDesktop, inPhone } = pressTrees();
    expect(desktop, "no desktop tree").not.toBeNull();
    expect(inDesktop.length, "downloads missing from the desktop tree").toBe(1);
    expect(inPhone.length, "downloads missing from the phone tree").toBe(1);
  });

  it("negative control: the single tree /press shipped would fail the two-tree check", () => {
    // The row as it shipped until 30 Sep 2026, one copy, no .desktopOnly and no
    // phone screen around it.
    const shipped = document.createElement("div");
    shipped.innerHTML =
      '<main><section aria-labelledby="downloads"><h2 id="downloads">Download the data</h2>' +
      '<div><code>certifications.csv · 1 plaques</code><a href="/api/v1/certifications.csv" download="x.csv">Download</a></div>' +
      "</section></main>";
    const desktop = shipped.querySelector('[class*="desktopOnly"]');
    expect(desktop).toBeNull();
    const sections = [...shipped.querySelectorAll('section[aria-labelledby$="downloads"]')];
    expect(sections.filter((s) => desktop?.contains(s)).length).not.toBe(1);
  });

  it("links each file, with its derived count, a download name and the citation — in both trees", () => {
    const { inDesktop, inPhone } = pressTrees();
    expectDownloads(inDesktop[0], "desktop");
    expectDownloads(inPhone[0], "phone");
  });

  it("derives the artist counts in each description from the board", () => {
    // "{19} artists" and "{20} artists" are slots (item 72): read off the
    // swept board, never typed.
    expect(downloadBySlug("certifications").what).toContain(
      `Every plaque for Burna Boy and the ${sweptArtists.length} artists on the Afrobeats Board`,
    );
    expect(downloadBySlug("chart-peaks").what).toContain(
      `Every official chart entry for the same ${sweptArtists.length + 1} artists`,
    );
    expect(readFileSync("app/lib/dataDownloads.ts", "utf8")).not.toMatch(/the \d+ artists on the Afrobeats Board/);
  });

  it("says truthfully when units are blank, and points to units_note — in both trees", () => {
    const { inDesktop, inPhone } = pressTrees();
    for (const [section, tree] of [
      [inDesktop[0], "desktop"],
      [inPhone[0], "phone"],
    ] as const) {
      const text = section.textContent!.replace(/\s+/g, " ");
      // Negative control, the line this section first shipped: Greece, Poland's
      // singles, Sweden and Mexico are all priced on a figure their body does not
      // print today, and none of them is blank.
      expect(text, tree).not.toContain("blank where the body publishes none");
      // The columns it names are real columns of the file.
      for (const c of ["units_note", "unpriced_reason"]) {
        expect(text, tree).toContain(`${c} `);
        expect(downloadBySlug("certifications").header).toContain(c);
      }
      expect(text, tree).toContain("Units are blank only where a body publishes no threshold at all");
      expect(section.querySelector('a[href="/compare"]'), tree).not.toBeNull();
    }
  });

  it("dates the citation from the data, the same day the page says it was reviewed", () => {
    const { container } = render(<PressPage />);
    const reviewed = [...container.textContent!.matchAll(/Data last reviewed\s*(\d{1,2} \w+ \d{4})/g)].map((m) => m[1]);
    // Once per tree, and both the data's date.
    expect(reviewed).toEqual([dataDateLabel, dataDateLabel]);
  });
});

describe("/api lists the files in both layouts, and in the directory", () => {
  it("desktop and phone trees each link all three", () => {
    const { container } = render(<ApiPage />);
    const desktop = container.querySelector('[class*="desktopOnly"]') as HTMLElement;
    expect(desktop).not.toBeNull();
    for (const d of DATA_DOWNLOADS) {
      const all = [...container.querySelectorAll(`a[href="${d.path}"]`)];
      const inDesktop = all.filter((a) => desktop.contains(a));
      expect(inDesktop.length, `${d.path} missing from the desktop tree`).toBe(1);
      expect(all.length - inDesktop.length, `${d.path} missing from the phone tree`).toBe(1);
      for (const a of all) expect(a.getAttribute("download")).toBe(downloadFilename(d.slug));
    }
  });

  it("names them in /api/v1 and llms.txt", async () => {
    const index = (await json(indexJson())).data;
    expect(index.downloads.map((d: any) => d.path)).toEqual(DATA_DOWNLOADS.map((d) => d.path));
    // Not among the JSON endpoints — a consumer iterating those expects JSON.
    expect(index.endpoints.some((e: any) => e.path.endsWith(".csv"))).toBe(false);
    const txt = await llmsTxt().text();
    for (const d of DATA_DOWNLOADS) expect(txt).toContain(`https://burnaboystats.com${d.path}`);
  });

  it("stay out of the sitemap, which lists pages only", () => {
    expect(readFileSync("app/sitemap.ts", "utf8")).not.toMatch(/\.csv/);
  });
});
