import { renderToStaticMarkup } from "react-dom/server";

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

import TodaysNumber from "../app/components/TodaysNumber";
import MobileHome from "../app/components/MobileHome";
import MusicPage from "../app/music/page";

/**
 * No eager cover on "/" or /music becomes a preload hint in the page's RSC
 * payload.
 *
 * React's server renderer turns every eager <img> it renders into a preload
 * hint (`:HL[...,"image"]`) unless the image is lazy, fetchPriority="low", or
 * inside a <picture> or <noscript>. The hint travels in the RSC payload, and a
 * payload is what <Link> prefetches: on 24 Sep 2026 every visit to /faq
 * downloaded the Dai Dai cover and the No Sign of Weakness cover, neither of
 * which /faq shows, and Chrome logged both as "preloaded but not used".
 *
 * Each cover now sits in <picture style="display: contents">, the pattern the
 * site already uses for gated images. It stays eager on its own page and its
 * box does not change.
 */

/** The same test React applies (getChildFormatContext, case "img"). */
function hinted(root: ParentNode): Element[] {
  return [...root.querySelectorAll("img")].filter((img) => {
    if (img.getAttribute("loading") === "lazy") return false;
    if (img.getAttribute("fetchpriority") === "low") return false;
    const src = img.getAttribute("src") ?? "";
    const srcSet = img.getAttribute("srcset") ?? "";
    if (!src && !srcSet) return false;
    if (/^data:/i.test(src) && (!srcSet || /^data:/i.test(srcSet))) return false;
    return !img.closest("picture, noscript");
  });
}

function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

const DAI_DAI_COVER = "ab67616d00001e0203cadf1b3fe324c1dc710ed4";
const LATEST_ALBUM = "d00c3ad1a774c0e171939239";

describe("eager covers stay out of the RSC payload's preload hints", () => {
  it("the rule catches the markup that shipped", () => {
    // Served by burnaboystats.com on 24 Sep 2026, before the fix.
    const shipped = parse(
      '<a class="todaysNumber-module__z8E5Na__cover" href="/dai-dai"><img src="https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4" alt="" width="104" height="104"/></a>' +
        '<a class="mobileHome-module__1cyKeW__cover" href="/dai-dai"><img src="https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4" alt="" width="88" height="88"/></a>' +
        '<img class="music-module__d-PZSa__latestCover" src="https://i.scdn.co/image/ab67616d0000b273d00c3ad1a774c0e171939239" srcSet="https://i.scdn.co/image/ab67616d00004851d00c3ad1a774c0e171939239 64w, https://i.scdn.co/image/ab67616d00001e02d00c3ad1a774c0e171939239 300w, https://i.scdn.co/image/ab67616d0000b273d00c3ad1a774c0e171939239 640w" sizes="160px" alt="No Sign of Weakness album cover" width="160" height="160"/>'
    );
    expect(hinted(shipped)).toHaveLength(3);
  });

  it("the home page's Dai Dai cover, both layouts", () => {
    for (const [name, html] of [
      ["TodaysNumber", renderToStaticMarkup(<TodaysNumber />)],
      ["MobileHome", renderToStaticMarkup(<MobileHome />)],
    ] as const) {
      const root = parse(html);
      const cover = [...root.querySelectorAll("img")].find((i) => i.getAttribute("src")?.includes(DAI_DAI_COVER));
      expect(cover, `${name} renders the Dai Dai cover`).toBeTruthy();
      expect(cover!.getAttribute("loading"), `${name}: still eager`).toBeNull();
      expect(hinted(root).map((i) => i.getAttribute("src")), name).not.toContainEqual(expect.stringContaining(DAI_DAI_COVER));
      expect((cover!.parentElement as HTMLElement).style.display, `${name}: the wrapper takes no box`).toBe("contents");
    }
  });

  it("/music's latest-album cover on desktop", () => {
    const root = parse(renderToStaticMarkup(<MusicPage />));
    const desktop = [...root.querySelectorAll("img")].filter(
      (i) => i.getAttribute("sizes") === "160px" && i.getAttribute("src")?.includes(LATEST_ALBUM)
    );
    expect(desktop).toHaveLength(1);
    expect(desktop[0].getAttribute("loading")).toBeNull();
    expect(hinted(root)).not.toContain(desktop[0]);
    expect((desktop[0].parentElement as HTMLElement).style.display).toBe("contents");
  });
});
