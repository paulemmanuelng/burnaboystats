// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { tcsn, parseNextData, fromNextData, rowsHash, toRows, parseMilestone, parseCdx, PAGE, CAP } from "../scripts/cert-watch/adapters/tcsn.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows, identifyRow } from "../scripts/cert-watch/match.mjs";
import { verdict, matchedVerdict } from "../scripts/cert-watch/health.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";
import * as afro from "../app/data/afrobeats";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * TCSN on REAL saved responses: the 24 Sep 2026 page from the live dry run
 * (build 9FLVyEQ3OX_KP6OGJD8nk) and the __NEXT_DATA__ of the 23 Sep page
 * (build 34rN-IwkSfDR60dD2OaG2), cut verbatim from it.
 */
const html24 = fixture("tcsn/run-2026-09-24/certification.html.gz");
const nd23 = fixture("tcsn/nextdata-2026-09-23.json");
const live = parseNextData(html24);
const rows = toRows(live.entries);
const ok = (body: string) => ({ ok: true, status: 200, headers: {}, body, url: PAGE });
const run = (r: unknown[], index = frozenIndex(), cfg = config) => evaluateRows(tcsn, r, { index, liveArtists: LIVE_ARTISTS, config: cfg });

describe("parse", () => {
  it("reads the 500 live rows (the cap) from __NEXT_DATA__, every milestone parsed; the control is there", () => {
    expect(live.entries).toHaveLength(CAP);
    expect(rows.filter((r) => !r.reading)).toEqual([]);
    const c = rows.filter(tcsn.control.find);
    expect(c).toHaveLength(1);
    expect(c[0].raw).toBe("Asake | Lonely At The Top | Platinum_8 | Single |  | 2026-02-06T00:00:00 | isClaimed false");
  });

  it("the build id changes between deploys; the rows do not — so the rows hash is compared, never the build id", () => {
    const d23 = fromNextData(nd23);
    expect(d23.buildId).toBe("34rN-IwkSfDR60dD2OaG2");
    expect(live.buildId).toBe("9FLVyEQ3OX_KP6OGJD8nk");
    expect(rowsHash(d23.entries)).toBe(rowsHash(live.entries));
    // LABELLED EDIT of the 24 Sep rows: one milestone raised — the hash moves.
    const edited = live.entries.map((e: { id: number; milestone: string }) => (e.id === 1 ? { ...e, milestone: "Platinum_9" } : e));
    expect(rowsHash(edited)).not.toBe(rowsHash(live.entries));
  });

  it("reads milestones in TCSN's own steps; Silver is a real tier", () => {
    expect(parseMilestone("Platinum_8")).toEqual({ tier: "Platinum", x: 8 });
    expect(parseMilestone("Gold_1")).toEqual({ tier: "Gold", x: 1 });
    expect(parseMilestone("Silver_1")).toEqual({ tier: "Silver", x: 1 });
    expect(parseMilestone("Platinum")).toBeNull();
  });

  it("__NEXT_DATA__ for another page is a different page; a page without it is a changed format", () => {
    // LABELLED EDIT of the 23 Sep data: its page field.
    const other = nd23.replace('"page":"/certification"', '"page":"/charts"');
    expect(() => fromNextData(other)).toThrow(/not \/certification/);
    expect(() => parseNextData("<html></html>")).toThrow(AdapterError);
  });

  it("reads the Wayback CDX answer's capture times (a lead only)", () => {
    const caps = parseCdx(fixture("tcsn/cdx-2026-09-23.json"))!;
    expect(caps.length).toBeGreaterThan(5);
    expect(caps[0]).toBe("20250124110307");
    expect(parseCdx("<html>504 Gateway Time-out</html>")).toBeNull();
  });
});

