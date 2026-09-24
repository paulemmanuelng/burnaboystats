// @vitest-environment node
import { describe, it, expect } from "vitest";
import {
  promusicae,
  parseCards,
  parseTotal,
  parseAward,
  selected,
  artistOptions,
  isoWeekOf,
  weekUrl,
  artistUrl,
} from "../scripts/cert-watch/adapters/promusicae.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows, identifyRow } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

/**
 * PROMUSICAE on REAL saved pages (PROVENANCE.json): the week and artist
 * filters from the live dry run of 24 Sep 2026 (Spanish locale), and the same
 * week as served with no Accept-Language (English locale).
 */
const R = "promusicae/run-2026-09-24/";
const w38p1 = fixture(`${R}week-2026-38-p1.html.gz`);
const w38p2 = fixture(`${R}week-2026-38-p2.html.gz`);
const w39 = fixture(`${R}week-2026-39-p1.html.gz`);
const shakira = fixture(`${R}artist__shakira-burna-boy-p1.html.gz`);
const en38 = fixture("promusicae/english/week-2026-38-p1.html.gz");
const en39 = fixture("promusicae/english/week-2026-39-p1.html.gz");
const ok = (body: string) => ({ ok: true, status: 200, headers: {}, body, url: "x" });

describe("parse", () => {
  it("reads a week page: 10 cards, the count, the week asked for", () => {
    const cards = parseCards(w38p1);
    expect(cards).toHaveLength(10);
    expect(parseTotal(w38p1)).toBe(19);
    expect([selected(w38p1, "year"), selected(w38p1, "week")]).toEqual(["2026", "38"]);
    expect(cards[0]).toMatchObject({ rowId: "30485", credit: "LUCHO RK", title: "AIRE", formatRaw: "CANCIONES", format: "single", tierRaw: "1 × Discos de Oro", reading: { tier: "Gold", x: 1 }, dateRaw: "2026 semana 38" });
    expect(cards.every((c) => c.extra.week === 38 && c.extra.year === 2026)).toBe(true);
  });

  it("an empty week is the site's own 'none', counted 0 — never a missing page", () => {
    expect(parseCards(w39)).toEqual([]);
    expect(parseTotal(w39)).toBe(0);
    expect(parseTotal(en39)).toBe(0);
    expect(parseTotal("<html>")).toBeNull();
  });

  it("reads the English locale the same way (served with no Accept-Language)", () => {
    const es = parseCards(w38p1);
    const en = parseCards(en38);
    expect(parseTotal(en38)).toBe(19);
    expect(en.map((c) => [c.rowId, c.credit, c.title, c.reading, c.extra.week])).toEqual(es.map((c) => [c.rowId, c.credit, c.title, c.reading, c.extra.week]));
    expect(en[0].tierRaw).toBe("1 × Gold award");
  });

  it("reads the award number and icon; they must agree", () => {
    expect(parseAward("1 ×", "golden", "Discos de Oro")).toEqual({ tier: "Gold", x: 1 });
    expect(parseAward("19 ×", "platinum", "Discos de Platino")).toEqual({ tier: "Platinum", x: 19 });
    expect(parseAward("2 ×", "platinum", "Platinum award")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseAward("1 ×", "golden", "Discos de Platino")).toBeNull();
    expect(parseAward("1 ×", "diamond", "Discos de Diamante")).toBeNull();
  });

  it("the artist search: Dai Dai's two cards, the control among them, the string the site selected", () => {
    expect(selected(shakira, "artist")).toBe("SHAKIRA / BURNA BOY");
    const cards = parseCards(shakira);
    expect(cards.map((c) => c.raw)).toEqual([
      "30349 · CANCIONES | DAI DAI | SHAKIRA / BURNA BOY | 1 × Discos de Platino | año 2026 semana 30",
      "30297 · CANCIONES | DAI DAI | SHAKIRA / BURNA BOY | 1 × Discos de Oro | año 2026 semana 27",
    ]);
    expect(cards.filter(promusicae.control.find)).toHaveLength(1);
  });

  it("takes the artist strings from the site's own dropdown, word-anchored: never 'JAIRO DEREMACHE' for Rema", () => {
    const opts = artistOptions(w38p1);
    expect(opts.length).toBeGreaterThan(4000);
    const trap = opts.find((o) => o === "OMAR MONTES / JAIRO DEREMACHE");
    expect(trap).toBeTruthy();
    const who = (credit: string) => identifyRow({ credit, title: "" }, { adapterId: "promusicae", liveArtists: LIVE_ARTISTS, config, leadAliases: [] }).matches.map((m) => m.artist);
    expect(who(trap!)).toEqual([]);
    expect(who("SHAKIRA / BURNA BOY")).toEqual(["burna-boy"]);
    // The site's own string, decoded: "FUTURE / DRAKE &amp; TEMS" in the HTML.
    expect(opts).toContain("FUTURE / DRAKE & TEMS");
    expect(who("FUTURE / DRAKE & TEMS")).toEqual(["tems"]);
  });

  it("ISO weeks, across a year boundary", () => {
    expect(isoWeekOf(new Date("2026-09-24T06:17:00Z"))).toEqual({ year: 2026, week: 39 });
    expect(isoWeekOf(new Date("2027-01-01T06:17:00Z"))).toEqual({ year: 2026, week: 53 });
    expect(isoWeekOf(new Date("2027-01-04T06:17:00Z"))).toEqual({ year: 2027, week: 1 });
  });
});

