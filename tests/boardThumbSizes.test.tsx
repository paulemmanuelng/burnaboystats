import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Home from "../app/page";
import mobileHome from "../app/components/mobileHome.module.css";
import page from "../app/page.module.css";

/**
 * The No. 1 board's thumbnails fetch a file the size of their box — on both
 * layouts of the home page.
 *
 * The desktop board has asked for Spotify's 64 rung for its 28px squares since
 * they were sized. The phone board beside it took the 300 rung for 24px ones:
 * on 23 Sep 2026 that was 118 KB of the home screen's art for three covers
 * (I Told Them..., Jerusalema, Last Last) that cost 10 KB at 64, on the site's
 * busiest landing page. The phone thumbs now carry /compare's srcset, so the
 * browser takes the smallest file that still covers the box at its density.
 *
 * What the browser takes is simulated as the smallest candidate whose density
 * reaches the screen's, at the densities each layout meets: 1x, 2x and the
 * 2.625 of a typical Android phone for the phone board, 1x and 2x for the
 * desktop one. Chrome's own rule (a geometric mean between neighbours) gives
 * the same file at every one of those densities; above them it leans smaller,
 * which is why 3x is not asserted. The box is read from each layout's
 * stylesheet, so a thumb that grows in CSS without its URL following fails.
 */

const ROOT = join(__dirname, "..");

/** The phone board's thumbnails exactly as production served them on 23 Sep
 *  2026, before the fix (curl of burnaboystats.com/, in board order). */
const SHIPPED_MOBILE_THUMBS = [
  '<img class="mobileHome-module__1cyKeW__boardCover" src="https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4" alt="Dai Dai cover" loading="lazy" width="24" height="24"/>',
  '<img class="mobileHome-module__1cyKeW__boardCover" src="https://cdn-images.dzcdn.net/images/cover/c118f131cf627543b95df1ad9a4c1571/100x100-000000-80-0-0.jpg" alt="Own It cover" loading="lazy" width="24" height="24"/>',
  '<img class="mobileHome-module__1cyKeW__boardCover" src="https://i.scdn.co/image/ab67616d00001e02c361f3720bafc0da36f14d96" alt="I Told Them... cover" loading="lazy" width="24" height="24"/>',
  '<img class="mobileHome-module__1cyKeW__boardCover" src="https://i.scdn.co/image/ab67616d00001e029d07e4e641b9ee80b0f713d0" alt="Jerusalema (Remix) cover" loading="lazy" width="24" height="24"/>',
  '<img class="mobileHome-module__1cyKeW__boardCover" src="https://i.scdn.co/image/ab67616d00001e02d98e997eaad5f503b9e1f2f2" alt="Last Last cover" loading="lazy" width="24" height="24"/>',
  '<img class="mobileHome-module__1cyKeW__boardCover" src="https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4" alt="Dai Dai cover" loading="lazy" width="24" height="24"/>',
];

// Spotify's fixed album ladder (spotifyImage.ts).
const SPOTIFY_RUNGS: Record<string, number> = {
  ab67616d00004851: 64,
  ab67616d00001e02: 300,
  ab67616d0000b273: 640,
};

/** The pixel width of the file behind a cover URL. */
function filePx(url: string): number {
  const sp = url.match(/^https:\/\/i\.scdn\.co\/image\/([0-9a-f]{16})/);
  if (sp && SPOTIFY_RUNGS[sp[1]]) return SPOTIFY_RUNGS[sp[1]];
  const dz = url.match(/^https:\/\/cdn-images\.dzcdn\.net\/images\/[^/]+\/[0-9a-f]+\/(\d+)x\d+-[^/]*\.jpg$/);
  if (dz) return Number(dz[1]);
  const ap = url.match(/^https:\/\/is1-ssl\.mzstatic\.com\/image\/thumb\/.+\/(\d+)x\d+bb\.jpg$/);
  if (ap) return Number(ap[1]);
  throw new Error(`unrecognised art host, cannot tell what size it is: ${url}`);
}

/** The file a screen of density `dpr` fetches for this <img>: its srcset read
 *  against `sizes` (or as x descriptors), else its src as the one 1x file. */
