import { ogFonts } from "./og-lockup";

/**
 * How wide the share cards set a run of Geist, in px — the width Satori lays
 * it out at, before anything is drawn.
 *
 * Satori sizes text a letter at a time from each letter's own advance, plus
 * the letter spacing after every letter; the On This Day images draw it
 * unkerned (lib/unkernedFont.ts), so the width it lays out is the width it
 * draws. That is the whole calculation, read here from the font's own tables
 * (cmap for the glyph, hmtx for its advance), so a card can know before the
 * render whether a line fits. Checked against the renders of every day's post
 * card (tests/onThisDayShareImages.test.tsx), where the kind line and the
 * headline's lines land where this puts them.
 */

interface Metrics {
  unitsPerEm: number;
  glyph(codePoint: number): number;
  advance(glyph: number): number;
}

function readMetrics(font: Buffer): Metrics {
  const tables = new Map<string, number>();
  for (let i = 0, n = font.readUInt16BE(4); i < n; i++) {
    const rec = 12 + 16 * i;
    tables.set(font.toString("latin1", rec, rec + 4), font.readUInt32BE(rec + 8));
  }
  const at = (tag: string) => {
    const offset = tables.get(tag);
    if (offset === undefined) throw new Error(`the font has no ${tag} table`);
    return offset;
  };
  const unitsPerEm = font.readUInt16BE(at("head") + 18);
  const hmetrics = font.readUInt16BE(at("hhea") + 34);
  const hmtx = at("hmtx");

  // The Unicode BMP map, format 4: (3,1), or (0,3) where a font has only that.
  const cmap = at("cmap");
  let sub = -1;
  for (let i = 0, n = font.readUInt16BE(cmap + 2); i < n; i++) {
    const rec = cmap + 4 + 8 * i;
    const [platform, encoding] = [font.readUInt16BE(rec), font.readUInt16BE(rec + 2)];
    const offset = cmap + font.readUInt32BE(rec + 4);
    if (font.readUInt16BE(offset) !== 4) continue;
    if (platform === 3 && encoding === 1) sub = offset;
    else if (platform === 0 && sub < 0) sub = offset;
  }
  if (sub < 0) throw new Error("the font has no format 4 cmap");
  const segs = font.readUInt16BE(sub + 6) / 2;
  const ends = sub + 14;
  const starts = ends + 2 * segs + 2;
  const deltas = starts + 2 * segs;
  const ranges = deltas + 2 * segs;

  return {
    unitsPerEm,
    glyph(c) {
      if (c > 0xffff) return 0;
      for (let i = 0; i < segs; i++) {
        if (font.readUInt16BE(ends + 2 * i) < c) continue;
        const start = font.readUInt16BE(starts + 2 * i);
        if (start > c) return 0;
        const delta = font.readInt16BE(deltas + 2 * i);
        const range = font.readUInt16BE(ranges + 2 * i);
        if (range === 0) return (c + delta) & 0xffff;
        const g = font.readUInt16BE(ranges + 2 * i + range + 2 * (c - start));
        return g === 0 ? 0 : (g + delta) & 0xffff;
      }
      return 0;
    },
    advance(g) {
      return font.readUInt16BE(hmtx + 4 * Math.min(g, hmetrics - 1));
    },
  };
}

const geist = readMetrics(ogFonts.find((f) => f.name === "geist")!.data);

/** The width Satori gives `text` in Geist at `fontSize`, tracked by
 *  `letterSpacing` px after every letter. */
export function cardTextWidth(text: string, fontSize: number, letterSpacing = 0): number {
  let units = 0;
  let letters = 0;
  for (const ch of text) {
    units += geist.advance(geist.glyph(ch.codePointAt(0)!));
    letters++;
  }
  return (units * fontSize) / geist.unitsPerEm + letterSpacing * letters;
}
