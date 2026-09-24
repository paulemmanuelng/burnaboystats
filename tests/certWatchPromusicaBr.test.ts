// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { promusicaBr, parseCards, parseBadge, parseCounter, servedQuery, searchUrl } from "../scripts/cert-watch/adapters/promusica-br.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows, identifyRow } from "../scripts/cert-watch/match.mjs";
import { searchTermsFor } from "../scripts/cert-watch/index.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * Pro-Música Brasil on REAL saved pages from the live dry run of 24 Sep 2026:
 * the 19 name searches and the 32 pages of the 2026 year view.
 */
const R = "promusica-br/run-2026-09-24/";
const page = (f: string) => fixture(`${R}${f}.html.gz`);
const ok = (body: string, url = "x") => ({ ok: true, status: 200, headers: {}, body, url });

describe("parse", () => {
  it("the 'Burna' search: the daily control (Own It, Ouro), and the search the page says it ran", () => {
    const b = page("artist__burna-p1");
    expect(servedQuery(b)).toEqual({ artist: "Burna", year: "0", page: 1 });
    expect(parseCounter(b)).toEqual({ pages: 1, total: 1 });
    const cards = parseCards(b, "x");
    expect(cards.map((c) => c.raw)).toEqual(["(2020) SINGLE | Stormzy, Ed Sheeran, Burna Boy | Own It | Warner Music | Ouro (disco_ouro.png)"]);
    expect(cards.filter(promusicaBr.control.find)).toHaveLength(1);
    expect(cards[0]).toMatchObject({ format: "single", reading: { tier: "Gold", x: 1 }, dateRaw: "2020" });
  });

  it("a search with no results is the register's own '0 resultados' — never evidence of none", () => {
    const b = page("artist__asake-p1");
    expect(parseCounter(b)).toEqual({ pages: 1, total: 0 });
    expect(parseCards(b, "x")).toEqual([]);
    expect(servedQuery(b).artist).toBe("Asake");
  });

  it("reads the badge alts it serves", () => {
    expect(parseBadge("Ouro")).toEqual({ tier: "Gold", x: 1 });
    expect(parseBadge("Platina 2x")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseBadge("Diamante")).toEqual({ tier: "Diamond", x: 1 });
    expect(parseBadge("Diamante 16x")).toEqual({ tier: "Diamond", x: 16 });
    expect(parseBadge("Prata")).toBeNull();
  });

  it("the 2026 year view: 32 pages, 1,274 certificates, every badge parsed", () => {
    const all = Array.from({ length: 32 }, (_, i) => parseCards(page(`year-2026-p${i + 1}`), "x")).flat();
    expect(parseCounter(page("year-2026-p1"))).toEqual({ pages: 32, total: 1274 });
    expect(all).toHaveLength(1274);
    expect(all.filter((r) => !r.reading)).toEqual([]);
  });

  it("asks for a later page in WordPress's canonical /page/N/ form (what ?paged=N redirects to)", () => {
    expect(searchUrl({ artist: "", year: 2026, page: 2 })).toBe(
      "https://pro-musicabr.org.br/home-2/certificados/page/2/?busca_artista&busca_tipo_produto&busca_tipo_certificado=0&busca_pela_gravadora=0&busca_ano=2026"
    );
    expect(searchUrl({ artist: "Burna Boy" })).toBe(
      "https://pro-musicabr.org.br/home-2/certificados/?busca_artista=Burna+Boy&busca_tipo_produto=&busca_tipo_certificado=0&busca_pela_gravadora=0&busca_ano=0"
    );
  });
});

