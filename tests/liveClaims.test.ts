import { describe, it, expect } from "vitest";
import { statBoxes, BURNA_PEAK_LISTENERS_SET_ON } from "../app/data/africasBiggest";
import { firstGroups, APPLE_TOP_100 } from "../app/data/firsts";
import { updates } from "../app/data/updates";
import { readFileSync } from "node:fs";
import {
  DAI_DAI_SPOTIFY_CONFIRMED_THROUGH,
  DAI_DAI_YT_CONFIRMED_THROUGH,
  DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF,
  DAI_DAI_YT_RUN_ENDED,
} from "../app/data/daiDai";

// A figure the site describes as LIVE — "still climbing", "and counting" — is
// making two claims: the number, and that the number is current. The second one
// rots silently, because nothing about a frozen figure looks wrong. Two of them
// were published here at once:
//
//   * the Spotify monthly-listeners peak was "still climbing" 25 days after it
//     last moved, with Spotify's own artist page reading 7.3 million BELOW it;
//   * "Last Last" had "spent 200 consecutive days" on Apple Music's Global Top
//     100 six weeks after the last count, on a run that had in fact ended.
//
// This file checks the second claim, the one about currency, and it does it
// against a DATE — the day the figure last moved — not against another copy of
// the number. RETRACTIONS.md #6 is the reason for that distinction: the streak
// guard held a card and the updates feed to each other for a month while both
// were a month stale. Two copies of a wrong number agree perfectly. A number
// and the day it was read do not.

/**
 * Wording that tells a reader the figure is still moving.
 *
 * The first version required the ongoing token to follow "and" immediately,
 * which fitted the one sentence it was written for and missed every other shape
 * the site actually uses. Measured against the real prose:
 *
 *   "…and 99 straight days on the chart, both still counting"  ← "and" is six
 *      words upstream, so "and (?:still )?counting" never matched
 *   "…as the most-viewed music video worldwide, unbroken since 9 June"
 *      ← no ongoing token at all, yet it is the strongest live claim on the site
 *   "…sin interrupción desde el 9 de junio"  ← Spanish was not modelled, and
 *      /dai-dai/es mirrors every one of these claims
 *
 * So: the tokens stand alone, "unbroken/uninterrupted since" counts as ongoing
 * in its own right, and the Spanish equivalents are here because the Spanish
 * edition publishes the same claims and can go stale on the same day.
 */
const ONGOING = new RegExp(
  [
    // English
    "still (?:climbing|rising|growing|counting|going)",
    "(?:and|,) (?:still |and )?(?:climbing|rising|counting)",
    "both still counting",
    "keeps? (?:climbing|rising|going)",
    "continues? to (?:climb|rise)",
    "unbroken since",
    "uninterrupted since",
    "and counting",
    // Spanish — /dai-dai/es carries the same claims
    "sin interrupci\\u00f3n desde",
    "y (?:sigue|siguen) (?:sumando|subiendo|creciendo)",
    "sigue (?:sumando|subiendo|en ascenso)",
    "y contando",
  ].join("|"),
  "i"
);

/**
 * How long a figure may sit unchanged and still be written as live.
 *
 * Two weeks, which is generous: the monthly-listener peak moved on nine
 * separate days in the fortnight before it stopped. It is a staleness alarm,
 * not a freshness target — the point is to catch the month-long freeze, not to
 * nag about a quiet week.
 */
const LIVE_WINDOW_DAYS = 14;

const daysSince = (iso: string, now: Date) =>
  Math.floor((now.getTime() - Date.parse(`${iso}T00:00:00Z`)) / 86_400_000);

interface LiveClaim {
  id: string;
  /** The published prose. */
  text: string;
  /** The day the figure behind it last actually moved. */
  movedOn: string;
}

/** The rule, as a pure function so it can be tested on inputs of its own. */
export const staleLiveClaims = (claims: LiveClaim[], now = new Date()) =>
  claims
    .filter((c) => daysSince(c.movedOn, now) > LIVE_WINDOW_DAYS)
    .filter((c) => ONGOING.test(c.text))
    .map((c) => `${c.id}: unchanged since ${c.movedOn} but written as ongoing`);

