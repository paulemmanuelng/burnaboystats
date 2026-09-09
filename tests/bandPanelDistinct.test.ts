import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { openingClause, bandFact } from "../app/lib/bandHeadline";
import { updates } from "../app/data/updates";

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
    const tooLong = updates
      .map((u) => ({ date: u.date, h: openingClause(u.text) }))
      .filter((x) => x.h.length > 73);
    expect(tooLong, "these entries produce a headline the band cannot hold").toEqual([]);
  });
});
