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

import ArtistPage from "../app/afrobeats/[artist]/page";
import ArtistChartsPage from "../app/afrobeats/[artist]/charts/page";
import ArtistLivePage from "../app/afrobeats/[artist]/live/page";
import ChartsPage from "../app/records/charts/page";
import LiveChartsPage from "../app/live-charts/page";
import CertificationsPage from "../app/certifications/page";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { hasLiveBoard } from "../app/data/liveBoards";
import mobileCharts from "../app/components/mobileOfficialCharts.module.css";
import mobileLive from "../app/components/mobileLiveCharts.module.css";
import mobileCerts from "../app/components/mobileCerts.module.css";
import charts from "../app/records/charts/charts.module.css";
import certs from "../app/certifications/certifications.module.css";

/**
 * A row cover is fetched at the size its tile paints — three device pixels
 * per CSS pixel, and no more.
 *
 * The board artists' art is Deezer's 500px and Apple's 300px files, and the
 * five row-cover tiles (34-40px) put those URLs into `url()` as they were.
 * On 23 Sep 2026 that was 2.9 MB of /afrobeats/wizkid/charts' image bytes on a
 * phone for 0.3 MB of pixels, and 1.0 MB of /live's for 0.1 MB — on the board's
 * worst LCP route. Both CDNs render any square size behind a segment in the
 * URL, so artAt() now asks for 3x the box: the same pixels at every density up
 * to 3, a tenth of the bytes.
 *
 * Checked against the served markup of the real pages, both layouts, every
 * board artist, and the box widths read from the real stylesheets — so a tile
 * that grows in CSS without its URL following fails here, not on a phone.
 * Spotify's ladder is fixed, so its covers must sit on the smallest rung that
 * still covers 3x the box; for Burna Boy's album covers that is the same 300
 * rung they were always served at.
 */

const ROOT = join(__dirname, "..");

/** The exact style attributes production served on 23 Sep 2026, before the
 *  fix: a Wizkid row on /afrobeats/wizkid/charts (mobile, 34px tile) and a
 *  Wizkid card on /afrobeats/wizkid (desktop, 38px tile). */
const SHIPPED_DEEZER_ROW =
  "background-image:url(https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg)";
const SHIPPED_APPLE_CARD =
  "background-image:url(https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ad/12/b9/ad12b9d8-e896-5e36-6ef9-cec448a586e0/196872578911.jpg/300x300bb.jpg)";
/** What artAt's own `if (!url) return url;` would have written for a row with
 *  no art on file — the shape #159 removed from spotifyImage. */
const EMPTY_URL_ROW = "background-image:url()";

// Spotify's fixed ladder (spotifyImage.ts): album covers and artist photos.
const SPOTIFY_RUNGS: Record<string, number> = {
  ab67616d00004851: 64,
  ab67616d00001e02: 300,
  ab67616d0000b273: 640,
  ab6761610000f178: 160,
  ab67616100005174: 320,
  ab6761610000e5eb: 640,
};
const ALBUM_LADDER = [64, 300, 640];
const ARTIST_LADDER = [160, 320, 640];

type Served =
  | { kind: "empty" }
  | { kind: "blank" }
  | { kind: "sized"; cdn: "deezer" | "apple"; px: number }
  | { kind: "spotify"; px: number; ladder: number[] }
  | { kind: "unknown"; url: string };

