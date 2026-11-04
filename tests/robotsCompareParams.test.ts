import { describe, expect, it } from "vitest";
import type { MetadataRoute } from "next";
import robots, { CLOSED_CRAWLERS, COMPARE_VARIANTS } from "../app/robots";

// The bot flood of 9–10 Oct 2026: ~927,000 requests a day to /compare's
// query-string variants (Lightpanda, GPTBot, SE Ranking, PerplexityBot,
// Amazonbot). Robots closes the variants and keeps every real page open.
// Paul, 4 Nov 2026: the Chinese crawlers are closed to the whole site, in a
// group of their own; every other group is as it was.

type Rule = Exclude<MetadataRoute.Robots["rules"], unknown[]>;
const rules = (): Rule[] => {
  const r = robots().rules;
  return Array.isArray(r) ? r : [r];
};
const list = (v: string | string[] | undefined) => (v === undefined ? [] : Array.isArray(v) ? v : [v]);

// Google's matching: a crawler obeys the group that names it, else "*"; a rule
// matches when the path starts with it, and the longer of allow and disallow wins.
const blockedFor = (ua: string, path: string, rs: Rule[] = rules()) => {
  const group = rs.find((g) => list(g.userAgent).includes(ua)) ?? rs.find((g) => list(g.userAgent).includes("*"))!;
  const hit = (xs: string[]) => xs.filter((r) => path.startsWith(r)).sort((a, b) => b.length - a.length)[0] ?? "";
  const d = hit(list(group.disallow));
  const a = hit(list(group.allow));
  return d.length > a.length;
};
const closed = (g: Rule) => list(g.userAgent).some((ua) => CLOSED_CRAWLERS.includes(ua));
const PAGES = ["/", "/compare", "/compare/burna-boy-vs-wizkid", "/compare/in", "/compare/in/united-kingdom", "/certifications", "/records/africas-biggest"];

describe("robots closes /compare's query-string variants, and only them", () => {
  it("every open group, '*' and each named AI crawler, carries the rule", () => {
    expect(COMPARE_VARIANTS).toBe("/compare?");
    const open = rules().filter((g) => !closed(g));
    expect(open.length).toBeGreaterThan(1);
    for (const g of open) {
      expect(list(g.disallow)).toEqual([COMPARE_VARIANTS]);
      expect(list(g.allow)).toEqual(["/"]);
    }
  });

  it("the variants the bots hit are closed to them", () => {
    for (const ua of ["*", "GPTBot", "PerplexityBot", "Amazonbot", "SERankingBacklinksBot"]) {
      expect(blockedFor(ua, "/compare?a=burna-boy"), ua).toBe(true);
      expect(blockedFor(ua, "/compare?mode=country&feat=0"), ua).toBe(true);
      expect(blockedFor(ua, "/compare?a=burna-boy&b=wizkid&sa=dai-dai&ng=1"), ua).toBe(true);
    }
  });

  it("the real pages stay open", () => {
    for (const ua of ["*", "GPTBot", "Google-Extended", "Bingbot", "Amazonbot"]) {
      for (const p of PAGES) expect(blockedFor(ua, p), `${ua} ${p}`).toBe(false);
    }
  });

  it("negative control: the rules as shipped before the fix closed nothing", () => {
    const shipped = [{ userAgent: "*", allow: "/" }, { userAgent: "GPTBot", allow: "/" }];
    for (const g of shipped) expect(list((g as { disallow?: string }).disallow)).toEqual([]);
  });
});

describe("robots closes the whole site to the Chinese crawlers (4 Nov 2026)", () => {
  const NAMES = ["Bytespider", "TikTokSpider", "Baiduspider", "Sogou web spider", "360Spider", "HaosouSpider", "YisouSpider", "PetalBot", "ChatGLM-Spider"];

  it("one group names all nine, disallows '/', and allows nothing", () => {
    expect([...CLOSED_CRAWLERS].sort()).toEqual([...NAMES].sort());
    const groups = rules().filter(closed);
    expect(groups).toHaveLength(1);
    expect([...list(groups[0].userAgent)].sort()).toEqual([...NAMES].sort());
    expect(list(groups[0].disallow)).toEqual(["/"]);
    expect(list(groups[0].allow)).toEqual([]);
  });

  it("every page, and every /compare variant, is closed to each of them", () => {
    for (const ua of NAMES) {
      for (const p of [...PAGES, "/compare?a=burna-boy", "/sitemap.xml", "/api/v1/certifications"]) expect(blockedFor(ua, p), `${ua} ${p}`).toBe(true);
    }
  });

  it("no AI crawler on the allowlist, and not '*', is in the closed group", () => {
    const open = rules().filter((g) => !closed(g)).flatMap((g) => list(g.userAgent));
    expect(open).toContain("*");
    for (const ua of open) expect(CLOSED_CRAWLERS, ua).not.toContain(ua);
    expect(open).toContain("Amazonbot");
  });

  it("negative control: the rules main served on 4 Nov 2026 left them the whole site", () => {
    // app/robots.ts on main 35fe0849: "*" and the 14 AI crawlers, no closed group.
    const shipped = rules().filter((g) => !closed(g));
    for (const ua of NAMES) {
      expect(blockedFor(ua, "/", shipped), ua).toBe(false);
      expect(blockedFor(ua, "/records/africas-biggest", shipped), ua).toBe(false);
    }
  });
});
