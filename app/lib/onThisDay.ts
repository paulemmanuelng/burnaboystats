/**
 * ON THIS DAY — one list of dated Burna Boy events, derived from the data.
 *
 * SERVER-ONLY: it reads the certification, chart, tour and award datasets.
 *
 * Every event here is a record that ALREADY carries the day it happened, in a
 * field of its own:
 *
 *   release        albums.ts `released`; daiDai.ts DAI_DAI_SPOTIFY_DEBUT
 *   chart          charts.ts `peakDate` (the issue the peak was first reached),
 *                  Top 10 peaks only — the site's own peak bands
 *   streaming      daiDai.ts DAI_DAI_SPOTIFY_NO1_FIRST_DAY, DAI_DAI_YT_NO1_SINCE
 *   certification  certifications.ts certHistory `date` (the register's award day)
 *   award          awards.ts AwardNom `date` (won only) and Honour `date`
 *   show           tours.ts tour `dates[].date`; festival, other-show, concert
 *                  and live-moment `date`
 *
 * Nothing is dated from the day the site logged it (updates.ts), from a year,
 * or from a month: a record without a day is simply not on the calendar.
 * tests/onThisDay.test.ts resolves every event back to the field it came from,
 * and counts the events against the dated records it finds for itself.
 *
 * "Today" is the calendar day in Europe/London — the site's home timezone and
 * the one its daily bot runs on — never the reader's clock, so the server
 * render is the only render and there is nothing for hydration to disagree
 * with.
 */

import { albums } from "../data/albums";
import { albumPageByTitle } from "../data/albumPages";
import { certHistory, COUNTRIES } from "../data/certifications";
import { albumCharts, singleCharts, featureCharts, CHART_COUNTRIES, chartTier } from "../data/charts";
import { tours, festivals, otherShows, concerts, liveMoments, type LiveMoment } from "../data/tours";
import { revenueShows } from "../data/tourRevenue";
import { ceremonies, honours } from "../data/awards";
import {
  DAI_DAI_SPOTIFY_DEBUT,
  DAI_DAI_SPOTIFY_BODY_READ,
  DAI_DAI_SPOTIFY_NO1_FIRST_DAY,
  DAI_DAI_SPOTIFY_NO1_DAYS,
  DAI_DAI_YT_NO1_SINCE,
} from "../data/daiDai";
import { awardLabel } from "./awardName";
import type { StatCard } from "./statCards";

// The kinds — shape plus word, in ink — live in a module of their own, so a
// client component can draw a mark without pulling this file's datasets into
// the browser bundle.
import { KIND_MARK, KIND_ORDER, type OnThisDayKind } from "./onThisDayKinds";
export { KIND_MARK, KIND_ORDER };
export type { OnThisDayKind, OnThisDayKindMark, OnThisDayKindWord } from "./onThisDayKinds";

/** Where an event's date was read — resolved back to the raw field by the test. */
export type EventSource =
  | { data: "albums"; title: string }
  | { data: "certHistory"; index: number }
  | { data: "charts"; list: "albums" | "singles" | "features"; title: string; c: string }
  | { data: "tours"; tour: string; index: number }
  | { data: "festivals" | "otherShows" | "concerts" | "liveMoments" | "honours"; index: number }
  | { data: "ceremonies"; ceremony: string; index: number }
  | { data: "daiDai"; field: "DAI_DAI_SPOTIFY_DEBUT" | "DAI_DAI_SPOTIFY_NO1_FIRST_DAY" | "DAI_DAI_YT_NO1_SINCE" };

export interface OnThisDayEvent {
  id: string;
  /** ISO "YYYY-MM-DD", exactly as the source field holds it (a tour show's
   *  "Oct 16, 2025" is the one string that is re-spelled, not re-dated). */
  date: string;
  year: number;
  kind: OnThisDayKind;
  /** A past-tense sentence with no date in it — the page supplies the day. */
  headline: string;
  detail: string;
  /** Who published the record — the body a share card names as its source. */
  body: string;
  /** The page that holds the record. */
  href: string;
  source: EventSource;
  /** Which event leads a day. Higher wins; ties go to the more recent year. */
  rank: number;
}

