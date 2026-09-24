// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { snep, parseCards, parsePage, searchUrl, PAGE } from "../scripts/cert-watch/adapters/snep.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { fixture } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/** SNEP on real saved pages (PROVENANCE.json). The diff replays (the
 *  superseded card, JERUSALEMA) are in certWatchDiff.test.ts. */
describe("parse", () => {
  it("reads the positive control verbatim: DAI DAI | SHAKIRA & BURNA BOY | Diamant | 27/08/2026", () => {
    const rows = parseCards(fixture("snep/q-burna.html.gz"));
    expect(rows).toHaveLength(21);
    const dai = rows.filter(snep.control.find);
    expect(dai).toHaveLength(1);
    expect(dai[0]).toMatchObject({
      credit: "SHAKIRA & BURNA BOY",
      title: "DAI DAI",
      formatRaw: "Singles",
      format: "single",
      tierRaw: "Diamant",
      reading: { tier: "Diamond", x: 1 },
      dateRaw: "27/08/2026",
    });
    expect(dai[0].raw).toBe("Singles | DAI DAI | SHAKIRA & BURNA BOY | SONY MUSIC LATIN / SONY MUSIC ENTERTAINMENT | Diamant | sortie 14/05/2026 | constat 27/08/2026");
    expect(rows.filter((r) => !r.reading)).toEqual([]);
  });

  it("reads page 1 of the register, newest first, and the next-page link as printed", () => {
    const p = parsePage(fixture("snep/page1-default.html.gz"));
    expect(p.rows).toHaveLength(30);
    expect(p.rows[0]).toMatchObject({ title: "ET JE DEVIENS FOU", credit: "JUL FEAT. NINHO", tierRaw: "Platine", dateRaw: "17/09/2026" });
    expect(p.next).toBe("https://snepmusique.com/les-certifications/page/2?");
    expect(p.none).toBe(false);
    // The same page as served to the watcher's own User-Agent (24 Sep re-test).
    expect(parsePage(fixture("snep/page1-2026-09-24.html.gz")).rows).toHaveLength(30);
    expect(parsePage(fixture("snep/run-2026-09-24/newest.html.gz")).rows).toHaveLength(30);
  });

  it("recognises SNEP's own words for no result", () => {
    const p = parsePage(fixture("snep/run-2026-09-24/q__seyi-vibez.html.gz"));
    expect([p.rows.length, p.none]).toEqual([0, true]);
  });
});

describe("read", () => {
  const serve = (map: Record<string, string>) => {
    const calls: string[] = [];
    const request = async ({ url }: { url: string }) => {
      calls.push(url);
      const f = map[url];
      if (!f) return { ok: false, kind: "network", detail: `no fixture for ${url}` };
      return { ok: true, status: 200, headers: {}, body: fixture(f) };
    };
    return { calls, request };
  };

  it("reads one page on a first run, and follows the page's own next link while short of the last date", async () => {
    const s = serve({ [PAGE]: "snep/page1-default.html.gz", "https://snepmusique.com/les-certifications/page/2?": "snep/page1-default.html.gz" });
    const first = await snep.read({ cursor: null, deep: false, searchTerms: [], request: s.request });
    expect(s.calls).toEqual([PAGE]);
    expect(first.cursor).toEqual({ lastDate: "2026-09-17" });
    // Page 1 ends at 10/09/2026; a last run that saw 08/09/2026 needs page 2
    // (served here by a page whose cards reach far back, so the walk stops).
    const t = serve({ [PAGE]: "snep/page1-default.html.gz", "https://snepmusique.com/les-certifications/page/2?": "snep/q-burna.html.gz" });
    await snep.read({ cursor: { lastDate: "2026-09-08" }, deep: false, searchTerms: [], request: t.request });
    expect(t.calls).toEqual([PAGE, "https://snepmusique.com/les-certifications/page/2?"]);
  });

  it("searches each term on deep runs and keeps one copy of a card read twice", async () => {
    const s = serve({ [PAGE]: "snep/page1-default.html.gz", [searchUrl("Burna Boy")]: "snep/q-burna.html.gz" });
    const got = await snep.read({ cursor: null, deep: true, searchTerms: ["Burna Boy"], request: s.request });
    expect(s.calls).toEqual([PAGE, "https://snepmusique.com/les-certifications/?interprete=Burna+Boy&titre=&editeur="]);
    expect(got.rows.filter(snep.control.find)).toHaveLength(1);
    expect(got.rows).toHaveLength(51);
  });

  it("says a bot wall or a decoy is not SNEP's page — never an empty read", async () => {
    const wall = { ok: true, status: 200, headers: {}, body: fixture("decoy/za-risa-browser.html") };
    const err = await snep.read({ cursor: null, deep: false, searchTerms: [], request: async () => wall }).catch((e: unknown) => e);
    expect(err).toBeInstanceOf(AdapterError);
    // RiSA's `<title>ai/…` decoy is a bot wall, read as a challenge (SPEC §7).
    expect((err as AdapterError).kind).toBe("challenge");
  });
});
