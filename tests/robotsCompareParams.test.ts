import { describe, expect, it } from "vitest";
import type { MetadataRoute } from "next";
import robots, { AI_CRAWLERS, CLOSED_CRAWLERS, COMPARE_VARIANTS } from "../app/robots";

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
    for (const ua of ["*", "GPTBot", "PerplexityBot", "Amazonbot", "SERankingBacklinksBot", "Claude-User", "Claude-SearchBot"]) {
      expect(blockedFor(ua, "/compare?a=burna-boy"), ua).toBe(true);
      expect(blockedFor(ua, "/compare?mode=country&feat=0"), ua).toBe(true);
      expect(blockedFor(ua, "/compare?a=burna-boy&b=wizkid&sa=dai-dai&ng=1"), ua).toBe(true);
    }
  });

  it("the real pages stay open", () => {
    for (const ua of ["*", "GPTBot", "Google-Extended", "Bingbot", "Amazonbot", "ClaudeBot", "Claude-User", "Claude-SearchBot"]) {
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
    // app/robots.ts on main 35fe0849: "*" and the 14 AI crawlers, no closed group
    // (15 since 18 Nov; the open groups are still the ones that matter here).
    const shipped = rules().filter((g) => !closed(g));
    for (const ua of NAMES) {
      expect(blockedFor(ua, "/", shipped), ua).toBe(false);
      expect(blockedFor(ua, "/records/africas-biggest", shipped), ua).toBe(false);
    }
  });
});

describe("the AI allowlist names Anthropic's current agents (18 Nov 2026)", () => {
  // Anthropic's bots-and-crawlers page, read 18 Nov 2026, names three agents:
  // ClaudeBot, Claude-User and Claude-SearchBot. "Claude-Web" is not one.
  const ANTHROPIC = ["ClaudeBot", "Claude-User", "Claude-SearchBot"];
  // The allowlist as main served it before this change (app/robots.ts on
  // 8e9e1859), word for word.
  const BEFORE = [
    "GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User", "ClaudeBot", "Claude-Web",
    "Google-Extended", "Applebot-Extended", "Amazonbot", "Bingbot", "xAI-Bot", "GrokBot", "Grok",
  ];
  const groupFor = (ua: string, rs: Rule[] = rules()) => rs.find((g) => list(g.userAgent).includes(ua));

  it("each of the three has a group of its own, open but for the /compare variants", () => {
    for (const ua of ANTHROPIC) {
      const g = groupFor(ua);
      expect(g, ua).toBeDefined();
      expect(list(g!.userAgent), ua).toEqual([ua]);
      expect(list(g!.allow), ua).toEqual(["/"]);
      expect(list(g!.disallow), ua).toEqual([COMPARE_VARIANTS]);
    }
  });

  it("Claude-Web is gone, and every other entry is as it was, in the same order", () => {
    expect(groupFor("Claude-Web")).toBeUndefined();
    expect(AI_CRAWLERS).not.toContain("Claude-Web");
    const others = (xs: readonly string[]) => xs.filter((ua) => !ANTHROPIC.includes(ua) && ua !== "Claude-Web");
    expect(others(AI_CRAWLERS)).toEqual(others(BEFORE));
    expect(AI_CRAWLERS).toEqual([...BEFORE.slice(0, 6), "Claude-User", "Claude-SearchBot", ...BEFORE.slice(7)]);
    // And robots.txt carries one group per name on the list, after "*".
    expect(rules().slice(1, 1 + AI_CRAWLERS.length).map((g) => list(g.userAgent))).toEqual(AI_CRAWLERS.map((ua) => [ua]));
  });

  it("negative control: the list main served named Claude-Web and gave the other two no group", () => {
    const before: Rule[] = [
      { userAgent: "*", allow: "/", disallow: COMPARE_VARIANTS },
      ...BEFORE.map((userAgent) => ({ userAgent, allow: "/", disallow: COMPARE_VARIANTS })),
      { userAgent: CLOSED_CRAWLERS, disallow: "/" },
    ];
    expect(groupFor("Claude-Web", before)).toBeDefined();
    expect(groupFor("Claude-User", before)).toBeUndefined();
    expect(groupFor("Claude-SearchBot", before)).toBeUndefined();
    // They read "*" instead, which opens the same pages: the change names
    // them, so no later edit to "*" can close them by accident. Access is the same.
    for (const p of PAGES) {
      expect(blockedFor("Claude-User", p, before), p).toBe(false);
      expect(blockedFor("Claude-User", p), p).toBe(false);
    }
  });
});