// ── Words ───────────────────────────────────────────────────────────────────

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

const MON3: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

const pad = (n: number) => String(n).padStart(2, "0");

/** A tour show's "Oct 16, 2025" as "2025-10-16"; null for anything else. */
export function showDateIso(s: string): string | null {
  const m = s.match(/^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/);
  if (!m || !MON3[m[1]]) return null;
  return `${m[3]}-${pad(MON3[m[1]])}-${pad(Number(m[2]))}`;
}

const ORDINAL = ["debut", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];

/** Songs in quotes, albums bare — the house style on the timeline and album pages. */
const named = (title: string, album: boolean) => (album ? title : `“${title}”`);

/** "in the United Kingdom", "in Nigeria". */
const THE = /^(United |Czech Republic$|Netherlands$|Dominican Republic$|Philippines$|Bahamas$)/;
const inCountry = (name: string) => `in ${THE.test(name) ? "the " : ""}${name}`;

/** A feature credit reads "feat. X" on his own releases and "X ft. Burna Boy"
 *  on another artist's; the first needs his name in front of it. */
const creditLine = (credit?: string) =>
  credit ? (/^feat\./i.test(credit) ? `Burna Boy ${credit}` : credit) : undefined;

/** "Billboard Hot 100 / 200" names two charts; say the one this release was on. */
function chartName(code: string, album: boolean): string {
  const body = (CHART_COUNTRIES[code]?.body ?? code).replace(/\s*\(.*\)$/, "");
  const parts = body.split(" / ");
  if (parts.length !== 2) return body;
  const [first, second] = parts;
  if (!album) return first;
  const brand = first.split(" ")[0];
  return /^\d+$/.test(second) || /album/i.test(second)
    ? (second.startsWith(brand) ? second : `${brand} ${second}`)
    : body;
}

const slugWords = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ── Builders, one per dataset ───────────────────────────────────────────────

function releaseEvents(): OnThisDayEvent[] {
  const dated = albums.filter((a) => a.released).sort((a, b) => a.released!.localeCompare(b.released!));
  const out: OnThisDayEvent[] = dated.map((a, i) => {
    const page = albumPageByTitle(a.title);
    return {
      id: `release:${slugWords(a.title)}`,
      date: a.released!,
      year: Number(a.released!.slice(0, 4)),
      kind: "release",
      headline: `Burna Boy released ${a.title}`,
      detail: `His ${ORDINAL[i] ?? `no. ${i + 1}`} studio album · ${a.label}`,
      body: a.label,
      href: page ? `/music/albums/${page.slug}` : "/music",
      source: { data: "albums", title: a.title },
      rank: 90,
    };
  });
  out.push({
    id: "release:dai-dai",
    date: DAI_DAI_SPOTIFY_DEBUT,
    year: Number(DAI_DAI_SPOTIFY_DEBUT.slice(0, 4)),
    kind: "release",
    headline: "“Dai Dai” with Shakira was released",
    detail: `The 2026 FIFA World Cup song — on Spotify's global chart at No. ${DAI_DAI_SPOTIFY_BODY_READ.debutPosition} the same day`,
    body: "Spotify",
    href: "/dai-dai",
    source: { data: "daiDai", field: "DAI_DAI_SPOTIFY_DEBUT" },
    rank: 86,
  });
  return out;
}

