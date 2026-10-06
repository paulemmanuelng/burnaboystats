import { describe, it, expect } from "vitest";
import { updates, type Update } from "../app/data/updates";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";

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
 * Boy. A feature announcement ("A new page: …") is never news about him, and
 * nor is a changelog line — "the compare page now counts", "never on the
 * site", "the dated log now carries" (Paul, 6 Oct 2026, core-07: nine such
 * entries were reworded to state the Burna fact alone).
 */
const CHANGELOG = /\bthe compare page\b|\bthis site\b|\bthe list's counts\b|\bnow counts?\b|\bnow refreshed daily\b|\bnever on the site\b|\bthe dated log now\b|\bno longer halves\b/i;

function strays(list: Update[]): string[] {
  return list
    .filter(
      (u) =>
        (/^\/(afrobeats|compare)(\/|$)/.test(u.href) && !/Burna/.test(u.text)) ||
        /^A new page\b/.test(u.text) ||
        CHANGELOG.test(u.text),
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

  it("catches the changelog lines the feed carried until 6 Oct 2026 (negative controls, as shipped)", () => {
    // app/data/updates.ts at origin/main, 6 Oct 2026, verbatim: each names or
    // relates to him, so the Burna test let it through, but each is framed as
    // a site change. Reworded, they state the fact alone (core-07). Poland's
    // as rendered: its two figures are the thresholds it interpolates.
    const pl = CERT_THRESHOLDS.PL.single!;
    const shipped = [
      `Poland's plaques now count toward Burna Boy's certified units: ZPAV sets single levels in złoty, converted at the 2 zł a single its own tables used until the end of 2024, so “Dai Dai”'s Gold is ${pl.gold!.toLocaleString("en-US")} units and “We Pray”'s Platinum ${pl.platinum!.toLocaleString("en-US")}.`,
      "The strike rate now counts decided nominations only: 82 wins from 234 decided — 35% — with 8 results still to come at ceremonies not yet held (Caribbean Music Awards, VMAs, NRJ, the Headies).",
      "Toronto and Montreal, February 2024, leave the single-show ranking and sit beneath it as stands: Boxscore reports each as one combined figure — $2,801,928 over 29,579 tickets and $1,904,384 over 26,303, two nights each — and never a per-night gross, so the board no longer halves them.",
      "The Luna Loca launch at O Beach Ibiza (14 August 2026), his first Ibiza performance, joins the festivals and one-off shows list — it was already on the performance map and in this feed, and the list's counts now include it.",
      "“We Pray” with Coldplay is Gold in the UK: BPI's register dates the award 1 May 2026, the step up from the Silver of January 2025. The plaque was already counted at Gold; the dated log now carries the upgrade as its own 2026 event.",
      "A circulating 6,050,000 worldwide units for “Dai Dai” goes on the methodology page's list of counts this site does not carry: no certifying body or platform publishes worldwide units for a single, so the figure is streams converted to units at a ratio of the poster's choosing.",
      "The compare page now counts every plaque an artist holds: featured appearances are in by default, and Burna Boy's international floor reads at least 30,215,157 certified units across 167 of his 171 plaques. The four that cannot yet be priced are listed on the page.",
      "A Swedish plaque that was never on the site: “On The Low” is Platinum in Sweden, certificate no. 10448, awarded 16 August 2023, read at Grammotex alongside “Ye” Platinum (no. 10450), “African Giant” Gold (no. 10452) and “Gbona” Gold (no. 10453).",
      "Career Spotify streams tick up to 10.65B across every lead and featured credit — now refreshed daily from kworb's live artist total plus the documented featured-credits gap it misses.",
    ].map((text): Update => ({ date: "2026-09-17", category: "Certifications", text, href: "/certifications" }));
    expect(strays(shipped)).toHaveLength(shipped.length);
    // The 17 Sep Luna Loca line repeated the 15 Aug launch entry: it is gone,
    // the launch stays.
    expect(updates.filter((u) => /Luna Loca/.test(u.text)).map((u) => u.date)).toEqual(["2026-08-15"]);
  });
});
