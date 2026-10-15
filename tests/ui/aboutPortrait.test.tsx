import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/about",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AboutPage from "../../app/about/page";
import { BURNA_PORTRAIT } from "../../app/lib/artistImages";
import { PORTRAIT_ART } from "../../app/lib/portraitArt";
import desk from "../../app/about/about.module.css";
import phone from "../../app/components/mobileAbout.module.css";
import { winning } from "../fixtures/cssRules";

/**
 * /about's portrait (design review 8 Oct 2026, J1-15, fix 32): BURNA_PORTRAIT,
 * the one Spotify CDN URL both layouts load (so the page makes one request),
 * on a photo tile, with an explicit size, eager on both layouts and
 * fetchpriority="high" on the desktop only (at 320 × 400 it is that page's
 * largest element; on the phone the h1 stays the largest), framed by the
 * site's own focal point and named "Burna Boy". Each sits in <picture> so
 * React makes no preload hint of it (tests/rscImageHints.test.tsx).
 */

const host = document.createElement("div");
host.innerHTML = renderToStaticMarkup(<AboutPage />);
const DESK_ROOT = host.querySelector(`.${desk.desktopOnly}`)!;
const PHONE_ROOT = host.querySelector(`.${phone.screen}`)!;
const FOCAL = PORTRAIT_ART["burna-boy"].focal;

/** React's own test for a preload hint (rscImageHints.hinted). */
const hinted = (root: ParentNode) =>
  [...root.querySelectorAll("img")].filter(
    (img) => img.getAttribute("loading") !== "lazy" && img.getAttribute("fetchpriority") !== "low" && !!img.getAttribute("src") && !img.closest("picture, noscript"),
  );

describe.each([
  ["desktop", () => DESK_ROOT, desk.portrait, [320, 400], "high"],
  ["phone", () => PHONE_ROOT, phone.portrait, [108, 132], null],
] as const)("%s", (_layout, root, tileClass, [w, h], priority) => {
  const imgs = () => [...root().querySelectorAll("img")].filter((i) => i.getAttribute("src") === BURNA_PORTRAIT);

  it("one img of BURNA_PORTRAIT, sized, eager, named, framed on the focal point", () => {
    expect(imgs()).toHaveLength(1);
    const img = imgs()[0];
    expect([img.getAttribute("width"), img.getAttribute("height")]).toEqual([String(w), String(h)]);
    expect(img.getAttribute("loading")).toBe("eager");
    expect(img.getAttribute("alt")).toBe("Burna Boy");
    expect((img as HTMLImageElement).style.objectPosition).toBe(FOCAL);
    expect(img.getAttribute("fetchpriority")).toBe(priority);
  });

  it("inside <picture> on a photo tile, so it is no preload hint", () => {
    const img = imgs()[0];
    const picture = img.closest("picture")!;
    expect(picture).not.toBeNull();
    expect((picture as HTMLElement).style.display).toBe("contents");
    const tile = picture.parentElement!;
    expect(tile.classList.contains("photoTile")).toBe(true);
    expect(tile.classList.contains(tileClass)).toBe(true);
    expect(hinted(root())).not.toContain(img);
  });
});

describe("the tile and the page around it", () => {
  it("the same URL on both layouts: one request", () => {
    const srcs = [...host.querySelectorAll("img")].map((i) => i.getAttribute("src")).filter((s) => /scdn/.test(s ?? ""));
    expect(new Set(srcs)).toEqual(new Set([BURNA_PORTRAIT]));
  });

  it("CSS: 320 × 400 on the desktop, 220 × 275 in the 901–1239 band, 108 × 132 on the phone, cover", () => {
    const dk = readFileSync("app/about/about.module.css", "utf8");
    const ph = readFileSync("app/components/mobileAbout.module.css", "utf8");
    const top = (m: string | null) => m === null;
    const band = (m: string | null) => m === "@media (max-width: 1239px)";
    expect([winning(dk, ".portrait", "width", top), winning(dk, ".portrait", "height", top)]).toEqual(["320px", "400px"]);
    expect([winning(dk, ".portrait", "width", band), winning(dk, ".portrait", "height", band)]).toEqual(["220px", "275px"]);
    expect([winning(ph, ".portrait", "width", top), winning(ph, ".portrait", "height", top)]).toEqual(["108px", "132px"]);
    for (const css of [dk, ph]) {
      expect(winning(css, ".portrait img", "object-fit", top)).toBe("cover");
      expect(winning(css, ".portrait", "border-radius", top)).toBe("6px");
    }
  });

  it("the layout keeps its i.scdn.co preconnect (fix 32: already there)", () => {
    expect(readFileSync("app/layout.tsx", "utf8")).toContain('<link rel="preconnect" href="https://i.scdn.co" />');
  });

  it("no image on /about becomes a preload hint", () => {
    expect(hinted(host).map((i) => i.getAttribute("src"))).toEqual([]);
  });
});

describe("negative controls", () => {
  it("the canvas's docs asset is not the portrait", () => {
    // Proof.dc.html §7 drew the tile from this file; fix 32 names BURNA_PORTRAIT.
    const canvas = "docs/design/box-office-by-country/assets/burna-boy-portrait-640.jpg";
    expect(canvas).not.toBe(BURNA_PORTRAIT);
    expect(host.querySelector(`img[src="${canvas}"]`)).toBeNull();
  });

  it("an eager bare <img> of the same portrait would be hinted", () => {
    const bare = document.createElement("div");
    bare.innerHTML = `<img src="${BURNA_PORTRAIT}" alt="Burna Boy" width="320" height="400" loading="eager" fetchpriority="high"/>`;
    expect(hinted(bare)).toHaveLength(1);
  });
});
