import { ImageResponse } from "next/og";
import { ogId } from "../../../lib/og-image";
import { artistBySlug, afrobeatsArtists, chartEntries, chartTerritories, chartNo1s, chartCountryMeta, bestPeaks } from "../../../data/afrobeats";

export function generateStaticParams() {
  return afrobeatsArtists.filter((a) => a.charts.length > 0).map((a) => ({ artist: a.slug }));
}

export async function generateImageMetadata({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  // Survives the param-less probe Next runs while collecting page data.
  const sig = a
    ? `${slug}|charts|${chartEntries(a)}|${chartTerritories(a)}|${chartNo1s(a)}`
    : `${slug}`;
  return [{ id: ogId(sig), alt, size, contentType }];
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Official chart peaks by country, read from each country's own chart";


/**
 * Render to BYTES rather than returning the stream.
 *
 * next/og has no emoji glyphs, so satori resolves every flag through
 * `loadAdditionalAsset`, which fetches twemoji from jsDelivr AT RENDER TIME.
 * A failed <img> is swallowed by satori and the card just loses the picture —
 * but a failed EMOJI fetch rejects the whole render, and these fifteen cards
 * are not prerendered (zero paths in the prerender manifest, one per artist,
 * re-rendered after every deploy the stats bot triggers). Returning the
 * ImageResponse directly meant that rejection landed mid-stream, after the
 * headers had gone out: an empty reply on the wire, a 500 at the edge. This is
 * the same shape as the hardcoded-MIME bug that 500'd all fifteen car cards.
 *
 * Awaiting arrayBuffer() forces the render to complete here, where it can be
 * caught. The id in the URL is a content hash, so the bytes are immutable.
 */
async function png(node: React.ReactElement) {
  const buf = await new ImageResponse(node, { ...size }).arrayBuffer();
  return new Response(buf, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, immutable, no-transform, max-age=31536000",
    },
  });
}

const GOLD = "#ffb627";
const CYAN = "#8fe3f0";

export default async function Image({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);

  // The card's proof is the peaks themselves: best positions first, flags and
  // all, so a share preview shows the record rather than describing it.
  // bestPeaks carries the non-obvious dedupe (and its history) in one tested place.
  const best = a ? bestPeaks(a, 8) : [];

  const stats = a
    ? [
        { v: `${chartEntries(a)}`, l: "Chart entries" },
        { v: `${chartTerritories(a)}`, l: "Territories" },
        { v: `${chartNo1s(a)}`, l: "No. 1 peaks" },
      ]
    : [];

  const node = (showFlags: boolean) => (
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#f5f4f0",
          fontFamily: "sans-serif",
          padding: 64,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.20), rgba(255,182,39,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: GOLD, textTransform: "uppercase", fontWeight: 700 }}>
            Official charts · peak positions
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1, marginTop: 16, color: GOLD }}>
            {a?.name ?? "Artist"}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, maxWidth: 1060 }}>
          {best.map((e) => {
            // The chart resolver, like the page: these chips are chart rows.
            const meta = chartCountryMeta(e.c);
            const one = e.peak === 1;
            return (
              <div
                key={e.c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 20px",
                  borderRadius: 999,
                  border: `1px solid ${one ? GOLD : e.peak <= 10 ? "rgba(143,227,240,0.55)" : "rgba(245,244,240,0.18)"}`,
                  background: one ? "rgba(255,182,39,0.18)" : "transparent",
                  color: one ? GOLD : e.peak <= 10 ? CYAN : "#c9c9d0",
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                {showFlags ? `${meta.flag} ` : ""}#{e.peak} <span style={{ color: "#9b9ba3", fontWeight: 400 }}>{meta.name}</span>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {stats.map((s) => (
            <div
              key={s.l}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 24px",
                background: "#141416",
                border: "1px solid rgba(245,244,240,0.12)",
                borderRadius: 12,
                minWidth: 190,
              }}
            >
              <div style={{ display: "flex", fontSize: 48, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.v}</div>
              <div style={{ display: "flex", fontSize: 18, color: "#9b9ba3", marginTop: 9, textTransform: "uppercase", letterSpacing: 1 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9b9ba3", letterSpacing: 3, fontWeight: 700 }}>
          BURNABOYSTATS.COM/AFROBEATS/{(a?.slug ?? "").toUpperCase()}/CHARTS
        </div>
      </div>
    )
  );

  try {
    return await png(node(true));
  } catch (err) {
    // The flags are the only thing on this card that needs the network, and
    // losing them costs nothing a reader can see: every chip already prints the
    // country's NAME beside the peak. A card without flags beats a 500.
    console.error(`OG flags unavailable for ${slug}, rendering without them:`, err);
    return await png(node(false));
  }
}