function chartEvents(): OnThisDayEvent[] {
  const lists = [
    ["albums", albumCharts],
    ["singles", singleCharts],
    ["features", featureCharts],
  ] as const;
  const out: OnThisDayEvent[] = [];
  for (const [list, releases] of lists) {
    const album = list === "albums";
    for (const r of releases) {
      for (const e of r.entries) {
        if (!e.peakDate) continue;
        const tier = chartTier(e.peak);
        if (tier !== "one" && tier !== "top10") continue;
        const country = CHART_COUNTRIES[e.c]?.name ?? e.c;
        const major = e.c === "UK" || e.c === "US";
        const chart = chartName(e.c, album);
        const chartLabel = album && !/album|200/i.test(chart) ? `Albums chart · ${chart}` : chart;
        out.push({
          id: `chart:${e.c.toLowerCase()}:${slugWords(r.title)}${album ? ":album" : ""}`,
          date: e.peakDate,
          year: Number(e.peakDate.slice(0, 4)),
          kind: "chart",
          headline: `${named(r.title, album)} hit No. ${e.peak} ${inCountry(country)}`,
          detail: [creditLine(r.credit), chartLabel].filter(Boolean).join(" · "),
          body: chart,
          href: `/records/charts#song=${encodeURIComponent(r.title)}`,
          source: { data: "charts", list, title: r.title, c: e.c },
          rank: (e.peak === 1 ? 76 : 60 - e.peak) + (major ? 8 : 0),
        });
      }
    }
  }
  return out;
}

function streamingEvents(): OnThisDayEvent[] {
  return [
    {
      id: "streaming:dai-dai-spotify-no1",
      date: DAI_DAI_SPOTIFY_NO1_FIRST_DAY,
      year: Number(DAI_DAI_SPOTIFY_NO1_FIRST_DAY.slice(0, 4)),
      kind: "streaming",
      headline: "“Dai Dai” went to No. 1 on Spotify's global chart",
      detail: `Daily Top Songs Global — the first of ${DAI_DAI_SPOTIFY_NO1_DAYS} days at No. 1`,
      body: "Spotify",
      href: "/dai-dai",
      source: { data: "daiDai", field: "DAI_DAI_SPOTIFY_NO1_FIRST_DAY" },
      rank: 82,
    },
    {
      id: "streaming:dai-dai-youtube-no1",
      date: DAI_DAI_YT_NO1_SINCE,
      year: Number(DAI_DAI_YT_NO1_SINCE.slice(0, 4)),
      kind: "streaming",
      headline: "“Dai Dai” went to No. 1 on YouTube's global music-video chart",
      detail: "Global Daily Top Music Videos",
      body: "YouTube",
      href: "/dai-dai",
      source: { data: "daiDai", field: "DAI_DAI_YT_NO1_SINCE" },
      rank: 74,
    },
  ];
}

const TIER_RANK: Record<string, number> = { Diamond: 64, Platinum: 52, Gold: 44, Silver: 38 };

function certificationEvents(): OnThisDayEvent[] {
  const out: OnThisDayEvent[] = [];
  certHistory.forEach((e, index) => {
    if (!e.date) return;
    const country = COUNTRIES[e.country];
    const body = e.body ?? country?.body ?? e.country;
    out.push({
      id: `cert:${e.country.toLowerCase()}:${slugWords(e.title)}:${slugWords(awardLabel(e))}`,
      date: e.date,
      year: e.year,
      kind: "certification",
      headline: `${named(e.title, Boolean(e.album))} was certified ${awardLabel(e)} ${inCountry(country?.name ?? e.country)}`,
      detail: [creditLine(e.credit), body].filter(Boolean).join(" · "),
      body,
      href: `/certifications#release=${encodeURIComponent(e.title)}`,
      source: { data: "certHistory", index },
      rank: (TIER_RANK[e.level] ?? 36) + Math.min(e.x ?? 1, 6) - 1 + (e.album ? 2 : 0),
    });
  });
  return out;
}

