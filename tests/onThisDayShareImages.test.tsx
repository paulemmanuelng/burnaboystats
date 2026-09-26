// @vitest-environment node
import { describe, it, expect, afterEach, beforeAll } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { dayBySlug, dayKey, onThisDayDays, onThisDayEvents } from "../app/lib/onThisDay";
import {
  CARD_FOOT,
  calendarTiles,
  cardHeadLines,
  cardKindLine,
  dayPostCard,
  dayPreview,
  eventArt,
  cardHeadSize,
  eventCover,
  isFullSizeArt,
  keepTogether,
  sharePublisher,
  type DayPostCard,
} from "../app/lib/onThisDayShare";
import { cardTextWidth } from "../app/lib/cardTextWidth";
import { OG_ART } from "../app/lib/og-image";
import { ogFonts } from "../app/lib/og-lockup";
import { CARD_PORTRAIT, PREVIEW_PORTRAIT, otdFonts, postCardImage } from "../app/lib/onThisDayImages";
import { BURNA_PORTRAIT } from "../app/lib/artistImages";
import { kernLookupCount } from "../app/lib/unkernedFont";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { albums } from "../app/data/albums";
import { tours, festivals, otherShows, concerts } from "../app/data/tours";

/**
 * The On This Day share images as the approved design draws them (design
 * response §2 "Share images"; change list 15–18, Paul, 26 Sep 2026): the
 * milestone is the hero of the link preview and — since Paul's note the same
 * day, over item 15's numeral — of the post card too, its date a small label,
 * the cover drawn only from 640px art, the source printed only for a
 * publisher, Geist Regular only, and no watermark or seam. The portrait item 15
 * removed is back on these images only, faded into the top right: Paul asked
 * for it on 26 Sep 2026 ("let's have burna boy picture faded on this part of
 * the On this day design").
 *
 * The expected values are the real days the design drew — 16 August, 8
 * October, 28 April, 11 July — read off the data, not a rule restated here.
 */

const day = (slug: string) => {
  const d = dayBySlug(slug);
  if (!d) throw new Error(`no day ${slug}`);
  return d;
};

const ON_THE_LOW = "https://i.scdn.co/image/ab67616d0000b273a9c13c1a5538f87146ac8ca5";

describe("the link preview, 1200×630", () => {
  it("16 August: the lead is the hero beside its cover; the date is in the kicker", () => {
    const p = dayPreview(day("16-august"));
    expect(p.kicker).toBe("BURNA BOY · ON THIS DAY · 16 AUGUST");
    expect(p.headline).toBe("“ON THE LOW” WAS CERTIFIED PLATINUM IN SWEDEN");
    // 45 characters beside a cover: the design's second step, 46px.
    expect(p.headSize).toBe(46);
    // The 300 rung of the same Spotify art, for a 300px tile.
    expect(p.cover).toBe("https://i.scdn.co/image/ab67616d00001e02a9c13c1a5538f87146ac8ca5");
    expect(p.meta).toBe("2023 · CERTIFICATION · + 4 MORE ON 16 AUGUST");
    expect(p.url).toBe("BURNABOYSTATS.COM/on-this-day/16-august");
    expect(p.alt).toBe("Burna Boy on this day, 16 August: 2023 — “On the Low” was certified Platinum in Sweden");
  });

  it("8 October: one event, no art — the headline at 64 and a meta line with no count", () => {
    const p = dayPreview(day("8-october"));
    expect(p.cover).toBeNull();
    expect(p.headSize).toBe(64); // 44 characters
    expect(p.meta).toBe("2021 · SHOW");
  });

  it("the headline steps down by length: 28 April's 69 characters print at 50", () => {
    expect(dayPreview(day("28-april")).headSize).toBe(50);
    expect(dayPreview(day("11-july")).headSize).toBe(54); // 38 characters, beside a cover
  });

  it("no day's kicker outgrows the design's slot, so the 780px cap never cuts a date", () => {
    // The design sized the kicker for 38 characters ("… · 10 SEPTEMBER").
    const longest = Math.max(...onThisDayDays.map((d) => dayPreview(d).kicker.length));
    expect(longest).toBeLessThanOrEqual(38);
  });

  it("the calendar's tiles are DATES · MILESTONES · MONTHS · YEARS, each counted from the events", () => {
    const tiles = calendarTiles();
    expect(tiles.map((t) => t.k)).toEqual(["DATES", "MILESTONES", "MONTHS", "YEARS"]);
    const years = onThisDayEvents.map((e) => Number(e.date.slice(0, 4)));
    expect(tiles.map((t) => t.v)).toEqual([
      String(new Set(onThisDayEvents.map((e) => dayKey(e.date))).size),
      String(onThisDayEvents.length),
      String(new Set(onThisDayEvents.map((e) => e.date.slice(5, 7))).size),
      `${Math.min(...years)}–${Math.max(...years)}`,
    ]);
  });

  it("a negative control: the first build's kind tiles are not among them", () => {
    // app/on-this-day/opengraph-image.tsx @ 78c816c2 printed the two largest
    // kinds, "140 LIVE" and "37 CERTIFICATION".
    const words = calendarTiles().map((t) => t.k as string);
    expect(words).not.toContain("LIVE");
    expect(words).not.toContain("CERTIFICATION");
  });
});

