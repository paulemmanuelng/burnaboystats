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

/**
 * A phone row's cover art is not fetched until its row nears the screen.
 *
 * The three phone lists (charts, live charts, certifications) paint each
 * release's art as a CSS background on a 34-40px tile, and a background is
 * fetched as soon as its element is styled, however far down the page. On 23
 * Sep 2026 a phone opening /records/charts downloaded all 37 of its covers
 * (466 KB) and /live-charts all 23 (403 KB) before the reader scrolled at all.
 *
 * Each tile now sits in a .coverSlot with content-visibility: auto. The
 * browser does not style a skipped slot's contents, so the tile's url() waits
 * until the slot is about 1.5 screens from the viewport; in a local build
 * /records/charts starts with 7 of its 37 covers. The tile itself is
 * unchanged, which is the point: a lazy <img> would defer the same covers but
 * not draw the same pixels. The background repeats under the tile's
 * translucent 1px border, and an <img> would leave --bg-soft there (up to
 * 207/255 per channel on the ring in a Chrome screenshot, 23 Sep 2026).
 *
 * Checked against the served markup of the real pages, every board artist,
 * and against the real stylesheets, so a slot that stops matching its tile's
 * box, stops deferring, or picks up the art itself fails here.
 */

const ROOT = join(__dirname, "..");

/** One row from each screen exactly as production served it on 23 Sep 2026
 *  (curl of burnaboystats.com), before the slot: the tile sits straight in
 *  the row, so its art is fetched on arrival wherever the row is. */
const SHIPPED_CHARTS_ROW =
  '<div class="mobileOfficialCharts-module__6EDslq__rowTop"><div class="mobileOfficialCharts-module__6EDslq__rowCover" aria-hidden="true" style="background-image:url(https://i.scdn.co/image/ab67616d00001e02d98e997eaad5f503b9e1f2f2)"></div>';
const SHIPPED_LIVE_ROW =
  '<span class="mobileLiveCharts-module__82877G__rowTop"><span class="mobileLiveCharts-module__82877G__rowCover" style="background-image:url(https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4)"></span>';
const SHIPPED_CERTS_ROW =
  '<div class="mobileCerts-module__1wnzXW__rowTop"><span class="mobileCerts-module__1wnzXW__rank">01</span><span class="mobileCerts-module__1wnzXW__rowCover" aria-hidden="true" style="background-image:url(https://i.scdn.co/image/ab67616d00001e02d98e997eaad5f503b9e1f2f2)"></span>';

const SCREENS = {
  charts: { label: "MobileOfficialCharts", css: "app/components/mobileOfficialCharts.module.css", cls: mobileCharts },
  live: { label: "MobileLiveCharts", css: "app/components/mobileLiveCharts.module.css", cls: mobileLive },
  certs: { label: "MobileCerts", css: "app/components/mobileCerts.module.css", cls: mobileCerts },
} as const;
type Screen = (typeof SCREENS)[keyof typeof SCREENS];

