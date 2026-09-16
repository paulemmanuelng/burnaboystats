import { describe, it, expect } from "vitest";
import type { Update } from "../app/data/updates";
import { updates } from "../app/data/updates";
import { selectDigest, digestWindow, digestSubject, leadClause, splitDigest, firstSentence, weekRange, DIGEST_CAP, CATEGORY_RANK } from "../app/lib/digest";
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
    expect(html).toContain("THE WEEK TO 19 SEPTEMBER &middot; 2 ENTRIES");
    expect(text).toContain("the week to 19 September (2 entries)");
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

describe("two headliners in full, the rest by first sentence", () => {
  it("splits on `big`, at most two, and falls back to the top entry when nothing is marked", () => {
    const a = u("2026-09-18", "Charts", "a", { big: true });
    const b = u("2026-09-17", "Streaming", "b", { big: true });
    const c = u("2026-09-16", "Charts", "c", { big: true });
    const d = u("2026-09-15", "Charts", "d");
    expect(splitDigest([a, b, c, d])).toEqual({ headliners: [a, b], rest: [c, d] });
    const e = u("2026-09-14", "Streaming", "e");
    expect(splitDigest([d, c])).toEqual({ headliners: [c], rest: [d] }); // one marked: one card
    expect(splitDigest([d, e])).toEqual({ headliners: [d], rest: [e] }); // none marked: the top entry leads
    expect(splitDigest([d])).toEqual({ headliners: [d], rest: [] });
  });
  it("knows the feed's abbreviations — 'Excl. U.S.' is not a sentence end", () => {
    const t = "Billboard's summer recaps put “Dai Dai” top of the world outside America: No. 1 on the Global Excl. U.S. top 10 songs of summer 2026. A second sentence.";
    expect(firstSentence(t)).toBe("Billboard's summer recaps put “Dai Dai” top of the world outside America: No. 1 on the Global Excl. U.S. top 10 songs of summer 2026.");
    expect(leadClause("A 10th week on Billboard's Global Excl. U.S. chart. More.")).toBe("A 10th week on Billboard's Global Excl. U.S. chart");
    // The feed's own lower-case form, from the entry dated 2026-08-27.
    const cert = "A Swedish plaque that was never on the site: “On The Low” is Platinum in Sweden, certificate no. 10448, awarded 16 August 2023. More.";
    expect(firstSentence(cert)).toBe("A Swedish plaque that was never on the site: “On The Low” is Platinum in Sweden, certificate no. 10448, awarded 16 August 2023.");
  });
  it("cuts at the first sentence and keeps 'No. 9' whole", () => {
    expect(firstSentence("Back inside the global Top 10: “Dai Dai” sits at No. 9 on Spotify's chart. That figure is a total.")).toBe(
      "Back inside the global Top 10: “Dai Dai” sits at No. 9 on Spotify's chart.",
    );
    expect(firstSentence("One sentence, no cut.")).toBe("One sentence, no cut.");
    expect(firstSentence("Ends with No. 1")).toBe("Ends with No. 1");
  });
  it("on the seven entries of the week to 19 September, every first sentence is a whole sentence of its entry", () => {
    const week = selectDigest(updates, new Date("2026-09-19T17:00:00Z"));
    expect(week.length).toBeGreaterThanOrEqual(7);
    for (const x of week) {
      const first = firstSentence(x.text);
      expect(x.text.startsWith(first)).toBe(true);
      expect(first.endsWith(".") || first === x.text).toBe(true);
      // No cut inside the site's one abbreviation, and the cut is at a sentence end.
      expect(first).not.toMatch(/\bNo\.$/);
      if (first !== x.text) expect(x.text.slice(first.length)).toMatch(/^ /);
    }
    // The two the data marks lead, in full; the others are shorter than their entries.
    const { headliners, rest } = splitDigest(week);
    expect(headliners.map((x) => x.big)).toEqual([true, true]);
    expect(rest.some((x) => firstSentence(x.text).length < x.text.length)).toBe(true);
  });
  it("prints the headliners whole and numbered, then a divider, then the rest cut — in the same order in both bodies", () => {
    const now = new Date("2026-09-19T17:00:00Z");
    const items = [
      u("2026-09-18", "Charts", "First headliner. Its second sentence.", { href: "/a", big: true }),
      u("2026-09-17", "Streaming", "Second headliner at No. 1. Also whole.", { href: "/b", big: true }),
      u("2026-09-16", "Certifications", "Third entry first sentence. Third entry rest.", { href: "/c" }),
      u("2026-09-15", "Charts", "Fourth, one sentence.", { href: "/d" }),
    ];
    const html = renderDigestHtml(items, { origin: "https://burnaboystats.com", now });
    const text = renderDigestText(items, { origin: "https://burnaboystats.com", now });
    // The HTML's preheader repeats the first headliner, so the order is read
    // from the body proper: after the lockup.
    const bodies: [string, string, string][] = [
      [html.slice(html.indexOf("BURNABOY")), ">01<", ">02<"],
      [text, "01 · CHARTS", "02 · STREAMING"],
    ];
    for (const [b, one, two] of bodies) {
      expect(b).toContain("First headliner. Its second sentence.");
      expect(b).toContain("Second headliner at No. 1. Also whole.");
      expect(b).toContain("Third entry first sentence.");
      expect(b).not.toContain("Third entry rest.");
      expect(b).toContain("Fourth, one sentence.");
      const order = [one, "First headliner", two, "Second headliner", "ALSO THIS WEEK", "Third entry", "Fourth"].map((k) => b.indexOf(k));
      expect(order.every((i) => i >= 0)).toBe(true);
      expect([...order].sort((a, c) => a - c)).toEqual(order);
    }
    expect(html).toContain("ALSO THIS WEEK &middot; 2 ENTRIES");
    expect(text).toContain("ALSO THIS WEEK · 2 entries");
    // Four links in each body, one per entry, the two-sentence entries linked as much as the whole ones.
    for (const x of items) {
      expect(html).toContain(`href="https://burnaboystats.com${x.href}"`);
      expect(text).toContain(`https://burnaboystats.com${x.href}`);
    }
    // No divider and no list when the headliners are the whole week.
    const two = renderDigestHtml(items.slice(0, 2), { origin: "https://burnaboystats.com", now });
    expect(two).not.toContain("ALSO THIS WEEK");
    // The gold-tinted headliner border is gone; the cards share one hairline.
    expect(html).not.toContain("#5a4210");
  });
  it("names the window across a month end", () => {
    expect(weekRange("2026-09-13", "2026-09-19")).toBe("13 to 19 September");
    expect(weekRange("2026-09-27", "2026-10-03")).toBe("27 September to 3 October");
  });
});