function picked(img: Element, dpr: number): { url: string; px: number } {
  const srcset = img.getAttribute("srcset");
  const sizes = img.getAttribute("sizes");
  let candidates: { url: string; density: number }[];
  if (srcset) {
    candidates = srcset.split(",").map((part) => {
      const [url, desc] = part.trim().split(/\s+/);
      if (desc?.endsWith("w")) {
        const slot = Number(sizes?.match(/^(\d+(?:\.\d+)?)px$/)?.[1]);
        if (!slot) throw new Error(`w descriptors need sizes in px, got ${sizes}`);
        return { url, density: parseFloat(desc) / slot };
      }
      return { url, density: desc ? parseFloat(desc) : 1 };
    });
  } else {
    candidates = [{ url: img.getAttribute("src") ?? "", density: 1 }];
  }
  candidates.sort((a, b) => a.density - b.density);
  const pick = candidates.find((c) => c.density >= dpr) ?? candidates[candidates.length - 1];
  return { url: pick.url, px: filePx(pick.url) };
}

/** Why a thumbnail in a `box`px square fetches the wrong file, or null. */
function problem(img: Element, box: number, densities: number[]): string | null {
  for (const dpr of densities) {
    const { px } = picked(img, dpr);
    if (px < Math.ceil(box * dpr)) return `${px}px file is soft in a ${box}px box at ${dpr}x`;
    if (px > 4 * box) return `${px}px file for a ${box}px box at ${dpr}x — over 4x the box`;
  }
  return null;
}

/** The `width:` the stylesheet gives exactly `.name`. */
function boxWidth(cssFile: string, name: string): number {
  const css = readFileSync(join(ROOT, cssFile), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const widths: number[] = [];
  for (const rule of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (!rule[1].split(",").map((x) => x.trim()).includes(`.${name}`)) continue;
    for (const w of rule[2].matchAll(/(?:^|;|\s)width:\s*(\d+(?:\.\d+)?)px/g)) widths.push(Number(w[1]));
  }
  if (widths.length !== 1) throw new Error(`expected one px width for .${name} in ${cssFile}, got ${widths}`);
  return widths[0];
}

const PHONE_DPRS = [1, 2, 2.625];
const DESKTOP_DPRS = [1, 2];

function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

describe("the guard itself — production's phone thumbnails fail it", () => {
  const box = boxWidth("app/components/mobileHome.module.css", "boardCover");

  it.each(SHIPPED_MOBILE_THUMBS.map((html) => [html.match(/alt="([^"]+)"/)![1], html]))("%s", (_alt, html) => {
    const img = parse(html).querySelector("img")!;
    expect(problem(img, box, PHONE_DPRS)).toMatch(/over 4x the box/);
  });
});

describe("the home page's No. 1 board thumbnails", () => {
  const root = parse(renderToStaticMarkup(<Home />));

  it("phone board: every thumb covers its box and no more, at the densities phones have", () => {
    const box = boxWidth("app/components/mobileHome.module.css", "boardCover");
    expect(box).toBe(24);
    const thumbs = [...root.querySelectorAll(`img.${mobileHome.boardCover}`)];
    expect(thumbs.length, "no phone board thumbs found — checking nothing").toBeGreaterThanOrEqual(4);
    const problems = thumbs.map((img) => [img.getAttribute("alt"), problem(img, box, PHONE_DPRS)]).filter(([, p]) => p);
    expect(problems).toEqual([]);
  });

  it("phone board: a 2.625x phone takes the 64 rung for every Spotify cover", () => {
    const thumbs = [...root.querySelectorAll(`img.${mobileHome.boardCover}`)];
    const spotify = thumbs.map((img) => picked(img, 2.625)).filter((p) => p.url.startsWith("https://i.scdn.co/"));
    expect(spotify.length).toBeGreaterThan(0);
    expect(spotify.filter((p) => p.px !== 64)).toEqual([]);
  });

  it("phone board: sizes names the painted square, and the thumbs stay lazy at the box size", () => {
    const box = boxWidth("app/components/mobileHome.module.css", "boardCover");
    for (const img of root.querySelectorAll(`img.${mobileHome.boardCover}`)) {
      expect(img.getAttribute("srcset"), img.getAttribute("alt") ?? "").toBeTruthy();
      if (/\d+w(,|$)/.test(img.getAttribute("srcset")!)) expect(img.getAttribute("sizes")).toBe(`${box}px`);
      expect(img.getAttribute("loading")).toBe("lazy");
      expect(img.getAttribute("width")).toBe(String(box));
      expect(img.getAttribute("height")).toBe(String(box));
    }
  });

  it("desktop board: every thumb covers its box and no more", () => {
    const box = boxWidth("app/page.module.css", "boardCover");
    const thumbs = [...root.querySelectorAll(`img.${page.boardCover}`)];
    expect(thumbs.length, "no desktop board thumbs found — checking nothing").toBeGreaterThanOrEqual(4);
    const problems = thumbs.map((img) => [img.getAttribute("alt"), problem(img, box, DESKTOP_DPRS)]).filter(([, p]) => p);
    expect(problems).toEqual([]);
  });
});
