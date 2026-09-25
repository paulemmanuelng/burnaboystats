/**
 * The RSS <guid> for each updates.ts entry.
 *
 * A guid is a feed reader's only way to tell an item it has already shown
 * from a new one, so it must never change once published. It was built from
 * the entry's position in the whole array (`${href}#${date}-${i}`), and every
 * new entry goes on TOP, so each one renumbered everything below it. On
 * 24 Sep 2026 three new entries moved all 326 existing guids at once:
 * "/certifications#2026-09-23-0" became "/certifications#2026-09-23-3", and a
 * reader that trusts guids would show the whole log again as unread.
 *
 * The number is now counted per DATE, from the oldest entry of that date. A
 * new entry sits above the ones already logged for its day, so it takes the
 * next number and nothing older moves.
 */
export function feedGuids<T extends { date: string; href: string }>(entries: readonly T[]): string[] {
  const perDate = new Map<string, number>();
  const guids: string[] = new Array(entries.length);
  // Newest first in the file, so walk it backwards: oldest of each date is 0.
  for (let i = entries.length - 1; i >= 0; i--) {
    const u = entries[i];
    const n = perDate.get(u.date) ?? 0;
    perDate.set(u.date, n + 1);
    guids[i] = `${u.href}#${u.date}-${n}`;
  }
  return guids;
}
