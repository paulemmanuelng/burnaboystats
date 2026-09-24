// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { verdict } from "../scripts/cert-watch/health.mjs";
import { musiccanada, parseAwards, pageUrl, FIELDS } from "../scripts/cert-watch/adapters/musiccanada.mjs";
import { hostGap } from "../scripts/cert-watch/http.mjs";
import { parseRobots, robotsVerdict } from "../scripts/cert-watch/robots.mjs";
import { fixture, config } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

describe("Music Canada — parse the saved wp-json pages", () => {
  const rows = parseAwards(fixture("musiccanada/awards-p1-2026-09-23.json"));

  it("reads all 100 awards and the Dai Dai control verbatim", () => {
    expect(rows).toHaveLength(100);
    const dai = rows.find(musiccanada.control.find)!;
    expect(dai).toMatchObject({
      rowId: "89702",
      credit: "Shakira, Burna Boy",
      title: "Dai Dai",
      tierRaw: "award_cert-double-platinum-single",
      formatRaw: "award_type-single",
      format: "single",
      reading: { tier: "Platinum", x: 2 },
      dateRaw: "2026-09-21T15:53:40",
      url: "https://musiccanada.com/award/shakira-burna-boy/",
    });
    expect(dai.raw).toContain('content.rendered "<p>Dai Dai</p>\\n"');
  });

  it("reads the seven-times form served on 22 Sep", () => {
    expect(rows.find((r) => r.rowId === "89706")).toMatchObject({ credit: "sombr", title: "back to friends", reading: { tier: "Platinum", x: 7 } });
  });

  it("decodes the entities a register prints, keeping the JSON verbatim in raw", () => {
    const newest = parseAwards(fixture("musiccanada/newest5-2026-09-24.json"));
    const zach = newest.find((r) => r.rowId === "89698")!;
    expect(zach.title).toBe("Cold Beer & Country Music");
    expect(zach.raw).toContain("Cold Beer &amp; Country Music");
    expect(newest[0].rowId).toBe("89710");
  });

  it("parses every tier on the page — no unparsed rows", () => {
    expect(rows.filter((r) => !r.reading)).toEqual([]);
  });
});

describe("Music Canada — the request", () => {
  it("asks for the listed fields only: never ACF (label contact names), never _gp_search", () => {
    const u = new URL(pageUrl(1));
    expect(u.searchParams.get("_fields")).toBe("id,date,title,content,class_list,link");
    expect(FIELDS).not.toMatch(/acf/i);
    expect(pageUrl(1)).not.toMatch(/_gp_search|acf/i);
    expect(u.searchParams.get("orderby")).toBe("id");
    expect(u.searchParams.get("per_page")).toBe("100");
  });

  it("honours robots.txt's Crawl-delay: 30 between requests", () => {
    const groups = parseRobots(fixture("robots/musiccanada.com.txt"));
    const v = robotsVerdict(groups, "/wp-json/wp/v2/award");
    expect(v.allowed).toBe(true);
    expect(v.crawlDelay).toBe(30);
    expect(hostGap(config, "musiccanada.com", v.crawlDelay)).toBe(30000);
    expect(hostGap(config, "musiccanada.com", null)).toBe(30000);
  });

  it("stops at the last id seen", async () => {
    const calls: string[] = [];
    const body = fixture("musiccanada/newest5-2026-09-24.json");
    const ctx = {
      cursor: { lastId: 89702 },
      request: async (req: { url: string }) => {
        calls.push(req.url);
        return { ok: true, status: 200, headers: { "x-wp-total": "31859", "x-wp-totalpages": "6372" }, body };
      },
    };
    const got = await musiccanada.read(ctx);
    expect(calls).toHaveLength(1);
    expect(got.cursor.lastId).toBe(89710);
    // The rolling control rides in the cursor: the three newest ids, each
    // with a digest of credit, title and tier — never the row itself (§6.1).
    expect(got.cursor.rolling.map((r: { id: number }) => r.id)).toEqual([89710, 89707, 89706]);
    for (const r of got.cursor.rolling) expect(Object.keys(r).sort()).toEqual(["h", "id"]);
    expect(got.notes.join(" ")).toMatch(/3 new since id 89702/);
  });
});