describe("the post card, 1080×1350", () => {
  it("16 August: the cover at 360, the date as a label, and the headline at 88", () => {
    const c = dayPostCard(day("16-august"));
    expect(c.cover).toBe(ON_THE_LOW);
    expect(c.dateLine).toBe("ON THIS DAY · 16 AUGUST");
    // 45 characters: the third step, 88 — which may run to four lines, so
    // the cover gives up 60px to leave the room.
    expect([c.headSize, c.coverSize]).toEqual([88, 360]);
    expect(c.record).toBeNull();
    expect(c.year).toBe("2023");
    expect(c.kindLine).toBe("CERTIFICATION · + 4 MORE MILESTONES ON THIS DAY");
    expect(c.source).toBe("IFPI SVERIGE");
    expect(c.url).toBe("BURNABOYSTATS.COM/on-this-day/16-august");
  });

  it("8 October: no art, the date label and the headline at 88", () => {
    const c = dayPostCard(day("8-october"));
    expect(c.cover).toBeNull();
    expect(c.dateLine).toBe("ON THIS DAY · 8 OCTOBER");
    expect(c.headSize).toBe(88); // 44 characters
    expect(c.kindLine).toBe("SHOW");
    // The source is its tour — not a publisher, so it is left off.
    expect(c.source).toBeNull();
  });

  it("28 April: the longest headline at the last step, 80; the record line prints, and Billboard Boxscore is the source", () => {
    const c = dayPostCard(day("28-april"));
    expect(Math.max(...onThisDayDays.map((d) => d.lead.headline.length))).toBe(c.headline.length);
    expect(c.headSize).toBe(80); // 69 characters
    expect(c.record).toBe("First African artist to sell out the world's most famous arena.");
    expect(c.source).toBe("BILLBOARD BOXSCORE");
  });

  it("11 July: the album's cover, and no record label as a source", () => {
    const c = dayPostCard(day("11-july"));
    expect(c.cover).not.toBeNull();
    expect([c.headSize, c.coverSize]).toEqual([88, 360]); // 38 characters
    expect(c.source).toBeNull();
    expect(c.kindLine).toBe("RELEASE · + 2 MORE MILESTONES ON THIS DAY");
  });

  it("12 August: a headline at 104 keeps the full 420 cover", () => {
    const c = dayPostCard(day("12-august"));
    expect(c.cover).not.toBeNull();
    expect([c.headSize, c.coverSize]).toEqual([104, 420]); // 26 characters
  });

  it("the headline steps by length — 120, 104, 88, 80 — and down again for a word too wide for the step", () => {
    /** n characters of four-letter words. LINE, not WORD: 36 characters of
     *  WORD's wide capitals take four lines at 104, one of them a lone W, and
     *  step down for that (four short lines, below), not for their length. */
    const words = (n: number) => "LINE ".repeat(Math.ceil(n / 5)).slice(0, n).trim().padEnd(n, "E");
    expect(cardHeadSize("BRIT BILLION AWARD")).toBe(120); // 15 July, 18 characters
    expect([24, 25, 36, 37, 48, 49].map((n) => cardHeadSize(words(n)))).toEqual([120, 104, 104, 88, 88, 80]);
    // 1 March: 35 characters would be 104, but MADFUNXPERIENCE is 1010px at
    // 104 on a 912px measure.
    expect(dayPostCard(day("1-march")).headline).toContain("MADFUNXPERIENCE");
    expect(dayPostCard(day("1-march")).headSize).toBe(88);
  });

  it("every day's date label is its own date, and the headline is the largest type on the card", () => {
    const bad = onThisDayDays.filter((d) => {
      const c = dayPostCard(d);
      // The other type: the date label (28), the record (32), the year (52).
      return c.dateLine !== `ON THIS DAY · ${d.label.toUpperCase()}` || c.headSize <= 52;
    });
    expect(bad.map((d) => d.slug)).toEqual([]);
    // The fields the numeral card printed are gone from the model.
    expect(Object.keys(dayPostCard(day("16-august")))).not.toEqual(expect.arrayContaining(["numeral"]));
  });

  it("one more milestone is said as one", () => {
    expect(dayPostCard(day("16-january")).kindLine).toBe("SHOW · + 1 MORE MILESTONE ON THIS DAY");
  });

  it("the kind line gives way to the source, a step at a time, and never wraps", () => {
    // The six days it wrapped on, set in full, until 26 Sep 2026.
    expect(dayPostCard(day("2-march")).kindLine).toBe("AWARDS · + 1 MORE ON THIS DAY"); // beside BOSTON CITY COUNCIL
    expect(dayPostCard(day("24-october")).kindLine).toBe("SHOW · + 2 MORE ON THIS DAY"); // BILLBOARD BOXSCORE
    for (const slug of ["17-july", "31-august"]) expect(dayPostCard(day(slug)).kindLine).toBe("CHARTS · + 2 MORE ON THIS DAY"); // TURNTABLE TOP 100 ALBUMS
    expect(dayPostCard(day("3-november")).kindLine).toBe("CHARTS · + 3 MORE ON THIS DAY");
    // The longest source, NIGERIA ENTERTAINMENT AWARDS, leaves room for the count alone.
    expect(dayPostCard(day("10-november")).kindLine).toBe("AWARDS · + 1 MORE");
    // Where it fits, it is said in full: 16 August's beside IFPI SVERIGE, with 1.7px to spare.
    expect(dayPostCard(day("16-august")).kindLine).toBe("CERTIFICATION · + 4 MORE MILESTONES ON THIS DAY");
    expect(cardKindLine("Charts", 2, null)).toBe("CHARTS · + 2 MORE MILESTONES ON THIS DAY");
    expect(cardKindLine("Show", 0, "BILLBOARD BOXSCORE")).toBe("SHOW");
    // Every day's fits the room its source leaves, measured as Satori measures.
    const F = CARD_FOOT;
    const bad = onThisDayDays.filter((d) => {
      const c = dayPostCard(d);
      const source = c.source ? Math.max(cardTextWidth(F.label.text, F.label.fontSize, F.label.letterSpacing), cardTextWidth(c.source, F.source.fontSize, F.source.letterSpacing)) + F.gap : 0;
      return cardTextWidth(c.kindLine, F.kind.fontSize, F.kind.letterSpacing) + F.mark + F.markGap + source > F.measure;
    });
    expect(bad.map((d) => d.slug)).toEqual([]);
  });

  it("the card draws NO. 1 and 2× PLATINUM unbroken, and the model keeps its plain spaces", () => {
    expect(keepTogether("“TSHWALA BAM (REMIX)” HIT NO. 1 IN NIGERIA")).toBe("“TSHWALA BAM (REMIX)” HIT NO.\u00a01 IN NIGERIA");
    expect(keepTogether("“DAI DAI” WAS CERTIFIED 2× PLATINUM IN CANADA")).toBe("“DAI DAI” WAS CERTIFIED 2×\u00a0PLATINUM IN CANADA");
    expect(keepTogether("the most No. 1s in 12 countries")).toBe("the most No.\u00a01s in 12 countries");
    // Only "No." before a number: 17 July's NO SIGN OF WEAKNESS is a title.
    expect(keepTogether("NO SIGN OF WEAKNESS HIT NO. 1 IN NIGERIA")).toBe("NO SIGN OF WEAKNESS HIT NO.\u00a01 IN NIGERIA");
    // The glue is the draw's: the card's own strings print "No. 1" with a plain space.
    expect(dayPostCard(day("23-may")).headline).toBe("“TSHWALA BAM (REMIX)” HIT NO. 1 IN NIGERIA");
  });

  it("four short lines step down: 15 August's headline sets in two at 88, not four at 104", () => {
    const berlin = dayPostCard(day("15-august")).headline;
    expect(berlin).toBe("BURNA BOY PLAYED WALDBÜHNE, BERLIN");
    expect(cardHeadLines(berlin, 104)).toEqual(["BURNA BOY", "PLAYED", "WALDBÜHNE,", "BERLIN"]);
    expect(cardHeadLines(berlin, 88)).toEqual(["BURNA BOY PLAYED", "WALDBÜHNE, BERLIN"]);
    expect(cardHeadSize(berlin)).toBe(88);
    // Four at 88, three at 80.
    expect(dayPostCard(day("7-july")).headSize).toBe(80);
    expect(dayPostCard(day("22-december")).headSize).toBe(80);
    // Four lines that a step smaller keeps at four stay where they are:
    // 10 November's NIGERIA / ENTERTAINMENT / AWARDS: ALBUM / OF THE YEAR.
    expect(dayPostCard(day("10-november")).headSize).toBe(88);
  });

  it("without its cover the same day draws the no-art layout (the route's fallback), with the same headline", () => {
    const c = dayPostCard(day("16-august"), { withCover: false });
    expect(c.cover).toBeNull();
    expect(c.headSize).toBe(dayPostCard(day("16-august")).headSize);
  });

  it("every card's count is the day's own, and no card prints a relative age", () => {
    const bad = onThisDayDays.filter((d) => {
      const c = dayPostCard(d);
      const n = Number(c.kindLine.match(/\+ (\d+) MORE/)?.[1] ?? 0);
      const printed = [c.headline, c.record ?? "", c.kindLine, c.source ?? "", c.year].join(" ");
      return n !== d.events.length - 1 || /\bago\b|anniversary/i.test(printed) || c.year !== String(d.lead.year);
    });
    expect(bad.map((d) => d.slug)).toEqual([]);
  });

  it("the source is a publisher, never a tour, a place or a record label", () => {
    const notPublishers = new Set(
      [
        ...tours.map((t) => t.name),
        ...albums.map((a) => a.label),
        ...[...festivals, ...otherShows, ...concerts].map((f) => f.location),
        "Tours & Live",
      ].map((s) => s.toUpperCase()),
    );
    const printed = onThisDayDays.map((d) => dayPostCard(d).source).filter((s): s is string => Boolean(s));
    expect(printed.filter((s) => notPublishers.has(s))).toEqual([]);
    // Not vacuous: the bodies behind certifications, charts and grosses do print.
    expect(printed).toEqual(expect.arrayContaining(["BPI", "TURNTABLE TOP 100", "BILLBOARD BOXSCORE"]));
  });

  it("a negative control: the first build printed the lead's tour and label as its source", () => {
    // lib/onThisDay.ts @ 78c816c2, dayCard(): `source: day.lead.body` — on 8
    // October that was the tour, on 11 July the label.
    expect(day("8-october").lead.body).toBe("Space Drift World Tour");
    expect(sharePublisher(day("8-october").lead)).toBeNull();
    expect(sharePublisher(day("11-july").lead)).toBeNull();
  });
});

