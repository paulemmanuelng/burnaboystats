/** First letter, for the fallback tile when there is no art.
 *  Its own module so the client rows that draw the tile (lib/coverTile.ts)
 *  can have it without covers.ts, which carries the whole catalogue. */
export function monogramFor(title: string): string {
  return (title.trim()[0] ?? "?").toUpperCase();
}