describe("read", () => {
  const map: Record<string, string> = {
    [weekUrl(2026, 39)]: w39,
    [weekUrl(2026, 38)]: w38p1,
    "https://www.elportaldemusica.es/awards/index?AwardsSearch%5Byear%5D=2026&AwardsSearch%5Bweek%5D=38&page=2&per-page=10": w38p2,
    [artistUrl("SHAKIRA / BURNA BOY")]: shakira,
  };

  it("reads this ISO week and last, page by page, in the register's own locale", async () => {
    const calls: { url: string; lang?: string }[] = [];
    const request = async ({ url, headers }: { url: string; headers?: Record<string, string> }) => {
      calls.push({ url, lang: headers?.["Accept-Language"] });
      if (!map[url]) throw new Error(`unexpected ${url}`);
      return ok(map[url]);
    };
    const got = await promusicae.read({ deep: false, now: new Date("2026-09-24T06:17:00Z"), request, matches: () => false });
    expect(calls.map((c) => c.url)).toEqual([weekUrl(2026, 39), weekUrl(2026, 38), "https://www.elportaldemusica.es/awards/index?AwardsSearch%5Byear%5D=2026&AwardsSearch%5Bweek%5D=38&page=2&per-page=10"]);
    expect(calls.every((c) => c.lang === "es-ES")).toBe(true);
    expect(got.rows).toHaveLength(19);
    expect(got.newest).toBe("week 39: 0 · week 38: 19");
    expect(got.newestDate).toBe("2026-09-14");
    expect(got.cursor).toEqual({ lastWeek: { year: 2026, week: 39 }, newestWeek: { year: 2026, week: 38 } });
  });

  it("on deep runs searches each dropdown string that names one of the sixteen", async () => {
    const calls: string[] = [];
    const request = async ({ url }: { url: string }) => {
      calls.push(url);
      return ok(map[url] ?? shakira);
    };
    // Only the Dai Dai string is offered as a match here.
    const got = await promusicae.read({ deep: true, now: new Date("2026-09-24T06:17:00Z"), request, matches: (r: { credit: string }) => r.credit === "SHAKIRA / BURNA BOY" });
    expect(calls.at(-1)).toBe(artistUrl("SHAKIRA / BURNA BOY"));
    expect(got.rows.filter(promusicae.control.find)).toHaveLength(1);
  });

  it("says so when the week served is not the week asked for", async () => {
    // The week-38 page served for week 39.
    const request = async ({ url }: { url: string }) => ok(url === weekUrl(2026, 39) ? w38p1 : w38p1);
    const e = await promusicae.read({ deep: false, now: new Date("2026-09-24T06:17:00Z"), request, matches: () => false }).catch((x: unknown) => x);
    expect((e as AdapterError).kind).toBe("mismatch");
    expect((e as Error).message).toMatch(/served week "38" for "39"/);
  });

  it("a bot wall or decoy is never an empty read", async () => {
    const e = await promusicae.read({ deep: false, now: new Date("2026-09-24T06:17:00Z"), request: async () => ok(fixture("decoy/za-risa-browser.html")), matches: () => false }).catch((x: unknown) => x);
    expect((e as AdapterError).kind).toBe("challenge");
  });
});

describe("diff", () => {
  const run = (rows: unknown[], index = frozenIndex()) => evaluateRows(promusicae, rows, { index, liveArtists: LIVE_ARTISTS, config });
  const cards = parseCards(shakira);

  it("Dai Dai (ES Platinum) is in sync with the site", () => {
    const got = run(cards);
    expect(got.counts.matched).toBe(2);
    expect(got.candidates).toEqual([]);
  });

  it("the Oro and Platino cards fold to one UPGRADE when the site held Gold", () => {
    // LABELLED EDIT: the site at ES Gold on Dai Dai.
    const gold = frozenIndex((j) => (releaseOf(j, "burna-boy", "Dai Dai").holdings["ES|"] = { tier: "Gold", x: 1 }));
    const c = run(cards, gold).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "UPGRADE", reading: { tier: "Platinum", x: 1 }, tierRaw: "1 × Discos de Platino" });
    expect(c[0].rows).toHaveLength(2);
  });
});

