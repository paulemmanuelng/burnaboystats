import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { cars, garage, carSlugs, carBySlug, currentCars } from "../app/data/cars";
import { carTitle, carDescription, performanceBars, neighbours, garageBest, modelShort } from "../app/lib/garage";

// The car pages render from data, and three of that data's fields are the
// kind that drift silently: an image file that was renamed, a `depicts` that
// crept up to "actual" with nothing behind it, a specification retyped in one
// place and not the other. These are the guards (CARS-HANDOFF.md §6, §9).

const PUBLIC = join(process.cwd(), "public");

/** Width and height straight from the file header — no image library needed.
 *  Heroes are PNG (the car cut out on transparency); tiles are JPEG. */
function imageSize(buf: Buffer) {
  // PNG: an 8-byte signature, then IHDR with width and height at 16 and 20.
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), kind: "png" as const };
  }
  let i = 2; // past SOI
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    // Standalone markers carry no length.
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7), kind: "jpeg" as const };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  throw new Error("no SOF marker");
}

/** True when a PNG declares an alpha channel — colour type 4 or 6 at byte 25.
 *  The hero has to be cut out; a hero that shipped opaque would put the frame's
 *  floor and grid back under the car. */
const pngHasAlpha = (buf: Buffer) => buf[25] === 4 || buf[25] === 6;

