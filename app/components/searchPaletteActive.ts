/**
 * The row the ⌘K palette highlights after an arrow key, over `count` rows.
 *
 * Never below row 0. Since the search index loads on demand (30 Sep 2026),
 * there is a moment after typing when the palette has no rows yet (count 0).
 * The shipped ArrowDown, `Math.min(i + 1, count - 1)`, made that -1: the list
 * then arrived with nothing highlighted, and Enter went to /search?q=… instead
 * of the first result. Row 0 is also what an empty list has always used.
 *
 * Its own module so tests/ui/searchPaletteDeferred.test.tsx can put the
 * shipped line back in the real palette as a negative control.
 */
export function nextActive(i: number, key: "ArrowDown" | "ArrowUp", count: number): number {
  return key === "ArrowDown" ? Math.max(0, Math.min(i + 1, count - 1)) : Math.max(i - 1, 0);
}
