import { describe, it, expect } from "vitest";
// @ts-expect-error — plain ESM helper module, no types needed for the test
import { parseNum, relativeDrift, extractKworbListeners, extractKworbTotalStreams, evaluateMetric, isActionable } from "../scripts/stats-lib.mjs";

// A minimal fixture mirroring how a Burna Boy row appears in kworb's
// listeners table (#, Artist, Listeners, Daily, Peak-rank, PkListeners).
const KWORB_ROW = `<tr><td>61</td><td><a href="artist/3wcj11K77LjEY1PkEazffa_songs.html">Burna Boy</a></td><td>52,355,445</td><td>288,897</td><td>61</td><td>52,355,445</td></tr>`;

describe("parseNum", () => {
  it("parses comma-grouped integers", () => {
    expect(parseNum("52,355,445")).toBe(52355445);
    expect(parseNum("288,897")).toBe(288897);
  });
  it("parses K/M/B suffixes", () => {
    expect(parseNum("52.36M")).toBeCloseTo(52360000);
    expect(parseNum("1.9B")).toBeCloseTo(1.9e9);
  });
  it("returns NaN for junk", () => {
    expect(Number.isNaN(parseNum("n/a"))).toBe(true);
  });
});

describe("relativeDrift", () => {
  it("computes symmetric relative change", () => {
    expect(relativeDrift(100, 103)).toBeCloseTo(0.03);
    expect(relativeDrift(100, 97)).toBeCloseTo(0.03);
  });
});

describe("extractKworbListeners", () => {
  it("pulls rank, monthly and peak listeners from a row", () => {
    const row = extractKworbListeners(KWORB_ROW, "3wcj11K77LjEY1PkEazffa");
    expect(row).toEqual({ rank: 61, monthlyListeners: 52355445, peakListeners: 52355445 });
  });
  it("returns null when the artist isn't present", () => {
    expect(extractKworbListeners(KWORB_ROW, "notanartistid")).toBeNull();
  });
});

describe("extractKworbTotalStreams", () => {
  it("returns the largest number on the page (the cumulative total)", () => {
    const html = `<td>Last Last</td><td>1,982,110,540</td> ... Total <b>10,297,429,319</b> across 400 songs, daily 18,204,113`;
    expect(extractKworbTotalStreams(html)).toBe(10297429319);
  });
  it("returns NaN when there are no large numbers", () => {
    expect(Number.isNaN(extractKworbTotalStreams("<p>no data here</p>"))).toBe(true);
  });
});

describe("evaluateMetric", () => {
  const base = { label: "x", baseline: 52355445, kind: "drift", threshold: 0.03 };

  it("flags drift over the threshold", () => {
    expect(evaluateMetric(base, 54_000_000).status).toBe("drift"); // +3.1%
  });
  it("stays ok under the threshold", () => {
    expect(evaluateMetric(base, 52_800_000).status).toBe("ok"); // +0.85%
  });
  it("flags a new peak only when exceeded", () => {
    const peak = { label: "p", baseline: 52355445, kind: "peak" };
    expect(evaluateMetric(peak, 52355446).status).toBe("new-peak");
    expect(evaluateMetric(peak, 52355445).status).toBe("ok");
  });
  it("flags a rank move of at least the threshold (either direction)", () => {
    const rank = { label: "r", baseline: 61, kind: "rank", threshold: 5 };
    expect(evaluateMetric(rank, 68).status).toBe("rank-change"); // 7 places down
    expect(evaluateMetric(rank, 55).status).toBe("rank-change"); // 6 places up
    expect(evaluateMetric(rank, 63).status).toBe("ok"); // only 2 places
  });
  it("reports unavailable when the value is missing", () => {
    expect(evaluateMetric(base, NaN).status).toBe("unavailable");
  });
  it("reports unbaselined when there's no baseline", () => {
    expect(evaluateMetric({ label: "y", baseline: null, kind: "drift" }, 100).status).toBe("unbaselined");
  });
});

describe("isActionable", () => {
  it("drift, new-peak and rank-change need attention", () => {
    expect(isActionable("drift")).toBe(true);
    expect(isActionable("new-peak")).toBe(true);
    expect(isActionable("rank-change")).toBe(true);
    expect(isActionable("ok")).toBe(false);
    expect(isActionable("unavailable")).toBe(false);
  });
});

