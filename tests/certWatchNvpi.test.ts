// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { nvpi, parseFilter, URL_, isoOf } from "../scripts/cert-watch/adapters/nvpi.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows, identifyRow } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/** NVPI's filter API on real saved responses. */
describe("parse", () => {
  it("reads the filter response verbatim, every status parsed", () => {
    const { count, rows } = parseFilter(fixture("nvpi/filter-skip0.json"));
    expect(count).toBe(6493);
    expect(rows).toHaveLength(25);
    expect(rows[0]).toMatchObject({ credit: "Isabèl Usher", title: "Ik Kom Weer Thuis", formatRaw: "Single", tierRaw: "Goud", reading: { tier: "Gold", x: 1 }, dateRaw: "16-7-2026" });
    expect(rows.filter((r) => !r.reading)).toEqual([]);
  });

  it("reads the live capture: the newest 500", () => {
    const { rows } = parseFilter(fixture("nvpi/run-2026-09-24/filter-take500.json.gz"));
    expect(rows).toHaveLength(500);
    expect(rows.filter((r) => !r.reading).length / rows.length).toBeLessThan(0.05);
  });

  it("keeps the headline credit verbatim and reads metadata.artists as the featured credits", () => {
    const [loc] = parseFilter(fixture("nvpi/item-dave-location.json")).rows;
    expect(nvpi.control.find(loc)).toBe(true);
    expect(loc).toMatchObject({ credit: "DAVE", featured: ["Dave", "Burna Boy"], title: "Location", tierRaw: "Platina", reading: { tier: "Platinum", x: 1 }, dateRaw: "21-5-2026" });
    // "DAVE" alone names none of the sixteen; the register's metadata does.
    const who = identifyRow(loc, { adapterId: "nvpi", liveArtists: LIVE_ARTISTS, config, leadAliases: [] }).matches.map((m) => m.artist);
    expect(who).toEqual(["burna-boy"]);
    const bare = identifyRow({ ...loc, featured: [] }, { adapterId: "nvpi", liveArtists: LIVE_ARTISTS, config, leadAliases: [] }).matches;
    expect(bare).toEqual([]);
  });

  it("dates are d-m-yyyy", () => {
    expect(isoOf("16-7-2026")).toBe("2026-07-16");
    expect(isoOf("3-11-2022")).toBe("2022-11-03");
  });

  it("refuses a response that is not the filter JSON", () => {
    expect(() => parseFilter(fixture("challenge/be-ultratop.html"))).toThrow(AdapterError);
    expect(() => parseFilter('{"items":[]}')).toThrow(/no items\/count/);
  });
});

describe("read", () => {
  it("is one request for the newest 500", async () => {
    const calls: string[] = [];
    const got = await nvpi.read({
      cursor: null,
      request: async ({ url }: { url: string }) => {
        calls.push(url);
        return { ok: true, status: 200, headers: {}, body: fixture("nvpi/run-2026-09-24/filter-take500.json.gz") };
      },
    });
    expect(calls).toEqual(["https://www.goudplatina.nl/api/filter?skip=0&take=500"]);
    expect(URL_).toBe(calls[0]);
    expect(got.newest).toMatch(/^6,493 awards in the register; newest 16-7-2026/);
  });
});

describe("diff", () => {
  const run = (rows: unknown[], index = frozenIndex()) => evaluateRows(nvpi, rows, { index, liveArtists: LIVE_ARTISTS, config });
  const loc = parseFilter(fixture("nvpi/item-dave-location.json")).rows;

  it("Location (DAVE, metadata Dave + Burna Boy) is in sync with the site's NL Platinum", () => {
    const got = run(loc);
    expect(got.counts.matched).toBe(1);
    expect(got.candidates).toEqual([]);
  });

  it("and is a NEW PLAQUE against the site without it", () => {
    // LABELLED EDIT: no NL plaque on Location.
    const none = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Location").holdings["NL|"]);
    expect(run(loc, none).candidates[0]).toMatchObject({ kind: "NEW PLAQUE", artist: "burna-boy", release: "Location", country: "NL" });
  });
});
