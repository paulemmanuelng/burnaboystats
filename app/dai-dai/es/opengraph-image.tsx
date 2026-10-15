import { size, contentType } from "../../lib/og-image";
import { BODY, BodyBox, FIG, Figure, MonoLines, monoText, ogFigureCard } from "../../lib/og-figure";
import { wrapLines } from "../../lib/ogFit";
import { DAI_DAI_COVER } from "../../data/daiDai";
import { esCard, ES_ALT, esOgVersions, esTiles } from "./ogId";

export { size, contentType };
export const alt = ES_ALT;

/**
 * The Spanish Dai Dai preview is the English card in Spanish (Job 6 · J6-4,
 * fix 130): the song's cover at the left; at the right the title, the card's
 * sentence under it (esCard.sub, with its days at No. 1) and the
 * English card's four tiles, its own figures with Spanish labels, two by two
 * (four across cannot hold "certificaciones" at the 28px floor, C-11); the
 * plain card's lockup and foot. The words and the id are es/ogId.ts's, the id
 * the page's JSON-LD cites.
 */
const COVER = 280;
const GAP = 44;
const RIGHT = BODY.right - BODY.left - COVER - GAP;
const TITLE = 96;
const TILE_GAP = 10;
const TILE_W = (RIGHT - TILE_GAP) / 2;
const TILE_PAD = { y: 8, x: 16 };
const TILE_VALUE = 48;

const title = esCard.title.toUpperCase();
// The sentence in the cards' running face, two lines at most.
const SUB_SIZE = 28;
const sub = wrapLines(esCard.sub, "geist", SUB_SIZE, RIGHT, 2);

// Versioned by every string it prints; the page's JSON-LD cites the same id.
export const generateImageMetadata = esOgVersions;

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={DAI_DAI_COVER}
          width={COVER}
          height={COVER}
          alt=""
          style={{ width: COVER, height: COVER, borderRadius: 18, border: `2px solid ${FIG.coverEdge}` }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: RIGHT, marginLeft: GAP }}>
          <Figure value={title} size={TITLE} />
          <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
            {sub.map((line, i) => (
              <div key={i} style={{ display: "flex", fontSize: SUB_SIZE, lineHeight: 1.25, color: FIG.body, whiteSpace: "nowrap" }}>
                {line}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 12 }}>
            {esTiles.map((t, i) => (
              <div
                key={t.l}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: TILE_W,
                  marginLeft: i % 2 ? TILE_GAP : 0,
                  marginTop: i >= 2 ? TILE_GAP : 0,
                  padding: `${TILE_PAD.y}px ${TILE_PAD.x}px`,
                  background: FIG.surface,
                  border: `1px solid ${FIG.edge}`,
                  borderRadius: 12,
                }}
              >
                <Figure value={t.v} size={TILE_VALUE} />
                <MonoLines lines={monoText(t.l, TILE_W - 2 * TILE_PAD.x - 2, 1)} color={FIG.muted} style={{ marginTop: 4 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BodyBox>,
  );
}