describe("the garage — the fifteen current cars as pages", () => {
  it("every current car has a page, and only current cars do", () => {
    expect(garage.length).toBe(currentCars.length);
    expect(garage.length).toBe(15);
    for (const c of cars) {
      if (c.status) {
        expect(c.slug, `${c.make} ${c.model} is ${c.status} and must not have a slug`).toBeUndefined();
        expect(c.specs).toBeUndefined();
      }
    }
  });

  it("slugs are unique, url-safe, and rank follows the value order", () => {
    expect(new Set(carSlugs).size).toBe(carSlugs.length);
    for (const s of carSlugs) expect(s).toMatch(/^[a-z0-9-]+$/);
    garage.forEach((c, i) => {
      expect(c.rank).toBe(i + 1);
      if (i > 0) expect(c.valueUsd).toBeLessThanOrEqual(garage[i - 1].valueUsd);
    });
    expect(carBySlug("bugatti-chiron")?.rank).toBe(1);
    expect(carBySlug("not-a-car")).toBeUndefined();
  });

  it("ships two image files per car, at the declared sizes", () => {
    for (const c of garage) {
      for (const img of [c.image.hero, c.image.preview]) {
        const p = join(PUBLIC, img.src);
        expect(existsSync(p), `${img.src} is missing`).toBe(true);
        const { width, height } = imageSize(readFileSync(p));
        expect({ src: img.src, width, height }).toEqual({ src: img.src, width: img.width, height: img.height });
      }
      expect([c.image.preview.width, c.image.preview.height]).toEqual([640, 400]);
    }
  });

  it("every hero is a cut-out — transparent PNG, not a framed JPEG", () => {
    // The heroes used to carry a crop of the render's lit stage: floor, grid
    // and backdrop, baked in. On the car page the car sits on the page's own
    // ring, so the ground has to be gone and the alpha has to be real.
    for (const c of garage) {
      expect(c.image.hero.src, `${c.slug} hero`).toMatch(/\.png$/);
      const buf = readFileSync(join(PUBLIC, c.image.hero.src));
      expect(imageSize(buf).kind).toBe("png");
      expect(pngHasAlpha(buf), `${c.slug} hero has no alpha channel`).toBe(true);
    }
    // The tiles are cards and keep their framed JPEG — their ground never shows.
    for (const c of garage) expect(c.image.preview.src).toMatch(/-tile\.jpg$/);
  });

  it("every image is an illustration of the model — never his car without proof", () => {
    for (const c of garage) {
      expect(c.image.caption).toBe("Illustration");
      expect(c.image.alt).toBe(`Illustration of a ${c.make} ${c.model}.`);
      if (c.image.depicts === "actual") {
        expect(c.sources?.length, `${c.slug} claims to depict his actual car with no sources`).toBeGreaterThan(0);
      }
    }
    // The audit found none (handoff §5.6). If one is ever confirmed, this
    // line is the one to change — alongside a `sources` entry.
    expect(garage.filter((c) => c.image.depicts === "actual")).toEqual([]);
  });

  it("every specifications panel names its manufacturer source", () => {
    for (const c of garage) {
      expect(c.specs.source, `${c.slug} has no spec source`).toMatch(/^https:\/\/[a-z0-9.-]+\//i);
      expect(typeof c.specs.verified).toBe("boolean");
      expect(["as built", "base model"]).toContain(c.specs.basis);
    }
  });

  it("the three one-off conversions, and only those, carry the base-model basis", () => {
    const base = garage.filter((c) => c.specs.basis === "base model").map((c) => c.slug).sort();
    expect(base).toEqual(["bugatti-chiron", "lamborghini-urus", "mclaren-senna"]);
  });

  it("the numeric twins agree with the specification strings", () => {
    // The strings carry qualifiers the bars cannot use — ">350 km/h", "<3.0 s",
    // "1,995 kg (DIN)" — so the twins are the same figure with the prose off.
    const num = (s: string) => Number(s.replace(/\(.*\)/, "").replace(/[^0-9.]/g, ""));
    for (const c of garage) {
      expect(num(c.specs.power), `${c.slug} power`).toBe(c.num.hp);
      expect(num(c.specs.zeroToHundred), `${c.slug} 0–100`).toBe(c.num.acc);
      expect(num(c.specs.topSpeed), `${c.slug} top speed`).toBe(c.num.vmax);
      // Weight is null on the two cars whose maker publishes none; the twin
      // must be null too, or a bar would be computed from a figure nobody gave.
      if (c.specs.weight === null) expect(c.num.kg, `${c.slug} weight`).toBeNull();
      else expect(num(c.specs.weight), `${c.slug} weight`).toBe(c.num.kg);
    }
  });

  it("a published figure carries its basis, and an absent one says so", () => {
    for (const c of garage) {
      // Weight without a basis is not comparable: dry, DIN and EU differ by
      // 100kg+. Every weight on the page names which it is.
      if (c.specs.weight !== null) {
        expect(c.specs.weight, `${c.slug} weight has no basis`).toMatch(/\((dry|DIN|unladen[^)]*|EU[^)]*)\)/);
      } else {
        // An absent figure has to explain itself, or it reads as a bug.
        expect(c.specs.note, `${c.slug} drops a figure with no explanation`).toBeTruthy();
      }
      // Power is imperial across the whole set — the convention the design was
      // drawn against. A stray metric value would read as a different car.
      expect(c.specs.power, `${c.slug} power`).toMatch(/^[\d,]+ hp$/);
    }
  });

  it("the OG card labels the hero with the format it actually is", () => {
    // Satori picks its image parser from the data-URI's MIME rather than
    // sniffing the bytes. When the heroes went from JPEG to cut-out PNG, a
    // hardcoded `image/jpeg` sent it down the JPEG segment walker on a PNG
    // header and ALL FIFTEEN share cards 500'd — while every other OG route on
    // the site stayed green, and every test here passed, because nothing
    // exercised the route. This is the cheap guard: the label must be derived
    // from the file, never written down beside it.
    const raw = readFileSync(join(process.cwd(), "app/records/cars/[car]/opengraph-image.tsx"), "utf8");
    // Comments describe the trap; only real code can fall into it.
    const og = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
    const hardcoded = [...og.matchAll(/data:image\/(png|jpeg|jpg|webp);base64/g)].map((m) => m[0]);
    expect(hardcoded, "the hero's MIME is hardcoded — derive it from the file instead").toEqual([]);
    expect(og, "the MIME should be derived from the hero's extension").toMatch(/endsWith\(["']\.png["']\)/);
    // And satori cannot resolve height:"auto" — the image silently collapses.
    expect(og, 'satori does not honour height: "auto" on an OG image').not.toMatch(/height:\s*["']auto["']/);
  });

  it("every specification has been read off its source", () => {
    // The panel renders "pending verification" until this is true, so flipping
    // it without doing the reading is the one thing that must not happen
    // silently. All fifteen were checked against the manufacturer in Sep 2026.
    for (const c of garage) expect(c.specs.verified, `${c.slug}`).toBe(true);
  });

  it("carries a five-colour livery and a subtitle for every car", () => {
    for (const c of garage) {
      expect(c.palette.length).toBe(5);
      for (const hex of c.palette) expect(hex).toMatch(/^#[0-9a-f]{6}$/);
      expect(c.subtitle.length).toBeGreaterThan(10);
    }
  });
});

describe("computed figures (CARS-HANDOFF §7)", () => {
  it("the value bar is always drawn; the spec bars wait on verification", () => {
    for (const c of garage) {
      const bars = performanceBars(c);
      expect(bars.map((b) => b.key)).toEqual(["Power / weight", "0–100 km/h", "Top speed", "Reported value"]);
      const value = bars[3];
      expect(value.pending).toBe(false);
      expect(value.share).toBeGreaterThanOrEqual(0.03);
      expect(value.share).toBeLessThanOrEqual(1);
      for (const b of bars.slice(0, 3)) {
        expect(b.pending).toBe(!c.specs.verified);
        if (b.pending) {
          expect(b.value).toBe("—");
          expect(b.share).toBe(0);
          expect(b.aria).toMatch(/pending verification/);
        } else if (b.key === "Power / weight" && c.num.kg === null) {
          // The two cars whose maker publishes no weight: the bar reads as
          // unavailable rather than being drawn from an invented denominator.
          expect(b.value).toBe("—");
          expect(b.share).toBe(0);
          expect(b.aria).toMatch(/publishes no weight/);
        } else {
          expect(b.share).toBeGreaterThanOrEqual(0.03);
          expect(b.share).toBeLessThanOrEqual(1);
        }
      }
    }
    // 100% means "the strongest here": the most expensive car fills its bar.
    expect(performanceBars(garage[0])[3].share).toBe(1);
    expect(garageBest.usd).toBe(garage[0].valueUsd);
  });

  it("previous / next wrap around at both ends", () => {
    const first = garage[0];
    const last = garage[garage.length - 1];
    expect(neighbours(first).prev.slug).toBe(last.slug);
    expect(neighbours(last).next.slug).toBe(first.slug);
    expect(neighbours(first).next.slug).toBe(garage[1].slug);
  });

  it("the headline drops the parenthetical qualifier", () => {
    expect(modelShort("Chiron (Venuum Widebody)")).toBe("Chiron");
    expect(modelShort("SF90 Spider")).toBe("SF90 Spider");
  });

  it("titles and descriptions fit the SEO gate", () => {
    // scripts/check-seo.mjs fails the build past 60 / 160 characters.
    for (const c of garage) {
      expect(carTitle(c).length, carTitle(c)).toBeLessThanOrEqual(60);
      expect(carDescription(c).length, carDescription(c)).toBeLessThanOrEqual(160);
    }
  });
});