describe("the art", () => {
  it("a card draws a cover only from the 640px rung the site holds", () => {
    const bad = onThisDayDays.filter((d) => {
      const cover = eventCover(d.lead);
      return cover !== null && !isFullSizeArt(cover);
    });
    expect(bad.map((d) => d.slug)).toEqual([]);
  });

  it("a lead whose only art is a 100px feature cover gets the no-art card", () => {
    const small = onThisDayDays.filter((d) => {
      const art = eventArt(d.lead);
      return art !== null && !isFullSizeArt(art);
    });
    expect(small.length, "no lead has small art — this check proves nothing").toBeGreaterThan(0);
    expect(small.filter((d) => dayPostCard(d).cover !== null || dayPreview(d).cover !== null).map((d) => d.slug)).toEqual([]);
  });

  it("shows and awards have no sleeve, so no cover", () => {
    const bad = onThisDayEvents.filter((e) => (e.kind === "show" || e.kind === "award") && eventArt(e) !== null);
    expect(bad.map((e) => e.id)).toEqual([]);
  });

  it("a negative control, with the URLs the site holds", () => {
    expect(isFullSizeArt(ON_THE_LOW)).toBe(true);
    // Location (Dave ft. Burna Boy), lib/covers.ts.
    expect(
      isFullSizeArt("https://cdn-images.dzcdn.net/images/cover/ad058398e5f4643b846532fe27cfd2f1/100x100-000000-80-0-0.jpg"),
    ).toBe(false);
  });
});

describe("the drawing", () => {
  const FILES = [
    "app/lib/onThisDayImages.tsx",
    "app/on-this-day/[day]/opengraph-image.tsx",
    "app/on-this-day/opengraph-image.tsx",
  ];
  const src = (f: string) => readFileSync(f, "utf8");
  /** Comments blanked: a note ABOUT the portrait is not a use of it. */
  const code = (s: string) =>
    s
      .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
      .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + " ".repeat(m.length - p1.length));

  const BOLD = /fontWeight/;
  const OTHER_FACE = /fontFamily:\s*"(Anton|Space Mono)"/;
  const PORTRAIT = /BURNA_PORTRAIT|artistImages/;
  const WATERMARK = /watermark/i;

  it("Geist Regular only: nothing asks for a weight or another face", () => {
    expect(FILES.filter((f) => BOLD.test(code(src(f))) || OTHER_FACE.test(code(src(f))))).toEqual([]);
  });

  it("no watermark", () => {
    expect(FILES.filter((f) => WATERMARK.test(code(src(f))))).toEqual([]);
  });

  it("the portrait is on all three images, fetched first and drawn by the one fade (Paul, 26 Sep 2026)", () => {
    const lib = code(src("app/lib/onThisDayImages.tsx"));
    expect(lib).toMatch(PORTRAIT);
    expect(lib).toContain("<FadedPortrait src={portrait} at={CARD_PORTRAIT}");
    for (const f of ["app/on-this-day/[day]/opengraph-image.tsx", "app/on-this-day/opengraph-image.tsx"]) {
      expect(code(src(f)), f).toContain("await loadPortrait()");
      expect(code(src(f)), f).toContain("<FadedPortrait src={portrait} at={PREVIEW_PORTRAIT}");
    }
    expect(code(src("app/on-this-day/[day]/card/route.ts"))).toContain("await loadPortrait()");
  });

  /** Every .ts/.tsx file under app/. */
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((e) => {
      const p = join(dir, e);
      return statSync(p).isDirectory() ? walk(p) : /\.tsx?$/.test(e) ? [p] : [];
    });
  const OTD = ["app/lib/onThisDayImages.tsx", "app/on-this-day/[day]/opengraph-image.tsx", "app/on-this-day/opengraph-image.tsx", "app/on-this-day/[day]/card/route.ts"];
  const FADE = /FadedPortrait|loadPortrait|CARD_PORTRAIT|PREVIEW_PORTRAIT/;

  it("and on no other card or preview: the fade is drawn only by the On This Day images", () => {
    expect(walk("app").filter((f) => FADE.test(code(src(f)))).sort()).toEqual([...OTD].sort());
  });

  it("no other share image gains the photo: the image routes that draw it are the ones that did before", () => {
    // /stat-card draws the stat card, whose own portrait predates this
    // (lib/statCardImage.tsx) and which does not take the On This Day fade;
    // the Afrobeats Board card draws Burna Boy as one of its artists.
    const image = (f: string) => /(opengraph-image|twitter-image)\.tsx$|[\\/]route\.tsx?$/.test(f);
    const drawsPhoto = (f: string) => PORTRAIT.test(code(src(f))) || FADE.test(code(src(f))) || /statCardImage\(/.test(code(src(f)));
    expect(walk("app").filter((f) => image(f) && drawsPhoto(f)).sort()).toEqual(
      ["app/afrobeats/opengraph-image.tsx", "app/on-this-day/[day]/card/route.ts", "app/on-this-day/[day]/opengraph-image.tsx", "app/on-this-day/opengraph-image.tsx", "app/stat-card/route.ts"].sort(),
    );
    expect(code(src("app/lib/statCardImage.tsx"))).not.toMatch(/onThisDayImages|FadedPortrait/);
  });

  it("the post card carries the crown lockup, with the fonts it is set in", () => {
    const card = code(src("app/lib/onThisDayImages.tsx"));
    expect(card).toContain("<OgLockup");
    expect(card).toContain("fonts: otdFonts");
    expect(card).not.toMatch(/BURNABOY<\/span>/);
  });

  it("the card route draws the post card, not the stat card", () => {
    const route = code(src("app/on-this-day/[day]/card/route.ts"));
    expect(route).toContain("postCardImage");
    expect(route).not.toContain("statCardImage");
  });

  it("a negative control: the checks catch the lines the first build shipped", () => {
    // app/on-this-day/[day]/opengraph-image.tsx @ 83a70dd8, and
    // app/lib/statCardImage.tsx, which drew the first card.
    expect(
      BOLD.test(`<div style={{ display: "flex", fontSize: 120, fontWeight: 800, letterSpacing: -3, lineHeight: 1, color: GOLD }}>`),
    ).toBe(true);
    expect(PORTRAIT.test(`import { BURNA_PORTRAIT } from "./artistImages";`)).toBe(true);
    expect(WATERMARK.test("{card.watermark}")).toBe(true);
  });

  it("the site-wide art version moved, so X and WhatsApp fetch the new drawing", () => {
    // Every preview they hold was drawn under "lockup-1". The words on the
    // calendar card changed, but a day card's can match its old text exactly.
    expect(OG_ART).not.toBe("lockup-1");
    // And again when the post card dropped its numeral: "on-this-day-1" was
    // live with it, and the words on the card are unchanged.
    expect(OG_ART).not.toBe("on-this-day-1");
  });
});