import { formatStat, applyAnchoredReplace } from "../scripts/stats-lib.mjs";

describe("formatStat", () => {
  it("formats each display style", () => {
    expect(formatStat(56517687, "M2")).toBe("56.52M");
    expect(formatStat(747000000, "M0")).toBe("747M");
    expect(formatStat(56517687, "raw")).toBe("56,517,687");
    expect(formatStat(44, "int")).toBe("44");
    expect(formatStat(NaN, "M2")).toBeNull();
  });
});

describe("applyAnchoredReplace", () => {
  const text = `foo\n  id: "monthly-listeners-peak",\n  value: "55.95M",\n  other: "99.9M",`;
  it("replaces the first pattern match after the anchor only", () => {
    const r = applyAnchoredReplace(text, 'id: "monthly-listeners-peak"', "\\d+(?:\\.\\d+)?M", "56.52M");
    expect(r.applied).toBe(true);
    expect(r.changedFrom).toBe("55.95M");
    expect(r.text).toContain('value: "56.52M"');
    expect(r.text).toContain('other: "99.9M"'); // untouched
  });
  it("is a no-op when already current", () => {
    const r = applyAnchoredReplace(text, 'id: "monthly-listeners-peak"', "\\d+(?:\\.\\d+)?M", "55.95M");
    expect(r.applied).toBe(false);
    expect(r.reason).toBe("already current");
  });
  it("does not edit when the anchor is missing (safety)", () => {
    const r = applyAnchoredReplace(text, 'id: "does-not-exist"', "\\d+M", "1M");
    expect(r.applied).toBe(false);
    expect(r.text).toBe(text);
  });
});

import { extractYouTubeViews } from "../scripts/stats-lib.mjs";

describe("extractYouTubeViews", () => {
  it("reads the comma simpleText form (CI fallback)", () => {
    expect(extractYouTubeViews(String.raw`x,"simpleText":"534,463,522 views",y`)).toBe(534463522);
  });
  it("reads the raw viewCount from ytInitialData", () => {
    expect(extractYouTubeViews('...,"viewCount":"533033080","foo":1,...')).toBe(533033080);
  });
  it("returns NaN when absent", () => {
    expect(Number.isNaN(extractYouTubeViews("<html>no data</html>"))).toBe(true);
  });
});

import { extractSpotifyFollowers, withinSanity, formatStat as fmtStat } from "../scripts/stats-lib.mjs";

describe("extractSpotifyFollowers", () => {
  it("reads followers.total from the artist API shape", () => {
    expect(extractSpotifyFollowers({ followers: { total: 17070969 }, name: "Burna Boy" })).toBe(17070969);
  });
  it("returns NaN when missing", () => {
    expect(Number.isNaN(extractSpotifyFollowers({}))).toBe(true);
  });
});

describe("withinSanity (live safety gate)", () => {
  const opts = { maxJump: 0.12, min: 40000000, max: 90000000 };
  it("accepts a plausible move", () => {
    expect(withinSanity(56517687, 56800000, opts)).toBe(true);
  });
  it("rejects an implausible jump (kworb mis-read)", () => {
    expect(withinSanity(56517687, 90000000, opts)).toBe(false); // ~59% jump
  });
  it("rejects values outside the absolute range", () => {
    expect(withinSanity(56517687, 61, opts)).toBe(false); // a rank mis-read as a count
  });
  it("rejects NaN / non-positive", () => {
    expect(withinSanity(56517687, NaN, opts)).toBe(false);
    expect(withinSanity(56517687, 0, opts)).toBe(false);
  });
});

describe("formatStat M1", () => {
  it("formats one decimal million", () => {
    expect(fmtStat(17070969, "M1")).toBe("17.1M");
    expect(fmtStat(17240000, "M1")).toBe("17.2M");
  });
});

import { extractKworbYouTubeVideo, extractKworbYouTubeTotal, appendTrendPoint } from "../scripts/stats-lib.mjs";

