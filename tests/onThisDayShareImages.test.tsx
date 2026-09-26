// @vitest-environment node
import { describe, it, expect, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import { dayBySlug, dayKey, onThisDayDays, onThisDayEvents } from "../app/lib/onThisDay";
import {
  calendarTiles,
  dayPostCard,
  dayPreview,
  eventArt,
  eventCover,
  isFullSizeArt,
  sharePublisher,
} from "../app/lib/onThisDayShare";
import { OG_ART } from "../app/lib/og-image";
import { albums } from "../app/data/albums";
import { tours, festivals, otherShows, concerts } from "../app/data/tours";

/**
 * The On This Day share images as the approved design draws them (design
 * response §2 "Share images"; change list 15–18, Paul, 26 Sep 2026): the
 * milestone is the hero of the link preview, the date the identity of the post
 * card, the cover drawn only from 640px art, the source printed only for a
 * publisher, Geist Regular only, and no portrait, watermark or seam.
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
  it("16 August: the cover, the numeral at 280 and the month at 54 stacked beside it", () => {
    const c = dayPostCard(day("16-august"));
    expect(c.cover).toBe(ON_THE_LOW);
    expect([c.numeral, c.numeralSize, c.month, c.monthSize]).toEqual(["16", 280, "AUGUST", 54]);
    expect(c.headSize).toBe(64); // 45 characters beside a cover
    expect(c.record).toBeNull();
    expect(c.year).toBe("2023");
    expect(c.kindLine).toBe("CERTIFICATION · + 4 MORE MILESTONES ON THIS DAY");
    expect(c.source).toBe("IFPI SVERIGE");
    expect(c.url).toBe("BURNABOYSTATS.COM/on-this-day/16-august");
  });

  it("8 October: no art, so the numeral runs at 360 with the month on its baseline", () => {
    const c = dayPostCard(day("8-october"));
    expect(c.cover).toBeNull();
    expect([c.numeral, c.numeralSize, c.month, c.monthSize]).toEqual(["8", 360, "OCTOBER", 64]);
    expect(c.headSize).toBe(72);
    expect(c.kindLine).toBe("SHOW");
    // The source is its tour — not a publisher, so it is left off.
    expect(c.source).toBeNull();
  });

  it("28 April: the record line prints, and Billboard Boxscore is the source", () => {
    const c = dayPostCard(day("28-april"));
    expect(c.record).toBe("First African artist to sell out the world's most famous arena.");
    expect(c.source).toBe("BILLBOARD BOXSCORE");
    expect(c.headSize).toBe(62); // 69 characters, no art
  });

  it("11 July: the album's cover, and no record label as a source", () => {
    const c = dayPostCard(day("11-july"));
    expect(c.cover).not.toBeNull();
    expect(c.source).toBeNull();
    expect(c.kindLine).toBe("RELEASE · + 2 MORE MILESTONES ON THIS DAY");
  });

  it("a long month beside a cover steps down to 44", () => {
    const c = dayPostCard(day("21-september"));
    expect(c.cover).not.toBeNull();
    expect([c.month, c.monthSize]).toEqual(["SEPTEMBER", 44]);
  });

  it("one more milestone is said as one", () => {
    expect(dayPostCard(day("16-january")).kindLine).toBe("SHOW · + 1 MORE MILESTONE ON THIS DAY");
  });

  it("without its cover the same day draws the no-art layout (the route's fallback)", () => {
    const c = dayPostCard(day("16-august"), { withCover: false });
    expect(c.cover).toBeNull();
    expect([c.numeralSize, c.monthSize, c.headSize]).toEqual([360, 64, 72]);
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

  it("no portrait and no watermark", () => {
    expect(FILES.filter((f) => PORTRAIT.test(code(src(f))) || WATERMARK.test(code(src(f))))).toEqual([]);
  });

  it("the post card carries the crown lockup, with the fonts it is set in", () => {
    const card = code(src("app/lib/onThisDayImages.tsx"));
    expect(card).toContain("<OgLockup");
    expect(card).toContain("fonts: ogFonts");
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
