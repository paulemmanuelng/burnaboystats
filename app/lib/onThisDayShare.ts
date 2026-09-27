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
import { cardTextWidth } from "./cardTextWidth";
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

/**
 * The source as the post card prints it: the publisher in capitals, printed
 * once. Where the headline already names it — 10 November's NIGERIA
 * ENTERTAINMENT AWARDS: ALBUM OF THE YEAR, 22 September's SESAC AWARDS: TOP
 * SONGS HONOREE, 30 June's … ON SPOTIFY'S GLOBAL CHART — the foot would say it
 * a second time, so it prints no source (change list 22: a repeated source
 * prints once). The name is matched whole, ignoring case: as a phrase of its
 * own, not the inside of a longer word.
 */
export function cardSource(headline: string, publisher: string | null): string | null {
  if (!publisher) return null;
  const name = publisher.toUpperCase();
  const phrase = new RegExp(`(?<![\\p{L}\\p{N}])${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\p{L}\\p{N}])`, "u");
  return phrase.test(headline.toUpperCase()) ? null : name;
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
 * fails there, not on a card. A word here is what the card cannot break
 * (keepTogether): "NO. 1" and "2× PLATINUM" count as one.
 *
 * And four short lines read as a list, not a sentence: 15 August's BURNA BOY
 * / PLAYED / WALDBÜHNE, / BERLIN at 104. So a headline that would take four
 * lines, one of them under half the measure, is set a step smaller when that
 * step takes fewer lines — 15 August two lines at 88; 7 July and 22 December,
 * four at 88, three at 80. The lines are cardHeadLines', the renderer's own
 * breaks.
 */
const HEAD_STEPS = [120, 104, 88, 80] as const;
export function cardHeadSize(headline: string, measure = 912): number {
  const n = headline.length;
  const longest = Math.max(...keepTogether(headline).split(" ").map((w) => w.length));
  let i = n <= 24 ? 0 : n <= 36 ? 1 : n <= 48 ? 2 : 3;
  while (i < HEAD_STEPS.length - 1 && longest * 0.66 * HEAD_STEPS[i] > measure) i++;
  if (i < HEAD_STEPS.length - 1) {
    const lines = cardHeadLines(headline, HEAD_STEPS[i], measure);
    const shortest = Math.min(...lines.map((l) => cardTextWidth(l, HEAD_STEPS[i])));
    if (lines.length === 4 && shortest < measure / 2 && cardHeadLines(headline, HEAD_STEPS[i + 1], measure).length < 4) i++;
  }
  return HEAD_STEPS[i];
}

/**
 * The lines a post card headline breaks into at `size`, as Satori breaks it
 * under text-wrap: balance (its own procedure, in next/og's satori): lay the
 * words out greedily on the measure; if that takes more than one line, search
 * between half the measure and the measure for the narrowest width that takes
 * no more lines, and lay them out again at that. A line may break after a
 * plain space, or after a hyphen before a letter, as Unicode's line breaking
 * allows (2 August's HEADLINED COCA- / COLA FOOD FEST) — never inside what
 * keepTogether joins. The renders of every day are read back against these
 * lines (tests/onThisDayShareImages.test.tsx) — and the link previews', at
 * their own measure and tracking.
 */
export function cardHeadLines(headline: string, size: number, measure = 912, letterSpacing = 0): string[] {
  const pieces = keepTogether(headline).split(/(?<= )|(?<=-)(?=\D)/);
  const trim = (line: string) => line.replace(/ +$/, "");
  const breakAt = (width: number) => {
    const lines: string[] = [];
    for (const piece of pieces) {
      const last = lines.length - 1;
      if (last >= 0 && cardTextWidth(trim(lines[last] + piece), size, letterSpacing) <= width) lines[last] += piece;
      else lines.push(piece);
    }
    return lines.map(trim);
  };
  const greedy = breakAt(measure);
  if (greedy.length === 1) return greedy;
  let [lo, hi] = [measure / 2, measure];
  while (lo + 1 < hi) {
    const mid = (lo + hi) / 2;
    if (breakAt(mid).length > greedy.length) lo = mid;
    else hi = mid;
  }
  return breakAt(hi);
}

/**
 * The text as the post card and the link preview DRAW it: "No." joined to its
 * number, and a multiple ("2×") to the word it multiplies, by a no-break
 * space — so no line ends "HIT NO." over "1 IN NIGERIA", as 23 May's card
 * did, and no "4×" is left at the end of one, as 5 May's preview left it.
 * Satori breaks lines where Unicode allows (UAX #14), and U+00A0 is glue: it
 * never breaks there, and draws as Geist's space, the same 250 units. Only
 * at the draw: the strings the model holds keep one plain
 * space between words (ruling 8, tests/onThisDayShareImages.test.tsx), and
 * the site spells "No. 1" with a space (tests/siteDebugWording.test.ts).
 */
export const keepTogether = (text: string) => text.replace(/\b(No\.) (?=\d)/gi, "$1\u00a0").replace(/(\d×) /g, "$1\u00a0");

/**
 * The link preview's meta line: 24px, tracked .12em, on ONE line (change list
 * 16) — which beside a cover leaves it 694px (1200 less 64 + 64 padding, the
 * 300px tile and its 48px gap, the 18px mark and its 12px gap), and 1,042
 * without. Set in full at 24 it wrapped on four cover days live (26 Sep
 * 2026) and split the date: "2026 · CERTIFICATION · + 1 MORE ON 18" /
 * "SEPTEMBER" on 18 September, the same on 8 September, 8 December and 23
 * January. So it steps down, as the headline does, to the first of 24, 22
 * and 20 that fits — measured as Satori measures it (cardTextWidth), with a
 * pixel's allowance for the layout's rounding. The words never change.
 */
export const PREVIEW_META = { steps: [24, 22, 20], tracking: 0.12, room: { cover: 694, bare: 1042 } } as const;
export function previewMetaSize(meta: string, cover: boolean): number {
  const room = (cover ? PREVIEW_META.room.cover : PREVIEW_META.room.bare) - 1;
  const { steps, tracking } = PREVIEW_META;
  return steps.find((size) => cardTextWidth(meta, size, size * tracking) <= room) ?? steps[steps.length - 1];
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
  /** The meta line's size (previewMetaSize): 24, stepping to 22 or 20 where it would wrap. */
  metaSize: number;
  /** "BURNABOYSTATS.COM/on-this-day/16-august" */
  url: string;
  alt: string;
}

export function dayPreview(day: OnThisDayDay): DayPreview {
  const lead = day.lead;
  const art = eventCover(lead);
  const more = day.events.length - 1;
  const meta = `${lead.year} · ${KIND_MARK[lead.kind].word}${more ? ` · + ${more} more on ${day.label}` : ""}`.toUpperCase();
  return {
    kicker: `Burna Boy · On this day · ${day.label}`.toUpperCase(),
    headline: lead.headline.toUpperCase(),
    headSize: previewHeadSize(lead.headline.length, Boolean(art)),
    // The tile is 300px wide on a 1200px card; Spotify serves a 300 rung.
    cover: art ? spotifyImage(art, 300) : null,
    kind: lead.kind,
    meta,
    metaSize: previewMetaSize(meta, Boolean(art)),
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
  /** "CERTIFICATION · + 4 MORE MILESTONES ON THIS DAY", or shorter where
   *  the source leaves it less room (cardKindLine). */
  kindLine: string;
  /** The publisher, in capitals, or null: for no publisher (sharePublisher),
   *  or one the headline already names (cardSource). */
  source: string | null;
  url: string;
}

/**
 * The post card's foot, as lib/onThisDayImages.tsx sets it: the year over the
 * kind line on the left, the source (a label over the publisher) on the right,
 * on the card's 912px measure. One place for the sizes, so the kind line is
 * fitted to the type that draws it.
 */
export const CARD_FOOT = {
  measure: 912,
  /** Between the kind line's column and the source's. */
  gap: 32,
  /** The kind's mark, and the gap after it. */
  mark: 20,
  markGap: 12,
  kind: { fontSize: 22, letterSpacing: 2.64 },
  label: { text: "SOURCE", fontSize: 18, letterSpacing: 3.24 },
  source: { fontSize: 22, letterSpacing: 2.2 },
} as const;

/**
 * The kind line, in the longest form that fits on one line beside the source:
 * "CHARTS · + 2 MORE MILESTONES ON THIS DAY", else "… · + 2 MORE ON THIS DAY",
 * else "… · + 2 MORE". Set in full it wrapped on six days (2 March, 17 July,
 * 31 August, 24 October, 3 and 10 November), leaving "DAY" or "THIS DAY" on a
 * line of its own and lifting the rule 29px. The source never wraps and never
 * gives way: it is the publisher's name. Measured as Satori measures it
 * (cardTextWidth), with a pixel's allowance for the layout's rounding. It is
 * given the source the card PRINTS (cardSource): 10 November's headline names
 * its NIGERIA ENTERTAINMENT AWARDS, so it prints none, and its kind line has
 * the measure to itself.
 */
export function cardKindLine(word: string, more: number, source: string | null): string {
  const F = CARD_FOOT;
  const sourceWidth = source
    ? Math.max(cardTextWidth(F.label.text, F.label.fontSize, F.label.letterSpacing), cardTextWidth(source, F.source.fontSize, F.source.letterSpacing))
    : 0;
  const room = F.measure - F.mark - F.markGap - (source ? F.gap + sourceWidth : 0) - 1;
  const forms = more
    ? [`+ ${more} more milestone${more === 1 ? "" : "s"} on this day`, `+ ${more} more on this day`, `+ ${more} more`].map((m) => `${word} · ${m}`.toUpperCase())
    : [word.toUpperCase()];
  return forms.find((l) => cardTextWidth(l, F.kind.fontSize, F.kind.letterSpacing) <= room) ?? forms[forms.length - 1];
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
  const headline = lead.headline.toUpperCase();
  const source = cardSource(headline, sharePublisher(lead));
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
    kindLine: cardKindLine(KIND_MARK[lead.kind].word, more, source),
    source,
    url: cardUrl(`/on-this-day/${day.slug}`),
  };
}