describe("kworb YouTube extractors", () => {
  const html = `<tr><td>Burna Boy - Ye [Official Music Video]</td><td>306,906,990</td></tr>
    <tr><td>Burna Boy - Ye [Official Audio]</td><td>7,761,728</td></tr>
    <tr><td>Total views:</td><td>3,151,172,520</td></tr>`;
  it("matches the exact video variant, not a same-song audio row", () => {
    expect(extractKworbYouTubeVideo(html, "Ye [Official Music Video]")).toBe(306906990);
    expect(extractKworbYouTubeVideo(html, "Ye [Official Audio]")).toBe(7761728);
  });
  it("returns NaN for an unknown title", () => {
    expect(Number.isNaN(extractKworbYouTubeVideo(html, "Nope"))).toBe(true);
  });
  it("reads the total-views figure", () => {
    expect(extractKworbYouTubeTotal(html)).toBe(3151172520);
  });
});

describe("appendTrendPoint", () => {
  const src = `export const monthlyListenersSeries: TrendPoint[] = [\n  { date: "2026-07-23", value: 56.52 },\n];\n`;
  it("appends a new dated point before the closing bracket", () => {
    const r = appendTrendPoint(src, "export const monthlyListenersSeries", "2026-07-24", 56.93);
    expect(r.applied).toBe(true);
    expect(r.text).toContain('{ date: "2026-07-24", value: 56.93 },');
    expect(r.text.indexOf("2026-07-24")).toBeGreaterThan(r.text.indexOf("2026-07-23"));
  });
  it("is idempotent — never duplicates a date", () => {
    const r = appendTrendPoint(src, "export const monthlyListenersSeries", "2026-07-23", 56.52);
    expect(r.applied).toBe(false);
    expect(r.reason).toBe("date already present");
  });
});

// ── The 2026 running totals (streams-2026-*) ──────────────────────────────
// A ledger: a checkpoint plus each later day's streams under the date kworb's
// page is stamped with, published on the newest day every member of the group
// covers — never the change in the cumulative total, never a daily keyed by
// the bot's own clock. The fixture is the literal shape of Burna Boy's page on
// 12 Sep 2026, stamp and totals table included.

// @ts-expect-error — plain ESM helper module
import { extractKworbArtistPage, coveredThrough, ledgerGaps, ledgerValue, alignLedgers, rollLedger, nextDay, recordReading, tiedRows, fillSkippedDays } from "../scripts/stats-lib.mjs";
import { readFileSync } from "node:fs";

const KWORB_ARTIST_PAGE = `</span><br><br>Last updated: 2026/09/11<br><br>
<table style="width: 580px;">
<thead><tr>
<th class="text"></th>
<th>Total</th>
<th>As lead</th>
<th>Solo</th>
<th>As feature (*)</th>
</tr></thead><tbody>
<tr><td class="text">Streams</td><td>10,859,476,411</td><td class="smaller">6,209,425,624</td><td class="smaller">4,530,756,464</td><td class="smaller">4,650,050,787</td></tr>
<tr><td class="text">Daily</td><td>7,828,573</td><td class="smaller">3,106,719</td><td class="smaller">2,371,565</td><td class="smaller">4,721,854</td></tr>
<tr><td class="text">Tracks</td><td>291</td><td class="smaller">120</td></tr>`;

describe("extractKworbArtistPage", () => {
  it("reads the page's stamp, its total and the day's streams together", () => {
    expect(extractKworbArtistPage(KWORB_ARTIST_PAGE)).toEqual({
      date: "2026-09-11",
      total: 10_859_476_411,
      daily: 7_828_573,
    });
  });
  it("takes the Daily row's total column, not a lead/solo/feature split", () => {
    expect(extractKworbArtistPage(KWORB_ARTIST_PAGE)!.daily).not.toBe(4_721_854);
  });
  it("is null without a stamp — a daily without its date is not a reading", () => {
    expect(extractKworbArtistPage(KWORB_ARTIST_PAGE.replace(/Last updated: [^<]+/, ""))).toBeNull();
  });
});

