// @vitest-environment node
import { describe, it, expect } from "vitest";
import { musiccanada, parseAwards, pageUrl, FIELDS } from "../scripts/cert-watch/adapters/musiccanada.mjs";
import { hostGap } from "../scripts/cert-watch/http.mjs";
import { parseRobots, robotsVerdict } from "../scripts/cert-watch/robots.mjs";
import { fixture, config } from "./certWatchHelpers";

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
    expect(got.cursor).toEqual({ lastId: 89710 });
    expect(got.notes.join(" ")).toMatch(/3 new since id 89702/);
  });
});