function served(style: string): Served {
  const m = style.match(/background-image:\s*url\(([^)]*)\)/);
  const url = (m?.[1] ?? "").replace(/^["']|["']$/g, "");
  if (!url) return { kind: "empty" };
  if (url.startsWith("data:image/")) return { kind: "blank" };
  const dz = url.match(/^https:\/\/cdn-images\.dzcdn\.net\/images\/[^/]+\/[0-9a-f]+\/(\d+)x(\d+)-[^/]*\.jpg$/);
  if (dz) return { kind: "sized", cdn: "deezer", px: Math.min(+dz[1], +dz[2]) };
  const ap = url.match(/^https:\/\/is1-ssl\.mzstatic\.com\/image\/thumb\/.+\/(\d+)x(\d+)bb\.jpg$/);
  if (ap) return { kind: "sized", cdn: "apple", px: Math.min(+ap[1], +ap[2]) };
  const sp = url.match(/^https:\/\/i\.scdn\.co\/image\/([0-9a-f]{16})/);
  if (sp && SPOTIFY_RUNGS[sp[1]]) {
    const px = SPOTIFY_RUNGS[sp[1]];
    return { kind: "spotify", px, ladder: sp[1].startsWith("ab67616d") ? ALBUM_LADDER : ARTIST_LADDER };
  }
  return { kind: "unknown", url };
}

/** Why a served cover is wrong for a tile `box` CSS px wide, or null. */
function problem(style: string, box: number): string | null {
  const s = served(style);
  const want = 3 * box;
  switch (s.kind) {
    case "empty":
      return "empty url() — resolves against the document and re-fetches the page";
    case "blank":
      return null; // no art on file: the 1x1, the sized box stays empty
    case "unknown":
      return `unrecognised art host, cannot tell what size it is: ${s.url}`;
    case "sized":
      if (s.px < want) return `${s.cdn} ${s.px}px is soft on a ${box}px tile at 3x (wants ${want})`;
      if (s.px > 4 * box) return `${s.cdn} ${s.px}px for a ${box}px tile — fetch ${want}`;
      return null;
    case "spotify": {
      const best = s.ladder.find((w) => w >= want) ?? s.ladder[s.ladder.length - 1];
      return s.px === best ? null : `Spotify ${s.px} rung on a ${box}px tile — the ${best} rung covers 3x`;
    }
  }
}

/** The widest `width:` any rule gives exactly `.name` in a stylesheet. */
function boxWidth(cssFile: string, name: string): number {
  const css = readFileSync(join(ROOT, cssFile), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const widths: number[] = [];
  for (const rule of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selectors = rule[1].split(",").map((x) => x.trim());
    if (!selectors.includes(`.${name}`)) continue;
    for (const w of rule[2].matchAll(/(?:^|;|\s)width:\s*(\d+(?:\.\d+)?)px/g)) widths.push(Number(w[1]));
  }
  if (widths.length === 0) throw new Error(`no px width for .${name} in ${cssFile}`);
  return Math.max(...widths);
}

const SLOTS = {
  mobileCharts: { label: "MobileOfficialCharts row", css: "app/components/mobileOfficialCharts.module.css", name: "rowCover", cls: mobileCharts.rowCover },
  chartCards: { label: "ChartExplorer card", css: "app/records/charts/charts.module.css", name: "rowCover", cls: charts.rowCover },
  mobileLive: { label: "MobileLiveCharts row", css: "app/components/mobileLiveCharts.module.css", name: "rowCover", cls: mobileLive.rowCover },
  mobileCerts: { label: "MobileCerts row", css: "app/components/mobileCerts.module.css", name: "rowCover", cls: mobileCerts.rowCover },
  certCards: { label: "CertExplorer card", css: "app/certifications/certifications.module.css", name: "certCover", cls: certs.certCover },
} as const;
type Slot = (typeof SLOTS)[keyof typeof SLOTS];

/** Every cover style a slot serves in a page's server HTML. The live rows
 *  with no art at all render a monogram tile instead, with no style. */
function coversIn(el: React.ReactElement, slot: Slot): string[] {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return [...host.querySelectorAll(`.${slot.cls}`)]
    .filter((n) => !n.hasAttribute("data-letter"))
    .map((n) => n.getAttribute("style") ?? "");
}

function check(styles: string[], slot: Slot) {
  const box = boxWidth(slot.css, slot.name);
  const bad = [...new Set(styles)].map((s) => [s, problem(s, box)]).filter(([, p]) => p);
  expect(bad, `${slot.label} (${box}px tile)`).toEqual([]);
  return styles.map(served);
}

describe("the guard itself", () => {
  it("reads the real tile sizes", () => {
    // If a rule moves or a unit changes, every size below is judged against
    // the wrong box — fail loudly instead.
    expect(boxWidth(SLOTS.mobileCharts.css, "rowCover")).toBe(34);
    expect(boxWidth(SLOTS.mobileCerts.css, "rowCover")).toBe(34);
    expect(boxWidth(SLOTS.mobileLive.css, "rowCover")).toBe(40);
    expect(boxWidth(SLOTS.chartCards.css, "rowCover")).toBe(38);
    expect(boxWidth(SLOTS.certCards.css, "certCover")).toBe(38);
  });

  it("rejects the covers production served before the fix", () => {
    expect(problem(SHIPPED_DEEZER_ROW, 34)).toMatch(/deezer 500px for a 34px tile/);
    expect(problem(SHIPPED_APPLE_CARD, 38)).toMatch(/apple 300px for a 38px tile/);
  });

  it("rejects an empty url()", () => {
    expect(problem(EMPTY_URL_ROW, 34)).toMatch(/empty url/);
  });

  it("rejects a cover sized below 3x, which would soften it on a 3x phone", () => {
    expect(problem(SHIPPED_DEEZER_ROW.replace("500x500", "68x68"), 34)).toMatch(/soft/);
  });
});

const boardArtists = afrobeatsArtists;
const withCharts = boardArtists.filter((a) => a.charts.length > 0);
const withLive = boardArtists.filter((a) => hasLiveBoard(a.slug));

describe("board pages ask the CDN for the tile's size", () => {
  it("covers every board artist", () => {
    expect(boardArtists.length).toBeGreaterThanOrEqual(15);
    expect(withCharts.length).toBeGreaterThan(0);
    expect(withLive.length).toBeGreaterThan(0);
  });

  it.each(withCharts.map((a) => a.slug))("/afrobeats/%s/charts — both layouts", async (slug) => {
    const page = await ArtistChartsPage({ params: Promise.resolve({ artist: slug }) });
    for (const slot of [SLOTS.mobileCharts, SLOTS.chartCards]) {
      const kinds = check(coversIn(page, slot), slot);
      expect(kinds.length, `${slot.label}: no covers found — checking nothing`).toBeGreaterThan(0);
    }
  });

  it.each(withLive.map((a) => a.slug))("/afrobeats/%s/live — phone rows", async (slug) => {
    const page = await ArtistLivePage({ params: Promise.resolve({ artist: slug }) });
    check(coversIn(page, SLOTS.mobileLive), SLOTS.mobileLive);
  });

  it.each(boardArtists.map((a) => a.slug))("/afrobeats/%s — both layouts", async (slug) => {
    const page = await ArtistPage({ params: Promise.resolve({ artist: slug }) });
    for (const slot of [SLOTS.mobileCerts, SLOTS.certCards]) check(coversIn(page, slot), slot);
  });

  it("really does serve Deezer and Apple art in these slots", async () => {
    // The premise: were every board cover Spotify, the sized-CDN branch above
    // would have judged nothing.
    const page = await ArtistChartsPage({ params: Promise.resolve({ artist: "wizkid" }) });
    const kinds = coversIn(page, SLOTS.mobileCharts).map(served);
    expect(kinds.some((k) => k.kind === "sized" && k.cdn === "deezer")).toBe(true);
    const home = await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) });
    expect(coversIn(home, SLOTS.certCards).map(served).some((k) => k.kind === "sized" && k.cdn === "apple")).toBe(true);
  });
});