describe("a ledger is a checkpoint plus dated dailies, and a hole is a hole", () => {
  const checkpoint = { date: "2026-09-09", value: 1_756_000_000 };
  it("covers forward from the checkpoint only while every day is present", () => {
    expect(coveredThrough(checkpoint, { "2026-09-10": 7_714_000, "2026-09-11": 7_828_573 })).toBe("2026-09-11");
    expect(coveredThrough(checkpoint, { "2026-09-11": 7_828_573 }), "09/10 missing: cannot pass it").toBe("2026-09-09");
    expect(coveredThrough(checkpoint, {})).toBe("2026-09-09");
  });
  it("names the missing days below the newest reading", () => {
    expect(ledgerGaps(checkpoint, { "2026-09-10": 1, "2026-09-13": 1 })).toEqual(["2026-09-11", "2026-09-12"]);
    expect(ledgerGaps(checkpoint, { "2026-09-10": 1, "2026-09-11": 1 })).toEqual([]);
  });
  it("sums the dailies through a covered day and refuses one it does not cover", () => {
    const readings = { "2026-09-10": 7_714_000, "2026-09-11": 7_828_573 };
    expect(ledgerValue(checkpoint, readings, "2026-09-09")).toBe(1_756_000_000);
    expect(ledgerValue(checkpoint, readings, "2026-09-10")).toBe(1_763_714_000);
    expect(ledgerValue(checkpoint, readings, "2026-09-11")).toBe(1_771_542_573);
    expect(ledgerValue(checkpoint, readings, "2026-09-12")).toBeNull();
    expect(ledgerValue(checkpoint, readings, "2026-09-08")).toBeNull();
  });
  it("a zero or a null is a hole, not a day", () => {
    expect(coveredThrough(checkpoint, { "2026-09-10": 0, "2026-09-11": 7_828_573 })).toBe("2026-09-09");
    expect(ledgerValue({ date: "2026-09-29", value: 100 }, { "2026-09-30": null }, "2026-09-30")).toBeNull();
    expect(ledgerValue(checkpoint, { "2026-09-10": 0 }, "2026-09-10")).toBeNull();
  });
});

describe("recordReading — the page's date is the key, and only a real day gets in", () => {
  // The whole reason the run-date design went: the bot's own clock said
  // "new day" and 27 Aug, 29 Aug and 2 Sep 2026 were each added twice. A
  // reading is recorded under the date the page carries, once.
  const checkpoint = { date: "2026-09-09", value: 1_756_000_000 };
  const page = { date: "2026-09-10", total: 10_851_429_147, daily: 7_714_000 };

  it("records a day after the checkpoint under the page's own date", () => {
    expect(recordReading(checkpoint, {}, page, 25_000_000)).toEqual({ readings: { "2026-09-10": 7_714_000 }, recorded: true });
  });
  it("reading the same page three times records one day once", () => {
    let readings = {};
    const outcomes = [1, 2, 3].map(() => {
      const r = recordReading(checkpoint, readings, page, 25_000_000);
      readings = r.readings;
      return r.recorded;
    });
    expect(outcomes).toEqual([true, false, false]);
    expect(ledgerValue(checkpoint, readings, "2026-09-10")).toBe(1_763_714_000);
  });
  it("a day on or before the checkpoint is already inside it", () => {
    expect(recordReading(checkpoint, {}, { ...page, date: "2026-09-09" }).recorded).toBe(false);
    expect(recordReading(checkpoint, {}, { ...page, date: "2026-09-08" }).recorded).toBe(false);
  });
  it("refuses a daily that is not a positive number within the gate, and says so", () => {
    for (const daily of [0, -1, NaN, null, 25_000_001]) {
      const r = recordReading(checkpoint, {}, { ...page, daily }, 25_000_000);
      expect(r.recorded, String(daily)).toBe(false);
      expect(r.reason, String(daily)).toMatch(/implausible/);
      expect(r.readings).toEqual({});
    }
  });
  it("first read wins — a re-read cannot rewrite a recorded day", () => {
    const r = recordReading(checkpoint, { "2026-09-10": 7_714_000 }, { ...page, daily: 9_999_999 }, 25_000_000);
    expect(r.recorded).toBe(false);
    expect(r.readings["2026-09-10"]).toBe(7_714_000);
  });
  it("the bot records through recordReading with the page's own date — never the run date, never a total difference", () => {
    // A source-level guard, because the regression is one expression:
    // `m.readings[today] = reading.daily` (the run-date sum) or
    // `reading.total - lastTotal` (a cumulative difference) would pass every
    // value-level test above.
    const apply = readFileSync("scripts/apply-stat-updates.mjs", "utf8");
    expect(apply).toMatch(/recordReading\(m\.checkpoint, m\.readings, reading, m\.dailyMax\)/);
    expect(apply).not.toMatch(/readings\[today\]/);
    expect(apply).not.toMatch(/reading\.total\s*-/);
  });
  it("rolls forward: the published day becomes the checkpoint and its dailies are dropped", () => {
    const rolled = rollLedger(checkpoint, { "2026-09-10": 7_714_000, "2026-09-11": 7_828_573 }, "2026-09-10", 1_763_714_000);
    expect(rolled).toEqual({ checkpoint: { date: "2026-09-10", value: 1_763_714_000 }, readings: { "2026-09-11": 7_828_573 } });
    expect(ledgerValue(rolled.checkpoint, rolled.readings, "2026-09-11")).toBe(1_771_542_573);
  });
  it("nextDay walks calendar days, month ends included", () => {
    expect(nextDay("2026-09-30")).toBe("2026-10-01");
    expect(nextDay("2026-12-31")).toBe("2027-01-01");
  });
});

