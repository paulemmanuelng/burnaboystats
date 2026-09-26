// @vitest-environment node
import { describe, it, expect, afterEach } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
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
import { ogFonts } from "../app/lib/og-lockup";
import { CARD_PORTRAIT, PREVIEW_PORTRAIT, otdFonts } from "../app/lib/onThisDayImages";
import { BURNA_PORTRAIT } from "../app/lib/artistImages";
import { kernLookupCount } from "../app/lib/unkernedFont";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { albums } from "../app/data/albums";
import { tours, festivals, otherShows, concerts } from "../app/data/tours";

/**
 * The On This Day share images as the approved design draws them (design
 * response §2 "Share images"; change list 15–18, Paul, 26 Sep 2026): the
 * milestone is the hero of the link preview, the date the identity of the post
 * card, the cover drawn only from 640px art, the source printed only for a
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

describe("ruling 8: the post card's headline breaks into the lines the artboard draws", () => {
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  /** Headline lines on a rendered card: bands of white ink between the date
   *  row (the gold numeral, and the stand-in cover whose foot the month sits
   *  on) and the foot's rule — the record line (#CFC7BB) is below the white
   *  threshold, the year sits under the rule. */
  async function headlineLines(slug: string) {
    // The cover is Spotify's; any 640px image lays out the same, and the test
    // must not need the network.
    // Pure blue: nothing else on the card is, so its rows can be found.
    const stand = await sharp({ create: { width: 640, height: 640, channels: 3, background: "#0000ff" } }).png().toBuffer();
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input instanceof Request ? input.url : input);
      if (url.includes("i.scdn.co")) return new Response(new Uint8Array(stand), { headers: { "Content-Type": "image/png" } });
      return realFetch(input as never, init as never);
    }) as typeof fetch;
    const { GET } = await import("../app/on-this-day/[day]/card/route");
    const res = await GET(new Request(`http://x/on-this-day/${slug}/card`), { params: Promise.resolve({ day: slug }) });
    const { data, info } = await sharp(Buffer.from(await res.arrayBuffer())).raw().toBuffer({ resolveWithObject: true });
    const px = (x: number, y: number) => {
      const i = (y * info.width + x) * info.channels;
      return [data[i], data[i + 1], data[i + 2]];
    };
    const rowHas = (y: number, test: (p: number[]) => boolean) => {
      for (let x = 84; x < 996; x++) if (test(px(x, y))) return true;
      return false;
    };
    const gold = (p: number[]) => p[0] > 200 && p[1] > 90 && p[1] < 215 && p[2] < 90;
    const tile = (p: number[]) => p[2] > 200 && p[0] < 40 && p[1] < 40;
    const white = (p: number[]) => Math.min(...p) > 215;
    // Start under the date row: the numeral's last gold row, or the cover's
    // last row (the month is aligned to its foot). Stop above the rule.
    let dateRow = 0;
    for (let y = 200; y < 1095; y++) if (rowHas(y, gold) || rowHas(y, tile)) dateRow = y;
    let bands = 0;
    let inBand = false;
    for (let y = dateRow + 1; y < 1095; y++) {
      const on = rowHas(y, white);
      if (on && !inBand) bands++;
      inBand = on;
    }
    return bands;
  }

  it("28 April: three lines, as drawn (the first build's card broke it into four)", async () => {
    expect(await headlineLines("28-april")).toBe(3);
  }, 60000);

  it("16 August: three lines, as drawn", async () => {
    expect(await headlineLines("16-august")).toBe(3);
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

  it("the post card: in the top right, and gone before the top line, the cover, the numeral and the headline", async () => {
    await serve("green");
    // 8 October has no cover; 16 August has one, and the numeral beside it.
    for (const slug of ["8-october", "16-august"]) {
      const p = await photo(await card(slug));
      expect(p.in(600, 120, 1080, 400), `${slug}: no photo in the top right`).toBeGreaterThan(20000);
      // ON THIS DAY sits on 93–119: the band is solid down to 119.
      expect(p.in(0, 0, 1080, 120), `${slug}: photo under the top line`).toBe(0);
      // The floor is solid from 385 — the highest ink right of x 600 on any
      // day is 16 August's numeral, at 412.
      expect(p.in(0, 385, 1080, 1350), `${slug}: photo under the numeral or the headline`).toBe(0);
      // The cover ends at x 504, the numeral's column starts at 548.
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
