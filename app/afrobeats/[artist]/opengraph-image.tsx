import { ImageResponse } from "next/og";
import { ogId, cardUrl } from "../../lib/og-image";
import { OgLockup, ogFonts } from "../../lib/og-lockup";
import {
  artistBySlug,
  afrobeatsSlugs,
  certCount,
  countryCount,
  chartEntries,
  chartNo1s,
  topAward,
  plaqueLabel,
} from "../../data/afrobeats";
import { boardArtistTiles, tilesSig } from "../../lib/ogStatTiles";

export function generateStaticParams() {
  return afrobeatsSlugs.map((artist) => ({ artist }));
}

export async function generateImageMetadata({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  // Figures move with each weekly review; fold them into the id so a cached
  // preview follows the artist rather than freezing at first scrape. Next probes
  // this route once with no params, so the id must survive an undefined slug.
  // The tiles AS PRINTED join it too: "1 COUNTRIES" and "1 NO. 1 PEAKS"
  // became singular on 5 Oct 2026 with every figure unchanged.
  const sig = a
    ? `${slug}|${certCount(a)}|${countryCount(a)}|${chartEntries(a)}|${chartNo1s(a)}|${tilesSig(artistTiles(a))}|${cardUrl(`/afrobeats/${slug}`)}`
    : `${slug}`;
  // The alt names the artist; every board card carried the one generic alt below.
  return [{ id: ogId(sig), alt: a ? `${a.name} on the Afrobeats Board — certifications and chart records, verified at source` : alt, size, contentType }];
}

/** The stat tiles, singular where the count is one (debug pass 5 Oct 2026:
 *  Black Sherif's card read "1 COUNTRIES" and "1 NO. 1 PEAKS"). */
const artistTiles = (a: NonNullable<ReturnType<typeof artistBySlug>>) =>
  boardArtistTiles(certCount(a), countryCount(a), chartEntries(a), chartNo1s(a));

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The Afrobeats Board — certifications and chart records, verified at source";

const GOLD = "#ffb627";

export default async function Image({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  const award = a ? topAward(a) : null;

  const stats = a?.swept ? artistTiles(a) : [];

  return new ImageResponse(
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
        {/* LOGO.md puts the lockup top-LEFT on a share card. On this one the
            top-left corner is the kicker's, so the mark takes the facing
            corner rather than displacing it — same 44px height, same clear
            space, and the card's own composition is untouched. */}
        <div style={{ position: "absolute", top: 56, right: 64, display: "flex" }}>
          <OgLockup />
        </div>
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.22), rgba(255,182,39,0) 70%)",
          }}
        />

        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: GOLD, textTransform: "uppercase", fontWeight: 700,
          // Capped so a long kicker wraps rather than running under the
          // lockup in the facing corner (1072 box - 238 mark - clear space).
          maxWidth: 780 }}>
          The Afrobeats Board {a ? `· ${a.country}` : ""}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 46 }}>
          {a && (
            <img
              src={a.image}
              width={280}
              height={280}
              alt=""
              style={{ borderRadius: 18, border: "2px solid rgba(245,244,240,0.16)", objectFit: "cover" }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex", fontSize: 96, fontWeight: 800, letterSpacing: -3, lineHeight: 1, color: GOLD }}>
              {a?.name ?? "Artist"}
            </div>
            {a?.swept ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {award && (
                  <div style={{ display: "flex", fontSize: 27, color: "#c9c9d0", marginTop: 14 }}>
                    Highest award: {plaqueLabel(award)}
                  </div>
                )}
                <div style={{ display: "flex", gap: 14, marginTop: 26 }}>
                  {stats.map((s) => (
                    <div
                      key={s.l}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "15px 20px",
                        background: "#141416",
                        border: "1px solid rgba(245,244,240,0.12)",
                        borderRadius: 12,
                        minWidth: 132,
                      }}
                    >
                      <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{s.v}</div>
                      <div style={{ display: "flex", fontSize: 17, color: "#9b9ba3", marginTop: 9, textTransform: "uppercase", letterSpacing: 1 }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", fontSize: 30, color: "#c9c9d0", marginTop: 18, maxWidth: 620, lineHeight: 1.35 }}>
                Register sweep scheduled — no figures published until they are read at source.
              </div>
            )}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 25, color: "#9b9ba3", letterSpacing: 3, fontWeight: 700 }}>
          {cardUrl(`/afrobeats/${a?.slug ?? ""}`)}
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts }
  );
}
