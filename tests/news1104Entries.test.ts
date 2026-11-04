import { describe, it, expect } from "vitest";
import { updates, type Update } from "../app/data/updates";
import { concerts } from "../app/data/tours";
import { liveMoments } from "../app/data/liveMoments";
import { AWARDS_EDITED_ON, ceremonies, pendingResults } from "../app/data/awards";
import { DAI_DAI_VIDEO_VIEWS } from "../app/data/daiDai";
import { statBoxes } from "../app/data/africasBiggest";
import { bandEntry, openingClause } from "../app/lib/bandHeadline";

/**
 * The feed's news of 25 Oct – 4 Nov 2026, logged 4 Nov 2026 (Paul: "Burna Boy
 * news from the last 3 weeks"). Each line is held to the data it reports —
 * the played-shows rows, the pending Headies row, the board and the page's
 * published figures — never to a copy of its own words.
 *
 *   - the Apple Music Hall night (29 Oct) and the NFL Paris Game halftime
 *     show (25 Oct), filed as played on 4 Nov (tours.ts, liveMoments.ts);
 *   - the 2026 Sócrates Award, which Burna Boy presented at the 70th Ballon
 *     d'Or (26 Oct; Peace and Sport's own page names him);
 *   - two round marks the stats bot's readings crossed after 23 Oct: the
 *     "Dai Dai" video past 1.3 billion views (26 Oct) and his 2026 Spotify
 *     streams past 2.1 billion (through 28 Oct);
 *   - the Headies' move of the 18th edition's Toronto finale to April 2027
 *     (the body's release, posted 10 Oct) — no result exists.
 */

/** The one entry `pick` finds; more or fewer is a failure of its own. */
const one = (pick: (u: Update) => boolean, what: string): Update => {
  const hits = updates.filter(pick);
  if (hits.length !== 1) throw new Error(`${what}: ${hits.length} feed entries match, not one`);
  return hits[0];
};

/** "1,304,803,946" -> 1304803946. */
const int = (s: string) => Number(s.replace(/,/g, ""));
/** Every comma-grouped figure in a line, in order. */
const figures = (t: string) => [...t.matchAll(/\b\d{1,3}(?:,\d{3}){2,}\b/g)].map((m) => int(m[0]));
/** The round mark a figure has passed, at the line's precision: 2,106,206,601 -> 2.1 (billion). */
const passedTenths = (n: number) => Math.floor(n / 1e8) / 10;

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const iso = (y: number, month: string, d: string) => `${y}-${String(MONTHS.indexOf(month) + 1).padStart(2, "0")}-${d.padStart(2, "0")}`;

/** A word for a first the line would be claiming. */
const FIRST = /\bfirst\b/i;

describe("Apple Music Hall, 29 Oct 2026: the played night", () => {
  const played = concerts.find((c) => c.location.startsWith("Apple Music Hall"))!;
  const entry = one((u) => u.text.includes("Apple Music Hall") && u.date === played.date, "one line dated the concert row");

  it("is a big Tours line dated the concert row, linking to the tours page", () => {
    expect(played.date).toBe("2026-10-29");
    expect(entry).toMatchObject({ category: "Tours", big: true, href: "/records/tours" });
    expect(entry.text.length).toBeLessThanOrEqual(300);
  });

  it("states what the concert row states: its capacity, the stream, the sell-out", () => {
    const cap = /(\d+)-capacity/.exec(played.note ?? "")![1];
    expect(entry.text).toContain(`${cap}-capacity`);
    expect(played.note).toContain("livestreamed worldwide on Apple Music");
    expect(entry.text).toContain("livestreamed worldwide on Apple Music");
    // "sold-out" only because the row records the sell-out.
    expect(played.note).toMatch(/sold out/);
    expect(entry.text).toMatch(/sold-out/);
  });

  it("claims no first", () => {
    expect(entry.text).not.toMatch(FIRST);
  });

  it("negative control: the lead's line claimed one", () => {
    expect("The first African artist to perform live at the Apple Music Hall").toMatch(FIRST);
  });
});

describe("NFL Paris Game, 25 Oct 2026: the played halftime show", () => {
  const moment = liveMoments.find((m) => m.title === "NFL Paris Game halftime show")!;
  const entry = one((u) => u.date === moment.date && /\bNFL\b/.test(u.text), "one line dated the live moment");
  /** The NFL's own words, its announcement of 17 Sep 2026. */
  const NFL_FIRST = "the first regular-season NFL game played in France";
  /** A first other than the NFL's own. */
  const otherFirst = (t: string) => FIRST.test(t.replace(NFL_FIRST, ""));

  it("is a big Tours line dated the live moment, linking to the tours page", () => {
    expect(moment.date).toBe("2026-10-25");
    expect(entry).toMatchObject({ category: "Tours", big: true, href: "/records/tours" });
    expect(entry.text.length).toBeLessThanOrEqual(300);
  });

  it("names the game and the ground the live moment names", () => {
    for (const part of ["Pittsburgh Steelers v New Orleans Saints", "Stade de France"]) {
      expect(moment.text).toContain(part);
      expect(entry.text).toContain(part);
    }
  });

  it("its only first is the NFL's own", () => {
    expect(entry.text).toContain(NFL_FIRST);
    expect(otherFirst(entry.text)).toBe(false);
  });

  it("negative control: a press headline's first is not the NFL's", () => {
    // stylerave.com, the halftime story's headline as published.
    expect(otherFirst("Burna Boy Headlines NFL’s First Paris Halftime Show With Yseult")).toBe(true);
  });
});