describe("identify: the TCSN traps, on its real rows", () => {
  const who = (credit: string, title: string) =>
    identifyRow({ credit, title }, { adapterId: "tcsn", liveArtists: LIVE_ARTISTS, config, leadAliases: frozenIndex().certAliases, ownerTags: true }).matches.map((m) => m.artist).sort();

  it("'Reason (Omah Lay)' is Omah Lay's; 'Reason' (Asake ft. Russ) is Asake's — never each other's", () => {
    expect(rows.find((r) => r.title === "Reason (Omah Lay)")?.credit).toBe("Omah Lay");
    expect(rows.find((r) => r.title === "Reason")?.credit).toBe("Asake ft. Russ");
    expect(who("Omah Lay", "Reason (Omah Lay)")).toEqual(["omah-lay"]);
    expect(who("Asake ft. Russ", "Reason")).toEqual(["asake"]);
  });

  it("'Asake | Bad Influence' is a held row: suppressed, never a candidate", () => {
    const bad = rows.filter((r) => r.credit === "Asake" && r.title === "Bad Influence");
    expect(bad).toHaveLength(1);
    const got = run(bad);
    expect(got.candidates).toEqual([]);
    expect(got.suppressed.held).toHaveLength(1);
  });

  it("a title the site files WITH its owner tag is found either way ('Stubborn (Victony)')", () => {
    const st = rows.filter((r) => r.title === "Stubborn (Victony)");
    const got = run(st);
    expect(got.candidates).toEqual([]);
    expect(got.counts.inSync).toBe(2); // Victony's "Stubborn (Victony)", Asake's "Stubborn"
  });
});

describe("diff: the whole live list against the site", () => {
  it("leaves no lead: 'Happiness (Sarz)' is Asake's record, in sync, never Wizkid's; 'Asake | 02:30' reads in sync on '2:30' (ruled by Paul, 24 Sep 2026)", () => {
    const got = run(rows);
    expect(got.candidates).toEqual([]);
    const happiness = rows.filter((r) => r.title === "Happiness (Sarz)");
    expect(happiness.map((r) => r.raw)).toEqual(["Sarz, Asake & Gunna | Happiness (Sarz) | Platinum_2 | Single |  | 2026-02-06T00:00:00 | isClaimed false"]);
    const h = run(happiness);
    expect(h.candidates).toEqual([]);
    expect(h.counts.inSync).toBe(1); // Asake's "Happiness", NG Platinum ×2
    // It FIRES with the chart alias (Sarz, Happiness) used for certifications
    // (LABELLED EDIT: every dumped alias, as before the review).
    const idx = frozenIndex();
    const w = run(happiness, { ...idx, certAliases: idx.leadAliases }).candidates;
    expect(w.map((x) => `${x.kind} ${x.artist}`)).toEqual(["NEW RELEASE wizkid"]);
    expect(w[0].flags.join(" ")).toMatch(/credit does not name Wizkid — matched on lead "Sarz"/);
  });

  it("without the TCSN-scoped title aliases, the sweep's reconciled titles would surface — each alias is explained", () => {
    // LABELLED EDIT of config: the ten TCSN-scoped titleAliases removed.
    const bare = { ...config, titleAliases: config.titleAliases.filter((t: { register?: string }) => t.register !== "tcsn") };
    const c = run(rows, frozenIndex(), bare).candidates;
    expect(c.length).toBe(config.titleAliases.filter((t: { register?: string }) => t.register === "tcsn").length);
    for (const t of config.titleAliases.filter((x: { register?: string }) => x.register === "tcsn")) {
      expect(t.why, t.printed).toMatch(/confirmed by Paul 24 Sep 2026$/);
      expect(c.some((x) => x.artist === t.artist && x.title === t.printed), `${t.artist} ${t.printed}`).toBe(true);
    }
  });

  it("a site plaque the list shows lower never becomes a downgrade — and a missing row is not evidence", () => {
    // LABELLED EDIT: the site AHEAD on Asake's Lonely At The Top (NG Platinum ×9).
    const ahead = frozenIndex((j) => (releaseOf(j, "asake", "Lonely At The Top").holdings["NG|"] = { tier: "Platinum", x: 9 }));
    expect(run(rows.filter(tcsn.control.find), ahead).candidates).toEqual([]);
    expect(run([]).candidates).toEqual([]);
  });

  it("carries TCSN's standing caveat for the report", () => {
    expect(tcsn.caveat).toMatch(/request-based and paid/);
  });
});

