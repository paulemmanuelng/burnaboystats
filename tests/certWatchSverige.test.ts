// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { ifpiSverige, parseSearch, parseRecord, searchUrl, recordUrl, queryFor, leadActsFor } from "../scripts/cert-watch/adapters/ifpi-sverige.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { identifyRow } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * Ifpi Sverige: Sverigetopplistan search (a pointer) → sys2.ifpi.se record
 * page (the register, served in ISO-8859-1). Real saved pages throughout.
 * The Tyla Water replay is in certWatchDiff.test.ts.
 */
describe("parse", () => {
  it("reads a search page: items, badges, list ids and the page's own count", () => {
    const p = parseSearch(fixture("sverige/stl-search-tyla.html"));
    expect([p.query, p.total, p.items.length]).toEqual(["tyla", 8, 8]);
    expect(p.items.find((i) => i.sart === "12096186")).toMatchObject({ title: "WATER", artist: "TYLA", badge: "SWE,Platina", certBadge: "Platina", liid: "41", format: "single" });
    const b = parseSearch(fixture("sverige/stl-search-burna-boy.html"));
    expect(b.items.find((i) => i.sart === "15311162")).toMatchObject({ title: "DAI DAI", artist: "SHAKIRA & BURNA BOY", badge: "SWE,Platina" });
    expect(b.items.find((i) => i.title === "LOVE, DAMINI")).toMatchObject({ liid: "54", format: "album", certBadge: "Guld" });
  });

  it("reads Sverigetopplistan's words for no hits as zero, not as a broken page", () => {
    const p = parseSearch(fixture("sverige/run-2026-09-24/search__seyi-vibez.html.gz"));
    expect([p.query, p.total, p.items.length]).toEqual(["Seyi Vibez", 0, 0]);
  });

  it("reads the record page as latin-1: Dai Dai, Platina - cert.nr 11317 - 2026-09-18", () => {
    const rec = parseRecord(fixture("sverige/record-15311162.html", "latin1"));
    expect(rec).toMatchObject({
      sart: "15311162",
      header: "SHAKIRA & BURNA BOY - DAI DAI",
      artist: "SHAKIRA & BURNA BOY",
      title: "DAI DAI",
      isrc: "USQX92602558",
      carrier: "3 - Download",
      label: "ACE ENTERTAINMENT",
      cert: "Platina - cert.nr 11317 - 2026-09-18",
      certNo: "11317",
      date: "2026-09-18",
      reading: { tier: "Platinum", x: 1 },
    });
    // The fields labelled "Ljudbärare:" and "Märke:" are found only when the
    // bytes are decoded as latin-1; read as UTF-8 the ä is lost.
    const wrong = parseRecord(fixture("sverige/record-15311162.html", "utf8"));
    expect([wrong.carrier, wrong.label]).toEqual([null, null]);
  });

  it("reads Tyla's Water (cert 11312), One Dance (Platina x7), and a record with no Guld/Platina field", () => {
    expect(parseRecord(fixture("sverige/record-12096186.html", "latin1"))).toMatchObject({ artist: "TYLA", title: "WATER", cert: "Platina - cert.nr 11312 - 2026-09-18" });
    expect(parseRecord(fixture("sverige/record-7549193.html", "latin1"))).toMatchObject({ artist: "DRAKE FEAT. WIZKID & KYLA", title: "ONE DANCE", reading: { tier: "Platinum", x: 7 } });
    const boom = parseRecord(fixture("sverige/record-6775561.html", "latin1"));
    expect(boom).toMatchObject({ title: "BOOM (FEAT. MOTI, TY DOLLA $IGN, WIZKID & KRANIUM)", cert: null, reading: null });
  });
});