describe("the images render", () => {
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  const size = (b: Buffer) => ({ w: b.readUInt32BE(16), h: b.readUInt32BE(20) });
  const isPng = (b: Buffer) => b.subarray(0, 4).toString("hex") === "89504e47";

  it("a day's link preview and the calendar's are 1200×630 PNGs", async () => {
    const og = await import("../app/on-this-day/[day]/opengraph-image");
    const cal = await import("../app/on-this-day/opengraph-image");
    for (const res of [await og.default({ params: Promise.resolve({ day: "8-october" }) }), await cal.default()]) {
      const b = Buffer.from(await res.arrayBuffer());
      expect(isPng(b)).toBe(true);
      expect(size(b)).toEqual({ w: 1200, h: 630 });
    }
  }, 60000);

  it("the post card is a 1080×1350 PNG", async () => {
    const { GET } = await import("../app/on-this-day/[day]/card/route");
    const res = await GET(new Request("http://x/on-this-day/8-october/card"), { params: Promise.resolve({ day: "8-october" }) });
    expect(res.headers.get("Content-Type")).toBe("image/png");
    const b = Buffer.from(await res.arrayBuffer());
    expect(isPng(b)).toBe(true);
    expect(size(b)).toEqual({ w: 1080, h: 1350 });
  }, 60000);

  it("a cover that cannot be fetched costs the picture, not the card", async () => {
    let blocked = 0;
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input instanceof Request ? input.url : input);
      if (url.includes("i.scdn.co")) {
        blocked++;
        throw new Error("SIMULATED CDN OUTAGE");
      }
      return realFetch(input as never, init as never);
    }) as typeof fetch;
    const { GET } = await import("../app/on-this-day/[day]/card/route");
    // 21 September's lead has art; no other test renders it, so nothing is cached.
    const res = await GET(new Request("http://x/on-this-day/21-september/card"), {
      params: Promise.resolve({ day: "21-september" }),
    });
    expect(res.status).toBe(200);
    const b = Buffer.from(await res.arrayBuffer());
    expect(isPng(b)).toBe(true);
    expect(size(b)).toEqual({ w: 1080, h: 1350 });
    expect(blocked, "the cover fetch was never attempted — this test proved nothing").toBeGreaterThan(0);
  }, 60000);
});

