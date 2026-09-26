import { describe, it, expect } from "vitest";
import {
  onThisDayEvents,
  onThisDayCounts,
  onThisDayDays,
  onThisDayFor,
  londonDate,
  dayKey,
  daySlug,
  keyFromSlug,
  dayBySlug,
  showDateIso,
  anniversary,
  type OnThisDayEvent,
  type OnThisDayKind,
} from "../app/lib/onThisDay";
import { albums } from "../app/data/albums";
import { certHistory } from "../app/data/certifications";
import { albumCharts, singleCharts, featureCharts, chartTier, type ChartRelease } from "../app/data/charts";
import { tours, festivals, otherShows, concerts, liveMoments, type Festival } from "../app/data/tours";
import { ceremonies, honours } from "../app/data/awards";
import * as daiDai from "../app/data/daiDai";
import { generateStaticParams } from "../app/on-this-day/[day]/page";
import sitemap from "../app/sitemap";
import { siteUrl } from "../app/site";

/**
 * On this day lists a record on its anniversary only when the record ALREADY
 * carries the day it happened, in a field of its own. These tests are the
 * other half of that promise: they go back to the raw datasets, find every
 * event's field for themselves, and fail on an event whose date is not
 * sitting in the data — computed, approximated, or read from the day the site
 * logged the fact.
 */

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const LISTS: Record<string, ChartRelease[]> = { albums: albumCharts, singles: singleCharts, features: featureCharts };
const SETS: Record<string, Festival[]> = { festivals, otherShows, concerts };

/** The raw value the event's source points at — independent of the builder. */
function rawDate(e: OnThisDayEvent): string | undefined {
  const s = e.source;
  switch (s.data) {
    case "albums":
      return albums.find((a) => a.title === s.title)?.released;
    case "certHistory":
      return certHistory[s.index]?.date;
    case "charts":
      return LISTS[s.list].find((r) => r.title === s.title)?.entries.find((x) => x.c === s.c)?.peakDate;
    case "tours": {
      const show = tours.find((t) => t.name === s.tour)?.dates?.[s.index];
      return show ? (showDateIso(show.date) ?? undefined) : undefined;
    }
    case "festivals":
    case "otherShows":
    case "concerts":
      return SETS[s.data][s.index]?.date;
    case "liveMoments":
      return liveMoments[s.index]?.date;
    case "honours":
      return honours[s.index]?.date;
    case "ceremonies":
      return ceremonies.find((c) => c.name === s.ceremony)?.noms[s.index]?.date;
    case "daiDai":
      return daiDai[s.field];
  }
}

describe("every On this day event is dated by a field in the data", () => {
  it("there are events to check", () => {
    expect(onThisDayEvents.length).toBeGreaterThan(0);
  });

  it("each event's date is the value of the field its source names", () => {
    const wrong = onThisDayEvents
      .filter((e) => rawDate(e) !== e.date)
      .map((e) => `${e.id}: event says ${e.date}, the field holds ${rawDate(e)}`);
    expect(wrong).toEqual([]);
  });

  it("every date is a real ISO calendar day, and its year is the event's", () => {
    const bad = onThisDayEvents.filter((e) => {
      if (!ISO.test(e.date)) return true;
      const d = new Date(`${e.date}T12:00:00Z`);
      return d.toISOString().slice(0, 10) !== e.date || Number(e.date.slice(0, 4)) !== e.year;
    });
    expect(bad.map((e) => `${e.id} ${e.date}`)).toEqual([]);
  });

  it("nothing is dated in the future", () => {
    const today = londonDate(new Date());
    expect(onThisDayEvents.filter((e) => e.date > today).map((e) => `${e.id} ${e.date}`)).toEqual([]);
  });

  it("every event links to a page on the site", () => {
    expect(onThisDayEvents.filter((e) => !e.href.startsWith("/")).map((e) => e.id)).toEqual([]);
  });

  it("ids are unique", () => {
    const ids = onThisDayEvents.map((e) => e.id);
    expect(ids.length).toBe(new Set(ids).size);
  });
});

