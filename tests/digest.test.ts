import { describe, it, expect } from "vitest";
import type { Update } from "../app/data/updates";
import { updates } from "../app/data/updates";
import { selectDigest, digestWindow, digestSubject, leadClause, DIGEST_CAP, CATEGORY_RANK } from "../app/lib/digest";
import { renderDigestHtml, renderDigestText, UNSUBSCRIBE_PLACEHOLDER } from "../app/lib/digestEmail";

// The Saturday digest is sent by a script nobody watches. These are the rules
// it sends under, proven on fixtures AND on the live feed — the second because
// a rule that holds on invented entries and fails on the real file is the
// kind of guard this repo has shipped before (RETRACTIONS.md #6).

const u = (date: string, category: Update["category"], text: string, extra: Partial<Update> = {}): Update => ({
  date, category, text, href: "/x", ...extra,
});

describe("digestWindow — the seven days ending on the send day", () => {
  it("is inclusive at both ends and counts in UTC", () => {
    expect(digestWindow(new Date("2026-09-19T17:00:00Z"))).toEqual({ from: "2026-09-13", to: "2026-09-19" });
    expect(digestWindow(new Date("2026-10-03T17:00:00Z"))).toEqual({ from: "2026-09-27", to: "2026-10-03" });
  });
});

describe("selectDigest — what goes in, in what order", () => {
  const now = new Date("2026-09-19T17:00:00Z");
  it("takes only the week's entries", () => {
    const out = selectDigest([u("2026-09-12", "Charts", "old"), u("2026-09-13", "Charts", "edge"), u("2026-09-19", "Charts", "today"), u("2026-09-20", "Charts", "future")], now);
    expect(out.map((x) => x.text)).toEqual(["today", "edge"]);
  });
  it("puts `big` entries first, then ranks by category, then newest first", () => {
    const out = selectDigest([
      u("2026-09-18", "Streaming", "s-new"),
      u("2026-09-15", "Certifications", "cert"),
      u("2026-09-14", "Streaming", "s-big", { big: true }),
      u("2026-09-17", "Firsts & Records", "record"),
      u("2026-09-16", "Streaming", "s-old"),
    ], now);
    expect(out.map((x) => x.text)).toEqual(["s-big", "record", "cert", "s-new", "s-old"]);
  });
  it("caps the list and skips an empty week", () => {
    const many = Array.from({ length: 12 }, (_, i) => u("2026-09-18", "Charts", `c${i}`));
    expect(selectDigest(many, now)).toHaveLength(DIGEST_CAP);
    expect(selectDigest([u("2026-09-01", "Charts", "stale")], now)).toEqual([]);
  });
  it("ranks records and plaques above chart ticks above streaming ticks", () => {
    expect(CATEGORY_RANK["Firsts & Records"]).toBeLessThan(CATEGORY_RANK.Certifications);
    expect(CATEGORY_RANK.Certifications).toBeLessThan(CATEGORY_RANK.Charts);
    expect(CATEGORY_RANK.Charts).toBeLessThan(CATEGORY_RANK.Streaming);
  });
  it("on the live feed, every selected entry is inside the window and marked entries lead", () => {
    const now = new Date(`${updates[0].date}T17:00:00Z`);
    const out = selectDigest(updates, now);
    const { from, to } = digestWindow(now);
    for (const x of out) expect(x.date >= from && x.date <= to).toBe(true);
    const firstPlain = out.findIndex((x) => !x.big);
    const lastBig = out.map((x) => Boolean(x.big)).lastIndexOf(true);
    if (firstPlain >= 0 && lastBig >= 0) expect(lastBig).toBeLessThan(firstPlain);
  });
});

describe("the subject line", () => {
  it("leads with the top entry's opening clause and keeps 'No. 1' whole", () => {
    expect(leadClause("A 14th straight week at No. 1 in Switzerland: the chart dated…")).toBe("A 14th straight week at No. 1 in Switzerland");
    expect(leadClause("Back inside the global Top 10: “Dai Dai” sits at No. 9")).toBe("Back inside the global Top 10");
    expect(leadClause("Past 350 million plays on Audiomack — I Told Them…")).toBe("Past 350 million plays on Audiomack");
  });
  it("counts the rest, and names the week when there is nothing", () => {
    expect(digestSubject([u("2026-09-18", "Charts", "A 14th straight week at No. 1 in Switzerland: x"), u("2026-09-18", "Charts", "y")], "2026-09-19"))
      .toBe("A 14th straight week at No. 1 in Switzerland — and 1 more this week");
    expect(digestSubject([], "2026-09-19")).toBe("Burna Boy Stats — the week to 19 September");
  });
  it("trims a long clause at a word boundary", () => {
    const long = "A very long opening clause that keeps going and going well past the seventy-two character limit of a subject";
    const out = leadClause(long);
    expect(out.length).toBeLessThanOrEqual(73);
    expect(out.endsWith("…")).toBe(true);
    expect(out).not.toMatch(/\s…$/);
  });
});

describe("the email itself", () => {
  const now = new Date("2026-09-19T17:00:00Z");
  const items = [
    u("2026-09-18", "Charts", "A 14th week at No. 1 in Switzerland: <b>bold</b> & \"quoted\"", { href: "/dai-dai", big: true }),
    u("2026-09-17", "Streaming", "Second item", { href: "/records/africas-biggest" }),
  ];
  const html = renderDigestHtml(items, { origin: "https://burnaboystats.com", now });
  const text = renderDigestText(items, { origin: "https://burnaboystats.com", now });

  it("carries Resend's unsubscribe placeholder exactly once, in both bodies", () => {
    expect(html.split(UNSUBSCRIBE_PLACEHOLDER)).toHaveLength(2);
    expect(text.split(UNSUBSCRIBE_PLACEHOLDER)).toHaveLength(2);
  });
  it("links every entry to the live site with an absolute URL, in both bodies", () => {
    for (const x of items) {
      expect(html).toContain(`href="https://burnaboystats.com${x.href}"`);
      expect(text).toContain(`https://burnaboystats.com${x.href}`);
    }
    expect(html).not.toMatch(/href="\//);
  });
  it("escapes the entry text and loads no web fonts or external styles", () => {
    expect(html).toContain("&lt;b&gt;bold&lt;/b&gt; &amp; &quot;quoted&quot;");
    expect(html).not.toContain("<b>bold</b>");
    expect(html).not.toMatch(/fonts\.googleapis|@import|<link/);
  });
  it("names the week and the count", () => {
    expect(html).toContain("THE WEEK TO 19 SEPTEMBER · 2 ENTRIES");
    expect(text).toContain("the week to 19 September (2 entries)");
    expect(text).toContain("13 September to 19 September");
  });
  it("a test send can print a real unsubscribe link instead of the placeholder", () => {
    const h = renderDigestHtml(items, { origin: "https://burnaboystats.com", now, unsubscribe: "https://burnaboystats.com/updates#subscribe" });
    expect(h).not.toContain(UNSUBSCRIBE_PLACEHOLDER);
    expect(h).toContain('href="https://burnaboystats.com/updates#subscribe"');
  });
});