describe("ruling 8: the images print one plain space between words, and draw it as one", () => {
  it("every day's text model: single ASCII spaces, nothing leading or trailing, no other space character", () => {
    const bad: string[] = [];
    for (const d of onThisDayDays) {
      const p = dayPreview(d);
      const c = dayPostCard(d);
      const printed = { ...p, ...Object.fromEntries(Object.entries(c).map(([k, v]) => [`card.${k}`, v])) };
      for (const [k, v] of Object.entries(printed)) {
        if (typeof v !== "string") continue;
        if (/ {2}|^\s|\s$|[^\S ]/.test(v)) bad.push(`${d.slug} ${k}: ${JSON.stringify(v)}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it("they are drawn in the site's card fonts with Geist's kerning off — the same families, in the same order", () => {
    const geist = (fs: typeof ogFonts) => fs.find((f) => f.name === "geist")!.data;
    expect(otdFonts.map((f) => f.name)).toEqual(ogFonts.map((f) => f.name));
    expect(kernLookupCount(geist(otdFonts))).toBe(0);
    // Not vacuous: the stock Geist kerns, and only the kerning changed.
    expect(kernLookupCount(geist(ogFonts))).toBeGreaterThan(0);
    expect(geist(otdFonts).length).toBe(geist(ogFonts).length);
    for (const name of ["Anton", "Space Mono"]) {
      expect(otdFonts.find((f) => f.name === name)!.data).toBe(ogFonts.find((f) => f.name === name)!.data);
    }
  });

  /**
   * Where the text's last ink column lands, drawn as Satori lays out a card
   * line. With " " each word is its own run, placed where Satori MEASURED the
   * words before it (letter by letter, unkerned); with a no-break space the
   * words are one run, placed as DRAWN. The two agree only when drawing is
   * measuring — the double space was the difference.
   */
  async function lastInk(text: string, fontSize: number, letterSpacing: number, fonts: typeof ogFonts) {
    const res = new ImageResponse(
      (
        <div style={{ display: "flex", width: "100%", height: "100%", padding: 20, background: "#000", color: "#fff", fontFamily: "sans-serif" }}>
          <div style={{ display: "flex", fontSize, letterSpacing }}>{text}</div>
        </div>
      ),
      { width: 1400, height: 160, fonts },
    );
    const { data, info } = await sharp(Buffer.from(await res.arrayBuffer())).raw().toBuffer({ resolveWithObject: true });
    for (let x = info.width - 1; x >= 0; x--) {
      for (let y = 0; y < info.height; y++) if (data[(y * info.width + x) * info.channels] > 128) return x;
    }
    return -1;
  }
  const drift = async (words: [string, string], size: number, tracking: number, fonts: typeof ogFonts) =>
    Math.abs((await lastInk(words.join(" "), size, tracking, fonts)) - (await lastInk(words.join("\u00a0"), size, tracking, fonts)));

  // The three the 26 Sep renders showed, at the size and tracking each is set in.
  const CASES: [string, [string, string], number, number][] = [
    ["8 October's headline", ["HOLLYWOOD", "BOWL"], 72, 0],
    ["16 August's kind line", ["CERTIFICATION", "·"], 22, 2.64],
    ["28 April's record line", ["artist", "to"], 32, 0],
  ];

  it.each(CASES)("%s: the word after the gap sits where it is drawn, not a kerning's width further on", async (_, words, size, tracking) => {
    expect(await drift(words, size, tracking, otdFonts)).toBeLessThanOrEqual(1);
  }, 30000);

  it.each(CASES)("a negative control, %s in the stock (kerned) Geist: the gap opens", async (_, words, size, tracking) => {
    expect(await drift(words, size, tracking, ogFonts)).toBeGreaterThanOrEqual(3);
  }, 30000);
});

describe("the post card leads with the milestone, not the date (Paul, 26 Sep 2026)", () => {
  // "so much focus is on the big gold date whereas the focus should be on the
  // actual stuff being remembered" — every day on the calendar, rendered and
  // read back as ink.
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  const solid = (hex: string) => sharp({ create: { width: 640, height: 640, channels: 3, background: hex } }).png().toBuffer();

  /** No network: the portrait answers pure green, any cover pure blue —
   *  neither colour is drawn by anything else on the card. */
  async function standIns() {
    const [green, blue] = await Promise.all([solid("#00ff00"), solid("#0000ff")]);
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input instanceof Request ? input.url : input);
      if (url === BURNA_PORTRAIT) return new Response(new Uint8Array(green), { headers: { "Content-Type": "image/png" } });
      if (url.includes("i.scdn.co")) return new Response(new Uint8Array(blue), { headers: { "Content-Type": "image/png" } });
      return realFetch(input as never, init as never);
    }) as typeof fetch;
  }

  type Ink = "white" | "gold" | "record";
  interface Band {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }
  /** The measure: the card's 84px padding either side. */
  const LEFT = 84;
  const RIGHT = 996;
  /** Under the lockup's row (84 + 44). */
  const HERO_TOP = 128;
  /** The portrait's floor is solid from here (CARD_PORTRAIT). */
  const FLOOR = 385;

  /**
   * A card read back as ink. Text is anything bright that is not the stand-in
   * cover, in three inks: the headline's white (#f5f4f0), the date label's
   * gold (#ffb627) and the record line's warm grey (#CFC7BB, which runs 20
   * redder than blue where the white's own edges run 5, and keeps a blue the
   * gold's edges lack). Each ink's rows are
   * grouped into bands of their own, so a gold figure is measured whole even
   * where a white word shares its rows; a row counts toward an ink's band
   * only with 40 pixels of it, so an accent over a capital — PALÉO's, 23
   * July; WALDBÜHNE's, 15 August — is not read as a line of its own. The
   * extent of the text (`all`) counts every bright pixel. The photo count is the portrait
   * test's: a green cast with little blue. The rule is the row the foot's 2px
   * gold line runs across.
   */
  async function readCard(png: Buffer) {
    const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });
    const W = info.width;
    const at = (x: number, y: number) => {
      const i = (y * W + x) * info.channels;
      return [data[i], data[i + 1], data[i + 2]];
    };
    const blue = ([r, g, b]: number[]) => b > 150 && b > r + 80 && b > g + 80;
    const inkOf = (p: number[]): Ink | "edge" | null => {
      if (blue(p) || Math.max(...p) <= 150) return null;
      if (Math.min(...p) > 215) return "white";
      if (p[0] > 200 && p[1] > 90 && p[1] < 215 && p[2] < 90) return "gold";
      if (p[0] - p[2] >= 12 && p[2] > 120) return "record";
      return "edge";
    };
    const photo = ([r, g, b]: number[]) => g > r + 6 && b * 2 < g;
    const ruleish = ([r, g, b]: number[]) => r > 75 && r < 130 && g > 50 && g < 95 && b < 45;
    const ruleRow = (y: number) => {
      let n = 0;
      for (let x = LEFT; x < RIGHT; x++) if (ruleish(at(x, y))) n++;
      return n > 800;
    };

    let rule = -1;
    for (let y = HERO_TOP; y < info.height && rule < 0; y++) if (ruleRow(y)) rule = y;

    /** Bands of each ink, and of all of them, between two rows. */
    const bandsIn = (y0: number, y1: number) => {
      const out = { white: [] as Band[], gold: [] as Band[], record: [] as Band[], all: [] as Band[] };
      const open: Partial<Record<keyof typeof out, Band>> = {};
      for (let y = y0; y < y1; y++) {
        const seen: Partial<Record<keyof typeof out, [number, number, number]>> = {};
        for (let x = 0; x < W; x++) {
          const k = inkOf(at(x, y));
          if (!k) continue;
          for (const key of k === "edge" ? (["all"] as const) : ([k, "all"] as const)) {
            const s0 = seen[key];
            seen[key] = s0 ? [Math.min(s0[0], x), Math.max(s0[1], x), s0[2] + 1] : [x, x, 1];
          }
        }
        for (const key of ["white", "gold", "record", "all"] as const) {
          const hit = seen[key];
          const cur = open[key];
          if (!hit || (key !== "all" && hit[2] < 40)) {
            open[key] = undefined;
            continue;
          }
          if (!cur) out[key].push((open[key] = { top: y, bottom: y, left: hit[0], right: hit[1] }));
          else Object.assign(cur, { bottom: y, left: Math.min(cur.left, hit[0]), right: Math.max(cur.right, hit[1]) });
        }
      }
      return out;
    };

    let cover: Band | null = null;
    for (let y = HERO_TOP; y < rule; y++)
      for (let x = LEFT; x < RIGHT; x++) {
        if (!blue(at(x, y))) continue;
        cover = cover
          ? { top: cover.top, bottom: y, left: Math.min(cover.left, x), right: Math.max(cover.right, x) }
          : { top: y, bottom: y, left: x, right: x };
      }

    /**
     * The foot's text under the rule, in its two greys, as bands of rows: the
     * kind line's cool grey (#9b9ba3, bluer than red, and its mark with it)
     * and the source's warm one (#8A8279, the label's #6B655D — redder than
     * blue, as the year's white and its edges are not). The address under
     * them is the same warm grey but centred, so a source band is one that
     * starts right of x 540 (the longest source starts at 563). The kind
     * line is read right of its mark (x 84–104), which centres on a wrapped
     * line's two rows and would join them.
     */
    const footBands = (is: (p: number[]) => boolean, x0 = 4) => {
      const out: Band[] = [];
      let cur: Band | undefined;
      for (let y = rule + 3; y < info.height - 4; y++) {
        let n = 0;
        let [l, r] = [W, -1];
        for (let x = x0; x < W - 4; x++)
          if (is(at(x, y))) {
            n++;
            l = Math.min(l, x);
            r = Math.max(r, x);
          }
        if (n < 6) cur = undefined;
        else if (!cur) out.push((cur = { top: y, bottom: y, left: l, right: r }));
        else Object.assign(cur, { bottom: y, left: Math.min(cur.left, l), right: Math.max(cur.right, r) });
      }
      return out;
    };
    const foot =
      rule < 0
        ? null
        : {
            kind: footBands(([r, , b]) => b - r >= 4 && b > 80, 110),
            source: footBands(([r, , b]) => r - b >= 10 && r - b < 60 && r > 70).filter((b) => b.left > 540),
          };

    return {
      rule,
      foot,
      /** The hero's text, by ink, top to bottom. */
      hero: bandsIn(HERO_TOP, rule < 0 ? info.height : rule),
      /** The foot's first line: the year, in the headline's white. */
      year: rule < 0 ? null : (bandsIn(rule + 3, info.height).white[0] ?? null),
      cover,
      photoIn(x0: number, y0: number, x1: number, y1: number) {
        let n = 0;
        for (let y = Math.max(0, y0); y < y1; y++) for (let x = x0; x < x1; x++) if (photo(at(x, y))) n++;
        return n;
      },
    };
  }
  type CardRead = Awaited<ReturnType<typeof readCard>>;
  const tall = (b: Band) => b.bottom - b.top + 1;

  /**
   * What is wrong with a card's hierarchy, in words — empty when nothing is.
   * `coverSize` is the cover the model asked for, or null for none.
   */
  function faults(r: CardRead, coverSize: number | null): string[] {
    const f: string[] = [];
    if (r.rule < 0) return ["no rule found"];
    const { white: head, gold, record, all } = r.hero;
    // The date is a label: one gold line of 28px caps, never a figure.
    if (gold.length !== 1) f.push(`${gold.length} gold lines in the hero, not one date label`);
    const goldest = Math.max(0, ...gold.map(tall));
    if (goldest > 26) f.push(`a gold figure ${goldest}px tall — a numeral, not a label`);
    // The label heads the text, straight over the headline: nothing above
    // it, and nothing between them but the 22px gap and the line's leading.
    const textTop = Math.min(...all.map((b) => b.top));
    if (gold[0] && head[0] && !(gold[0].top - textTop <= 2 && head[0].top > gold[0].bottom && head[0].top - gold[0].bottom < 80)) {
      f.push("the date label is not straight over the headline");
    }
    // The headline is the largest text on the card, in one to four lines.
    if (head.length < 1 || head.length > 4) f.push(`the headline runs to ${head.length} lines`);
    const smallestLine = Math.min(...head.map(tall));
    const largestOther = Math.max(...[...gold, ...record, ...(r.year ? [r.year] : [])].map(tall));
    if (!(smallestLine > largestOther)) f.push(`the headline (${smallestLine}px lines) is not the largest text (${largestOther}px)`);
    // Everything fits: inside the measure, clear of the lockup and the foot.
    const top = Math.min(...all.map((b) => b.top));
    const bottom = Math.max(...all.map((b) => b.bottom));
    if (all.some((b) => b.left < LEFT - 4 || b.right > RIGHT)) f.push("text outside the 912px measure");
    if (top < HERO_TOP + 24) f.push(`text at ${top}, into the lockup's row`);
    if (bottom > r.rule - 24) f.push(`text at ${bottom}, onto the rule at ${r.rule}`);
    // No photo behind any glyph: none in the text's rows, across the card.
    if (r.photoIn(0, top - 8, 1080, r.rule) > 0) f.push(`photo behind the text (from ${top})`);
    // Right of the photo's edge, the text starts under its floor.
    if (all.some((b) => b.right >= 600 && b.top < FLOOR)) f.push("text right of x 600 above the portrait's floor");
    // The cover: drawn whole at its size, above the text, nothing over it.
    if (coverSize === null) {
      if (r.cover) f.push("a cover on a day without one");
    } else if (!r.cover) f.push("no cover drawn");
    else {
      const w = r.cover.right - r.cover.left + 1;
      const h = r.cover.bottom - r.cover.top + 1;
      if (Math.abs(w - coverSize) > 4 || Math.abs(h - coverSize) > 4) f.push(`cover drawn ${w}×${h}, not ${coverSize}`);
      if (top <= r.cover.bottom + 24) f.push("text over or against the cover");
      if (r.cover.top < HERO_TOP + 24) f.push("cover into the lockup's row");
    }
    return f;
  }

  /** What is wrong with a card's foot: each of its lines is one line — the
   *  kind line whole, the source a label over one line — with the kind line
   *  clear of the source and all of it on the measure. */
  function footFaults(r: CardRead, source: boolean): string[] {
    if (!r.foot) return ["no rule found"];
    const f: string[] = [];
    const { kind, source: src } = r.foot;
    if (kind.length !== 1) f.push(`the kind line runs to ${kind.length} lines`);
    if (src.length !== (source ? 2 : 0)) f.push(`${src.length} source lines, not ${source ? "a label over one" : "none"}`);
    const name = src.at(-1);
    if (kind[0] && name && kind[0].right + 16 > name.left) f.push(`the kind line runs to ${kind[0].right}, into the source at ${name.left}`);
    if ([...kind, ...src].some((b) => b.left < LEFT - 4 || b.right > RIGHT)) f.push("foot text outside the 912px measure");
    return f;
  }

  /**
   * Where the headline's lines end in ink, against the lines they should be:
   * each ends at its advance (cardTextWidth), less no more than its last
   * letter's side bearing — so a line drawn with a word more or fewer than
   * `lines` says (a "1" at the least, 60px at 80) is caught.
   */
  function lineFaults(head: Band[], lines: string[], size: number): string[] {
    if (head.length !== lines.length) return [`${head.length} headline lines drawn, not ${lines.length}`];
    return lines.flatMap((l, i) => {
      const end = LEFT + cardTextWidth(l, size);
      const at = head[i].right;
      return at > end + 2 || at < end - 0.2 * size ? [`line ${i + 1} ends at ${at}, not by ${Math.round(end)} ("${l.replace(/\u00a0/g, " ")}")`] : [];
    });
  }

  /** A headline's lines that split what reads as one: a line ending on
   *  "NO." or on a multiple ("2×"), or starting on NO.'s number. */
  const splits = (lines: string[]) =>
    lines.flatMap((l, i) => [
      ...(/\bNO\.$/i.test(l) ? [`line ${i + 1} ends "NO."`] : []),
      ...(/\d×$/.test(l) ? [`line ${i + 1} ends on "${l.split(" ").at(-1)}"`] : []),
      ...(i > 0 && /\bNO\.$/i.test(lines[i - 1]) && /^\d/.test(l) ? [`line ${i + 1} starts on NO.'s number`] : []),
    ]);

  const results = new Map<string, { faults: string[]; lines: number; widths: number[]; rule: number; head: string[]; foot: string[] }>();

  beforeAll(async () => {
    await standIns();
    const { GET } = await import("../app/on-this-day/[day]/card/route");
    for (const d of onThisDayDays) {
      const res = await GET(new Request(`http://x/on-this-day/${d.slug}/card`), { params: Promise.resolve({ day: d.slug }) });
      const r = await readCard(Buffer.from(await res.arrayBuffer()));
      const c = dayPostCard(d);
      const lines = cardHeadLines(c.headline, c.headSize);
      results.set(d.slug, {
        faults: faults(r, c.cover ? c.coverSize : null),
        lines: r.hero.white.length,
        widths: r.hero.white.map((b) => b.right - b.left + 1),
        rule: r.rule,
        head: [...lineFaults(r.hero.white, lines, c.headSize), ...splits(lines)],
        foot: footFaults(r, Boolean(c.source)),
      });
    }
    globalThis.fetch = realFetch;
  }, 400000);

  it("every day on the calendar: a date label over the headline, the headline the largest text in at most four lines, nothing overflowing, the cover clear and no photo behind any glyph", () => {
    expect(results.size).toBe(onThisDayDays.length);
    const bad = [...results].filter(([, v]) => v.faults.length).map(([slug, v]) => `${slug}: ${v.faults.join("; ")}`);
    expect(bad).toEqual([]);
  });

  it("the longest headline, 28 April's, takes four lines; 16 August three; 15 July's two", () => {
    expect(results.get("28-april")?.lines).toBe(4);
    expect(results.get("16-august")?.lines).toBe(3);
    expect(results.get("15-july")?.lines).toBe(2);
    expect(Math.max(...[...results.values()].map((v) => v.lines))).toBe(4);
  });

  it("every day's headline breaks where cardHeadLines says, so never inside NO. 1 or after a 2×", () => {
    const bad = [...results].filter(([, v]) => v.head.length).map(([slug, v]) => `${slug}: ${v.head.join("; ")}`);
    expect(bad).toEqual([]);
    // Not vacuous: the tokens are on the calendar, and 23 May's is at a break.
    const printed = onThisDayDays.map((d) => dayPostCard(d).headline);
    expect(printed.filter((h) => /\bNO\. \d/.test(h)).length).toBeGreaterThan(20);
    expect(printed.filter((h) => /\d× /.test(h)).length).toBeGreaterThan(3);
    expect(cardHeadLines(dayPostCard(day("23-may")).headline, 88)).toEqual(["“TSHWALA BAM", "(REMIX)” HIT", "NO.\u00a01 IN NIGERIA"]);
  });

  it("no headline sets as four lines, one under half the measure, where a step smaller takes fewer", () => {
    // 15 August's BURNA BOY / PLAYED / WALDBÜHNE, / BERLIN, at 104, until 26 Sep 2026.
    const bad = onThisDayDays.filter((d) => {
      const c = dayPostCard(d);
      const v = results.get(d.slug)!;
      const step = [120, 104, 88, 80].indexOf(c.headSize);
      return v.lines === 4 && Math.min(...v.widths) < 456 && step < 3 && cardHeadLines(c.headline, [120, 104, 88, 80][step + 1]).length < 4;
    });
    expect(bad.map((d) => d.slug)).toEqual([]);
    expect(results.get("15-august")?.lines).toBe(2);
  });

  it("every day's foot: the kind line whole beside its source, each on one line, and the rule at one height on every card", () => {
    const bad = [...results].filter(([, v]) => v.foot.length).map(([slug, v]) => `${slug}: ${v.foot.join("; ")}`);
    expect(bad).toEqual([]);
    expect(new Set([...results.values()].map((v) => v.rule))).toEqual(new Set([results.get("8-october")!.rule]));
    // Not vacuous: the six days the full kind line wrapped on are among them,
    // each now in a shorter form.
    for (const slug of ["2-march", "17-july", "31-august", "24-october", "3-november", "10-november"]) {
      expect(dayPostCard(day(slug)).kindLine, slug).not.toMatch(/MILESTONES? ON THIS DAY$/);
    }
  });

  it("a negative control: 23 May's headline as the branch drew it, NO. at the end of a line, fails the same read", async () => {
    // The branch at 34fd8fcd, read off its render of 23 May (26 Sep 2026):
    // Satori broke the plain "NO. 1" and set the 1 at the head of line three.
    const shipped = ["“TSHWALA BAM", "(REMIX)” HIT NO.", "1 IN NIGERIA"];
    expect(splits(shipped)).toEqual(['line 2 ends "NO."', "line 3 starts on NO.'s number"]);
    // And the ink tells those lines from the ones the card draws: the
    // headline block, set as the branch set it, reads back as `shipped`, and
    // not as the lines 23 May now takes.
    const c = dayPostCard(day("23-may"));
    const replica = new ImageResponse(
      (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 84, background: "#0c0a09", color: "#f5f4f0", fontFamily: "sans-serif" }}>
          <div style={{ display: "flex", width: 912, fontSize: c.headSize, lineHeight: 1.04, letterSpacing: 0, textWrap: "balance" }}>{c.headline}</div>
        </div>
      ),
      { width: 1080, height: 1350, fonts: otdFonts },
    );
    const head = (await readCard(Buffer.from(await replica.arrayBuffer()))).hero.white;
    expect(lineFaults(head, shipped, c.headSize)).toEqual([]);
    expect(lineFaults(head, cardHeadLines(c.headline, c.headSize), c.headSize)).not.toEqual([]);
    expect(results.get("23-may")?.head).toEqual([]);
  }, 60000);

  it("a negative control: 2 March's foot as the branch set it wraps, and lifts the rule", async () => {
    // The branch at 34fd8fcd printed the kind line in full on every card; on
    // 2 March it wrapped beside BOSTON CITY COUNCIL and left DAY on a line of
    // its own (read off its render, 26 Sep 2026).
    const shipped: DayPostCard = { ...dayPostCard(day("2-march")), kindLine: "AWARDS · + 1 MORE MILESTONE ON THIS DAY" };
    const r = await readCard(Buffer.from(await postCardImage(shipped).arrayBuffer()));
    expect(footFaults(r, true)).toEqual(["the kind line runs to 2 lines"]);
    expect(r.rule).toBeLessThan(results.get("2-march")!.rule);
    expect(results.get("2-march")?.foot).toEqual([]);
  }, 60000);

  it("a negative control: the shipped numeral card fails the same read", async () => {
    // The hero of app/lib/onThisDayImages.tsx @ fbfcb723 on 8 October — the
    // numeral at 360 with the month on its baseline, then the headline at 72
    // — over its foot's rule, in its own lines.
    const NUMERAL_GRAD = "linear-gradient(180deg, #ffd24a 0%, #ffb627 52%, #f5890b 100%)";
    const n = 360;
    const m = 64;
    const shipped = new ImageResponse(
      (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: 84, background: "#0c0a09", color: "#f5f4f0", fontFamily: "sans-serif" }}>
          <div style={{ display: "flex", alignItems: "center", height: 44 }}>
            <div style={{ display: "flex", marginLeft: "auto", fontSize: 26, letterSpacing: 5.72, color: "#ffb627" }}>ON THIS DAY</div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 0 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 44 }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: 30 }}>
                <div style={{ display: "flex", fontSize: n, lineHeight: 0.78, letterSpacing: -0.04 * n, paddingTop: 0.08 * n, whiteSpace: "nowrap", backgroundImage: NUMERAL_GRAD, backgroundClip: "text", color: "transparent" }}>
                  8
                </div>
                <div style={{ display: "flex", fontSize: m, lineHeight: 1, letterSpacing: 0.16 * m, paddingBottom: 18, color: "#f5f4f0" }}>OCTOBER</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 56, width: 912 }}>
              <div style={{ display: "flex", fontSize: 72, lineHeight: 1.08, letterSpacing: 0, textWrap: "balance" }}>
                BURNA BOY PLAYED HOLLYWOOD BOWL, LOS ANGELES
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", height: 2, background: "rgba(255,182,39,0.35)" }} />
            <div style={{ display: "flex", fontSize: 52, lineHeight: 1, letterSpacing: 1.04 }}>2021</div>
            <div style={{ display: "flex", height: 60 }} />
          </div>
        </div>
      ),
      { width: 1080, height: 1350, fonts: otdFonts },
    );
    const f = faults(await readCard(Buffer.from(await shipped.arrayBuffer())), null);
    expect(f).toEqual(expect.arrayContaining([expect.stringMatching(/numeral, not a label/), expect.stringMatching(/is not the largest text/)]));
    // And the 8 October it now draws passes.
    expect(results.get("8-october")?.faults).toEqual([]);
  }, 60000);
});