function awardEvents(): OnThisDayEvent[] {
  const out: OnThisDayEvent[] = [];
  for (const c of ceremonies) {
    c.noms.forEach((n, index) => {
      if (!n.won || !n.date) return;
      out.push({
        id: `award:${slugWords(c.name)}:${n.year}:${slugWords(n.category)}`,
        date: n.date,
        year: n.year,
        kind: "award",
        headline: `${c.name}: ${n.category}`,
        detail: n.work ? `Won · ${n.work}` : "Won",
        body: c.name,
        href: `/records/awards#body=${encodeURIComponent(c.name)}`,
        source: { data: "ceremonies", ceremony: c.name, index },
        rank: 72,
      });
    });
  }
  honours.forEach((h, index) => {
    if (!h.date) return;
    out.push({
      id: `honour:${slugWords(h.title)}:${h.date}`,
      date: h.date,
      year: h.year,
      kind: "award",
      headline: h.title,
      detail: h.note ?? h.org,
      body: h.org,
      href: "/records/awards",
      source: { data: "honours", index },
      rank: 68,
    });
  });
  return out;
}

/** "London Stadium (sold out)", "Stade de France, Paris" → the venue alone. */
const momentVenue = (m: LiveMoment) => m.title.split(/ \(| — |, /)[0].trim();
const bareVenue = (v: string) => v.replace(/\s*\(.*\)$/, "").trim();

function showEvents(): OnThisDayEvent[] {
  const out: OnThisDayEvent[] = [];
  // The full figure, as the revenue board prints it.
  const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

  for (const t of tours) {
    (t.dates ?? []).forEach((s, index) => {
      const date = showDateIso(s.date);
      if (!date) return;
      const year = date.slice(0, 4);
      // A Boxscore gross is joined on venue and year, and only where the tour
      // played that venue once that year — two nights share one reported row.
      const sameVenue = (t.dates ?? []).filter((d) => d.venue === s.venue && d.date.endsWith(year));
      const gross =
        sameVenue.length === 1
          ? revenueShows.filter((r) => r.artist === "Burna Boy" && r.venue === bareVenue(s.venue) && r.year === year)
          : [];
      const row = gross.length === 1 ? gross[0] : undefined;
      // A live moment names the same night where its venue and year match.
      const moments = liveMoments.filter((m) => !m.date && m.year === year && momentVenue(m) === bareVenue(s.venue));
      const moment = moments.length === 1 ? moments[0] : undefined;
      const grossLine = row ? `${usd(row.revenue)}${row.tickets ? ` from ${row.tickets} tickets` : ""}` : undefined;
      out.push({
        id: `show:${date}:${slugWords(s.venue)}`,
        date,
        year: Number(year),
        kind: "show",
        headline: `Burna Boy played ${s.venue}, ${s.city}`,
        detail: moment ? moment.text : [t.name, grossLine].filter(Boolean).join(" · "),
        body: row ? "Billboard Boxscore" : t.name,
        href: row ? "/records/tours/revenue" : "/records/tours",
        source: { data: "tours", tour: t.name, index },
        rank: moment ? (moment.record ? 79 : 70) : row ? 46 + Math.min(row.revenue / 1e6, 6) : 34,
      });
    });
  }

  const sets = [
    ["festivals", festivals, (n: string) => `Burna Boy headlined ${n}`, 52],
    ["otherShows", otherShows, (n: string) => `Burna Boy played ${n}`, 42],
    ["concerts", concerts, (n: string) => (n.includes("Burna Boy") ? n : `Burna Boy headlined ${n}`), 48],
  ] as const;
  for (const [data, list, words, rank] of sets) {
    list.forEach((f, index) => {
      if (!f.date) return;
      out.push({
        id: `show:${f.date}:${slugWords(f.name)}`,
        date: f.date,
        year: Number(f.year),
        kind: "show",
        headline: words(f.name),
        detail: f.location,
        body: f.location,
        href: "/records/tours/festivals",
        source: { data, index },
        rank,
      });
    });
  }

  liveMoments.forEach((m, index) => {
    if (!m.date) return;
    out.push({
      id: `show:${m.date}:${slugWords(m.title)}`,
      date: m.date,
      year: Number(m.year),
      kind: "show",
      headline: m.title,
      detail: m.text,
      body: "Tours & Live",
      href: "/records/tours",
      source: { data: "liveMoments", index },
      rank: m.record ? 88 : 66,
    });
  });
  return out;
}

/** Every dated event, newest first. */
export const onThisDayEvents: OnThisDayEvent[] = [
  ...releaseEvents(),
  ...chartEvents(),
  ...streamingEvents(),
  ...certificationEvents(),
  ...awardEvents(),
  ...showEvents(),
].sort((a, b) => b.date.localeCompare(a.date) || b.rank - a.rank || a.id.localeCompare(b.id));

/** How many events of each kind — every figure on the pages reads off this. */
export const onThisDayCounts = Object.fromEntries(
  KIND_ORDER.map((k) => [k, onThisDayEvents.filter((e) => e.kind === k).length]),
) as Record<OnThisDayKind, number>;

// ── Days ────────────────────────────────────────────────────────────────────

/** "2023-11-02" → "11-02", the key a calendar day is filed under. */
export const dayKey = (iso: string) => iso.slice(5, 10);

/** "11-02" → "2-november", the URL. */
export const daySlug = (key: string) => `${Number(key.slice(3))}-${MONTHS[Number(key.slice(0, 2)) - 1].toLowerCase()}`;

/** "11-02" → "2 November". */
export const dayLabel = (key: string) => `${Number(key.slice(3))} ${MONTHS[Number(key.slice(0, 2)) - 1]}`;

/** "2-november" → "11-02", or null when the slug names no calendar day. */
export function keyFromSlug(slug: string): string | null {
  const m = slug.match(/^(\d{1,2})-([a-z]+)$/);
  if (!m) return null;
  const month = MONTHS.findIndex((n) => n.toLowerCase() === m[2]);
  const day = Number(m[1]);
  if (month < 0 || day < 1) return null;
  // 2024 is a leap year, so 29 February counts as a day.
  const last = new Date(Date.UTC(2024, month + 1, 0)).getUTCDate();
  if (day > last || String(day) !== m[1]) return null;
  return `${pad(month + 1)}-${pad(day)}`;
}

/** The lead of a list: highest rank, then the most recent year. */
const byLead = (a: OnThisDayEvent, b: OnThisDayEvent) => b.rank - a.rank || b.year - a.year || a.id.localeCompare(b.id);

export interface OnThisDayDay {
  key: string;
  slug: string;
  label: string;
  month: number; // 1–12
  day: number;
  /** Newest first — the day page's order. */
  events: OnThisDayEvent[];
  /** The event the day's card and share image lead with. */
  lead: OnThisDayEvent;
}

/** Every calendar day with at least one event, January to December. */
export const onThisDayDays: OnThisDayDay[] = [...new Set(onThisDayEvents.map((e) => dayKey(e.date)))]
  .sort()
  .map((key) => {
    const events = onThisDayEvents.filter((e) => dayKey(e.date) === key);
    return {
      key,
      slug: daySlug(key),
      label: dayLabel(key),
      month: Number(key.slice(0, 2)),
      day: Number(key.slice(3)),
      events,
      lead: [...events].sort(byLead)[0],
    };
  });

export const dayBySlug = (slug: string) => onThisDayDays.find((d) => d.slug === slug);

/** The days either side of this one on the calendar, wrapping at the year. */
export function neighbours(key: string): { prev: OnThisDayDay; next: OnThisDayDay } {
  const i = onThisDayDays.findIndex((d) => d.key === key);
  const n = onThisDayDays.length;
  return { prev: onThisDayDays[(i - 1 + n) % n], next: onThisDayDays[(i + 1) % n] };
}

// ── Today ───────────────────────────────────────────────────────────────────

/** The calendar day in London at `now`, as "YYYY-MM-DD". */
export function londonDate(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

const addDays = (iso: string, n: number) => {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

/** "3 years ago today", "1 year ago today". */
export const yearsAgo = (years: number) => `${years} year${years === 1 ? "" : "s"} ago`;

export interface OnThisDayPick {
  /** "today" when the London date has an anniversary; else the next that does. */
  mode: "today" | "coming";
  /** The occurrence being shown, ISO — today, or the coming date. */
  iso: string;
  /** Days from the London date to `iso`: 0 today, 11 when it is 11 days off. */
  ahead: number;
  day: OnThisDayDay;
  /** Anniversaries on that occurrence: earlier years only, lead first. */
  events: OnThisDayEvent[];
}

/** The anniversaries falling on one occurrence — events from earlier years. */
function anniversaries(iso: string): { day: OnThisDayDay; events: OnThisDayEvent[] } | null {
  const day = onThisDayDays.find((d) => d.key === dayKey(iso));
  if (!day) return null;
  const year = Number(iso.slice(0, 4));
  const events = day.events.filter((e) => e.year < year).sort(byLead);
  return events.length ? { day, events } : null;
}

/**
 * What the home card shows at `now`: today's anniversaries in London, or —
 * on a day with none — the next date that has one. Never empty while the
 * data holds a single dated event.
 */
export function onThisDayFor(now: Date): OnThisDayPick | null {
  const today = londonDate(now);
  const hit = anniversaries(today);
  if (hit) return { mode: "today", iso: today, ahead: 0, ...hit };
  for (let i = 1; i <= 366; i++) {
    const iso = addDays(today, i);
    const next = anniversaries(iso);
    if (next) return { mode: "coming", iso, ahead: i, ...next };
  }
  return null;
}

/** "1 day", "11 days". */
export const daysCount = (n: number) => `${n} day${n === 1 ? "" : "s"}`;

// ── The home card ───────────────────────────────────────────────────────────

/**
 * The home card's rows (design response §2 Home card; change list item 6):
 * the lead first, then the rest newest first — ties inside a year by rank —
 * at most three. Every row carries its own age, so mixed years read as such.
 */
export function homeRows(pick: OnThisDayPick): OnThisDayEvent[] {
  const [lead, ...rest] = pick.events;
  if (!lead) return [];
  return [lead, ...rest.sort((a, b) => b.year - a.year || byLead(a, b))].slice(0, 3);
}

/** A row's age on the home card: "5 years ago" today, "5th anniversary" ahead. */
export const homeAge = (pick: OnThisDayPick, e: OnThisDayEvent) => {
  const n = Number(pick.iso.slice(0, 4)) - e.year;
  return pick.mode === "today" ? yearsAgo(n) : anniversary(n);
};

/** The lead's age line: "5 years ago today", or "5th anniversary on 7 October". */
export const homeLeadAge = (pick: OnThisDayPick) =>
  pick.mode === "today"
    ? `${homeAge(pick, pick.events[0])} today`
    : `${homeAge(pick, pick.events[0])} on ${pick.day.label}`;

/** The kicker's date part: "today, 7 October" or "coming up in 11 days · 7 October". */
export const homeWhen = (pick: OnThisDayPick) =>
  pick.mode === "today" ? `today, ${pick.day.label}` : `coming up in ${daysCount(pick.ahead)} · ${pick.day.label}`;

/** The day link: "All 2 on 7 October", or "8 October, every year" for one. */
export const homeDayLink = (pick: OnThisDayPick) =>
  pick.events.length > 1 ? `All ${pick.events.length} on ${pick.day.label}` : `${pick.day.label}, every year`;

/** The right column's head: "Also on 7 October", "Also on 16 August · 2 of 4
 *  more" when the card shows only some, or "Next on the calendar" when the
 *  lead is the day's only anniversary. */
export function homeRestTitle(pick: OnThisDayPick): string {
  const shown = homeRows(pick).length - 1;
  const more = pick.events.length - 1;
  if (!shown) return "Next on the calendar";
  return more > shown ? `Also on ${pick.day.label} · ${shown} of ${more} more` : `Also on ${pick.day.label}`;
}

// ── The calendar ────────────────────────────────────────────────────────────

/** Days in a month of the calendar, which has no year: February is 29. */
export const calendarMonthDays = (month: number) => new Date(Date.UTC(2024, month, 0)).getUTCDate();

export interface OnThisDayToday {
  /** The London date, ISO. */
  iso: string;
  /** Its calendar key, "09-26". */
  key: string;
  /** "26 September". */
  label: string;
  /** The day's page, when the calendar has one for today. */
  day: OnThisDayDay | null;
  /** The next dated day after today, and how many days off it is. */
  next: { day: OnThisDayDay; ahead: number };
  /** What the Today panel shows: today when it is dated, else the next. */
  focus: OnThisDayDay;
}

/**
 * The calendar's "today" (design response §2 Calendar and §3): the London
 * date, read once per server render. The page revalidates hourly, like home,
 * so the ring and the Today panel come from the server — no reader clock, no
 * script. Every dated day counts here, this year's too: the calendar has no
 * year. `next` walks real dates, so 29 February is only ever next in a leap
 * year.
 */
export function calendarToday(now: Date): OnThisDayToday {
  const iso = londonDate(now);
  const key = dayKey(iso);
  const byKey = new Map(onThisDayDays.map((d) => [d.key, d]));
  const day = byKey.get(key) ?? null;
  let next: OnThisDayToday["next"] | null = null;
  for (let i = 1; i <= 366 * 4 && !next; i++) {
    const d = byKey.get(dayKey(addDays(iso, i)));
    if (d) next = { day: d, ahead: i };
  }
  // The data always holds a dated day, so the walk always lands.
  const found = next ?? { day: onThisDayDays[0], ahead: 0 };
  return { iso, key, label: dayLabel(key), day, next: found, focus: day ?? found.day };
}

/** The Today panel's sentence: "5 milestones dated today, 2019–2023." or
 *  "Nothing is dated 26 September. Next: 7 October, in 11 days." */
export const todaySentence = (t: OnThisDayToday) =>
  t.day
    ? `${milestones(t.day.events.length)} dated today, ${yearSpan(t.day.events)}.`
    : `Nothing is dated ${t.label}. Next: ${t.next.day.label}, in ${daysCount(t.next.ahead)}.`;

/** The Today panel's line under the lead: "2021 · Charts · + 1 more". */
export const focusMeta = (d: OnThisDayDay) =>
  `${d.lead.year} · ${KIND_MARK[d.lead.kind].word}${d.events.length > 1 ? ` · + ${d.events.length - 1} more` : ""}`;

/** What a screen reader hears for a calendar day (the approved build spec):
 *  "16 August — 5 milestones: “On the Low” was certified Platinum in Sweden",
 *  or "26 September — no milestone". */
export const calendarDayLabel = (key: string, day?: OnThisDayDay | null) =>
  day ? `${day.label} — ${milestones(day.events.length)}: ${day.lead.headline}` : `${dayLabel(key)} — no milestone`;

/** A month's head: "9 dates · 12" — its dated days, then its milestones. */
export const monthSub = (days: OnThisDayDay[]) =>
  `${days.length} date${days.length === 1 ? "" : "s"} · ${days.reduce((n, d) => n + d.events.length, 0)}`;

/**
 * The day a month opens on — the phone's month panel, the desktop's lit cell
 * and row: today, when it falls in the month; else the Today panel's next
 * date, when that does; else the month's busiest day (the earlier on a tie).
 */
export function monthDefault(days: OnThisDayDay[], today: OnThisDayToday): OnThisDayDay | null {
  if (!days.length) return null;
  const focus = days.find((d) => d.key === today.focus.key);
  if (focus) return focus;
  return [...days].sort((a, b) => b.events.length - a.events.length || a.day - b.day)[0];
}

/** The years a day's events span, "2019–2024" or "2023". */
export const yearSpan = (events: OnThisDayEvent[]) => {
  const ys = events.map((e) => e.year);
  const lo = Math.min(...ys);
  const hi = Math.max(...ys);
  return lo === hi ? String(lo) : `${lo}–${hi}`;
};

/** "1 milestone", "5 milestones". */
export const milestones = (n: number) => `${n} milestone${n === 1 ? "" : "s"}`;

// ── A day's page ────────────────────────────────────────────────────────────

/**
 * A detail that states a record: "First African artist to sell out the
 * world's most famous arena.", "…the highest-grossing single concert by any
 * African artist." The day page prints these as record lines, not as the
 * muted detail. Decided by these patterns over the data (the design response
 * lists them), never by marking rows by hand.
 */
const RECORD_LINE = /(^|\b)(first (african|nigerian)|highest-grossing|most famous)/i;
export const isRecordLine = (e: Pick<OnThisDayEvent, "detail">) => RECORD_LINE.test(e.detail);

export interface OnThisDayYear {
  year: number;
  /** The lead first when it falls in this year, then by rank. */
  events: OnThisDayEvent[];
}

/** A day's events by year, newest year first; each year printed once. */
export function yearGroups(day: OnThisDayDay): OnThisDayYear[] {
  const years = [...new Set(day.events.map((e) => e.year))].sort((a, b) => b - a);
  return years.map((year) => ({ year, events: day.events.filter((e) => e.year === year).sort(byLead) }));
}

/** The desktop lede. A one-event day is said as one: "One milestone is dated
 *  8 October, from 2021." — never "Each one links…" about a list of one. */
export function dayLede(day: OnThisDayDay): string {
  const span = yearSpan(day.events);
  return day.events.length === 1
    ? `One milestone is dated ${day.label}, from ${span}. It links to the page that holds the record.`
    : `${milestones(day.events.length)} dated ${day.label}, ${span}, grouped by year, newest first. Each links to the page that holds the record.`;
}

/** The phone's lede: the same facts, shorter. */
export function dayLedeShort(day: OnThisDayDay): string {
  const span = yearSpan(day.events);
  return day.events.length === 1
    ? `One milestone, from ${span}.`
    : `${milestones(day.events.length)}, ${span}, newest year first.`;
}

/** A pager card's line under a neighbour's lead: "2020 · Release · 2 milestones". */
export function dayMeta(day: OnThisDayDay): string {
  const n = day.events.length;
  return `${day.lead.year} · ${KIND_MARK[day.lead.kind].word}${n > 1 ? ` · ${milestones(n)}` : ""}`;
}

// ── The post-ready card ─────────────────────────────────────────────────────

/**
 * A day's share card, in the stat-card shape so /on-this-day/<day>/card is drawn
 * by the same renderer as every other card on the site (lib/statCardImage.tsx).
 * The figure is the lead event's YEAR, never "N years ago": a card is saved and
 * reposted, and a relative age printed on it would be wrong a year later.
 */
export function dayCard(day: OnThisDayDay): StatCard {
  const more = day.events.length - 1;
  return {
    id: `on-this-day-${day.slug}`,
    value: String(day.lead.year),
    label: day.lead.headline,
    kicker: more > 0 ? `On this day, ${day.label} — and ${more} more milestone${more === 1 ? "" : "s"}` : `On this day, ${day.label}`,
    chip: `On this day · ${day.label}`,
    source: day.lead.body,
    detail: day.lead.detail,
    href: `/on-this-day/${day.slug}`,
    watermark: MONTHS[day.month - 1].slice(0, 3).toUpperCase(),
  };
}

/** "1st anniversary", "13th anniversary" — for a date still to come. */
export const anniversary = (years: number) => {
  const tens = years % 100;
  const suffix = tens >= 11 && tens <= 13 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" } as Record<number, string>)[years % 10] ?? "th";
  return `${years}${suffix} anniversary`;
};
