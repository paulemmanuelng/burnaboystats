import { ImageResponse } from "next/og";
import { ogId } from "../lib/og-image";
import { afrobeatsArtists, artistBySlug, certCount, AFROBEATS_VERIFIED_ON } from "../data/afrobeats";
import { totalAwards } from "../data/certifications";
import { BURNA_PORTRAIT } from "../lib/artistImages";

// The five faces on the share card, in the order Paul asked for them.
//
// This is a SELECTION, not a ranking, and the card has to say so. Ordered by
// plaques it reads as a leaderboard, and four artists on the board — Seyi Vibez
// (103), Davido (91), Rema (80) and Asake (79) — outrank three of the five
// shown. Anyone who knows the numbers would read a silent omission as a
// mistake or a bias, so the footer states "five of nine" and the whole board's
// total sits beside it.
const FACES = ["wizkid", "tems", "tyla", "ayra-starr"] as const;

function faces() {
  const burna = { name: "Burna Boy", n: totalAwards(), img: BURNA_PORTRAIT };
  const rest = FACES.map((slug) => {
    const a = artistBySlug(slug);
    return a ? { name: a.name, n: certCount(a), img: a.image } : null;
  }).filter((x): x is { name: string; n: number; img: string } => x !== null);
  return [burna, ...rest];
}

// The card carries live totals, so its id has to move when they do — otherwise
// a scraper keeps serving whatever it read the first time.
export function generateImageMetadata() {
  const sig = `v2|${faces().map((f) => `${f.name}:${f.n}`).join("|")}|${AFROBEATS_VERIFIED_ON}`;
  return [{ id: ogId(sig), alt, size, contentType }];
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "The Afrobeats Board — Burna Boy, Wizkid, Tems, Tyla and Ayra Starr with their certification totals";

const GOLD = "#ffb627";
const INK = "#f5f4f0";
const MUTED = "#9b9ba3";

export default function Image() {
  const people = faces();
  const boardTotal = afrobeatsArtists.reduce((n, a) => n + certCount(a), 0);

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
          color: INK,
          fontFamily: "sans-serif",
          padding: "50px 56px",
          position: "relative",
        }}
      >
        {/* Two soft gold pools, matching the other cards on this site. Kept
            behind the faces so the portraits stay the brightest thing here. */}
        <div
          style={{
            position: "absolute",
            top: -230,
            left: -170,
            width: 620,
            height: 620,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.20), rgba(255,182,39,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            right: -180,
            width: 640,
            height: 640,
            display: "flex",
            background: "radial-gradient(circle, rgba(255,182,39,0.13), rgba(255,182,39,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 6,
              color: GOLD,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            The Afrobeats Board
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 800,
              // Tracking stays near zero and the headline carries no comma.
              // Satori renders a comma-plus-space in this weight noticeably
              // wider than a plain word gap, which read as a double space;
              // negative letter-spacing does not fix it, because it tightens
              // glyphs and leaves the space alone.
              letterSpacing: -0.2,
              lineHeight: 1.05,
              marginTop: 10,
            }}
          >
            Every plaque counted the same way
          </div>
        </div>

        {/* The five faces. Fixed widths rather than flex:1 — Satori lays this
            out without a real layout engine, and explicit numbers are the
            difference between five even columns and four plus a straggler. */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 22 }}>
          {people.map((p) => (
            <div key={p.name} style={{ display: "flex", flexDirection: "column", width: 200 }}>
              <img
                src={p.img}
                width={200}
                height={200}
                alt=""
                style={{
                  borderRadius: 16,
                  border: "2px solid rgba(245,244,240,0.16)",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: 27,
                  fontWeight: 700,
                  letterSpacing: -0.4,
                  marginTop: 16,
                  color: INK,
                }}
              >
                {p.name}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 4 }}>
                <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: GOLD, lineHeight: 1 }}>
                  {p.n}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 17,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: MUTED,
                  }}
                >
                  Plaques
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 21, color: MUTED }}>
          <div style={{ display: "flex", color: INK, fontWeight: 700 }}>
            {`Five of ${afrobeatsArtists.length + 1} artists`}
          </div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>
            {`${boardTotal + totalAwards()} plaques, each read in an issuing body's own register`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
