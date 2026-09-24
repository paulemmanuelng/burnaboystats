// @vitest-environment node
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * The car pictures keep their URL from one deploy to the next.
 *
 * Until 23 Sep 2026 every tile and hero was painted from its public-folder
 * path, and next/image stamps those with &dpl=<deploymentId>. Production's
 * /records/cars carried 630 such URLs, so each deploy — about ten a day —
 * renamed every picture on the page and a returning visitor downloaded the
 * phone's LCP tile again in full. The pages now paint from static imports
 * (app/lib/carImageAssets.ts), which Vercel serves from
 * /_next/static/immutable/media/ under a content hash, and the image loader
 * leaves dpl off those.
 *
 * This file renders the pages as the server does on Vercel: in Node, with a
 * deployment id set and immutable assets on. The id is the one production
 * carried on 24 Sep, and the first test proves the set-up reproduces a URL
 * production actually served, character for character — so the checks below
 * run against the real loader, not a model of it. Image imports arrive as
 * StaticImageData with Vercel's src (vitest.config.ts); two local builds
 * emulating that, under two different deployment ids, gave /records/cars the
 * same 144 image URLs (16 tiles × 9 widths) with no dpl on any of them.
 */

const SHIPPED_DPL = vi.hoisted(() => {
  const id = "dpl_H2UzufEbBx4wUDHfeqsTtFbstDHJ";
  process.env.NEXT_DEPLOYMENT_ID = id;
  process.env.NEXT_SUPPORTS_IMMUTABLE_ASSETS = "true";
  return id;
});

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/cars",
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

import { getImageProps } from "next/image";
import CarsPage from "../app/records/cars/page";
import CarPage from "../app/records/cars/[car]/page";
import { garage } from "../app/data/cars";
import { neighbours } from "../app/lib/garage";
import { carImageAssets, carImages } from "../app/lib/carImageAssets";
import rawChironTile from "../public/cars/bugatti-chiron-tile.jpg";

afterAll(() => {
  delete process.env.NEXT_DEPLOYMENT_ID;
  delete process.env.NEXT_SUPPORTS_IMMUTABLE_ASSETS;
});

const shipped: Record<string, string> = JSON.parse(
  readFileSync(join(__dirname, "fixtures", "lcp-priority-shipped-2026-09-23.json"), "utf8"),
);

/** The phone's LCP tile, 640w rung, as production served it at 00:45 UTC on
 *  24 Sep 2026 — one deploy after the 23 Sep fixture, same file, new URL. */
const SHIPPED_TILE_2026_09_24 =
  "/_next/image?url=%2Fcars%2Fbugatti-chiron-tile.jpg&amp;w=640&amp;q=75&amp;dpl=dpl_H2UzufEbBx4wUDHfeqsTtFbstDHJ";