describe("the portrait, faded into the top right (Paul, 26 Sep 2026)", () => {
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  const solid = (hex: string) => sharp({ create: { width: 640, height: 640, channels: 3, background: hex } }).png().toBuffer();

  /**
   * No network. The portrait answers pure green — nothing on these images is
   * green, so a green cast is the photo showing through — or fails outright.
   * Any cover answers pure blue.
   */
  async function serve(portrait: "green" | "down") {
    const [green, blue] = await Promise.all([solid("#00ff00"), solid("#0000ff")]);
    let asked = 0;
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input instanceof Request ? input.url : input);
      if (url === BURNA_PORTRAIT) {
        asked++;
        if (portrait === "down") throw new Error("SIMULATED CDN OUTAGE");
        return new Response(new Uint8Array(green), { headers: { "Content-Type": "image/png" } });
      }
      if (url.includes("i.scdn.co")) return new Response(new Uint8Array(blue), { headers: { "Content-Type": "image/png" } });
      return realFetch(input as never, init as never);
    }) as typeof fetch;
    return () => asked;
  }

  /** Photo pixels in a box: those with a green cast and little blue. Every
   *  ground here is warm or neutral (red ≥ green), and the one green thing
   *  drawn — the crown's dot, #3ed17f — carries more blue than half its green,
   *  so the count is 0 wherever the photo is not. */
  async function photo(res: Response) {
    const { data, info } = await sharp(Buffer.from(await res.arrayBuffer())).raw().toBuffer({ resolveWithObject: true });
    return {
      size: { w: info.width, h: info.height },
      in(x0: number, y0: number, x1: number, y1: number) {
        let n = 0;
        for (let y = y0; y < y1; y++)
          for (let x = x0; x < x1; x++) {
            const i = (y * info.width + x) * info.channels;
            if (data[i + 1] > data[i] + 6 && data[i + 2] * 2 < data[i + 1]) n++;
          }
        return n;
      },
    };
  }

  const card = async (slug: string) => {
    const { GET } = await import("../app/on-this-day/[day]/card/route");
    return GET(new Request(`http://x/on-this-day/${slug}/card`), { params: Promise.resolve({ day: slug }) });
  };
  const preview = async (slug: string) => {
    const og = await import("../app/on-this-day/[day]/opengraph-image");
    return (await og.default({ params: Promise.resolve({ day: slug }) })) as Response;
  };
  const calendar = async () => {
    const cal = await import("../app/on-this-day/opengraph-image");
    return (await cal.default()) as Response;
  };

  it("the post card: in the top right, and gone before the top line, the cover and the text", async () => {
    await serve("green");
    // 8 October has no cover; 16 August has one, over its date line.
    for (const slug of ["8-october", "16-august"]) {
      const p = await photo(await card(slug));
      expect(p.in(600, 120, 1080, 400), `${slug}: no photo in the top right`).toBeGreaterThan(20000);
      // The lockup's row ends at 128: the band is solid down to 119.
      expect(p.in(0, 0, 1080, 120), `${slug}: photo under the top line`).toBe(0);
      // The floor is solid from 385 — the highest text right of x 600 on any
      // day is 19 July's headline, at 530 (read on every day above).
      expect(p.in(0, 385, 1080, 1350), `${slug}: photo under the date line or the headline`).toBe(0);
      // The cover ends at x 504 (444 at 360); the left fade is solid to 600.
      expect(p.in(0, 0, 600, 1350), `${slug}: photo beside the cover`).toBe(0);
    }
  }, 60000);

  it("the link previews: in the glow under the lockup, gone before the top line and the headline", async () => {
    await serve("green");
    for (const [name, res] of [
      ["16 August (a cover day)", () => preview("16-august")],
      ["8 October", () => preview("8-october")],
      ["the calendar", calendar],
    ] as const) {
      const p = await photo(await res());
      expect(p.in(820, 100, 1200, 215), `${name}: no photo under the lockup`).toBeGreaterThan(5000);
      // The lockup and its tagline sit on 60–95; the band is solid to 100.
      expect(p.in(0, 0, 1200, 100), `${name}: photo behind the lockup`).toBe(0);
      // The highest headline starts at 219 (23 January); the floor is solid from 215.
      expect(p.in(0, 215, 1200, 630), `${name}: photo under the headline`).toBe(0);
      // The cover tile ends at 364; the kicker's longest date ends by 780.
      expect(p.in(0, 0, 832, 630), `${name}: photo left of the glow`).toBe(0);
    }
  }, 60000);

  it("placements: every scrim that meets a photo edge on the image is solid there", () => {
    // The photo's square is never drawn: its left edge is under a scrim at
    // alpha 1, and its foot is below a solid floor.
    for (const [name, at, w, h] of [["card", CARD_PORTRAIT, 1080, 1350], ["preview", PREVIEW_PORTRAIT, 1200, 630]] as const) {
      const { left, top, size } = at.photo;
      expect(left + size, `${name}: the photo bleeds off the right`).toBeGreaterThanOrEqual(w);
      const leftFade = at.scrims.find((s) => s.angle === 90 && s.left < left)!;
      const solidTo = leftFade.left + (leftFade.width * Math.max(...leftFade.stops.filter(([, a]) => a === 1).map(([p]) => p))) / 100;
      expect(solidTo, `${name}: the left fade is solid past the photo's edge`).toBeGreaterThanOrEqual(left);
      const floor = at.scrims.find((s) => s.angle === 180 && s.top > 100)!;
      expect(floor.top + floor.height, `${name}: the floor reaches past the photo's foot`).toBeGreaterThanOrEqual(Math.min(top + size, h));
      expect(floor.stops.at(-1)![1]).toBe(1);
    }
  });

  it("a portrait that cannot be fetched costs the portrait, not the image", async () => {
    const asked = await serve("down");
    const c = await card("16-august");
    expect(c.status).toBe(200);
    const p = await photo(c);
    expect(p.size).toEqual({ w: 1080, h: 1350 });
    expect(p.in(0, 0, 1080, 1350)).toBe(0);
    for (const res of [await preview("8-october"), await calendar()]) {
      const q = await photo(res);
      expect(q.size).toEqual({ w: 1200, h: 630 });
      expect(q.in(0, 0, 1200, 630)).toBe(0);
    }
    expect(asked(), "the portrait was never fetched — this test proved nothing").toBeGreaterThanOrEqual(3);
  }, 60000);

  it("a negative control: the post card the branch shipped before (79faa5ed) has no photo pixel anywhere", async () => {
    // Drawn without a portrait the images are the shipped drawings, byte for
    // byte (checked 26 Sep 2026 against renders from 79faa5ed: the post cards
    // and link previews of 16 August, 8 October and 28 April, 11 July's card
    // and the calendar's preview). The same count that finds the photo above
    // finds nothing on them, so it is not counting the images' own tones.
    await serve("down");
    for (const slug of ["8-october", "16-august"]) {
      expect((await photo(await card(slug))).in(0, 0, 1080, 1350), slug).toBe(0);
    }
  }, 60000);
});
