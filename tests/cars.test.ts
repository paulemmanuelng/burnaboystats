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

/** Width and height from a JPEG's SOF marker — no image library needed. */
function jpegSize(buf: Buffer) {
  let i = 2; // past SOI
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    // Standalone markers carry no length.
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  throw new Error("no SOF marker");
}

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
        const { width, height } = jpegSize(readFileSync(p));
        expect({ src: img.src, width, height }).toEqual({ src: img.src, width: img.width, height: img.height });
      }
      expect([c.image.preview.width, c.image.preview.height]).toEqual([640, 400]);
    }
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
    const num = (s: string) => Number(s.replace(/[^0-9.]/g, ""));
    for (const c of garage) {
      expect(num(c.specs.power), `${c.slug} power`).toBe(c.num.hp);
      expect(num(c.specs.weight), `${c.slug} weight`).toBe(c.num.kg);
      expect(num(c.specs.zeroToHundred), `${c.slug} 0–100`).toBe(c.num.acc);
      expect(num(c.specs.topSpeed), `${c.slug} top speed`).toBe(c.num.vmax);
    }
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
