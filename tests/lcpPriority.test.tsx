import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfrobeatsPage from "../app/afrobeats/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import CertificationsPage from "../app/certifications/page";
import CarsPage from "../app/records/cars/page";
import CarPage from "../app/records/cars/[car]/page";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { garage } from "../app/data/cars";
import hub from "../app/components/mobileAfrobeatsHub.module.css";
import mobileCerts from "../app/components/mobileCerts.module.css";
import carStyles from "../app/records/cars/[car]/car.module.css";

/**
 * The LCP image's request is marked high, and the tiles that race it are not.
 *
 * On 23 Sep 2026 Lighthouse flagged /afrobeats, /certifications, the board's
 * artist pages, /records/cars and the car pages with the same finding: the
 * LCP image was requested without fetchpriority=high. On the first three the
 * <img> already carried the hint, but the request is started by the
 * hand-written preload in front of it, and an unhinted image preload goes out
 * at Low — level with every cover and tile on the screen. /records/cars'
 * GatedImage and the car hero's next/image carried no hint anywhere.
 *
 * So: every image preload these pages write carries fetchPriority="high"; the
 * eager <img> it serves does too; the /afrobeats wall tiles, which load beside
 * the door from the same CDN, are Low. And the two-layout rule still holds —
 * each phone preload is gated by the same media query, srcset and sizes as the
 * <picture> it serves, so desktop never fetches the phone's image and the
 * preload is the request the image is painted from.
 */

const shipped: Record<string, string> = JSON.parse(
  readFileSync(join(__dirname, "fixtures", "lcp-priority-shipped-2026-09-23.json"), "utf8"),
);

function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

const imagePreloads = (root: ParentNode) => [...root.querySelectorAll('link[rel="preload"][as="image"]')];

/** Why an image preload is wrong, or null. `gated`: the page carries both
 *  layouts, so the preload must name the one it belongs to. */
function preloadProblem(link: Element, gated: boolean): string | null {
  if (link.getAttribute("fetchpriority") !== "high") return "image preload without fetchPriority=high goes out at Low";
  if (gated && !link.getAttribute("media")) return "ungated preload in a two-layout page — the hidden layout fetches it too";
  return null;
}

/** An <img> behind a gated <source>: eager ones are the LCP candidates and
 *  are hinted high; lazy ones are not. */
function gatedImgProblem(img: Element): string | null {
  const lazy = img.getAttribute("loading") === "lazy";
  const prio = img.getAttribute("fetchpriority");
  if (!lazy && prio !== "high") return "eager gated image without fetchPriority=high";
  if (lazy && prio === "high") return "lazy image hinted high — it would compete with the LCP";
  return null;
}

function wallTileProblem(img: Element): string | null {
  if (img.getAttribute("loading") !== "lazy") return "wall tile is not lazy";
  if (img.getAttribute("fetchpriority") !== "low") return "wall tile without fetchPriority=low races the door";
  return null;
}

/** Each gated preload must be the request its <picture> paints from: same
 *  media, same srcset, same sizes, and that picture's <img> eager and high. */
function pairingProblems(root: ParentNode): string[] {
  const out: string[] = [];
  const sources = [...root.querySelectorAll("picture > source[media]")];
  for (const link of imagePreloads(root)) {
    const match = sources.find(
      (s) =>
        s.getAttribute("media") === link.getAttribute("media") &&
        s.getAttribute("srcset") === link.getAttribute("imagesrcset") &&
        s.getAttribute("sizes") === link.getAttribute("imagesizes"),
    );
    if (!match) {
      out.push(`preload with no matching <picture>: ${link.getAttribute("imagesrcset")?.slice(0, 80)}`);
      continue;
    }
    const img = match.parentElement?.querySelector("img");
    const p = img ? gatedImgProblem(img) : "picture without an <img>";
    if (p) out.push(p);
    if (img?.getAttribute("loading") === "lazy") out.push("preload for a lazy image");
  }
  return out;
}

const problems = (els: Element[], check: (el: Element) => string | null) =>
  els.map((el) => check(el)).filter((p): p is string => p !== null);

describe("the guard itself — production's markup before the change fails it", () => {
  it("the /afrobeats door preload", () => {
    const [link] = imagePreloads(parse(shipped.afrobeatsDoorPreload));
    expect(preloadProblem(link, true)).toMatch(/without fetchPriority=high/);
  });

  it("the certs hero preload, on /certifications and an artist page", () => {
    for (const key of ["certificationsHeroPreload", "wizkidHeroPreload"]) {
      const [link] = imagePreloads(parse(shipped[key]));
      expect(preloadProblem(link, true), key).toMatch(/without fetchPriority=high/);
    }
  });

  it("a /afrobeats wall tile", () => {
    const img = parse(shipped.afrobeatsWallTile).querySelector("img")!;
    expect(wallTileProblem(img)).toMatch(/without fetchPriority=low/);
  });

  it("the /records/cars phone tile and its preload", () => {
    const [link] = imagePreloads(parse(shipped.carsTilePreload));
    expect(preloadProblem(link, true)).toMatch(/without fetchPriority=high/);
    const root = parse(shipped.carsTilePreload + shipped.carsTilePicture);
    expect(pairingProblems(root).join("; ")).toMatch(/eager gated image without fetchPriority=high/);
  });

  it("the car page hero", () => {
    const [link] = imagePreloads(parse(shipped.carHeroPreload));
    expect(preloadProblem(link, false)).toMatch(/without fetchPriority=high/);
    expect(parse(shipped.carHeroImg).querySelector("img")!.getAttribute("fetchpriority")).toBeNull();
  });

  it("an ungated preload on a two-layout page", () => {
    const ungated = shipped.afrobeatsDoorPreload.replace(' media="(max-width: 900px)"', ' fetchPriority="high"');
    const [link] = imagePreloads(parse(ungated));
    expect(preloadProblem(link, true)).toMatch(/ungated preload/);
  });
});

