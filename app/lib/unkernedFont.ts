/**
 * A font with its kerning switched off — for share images whose word gaps
 * must come out even.
 *
 * Satori (inside next/og) lays a line out from each letter's own advance: it
 * sizes a word by adding up its graphemes one at a time. It then draws the
 * word as a single run through opentype.js, which applies the font's GPOS
 * kerning. So a word with tight pairs is drawn narrower than the room Satori
 * gave it, and the difference opens up as a wide gap before the next word.
 * The 26 Sep 2026 renders of the On This Day images showed it three times —
 * "HOLLYWOOD␣␣BOWL" (46px against 26–30 for the line's other gaps),
 * "CERTIFICATION␣␣·" and "artist␣␣to" — while the strings themselves carry
 * one plain space each. A string fix cannot reach it: the gap is made by the
 * letters before it (LY, YW, WO in HOLLYWOOD), not by the join.
 *
 * With kerning off, the drawing is exactly the measure, and every word gap is
 * the font's own space. Done on the bytes rather than with a second font
 * file: the GPOS FeatureList's "kern" features keep their records but lose
 * their lookups, so opentype.js finds no pair adjustments to apply. No glyph,
 * metric or other feature changes.
 */

const tag = (font: Buffer, at: number) => font.toString("latin1", at, at + 4);

/** The GPOS feature records: each one's tag and where its Feature table sits. */
function gposFeatures(font: Buffer): { tag: string; table: number }[] {
  const numTables = font.readUInt16BE(4);
  for (let i = 0; i < numTables; i++) {
    const record = 12 + 16 * i;
    if (tag(font, record) !== "GPOS") continue;
    const gpos = font.readUInt32BE(record + 8);
    const featureList = gpos + font.readUInt16BE(gpos + 6);
    const count = font.readUInt16BE(featureList);
    return Array.from({ length: count }, (_, j) => {
      const at = featureList + 2 + 6 * j;
      return { tag: tag(font, at), table: featureList + font.readUInt16BE(at + 4) };
    });
  }
  return [];
}

/** How many kerning lookups the font's "kern" features point at. */
export const kernLookupCount = (font: Buffer) =>
  gposFeatures(font)
    .filter((f) => f.tag === "kern")
    .reduce((n, f) => n + font.readUInt16BE(f.table + 2), 0);

/** A copy of the font whose "kern" features apply no lookups. */
export function withoutKerning(font: Buffer): Buffer {
  // Buffer.alloc, never Buffer.from: a pooled buffer shares its ArrayBuffer,
  // and a font parser that reads `.buffer` would see the pool.
  const out = Buffer.alloc(font.length);
  font.copy(out);
  for (const f of gposFeatures(out)) if (f.tag === "kern") out.writeUInt16BE(0, f.table + 2);
  return out;
}
