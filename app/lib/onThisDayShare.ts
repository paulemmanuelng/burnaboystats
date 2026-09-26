/**
 * ON THIS DAY — what the two share images print.
 *
 * SERVER-ONLY: it reads the certification data and the cover lookup.
 *
 * The approved design (design_handoff_burnaboystats/docs-design/
 * design-response-on-this-day.md §2 "Share images", change list 15–18, Paul,
 * 26 Sep 2026) makes the MILESTONE the hero of both images: the link preview
 * leads with the lead's headline, and so, since Paul's note on the post card
 * the same day ("so much focus is on the big gold date whereas the focus
 * should be on the actual stuff being remembered"), does the post card — its
 * date is a small label over the headline, not the day numeral item 15 drew
 * as the card's identity figure. Everything here is read off
 * the day's events — the sizes step by the length of the text they hold, the
 * cover is the art the site already holds for that record, and every count is
 * a count. The drawing is in lib/onThisDayImages.tsx and the two
 * opengraph-image routes.
 */

import { certHistory } from "../data/certifications";
import { coverFor } from "./covers";
import { spotifyImage } from "./spotifyImage";
import { cardUrl } from "./og-image";
import {
  KIND_MARK,
  isRecordLine,
  onThisDayDays,
  onThisDayEvents,
  yearSpan,
  type OnThisDayDay,
  type OnThisDayEvent,
  type OnThisDayKind,
} from "./onThisDay";

// ── Art ─────────────────────────────────────────────────────────────────────

/** The record an event is about, as the cover lookup names it. A show or an
 *  award has no sleeve, so it has no art (brief §2.10: the site holds no
 *  venue, crowd or award photos). */
function artOf(e: OnThisDayEvent): string | undefined {
  const s = e.source;
  switch (s.data) {
    case "albums":
      return coverFor(s.title, "album");
    case "daiDai":
      return coverFor("Dai Dai");
    case "charts":
      return coverFor(s.title, s.list === "albums" ? "album" : "song");
    case "certHistory": {
      const row = certHistory[s.index];
      return coverFor(row.title, row.album ? "album" : "song");
    }
    default:
      return undefined;
  }
}

/** The cover art the site holds for an event's record, at whatever size it
 *  holds it — or null. */
export const eventArt = (e: OnThisDayEvent): string | null => artOf(e) ?? null;

/**
 * Spotify's 640px album-art rung. The share images draw a cover only at this
 * size (change list 15: "the cover is used when the lead has 640px art"): the
 * covers of other artists' records he features on are held at 100×100
 * (lib/covers.ts), which is too small to print 300 or 420 px wide.
 */
const FULL_SIZE_ART = "https://i.scdn.co/image/ab67616d0000b273";
export const isFullSizeArt = (url: string) => url.startsWith(FULL_SIZE_ART);

/** The cover a share image may draw for an event: its art at 640px, or null. */
export function eventCover(e: OnThisDayEvent): string | null {
  const art = artOf(e);
  return art && isFullSizeArt(art) ? art : null;
}

// ── Source ──────────────────────────────────────────────────────────────────

/**
 * The source a post card prints — only when it is a PUBLISHER (design response
 * §2 "Post card": "the body for certifications, charts, awards and streaming,
 * and Billboard Boxscore for grossed shows. A place, tour or label is left
 * off."). A release's body is its record label and an ungrossed show's is its
 * tour or its town, so those cards print no source at all.
 */
export function sharePublisher(e: OnThisDayEvent): string | null {
  switch (e.kind) {
    case "certification":
    case "chart":
    case "award":
    case "streaming":
      return e.body;
    case "show":
      return e.body === "Billboard Boxscore" ? e.body : null;
    case "release":
      return null;
  }
}

// ── Sizes ───────────────────────────────────────────────────────────────────

/** The link preview's headline, stepped by length: Geist caps at 64/56/50,
 *  or 54/46 beside a cover (the OTD Link Preview component's own steps). */
export const previewHeadSize = (length: number, cover: boolean) =>
  cover ? (length <= 44 ? 54 : 46) : length <= 44 ? 64 : length <= 60 ? 56 : 50;

/**
 * The post card's headline — the largest thing on the card — stepped by
 * length: 120 up to 24 characters, 104 to 36, 88 to 48, and 80 past that,
 * the same with a cover or without (the cover sits above it and the headline
 * keeps the full measure). Read against every day on the calendar (26 Sep
 * 2026): most break into two or three lines, and none into more than four —
 * 28 April's 69 characters, the longest, take four at 80.
 *
 * One word can outgrow a step on its own: 1 March's MADFUNXPERIENCE is
 * 9.7em of Geist caps, 1010px at 104 on a 912px measure. So a step also holds
 * the longest word at 0.66em a letter, and steps down until it fits. That is
 * a long word's rate: across twelve letters and more the wide and narrow
 * capitals even out, and MADFUNXPERIENCE's 0.65 is the widest on the
 * calendar. A short word runs wider a letter (SHOW, 0.76) but is never near
 * the measure. It errs small: 18 July's GURTENFESTIVAL would fit at 104 and
 * is set at 88. Every day is rendered and checked against the measure in
 * tests/onThisDayShareImages.test.tsx, so a new word that outruns the rate
 * fails there, not on a card.
 */