describe("tiedRows — a gap inside the method's resolution is shown level, not called", () => {
  // The five as they stood through 09/10: Tems 1,775,357,158, Wizkid
  // 1,770,046,000, Burna Boy 1,763,714,000 — 5.3M and 6.3M apart, both
  // inside the ten million a tracker-anchored count can resolve.
  const rows = [
    { id: "tems", value: 1_775_357_158 },
    { id: "wizkid", value: 1_770_046_000 },
    { id: "burna", value: 1_763_714_000 },
    { id: "asake", value: 1_425_727_000 },
    { id: "tyla", value: 1_188_413_000 },
  ];
  it("marks each row within `within` of the row above, chaining through a level group", () => {
    expect([...tiedRows(rows, 10_000_000)].sort()).toEqual(["burna", "wizkid"]);
  });
  it("lets a row go the day its gap opens past the threshold", () => {
    const apart = rows.map((r) => (r.id === "burna" ? { ...r, value: 1_759_000_000 } : r)); // 11.0M behind
    expect([...tiedRows(apart, 10_000_000)]).toEqual(["wizkid"]);
  });
  it("marks nothing without a threshold", () => {
    expect(tiedRows(rows, undefined).size).toBe(0);
    expect(tiedRows(rows, 0).size).toBe(0);
  });
});

describe("fillSkippedDays — a day kworb skipped is derived from the page's own totals, or left a hole", () => {
  // Tems' page went from a 09/08 stamp to a 09/10 stamp: the total moved two
  // days' worth, the Daily was one day's. The other day is total movement
  // minus the stamped day's Daily.
  const cp = { date: "2026-09-09", value: 1_770_000_000 };
  const prev = { date: "2026-09-10", total: 6_173_999_302, daily: 5_357_158 };
  it("fills one skipped day from the two stamps around it", () => {
    const next = { date: "2026-09-12", total: 6_184_700_000, daily: 5_400_000 };
    const r = fillSkippedDays(cp, { "2026-09-10": 5_357_158, "2026-09-12": 5_400_000 }, prev, next, 25_000_000);
    expect(r.filled).toEqual(["2026-09-11"]);
    expect(r.readings["2026-09-11"]).toBe(6_184_700_000 - 6_173_999_302 - 5_400_000);
    expect(coveredThrough(cp, r.readings)).toBe("2026-09-12");
  });
  it("splits two skipped days evenly — the total through the gap's end is exact either way", () => {
    const next = { date: "2026-09-13", total: 6_190_000_000, daily: 5_300_000 };
    const r = fillSkippedDays(cp, { "2026-09-10": 5_357_158, "2026-09-13": 5_300_000 }, prev, next, 25_000_000);
    expect(r.filled).toEqual(["2026-09-11", "2026-09-12"]);
    const gap = 6_190_000_000 - 6_173_999_302 - 5_300_000;
    expect(r.readings["2026-09-11"] + r.readings["2026-09-12"]).toBeCloseTo(gap, -1);
  });
  it("refuses a gap that is not a day's streams — a catalogue jump stays a hole for a hand", () => {
    const next = { date: "2026-09-12", total: 6_240_000_000, daily: 5_400_000 }; // +60M in a day
    const r = fillSkippedDays(cp, { "2026-09-10": 5_357_158, "2026-09-12": 5_400_000 }, prev, next, 25_000_000);
    expect(r.filled).toEqual([]);
    expect(r.reason).toMatch(/left as a hole/);
    expect(r.readings["2026-09-11"]).toBeUndefined();
  });
  it("does nothing when no day was skipped, and never touches a day already read", () => {
    const next = { date: "2026-09-11", total: 6_179_356_460, daily: 5_357_158 };
    expect(fillSkippedDays(cp, { "2026-09-10": 5_357_158, "2026-09-11": 5_357_158 }, prev, next).filled).toEqual([]);
    const r = fillSkippedDays(cp, { "2026-09-10": 5_357_158, "2026-09-11": 5_000_000, "2026-09-12": 5_400_000 }, prev, { date: "2026-09-12", total: 6_184_700_000, daily: 5_400_000 });
    expect(r.readings["2026-09-11"]).toBe(5_000_000);
  });
});

