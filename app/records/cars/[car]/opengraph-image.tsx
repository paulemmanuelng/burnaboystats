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
  const hero = car
    ? `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "public", car.image.hero.src))).toString("base64")}`
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
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: GOLD, textTransform: "uppercase", fontWeight: 700 }}>
            Burna Boy&apos;s garage · {car ? `${rankLabel(car.rank)} of ${garage.length}` : ""}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>
              {car?.make ?? "Car"}
            </div>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1, color: GOLD, marginTop: 6 }}>
              {car ? modelShort(car.model) : ""}
            </div>
            <div style={{ display: "flex", fontSize: 30, color: "#c9c9d0", marginTop: 26 }}>
              {car ? `${usdFull(car.valueUsd)} · ${car.valueNaira}` : ""}
            </div>
            <div style={{ display: "flex", fontSize: 18, color: "#9b9ba3", letterSpacing: 4, marginTop: 12, textTransform: "uppercase" }}>
              reported value · illustration of the model
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#9b9ba3", letterSpacing: 4, fontWeight: 700 }}>
            BURNABOYSTATS.COM/RECORDS/CARS
          </div>
        </div>

        {hero && (
          <div style={{ position: "absolute", right: 40, top: 95, width: 600, height: 440, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={hero} width={600} alt="" style={{ objectFit: "contain", width: 600, height: "auto" }} />
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}