describe("read", () => {
  // A scripted register: the saved search pages and record pages.
  const pages: Record<string, [string, BufferEncoding]> = {
    [searchUrl("Tyla")]: ["sverige/run-2026-09-24/search__tyla.html.gz", "utf8"],
    [recordUrl("12096186")]: ["sverige/run-2026-09-24/record-12096186.html", "latin1"],
    [recordUrl("12429992")]: ["sverige/run-2026-09-24/record-12429992.html", "latin1"],
  };
  const ctxFor = (over: object = {}) => {
    const calls: string[] = [];
    const ctx = {
      deep: false,
      cursor: null,
      now: new Date("2026-09-24T06:17:00Z"),
      searchTerms: ["Tyla"],
      leadActs: [],
      matches: (row: { credit: string; title: string }) => identifyRow(row, { adapterId: "ifpi-sverige", liveArtists: LIVE_ARTISTS, config, leadAliases: frozenIndex().leadAliases }).matches.length > 0,
      // Decodes as the ADAPTER asks (as http.mjs does), so a record read
      // without its latin-1 request would lose "Märke:" here too.
      request: async ({ url, encoding }: { url: string; encoding?: string }) => {
        calls.push(url);
        const hit = pages[url];
        if (!hit) return { ok: false, kind: "network", detail: `no fixture for ${url}` };
        return { ok: true, status: 200, headers: {}, body: fixture(hit[0], encoding === "latin1" ? "latin1" : "utf8") };
      },
      ...over,
    };
    return { ctx, calls };
  };

  it("opens a record for each matched item with a certification badge, and emits rows only from records", async () => {
    const { ctx, calls } = ctxFor();
    const got = await ifpiSverige.read(ctx);
    expect(calls).toEqual([searchUrl("Tyla"), recordUrl("12096186"), recordUrl("12429992")]);
    const water = got.rows.find((r) => r.rowId === "12096186")!;
    expect(water).toMatchObject({ credit: "TYLA", title: "WATER", tierRaw: "Platina - cert.nr 11312 - 2026-09-18", reading: { tier: "Platinum", x: 1 }, dateRaw: "2026-09-18", format: "single" });
    expect(water.readUrl).toContain("found via https://sverigetopplistan.se/search/?query=Tyla");
    expect(water.raw).toBe("Artist: TYLA · Titel: WATER · Prefix/Suffix: USSM12305126 · Märke: FAX RECORDS/EPIC · Guld/Platina: Platina - cert.nr 11312 - 2026-09-18");
    expect(got.cursor).toEqual({ badges: { "12096186": "SWE,Platina", "12429992": "SWE,Guld" } });
  });

  it("opens no record on a day no badge changed — and that is a clean read", async () => {
    const { ctx, calls } = ctxFor({ cursor: { badges: { "12096186": "SWE,Platina", "12429992": "SWE,Guld" } } });
    const got = await ifpiSverige.read(ctx);
    expect(calls).toEqual([searchUrl("Tyla")]);
    expect(got.rows).toEqual([]);
    expect(ifpiSverige.minRows).toBe(0);
  });

  it("opens every matched record on a deep run, badge changed or not", async () => {
    const { ctx, calls } = ctxFor({ deep: true, cursor: { badges: { "12096186": "SWE,Platina", "12429992": "SWE,Guld" } } });
    await ifpiSverige.read(ctx);
    expect(calls).toHaveLength(3);
  });

  it("says so when the record served is not the record asked for", async () => {
    const { ctx } = ctxFor();
    // LABELLED EDIT of the scripted server: Dai Dai's record served for Water's id.
    pages[recordUrl("12096186")] = ["sverige/record-15311162.html", "latin1"];
    const err = await ifpiSverige.read(ctx).catch((e: unknown) => e);
    pages[recordUrl("12096186")] = ["sverige/run-2026-09-24/record-12096186.html", "latin1"];
    expect(err).toBeInstanceOf(AdapterError);
    expect((err as AdapterError).kind).toBe("mismatch");
  });

  it("folds diacritics in the query (0 hits for Beyoncé on 24 Sep 2026) and rotates the lead acts daily", () => {
    expect(queryFor("Beyoncé")).toBe("Beyonce");
    expect(queryFor("Joé Dwèt Filé")).toBe("Joe Dwet File");
    const leads = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const days = Array.from({ length: 7 }, (_, i) => leadActsFor(leads, new Date(Date.UTC(2026, 8, 21 + i)), false));
    expect(days.flat().sort()).toEqual(leads);
    expect(leadActsFor(leads, new Date(), true)).toEqual(leads);
  });
});
