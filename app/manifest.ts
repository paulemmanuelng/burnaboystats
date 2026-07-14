import type { MetadataRoute } from "next";

// PWA web app manifest — makes the site installable (Add to Home Screen) with a
// branded name, icon and colours, and gives mobile browsers the right theme.
// Next automatically links this at /manifest.webmanifest. Icons reuse the
// existing app/icon.svg (scalable) and app/apple-icon.png.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Burna Boy Stats — Certifications, Charts, Awards & Records",
    short_name: "Burna Boy Stats",
    description:
      "Every Burna Boy certification, chart peak, award and tour record in one place — fact-checked and always current.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#09090b",
    lang: "en",
    categories: ["music", "entertainment"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