describe("Asake '02:30' is Asake '2:30' — owner ruling, 24 Sep 2026", () => {
  const asake = rows.filter((r) => r.credit === "Asake" && r.title === "02:30");
  const alias = config.titleAliases.find((t: { register?: string; printed: string }) => t.register === "tcsn" && t.printed === "02:30");
  const noAlias = { ...config, titleAliases: config.titleAliases.filter((t: unknown) => t !== alias) };

  it("the real row, and the alias that rules it: scoped to TCSN, to Asake, to the certified release, confirmed by Paul", () => {
    expect(asake.map((r) => r.raw)).toEqual(["Asake | 02:30 | Platinum_4 | Single |  | 2026-02-06T00:00:00 | isClaimed false"]);
    expect(alias).toMatchObject({ register: "tcsn", artist: "asake", printed: "02:30", release: "2:30", ruledBy: "Paul", on: "2026-09-24" });
    expect(alias.why).toMatch(/confirmed by Paul 24 Sep 2026$/);
  });

  it("the site's own data: '2:30' holds NG Platinum ×4 among Asake's releases; '02:30' is only a chart entry, with no plaque", () => {
    const a = afro.afrobeatsArtists.find((x: { slug: string }) => x.slug === "asake")!;
    const rel = a.releases.filter((r: { title: string }) => r.title === "2:30");
    expect(rel).toHaveLength(1);
    expect(rel[0].certs).toEqual([{ c: "NG", level: "Platinum", x: 4 }]);
    expect(a.releases.filter((r: { title: string }) => r.title === "02:30")).toEqual([]);
    const chart = (a.charts ?? []).filter((r: { title: string }) => r.title === "02:30");
    expect(chart).toHaveLength(1);
    expect(chart[0]).not.toHaveProperty("certs");
  });

  it("fires without the ruling (the first live run's lead), and reads in sync on '2:30' with it", () => {
    // LABELLED EDIT of config: the "02:30" alias removed, as before Paul's ruling.
    const before = run(asake, frozenIndex(undefined, noAlias), noAlias).candidates;
    expect(before.map((x) => `${x.kind} ${x.artist} ${x.title}`)).toEqual(["NEW RELEASE asake 02:30"]);
    const got = run(asake);
    expect(got.candidates).toEqual([]);
    expect(got.counts.inSync).toBe(1);
    expect(got.readings.map((x) => [x.release, x.holding])).toEqual([["2:30", { tier: "Platinum", x: 4 }]]);
  });

  it("never lands on a certless '02:30' — not even if the chart entry were indexed as a release: no second NG ×4 is ever proposed", () => {
    // LABELLED EDIT of the frozen index: a certless single "02:30" for Asake,
    // as the charts-list entry would be if it were ever read as a release.
    const withChartEntry = frozenIndex((j) => {
      const r = releaseOf(j, "asake", "2:30");
      j.releases.push({ ...r, id: "asake::Singles::02:30", title: "02:30", group: "Singles", normTitle: "02:30", altTitles: [], holdings: {} });
    });
    expect(withChartEntry.artists.asake.byTitle.get("02:30")).toHaveLength(1);
    const got = run(asake, withChartEntry);
    expect(got.candidates).toEqual([]);
    expect(got.readings.map((x) => x.release)).toEqual(["2:30"]);
    // Without the alias, that certless release is exactly where it would go.
    expect(run(asake, frozenIndex((j) => j.releases.push({ ...releaseOf(j, "asake", "2:30"), id: "asake::Singles::02:30", title: "02:30", group: "Singles", normTitle: "02:30", altTitles: [], holdings: {} }), noAlias), noAlias).candidates.map((x) => `${x.kind} ${x.release}`)).toEqual(["NEW PLAQUE 02:30"]);
  });

  it("a real change still fires — on '2:30', the one record", () => {
    // LABELLED EDITS of the frozen index: the site's "2:30" at NG ×3, then without its NG plaque.
    const lower = run(asake, frozenIndex((j) => (releaseOf(j, "asake", "2:30").holdings["NG|"] = { tier: "Platinum", x: 3 })));
    expect(lower.candidates.map((x) => `${x.kind} ${x.release} ${x.tierRaw}`)).toEqual(["UPGRADE 2:30 Platinum_4"]);
    const none = run(asake, frozenIndex((j) => delete releaseOf(j, "asake", "2:30").holdings["NG|"]));
    expect(none.candidates.map((x) => `${x.kind} ${x.release} ${x.tierRaw}`)).toEqual(["NEW PLAQUE 2:30 Platinum_4"]);
  });
});