describe("alignLedgers — a group publishes on the newest day every member covers", () => {
  // 12 Sep 2026 as read: four pages stamped 09/11, Tems' still 09/10. The
  // group holds at 09/10 for everyone rather than compare her yesterday with
  // their today.
  const members = [
    { id: "burna", checkpoint: { date: "2026-09-09", value: 1_756_000_000 }, readings: { "2026-09-10": 7_714_000, "2026-09-11": 7_828_573 } },
    { id: "wizkid", checkpoint: { date: "2026-09-09", value: 1_764_000_000 }, readings: { "2026-09-10": 6_046_000, "2026-09-11": 6_229_175 } },
    { id: "tems", checkpoint: { date: "2026-09-09", value: 1_770_000_000 }, readings: { "2026-09-10": 5_357_158 } },
  ];
  it("holds the whole group on the lagging member's day", () => {
    expect(alignLedgers(members)).toEqual({
      date: "2026-09-10",
      values: { burna: 1_763_714_000, wizkid: 1_770_046_000, tems: 1_775_357_158 },
    });
  });
  it("advances the moment the lagging page catches up", () => {
    const caughtUp = members.map((m) =>
      m.id === "tems" ? { ...m, readings: { ...m.readings, "2026-09-11": 5_300_000 } } : m,
    );
    expect(alignLedgers(caughtUp)!.date).toBe("2026-09-11");
  });
  it("a member with a hole holds the group at the day before it, however far the others have read", () => {
    const holed = members.map((m) => (m.id === "tems" ? { ...m, readings: { "2026-09-11": 5_300_000 } } : m));
    expect(alignLedgers(holed)!.date).toBe("2026-09-09");
  });
  it("is null when a member re-checkpointed past the day the others reach", () => {
    const ahead = members.map((m) => (m.id === "tems" ? { ...m, checkpoint: { date: "2026-09-12", value: 1_786_000_000 }, readings: {} } : m));
    expect(alignLedgers(ahead)).toBeNull();
  });
  it("formats the total the way the 2026 board displays it", () => {
    expect(formatStat(1_763_714_000, "B3")).toBe("1.764B");
    expect(formatStat(1_775_357_158, "B3")).toBe("1.775B");
  });
});

// ── Certification watches ──────────────────────────────────────────────────
import { certWatchStatus } from "../scripts/stats-lib.mjs";

describe("certification watches (FIMI register)", () => {
  it("reports found when the release's row is in the returned fragment", () => {
    const html = '<div class="table-item">Dai Dai — SHAKIRA X BURNA BOY — oro — 2026</div>';
    expect(certWatchStatus(html, "Dai Dai")).toBe("found");
  });
  it("reports not-found on the register's own empty-result message", () => {
    const html = '<div class="nessun-risultato">Nessuna certificazione disponibile per i criteri di ricerca inseriti.</div>';
    expect(certWatchStatus(html, "Dai Dai")).toBe("not-found");
  });
  it("reports unavailable on an empty or non-string payload", () => {
    expect(certWatchStatus("", "Dai Dai")).toBe("unavailable");
    expect(certWatchStatus(undefined, "Dai Dai")).toBe("unavailable");
  });
});
