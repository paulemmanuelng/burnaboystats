import { defineConfig } from "vitest/config";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { basename } from "node:path";

/** Width and height from a PNG or JPEG header — the same read as
 *  tests/cars.test.ts, which checks the car files against app/data/cars.ts. */
function imageSize(buf: Buffer): { width: number; height: number } {
  if (buf.readUInt32BE(0) === 0x89504e47) return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  throw new Error("no SOF marker");
}

/**
 * An image import, shaped the way Next hands it to a page.
 *
 * Vite resolves `import tile from "…/x.jpg"` to a path string; Next resolves
 * it to StaticImageData — src, width, height and an 8px blurDataURL. Since 23
 * Sep 2026 the car pages import their pictures (app/lib/carImageAssets.ts) so
 * the URL outlives a deploy, and a test that saw the string would be testing
 * a page production never renders. So the object it gets has the file's own
 * dimensions, a stand-in blur, and the src Vercel builds: under
 * /_next/static/immutable/media/, which is the path the image loader leaves
 * without a ?dpl= (tests/carImageAssets.test.tsx).
 */
function staticImageImports(): Plugin {
  return {
    name: "next-static-image-import",
    enforce: "pre",
    load(id) {
      if (id.includes("?") || !/\.(png|jpe?g)$/.test(id)) return null;
      const { width, height } = imageSize(readFileSync(id));
      const data = {
        src: `/_next/static/immutable/media/${basename(id)}`,
        width,
        height,
        blurDataURL: "data:image/png;base64,stand-in",
        blurWidth: 8,
        blurHeight: 6,
      };
      return `export default ${JSON.stringify(data)};`;
    },
  };
}

export default defineConfig({
  plugins: [react(), staticImageImports()],
  test: {
    include: ["tests/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
  },
});
