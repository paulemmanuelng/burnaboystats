// What must never reach a browser chunk, and where to look for it.
//
// The box-office board (app/data/tourRevenue.ts) carries a `source` note on
// every row — the body and the post it was read at, some of them "from the
// owner's screenshot". It is data only: no page prints it. Until 4 Oct 2026
// app/data/tours.ts value-imported the board for one Stade de France line,
// and tours.ts is bundled into client components, so all 85 notes shipped in
// a shared /_next/static chunk (debug pass 3 Oct, k1).
//
// Two guards hold it now: tests/tourRevenueServerOnly.test.ts walks every
// "use client" module's imports, and scripts/check-seo.mjs (post-build, CI)
// scans .next/static for each note, read off the data file itself.

/** Every distinct `source: "…"` string in tourRevenue.ts's own text, unescaped. */
export function revenueSourceStrings(tsText) {
  const out = new Set();
  for (const m of tsText.matchAll(/\bsource:\s*("(?:[^"\\]|\\.)*")/g)) out.add(JSON.parse(m[1]));
  return [...out];
}

/**
 * The notes found in one built chunk. A minifier may keep a string as typed or
 * escape its non-ASCII characters, so each note is looked for both ways.
 */
export function leaksIn(chunkText, sources) {
  const ascii = (s) => s.replace(/[^\x20-\x7e]/g, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));
  return sources.filter((s) => chunkText.includes(s) || chunkText.includes(ascii(s)));
}
