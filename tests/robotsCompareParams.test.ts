import { describe, expect, it } from "vitest";
import robots, { COMPARE_VARIANTS } from "../app/robots";

// The bot flood of 9–10 Oct 2026: ~927,000 requests a day to /compare's
// query-string variants (Lightpanda, GPTBot, SE Ranking, PerplexityBot,
// Amazonbot). Robots closes the variants and keeps every real page open.

const rules = () => {
  const r = robots().rules;
  return Array.isArray(r) ? r : [r];
};
const list = (v: string | string[] | undefined) => (v === undefined ? [] : Array.isArray(v) ? v : [v]);

// Google's matching: a rule matches when the path starts with it.
const blockedFor = (ua: string, path: string) => {
  const group = rules().find((g) => list(g.userAgent).includes(ua)) ?? rules().find((g) => list(g.userAgent).includes("*"))!;
  const hit = (rs: string[]) => rs.filter((r) => path.startsWith(r)).sort((a, b) => b.length - a.length)[0] ?? "";
  const d = hit(list(group.disallow));
  const a = hit(list(group.allow));
  return d.length > a.length;
};

describe("robots closes /compare's query-string variants, and only them", () => {
  it("every group, '*' and each named crawler, carries the rule", () => {
    expect(COMPARE_VARIANTS).toBe("/compare?");
    for (const g of rules()) expect(list(g.disallow)).toEqual([COMPARE_VARIANTS]);
  });

  it("the variants the bots hit are closed to them", () => {
    for (const ua of ["*", "GPTBot", "PerplexityBot", "Amazonbot", "SERankingBacklinksBot"]) {
      expect(blockedFor(ua, "/compare?a=burna-boy"), ua).toBe(true);
      expect(blockedFor(ua, "/compare?mode=country&feat=0"), ua).toBe(true);
      expect(blockedFor(ua, "/compare?a=burna-boy&b=wizkid&sa=dai-dai&ng=1"), ua).toBe(true);
    }
  });

  it("the real pages stay open", () => {
    for (const ua of ["*", "GPTBot", "Google-Extended", "Bingbot"]) {
      for (const p of ["/", "/compare", "/compare/burna-boy-vs-wizkid", "/compare/in", "/compare/in/united-kingdom", "/certifications", "/records/africas-biggest"]) {
        expect(blockedFor(ua, p), `${ua} ${p}`).toBe(false);
      }
    }
  });

  it("negative control: the rules as shipped before the fix closed nothing", () => {
    const shipped = [{ userAgent: "*", allow: "/" }, { userAgent: "GPTBot", allow: "/" }];
    for (const g of shipped) expect(list((g as { disallow?: string }).disallow)).toEqual([]);
  });
});