describe("the dated fields agree with the record around them", () => {
  it("a dated certification's year is its log year", () => {
    const bad = certHistory.filter((c) => c.date && (!ISO.test(c.date) || Number(c.date.slice(0, 4)) !== c.year));
    expect(bad).toEqual([]);
  });

  it("a dated album's year is its release year", () => {
    expect(albums.filter((a) => a.released && Number(a.released.slice(0, 4)) !== a.year)).toEqual([]);
  });

  it("every tour show's date parses", () => {
    const bad = tours.flatMap((t) => (t.dates ?? []).filter((d) => !showDateIso(d.date)).map((d) => `${t.name}: ${d.date}`));
    expect(bad).toEqual([]);
  });

  // The prose keeps its own wording; the field must say the same day. "3 July"
  // and "July 3" both count, and "Sept" is September.
  const MONTH_WORDS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mentions = (text: string, iso: string) => {
    const day = Number(iso.slice(8));
    const mon = MONTH_WORDS[Number(iso.slice(5, 7)) - 1];
    return new RegExp(`\\b${day}\\s+${mon}|\\b${mon}[a-z]*\\.?\\s+${day}\\b`).test(text);
  };

  it("a dated festival, show or concert names that day in its note", () => {
    const bad = [...festivals, ...otherShows, ...concerts]
      .filter((f) => f.date && (!mentions(f.note, f.date) || f.date.slice(0, 4) !== f.year))
      .map((f) => `${f.name} ${f.year}: ${f.date}`);
    expect(bad).toEqual([]);
  });

  it("a dated live moment names that day in its text", () => {
    const bad = liveMoments
      .filter((m) => m.date && (!mentions(m.text, m.date) || m.date.slice(0, 4) !== m.year))
      .map((m) => `${m.title}: ${m.date}`);
    expect(bad).toEqual([]);
  });

  it("a dated honour names that day in its note", () => {
    const bad = honours.filter((h) => h.date && (!mentions(h.note ?? "", h.date) || Number(h.date.slice(0, 4)) !== h.year));
    expect(bad.map((h) => h.title)).toEqual([]);
  });

  it("a dated award result is a win in its own year", () => {
    const bad = ceremonies.flatMap((c) =>
      c.noms.filter((n) => n.date && (!n.won || Number(n.date.slice(0, 4)) !== n.year)).map((n) => `${c.name} ${n.category}`),
    );
    expect(bad).toEqual([]);
  });

  it("a negative control: the matcher refuses a day the prose does not name", () => {
    expect(mentions("Headlined the festival (31 May)", "2024-05-31")).toBe(true);
    expect(mentions("March 2 declared “Burna Boy Day”", "2024-03-02")).toBe(true);
    expect(mentions("Headlined the festival (31 May)", "2024-05-30")).toBe(false);
    expect(mentions("A headliner (7–8 September)", "2024-09-07")).toBe(false);
  });
});

describe("the counts are the dated records, counted from the data", () => {
  // Every figure here is recounted from the raw datasets, so a record that
  // gains a date joins the calendar without anyone retyping a total.
  const chartPeaks = [albumCharts, singleCharts, featureCharts]
    .flat()
    .flatMap((r) => r.entries)
    .filter((e) => e.peakDate && (chartTier(e.peak) === "one" || chartTier(e.peak) === "top10")).length;
  // The three Dai Dai day-stamps the builder reads, counted when they hold a day.
  const dated = (...fields: (keyof typeof daiDai)[]) => fields.filter((f) => ISO.test(String(daiDai[f]))).length;
  const expected: Record<OnThisDayKind, number> = {
    release: albums.filter((a) => a.released).length + dated("DAI_DAI_SPOTIFY_DEBUT"),
    chart: chartPeaks,
    streaming: dated("DAI_DAI_SPOTIFY_NO1_FIRST_DAY", "DAI_DAI_YT_NO1_SINCE"),
    certification: certHistory.filter((c) => c.date).length,
    award:
      ceremonies.flatMap((c) => c.noms).filter((n) => n.won && n.date).length + honours.filter((h) => h.date).length,
    show:
      tours.reduce((n, t) => n + (t.dates?.length ?? 0), 0) +
      [...festivals, ...otherShows, ...concerts].filter((f) => f.date).length +
      liveMoments.filter((m) => m.date).length,
  };

  it("each kind holds exactly its dated records", () => {
    expect(onThisDayCounts).toEqual(expected);
  });

  it("the total is the sum of the kinds", () => {
    const sum = Object.values(expected).reduce((a, b) => a + b, 0);
    expect(onThisDayEvents.length).toBe(sum);
  });

  it("an undated record stays off the calendar", () => {
    const undatedCert = certHistory.findIndex((c) => !c.date);
    expect(undatedCert).toBeGreaterThan(-1);
    expect(onThisDayEvents.some((e) => e.source.data === "certHistory" && e.source.index === undatedCert)).toBe(false);
  });
});

