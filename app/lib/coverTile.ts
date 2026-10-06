import type { CSSProperties } from "react";
import { artAt } from "./artAt";
import { monogramFor } from "./monogram";

/**
 * The attributes for a release's cover tile on the charts and certs rows:
 * its art as a background, sized for the tile — or, with no art on file, the
 * release's initial, the monogram the live boards already draw
 * (LiveReleaseBlock, MobileLiveCharts). Each stylesheet paints the letter from
 * `[data-letter]`.
 *
 * Those rows painted a missing cover with the 1x1 blank pixel, so the tile
 * showed as an empty bordered square: 92 chart rows and 8 cert rows across the
 * board, 11 on /records/charts (debug pass, 5 Oct 2026). The same release then
 * read as broken on its charts board and as intentional on its live board.
 *
 * `size` is the call site's own resizer: artAt for the row tiles, and the
 * /records/charts table keeps its spotifyImage call.
 */
export function coverTile(
  url: string | undefined,
  title: string,
  px: number,
  size: (url: string, px: number) => string = artAt,
): { style: CSSProperties } | { "data-letter": string } {
  return url ? { style: { backgroundImage: `url(${size(url, px)})` } } : { "data-letter": monogramFor(title) };
}
