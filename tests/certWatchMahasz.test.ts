// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { mahasz, parseRows, parseAward, readYear, readSearch, searchBody, yearUrl, SEARCH } from "../scripts/cert-watch/adapters/mahasz.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { verdict } from "../scripts/cert-watch/health.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * MAHASZ on REAL saved pages (PROVENANCE.json): the 2026 database page and
 * the Kereső searches from the live dry run of 24 Sep 2026.
 */
const y2026 = fixture("mahasz/run-2026-09-24/adatbazis-2026.html.gz");
const ok = (body: string) => ({ ok: true, status: 200, headers: {}, body, url: "x" });
const catchErr = (f: () => unknown) => {
  try {
    f();
  } catch (e) {
    return e as AdapterError;
  }
  return null;
};

describe("parse", () => {
  it("reads the 2026 page: 269 rows, all of 2026, every award parsed; the daily control is there", () => {
    const rows = readYear(ok(y2026), 2026);
    expect(rows).toHaveLength(269);
    expect(rows.filter((r) => !r.reading)).toEqual([]);
    const dai = rows.filter(mahasz.control.find);
    expect(dai).toHaveLength(1);
    expect(dai[0]).toMatchObject({ credit: "Shakira x Burna Boy", title: "Dai Dai", tierRaw: "fas fa-play fa-rotate-270", reading: { tier: "Platinum", x: 1 }, dateRaw: "2026", format: "unknown" });
    expect(dai[0].raw).toBe("Shakira x Burna Boy | Dai Dai | (Sony Music) | fas fa-play fa-rotate-270 | 2026");
  });

  it("reads the award icons in the register's own legend", () => {
    // Real cells from the 2026 page.
    expect(parseAward('<i class="fas fa-circle"></i>')).toMatchObject({ raw: "fas fa-circle", reading: { tier: "Gold", x: 1 } });
    expect(parseAward('<i class="fas fa-play fa-rotate-270"></i>').reading).toEqual({ tier: "Platinum", x: 1 });
    expect(parseAward('<i class="fas fa-play fa-rotate-270"></i><span class="arany_platina_db">2</span>')).toMatchObject({ raw: "fas fa-play fa-rotate-270 · arany_platina_db 2", reading: { tier: "Platinum", x: 2 } });
    // A never-seen icon is left unparsed, never guessed.
    expect(parseAward('<i class="fas fa-star"></i>').reading).toBeNull();
  });

  it("a page of another year, served for 2026, is a different page", () => {
    // LABELLED EDIT of the real 2026 page: one row's year printed as 2025.
    const edited = y2026.replace('<td class="ap_dij_ev">2026</td>', '<td class="ap_dij_ev">2025</td>');
    const e = catchErr(() => readYear(ok(edited), 2026))!;
    expect(e.kind).toBe("mismatch");
  });

  it("the Kereső answer for 'Burna Boy' is the Dai Dai row; an empty answer is valid and says nothing", () => {
    const burna = readSearch(ok(fixture("mahasz/run-2026-09-24/kereso__burna-boy.html")), "Burna Boy");
    expect(burna.map((r) => r.raw)).toEqual(["Shakira x Burna Boy | Dai Dai | (Sony Music) | fas fa-play fa-rotate-270 | 2026"]);
    expect(readSearch(ok(fixture("mahasz/run-2026-09-24/kereso__wizkid.html")), "Wizkid")).toEqual([]);
  });

  it("a bot wall or a decoy is never an empty read", () => {
    expect(catchErr(() => readYear(ok(fixture("decoy/za-risa-browser.html")), 2026))!.kind).toBe("challenge");
    expect(catchErr(() => readSearch(ok(fixture("decoy/za-risa-browser.html")), "Tyla"))!.kind).toBe("challenge");
  });

  it("parses nothing from a page without rows", () => {
    expect(parseRows("<html></html>", "x")).toEqual([]);
  });
});

