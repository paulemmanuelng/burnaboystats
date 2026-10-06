import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent, screen } from "@testing-library/react";
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
import ChartsPage from "../app/records/charts/page";
import CertificationsPage from "../app/certifications/page";
import ChartExplorer from "../app/components/ChartExplorer";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { coverTile } from "../app/lib/coverTile";
import { monogramFor } from "../app/lib/covers";
import { spotifyImage } from "../app/lib/spotifyImage";
import mobileCharts from "../app/components/mobileOfficialCharts.module.css";
import mobileCerts from "../app/components/mobileCerts.module.css";
import charts from "../app/records/charts/charts.module.css";
import certs from "../app/certifications/certifications.module.css";

/**
 * A release with no art on file draws its initial, never an empty square
 * (V-afrobeats-02 / V-records-11, debug pass 5 Oct 2026).
 *
 * The charts and certs rows painted a missing cover with the 1x1 blank pixel,
 * so the tile was an empty bordered box: 14 of CKay's 32 chart rows, Wizkid's
 * "System" and "Glow in the Dark" cert cards, 11 rows on /records/charts. The
 * live boards drew the same releases as a gold monogram, so one release looked
 * broken on one board and intentional on the next. Every tile now takes the
 * live boards' treatment (lib/coverTile.ts), and every stylesheet paints it.
 *
 * Checked against the served markup of the real pages, every board artist,
 * both layouts, and against the real stylesheets.
 */

const ROOT = join(__dirname, "..");

/** Rows exactly as production served them on 6 Oct 2026 (curl of
 *  burnaboystats.com/afrobeats/ckay/charts and /afrobeats/wizkid). */
const SHIPPED_MOBILE_CHART_ROW =
  '<div class="mobileOfficialCharts-module__6EDslq__rowCover" aria-hidden="true" style="background-image:url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)"></div>';
const SHIPPED_CERT_CARD =
  '<span class="certifications-module__tiv2Qa__certCover" aria-hidden="true" style="background-image:url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)"></span>';

const SLOT = {
  mobileCharts: { label: "MobileOfficialCharts row", css: "app/components/mobileOfficialCharts.module.css", name: "rowCover", cls: mobileCharts.rowCover },
  chartCards: { label: "ChartExplorer card", css: "app/records/charts/charts.module.css", name: "rowCover", cls: charts.rowCover },
  chartTable: { label: "ChartExplorer table", css: "app/records/charts/charts.module.css", name: "tCover", cls: charts.tCover },
  mobileCerts: { label: "MobileCerts row", css: "app/components/mobileCerts.module.css", name: "rowCover", cls: mobileCerts.rowCover },
  certCards: { label: "CertExplorer card", css: "app/certifications/certifications.module.css", name: "certCover", cls: certs.certCover },
} as const;
type Slot = (typeof SLOT)[keyof typeof SLOT];
const ALL: readonly Slot[] = Object.values(SLOT);
const CHART_SLOTS = [SLOT.mobileCharts, SLOT.chartCards, SLOT.chartTable];
const CERT_SLOTS = [SLOT.mobileCerts, SLOT.certCards];

