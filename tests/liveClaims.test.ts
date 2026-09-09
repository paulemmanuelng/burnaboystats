import { describe, it, expect } from "vitest";
import { statBoxes, BURNA_PEAK_LISTENERS_SET_ON } from "../app/data/africasBiggest";
import { firstGroups, APPLE_TOP_100 } from "../app/data/firsts";
import { updates } from "../app/data/updates";
import { readFileSync } from "node:fs";
import { readdirSync } from "node:fs";
import {
  DAI_DAI_SPOTIFY_CONFIRMED_THROUGH,
  DAI_DAI_YT_CONFIRMED_THROUGH,
  DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF,
  DAI_DAI_YT_RUN_ENDED,
  DAI_DAI_SPOTIFY_NO1_RUN_ENDED,
  DAI_DAI_SPOTIFY_TOP10_DAYS_AS_OF,
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
/**
 * Wording that puts the song AT No. 1 *now*, with no movement verb in it.
 *
 * ONGOING is a vocabulary of MOVEMENT — "still climbing", "and counting" — and
 * the reverse guard below was first written against ONGOING alone. The sentence
 * it existed to catch does not move:
 *
 *     37 days as the most-streamed song on Earth — and back on top.
 *
 * That is verbatim what app/components/MobileHome.tsx published, and ONGOING
 * does not match one word of it. Worse, the negative control written to prove
 * the guard fires used "and still counting" — wording ONGOING does match and
 * the page never carried. The guard proved the detector detects itself, and
 * would have sat green through the exact regression it was named for.
 *
 * So: a second family, position rather than movement. A clause may put the song
 * on top only if it says WHEN. "back on top in August" is a dated fact about a
 * finished spell; "and back on top" is a claim about today.
 */
const AT_NO1_NOW = new RegExp(
  [
    "back on top",
    "on top again",
    "back at (?:the top|No\\. ?1)",
    "(?:is|sits) (?:at )?No\\. ?1",
    "tops the",
    "leads the",
    // Spanish — /dai-dai/es and any Spanish-language surface
    "de vuelta en (?:la cima|lo m\u00e1s alto)",
    "de nuevo en (?:la cima|lo m\u00e1s alto)",
    "vuelve a (?:la cima|liderar)",
    "encabeza la",
    "lidera la",
  ].join("|"),
  "i"
);

/**
 * A month or a year in the same sentence — what turns a position claim into a
 * dated one. Both languages, because both editions make the claim.
 */
const DATED = new RegExp(
  [
    "January|February|March|April|May|June|July|August|September|October|November|December",
    "enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre",
    "\\b20\\d{2}\\b",
  ].join("|"),
  "i"
);

/**
 * The reverse rule, as a pure function so it can be run on inputs of its own —
 * the same shape staleLiveClaims has, and for the same reason.
 */
export const writesRunAsCurrent = (line: string) =>
  ONGOING.test(line) || (AT_NO1_NOW.test(line) && !DATED.test(line));

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

/** See the note in tests/awardsPending.test.ts. This is the same kind of alarm:
 *  it is MEANT to start failing on a date with nothing in the repo having
 *  changed, and it must not be the thing that stops the stats bot publishing.
 *  It still fails in ci.yml, which is where a human reads it. */
const PUBLISHING_GATE = process.env.PUBLISH_GATE === "1";

/**
 * Every file that states the Spotify No. 1 run, and the sentence that states it.
 *
 * Listed rather than grepped so a surface cannot quietly leave the guard by
 * being reworded — and cross-checked against a grep below so one cannot quietly
 * join without being listed. app/page.tsx and MobileHome.tsx are the same claim
 * on two layouts; the desktop one was corrected a day before the mobile one
 * precisely because no list said there were two.
 */
const SPOTIFY_NO1_SURFACES = [
  "app/dai-dai/page.tsx",
  "app/dai-dai/es/page.tsx",
  "app/page.tsx",
  "app/components/MobileHome.tsx",
  // Found by the completeness check below, not by hand — the story rail states
  // the run too and had been read by nothing.
  "app/components/DaiDaiStory.tsx",
];
const NO1_SENTENCE = /most-streamed song on Earth|m\u00e1s escuchada del mundo/;

describe("published figures do not claim to be live once they have stopped moving", () => {
  it.skipIf(PUBLISHING_GATE)("no leaderboard or milestone on the site is writing a frozen figure as a running one", () => {
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
  it("no edition writes the Spotify No. 1 run as current while it is over", () => {
    // 37 days at No. 1 is a FINAL total now, so a sentence putting the song back
    // at the top in the present tense republishes a claim that has been retired.
    // Gated on the constant, so if it returns to No. 1 the wording may be live.
    if (!DAI_DAI_SPOTIFY_NO1_RUN_ENDED) return;
    for (const file of SPOTIFY_NO1_SURFACES) {
      const src = readFileSync(file, "utf8");
      const lines = src.split("\n").filter((l) => NO1_SENTENCE.test(l));
      expect(lines.length, `${file}: no Spotify No. 1 sentence found — was it reworded?`).toBeGreaterThan(0);
      for (const line of lines) {
        expect(
          writesRunAsCurrent(line),
          `${file} writes the Spotify No. 1 run as current, but DAI_DAI_SPOTIFY_NO1_RUN_ENDED is true:\n  ${line.trim()}`
        ).toBe(false);
      }
    }
  });

  // The control, and it is the whole reason the guard above was rewritten.
  //
  // Not an invented relapse: this is the literal string this repo shipped on
  // the mobile home screen until 9 Sep 2026, kept here verbatim. A guard proved
  // against wording of the test's own choosing proves nothing about the wording
  // the site actually publishes — which is how the first version of this passed
  // while the sentence it was named for sat live on the page.
  //
  // If a future rewrite makes the detector stop seeing this line, that is the
  // detector regressing, not the fixture going out of date.
  it("fires on the sentence the site actually shipped", () => {
    const SHIPPED_UNTIL_2026_09_09 =
      "37 days as the most-streamed song on Earth — and back on top.";
    expect(
      writesRunAsCurrent(SHIPPED_UNTIL_2026_09_09),
      "the guard does not catch the exact wording it exists to catch"
    ).toBe(true);

    // And the fix for it passes, so the guard is not simply refusing the topic.
    expect(
      writesRunAsCurrent("37 days as the most-streamed song on Earth — back on top in August.")
    ).toBe(false);

    // ONGOING alone could never have told those two apart: neither carries a
    // movement token, so both look identical to the rule this replaced.
    expect(ONGOING.test(SHIPPED_UNTIL_2026_09_09)).toBe(false);
  });

  // Every surface that states the run must be reachable by the guard at all.
  // The mobile home screen was fixed here a day after the desktop one because
  // nothing listed the surfaces; two components state this sentence and only
  // one of them was found by hand.
  it("names every surface that states the run", () => {
    for (const file of SPOTIFY_NO1_SURFACES) {
      expect(readFileSync(file, "utf8"), `${file} no longer states the run`).toMatch(NO1_SENTENCE);
    }
    const seen = readdirSync("app", { recursive: true, encoding: "utf8" })
      .filter((f) => f.endsWith(".tsx"))
      .map((f) => `app/${f}`)
      .filter((f) => NO1_SENTENCE.test(readFileSync(f, "utf8")))
      .sort();
    expect(
      seen,
      "a surface states the Spotify No. 1 run but is not in SPOTIFY_NO1_SURFACES, so the reverse guard never reads it"
    ).toEqual([...SPOTIFY_NO1_SURFACES].sort());
  });

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
  it("every Spotify figure carries the date of the chart it was read off", () => {
    // Four claims, two editions, and — since 9 Sep 2026 — TWO anchors. The
    // streak was re-read on the 7 Sep chart; the days-at-No. 1 total stops at
    // 28 Aug, because the run ended in between and the last day at the top was
    // never established. Each figure must print its own anchor's stamp, by
    // interpolating the constant rather than typing the date.
    const surfaces: [string, RegExp, string][] = [
      ["app/dai-dai/page.tsx", /in total at No\. 1 on Spotify/, "DAI_DAI_SPOTIFY_NO1_READ_ON_LONG"],
      ["app/dai-dai/page.tsx", /straight days on the chart/, "DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG"],
      ["app/dai-dai/es/page.tsx", /en total en el n[uú]mero 1/, "DAI_DAI_SPOTIFY_NO1_READ_ON_LONG_ES"],
      ["app/dai-dai/es/page.tsx", /seguidos en la lista/, "DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG_ES"],
    ];
    for (const [file, re, stamp] of surfaces) {
      const line = page(file, re);
      expect(writesRunAsCurrent(line), `${file} writes the Spotify run as current again`).toBe(false);
      expect(line, `${file} states the figure with no reading date`).toContain(`\${${stamp}}`);
    }
  });

  // This used to require the two anchors to be the SAME chart, on the reasoning
  // that one printed date could then speak for both. They diverged on 9 Sep
  // 2026, exactly as the failure message anticipated — so the rule it stated is
  // now enforced instead of the assumption it rested on: whichever way the
  // anchors sit, no figure may be printed under a date older than its own.
  //
  // The min() that used to resolve this looked safe because an older date
  // under-states. It does not: it would have dated a 109-day streak to the
  // chart on which it was 99. Under-stating the date over-states the figure.
  it("no Spotify figure is printed under a chart older than the one it came from", () => {
    const anchors: [string, string, string][] = [
      ["streak", DAI_DAI_SPOTIFY_CONFIRMED_THROUGH, "DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG"],
      ["days at No. 1", DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF, "DAI_DAI_SPOTIFY_NO1_READ_ON_LONG"],
      ["days in the Top 10", DAI_DAI_SPOTIFY_TOP10_DAYS_AS_OF, "DAI_DAI_SPOTIFY_NO1_READ_ON_LONG"],
    ];
    const src = readFileSync("app/data/daiDai.ts", "utf8");
    for (const [label, anchor, stamp] of anchors) {
      const decl = src.split("\n").find((l) => l.startsWith(`export const ${stamp} `));
      expect(decl, `${stamp} is gone — ${label} has no dated stamp to print`).toBeTruthy();
      const from = /longDate\((\w+),/.exec(decl!)?.[1];
      const resolved =
        from === "DAI_DAI_SPOTIFY_CONFIRMED_THROUGH" ? DAI_DAI_SPOTIFY_CONFIRMED_THROUGH
        : from === "DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF" ? DAI_DAI_SPOTIFY_NO1_DAYS_AS_OF
        : null;
      expect(resolved, `${stamp} is built from ${from}, which this check does not know`).toBeTruthy();
      expect(
        resolved! >= anchor,
        `${label} is anchored to ${anchor} but printed under ${resolved} — give it its own stamp`
      ).toBe(true);
    }
  });
});