describe("/afrobeats — the door is high, the wall is low", () => {
  const root = parse(renderToStaticMarkup(<AfrobeatsPage />));

  it("the door's preload is hinted, gated to phones, and serves the door", () => {
    const links = imagePreloads(root);
    expect(links).toHaveLength(1);
    expect(problems(links, (l) => preloadProblem(l, true))).toEqual([]);
    expect(links[0].getAttribute("media")).toBe("(max-width: 900px)");
    expect(pairingProblems(root)).toEqual([]);
    const door = root.querySelector(`picture > img.${hub.doorArt}`);
    expect(door?.getAttribute("fetchpriority")).toBe("high");
  });

  it("every wall tile is lazy and low", () => {
    const tiles = [...root.querySelectorAll(`img.${hub.art}`)];
    expect(tiles.length, "no wall tiles found — checking nothing").toBeGreaterThanOrEqual(afrobeatsArtists.length);
    expect(problems(tiles, wallTileProblem)).toEqual([]);
  });

  it("nothing else on the page is hinted high", () => {
    const high = [...root.querySelectorAll('img[fetchpriority="high"]')];
    expect(high.map((i) => i.className)).toEqual([hub.doorArt]);
  });
});

describe("the certs hero — /certifications and every board artist page", () => {
  it("/certifications", () => {
    const root = parse(renderToStaticMarkup(<CertificationsPage />));
    const links = imagePreloads(root);
    expect(links).toHaveLength(1);
    expect(problems(links, (l) => preloadProblem(l, true))).toEqual([]);
    expect(pairingProblems(root)).toEqual([]);
    expect(root.querySelector(`img.${mobileCerts.heroArt}`)?.getAttribute("fetchpriority")).toBe("high");
  });

  let withPortrait = 0;
  it.each(afrobeatsArtists.map((a) => a.slug))("/afrobeats/%s", async (slug) => {
    const page = await ArtistPage({ params: Promise.resolve({ artist: slug }) });
    const root = parse(renderToStaticMarkup(page));
    const links = imagePreloads(root);
    expect(links.length).toBeLessThanOrEqual(1);
    if (links.length) withPortrait++;
    expect(problems(links, (l) => preloadProblem(l, true))).toEqual([]);
    expect(pairingProblems(root)).toEqual([]);
  });

  it("the board pages really do carry the preload", () => {
    // Were no artist to have a portrait, the loop above would check nothing.
    expect(withPortrait).toBeGreaterThan(0);
  });
});

describe("/records/cars — GatedImage hints its eager tiles in both layouts", () => {
  const root = parse(renderToStaticMarkup(<CarsPage />));
  const links = imagePreloads(root);

  it("every preload is hinted, gated, and the request its tile paints from", () => {
    expect(problems(links, (l) => preloadProblem(l, true))).toEqual([]);
    expect(pairingProblems(root)).toEqual([]);
  });

  it("each layout preloads only its own eager tiles", () => {
    const phone = links.filter((l) => l.getAttribute("media") === "(max-width: 900px)");
    const desk = links.filter((l) => l.getAttribute("media") === "(min-width: 901px)");
    expect(phone.length + desk.length).toBe(links.length);
    expect(phone.length).toBeGreaterThan(0);
    expect(desk.length).toBeGreaterThan(0);
    expect(desk.length).toBeLessThan(garage.length);
  });

  it("eager tiles are high, lazy tiles carry no hint", () => {
    const imgs = [...root.querySelectorAll("picture > source[media] + img")];
    expect(imgs.length).toBeGreaterThan(links.length);
    expect(problems(imgs, gatedImgProblem)).toEqual([]);
    expect(imgs.filter((i) => i.getAttribute("fetchpriority") === "high")).toHaveLength(links.length);
  });
});

describe("/records/cars/[car] — the hero", () => {
  it.each(garage.map((c) => c.slug))("%s", async (slug) => {
    const page = await CarPage({ params: Promise.resolve({ car: slug }) });
    const root = parse(renderToStaticMarkup(page));
    const hero = root.querySelector(`img.${carStyles.heroImg}`);
    expect(hero?.getAttribute("fetchpriority")).toBe("high");
    // next/image writes the preload through ReactDOM.preload; the hint must
    // reach it, since that is the request the hero is painted from.
    const links = imagePreloads(root).filter((l) => l.getAttribute("imagesizes") === hero?.getAttribute("sizes"));
    expect(links).toHaveLength(1);
    expect(problems(links, (l) => preloadProblem(l, false))).toEqual([]);
  });
});
