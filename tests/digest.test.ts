import { describe, it, expect } from "vitest";
import type { Update } from "../app/data/updates";
import { updates } from "../app/data/updates";
import { readFileSync } from "node:fs";
import { selectDigest, digestWindow, digestSubject, leadClause, splitDigest, splitClause, digestPreheader, weekRange, weekRangeShort, DIGEST_CAP, CATEGORY_RANK } from "../app/lib/digest";
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
  it("escapes the entry text, loads no web fonts or external styles, and carries one image — the site's own crown", () => {
    expect(html).toContain("&lt;b&gt;bold&lt;/b&gt; &amp; &quot;quoted&quot;");
    expect(html).not.toContain("<b>bold</b>");
    expect(html).not.toMatch(/fonts\.googleapis|@import|<link/);
    const imgs = html.match(/<img\b[^>]*>/g) ?? [];
    expect(imgs).toHaveLength(1);
    expect(imgs[0]).toContain('src="https://burnaboystats.com/email/crown-email-2x.png"');
    expect(imgs[0]).toMatch(/width="40" height="35" alt="Burnaboystats"/);
  });
  it("names the week and the count in the masthead, and the window in the footer", () => {
    expect(html).toContain("THE SATURDAY DIGEST &middot; 13–19 SEPTEMBER &middot; 2 ENTRIES");
    expect(text).toContain("The Saturday digest · 13–19 September · 2 entries");
    expect(text).toContain("this one ran 13 to 19 September. A quiet week sends nothing.");
    expect(html).toContain("this one ran 13 to 19 September. A quiet week sends nothing.");
  });
  it("says why the reader is getting it, and links the methodology, in both bodies", () => {
    for (const b of [html, text]) {
      expect(b).toContain("You're getting this because you confirmed at burnaboystats.com/updates.");
      expect(b).toContain("https://burnaboystats.com/methodology");
    }
  });
  it("a test send can print a real unsubscribe link instead of the placeholder", () => {
    const h = renderDigestHtml(items, { origin: "https://burnaboystats.com", now, unsubscribe: "https://burnaboystats.com/updates#subscribe" });
    expect(h).not.toContain(UNSUBSCRIBE_PLACEHOLDER);
    expect(h).toContain('href="https://burnaboystats.com/updates#subscribe"');
  });
});