describe("the rule itself", () => {
  const NOW = new Date("2026-09-04T12:00:00Z");
  const ongoing = "his peak is still climbing";
  const settled = "an all-time high set on 10 August 2026";

  it("flags ongoing wording over a figure that has stopped moving", () => {
    expect(staleLiveClaims([{ id: "x", text: ongoing, movedOn: "2026-08-10" }], NOW)).toHaveLength(1);
  });

  it("allows ongoing wording while the figure is actually moving", () => {
    expect(staleLiveClaims([{ id: "x", text: ongoing, movedOn: "2026-09-02" }], NOW)).toHaveLength(0);
  });

  it("says nothing about a frozen figure that does not claim to be live", () => {
    expect(staleLiveClaims([{ id: "x", text: settled, movedOn: "2026-01-01" }], NOW)).toHaveLength(0);
  });

  it("reads 'and counting' as a currency claim too", () => {
    const out = staleLiveClaims([{ id: "x", text: "200 days and counting", movedOn: "2026-07-22" }], NOW);
    expect(out).toHaveLength(1);
  });
});

// ---------------------------------------------------------------------------

const box = (id: string) => {
  const b = statBoxes.find((s) => s.id === id);
  if (!b) throw new Error(`no leaderboard with id "${id}" — was it renamed?`);
  return `${b.note ?? ""} ${b.source}`;
};

const first = (titleFragment: string) => {
  const hits = firstGroups.flatMap((g) => g.items).filter((i) => i.title.includes(titleFragment));
  if (hits.length !== 1) throw new Error(`expected one first matching "${titleFragment}", found ${hits.length}`);
  return hits[0];
};

/**
 * Pull one published sentence out of a page file.
 *
 * The two original claims read their prose from data modules. The claims added
 * below are written inline in the page, so they are read from source — and the
 * lookup THROWS when it matches nothing, because a silently-missing claim is
 * how a guard passes while the thing it guards has been reworded away.
 */
const page = (file: string, re: RegExp): string => {
  const src = readFileSync(file, "utf8");
  const line = src.split("\n").find((l) => re.test(l));
  if (!line) throw new Error(`no line in ${file} matching ${re} — was the claim reworded?`);
  return line;
};

