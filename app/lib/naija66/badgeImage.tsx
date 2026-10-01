import { ImageResponse } from "next/og";

/**
 * The two pictures the badge route can answer with.
 *
 * Every answer that is not a live key — a decoy page, a real page before its
 * drop, a claimed prize, a closed hunt, a rate-limited caller, a misconfigured
 * deploy — is the SAME 1x1 transparent PNG with the SAME headers, so nothing
 * in the response says which of those it was.
 */

/** 1x1, RGBA, alpha 0 (tests/naija66.test.ts decodes it to check). */
export const BLANK_PNG = Uint8Array.from(
  Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAADUlEQVQI12NgYGBgAAAABQABXvMqOgAAAABJRU5ErkJggg==",
    "base64",
  ),
);

/** One header set for both answers; Content-Length is the only thing that differs. */
export const BADGE_HEADERS = {
  "Content-Type": "image/png",
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex",
} as const;

export const blankBadge = () => new Response(BLANK_PNG, { status: 200, headers: BADGE_HEADERS });

/** Drawn at 2x: 360x96, shown at 180x48 by the key slot. */
export const BADGE_SIZE = { width: 360, height: 96 };

/*
 * Flag colours, not theme colours: the badge is a picture, and it has to read
 * on the dark page and the paper one alike, so it carries its own white card.
 * The green is the Nigerian flag's.
 */
const FLAG_GREEN = "#008751";
const WHITE = "#ffffff";
const INK = "#0a0a0b";

export async function keyBadge(key: string): Promise<Response> {
  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: WHITE,
          border: `4px solid ${FLAG_GREEN}`,
          borderRadius: 16,
          padding: "0 16px 0 14px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Green-white-green, the flag's vertical bands. */}
        <div
          style={{
            display: "flex",
            width: 36,
            height: 60,
            borderRadius: 6,
            overflow: "hidden",
            border: `2px solid ${FLAG_GREEN}`,
            marginRight: 14,
            flexShrink: 0,
          }}
        >
          <div style={{ flex: 1, background: FLAG_GREEN }} />
          <div style={{ flex: 1, background: WHITE }} />
          <div style={{ flex: 1, background: FLAG_GREEN }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 16, letterSpacing: 3, color: FLAG_GREEN, textTransform: "uppercase" }}>
            Naija @ 66 · key
          </div>
          <div style={{ fontSize: 36, letterSpacing: 1, color: INK, lineHeight: 1.1, marginTop: 2 }}>{key}</div>
        </div>
      </div>
    ),
    BADGE_SIZE,
  );
  const png = await image.arrayBuffer();
  return new Response(png, { status: 200, headers: BADGE_HEADERS });
}
