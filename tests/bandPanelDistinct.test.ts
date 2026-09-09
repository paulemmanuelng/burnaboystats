import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { openingClause, bandFact } from "../app/lib/bandHeadline";
import { updates } from "../app/data/updates";
import { liveHeadline } from "../app/lib/liveHeadline";

/**
 * The live band and the "Today's number" panel must state DIFFERENT facts.
 *
 * They shipped stating the same one. The band read "“Dai Dai” — No. 1 in 31
 * countries on streaming charts"; the panel, 300px right, read "31 / countries
 * at No. 1 on today's streaming charts". Both called `liveHeadline()`. One
 * sentence, twice, in the most expensive space on the site — design finding 5.3.
 *
 * The fix is structural, not editorial: the band reads the updates feed and the
 * panel reads the live chart snapshot, so they cannot converge by accident. This
 * file holds them apart, because the cheapest way to "fix" a band that looks
 * empty is to paste the panel's figure back into it.
 */

const BAND = readFileSync("app/components/LiveBand.tsx", "utf8");
const PANEL = readFileSync("app/components/TodaysNumber.tsx", "utf8");

describe("the band and the panel do not state the same fact", () => {
  it("the band does not read the live chart snapshot", () => {
    expect(
      /liveHeadline/.test(BAND),
      "LiveBand.tsx calls liveHeadline() again — that is the source the panel uses, and using it here " +
        "puts the same streaming figure on both surfaces. The band reads the updates feed; see lib/bandHeadline.ts."
    ).toBe(false);
  });

  // The check above is a SOURCE-STRING check, and on its own that is the weak
  // kind of guard this repo keeps getting caught by: it proves a word is absent
  // from a file, not that the band cannot restate the panel's fact. The band
  // could import a wrapper, read liveCharts directly, or someone could simply
  // type the number. So the real assertion is on the OUTPUT: whatever the band
  // renders must not be the panel's figure.
  it("the band's rendered headline never carries the panel's figure", () => {
    const fact = bandFact();
    expect(fact).toBeTruthy();
    const panelFigure = String(liveHeadline().countries);
    const numbersInBand = fact!.headline.match(/\d+/g) ?? [];
    expect(
      numbersInBand.includes(panelFigure),
      `the band headline "${fact!.headline}" contains ${panelFigure}, which is the figure the panel ` +
        `renders as its whole reason for existing. Two surfaces, one number — design finding 5.3.`
    ).toBe(false);
    // And it must not be reading the panel's source at all: the band's fact has
    // to trace to a feed entry that exists.
    expect(updates.some((u) => u.date === fact!.date && u.category === fact!.kicker)).toBe(true);
  });

  it("the panel is still the one that carries the streaming figure", () => {
    expect(
      /liveHeadline/.test(PANEL),
      "the panel no longer reads the live snapshot — if the streaming figure moved, this guard is now pointing at nothing"
    ).toBe(true);
  });

  it("the band's fact comes from the newest feed entry, whatever that is", () => {
    const fact = bandFact();
    expect(fact, "the feed is empty, so the band renders nothing").toBeTruthy();
    expect(fact!.date).toBe(updates[0].date);
    expect(fact!.kicker).toBe(updates[0].category);
    expect(
      updates[0].text.startsWith(fact!.headline.replace(/…$/, "").slice(0, 20)),
      "the headline is not the entry's own opening — it has been rewritten somewhere"
    ).toBe(true);
  });
});

describe("the opening clause", () => {
  it.each([
    ["Nine weeks at No. 1 in France. SNEP's own weekly Top Singles has…", "Nine weeks at No. 1 in France"],
    ["Back on top on YouTube: the “Dai Dai” video retakes No. 1…", "Back on top on YouTube"],
    ["A 10th week atop Mediatraffic's United World Chart: “Dai Dai” leads…", "A 10th week atop Mediatraffic's United World Chart"],
  ])("takes the clause before the first stop", (text, want) => {
    expect(openingClause(text)).toBe(want);
  });

  it("trims a long clause on a word boundary, never mid-word", () => {
    const long =
      "Billboard's summer recaps put “Dai Dai” top of the entire world outside of America and everywhere else besides: more text";
    const out = openingClause(long);
    expect(out.length).toBeLessThanOrEqual(73);
    expect(out.endsWith("…")).toBe(true);
    expect(out).not.toMatch(/[\s,;·—-]…$/);
    // the trim lands on a boundary — every word in the output is a whole word
    const words = out.replace(/…$/, "").split(" ");
    expect(long.split(" ").slice(0, words.length).join(" ")).toBe(words.join(" "));
  });

  it("leaves a clause that is already short alone", () => {
    expect(openingClause("Austria certifies “Dai Dai” Platinum. IFPI Austria's…")).toBe(
      "Austria certifies “Dai Dai” Platinum"
    );
  });

  // Every entry in the feed has to produce a headline the band can hold on one
  // line. A new entry that opens with a 200-character sentence is a real thing
  // someone could write, and it would push the band's layout, not just look odd.
  it("every entry in the feed yields a band-sized headline", () => {
    const bad = updates
      .map((u) => ({ date: u.date, h: openingClause(u.text) }))
      // Both directions. The maximum alone can never fail — the trim enforces
      // it — so on its own this test was vacuous. The minimum is the one that
      // catches a real defect: an entry opening with an initial cut to "J".
      .filter((x) => x.h.length > 73 || x.h.length < 12);
    expect(bad, "these entries produce a headline the band cannot hold, or no headline at all").toEqual([]);
  });

  // The abbreviations, in both directions: a stop inside one must NOT cut, and
  // a real sentence end MUST. "Excl." is the feed's most-repeated abbreviation
  // — Billboard's Global Excl. U.S. — and it was unprotected when this shipped.
  it.each([
    ["A 10th week on Billboard's Global Excl. U.S. chart, and the run goes on", "Global Excl. U.S. chart"],
    ["A sold-out night at St. Jakob-Park, and the tour rolls on to Berlin", "St. Jakob-Park"],
    ["African Giant Vol. 2 arrives in November, his ninth studio record", "Vol. 2"],
  ])("does not cut inside an abbreviation", (text, mustKeep) => {
    expect(openingClause(text)).toContain(mustKeep);
  });

  it("steps over a boundary that would leave no headline", () => {
    // An initial or an ordinal produces a one-character "clause". The cut moves
    // to the next boundary rather than returning the whole entry.
    expect(openingClause("J. Cole joins him on the “Dai Dai” remix: the two trade verses")).toBe(
      "J. Cole joins him on the “Dai Dai” remix"
    );
    expect(openingClause("1. The Shakira collaboration tops France. More follows")).toBe(
      "1. The Shakira collaboration tops France"
    );
  });

  it("never leaves a curly quote open", () => {
    const out = openingClause(
      "Billboard hands the crown to “Dai Dai (FIFA World Cup Official Song 2026)” after a long summer"
    );
    expect((out.match(/“/g) ?? []).length).toBe((out.match(/”/g) ?? []).length);
  });
});