const HEAD_STEPS = [120, 104, 88, 80] as const;
export function cardHeadSize(headline: string, measure = 912): number {
  const n = headline.length;
  const longest = Math.max(...headline.split(" ").map((w) => w.length));
  let i = n <= 24 ? 0 : n <= 36 ? 1 : n <= 48 ? 2 : 3;
  while (i < HEAD_STEPS.length - 1 && longest * 0.66 * HEAD_STEPS[i] > measure) i++;
  return HEAD_STEPS[i];
}

// ── The link preview, 1200×630 ──────────────────────────────────────────────

export interface DayPreview {
  /** "BURNA BOY · ON THIS DAY · 16 AUGUST" — capped at 780px on the card. */
  kicker: string;
  /** The lead's headline in capitals: the hero. */
  headline: string;
  headSize: number;
  /** A 300px cover when the lead has 640px art, else null. */
  cover: string | null;
  kind: OnThisDayKind;
  /** "2023 · CERTIFICATION · + 4 MORE ON 16 AUGUST" */
  meta: string;
  /** "BURNABOYSTATS.COM/on-this-day/16-august" */
  url: string;
  alt: string;
}

export function dayPreview(day: OnThisDayDay): DayPreview {
  const lead = day.lead;
  const art = eventCover(lead);
  const more = day.events.length - 1;
  return {
    kicker: `Burna Boy · On this day · ${day.label}`.toUpperCase(),
    headline: lead.headline.toUpperCase(),
    headSize: previewHeadSize(lead.headline.length, Boolean(art)),
    // The tile is 300px wide on a 1200px card; Spotify serves a 300 rung.
    cover: art ? spotifyImage(art, 300) : null,
    kind: lead.kind,
    meta: `${lead.year} · ${KIND_MARK[lead.kind].word}${more ? ` · + ${more} more on ${day.label}` : ""}`.toUpperCase(),
    url: cardUrl(`/on-this-day/${day.slug}`),
    alt: `Burna Boy on this day, ${day.label}: ${lead.year} — ${lead.headline}`,
  };
}

/** The calendar card's four tiles (change list 16): DATES · MILESTONES ·
 *  MONTHS · YEARS, every one a count or a span of the data. */
export function calendarTiles(): { v: string; k: "DATES" | "MILESTONES" | "MONTHS" | "YEARS" }[] {
  return [
    { v: String(onThisDayDays.length), k: "DATES" },
    { v: String(onThisDayEvents.length), k: "MILESTONES" },
    { v: String(new Set(onThisDayDays.map((d) => d.month)).size), k: "MONTHS" },
    { v: yearSpan(onThisDayEvents), k: "YEARS" },
  ];
}

// ── The post card, 1080×1350 ────────────────────────────────────────────────

export interface DayPostCard {
  /** "ON THIS DAY · 16 AUGUST": the date as a small label over the headline,
   *  never a figure of its own (Paul, 26 Sep 2026). */
  dateLine: string;
  /** The cover (the 640 rung) when the lead has 640px art, else null. */
  cover: string | null;
  /** How wide the cover is drawn: 420, or 360 over a headline set at 88 or
   *  less — one that may run to four lines, which a 420 cover leaves no room
   *  for. */
  coverSize: number;
  /** The lead's headline in capitals: the hero, the largest text on the card. */
  headline: string;
  headSize: number;
  /** The lead's record sentence, when its detail states one; else null. */
  record: string | null;
  /** The milestone's year — never a relative age: a saved card is reposted
   *  for years. */
  year: string;
  kind: OnThisDayKind;
  /** "CERTIFICATION · + 4 MORE MILESTONES ON THIS DAY" */
  kindLine: string;
  /** The publisher, in capitals, or null (sharePublisher). */
  source: string | null;
  url: string;
}

/**
 * A day's post card. `withCover: false` draws the no-art layout even when the
 * lead has art — the card route's fallback should the cover fail to load, so
 * a CDN hiccup costs the picture, never the card.
 */
export function dayPostCard(day: OnThisDayDay, { withCover = true }: { withCover?: boolean } = {}): DayPostCard {
  const lead = day.lead;
  const art = withCover ? eventCover(lead) : null;
  const more = day.events.length - 1;
  const source = sharePublisher(lead);
  const headline = lead.headline.toUpperCase();
  const headSize = cardHeadSize(headline);
  return {
    dateLine: `On this day · ${day.label}`.toUpperCase(),
    cover: art ? spotifyImage(art, 420) : null,
    coverSize: headSize >= 104 ? 420 : 360,
    headline,
    headSize,
    record: isRecordLine(lead) ? lead.detail : null,
    year: String(lead.year),
    kind: lead.kind,
    kindLine: `${KIND_MARK[lead.kind].word}${more ? ` · + ${more} more milestone${more === 1 ? "" : "s"} on this day` : ""}`.toUpperCase(),
    source: source ? source.toUpperCase() : null,
    url: cardUrl(`/on-this-day/${day.slug}`),
  };
}
