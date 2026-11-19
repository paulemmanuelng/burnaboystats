import { coverFor, monogramFor } from "./covers";
import { isEp } from "../data/albums";

/**
 * A live-chart row's art, resolved on the server.
 *
 * The phone screen (MobileLiveCharts) and the desktop blocks (LiveReleaseBlock)
 * used to look each row's cover, monogram and EP flag up in the browser, and
 * that meant shipping the site's catalogue with them: songs.ts, albums.ts and
 * covers.ts, 32 KB of JS in the /live-charts route chunk, which every page's
 * nav and tab bar also prefetch. The pages now call this at build time and
 * pass the answers as props; the client components import none of it
 * (tests/liveReleaseArt.test.tsx).
 *
 * The answers are the ones the browser computed, but for one change:
 *   - cover: the art shipped with the release, else, on Burna Boy's own board
 *     (/live-charts), the site catalogue's art for the title. His rows ship
 *     none, so theirs is coverFor(title, kind), as before. A board artist's
 *     row (/afrobeats/[artist]/live, `whose: "board-artist"`) takes only the
 *     art its row ships, and draws its monogram without it, as the board
 *     files' own `cover` note says ("the page draws a monogram rather than
 *     borrowing another release's cover").
 *   - letter: the monogram drawn when there is no art.
 *   - ep: an album the catalogue lists as an EP. The board pages' desktop
 *     blocks keep their own `ep: false` (see their page).
 *
 * The change, 19 Nov 2026. A board row with no art of its own fell back to
 * the catalogue too, matched by title alone, and the catalogue is Burna
 * Boy's. When his “Bigger” (Grand Theft Auto VI: The Album) joined songs.ts,
 * Olamide's own “Bigger” would have worn the Grand Theft Auto VI sleeve on
 * the day his row shipped without art. That day the four board rows with no
 * art (two Rema albums, a Seyi Vibez mixtape, Wizkid's Apple Music Live)
 * matched nothing in the catalogue, so no board page changed.
 */
export function releaseArt(
  r: { title: string; kind: "song" | "album"; cover?: string },
  whose: "burna-boy" | "board-artist" = "burna-boy",
): {
  cover?: string;
  letter: string;
  ep: boolean;
} {
  const cover = r.cover ?? (whose === "burna-boy" ? coverFor(r.title, r.kind) : undefined);
  return {
    // Left out rather than sent as undefined, as the rows without art were.
    ...(cover !== undefined ? { cover } : {}),
    letter: monogramFor(r.title),
    ep: r.kind === "album" && isEp(r.title),
  };
}