/** Every optimiser URL in a piece of markup, with &amp; decoded. */
const imageUrls = (html: string) =>
  [...html.matchAll(/\/_next\/image\?url=[^\s",]+/g)].map((m) => m[0].replace(/&amp;/g, "&"));

/** The file an optimiser URL is built from. */
const sourceOf = (url: string) => new URLSearchParams(url.split("?")[1]).get("url") ?? "";

/** Why an image URL will be a different URL after the next deploy, or null. */
function deployBound(url: string): string | null {
  const q = new URLSearchParams(url.split("?")[1]);
  if (q.has("dpl")) return `carries dpl=${q.get("dpl")}, which changes every deploy`;
  if (!sourceOf(url).startsWith("/_next/static/immutable/media/")) return `${sourceOf(url)} is not a content-hashed import`;
  return null;
}

const problems = (html: string) =>
  imageUrls(html)
    .map((u) => deployBound(u))
    .filter((p): p is string => p !== null);

describe("the guard itself — production's car markup fails it", () => {
  it("the set-up reproduces a URL production served, exactly", () => {
    const { props } = getImageProps({ src: "/cars/bugatti-chiron-tile.jpg", alt: "", width: 640, height: 400, sizes: "100vw" });
    expect(props.srcSet?.split(", ")[0]).toBe(`${SHIPPED_TILE_2026_09_24.replace(/&amp;/g, "&")} 640w`);
    expect(SHIPPED_DPL).toBe(new URLSearchParams(SHIPPED_TILE_2026_09_24.replace(/&amp;/g, "&").split("?")[1]).get("dpl"));
  });

  it("the same tile and rung had a different URL one deploy earlier", () => {
    const before = imageUrls(shipped.carsTilePreload)[0];
    const after = imageUrls(SHIPPED_TILE_2026_09_24)[0];
    expect(sourceOf(before)).toBe(sourceOf(after));
    expect(before).not.toBe(after);
    expect(deployBound(before)).toMatch(/carries dpl=dpl_B9dfYw3F/);
    expect(deployBound(after)).toMatch(/carries dpl=dpl_H2UzufEb/);
  });

  it("every URL in the shipped tile, tile picture, hero preload and hero", () => {
    for (const key of ["carsTilePreload", "carsTilePicture", "carHeroPreload", "carHeroImg"]) {
      const urls = imageUrls(shipped[key]);
      expect(urls.length, key).toBeGreaterThan(0);
      expect(problems(shipped[key]), key).toHaveLength(urls.length);
    }
  });

  it("a public-folder path without dpl still fails — it is not hashed", () => {
    expect(deployBound("/_next/image?url=%2Fcars%2Fbugatti-chiron-tile.jpg&w=640&q=75")).toMatch(/not a content-hashed import/);
  });
});

describe("the loader leaves dpl off an immutable import", () => {
  it("a car tile import", () => {
    const { props } = getImageProps({ src: carImages("bugatti-chiron").tile, alt: "", width: 640, height: 400, sizes: "100vw" });
    const urls = props.srcSet!.split(", ").map((s) => s.split(" ")[0]);
    expect(urls.length).toBeGreaterThan(0);
    expect(urls.map(deployBound).filter(Boolean)).toEqual([]);
    expect(sourceOf(urls[0])).toBe("/_next/static/immutable/media/bugatti-chiron-tile.jpg");
  });
});

describe("/records/cars — both layouts paint every tile from its import", () => {
  const html = renderToStaticMarkup(<CarsPage />);

  it("no image URL on the page is tied to the deploy", () => {
    expect(imageUrls(html).length, "no image URLs found — checking nothing").toBeGreaterThan(garage.length * 2);
    expect(problems(html)).toEqual([]);
    expect(html).not.toContain("%2Fcars%2F");
  });

  it("each car's tile is on the page in both layouts", () => {
    for (const media of ["(max-width: 900px)", "(min-width: 901px)"]) {
      const sources = [...html.matchAll(/<source media="([^"]+)" srcSet="([^"]+)"/g)].filter((m) => m[1] === media);
      const files = new Set(sources.map((m) => sourceOf(imageUrls(m[2])[0])));
      expect(files, media).toEqual(new Set(garage.map((c) => `/_next/static/immutable/media/${c.slug}-tile.jpg`)));
    }
  });
});

describe("/records/cars/[car] — the hero and the nav thumbnails", () => {
  it.each(garage.map((c) => c.slug))("%s", async (slug) => {
    const page = await CarPage({ params: Promise.resolve({ car: slug }) });
    const html = renderToStaticMarkup(page);
    expect(problems(html)).toEqual([]);
    expect(html).not.toContain("%2Fcars%2F");
    const car = garage.find((c) => c.slug === slug)!;
    const { prev, next } = neighbours(car);
    const files = new Set(imageUrls(html).map(sourceOf));
    expect(files).toEqual(
      new Set([`${slug}.png`, `${prev.slug}-tile.jpg`, `${next.slug}-tile.jpg`].map((f) => `/_next/static/immutable/media/${f}`)),
    );
  });
});

describe("app/lib/carImageAssets.ts — one tile and one hero per garage car", () => {
  const SOURCE_PATH = join(process.cwd(), "app", "lib", "carImageAssets.ts");
  const source = readFileSync(SOURCE_PATH, "utf8");

  /** What is wrong with the module's source against the garage, or []. */
  function sourceProblems(src: string, slugs: string[]): string[] {
    const out: string[] = [];
    const imports = new Map([...src.matchAll(/^import (\w+) from "\.\.\/\.\.\/public\/cars\/([^"]+)";$/gm)].map((m) => [m[1], m[2]]));
    const entries = new Map(
      [...src.matchAll(/^ {2}"([a-z0-9-]+)": \{ tile: bare\((\w+)\), hero: bare\((\w+)\) \},$/gm)].map((m) => [m[1], [m[2], m[3]]]),
    );
    for (const slug of slugs) {
      const e = entries.get(slug);
      if (!e) { out.push(`${slug}: no entry`); continue; }
      if (imports.get(e[0]) !== `${slug}-tile.jpg`) out.push(`${slug}: tile is ${imports.get(e[0]) ?? "not imported"}`);
      if (imports.get(e[1]) !== `${slug}.png`) out.push(`${slug}: hero is ${imports.get(e[1]) ?? "not imported"}`);
    }
    for (const slug of entries.keys()) if (!slugs.includes(slug)) out.push(`${slug}: entry for a car not in the garage`);
    return out;
  }

  it("every garage car has both, each pointing at its own file", () => {
    expect(sourceProblems(source, garage.map((c) => c.slug))).toEqual([]);
    expect(Object.keys(carImageAssets).sort()).toEqual(garage.map((c) => c.slug).sort());
  });

  it("the imports are the files cars.ts, the share card and build-car-hero.py use", () => {
    for (const c of garage) {
      for (const [file, path] of [[`${c.slug}-tile.jpg`, c.image.preview.src], [`${c.slug}.png`, c.image.hero.src]]) {
        expect(path).toBe(`/cars/${file}`);
        expect(source).toContain(`from "../../public/cars/${file}";`);
        expect(existsSync(join(process.cwd(), "public", "cars", file)), file).toBe(true);
      }
    }
  });

  it("a car added without its imports is caught — the SLS, car 16, removed", () => {
    const withoutSls = source
      .split("\n")
      .filter((l) => !l.includes("mercedes-sls-amg") && !l.includes("mercedesSlsAmg"))
      .join("\n");
    expect(sourceProblems(withoutSls, garage.map((c) => c.slug))).toEqual(["mercedes-sls-amg: no entry"]);
  });

  it("a tile pointed at another car's file is caught", () => {
    const swapped = source.replace(
      'import bugattiChironTile from "../../public/cars/bugatti-chiron-tile.jpg";',
      'import bugattiChironTile from "../../public/cars/mclaren-senna-tile.jpg";',
    );
    expect(swapped).not.toBe(source);
    expect(sourceProblems(swapped, garage.map((c) => c.slug))).toEqual(["bugatti-chiron: tile is mclaren-senna-tile.jpg"]);
  });

  it("carImages() refuses a car it has no imports for", () => {
    expect(() => carImages("mercedes-g63")).toThrow(/add its tile and hero to app\/lib\/carImageAssets\.ts/);
  });
});

describe("only src, width and height reach the page", () => {
  it("the import carries a blur placeholder; what the pages get does not", () => {
    expect(rawChironTile).toHaveProperty("blurDataURL");
    for (const c of garage) {
      const { tile, hero } = carImages(c.slug);
      expect(Object.keys(tile).sort(), c.slug).toEqual(["height", "src", "width"]);
      expect(Object.keys(hero).sort(), c.slug).toEqual(["height", "src", "width"]);
      // The render sites pass cars.ts's sizes explicitly; they are the files' own.
      expect([tile.width, tile.height]).toEqual([c.image.preview.width, c.image.preview.height]);
      expect([hero.width, hero.height]).toEqual([c.image.hero.width, c.image.hero.height]);
    }
  });
});