describe("read", () => {
  it("searches each term in pt-BR; on deep runs walks this year's pages; a served search that differs is a different page", async () => {
    const calls: { url: string; lang?: string }[] = [];
    const request = async ({ url, headers }: { url: string; headers?: Record<string, string> }) => {
      calls.push({ url, lang: headers?.["Accept-Language"] });
      const u = new URL(url);
      const p = Number((u.pathname.match(/\/page\/(\d+)\//) ?? [])[1] ?? 1);
      const artist = u.searchParams.get("busca_artista") ?? "";
      return ok(artist ? page(`artist__${artist.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-p1`) : page(`year-2026-p${p}`), url);
    };
    const got = await promusicaBr.read({ deep: true, now: new Date("2026-09-28T06:17:00Z"), searchTerms: ["Burna", "Rema"], request });
    expect(calls.map((c) => c.url)).toEqual([searchUrl({ artist: "Burna" }), searchUrl({ artist: "Rema" }), ...Array.from({ length: 32 }, (_, i) => searchUrl({ artist: "", year: 2026, page: i + 1 }))]);
    expect(calls.every((c) => c.lang === "pt-BR")).toBe(true);
    expect(got.rows.filter(promusicaBr.control.find)).toHaveLength(1);
    expect(got.notes.join(" ")).toMatch(/deep read: 1274 of 1274 certificates for 2026/);
    // The 'Rema' page served for 'Burna'.
    const e = await promusicaBr.read({ deep: false, searchTerms: ["Burna"], request: async () => ok(page("artist__rema-p1")) }).catch((x: unknown) => x);
    expect((e as AdapterError).kind).toBe("mismatch");
  });
});

describe("diff", () => {
  const rows = ["burna", "rema", "tems", "wizkid", "davido", "tyla", "ckay"].flatMap((a) => parseCards(page(`artist__${a}-p1`), "x"));
  const run = (r: unknown[], index = frozenIndex()) => evaluateRows(promusicaBr, r, { index, liveArtists: LIVE_ARTISTS, config });

  it("Own It is in sync, and so is Rema's 'Fame - A COLORS ENCORE': the register's hyphen is the site's en dash", () => {
    // The first live run listed the Fame row as a NEW RELEASE: the site holds
    // it as "Fame – A COLORS ENCORE" (BR Gold). Dashes fold since the review.
    const got = run(rows);
    expect(got.candidates).toEqual([]);
    expect(rows.some((r) => r.title === "Fame - A COLORS ENCORE" && r.credit === "Rema")).toBe(true);
  });

  it("Own It is a NEW PLAQUE against the site without its BR plaque", () => {
    // LABELLED EDIT: no BR plaque on Own It.
    const none = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Own It").holdings["BR|"]);
    const c = run(rows, none).candidates.filter((x) => x.artist === "burna-boy");
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", release: "Own It", country: "BR", tierRaw: "Ouro" });
  });
});

describe('"Teams" is Tems — a credit typo scoped to Pro-Música Brasil (owner ruling, 24 Sep 2026)', () => {
  // The REAL card the register serves for busca_artista=Teams (saved by the
  // watcher itself, 24 Sep 2026 16:35 UTC): Tems misspelt on Beyoncé's MOVE.
  const teams = parseCards(page("artist__teams-p1"), "x");
  // The 2023 Ouro card on the "Tems" search spells her name right.
  const tems = parseCards(page("artist__tems-p1"), "x");
  const run = (r: unknown[], index = frozenIndex(), cfg = config) => evaluateRows(promusicaBr, r, { index, liveArtists: LIVE_ARTISTS, config: cfg });
  const id = (row: unknown, adapterId = "promusica-br", cfg = config) =>
    identifyRow(row, { adapterId, liveArtists: LIVE_ARTISTS, config: cfg, leadAliases: frozenIndex().certAliases });

  it("reads the real card verbatim", () => {
    expect(servedQuery(page("artist__teams-p1"))).toEqual({ artist: "Teams", year: "0", page: 1 });
    expect(teams.map((c) => c.raw)).toEqual(["(2024) SINGLE | Beyoncé feat.Grace Jones and Teams | MOVE | Sony Music | Platina (disco_platina.png)"]);
    expect(teams[0]).toMatchObject({ credit: "Beyoncé feat.Grace Jones and Teams", title: "MOVE", format: "single", reading: { tier: "Platinum", x: 1 }, dateRaw: "2024" });
    expect(tems.map((c) => c.raw)).toContain("(2023) SINGLE | Beyoncé feat. Grace Jones and Tems | MOVE | Sony Music | Ouro (disco_ouro.png)");
  });

  it("without the typo the card names none of the sixteen; with it, it is Tems's — flagged, and on this register only", () => {
    // LABELLED EDIT of config: the "Teams" typo removed — the card matches no one.
    const bare = { ...config, creditTypos: config.creditTypos.filter((t: { register: string }) => t.register !== "promusica-br") };
    expect(id(teams[0], "promusica-br", bare).matches).toEqual([]);
    const m = id(teams[0]).matches;
    expect(m.map((x: { artist: string; via: string }) => `${x.artist} ${x.via}`)).toEqual(["tems typo"]);
    expect(m[0].flags).toEqual(['register misspells the credit ("Teams")']);
    // Scoped: the same printed credit on any other register names no one.
    for (const other of ["riaa", "snep", "tcsn", "promusicae"]) expect(id(teams[0], other).matches, other).toEqual([]);
    // The 2023 card needs no typo: "…and Tems" names her directly.
    expect(id(tems.find((c) => c.title === "MOVE"), "promusica-br", bare).matches.map((x: { artist: string; via: string }) => `${x.artist} ${x.via}`)).toEqual(["tems credit"]);
  });

  it("the Platina card is the site's BR Platinum on Tems's \"Move\": in sync, so no lead", () => {
    const got = run(teams);
    expect(got.counts.matched).toBe(1);
    expect(got.counts.inSync).toBe(1);
    expect(got.candidates).toEqual([]);
  });

  it("against the site without its BR plaque, the same card is a NEW PLAQUE for Tems, carrying the typo flag", () => {
    // LABELLED EDIT: no BR plaque on Tems's Move.
    const none = frozenIndex((j) => delete releaseOf(j, "tems", "Move").holdings["BR|"]);
    const c = run(teams, none).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", artist: "tems", release: "Move", country: "BR", tierRaw: "Platina" });
    expect(c[0].flags).toContain('register misspells the credit ("Teams")');
  });

  it("the daily read asks for \"Teams\" on this register — and no other register's searches change", () => {
    const base = ["Burna Boy", "Tems"];
    expect(searchTermsFor("promusica-br", base, config)).toEqual(["Burna Boy", "Tems", "Teams"]);
    for (const other of ["riaa", "snep", "mahasz", "ifpi-sverige"]) expect(searchTermsFor(other, base, config), other).toEqual(base);
    // A typo already among the terms is not asked twice.
    expect(searchTermsFor("promusica-br", ["teams"], config)).toEqual(["teams"]);
  });
});