describe("published figures do not claim to be live once they have stopped moving", () => {
  it("no leaderboard or milestone on the site is writing a frozen figure as a running one", () => {
    const claims: LiveClaim[] = [
      {
        id: "Africa's Biggest — Spotify monthly-listeners peak",
        text: box("monthly-listeners-peak"),
        // Derived: the newest point in trends.ts's listener series, which the
        // stats bot appends to on every new high. Not a date anyone types.
        movedOn: BURNA_PEAK_LISTENERS_SET_ON,
      },
      {
        id: "Firsts — “Last Last” on Apple Music's Global Top 100",
        text: first("Apple Music's Global Top 100").text,
        movedOn: APPLE_TOP_100.countedOn,
      },
      // The site's two largest running claims, and the two that were NOT
      // registered — so the guard existed, was correct, and was pointed away
      // from the prose most likely to rot. Each is anchored to the day the
      // chart behind it was last actually read, not to another copy of the
      // number: that distinction is the whole point of this file.
      //
      // Looked up by the figure it states, not by the wording that framed it.
      // “both still counting” was this claim's own address, so restating the card
      // as the dated count it is would have made page() throw and taken the
      // registration down with the wording — the guard would have been
      // “fixed” by deleting the thing it guards. The sentence still names the
      // straight-day streak; that is what the claim is about, and it is what
      // this matches on now. daiDaiParity pins the same phrase independently,
      // so the address has two reasons to survive a rewrite.
      {
        id: "Dai Dai — Spotify streak",
        text: page("app/dai-dai/page.tsx", /straight days on the chart/),
        movedOn: DAI_DAI_SPOTIFY_CONFIRMED_THROUGH,
      },
      // The YouTube run is no longer registered as ongoing because it is no
      // longer ongoing: read at YouTube's own chart on 8 Sep 2026, "Dai Dai"
      // sits at No. 2 behind LISA's "SaWaDiKa". The prose now states it as the
      // dated, finished run it is — which is precisely the rewrite this guard
      // asks for when it fires, arrived at a few days early because the claim
      // went false before the alarm was due to ring.
      //
      // Both editions are held to that below, by a check that fails if the
      // ongoing wording ever comes back without the run resuming.
      // The total days at No. 1 — 37 — which until today had no constant and no
      // reading date anywhere, and is stated in seventeen places.
      {
        id: "Dai Dai — total days at No. 1 on Spotify",
        text: page("app/dai-dai/page.tsx", /in total at No\. 1 on Spotify/),
        movedOn: DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF,
      },
      // /dai-dai/es publishes both of those figures in one card, off the same
      // two anchors, and goes stale on the same day. It was never registered —
      // which is how the four Spanish tokens in ONGOING came to sit in a list
      // that pointed at no Spanish prose. Registering them is what makes
      // “anything done to one edition is done to the other” enforceable rather
      // than remembered.
      {
        id: "Dai Dai (ES) — Spotify streak",
        text: page("app/dai-dai/es/page.tsx", /seguidos en la lista/),
        movedOn: DAI_DAI_SPOTIFY_CONFIRMED_THROUGH,
      },
      {
        id: "Dai Dai (ES) — total days at No. 1 on Spotify",
        text: page("app/dai-dai/es/page.tsx", /en total en el n[uú]mero 1/),
        movedOn: DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF,
      },
    ];
    expect(staleLiveClaims(claims), "rewrite these to state the figure as the dated high it is").toEqual([]);
  });

  // The reverse guard. Once a run is over, the ongoing wording must not come
  // back — in either language — unless the data says the run resumed.
  it("neither edition writes the YouTube run as ongoing while it is over", () => {
    if (!DAI_DAI_YT_RUN_ENDED) return; // resumed: the claim may be live again
    for (const file of ["app/dai-dai/page.tsx", "app/dai-dai/es/page.tsx"]) {
      const src = readFileSync(file, "utf8");
      const line = src.split("\n").find((l) => /YouTube/.test(l) && /No\. ?1|n[uú]mero 1/.test(l));
      expect(line, `${file}: no YouTube No. 1 line found — was it reworded?`).toBeTruthy();
      expect(
        ONGOING.test(line!),
        `${file} writes the YouTube No. 1 run as ongoing, but DAI_DAI_YT_RUN_ENDED is true`
      ).toBe(false);
    }
  });

  // The alarm is only worth having if it actually goes off, so this proves it
  // does rather than trusting that it would.
  //
  // It used to prove that from the PUBLISHED sentence: the card said “both
  // still counting”, so running it forward to 30 Sep reached the detector and
  // the list came back full. On 12 Sep 2026 the alarm rang and the second of
  // the two fixes it offers was taken — the figures are stated as the dated
  // highs they are — so that proof would now come back empty for the RIGHT
  // reason as well as the wrong one, and could no longer tell them apart. Kept
  // as it was, it would have been a test demanding the stale wording stay.
  //
  // So it proves the WIRING, which is the half that rots invisibly: every
  // lookup still finds a real published line (page() throws otherwise), every
  // anchor is still a real date, and ongoing wording written over that anchor
  // is still caught. Put the wording back on the real lines and require all
  // four claims — both editions — to be named.
  it("still catches those claims if the ongoing wording comes back", () => {
    const LATER = new Date("2026-09-30T12:00:00Z");
    const relapsed = (text: string) => `${text}, and counting`;
    const claims: LiveClaim[] = [
      { id: "spotify-streak", text: relapsed(page("app/dai-dai/page.tsx", /straight days on the chart/)), movedOn: DAI_DAI_SPOTIFY_CONFIRMED_THROUGH },
      { id: "days-at-no1", text: relapsed(page("app/dai-dai/page.tsx", /in total at No\. 1 on Spotify/)), movedOn: DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF },
      { id: "es-spotify-streak", text: relapsed(page("app/dai-dai/es/page.tsx", /seguidos en la lista/)), movedOn: DAI_DAI_SPOTIFY_CONFIRMED_THROUGH },
      { id: "es-days-at-no1", text: relapsed(page("app/dai-dai/es/page.tsx", /en total en el n[uú]mero 1/)), movedOn: DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF },
    ];
    const flagged = staleLiveClaims(claims, LATER).map((m) => m.split(":")[0]);
    expect(
      flagged.sort(),
      "a registered claim is not reachable by the detector — check the lookup still matches the published line"
    ).toEqual(["days-at-no1", "es-days-at-no1", "es-spotify-streak", "spotify-streak"]);
  });

  // The other half of the fix, and the half that is easy to lose later:
  // dropping the ongoing wording is not enough on its own. A figure with no
  // currency claim AND no reading date tells a reader nothing about when it was
  // true — which is the state the days-at-No. 1 total was in for its whole life
  // on this site. Both editions must state the date, and must state it by
  // interpolating the anchor rather than typing it.
  it("both editions date the Spotify card instead of writing it as live", () => {
    const surfaces: [string, RegExp, string][] = [
      ["app/dai-dai/page.tsx", /in total at No\. 1 on Spotify/, "DAI_DAI_SPOTIFY_READ_ON_LONG"],
      ["app/dai-dai/es/page.tsx", /en total en el n[uú]mero 1/, "DAI_DAI_SPOTIFY_READ_ON_LONG_ES"],
    ];
    for (const [file, re, stamp] of surfaces) {
      const line = page(file, re);
      expect(ONGOING.test(line), `${file} writes the Spotify run as ongoing again`).toBe(false);
      expect(line, `${file} states the figure with no reading date`).toContain(`\${${stamp}}`);
    }
  });

  // One printed date now stands for two anchors: the card names the chart it
  // was read off once, and both the days-at-No. 1 total and the streak hang on
  // it. That is only honest while the two anchors are the same chart read.
  // DAI_DAI_SPOTIFY_READ_ON already takes the older of the two, so a divergence
  // under-states rather than over-states — but under-stating silently is still
  // the site knowing something it does not say. Split the sentence instead.
  it("the two Spotify anchors are the single chart the prose names", () => {
    expect(
      DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF,
      "the anchors have diverged, so one printed date cannot speak for both — give each figure its own date in the card"
    ).toBe(DAI_DAI_SPOTIFY_CONFIRMED_THROUGH);
  });
});