/** Every declaration the stylesheet gives exactly `.name`, later rules winning. */
function rule(cssFile: string, name: string): Record<string, string> {
  const css = readFileSync(join(ROOT, cssFile), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Record<string, string> = {};
  for (const r of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (!r[1].split(",").map((s) => s.trim()).includes(`.${name}`)) continue;
    for (const d of r[2].split(";")) {
      const i = d.indexOf(":");
      if (i > 0) out[d.slice(0, i).trim()] = d.slice(i + 1).trim();
    }
  }
  return out;
}

/** Why a tile carrying art would be fetched before its row nears the screen,
 *  or null. `slotClass` is the class the screen's slot carries. */
function deferProblem(tile: Element, slotClass: string): string | null {
  const slot = tile.parentElement;
  if (!slot || !slot.classList.contains(slotClass)) {
    return "cover tile sits straight in its row — its url() is fetched on arrival, however far down";
  }
  if (/url\(/.test(slot.getAttribute("style") ?? "")) {
    return "the slot carries the art itself — a skipped element's own background still loads";
  }
  if (slot.children.length !== 1) return "the slot holds more than the tile";
  return null;
}

/** Every tile with art on file in a page's server HTML, with its problem. The
 *  live rows with no art render a monogram tile instead, with no url(). */
function tilesIn(el: React.ReactElement, screen: Screen) {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return [...host.querySelectorAll(`.${screen.cls.rowCover}`)]
    .filter((n) => /url\(/.test(n.getAttribute("style") ?? ""))
    .map((n) => ({ tile: n, problem: deferProblem(n, screen.cls.coverSlot) }));
}

function check(el: React.ReactElement, screen: Screen) {
  const tiles = tilesIn(el, screen);
  expect(tiles.length, `${screen.label}: no cover tiles found — checking nothing`).toBeGreaterThan(0);
  const bad = [...new Set(tiles.map((t) => t.problem).filter(Boolean))];
  expect(bad, screen.label).toEqual([]);
  // The art stays a background on the unchanged tile: that is what keeps the
  // pixels identical, border ring included. An <img> there would not.
  expect(tiles.every((t) => t.tile.tagName !== "IMG" && t.tile.querySelector("img") === null)).toBe(true);
}

describe("the guard itself", () => {
  it.each([
    ["charts", SHIPPED_CHARTS_ROW, "mobileOfficialCharts-module__6EDslq__coverSlot"],
    ["live", SHIPPED_LIVE_ROW, "mobileLiveCharts-module__82877G__coverSlot"],
    ["certs", SHIPPED_CERTS_ROW, "mobileCerts-module__1wnzXW__coverSlot"],
  ])("rejects the %s row production served before the slot", (_name, html, slotClass) => {
    const host = document.createElement("div");
    host.innerHTML = html;
    const tile = host.querySelector('[class*="__rowCover"]')!;
    expect(tile).toBeTruthy();
    expect(deferProblem(tile, slotClass)).toMatch(/straight in its row/);
  });

  it("reads the real tile rules", () => {
    // If the parser stops finding the tile, every comparison below is against
    // nothing — fail loudly instead.
    expect(rule(SCREENS.charts.css, "rowCover").width).toBe("34px");
    expect(rule(SCREENS.certs.css, "rowCover").width).toBe("34px");
    expect(rule(SCREENS.live.css, "rowCover").width).toBe("40px");
    expect(rule(SCREENS.live.css, "rowCover")["background-size"]).toBe("cover");
  });
});

describe("each screen's slot defers the art and keeps the tile's place", () => {
  it.each(Object.values(SCREENS))("$label", (screen) => {
    const slot = rule(screen.css, "coverSlot");
    const tile = rule(screen.css, "rowCover");
    // content-visibility: auto is what holds the tile's styles, and so its
    // url(), until the slot nears the viewport.
    expect(slot["content-visibility"]).toBe("auto");
    // A skipped slot is laid out with no contents, so its size must come
    // from itself: the tile's box, or the row reflows as it scrolls in.
    expect(slot.width).toBe(tile.width);
    expect(slot.height).toBe(tile.height);
    // The slot is the row's flex item now, so it carries the tile's place.
    expect(slot.flex).toBe(tile.flex);
    expect(slot["align-self"]).toBe(tile["align-self"]);
    // And it paints nothing: the tile draws exactly what it drew before.
    for (const prop of Object.keys(slot)) expect(prop, `.coverSlot sets ${prop}`).not.toMatch(/^(background|border|padding|margin|box-shadow|outline)/);
    // The tile's own box is sized, so it fills the slot exactly (a span
    // becomes a flex item of the slot, which gives it a block box).
    expect(slot.display).toBe("flex");
  });
});

const boardArtists = afrobeatsArtists;
const withCharts = boardArtists.filter((a) => a.charts.length > 0);
const withLive = boardArtists.filter((a) => hasLiveBoard(a.slug));

describe("Burna Boy's phone lists hold every cover in a slot", () => {
  it("/records/charts", () => check(<ChartsPage />, SCREENS.charts));
  it("/live-charts", () => check(<LiveChartsPage />, SCREENS.live));
  it("/certifications", () => check(<CertificationsPage />, SCREENS.certs));
});

describe("so do the board artists' pages", () => {
  it("covers every board artist", () => {
    expect(boardArtists.length).toBeGreaterThanOrEqual(15);
    expect(withCharts.length).toBeGreaterThan(0);
    expect(withLive.length).toBeGreaterThan(0);
  });

  it.each(withCharts.map((a) => a.slug))("/afrobeats/%s/charts", async (slug) => {
    check(await ArtistChartsPage({ params: Promise.resolve({ artist: slug }) }), SCREENS.charts);
  });

  it.each(withLive.map((a) => a.slug))("/afrobeats/%s/live", async (slug) => {
    check(await ArtistLivePage({ params: Promise.resolve({ artist: slug }) }), SCREENS.live);
  });

  it.each(boardArtists.map((a) => a.slug))("/afrobeats/%s", async (slug) => {
    check(await ArtistPage({ params: Promise.resolve({ artist: slug }) }), SCREENS.certs);
  });
});