describe("the live control (review, 24 Sep 2026)", () => {
  it("id 89702 is checked whenever the newest-first read by id reaches below it, and not otherwise", async () => {
    const now = new Date("2026-09-24T06:17:00Z");
    // The real 24 Sep answer: ids 89710, 89707, 89706, 89702, 89698.
    const body = fixture("musiccanada/newest5-2026-09-24.json");
    const got = await musiccanada.read({ cursor: null, request: async () => ({ ok: true, status: 200, headers: {}, body }) });
    expect(got.rows.map((r) => r.rowId)).toEqual(["89710", "89707", "89706", "89702", "89698"]);
    expect(got.window).toEqual({ minId: 89698 });
    expect(verdict({ adapter: musiccanada, got, now, config }).notes).toContain("control 89702 present");
    // LABELLED EDIT of that read: the Dai Dai award gone — a changed format.
    const lost = { ...got, rows: got.rows.filter((r) => r.rowId !== "89702") };
    expect(verdict({ adapter: musiccanada, got: lost, now, config })).toMatchObject({ status: "format", detail: "control row missing (89702)" });
    // LABELLED EDIT: only the three newest (89710–89706) — the read does not
    // reach 89702, so the control is not due and the line says so.
    const three = { ...got, rows: got.rows.slice(0, 3), window: { minId: 89706 } };
    const v = verdict({ adapter: musiccanada, got: three, now, config });
    expect(v.status).toBe("ok");
    expect(v.notes).toContain("control row older than today's read reaches — checked in the tests");
  });
});

describe("the rolling control — the live check id 89702 can no longer give (review follow-up, 24 Sep 2026)", () => {
  const now = new Date("2026-09-24T06:17:00Z");
  // The real 24 Sep answer: ids 89710, 89707, 89706, 89702, 89698.
  const body = fixture("musiccanada/newest5-2026-09-24.json");
  const serve = async () => ({ ok: true, status: 200, headers: {}, body });

  it("a first read has none yet; the next read goes back to the last id seen, so it always reaches the carried rows", async () => {
    const first = await musiccanada.read({ cursor: null, request: serve });
    expect(first.rolling).toBeNull();
    expect(verdict({ adapter: musiccanada, got: first, now, config }).notes).toContain("rolling control: none yet (no earlier clean read to carry one)");
    const second = await musiccanada.read({ cursor: first.cursor, request: serve });
    expect(second.rolling!.checks.map((c) => `${c.label} ${c.due}`)).toEqual(["id 89710 true", "id 89707 true", "id 89706 true"]);
    const v = verdict({ adapter: musiccanada, got: second, now, config });
    expect(v.status).toBe("ok");
    expect(v.notes).toContain("rolling control: 3 of 3 of the last clean read's newest rows present");
  });

  it("the carried awards gone, or read differently, is a changed format; one withdrawn award is not", async () => {
    const first = await musiccanada.read({ cursor: null, request: serve });
    const second = await musiccanada.read({ cursor: first.cursor, request: serve });
    // LABELLED EDIT of the 24 Sep read: 89710, 89707 and 89706 gone.
    const gone = { ...second, rows: second.rows.filter((r) => !["89710", "89707", "89706"].includes(r.rowId)) };
    expect(verdict({ adapter: musiccanada, got: gone, now, config })).toMatchObject({
      status: "format",
      detail: "rolling control missing — none of the last clean read's 3 newest rows is in today's read (id 89710; id 89707; id 89706)",
    });
    // LABELLED EDIT: the same ids, but every title read as the credit (a
    // shifted field) — the digests no longer match.
    const shifted = { ...second, rows: second.rows.map((r) => ({ ...r, title: r.credit })) };
    expect(verdict({ adapter: musiccanada, got: shifted, now, config }).status).toBe("format");
    // LABELLED EDIT: only 89710 gone (Music Canada withdrew or re-posted it).
    const one = { ...second, rows: second.rows.filter((r) => r.rowId !== "89710") };
    const v = verdict({ adapter: musiccanada, got: one, now, config });
    expect(v.status).toBe("ok");
    expect(v.notes).toContain("rolling control: 2 of 3 of the last clean read's newest rows present (not found: id 89710)");
  });

  it("id 89702 stays a test-only control: the daily read never reaches back to it again", () => {
    expect(musiccanada.control.when).toBe("tests");
    expect((musiccanada as { rollingControl?: boolean }).rollingControl).toBe(true);
  });
});
