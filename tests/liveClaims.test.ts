import { describe, it, expect } from "vitest";
import { statBoxes, BURNA_PEAK_LISTENERS_SET_ON } from "../app/data/africasBiggest";
import { firstGroups, APPLE_TOP_100 } from "../app/data/firsts";
import { updates } from "../app/data/updates";

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

/** Wording that tells a reader the figure is still moving. */
const ONGOING =
  /still (?:climbing|rising|growing)|and (?:still )?(?:climbing|rising|counting)|keeps? (?:climbing|rising)|continues? to (?:climb|rise)/i;

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
    ];
    expect(staleLiveClaims(claims), "rewrite these to state the figure as the dated high it is").toEqual([]);
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
