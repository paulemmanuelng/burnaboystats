import { size, contentType } from "../lib/og-image";
import { BODY, BodyBox, CoverStrip, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../lib/og-figure";
import { fitSize } from "../lib/ogFit";
import { plural } from "../lib/plural";
import { artAt } from "../lib/artAt";
import { albums, studioAlbumsInOrder } from "../data/albums";

export { size, contentType };
export const alt = "Burna Boy Discography — albums, EPs & hits";

/**
 * The /music preview, figure first (Job 6 · J6-4): his studio albums,
 * counted from the discography, and their covers beside the count in release
 * order (studioAlbumsInOrder: by the standard edition's date), each at the
 * size its slot paints (artAt).
 */
const GAP = 44;
// The drawing's columns, 1 : 1.6.
const LEFT = (BODY.right - BODY.left - GAP) / 2.6;
const RIGHT = BODY.right - BODY.left - GAP - LEFT;
const COVER_GAP = 6;
const COVER = Math.floor((RIGHT - (studioAlbumsInOrder.length - 1) * COVER_GAP) / studioAlbumsInOrder.length);
/** The rung the covers are fetched at: the smallest of Spotify's ladder (spotifyImage.ts) not under the slot. */
const ART_PX = 300;

const figure = albums.length.toLocaleString("en-US");
const label = plural(albums.length, "studio album", "studio albums");
const covers = studioAlbumsInOrder.map((a) => (a.cover ? artAt(a.cover, ART_PX) : null));
const FIGURE = fitSize([figure], LEFT, 168);

// Versioned by what it prints and by the covers it draws, in order.
export const generateImageMetadata = () => ogFigureVersions([figure, label, ...covers.map((c) => c ?? "")], alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: LEFT }}>
          <Figure value={figure} size={FIGURE} />
          <MonoLines lines={monoText(label, LEFT)} style={{ marginTop: 16 }} />
        </div>
        <CoverStrip covers={covers} size={COVER} gap={COVER_GAP} style={{ marginLeft: GAP }} />
      </div>
    </BodyBox>,
  );
}
