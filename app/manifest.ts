import type { MetadataRoute } from "next";

// PWA web app manifest — makes the site installable (Add to Home Screen) with a
// branded name, icon and colours, and gives mobile browsers the right theme.
// Next automatically links this at /manifest.webmanifest.
//
// Icons are the crown mark from docs/design (LOGO.md): five chart bars on a
// base rule with the live dot as the jewel. Pure geometry, so it needs no font
// and survives at 16px — the icon it replaced was the word "BB" set in Arial.
// The maskable 512 lets Android crop to its own shape without clipping the
// crown, because the tile already carries the clear space the spec requires.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Burna Boy Stats — Certifications, Charts, Awards & Records",
    short_name: "Burna Boy Stats",
    description:
      "Every Burna Boy certification, chart peak, award and tour record in one place — fact-checked and always current.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    // #0a0a0b, the --bg token. It read #09090b, one digit off the value every
    // surface on the site actually uses, so the browser chrome never quite
    // matched the page behind it.
    theme_color: "#0a0a0b",
    lang: "en",
    categories: ["music", "entertainment"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
