// @vitest-environment node
import { describe, it, expect } from "vitest";
import { ifpiDanmark, parsePage, PAGE, pageUrl, dateDescUrl, ROUNDS, rollingDue } from "../scripts/cert-watch/adapters/ifpi-danmark.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { verdict, badCreditOrTitle } from "../scripts/cert-watch/health.mjs";
import { AUTOMATED } from "../scripts/cert-watch/adapters/index.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex } from "./certWatchHelpers";

/** IFPI Danmark on real saved pages. The Boom replay is in certWatchDiff.test.ts. */
describe("parse", () => {
  it("reads a page of 50 rows verbatim, every status parsed", () => {
    const rows = parsePage(fixture("danmark/page0.html.gz"));
    expect(rows).toHaveLength(50);
    expect(rows[0]).toMatchObject({ dateRaw: "16.09.2026.", credit: "Kanye West, DJ Premier", title: "Everything I Am", formatRaw: "Track", format: "single", tierRaw: "Guld", reading: { tier: "Gold", x: 1 } });
    expect(rows[0].extra.iso).toBe("2026-09-16");
    expect(rows.filter((r) => !r.reading)).toEqual([]);
  });

  it("finds the positive control: Dave feat. Tems | Raindance | Platin | 07.07.2026", () => {
    const rows = parsePage(fixture("danmark/page6.html.gz")).filter(ifpiDanmark.control.find);
    expect(rows).toHaveLength(1);
    expect(rows[0].raw).toBe("07.07.2026. | Dave feat. Tems | Raindance | Universal Music | Track | Platin");
  });

  it("keeps the register's truncated credit verbatim", () => {
    const boom = parsePage(fixture("danmark/boom-recheck.html.gz")).filter((r) => r.title === "Boom" && r.credit.startsWith("Major Lazer"));
    expect(boom.map((r) => `${r.dateRaw} ${r.credit} ${r.tierRaw}`)).toEqual([
      "01.08.2017. Major Lazer Feat. Moti Ty Dolla $ign... Platin",
      "24.05.2016. Major Lazer Feat. Moti Ty Dolla $ign... Guld",
    ]);
  });

  it("is read over http — https fails the certificate's name check", () => {
    expect(PAGE.startsWith("http://")).toBe(true);
    expect(new URL(pageUrl(0)).protocol).toBe("http:");
    expect(new URL(dateDescUrl(0)).protocol).toBe("http:");
    expect(ifpiDanmark.registerUrl.startsWith("http://")).toBe(true);
  });
});