describe("the CKay remix — a known divergence, ruled by Paul, 24 Sep 2026", () => {
  // The real deep-read pages of 24 Sep 2026: the remix's artist string and
  // CKay's own, each as the register's dropdown selects it.
  const remix = parseCards(fixture(`${R}artist__ckay-axel-dj-yo-p1.html.gz`));
  const original = parseCards(fixture(`${R}artist__ckay-p1.html.gz`));
  const div = config.knownDivergences.find((d: { adapter: string; artist: string }) => d.adapter === "promusicae" && d.artist === "ckay");
  const noRuling = { ...config, knownDivergences: config.knownDivergences.filter((d: unknown) => d !== div) };
  const run = (rows: unknown[], index = frozenIndex(), cfg = config) => evaluateRows(promusicae, rows, { index, liveArtists: LIVE_ARTISTS, config: cfg });

  it("is recorded exactly: the register's own title, credit and tier, the site release it counts as, who ruled and why", () => {
    expect(remix.map((c) => c.raw)).toEqual([
      "23765 · CANCIONES | LOVE NWANTITI (REMIX) | CKAY / AXEL / DJ YO | 1 × Discos de Platino | año 2024 semana 11",
      "15859 · CANCIONES | LOVE NWANTITI (REMIX) | CKAY / AXEL / DJ YO | 1 × Discos de Oro | año 2021 semana 46",
    ]);
    expect(div).toMatchObject({
      title: "love nwantiti (ah ah ah)",
      printed: "LOVE NWANTITI (REMIX)",
      credit: "CKAY / AXEL / DJ YO",
      readingRaw: "1 × Discos de Platino",
      ruledBy: "Paul",
      on: "2026-09-24",
    });
    expect(div.why).toMatch(/ruled by Paul 24 Sep 2026/);
    // The release it counts as holds ES Platinum on the site.
    expect(releaseOf(JSON.parse(fixture("site-index.2026-09-24.json")), "ckay", "love nwantiti (ah ah ah)").holdings["ES|"]).toEqual({ tier: "Platinum", x: 1 });
  });

  it("fires without the ruling (the first live run's lead), and is suppressed — never a candidate — with it", () => {
    const before = run(remix, frozenIndex(), noRuling);
    expect(before.candidates.map((c) => `${c.kind} ${c.artist} ${c.title} ${c.tierRaw}`)).toEqual(["NEW RELEASE ckay LOVE NWANTITI (REMIX) 1 × Discos de Platino"]);
    const got = run(remix);
    expect(got.candidates).toEqual([]);
    expect(got.suppressed.divergences).toEqual([
      { adapter: "promusicae", artist: "ckay", title: "LOVE NWANTITI (REMIX)", readingRaw: "1 × Discos de Platino", why: div.why },
    ]);
  });

  it("fires again when that row's tier changes", () => {
    // LABELLED EDIT of the real 23765 card: 2 × Discos de Platino.
    const up = remix.map((c) => (c.rowId === "23765" ? { ...c, tierRaw: "2 × Discos de Platino", reading: { tier: "Platinum", x: 2 } } : c));
    expect(run(up).candidates.map((c) => `${c.kind} ${c.tierRaw}`)).toEqual(["NEW RELEASE 2 × Discos de Platino"]);
    // LABELLED EDIT: the Platino card withdrawn, the Oro card left — a different reading, so a lead.
    const oro = remix.filter((c) => c.rowId === "15859");
    expect(run(oro).candidates.map((c) => `${c.kind} ${c.tierRaw}`)).toEqual(["NEW RELEASE 1 × Discos de Oro"]);
  });

  it("suppresses nothing else: another act's remix of the same title, or the same row on another register, still fires", () => {
    // LABELLED EDIT: a second remix card under another credit, same title and tier.
    const other = [...remix, { ...remix[0], rowId: "99999", credit: "CKAY / JOEBOY / KUAMI EUGENE", raw: remix[0].raw.replace("CKAY / AXEL / DJ YO", "CKAY / JOEBOY / KUAMI EUGENE") }];
    expect(run(other).candidates.map((c) => `${c.kind} ${c.tierRaw}`)).toEqual(["NEW RELEASE 1 × Discos de Platino"]);
    // The same rows read as another register's: the ruling is PROMUSICAE's only.
    const snepLike = { ...promusicae, id: "snep", country: "FR" };
    expect(evaluateRows(snepLike, remix, { index: frozenIndex(), liveArtists: LIVE_ARTISTS, config }).candidates).toHaveLength(1);
  });

  it("negative control: the original's cards, in the same deep read, still match CKay's release — in sync, and a lead the moment the site lacks it", () => {
    expect(original.map((c) => c.raw)).toEqual([
      "21393 · CANCIONES | LOVE NWANTITI (AH AH AH) | CKAY | 1 × Discos de Platino | año 2024 semana 1",
      "15843 · CANCIONES | LOVE NWANTITI (AH AH AH) | CKAY | 1 × Discos de Oro | año 2021 semana 45",
    ]);
    const got = run(original);
    expect(got.candidates).toEqual([]);
    expect(got.suppressed.divergences).toEqual([]);
    expect(got.readings.map((r) => [r.release, r.holding])).toEqual([["love nwantiti (ah ah ah)", { tier: "Platinum", x: 1 }]]);
    // LABELLED EDIT of the frozen index: the site without its ES plaque on the original.
    const bare = frozenIndex((j) => delete releaseOf(j, "ckay", "love nwantiti (ah ah ah)").holdings["ES|"]);
    expect(run(original, bare).candidates.map((c) => `${c.kind} ${c.release} ${c.tierRaw}`)).toEqual(["NEW PLAQUE love nwantiti (ah ah ah) 1 × Discos de Platino"]);
  });
});
