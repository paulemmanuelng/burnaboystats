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
 * shipped line back in the real palette as a negative control (and
 * tests/ui/searchPaletteActiveInView.test.tsx the list that never scrolled).
 */
export function nextActive(i: number, key: "ArrowDown" | "ArrowUp", count: number): number {
  return key === "ArrowDown" ? Math.max(0, Math.min(i + 1, count - 1)) : Math.max(i - 1, 0);
}

/**
 * Scrolls the palette's result list just far enough to show row `i` whole,
 * inside the list's own padding, the way it sits at rest. Row 0 takes the list
 * back to the top, the "Popular pages" label included.
 *
 * The list is capped at 56vh and scrolls, and nothing moved it: at 1366x768,
 * 1280x720 and 390x667 the arrow keys highlighted rows 7 and 8 of 8 below its
 * edge, and Enter opened a page nobody saw highlighted (5 Oct 2026,
 * V-global-03). Only the list moves. scrollIntoView would also weigh the 88px
 * scroll-margin-top every [id] carries (globals.css), scrolling up a row early,
 * and could scroll the locked page underneath.
 */
export function revealRow(list: HTMLElement | null, i: number): void {
  if (!list) return;
  if (i <= 0) {
    list.scrollTop = 0;
    return;
  }
  const row = list.querySelector<HTMLElement>(`#search-opt-${i}`);
  if (!row) return;
  const style = getComputedStyle(list);
  const box = list.getBoundingClientRect();
  const r = row.getBoundingClientRect();
  const top = box.top + list.clientTop + (parseFloat(style.paddingTop) || 0);
  const bottom = box.top + list.clientTop + list.clientHeight - (parseFloat(style.paddingBottom) || 0);
  if (r.top < top) list.scrollTop -= top - r.top;
  else if (r.bottom > bottom) list.scrollTop += r.bottom - bottom;
}