describe("read: the union over two tie orders", () => {
  const run = "danmark/run-2026-09-24";
  const serveFrom = (map: (url: string, repeat: number) => string) => {
    const calls: { url: string; repeat: number }[] = [];
    const request = async ({ url, repeat = 0 }: { url: string; repeat?: number }) => {
      calls.push({ url, repeat });
      return { ok: true, status: 200, headers: {}, body: fixture(map(url, repeat)) };
    };
    return { calls, request };
  };
  const live = (url: string, repeat: number) => {
    const n = url.match(/page=(\d)/)![1];
    if (url.includes("order=field_certdato")) return `${run}/page${n}__datedesc.html.gz`;
    return `${run}/page${n}__default${repeat ? "__2" : ""}.html.gz`;
  };

  it("recovers the rows the default order never prints (140 → 152 on 24 Sep 2026), in ≤ 9 requests", async () => {
    const s = serveFrom(live);
    const got = await ifpiDanmark.read({ cursor: null, request: s.request });
    expect(s.calls).toHaveLength(9);
    expect(s.calls.map((c) => c.url)).toEqual(ROUNDS.flatMap((r) => [0, 1, 2].map((n) => r.url(n))));
    expect(s.calls.slice(6).every((c) => c.repeat === 1)).toBe(true);
    expect(got.rows).toHaveLength(152);
    const defaultOnly = new Set([0, 1, 2].flatMap((n) => parsePage(fixture(`${run}/page${n}__default.html.gz`)).map((r) => r.raw)));
    expect(defaultOnly.size).toBe(140);
    expect(got.notes.join(" ")).toMatch(/10 row\(s\) printed on two pages/);
    expect(got.cursor.lastDate).toBe("2026-09-16");
    // The rolling control rides in the cursor: one row from each of the three
    // newest dates, as (date, digest) — never the verbatim row (§6.1).
    expect(got.cursor.rolling.map((r: { iso: string; tie?: boolean }) => `${r.iso}${r.tie ? " tie" : ""}`)).toEqual(["2026-09-16 tie", "2026-09-08 tie", "2026-09-01 tie"]);
    for (const r of got.cursor.rolling) expect(Object.keys(r).sort()).toEqual(["h", "iso", "tie"]);
  });

  it("stops after a round that adds nothing", async () => {
    // Every round served the default pages: round 2 adds nothing, so no round 3.
    const s = serveFrom((url) => `${run}/page${url.match(/page=(\d)/)![1]}__default.html.gz`);
    await ifpiDanmark.read({ cursor: null, request: s.request });
    expect(s.calls).toHaveLength(6);
  });

  it("says so when the pages read do not reach back to the last run", async () => {
    const s = serveFrom(live);
    const got = await ifpiDanmark.read({ cursor: { lastDate: "2026-07-01" }, request: s.request });
    expect(got.notes.join(" ")).toMatch(/after the last run's newest 2026-07-01 — rows in between were not read/);
  });
});

describe("24 Sep 2026: 0 of 152 rows matched — real, not a broken parse (review)", () => {
  const run = "danmark/run-2026-09-24";
  const files = [0, 1, 2].flatMap((n) => [`page${n}__default`, `page${n}__datedesc`, `page${n}__default__2`]).map((f) => `${run}/${f}.html.gz`);
  const request = async ({ url, repeat = 0 }: { url: string; repeat?: number }) => {
    const n = url.match(/page=(\d)/)![1];
    const f = url.includes("order=field_certdato") ? `page${n}__datedesc` : `page${n}__default${repeat ? "__2" : ""}`;
    return { ok: true, status: 200, headers: {}, body: fixture(`${run}/${f}.html.gz`) };
  };
  const ours = /burna\s*boy|wiz\s*kid|davido|\brema\b|\btems\b|\btyla\b|ayra\s*starr|\basake\b|omah\s*lay|\bckay\b|olamide|black\s*sherif|\bbnxn\b|\bbuju\b|victony|fireboy|seyi\s*vibez/i;

  it("the parser reads every row of every page, in six well-formed fields", () => {
    for (const f of files) {
      const html = fixture(f);
      const rows = parsePage(html);
      // As many rows as the page has <tr class="certpagetable"> — independent of the parser.
      expect(rows.length, f).toBe(html.split('<tr class="certpagetable">').length - 1);
      expect(rows.length, f).toBe(50);
      expect(rows.filter(badCreditOrTitle), f).toEqual([]);
      expect(rows.every((r) => /^\d{2}\.\d{2}\.\d{4}\.$/.test(r.dateRaw) && r.extra.iso && r.reading), f).toBe(true);
    }
  });

  it("the pages hold no row naming the sixteen — the raw HTML says so, not only the parser — and the window ends 11.08.2026", async () => {
    const got = await ifpiDanmark.read({ cursor: null, request });
    expect(got.rows).toHaveLength(152);
    expect(got.window).toEqual({ oldest: "2026-08-11" });
    for (const f of files) expect(fixture(f).replace(/<[^>]+>/g, " ").match(ours), f).toBeNull();
    expect(evaluateRows(ifpiDanmark, got.rows, { index: frozenIndex(), liveArtists: LIVE_ARTISTS, config }).counts.matched).toBe(0);
    // …while the same parser, on the same register's page 6 (23 Sep), finds
    // and matches the Raindance row: the zero is the register's newest 152.
    const p6 = parsePage(fixture("danmark/page6.html.gz"));
    expect(evaluateRows(ifpiDanmark, p6, { index: frozenIndex(), liveArtists: LIVE_ARTISTS, config }).counts.matched).toBe(1);
  });

  it("the control is checked live whenever the pages read reach back past 07.07.2026", async () => {
    const now = new Date("2026-09-24T06:17:00Z");
    const got = await ifpiDanmark.read({ cursor: null, request });
    const today = verdict({ adapter: ifpiDanmark, got, now, config });
    expect(today.status).toBe("ok");
    expect(today.notes).toContain("control row older than today's read reaches — checked in the tests");
    // LABELLED EDIT of the read: page 6 of 23 Sep added, so it reaches 30.06.2026.
    const p6 = parsePage(fixture("danmark/page6.html.gz"));
    const deeper = { ...got, rows: [...got.rows, ...p6], window: { oldest: "2026-06-30" } };
    expect(verdict({ adapter: ifpiDanmark, got: deeper, now, config }).notes).toContain("control 07.07.2026. | Dave feat. Tems | Raindance present");
    // …and without the Raindance row, the same read is a changed format.
    const lost = { ...deeper, rows: deeper.rows.filter((r) => !ifpiDanmark.control.find(r)) };
    expect(verdict({ adapter: ifpiDanmark, got: lost, now, config })).toMatchObject({ status: "format", detail: "control row missing (07.07.2026. | Dave feat. Tems | Raindance)" });
  });

  it("a parser that shifted a column (dates in the credit) is a changed format, whatever it matched", async () => {
    const got = await ifpiDanmark.read({ cursor: null, request });
    // LABELLED EDIT of the 24 Sep read: date and artist swapped on every row.
    const shifted = { ...got, rows: got.rows.map((r) => ({ ...r, credit: r.dateRaw, dateRaw: r.credit })) };
    expect(verdict({ adapter: ifpiDanmark, got: shifted, now: new Date("2026-09-24T06:17:00Z"), config })).toMatchObject({
      status: "format",
      detail: "152 of 152 rows have an empty, date-like or markup credit or title",
    });
  });

  it("is never judged on matched rows: its newest-first window legitimately names none of the sixteen", () => {
    expect((ifpiDanmark as { matchedFloor?: unknown }).matchedFloor).toBeUndefined();
  });
});

describe("the rolling control — the live check the fixed row can no longer give (review follow-up, 24 Sep 2026)", () => {
  const run = "danmark/run-2026-09-24";
  const request = async ({ url, repeat = 0 }: { url: string; repeat?: number }) => {
    const n = url.match(/page=(\d)/)![1];
    const f = url.includes("order=field_certdato") ? `page${n}__datedesc` : `page${n}__default${repeat ? "__2" : ""}`;
    return { ok: true, status: 200, headers: {}, body: fixture(`${run}/${f}.html.gz`) };
  };
  const now = new Date("2026-09-24T06:17:00Z");

  it("the fixed control (07.07.2026) is out of the daily window for good: pages 0–2 only move forward", async () => {
    const got = await ifpiDanmark.read({ cursor: null, request });
    expect(got.window.oldest! > "2026-07-07").toBe(true);
    expect(ifpiDanmark.control.when).toBe("tests");
    expect((ifpiDanmark as { rollingControl?: boolean }).rollingControl).toBe(true);
  });

  it("a first read has none yet and says so; the next read of the same register holds the last one's rows", async () => {
    const first = await ifpiDanmark.read({ cursor: null, request });
    expect(first.rolling).toBeNull();
    expect(verdict({ adapter: ifpiDanmark, got: first, now, config }).notes).toContain("rolling control: none yet (no earlier clean read to carry one)");
    // The next day's read (here: the same real pages) carries the cursor.
    const second = await ifpiDanmark.read({ cursor: first.cursor, request });
    expect(second.rolling!.checks.map((c) => c.due)).toEqual([true, true, true]);
    const v = verdict({ adapter: ifpiDanmark, got: second, now, config });
    expect(v.status).toBe("ok");
    expect(v.notes).toContain("rolling control: 3 of 3 of the last clean read's newest rows present");
  });

  it("none of them in today's read is a changed format; one withdrawn row is not", async () => {
    const first = await ifpiDanmark.read({ cursor: null, request });
    const second = await ifpiDanmark.read({ cursor: first.cursor, request });
    const carried = (r: { extra: { iso: string } }) => second.rolling!.checks.some((c) => c.find(r));
    // LABELLED EDIT of the 24 Sep read: the three carried rows gone.
    const gone = { ...second, rows: second.rows.filter((r) => !carried(r)) };
    expect(second.rows.length - gone.rows.length).toBe(3);
    const v = verdict({ adapter: ifpiDanmark, got: gone, now, config });
    expect(v.status).toBe("format");
    expect(v.detail).toMatch(/^rolling control missing — none of the last clean read's 3 newest rows is in today's read \(the 2026-09-16 row /);
    // LABELLED EDIT: only the 16.09.2026 carried row gone — the register may withdraw a row.
    const one = second.rolling!.checks[0];
    const withdrawn = { ...second, rows: second.rows.filter((r) => !one.find(r)) };
    const w = verdict({ adapter: ifpiDanmark, got: withdrawn, now, config });
    expect(w.status).toBe("ok");
    expect(w.notes.join(" ")).toMatch(/rolling control: 2 of 3 of the last clean read's newest rows present \(not found: the 2026-09-16 row /);
    // LABELLED EDIT: a parser that mangles the artist column matches none of
    // the digests, whatever the dates say.
    const mangled = { ...second, rows: second.rows.map((r) => ({ ...r, raw: r.raw.replace(/ \| [^|]+ \| /, " | ? | ") })) };
    expect(verdict({ adapter: ifpiDanmark, got: mangled, now, config }).status).toBe("format");
  });

  it("a carried row whose date others share is due only once the read goes past that date", async () => {
    const first = await ifpiDanmark.read({ cursor: null, request });
    const carried = first.cursor.rolling;
    const dueAt = (oldest: string) => carried.map((p: { iso: string; tie?: boolean }) => rollingDue(p, oldest));
    // The real reach of pages 0–2 on 24 Sep: back to 11.08.2026 — all due.
    expect(first.window.oldest).toBe("2026-08-11");
    expect(dueAt("2026-08-11")).toEqual([true, true, true]);
    // A read ending ON a carried date may cut that date's batch: not due.
    expect(dueAt("2026-09-16")).toEqual([false, false, false]);
    expect(dueAt("2026-09-08")).toEqual([true, false, false]);
    // LABELLED EDIT: the same entry marked as its date's only row — due on
    // the date itself.
    expect(rollingDue({ ...carried[1], tie: undefined }, "2026-09-08")).toBe(true);
  });

  it("every automated register has a live check on some read: a live control, a matched floor or a rolling control", () => {
    // A fixed control that only a `window` could reach is not one: the
    // window only moves forward (this register, Music Canada).
    const live = (r: { control?: { when: string }; matchedFloor?: unknown; rollingControl?: boolean }) =>
      !!r.matchedFloor || !!r.rollingControl || (!!r.control && r.control.when !== "tests");
    expect(AUTOMATED.filter((r) => !live(r)).map((r) => r.id).sort()).toEqual(["cns-ifpi-cz", "cns-ifpi-sk", "ifpi-greece"]);
  });
});