describe("the day pages", () => {
  it("one page per day that has an event, and no other", () => {
    const keys = [...new Set(onThisDayEvents.map((e) => dayKey(e.date)))].sort();
    expect(onThisDayDays.map((d) => d.key)).toEqual(keys);
    expect(generateStaticParams().map((p) => p.day).sort()).toEqual(keys.map(daySlug).sort());
  });

  it("every day page lists its events newest first, and leads with one of them", () => {
    for (const d of onThisDayDays) {
      expect(d.events.length).toBeGreaterThan(0);
      const dates = d.events.map((e) => e.date);
      expect(dates).toEqual([...dates].sort().reverse());
      expect(d.events).toContain(d.lead);
    }
  });

  it("slugs round-trip, and nonsense does not resolve", () => {
    for (const d of onThisDayDays) expect(keyFromSlug(d.slug)).toBe(d.key);
    expect(keyFromSlug("26-september")).toBe("09-26");
    expect(keyFromSlug("29-february")).toBe("02-29");
    expect(keyFromSlug("30-february")).toBeNull();
    expect(keyFromSlug("07-october")).toBeNull();
    expect(keyFromSlug("7-octember")).toBeNull();
    expect(dayBySlug("32-january")).toBeUndefined();
  });

  it("the sitemap carries every day page", () => {
    const urls = new Set(sitemap().map((r) => r.url));
    const missing = onThisDayDays.filter((d) => !urls.has(`${siteUrl}/on-this-day/${d.slug}`)).map((d) => d.slug);
    expect(missing).toEqual([]);
    expect(urls.has(`${siteUrl}/on-this-day`)).toBe(true);
  });
});

describe("today, in London", () => {
  it("reads the London calendar day, not UTC's", () => {
    // 23:30 UTC on 25 Sep is 00:30 on the 26th in London (BST).
    expect(londonDate(new Date("2026-09-25T23:30:00Z"))).toBe("2026-09-26");
    // In winter London is on UTC.
    expect(londonDate(new Date("2026-12-31T23:30:00Z"))).toBe("2026-12-31");
  });

  it("shows an anniversary on a day that has one, earlier years only", () => {
    const day = onThisDayDays.find((d) => d.events.some((e) => e.year < 2027))!;
    const pick = onThisDayFor(new Date(`2027-${day.key}T12:00:00Z`))!;
    expect(pick.mode).toBe("today");
    expect(pick.day.key).toBe(day.key);
    expect(pick.events.every((e) => e.year < 2027)).toBe(true);
    expect(pick.events.length).toBeGreaterThan(0);
  });

  it("on a day with none, names the next date that has one", () => {
    // A key with no events, found from the data rather than assumed.
    const taken = new Set(onThisDayDays.map((d) => d.key));
    let probe = new Date("2027-01-01T12:00:00Z");
    while (taken.has(londonDate(probe).slice(5))) probe = new Date(probe.getTime() + 86_400_000);
    const pick = onThisDayFor(probe)!;
    expect(pick.mode).toBe("coming");
    expect(pick.iso > londonDate(probe)).toBe(true);
    expect(taken.has(pick.day.key)).toBe(true);
    // Nothing with an event sits between the probe and the pick.
    const between = onThisDayDays.filter((d) => {
      const iso = `${pick.iso.slice(0, 4)}-${d.key}`;
      return iso > londonDate(probe) && iso < pick.iso;
    });
    expect(between).toEqual([]);
  });

  it("never offers this year's event as an anniversary", () => {
    const e = onThisDayEvents[0];
    const pick = onThisDayFor(new Date(`${e.date}T12:00:00Z`));
    expect(pick?.events.some((x) => x.id === e.id) ?? false).toBe(false);
  });

  it("says anniversaries the way people do", () => {
    expect([1, 2, 3, 4, 11, 12, 13, 21, 22, 23, 101].map(anniversary)).toEqual([
      "1st anniversary", "2nd anniversary", "3rd anniversary", "4th anniversary",
      "11th anniversary", "12th anniversary", "13th anniversary",
      "21st anniversary", "22nd anniversary", "23rd anniversary", "101st anniversary",
    ]);
  });
});
