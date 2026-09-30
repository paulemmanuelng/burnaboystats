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
 * The answers are the ones the browser computed:
 *   - cover: the art shipped with the release (board artists), else the site
 *     catalogue's art for the title. Burna Boy's rows ship none, so theirs is
 *     coverFor(title, kind), as before. The title-only match stays as it was
 *     for board artists too: this moves the lookup, it does not change it.
 *   - letter: the monogram drawn when there is no art.
 *   - ep: an album the catalogue lists as an EP. The board pages' desktop
 *     blocks keep their own `ep: false` (see their page).
 */
export function releaseArt(r: { title: string; kind: "song" | "album"; cover?: string }): {
  cover?: string;
  letter: string;
  ep: boolean;
} {
  const cover = r.cover ?? coverFor(r.title, r.kind);
  return {
    // Left out rather than sent as undefined, as the rows without art were.
    ...(cover !== undefined ? { cover } : {}),
    letter: monogramFor(r.title),
    ep: r.kind === "album" && isEp(r.title),
  };
}