describe("read", () => {
  const serve = () => {
    const calls: string[] = [];
    const request = async ({ url, method = "GET", body }: { url: string; method?: string; body?: string }) => {
      calls.push(`${method} ${url}${body ? ` ${body}` : ""}`);
      if (url === SEARCH) return ok(fixture("mahasz/run-2026-09-24/kereso__burna-boy.html"));
      return ok(y2026);
    };
    return { calls, request };
  };

  it("reads this year's page daily, and the Kereső for each term on deep runs", async () => {
    const d = serve();
    const got = await mahasz.read({ deep: false, now: new Date("2026-09-24T06:17:00Z"), searchTerms: ["Burna Boy"], request: d.request });
    expect(d.calls).toEqual([`GET ${yearUrl(2026)}`]);
    expect(got).toMatchObject({ total: 269, totalYear: 2026, years: [2026] });
    const w = serve();
    await mahasz.read({ deep: true, now: new Date("2026-09-24T06:17:00Z"), searchTerms: ["Burna Boy"], request: w.request });
    expect(w.calls).toEqual([`GET ${yearUrl(2026)}`, `POST ${SEARCH} ${searchBody("Burna Boy")}`]);
    expect(searchBody("Burna Boy")).toBe("eloado=Burna+Boy&album=&minosites=&ev=&submit=Keres%C3%A9s");
  });

  it("in January reads last year's page too — and the 2026 control is not checked in 2027", async () => {
    // LABELLED EDIT of the real 2026 page: every row removed, standing in for
    // a new year's page before its first award.
    const empty = y2026.replace(/<table>[\s\S]*?<\/table>/, "<table></table>");
    expect(parseRows(empty, "x")).toEqual([]);
    const calls: string[] = [];
    const request = async ({ url }: { url: string }) => {
      calls.push(url);
      return ok(url === yearUrl(2027) ? empty : y2026);
    };
    const got = await mahasz.read({ deep: false, now: new Date("2027-01-05T06:17:00Z"), searchTerms: [], request });
    expect(calls).toEqual([yearUrl(2027), yearUrl(2026)]);
    expect(got).toMatchObject({ total: 0, totalYear: 2027 });
    expect(got.years).toEqual([2027, 2026]);
    // The daily control lives on the 2026 page, which January 2027 still reads.
    expect(verdict({ adapter: mahasz, got, deep: false, now: new Date("2027-01-05T06:17:00Z"), config }).notes.join(" ")).not.toMatch(/no live control/);
    const feb = { ...got, years: [2027] };
    expect(verdict({ adapter: mahasz, got: feb, deep: false, now: new Date("2027-02-05T06:17:00Z"), config }).notes.join(" ")).toMatch(/no live control this year/);
  });
});

describe("diff", () => {
  const run = (rows: unknown[], index = frozenIndex()) => evaluateRows(mahasz, rows, { index, liveArtists: LIVE_ARTISTS, config });
  const rows = readYear(ok(y2026), 2026);

  it("the 2026 page is in sync with the site", () => {
    const got = run(rows);
    expect(got.candidates).toEqual([]);
    expect(got.counts.matched).toBe(1);
  });

  it("Dai Dai is a NEW PLAQUE against the site without its HU plaque", () => {
    // LABELLED EDIT: no HU plaque on Dai Dai.
    const none = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Dai Dai").holdings["HU|"]);
    expect(run(rows, none).candidates[0]).toMatchObject({ kind: "NEW PLAQUE", artist: "burna-boy", release: "Dai Dai", country: "HU" });
  });

  it("never matches on title alone: 'Blessings' (Calvin Harris) is not Asake's, 'PERU' (Beton.Hofi) not Fireboy's", () => {
    const traps = rows.filter((r) => r.title === "Blessings" || r.title === "PERU");
    expect(traps.map((r) => r.raw)).toEqual([
      "Beton.Hofi, Realisztik | PERU | (Banana Records) | fas fa-play fa-rotate-270 | 2026",
      "Calvin Harris feat. Clementine Douglas | Blessings | (Sony Music) | fas fa-play fa-rotate-270 · arany_platina_db 2 | 2026",
    ]);
    // LABELLED EDIT: neither site release holds a HU plaque, so a title-only
    // match would be a NEW PLAQUE.
    const bare = frozenIndex((j) => {
      delete releaseOf(j, "asake", "Blessings").holdings["HU|"];
      delete releaseOf(j, "fireboy-dml", "Peru").holdings["HU|"];
    });
    expect(run(traps, bare).counts.matched).toBe(0);
  });
});
