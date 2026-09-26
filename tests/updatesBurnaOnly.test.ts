import { describe, it, expect } from "vitest";
import { updates, type Update } from "../app/data/updates";

/**
 * The updates feed is Burna Boy news only.
 *
 * Paul, 1 Jul 2026: the feed carries Burna Boy facts, never site changes.
 * Paul, 26 Sep 2026: "in updates, you are only supposed to report on only
 * story that relates to or mentions burna". Board artists' plaques and chart
 * runs had crept in (fifteen entries, three of them added the day before), and
 * one site-feature announcement. They were taken out; the facts stay on the
 * board pages they belong to.
 *
 * The test: an entry that links to a board page (/afrobeats…) or a compare page
 * (/compare…) is about another artist or the site unless its text names Burna
 * Boy. A feature announcement ("A new page: …") is never news about him.
 */
function strays(list: Update[]): string[] {
  return list
    .filter(
      (u) =>
        (/^\/(afrobeats|compare)(\/|$)/.test(u.href) && !/Burna/.test(u.text)) ||
        /^A new page\b/.test(u.text),
    )
    .map((u) => `${u.date} ${u.href}: ${u.text.slice(0, 70)}…`);
}

describe("the updates feed is about Burna Boy", () => {
  it("has no entry about another artist or a site feature", () => {
    expect(strays(updates), "move it to the artist's own page, not the feed").toEqual([]);
  });

  it("catches the entries it was written against (negative controls, as shipped)", () => {
    const shipped: Update[] = [
      {
        date: "2026-09-25",
        category: "Certifications",
        text: "Oxlade’s “Ku Lo Sa” is Platinum in the UK: the BPI certified the single on 6 February 2026. It is his first British plaque and the song’s eleventh country, taking him to 14 plaques on the Afrobeats Board.",
        href: "/afrobeats/oxlade",
      },
      {
        date: "2026-09-12",
        category: "Firsts & Records",
        text: "A new page: certified units, compared. Pick any two of the sixteen artists on this site, or any two of their certified records, and every plaque is priced at the level its own certifying body publishes today, then added up country by country under identical rules.",
        href: "/compare",
      },
    ];
    expect(strays(shipped)).toHaveLength(2);
    // A compare entry that is about him stays.
    expect(
      strays([{ ...shipped[1], text: "Counted market by market, Burna Boy leads the Afrobeats board's certified units outright in 7 of the 27 countries where it holds a plaque.", href: "/compare/in" }]),
    ).toEqual([]);
  });
});