describe("one list, every entry whole (design response 16 Sep 2026)", () => {
  const now = new Date("2026-09-19T17:00:00Z");
  const origin = "https://burnaboystats.com";

  it("splits on `big`, at most two, and falls back to the top entry when nothing is marked", () => {
    const a = u("2026-09-18", "Charts", "a", { big: true });
    const b = u("2026-09-17", "Streaming", "b", { big: true });
    const c = u("2026-09-16", "Charts", "c", { big: true });
    const d = u("2026-09-15", "Charts", "d");
    const e = u("2026-09-14", "Streaming", "e");
    expect(splitDigest([a, b, c, d])).toEqual({ headliners: [a, b], rest: [c, d] });
    expect(splitDigest([d, c])).toEqual({ headliners: [c], rest: [d] });
    expect(splitDigest([d, e])).toEqual({ headliners: [d], rest: [e] });
    expect(splitDigest([d])).toEqual({ headliners: [d], rest: [] });
  });

  it("prints every entry whole, in one list, each its own anchor with its clause in bold and its URL as the link line", () => {
    const items = [
      u("2026-09-18", "Charts", "First headliner: its second half. Another sentence.", { href: "/a", big: true }),
      u("2026-09-17", "Streaming", "Second headliner at No. 1: also whole.", { href: "/b", big: true }),
      u("2026-09-16", "Certifications", "Third entry first sentence. Third entry rest.", { href: "/c" }),
      u("2026-09-15", "Charts", "A correction, twice over: fourth, one sentence.", { href: "/d" }),
    ];
    const html = renderDigestHtml(items, { origin, now });
    const text = renderDigestText(items, { origin, now });
    for (const b of [html, text]) {
      expect(b).toContain("Third entry rest.");
      expect(b).not.toContain("ALSO THIS WEEK");
      expect(b).not.toContain("SEE THE FIGURE");
    }
    expect(html).not.toMatch(/>0[12]</);
    // Four anchors wrapping four entries; the clause bold in each; the size by tier.
    const entries = html.match(/<td class="entry cell"[\s\S]*?<\/td>/g) ?? [];
    expect(entries).toHaveLength(4);
    for (const [i, cell] of entries.entries()) {
      expect(cell.match(/<a href="https:\/\/burnaboystats\.com\/[abcd]"/g)).toHaveLength(1);
      expect(cell).toContain("<strong style=\"font-weight:bold;\">");
      expect(cell).toContain(`burnaboystats.com${items[i].href} &#8599;&#xFE0E;`);
      expect(cell).toContain(i < 2 ? "font-size:19px;line-height:28px" : "font-size:15px;line-height:23px");
    }
    expect(html).toContain("<strong style=\"font-weight:bold;\">First headliner:</strong> its second half. Another sentence.");
    expect(html).toContain("<strong style=\"font-weight:bold;\">Second headliner at No. 1:</strong> also whole.");
    // A correction is keyed on its opening words, in both bodies.
    expect(html).toContain("CORRECTION &middot; CHARTS &middot; 15 SEPTEMBER".replace(/&middot;/g, "·"));
    expect(text).toContain("CORRECTION · CHARTS · 15 September");
    // Order carries the headliners — the same order in both bodies. (The
    // HTML's preheader quotes the second entry, so read from the masthead on.)
    const order = (b: string) => ["First headliner", "Second headliner", "Third entry", "A correction"].map((k) => b.indexOf(k));
    for (const b of [html.slice(html.indexOf("BURNABOY<span")), text]) expect([...order(b)].sort((x, y) => x - y)).toEqual(order(b));
  });

  it("carries the masthead, the gold rules, the footer's three link cells, the sign-off band and the legal line", () => {
    const items = [u("2026-09-18", "Charts", "Only one: entry.", { href: "/dai-dai", big: true })];
    const html = renderDigestHtml(items, { origin, now });
    expect(html).toContain("THE SATURDAY DIGEST &middot; 13–19 SEPTEMBER &middot; 1 ENTRY");
    expect(html.match(/border-top:2px solid #ffb627|border-bottom:2px solid #ffb627/g)).toHaveLength(2);
    expect(html).toContain("ALL UPDATES &#8599;&#xFE0E;");
    expect(html).toContain("HOW THE NUMBERS ARE CHECKED &#8599;&#xFE0E;");
    expect(html).toMatch(/<a href="\{\{\{RESEND_UNSUBSCRIBE_URL\}\}\}"[^>]*text-decoration:underline;">UNSUBSCRIBE<\/a>/);
    expect(html).toContain('bgcolor="#ffb627"');
    expect(html).toContain("THE NUMBERS, VERIFIED &middot; SATURDAYS &middot; 18:00 LONDON");
    expect(html).toContain("You're getting this because you confirmed at burnaboystats.com/updates.");
    expect(html).not.toContain("#16130f"); // the card colour is retired — nothing sits on a tint
    expect(Buffer.byteLength(html, "utf8")).toBeLessThan(80_000);
  });

  it("the preheader is the second entry's clause, the categories in rank order and the window — never the subject", () => {
    const week = selectDigest(updates, now);
    const { from, to } = digestWindow(now);
    expect(digestPreheader(week, from, to)).toBe("Back inside the global Top 10 — certifications, charts and streaming, 13 to 19 September.");
    expect(digestPreheader([week[0]], from, to)).toBe(
      "The Schweizer Hitparade dated 13 September keeps “Dai Dai” at the top for the 14th consecutive chart since 14 June,…",
    );
    const html = renderDigestHtml(week, { origin, now });
    expect(html).toContain("Back inside the global Top 10 — certifications, charts and streaming, 13 to 19 September.&zwnj;&nbsp;");
    expect(html).not.toContain("A 14th straight week at No. 1 in Switzerland — and");
    // Two entries of one category: no "and".
    expect(digestPreheader([u("2026-09-18", "Charts", "One: a."), u("2026-09-17", "Charts", "Two: b.")], from, to)).toBe("Two — charts, 13 to 19 September.");
  });

  it("the plain-text twin for the week to 19 September matches the designer's fixture byte for byte", () => {
    const week = selectDigest(updates, now);
    const fixture = readFileSync("tests/fixtures/digest-2026-09-19.txt", "utf8");
    expect(renderDigestText(week, { origin, now })).toBe(fixture);
  });

  it("names the window across a month end, in both forms", () => {
    expect(weekRange("2026-09-13", "2026-09-19")).toBe("13 to 19 September");
    expect(weekRange("2026-09-27", "2026-10-03")).toBe("27 September to 3 October");
    expect(weekRangeShort("2026-09-13", "2026-09-19")).toBe("13–19 September");
    expect(weekRangeShort("2026-08-30", "2026-09-05")).toBe("30 August–5 September");
  });
});