describe("Ballon d'Or, 26 Oct 2026: the Sócrates Award he presented", () => {
  const entry = one((u) => /Ballon d'Or/.test(u.text) && u.date >= "2026-10-01", "one line");
  /** A superlative no body's page states: Peace and Sport and Arsenal name him, neither says first. */
  const claims = (t: string) => /\b(first|only)\b|makes history/i.test(t);

  it("is a big Lifestyle line, dated the ceremony, on the career timeline's link", () => {
    expect(entry).toMatchObject({ date: "2026-10-26", category: "Lifestyle", big: true, href: "/timeline" });
    expect(entry.text.length).toBeLessThanOrEqual(300);
  });

  it("names the award, the winner, the edition and the room", () => {
    for (const part of ["Sócrates Award", "Bukayo Saka", "70th", "London Palladium", "26 October"]) expect(entry.text).toContain(part);
  });

  it("is no award of his: no ceremony on the record is the Ballon d'Or, and the line is not filed under Awards", () => {
    expect(ceremonies.some((c) => /Ballon d.Or|S[oó]crates/i.test(c.name))).toBe(false);
    expect(entry.category).not.toBe("Awards");
  });

  it("claims no first", () => {
    expect(claims(entry.text)).toBe(false);
  });

  it("negative control: the press headline did", () => {
    // DancehallMag, 27 Oct 2026, as published.
    expect(claims("Burna Boy Makes History as First Nigerian Artist to Present at the Ballon d'Or")).toBe(true);
  });
});

describe("the “Dai Dai” video past 1.3 billion views, 26 Oct 2026", () => {
  const entry = one((u) => u.text.startsWith("1.3 billion views for the “Dai Dai” video"), "one line");
  const [views] = figures(entry.text);
  const billion = one((u) => u.text.startsWith("A billion views for “Dai Dai”"), "the 6 Sep line");

  it("is a Streaming line on /dai-dai, not big, as the billion line was not", () => {
    expect(entry).toMatchObject({ date: "2026-10-26", category: "Streaming", href: "/dai-dai" });
    expect(entry.big).toBeUndefined();
    expect(billion.big).toBeUndefined();
  });

  it("the mark it names is the one its own reading passed", () => {
    expect(String(passedTenths(views))).toBe(/^([\d.]+) billion/.exec(entry.text)![1]);
  });

  it("stands above the billion line's reading, and the page never prints less", () => {
    expect(views).toBeGreaterThan(figures(billion.text)[0]);
    // The page's compact figure ("1.35B") is cut, not rounded, at two places.
    const m = /^([\d.]+)B$/.exec(DAI_DAI_VIDEO_VIEWS)!;
    expect(Math.round(Number(m[1]) * 100)).toBeGreaterThanOrEqual(Math.floor(views / 1e7));
  });

  it("negative control: the bot's reading before it, 1,298,508,436 (25 Oct, 04:58 UTC), had not passed it", () => {
    expect(passedTenths(1_298_508_436)).toBe(1.2);
  });
});

describe("2026 Spotify streams past 2.1 billion, through 28 Oct 2026", () => {
  const entry = one((u) => u.text.startsWith("Past 2.1 billion Spotify streams in 2026"), "one line");
  const [his, ...rivals] = figures(entry.text);
  const row = statBoxes.find((b) => b.id === "most-streamed-african-artist")!.rows!.find((r) => r.label === "2026")!;
  /** The board's printed "2.134B" -> 2134 (millions). */
  const millions = (v: string) => Math.round(Number(/^([\d.]+)B$/.exec(v)![1]) * 1000);

  it("is a Streaming line on the board's page, not big, as the 1.9 billion line was not", () => {
    expect(entry).toMatchObject({ date: "2026-10-28", category: "Streaming", href: "/records/africas-biggest" });
    expect(entry.big).toBeUndefined();
    expect(updates.find((u) => u.text.startsWith("Past 1.9 billion Spotify streams in 2026"))!.big).toBeUndefined();
  });

  it("the mark it names is the one its own figure passed", () => {
    expect(String(passedTenths(his))).toBe(/^Past ([\d.]+) billion/.exec(entry.text)![1]);
  });

  /** The board's artists the line names, with the figure it gives each, in the line's order. */
  const named = row.entries!
    .filter((e) => e.name !== "Burna Boy" && entry.text.includes(`${e.name} (`))
    .sort((a, b) => entry.text.indexOf(`${a.name} (`) - entry.text.indexOf(`${b.name} (`));

  it("'still the most-streamed': both rivals it names are on the board, behind him, in the order of their figures", () => {
    expect(rivals).toHaveLength(2);
    expect(named).toHaveLength(rivals.length);
    for (const r of rivals) expect(his).toBeGreaterThan(r);
    expect(rivals[0]).toBeGreaterThan(rivals[1]);
  });

  it("the board never prints less than the line, for him or for either rival", () => {
    // Running totals only rise: today's board is at least the line's day.
    const board = (name: string) => millions(row.entries!.find((e) => e.name === name)!.value);
    expect(board("Burna Boy")).toBeGreaterThanOrEqual(Math.floor(his / 1e6));
    named.forEach((e, i) => expect(board(e.name), e.name).toBeGreaterThanOrEqual(Math.floor(rivals[i] / 1e6)));
  });

  it("negative control: the checkpoint before it, 2,099,347,107 through 27 Oct, had not passed it", () => {
    expect(passedTenths(2_099_347_107)).toBe(2);
  });
});

describe("the Headies' move to April 2027", () => {
  const row = pendingResults.find((p) => p.ceremony === "The Headies")!;
  const entry = one((u) => u.date >= "2026-10-01" && /Headies/.test(u.text) && /April/.test(u.text), "one line");
  const NUMBER_WORDS = ["no", "one", "two", "three", "four", "five", "six"];
  /** The days a line names as the finale's: "10–11 April 2027" -> its last day; "from 25 October" -> the old day. */
  const newDay = (t: string) => {
    const m = /\b\d{1,2}–(\d{1,2}) (April) (\d{4})\b/.exec(t);
    return m ? iso(Number(m[3]), m[2], m[1]) : null;
  };
  const oldDay = (t: string, year: number) => {
    const m = /\bfrom (\d{1,2}) ([A-Z][a-z]+)\b|Ceremony (\d{1,2}) ([A-Z][a-z]+)\b/.exec(t);
    return m ? iso(year, m[2] ?? m[4], m[1] ?? m[3]) : null;
  };

  it("is an Awards line dated on or before the awards stamp, linking to the awards page", () => {
    expect(entry).toMatchObject({ date: "2026-10-10", category: "Awards", href: "/records/awards" });
    expect(entry.big).toBeUndefined();
    expect(entry.date <= AWARDS_EDITED_ON).toBe(true);
    expect(entry.text.length).toBeLessThanOrEqual(300);
  });

  it("names the day the pending row holds, and the day it moved from", () => {
    expect(row.rescheduledFrom).toBeDefined();
    expect(newDay(entry.text)).toBe(row.date);
    expect(oldDay(entry.text, row.year)).toBe(row.rescheduledFrom);
  });

  it("counts the nominations the row's edition holds, and reports no result", () => {
    const noms = ceremonies.find((c) => c.name === row.ceremony)!.noms.filter((n) => n.year === row.year);
    expect(noms.every((n) => !n.won)).toBe(true);
    expect(entry.text).toContain(`${NUMBER_WORDS[noms.length]} nominations`);
    expect(entry.text).not.toMatch(/\bwon\b|\bwins?\b|\bwinners?\b/i);
  });

  it("negative control: the 16 Sep nomination line, as it stands, names the old day, not the row's", () => {
    const shipped = one((u) => u.date === "2026-09-16" && u.text.startsWith("A fifth Headies nomination"), "the 16 Sep line").text;
    expect(newDay(shipped)).toBeNull();
    expect(oldDay(shipped, row.year)).toBe(row.rescheduledFrom);
    expect(oldDay(shipped, row.year)).not.toBe(row.date);
  });
});

describe("the week's three headliners and the band", () => {
  const apple = one((u) => u.date === "2026-10-29" && u.text.includes("Apple Music Hall"), "Apple Music Hall");
  const ballon = one((u) => u.date === "2026-10-26" && u.big === true, "Ballon d'Or");
  const nfl = one((u) => u.date === "2026-10-25" && u.big === true, "NFL");
  const video = one((u) => u.date === "2026-10-26" && !u.big, "1.3 billion views");
  /** The feed from an entry down, as the band would read it if that entry were the newest. */
  const from = (u: Update) => updates.slice(updates.indexOf(u));

  it("the band leads with the newest of them, and each in turn once the newer ones are gone", () => {
    expect(bandEntry(from(apple))).toBe(apple);
    expect(bandEntry(from(apple).filter((u) => u !== apple))).toBe(ballon);
    expect(bandEntry(from(apple).filter((u) => u !== apple && u !== ballon))).toBe(nfl);
  });

  it("on 26 Oct the headliner sits above the plain line", () => {
    expect(updates.indexOf(ballon)).toBeLessThan(updates.indexOf(video));
  });

  it("their headlines print whole on the band, and carry no figure the live panel could share", () => {
    for (const u of [apple, ballon, nfl]) {
      const head = openingClause(u.text);
      expect(head.endsWith("…"), head).toBe(false);
      expect(u.text.startsWith(head)).toBe(true);
      expect(head, head).not.toMatch(/\d/);
    }
  });

  it("negative control: unmarked, the Ballon d'Or line would lose the band to the older NFL line", () => {
    const plain: Update = { ...ballon, big: undefined };
    expect(bandEntry([plain, ...from(ballon).slice(1)])).toBe(nfl);
  });
});
