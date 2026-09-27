import { ImageResponse } from "next/og";
import { OgLockup } from "../../lib/og-lockup";
import { ogId, cardUrl } from "../../lib/og-image";
import { dayBySlug, onThisDayDays } from "../../lib/onThisDay";
import { dayPreview, keepTogether } from "../../lib/onThisDayShare";
import { FadedPortrait, OTD_GOLD, PREVIEW_PORTRAIT, ShareMark, ShareUrl, compactPreview, loadPortrait, otdFonts } from "../../lib/onThisDayImages";

export function generateStaticParams() {
  return onThisDayDays.map((d) => ({ day: d.slug }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Burna Boy on this day";

/** What the card prints, so its id moves when the day's lead does. */
function previewFor(slug: string) {
  const day = dayBySlug(slug);
  return day ? dayPreview(day) : null;
}

export async function generateImageMetadata({ params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const p = previewFor(slug);
  return [
    {
      id: ogId([p?.kicker ?? slug, p?.headline ?? "", p?.meta ?? "", p?.cover ?? "", cardUrl(`/on-this-day/${slug}`)].join("|")),
      alt: p?.alt ?? alt,
      size,
      contentType,
    },
  ];
}

/**
 * A day's link preview (design response §2 "Share images"; change list 16):
 * the lead's headline is the hero, stepped by its length; the date moves into
 * the kicker; the record's cover sits beside it when the lead has 640px art;
 * one meta line names the year, the kind and the day's other milestones. The
 * portrait sits faded in the glow under the lockup (Paul, 26 Sep 2026), on
 * every day, the cover days too: it is gone by x 800, and the tile ends at 364.
 *
 * The meta line steps down from 24px where it would wrap beside a cover
 * (previewMetaSize), and the PNG is re-encoded under the preview byte budget
 * (compactPreview) — both from the live debug of 27 Sep 2026.
 */
export default async function Image({ params }: { params: Promise<{ day: string }> }) {
  const { day: slug } = await params;
  const p = previewFor(slug);
  const portrait = await loadPortrait();

  return compactPreview(new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0b",
          color: "#f5f4f0",
          fontFamily: "sans-serif",
          padding: "56px 64px 52px",
        }}
      >
        {portrait && <FadedPortrait src={portrait} at={PREVIEW_PORTRAIT} ground="10,10,11" width={size.width} height={size.height} />}
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
        {/* The lockup takes the corner facing the kicker, as on the song cards. */}
        <div style={{ position: "absolute", top: 56, right: 64, display: "flex" }}>
          <OgLockup />
        </div>

        <div style={{ position: "relative", display: "flex", alignItems: "center", height: 44 }}>
          {/* Capped so the longest day ("10 September") ends clear of the mark. */}
          <div
            style={{
              display: "flex",
              fontSize: 27,
              letterSpacing: 3.78,
              color: OTD_GOLD,
              maxWidth: 780,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {p?.kicker ?? "BURNA BOY · ON THIS DAY"}
          </div>
        </div>

        <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center", gap: 48, minHeight: 0 }}>
          {p?.cover && (
            <img
              src={p.cover}
              width={300}
              height={300}
              alt=""
              style={{
                width: 300,
                height: 300,
                borderRadius: 18,
                border: "2px solid rgba(245,244,240,0.16)",
                objectFit: "cover",
              }}
            />
          )}
          {p && (
            <div style={{ display: "flex", flexDirection: "column", gap: 22, flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  fontSize: p.headSize,
                  lineHeight: 1.06,
                  letterSpacing: 0.005 * p.headSize,
                  textWrap: "balance",
                }}
              >
                {keepTogether(p.headline)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: p.metaSize, letterSpacing: 0.12 * p.metaSize, color: "#c9c9d0" }}>
                <ShareMark kind={p.kind} size={18} color="#c9c9d0" />
                <div style={{ display: "flex" }}>{p.meta}</div>
              </div>
            </div>
          )}
        </div>

        <div style={{ position: "relative", display: "flex" }}>
          <ShareUrl url={p?.url ?? cardUrl("/on-this-day")} fontSize={20} color="#9b9ba3" tracking={2} />
        </div>
      </div>
    ),
    { ...size, fonts: otdFonts }
  ));
}
