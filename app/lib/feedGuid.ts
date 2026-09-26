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
 *
 * REMOVING an entry is the other way to move them, and it happened: PR #340
 * took 15 entries out and 18 surviving guids changed — "/timeline#2026-09-17-22"
 * became "/timeline#2026-09-17-15", and "/records/awards#2026-09-17-14" passed
 * from the Headies correction to a different item, which a reader would then
 * never show. So a removed entry leaves its number behind: add its slot to
 * RETIRED_FEED_SLOTS below and nothing else on that date is renumbered, and no
 * later entry can inherit its guid. tests/feedGuid.test.ts holds every guid
 * published on 26 Sep 2026 to that rule.
 */

/**
 * The slot a removed entry held: its date, and the number its guid carried
 * (the n in `${href}#${date}-${n}`). Numbers listed here are skipped.
 *
 * Empty on 26 Sep 2026: the numbering the feed serves now — after PR #340 — is
 * the one readers hold, so it is the one kept.
 */
export const RETIRED_FEED_SLOTS: readonly { date: string; n: number }[] = [];

export function feedGuids<T extends { date: string; href: string }>(
  entries: readonly T[],
  retired: readonly { date: string; n: number }[] = RETIRED_FEED_SLOTS,
): string[] {
  const skip = new Set(retired.map((r) => `${r.date}#${r.n}`));
  const perDate = new Map<string, number>();
  const guids: string[] = new Array(entries.length);
  // Newest first in the file, so walk it backwards: oldest of each date is 0.
  for (let i = entries.length - 1; i >= 0; i--) {
    const u = entries[i];
    let n = perDate.get(u.date) ?? 0;
    while (skip.has(`${u.date}#${n}`)) n++;
    perDate.set(u.date, n + 1);
    guids[i] = `${u.href}#${u.date}-${n}`;
  }
  return guids;
}
