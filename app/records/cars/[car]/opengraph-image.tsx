import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ogId } from "../../../lib/og-image";
import { carBySlug, carSlugs, garage } from "../../../data/cars";
import { modelShort, usdFull, rankLabel } from "../../../lib/garage";

export function generateStaticParams() {
  return carSlugs.map((car) => ({ car }));
}

// The value and rank on a card can move as the list is re-priced. Fold them
// into the image id so a cached share preview follows the car.
export async function generateImageMetadata({ params }: { params: Promise<{ car: string }> }) {
  const { car: slug } = await params;
  const car = carBySlug(slug);
  return [{ id: ogId(`${slug}|${car?.valueUsd}|${car?.rank}|${garage.length}`), alt, size, contentType }];
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "A car from Burna Boy's collection — an illustration of the model, its reported value and rank";

const GOLD = "#ffb627";

export default async function Image({ params }: { params: Promise<{ car: string }> }) {
  const { car: slug } = await params;
  const car = carBySlug(slug);

  // The hero is a local file; the card embeds it as a data URI.
  //
  // The MIME is DERIVED, never written by hand. Satori picks its image parser
  // from the label rather than sniffing the bytes, so when the heroes went from
  // JPEG to cut-out PNG a hardcoded `image/jpeg` sent it down the JPEG segment
  // walker on a PNG header — "Offset is outside the bounds of the DataView" —
  // and all fifteen cards 500'd while every other OG route on the site stayed
  // fine. Deriving it means a future re-export cannot desync the two again.
  const mime = car?.image.hero.src.endsWith(".png") ? "image/png" : "image/jpeg";
  const hero = car
    ? `data:${mime};base64,${(await readFile(join(process.cwd(), "public", car.image.hero.src))).toString("base64")}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0b",
          color: "#f5f4f0",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 520,
            top: 120,
            width: 720,
            height: 520,
            display: "flex",
            background: "radial-gradient(ellipse at center, rgba(224,138,46,0.22), rgba(224,138,46,0) 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 0 50px 64px", width: 560 }}>
          <div style={{ display: "flex", fontSize: 21, letterSpacing: 4, color: GOLD, textTransform: "uppercase", fontWeight: 700 }}>
            Burna Boy&apos;s garage · {car ? `${rankLabel(car.rank)} of ${garage.length}` : ""}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>
              {car?.make ?? "Car"}
            </div>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1, color: GOLD, marginTop: 6 }}>
              {car ? modelShort(car.model) : ""}
            </div>
            {/* USD only. The naira sign has no glyph in satori's default font
                and rendered as a tofu box; the page itself carries the naira,
                where the site's own webfont has it. */}
            <div style={{ display: "flex", fontSize: 30, color: "#c9c9d0", marginTop: 26 }}>
              {car ? `${usdFull(car.valueUsd)} reported` : ""}
            </div>
            <div style={{ display: "flex", fontSize: 17, color: "#9b9ba3", letterSpacing: 3, marginTop: 12, textTransform: "uppercase" }}>
              Illustration of the model
            </div>
          </div>
          {/* The bare domain, as every other card on the site uses — the full
              path wrapped to two lines inside the 560px column. */}
          <div style={{ display: "flex", fontSize: 22, color: "#9b9ba3", letterSpacing: 4, fontWeight: 700 }}>
            BURNABOYSTATS.COM
          </div>
        </div>

        {hero && (
          <div style={{ position: "absolute", right: 40, top: 95, width: 600, height: 441, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Explicit height: satori does not resolve `height: "auto"`, so the
                hero collapsed to nothing even once the MIME was right. 600x441
                is the hero canvas (898x660) to scale. */}
            <img src={hero} width={600} height={441} alt="" style={{ objectFit: "contain" }} />
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}
