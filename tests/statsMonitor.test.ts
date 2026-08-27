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

// ── The 2026 running-totals accumulator (streams-2026-*) ──────────────────────
// kworb's all-artists table publishes values in MILLIONS with decimals, and
// the artist link is wrapped in a div — both bit the first extractor draft.
 
// @ts-expect-error — plain ESM helper module
import { extractKworbArtistDaily } from "../scripts/stats-lib.mjs";

const KWORB_ARTISTS_ROW = `<tr>
<td class="text"><div><a href="/spotify/artist/3wcj11K77LjEY1PkEazffa_songs.html">Burna Boy</a></div></td>
<td>10,596.5</td>
<td>9.267</td>
<td class="smaller">6,097.6</td></tr>`;

describe("extractKworbArtistDaily", () => {
  it("reads the daily column and converts from millions", () => {
    expect(extractKworbArtistDaily(KWORB_ARTISTS_ROW, "Burna Boy")).toBe(9267000);
  });
  it("returns NaN for an artist not in the table", () => {
    expect(Number.isNaN(extractKworbArtistDaily(KWORB_ARTISTS_ROW, "Wizkid"))).toBe(true);
  });
});

describe("accumulate metrics", () => {
  const base = { id: "x", kind: "accumulate", baseline: 1_517_360_000 };
  it("adds the daily to the running total on a new day", () => {
    const r = evaluateMetric({ ...base, lastSeenAt: "2026-08-12" }, 9_267_000);
    expect(r.status).toBe("accumulate");
    expect(r.live).toBe(1_526_627_000);
    expect(isActionable(r.status)).toBe(true);
  });
  it("adds only once per day — the live workflow runs hourly", () => {
    const today = new Date().toISOString().slice(0, 10);
    const r = evaluateMetric({ ...base, lastAccumulatedAt: today }, 9_267_000);
    expect(r.status).toBe("ok");
    expect(r.live).toBe(base.baseline); // unchanged
  });
  it("retries a day the source was SEEN on but the increment never landed", () => {
    // This test previously passed `lastSeenAt: today` and expected the day to
    // be skipped — encoding the bug rather than the requirement. lastSeenAt is
    // stamped on every run that merely READ a moved value, including runs where
    // sanity rejected the increment or the anchored edit failed and the
    // baseline was never bumped. Keying the guard off it marked such a day as
    // already counted, so a day's streams vanished from a running total for
    // good. Only lastAccumulatedAt, written beside the baseline bump, may close
    // a day.
    const today = new Date().toISOString().slice(0, 10);
    const r = evaluateMetric({ ...base, lastSeenAt: today }, 9_267_000);
    expect(r.status, "a seen-but-unapplied day must stay retryable").toBe("accumulate");
    expect(r.live).toBe(base.baseline + 9_267_000);
  });
  it("formats the total the way the 2026 board displays it", () => {
    expect(formatStat(1_526_627_000, "B3")).toBe("1.527B");
    expect(formatStat(1_620_560_000, "B3")).toBe("1.621B");
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
