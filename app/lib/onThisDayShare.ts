/**
 * ON THIS DAY — what the two share images print.
 *
 * SERVER-ONLY: it reads the certification data and the cover lookup.
 *
 * The approved design (design_handoff_burnaboystats/docs-design/
 * design-response-on-this-day.md §2 "Share images", change list 15–18, Paul,
 * 26 Sep 2026) makes the MILESTONE the hero of both images and the DATE their
 * identity: the link preview leads with the lead's headline, the post card
 * with the day numeral beside the record's cover. Everything here is read off
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
  MONTHS,
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

/** The post card's headline, stepped by length: 74/64/56 beside a cover,
 *  84/72/62 without (the OTD Post Card component's own steps). */
export const cardHeadSize = (length: number, cover: boolean) =>
  cover ? (length <= 42 ? 74 : length <= 60 ? 64 : 56) : length <= 42 ? 84 : length <= 60 ? 72 : 62;

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
  /** The day numeral, "16" — the card's identity figure. */
  numeral: string;
  numeralSize: number;
  /** The month in full, "AUGUST". */
  month: string;
  monthSize: number;
  /** A 420px cover (the 640 rung) when the lead has 640px art, else null. */
  cover: string | null;
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
  const cover = Boolean(art);
  const month = MONTHS[day.month - 1];
  const more = day.events.length - 1;
  const source = sharePublisher(lead);
  return {
    numeral: String(day.day),
    numeralSize: cover ? 280 : 360,
    month: month.toUpperCase(),
    // Beside a cover the month stacks under the numeral in a narrow column,
    // so the four long months step down to hold it on one line.
    monthSize: cover ? (month.length > 7 ? 44 : 54) : 64,
    cover: art ? spotifyImage(art, 420) : null,
    headline: lead.headline.toUpperCase(),
    headSize: cardHeadSize(lead.headline.length, cover),
    record: isRecordLine(lead) ? lead.detail : null,
    year: String(lead.year),
    kind: lead.kind,
    kindLine: `${KIND_MARK[lead.kind].word}${more ? ` · + ${more} more milestone${more === 1 ? "" : "s"} on this day` : ""}`.toUpperCase(),
    source: source ? source.toUpperCase() : null,
    url: cardUrl(`/on-this-day/${day.slug}`),
  };
}