// The same five tiles carry his catalogue. His album art is Spotify's and does
// not move. The two dozen features on other artists' records (covers.ts) are
// Deezer and Apple files pinned at 100px, just under 3x these tiles, so they
// now come at 102-120px: a kilobyte more apiece, and no longer soft on a 3x
// phone. The shipped call sites fail the check above on exactly those rows.
describe("Burna Boy's own pages keep their Spotify covers byte-identical", () => {
  it.each([
    ["/records/charts", () => <ChartsPage />, [SLOTS.mobileCharts, SLOTS.chartCards]],
    ["/live-charts", () => <LiveChartsPage />, [SLOTS.mobileLive]],
    ["/certifications", () => <CertificationsPage />, [SLOTS.mobileCerts, SLOTS.certCards]],
  ] as const)("%s", (_route, page, slots) => {
    for (const slot of slots) {
      const kinds = check(coversIn(page(), slot), slot);
      // His catalogue is Spotify album art, served at the 300 rung before and
      // after — byte-identical URLs.
      const spotify = kinds.filter((k) => k.kind === "spotify");
      expect(spotify.length, `${slot.label}: no Spotify covers — checking nothing`).toBeGreaterThan(0);
      expect(spotify.every((k) => k.px === 300)).toBe(true);
    }
  });
});