/** Why a cover tile is wrong, or null. */
function tileProblem(tile: Element): string | null {
  const style = tile.getAttribute("style") ?? "";
  const letter = tile.getAttribute("data-letter");
  if (/url\(\s*["']?data:image\//.test(style)) return "no art painted as a blank pixel — an empty bordered square";
  if (/url\(\s*["']?\)/.test(style)) return "empty url() — resolves against the document";
  if (letter === null) return /url\(/.test(style) ? null : "a tile with neither art nor a letter";
  if (/url\(/.test(style)) return "a monogram tile that also carries art";
  return [...letter].length === 1 && letter.trim() ? null : `monogram is not one character: "${letter}"`;
}

function tiles(html: string, slot: Slot) {
  const host = document.createElement("div");
  host.innerHTML = html;
  return [...host.querySelectorAll(`.${slot.cls}`)];
}

function check(el: React.ReactElement, slots: readonly Slot[]) {
  const html = renderToStaticMarkup(el);
  let letters = 0;
  for (const slot of slots) {
    const found = tiles(html, slot);
    const bad = found.map((t) => tileProblem(t)).filter(Boolean);
    expect([...new Set(bad)], slot.label).toEqual([]);
    letters += found.filter((t) => t.hasAttribute("data-letter")).length;
  }
  return letters;
}

/** Every declaration the stylesheet gives exactly `selector`. */
function rule(cssFile: string, selector: string): Record<string, string> {
  const css = readFileSync(join(ROOT, cssFile), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Record<string, string> = {};
  for (const r of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (!r[1].split(",").map((s) => s.trim()).includes(selector)) continue;
    for (const d of r[2].split(";")) {
      const i = d.indexOf(":");
      if (i > 0) out[d.slice(0, i).trim()] = d.slice(i + 1).trim();
    }
  }
  return out;
}

describe("the guard itself", () => {
  it("rejects the rows production served", () => {
    for (const html of [SHIPPED_MOBILE_CHART_ROW, SHIPPED_CERT_CARD]) {
      const host = document.createElement("div");
      host.innerHTML = html;
      expect(tileProblem(host.firstElementChild!)).toMatch(/blank pixel/);
    }
  });
});

describe("coverTile", () => {
  it("draws the art when there is some", () => {
    const url = "https://i.scdn.co/image/ab67616d0000b273d98e997eaad5f503b9e1f2f2";
    expect(coverTile(url, "Ye", 102)).toEqual({
      style: { backgroundImage: "url(https://i.scdn.co/image/ab67616d00001e02d98e997eaad5f503b9e1f2f2)" },
    });
    expect(coverTile(url, "Ye", 64, spotifyImage)).toEqual({
      style: { backgroundImage: "url(https://i.scdn.co/image/ab67616d00004851d98e997eaad5f503b9e1f2f2)" },
    });
  });

  it("draws the initial, and no style, when there is none", () => {
    expect(coverTile(undefined, "emotions", 114)).toEqual({ "data-letter": "E" });
    expect(coverTile("", "Safer", 102)).toEqual({ "data-letter": monogramFor("Safer") });
  });
});

describe("every stylesheet paints the letter, as the live boards do", () => {
  it.each(ALL)("$label", (slot) => {
    const tile = rule(slot.css, `.${slot.name}[data-letter]`);
    expect(tile.color, `${slot.css}: .${slot.name}[data-letter] has no colour`).toBe("var(--gold)");
    expect(tile["justify-content"]).toBe("center");
    expect(tile["font-size"]).toMatch(/^\d+px$/);
    expect(Number.parseInt(tile["font-size"], 10)).toBeGreaterThanOrEqual(11);
    expect(rule(slot.css, `.${slot.name}[data-letter]::before`).content).toBe("attr(data-letter)");
  });
});

const withCharts = afrobeatsArtists.filter((a) => a.charts.length > 0);

describe("no row draws an empty square", () => {
  it.each(withCharts.map((a) => a.slug))("/afrobeats/%s/charts — both layouts", async (slug) => {
    const page = await ArtistChartsPage({ params: Promise.resolve({ artist: slug }) });
    check(page, CHART_SLOTS);
  });

  it.each(afrobeatsArtists.map((a) => a.slug))("/afrobeats/%s — both layouts", async (slug) => {
    const page = await ArtistPage({ params: Promise.resolve({ artist: slug }) });
    check(page, CERT_SLOTS);
  });

  it("the boards the finding named do draw monograms (not checking nothing)", async () => {
    const ckay = await ArtistChartsPage({ params: Promise.resolve({ artist: "ckay" }) });
    expect(check(ckay, CHART_SLOTS)).toBeGreaterThan(0);
    const wizkid = await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) });
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(wizkid);
    const letters = [...host.querySelectorAll(`.${certs.certCover}[data-letter]`)];
    expect(letters.length).toBeGreaterThan(0);
  });

  it("/records/charts and /certifications", () => {
    expect(check(<ChartsPage />, CHART_SLOTS)).toBeGreaterThan(0);
    check(<CertificationsPage />, CERT_SLOTS);
  });

  it("the table view's tile too, once a reader switches to it", () => {
    const { container, unmount } = render(
      <ChartExplorer
        albums={[]}
        singles={[{ title: "Emotions", entries: [{ c: "NG", peak: 3 }] }]}
        features={[]}
        countries={{ NG: { name: "Nigeria", flag: "🇳🇬", body: "TurnTable" } }}
        covers={{}}
      />,
    );
    const card = container.querySelector(`.${charts.rowCover}`)!;
    expect(card.getAttribute("data-letter")).toBe("E");
    expect(card.hasAttribute("style")).toBe(false);
    fireEvent.click(screen.getByRole("button", { name: "Table" }));
    const cell = container.querySelector(`.${charts.tCover}`)!;
    expect(cell, "the table view did not render").toBeTruthy();
    expect(tileProblem(cell)).toBeNull();
    expect(cell.getAttribute("data-letter")).toBe("E");
    unmount();
  });
});