describe("read", () => {
  it("one conditional GET daily; the rows hash is the cursor; fewer than 500 rows is 'shrank'", async () => {
    const calls: { url: string; conditional?: boolean }[] = [];
    const request = async (req: { url: string; conditional?: boolean }) => {
      calls.push(req);
      return ok(html24);
    };
    const got = await tcsn.read({ deep: false, now: new Date("2026-09-24T06:17:00Z"), request });
    expect(calls).toEqual([expect.objectContaining({ url: PAGE, conditional: true })]);
    expect(got.cursor.rowsHash).toBe(rowsHash(live.entries));
    expect(got.notes.join(" ")).toMatch(/first read · build 9FLVyEQ3OX_KP6OGJD8nk \(printed, never compared\)/);
    const again = await tcsn.read({ deep: false, now: new Date("2026-09-25T06:17:00Z"), request, cursor: got.cursor });
    expect(again.notes.join(" ")).toMatch(/rows unchanged since 2026-09-24/);
    // LABELLED EDIT of the verdict's input: one row fewer than the 500 cap
    // (the last row; the first is the daily control).
    const v = verdict({ adapter: tcsn, got: { ...got, rows: got.rows.slice(0, -1), total: 499 }, prev: { floor: 500 }, now: new Date("2026-09-24T06:17:00Z"), config });
    expect(v).toMatchObject({ status: "shrank", detail: "register shrank (500 → 499)" });
  });

  it("the deep run asks the Wayback CDX for new captures — a lead, and its failure is only a note", async () => {
    const urls: string[] = [];
    const got = await tcsn.read({
      deep: true,
      now: new Date("2026-09-28T06:17:00Z"),
      request: async ({ url }: { url: string }) => {
        urls.push(url);
        return url.startsWith("https://web.archive.org/") ? { ok: false, kind: "network", detail: "robots.txt unreadable (HTTP 504)" } : ok(html24);
      },
    });
    expect(urls[1]).toMatch(/^https:\/\/web\.archive\.org\/cdx\/search\/cdx\?url=turntablecharts\.com%2Fcertification&output=json&from=20260923000000/);
    expect(got.rows).toHaveLength(500);
    expect(got.notes.join(" ")).toMatch(/Wayback CDX not read \(robots\.txt unreadable \(HTTP 504\)\) — a lead only/);
  });
});

describe("live health checks on the daily read (review, 24 Sep 2026)", () => {
  const now = new Date("2026-09-24T06:17:00Z");

  it("the positive control is checked DAILY: the whole live list is the daily read", () => {
    expect(tcsn.control.when).toBe("daily");
    // The row is in both real captures (23 Sep JSON, 24 Sep HTML).
    expect(toRows(fromNextData(nd23).entries).filter(tcsn.control.find)).toHaveLength(1);
    const v = verdict({ adapter: tcsn, got: { rows }, deep: false, now, config });
    expect(v.status).toBe("ok");
    expect(v.notes).toContain("control Asake | Lonely At The Top | Platinum_8 present");
    // LABELLED EDIT of the 24 Sep read: the control row gone.
    const gone = verdict({ adapter: tcsn, got: { rows: rows.filter((r) => !tcsn.control.find(r)) }, deep: false, now, config });
    expect(gone).toMatchObject({ status: "format", detail: "control row missing (Asake | Lonely At The Top | Platinum_8)" });
  });

  it("a parser that finds its markers but reads the columns the wrong way round is `unmatched`, never '✅ read'", () => {
    const matched = run(rows).counts.matched;
    expect(matched).toBe(291); // the rows naming the sixteen on 24 Sep 2026
    const first = matchedVerdict({ adapter: tcsn, matched, deep: false, prev: null });
    expect(first.status).toBe("ok");
    expect(first.track.matched).toEqual({ daily: 291 });
    // LABELLED EDIT of the 24 Sep read: artiste and title swapped on every row.
    // Every row is still there, every tier parses, every field is text…
    const swapped = rows.map((r) => ({ ...r, credit: r.title, title: r.credit }));
    const shape = verdict({ adapter: tcsn, got: { rows: swapped }, deep: false, now, config: { ...config, controls: {} } });
    expect(shape.status).toBe("format"); // …only the daily control notices…
    const noControl = { ...tcsn, control: null };
    expect(verdict({ adapter: noControl, got: { rows: swapped }, deep: false, now, config }).status).toBe("ok"); // …which a register without one lacks.
    // The matched floor notices on its own.
    const after = run(swapped).counts.matched;
    expect(after).toBeLessThan(matched / 2);
    const v = matchedVerdict({ adapter: tcsn, matched: after, deep: false, prev: { matched: first.track.matched } });
    expect(v.status).toBe("unmatched");
    expect(v.detail).toBe(`rows naming the 16 dropped from 291 to ${after} on the daily read — the parser may be misreading credits or titles`);
  });
});