describe("a chart run the site cannot re-read carries the day it was read", () => {
  // Apple Music's Global Top 100 is not machine-fetchable here and kworb cannot
  // stand in for it — its Worldwide Apple Music Song Chart is a points aggregate
  // over country charts, and on 22 Jul 2026, the day of the 200-day reading,
  // "Last Last" was absent from kworb's 200-row table too. A figure nothing can
  // refresh has to publish its own reading date, or a reader has no way to tell
  // a current count from a six-week-old one.
  const item = first("Apple Music's Global Top 100");

  it("names the day the count was taken", () => {
    expect(item.text, "the run's last count must be dated in the prose").toContain("22 July 2026");
  });

  it("says the run is finished, having been read off the chart", () => {
    expect(item.text).toContain("4 September 2026");
    expect(item.text.toLowerCase()).toContain("completed run");
  });

  it("the figure still matches the one entry it came from", () => {
    // Provenance only. This cannot tell you the 200 is RIGHT — the updates entry
    // is its only source, and a number checked against its own source always
    // agrees. Currency is the date tests above; this catches the figure being
    // raised with nothing new behind it.
    const source = updates.filter(
      (u) => /Apple Music.{0,20}Global Top 100/.test(u.text) && /consecutive days/.test(u.text)
    );
    expect(source, "no updates entry states this run any more — where is the 200 from?").toHaveLength(1);
    expect(source[0].date).toBe(APPLE_TOP_100.countedOn);
    expect(source[0].text).toContain(String(APPLE_TOP_100.days));
  });
});
