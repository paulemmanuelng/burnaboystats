import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";

/**
 * The crown has to be findable by Google, not just correct on the site.
 *
 * Everything about the mark was right and still did not satisfy the two rules
 * Google publishes, because both are about the URL and the format rather than
 * the drawing:
 *
 *   favicon — "The favicon URL must be stable (don't change the URL
 *   frequently)", and the supported formats are BMP, GIF, ICO, PNG, JPEG, PPM
 *   and TIFF. SVG is not one of them.
 *
 *   Organization logo — "The image must be 112x112px, at minimum" and "must be
 *   crawlable and indexable", in a format Google Images supports.
 *
 * The site was serving the icons through Next's app/ file convention, which
 * routes them through the generated-asset pipeline; on Vercel that appends
 * ?dpl=<deployment id> to every generated asset URL. With the stats bot
 * deploying every half hour that is ~50 distinct favicon URLs a day for one
 * unchanging image. And Organization.logo named the SVG, which has no intrinsic
 * pixel size to measure the 112px minimum against.
 *
 * Neither failure is visible by looking at the page. Both are one edit away
 * from coming back.
 */

const LAYOUT = readFileSync("app/layout.tsx", "utf8");
const MANIFEST = readFileSync("app/manifest.ts", "utf8");

/** Formats Google lists for favicons in search. Deliberately excludes SVG. */
const GOOGLE_FAVICON_FORMATS = /\.(ico|png|jpe?g|gif|bmp|ppm|tiff?)$/i;

describe("the logo is reachable by Google", () => {
  // public/ is the reason the URLs are stable: files there are served verbatim,
  // while app/ icon conventions are hashed and dpl-suffixed. Moving one back
  // would restore the churn silently, so the location is the thing pinned.
  it.each(["public/favicon.ico", "public/icon.svg", "public/apple-icon.png", "public/icon-192.png", "public/icon-512.png"])(
    "%s is served from public/, so its URL survives a deployment",
    (f) => {
      expect(existsSync(f), `${f} is missing — the icon it serves now 404s`).toBe(true);
    }
  );

  it.each(["app/favicon.ico", "app/icon.svg", "app/apple-icon.png"])(
    "%s is NOT back in app/, which would re-hash the URL",
    (f) => {
      expect(
        existsSync(f),
        `${f} is back — Next will hash it and Vercel will append ?dpl=, so the favicon URL changes on every deploy`
      ).toBe(false);
    }
  );

  it("declares the icons as plain paths, not through the file convention", () => {
    const block = /icons:\s*\{([\s\S]*?)\n  \},/.exec(LAYOUT);
    expect(block, "app/layout.tsx no longer declares metadata.icons — the file convention is back").toBeTruthy();
    const urls = [...block![1].matchAll(/url:\s*"([^"]+)"/g)].map((m) => m[1]);
    expect(urls.length, "no icon urls declared").toBeGreaterThan(0);
    for (const u of urls) {
      expect(u.startsWith("/"), `${u} is not a root-relative path`).toBe(true);
      expect(u, `${u} carries a query string, which is what made the URL unstable`).not.toContain("?");
    }
    // A format Google can read must come FIRST: it takes the first usable icon
    // from the list, and SVG is not on its supported list.
    expect(
      GOOGLE_FAVICON_FORMATS.test(urls[0]),
      `the first declared icon is ${urls[0]}, which is not a format Google lists for favicons (ico/png/jpeg/gif/bmp/ppm/tiff)`
    ).toBe(true);
  });

  it("names a raster logo big enough for Organization structured data", () => {
    const logo = /logo:\s*\{[\s\S]*?url:\s*`\$\{siteUrl\}(\/[^`]+)`[\s\S]*?width:\s*(\d+)[\s\S]*?height:\s*(\d+)/.exec(LAYOUT);
    expect(
      logo,
      "Organization.logo is no longer an ImageObject with an explicit size — Google requires at least 112x112px, which a bare SVG url cannot state"
    ).toBeTruthy();
    const [, path, w, h] = logo!;
    expect(GOOGLE_FAVICON_FORMATS.test(path), `Organization.logo points at ${path}; use a raster image`).toBe(true);
    expect(Number(w), "Google's minimum is 112px").toBeGreaterThanOrEqual(112);
    expect(Number(h), "Google's minimum is 112px").toBeGreaterThanOrEqual(112);
    expect(existsSync(`public${path}`), `public${path} does not exist, so the logo URL 404s`).toBe(true);

    // The PNG's real pixels, read from the IHDR chunk — not the number beside
    // it in the JSON-LD. A width typed next to a file is a claim about the
    // file, and this repo has been caught by exactly that before.
    const png = readFileSync(`public${path}`);
    expect(png.subarray(1, 4).toString(), `public${path} is not a PNG`).toBe("PNG");
    expect(png.readUInt32BE(16), "the declared width does not match the file").toBe(Number(w));
    expect(png.readUInt32BE(20), "the declared height does not match the file").toBe(Number(h));
  });

  // The manifest names the same files. If one moves and the manifest is not
  // updated, Android installs a broken icon and nothing else notices.
  it("every manifest icon exists at the path the manifest names", () => {
    for (const m of MANIFEST.matchAll(/src:\s*"([^"]+)"/g)) {
      expect(existsSync(`public${m[1]}`), `manifest names ${m[1]} but public${m[1]} does not exist`).toBe(true);
    }
  });
});
