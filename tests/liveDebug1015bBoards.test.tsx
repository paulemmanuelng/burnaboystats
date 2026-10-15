import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../app/afrobeats/[artist]/page";
import AfrobeatsPage from "../app/afrobeats/page";
import { GET as llmsTxt } from "../app/llms.txt/route";
import { GET as afrobeatsApi } from "../app/api/v1/afrobeats/route";
import { CERTS_VERIFIED_ON } from "../app/data/certifications";
import { AFROBEATS_LAST_FULL_SWEEP } from "../app/data/afrobeats";
import { opponentOf } from "../app/lib/headToHead";
import { artistBySlug } from "../app/data/afrobeats";
import ChartExplorer from "../app/components/ChartExplorer";
import charts from "../app/records/charts/charts.module.css";
import { decl, read, rules } from "./fixtures/cssRules";
import { readdirSync } from "node:fs";
import LiveReleaseBlock from "../app/components/LiveReleaseBlock";
import liveStyles from "../app/live-charts/liveCharts.module.css";
import { COUNTRY_NAME_FIXES, normaliseCountryNames } from "../scripts/stats-lib.mjs";

/**
 * The live debug pass of 15 Oct 2026 (part 2), certs-boards lane (/afrobeats,
 * /afrobeats/[artist], its charts and live pages). One block per finding; each
 * negative control is what the site shipped (origin/main 6062f806), verbatim.
 */

const text = (h: string) =>
  h
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&rsquo;/g, "’")
    .replace(/ /g, " ")
    .replace(/\s+/g, " ");
const artist = async (slug: string) => renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
const long = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// ── cb-1 ────────────────────────────────────────────────────────────────────

describe("cb-1: Burna Boy's half of the board names the day his registers were read, not 'daily'", () => {
  const DAILY = /Burna Boy(?:'|’)s (?:own )?(?:figures|pages)(?: update)? daily/;
  const verified = long(CERTS_VERIFIED_ON);
  const sweep = long(AFROBEATS_LAST_FULL_SWEEP);

  it("the head-to-head note on a page whose rival is Burna Boy (/afrobeats/wizkid)", async () => {
    expect(opponentOf(artistBySlug("wizkid")!).isBurna).toBe(true);
    const t = text(await artist("wizkid"));
    expect(t).toContain(
      `Both counted identically. Burna Boy's registers were last verified ${verified}; the last full board sweep re-read every register on ${sweep}.`,
    );
    expect(t).not.toMatch(DAILY);
  });

  it("the hub's cadence line, both layouts (/afrobeats)", () => {
    const t = text(renderToStaticMarkup(<AfrobeatsPage />));
    expect(t).toContain(`The board is re-read at each register sweep — last on ${sweep}. Burna Boy's registers were last verified ${verified}.`);
    expect(t).toContain(`Re-read at each sweep, last ${sweep} · Burna Boy’s registers last verified ${verified}`);
    expect(t).not.toMatch(DAILY);
  });

  it("llms.txt and /api/v1/afrobeats say the same two dates", async () => {
    const llms = await llmsTxt().text();
    expect(llms.replace(/\s+/g, " ")).toContain(
      `Re-read at each register sweep, the last full one on ${sweep}; Burna Boy's registers were last verified ${verified}.`,
    );
    const api = (await afrobeatsApi().json()) as { description: string };
    expect(api.description).toContain(
      `Re-read at each register sweep, the last full one on ${sweep}; Burna Boy's registers were last verified ${verified}.`,
    );
    expect(llms).not.toMatch(DAILY);
    expect(api.description).not.toMatch(DAILY);
  });

  it("negative control: the four lines the site shipped", () => {
    for (const shipped of [
      "Both counted identically. Burna Boy's figures update daily; the last full board sweep re-read every register on 2 October 2026.",
      "The board is re-read at each register sweep — last on 2 October 2026. Burna Boy's own pages update daily.",
      "Re-read at each sweep, last 2 October 2026 · Burna Boy’s pages daily",
      "side. Re-read at each register sweep; Burna Boy's own pages update daily.",
      "Re-read at each register sweep, where Burna Boy's own pages update daily.",
    ]) {
      expect(shipped).toMatch(DAILY);
    }
  });
});

// ── cb-2 ────────────────────────────────────────────────────────────────────

describe("cb-2: the chart table's cover tile sits beside the song, not above it", () => {
  const CSS = read("app/records/charts/charts.module.css");
  /** The desktop (unscoped) value of `prop` on `.name`, last rule wins. */
  const base = (css: string, name: string, prop: string) => {
    let v: string | undefined;
    for (const r of rules(css)) {
      if (r.media !== null || !r.selector.split(",").map((x) => x.trim()).includes(`.${name}`)) continue;
      v = decl(r.body, prop) ?? v;
    }
    return v;
  };
  /** The module name behind a rendered class ("_tSongCell_b53f81" → "tSongCell"). */
  const nameOf = (el: Element) => [...el.classList].map((c) => c.match(/^_(.+)_[0-9a-f]+$/)?.[1] ?? c)[0];
  /**
   * Whether the title lays out beside the tile: the tile's parent must be a
   * row flex container holding the title. Otherwise the block-level title
   * after an inline-block tile starts a line of its own, under the tile.
   */
  function beside(cover: Element, css: string, map: Record<string, string>) {
    const parent = cover.parentElement!;
    const n = nameOf(parent);
    const display = (n && base(css, n, "display")) ?? (parent.tagName === "TD" ? "table-cell" : "block");
    const dir = (n && base(css, n, "flex-direction")) ?? "row";
    const title = parent.querySelector(`.${map.tSong}`);
    return /^(inline-)?flex$/.test(display) && dir === "row" && title !== null;
  }

  it("every row of the Table view, on a board page's data", () => {
    const { container, unmount } = render(
      <ChartExplorer
        albums={[]}
        singles={[
          { title: "Free Mind", credit: "Tems", entries: [{ c: "NG", peak: 1 }, { c: "UK", peak: 40 }] },
          { title: "Higher", entries: [{ c: "NG", peak: 3 }] },
        ]}
        features={[]}
        countries={{
          NG: { name: "Nigeria", flag: "🇳🇬", body: "TurnTable" },
          UK: { name: "United Kingdom", flag: "🇬🇧", body: "OCC" },
        }}
        covers={{}}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Table" }));
    const cells = [...container.querySelectorAll(`td.${charts.tdSong}`)];
    expect(cells.length).toBe(3);
    for (const td of cells) {
      const cover = td.querySelector(`.${charts.tCover}`)!;
      expect(cover).toBeTruthy();
      expect(beside(cover, CSS, charts), td.textContent ?? "").toBe(true);
    }
    // The credit sits under the title, beside the tile too.
    const credited = cells.find((td) => td.textContent?.includes("Tems"))!;
    expect(credited.querySelector(`.${charts.tSongText} .${charts.tCredit}`)).toBeTruthy();
    unmount();
  });

  it("the flex gap is the tile's only spacing: 10px, as its old margin", () => {
    expect(base(CSS, "tSongCell", "gap")).toBe("10px");
    expect(base(CSS, "tSongCell", "align-items")).toBe("center");
    expect(base(CSS, "tCover", "margin-right")).toBe("0");
    expect(base(CSS, "tSongText", "min-width")).toBe("0");
  });

  it("negative control: the shipped cell and rules stack the title under the tile", () => {
    const shippedCss = `.tdSong { min-width: 170px; }
.tSong { display: block; font-weight: 600; color: var(--text); }
.tCover { width: 26px; height: 26px; display: inline-block; vertical-align: middle; margin-right: 10px; }`;
    const map = { tdSong: "tdSong", tCover: "tCover", tSong: "tSong", tCredit: "tCredit" };
    const row = document.createElement("tr");
    row.innerHTML =
      '<td class="tdSong"><span class="tCover" aria-hidden="true"></span><span class="tSong">Free Mind</span><span class="tCredit">Tems</span></td>';
    const table = document.createElement("table");
    table.appendChild(document.createElement("tbody")).appendChild(row);
    expect(beside(row.querySelector(".tCover")!, shippedCss, map)).toBe(false);
  });
});

// ── cb-4 ────────────────────────────────────────────────────────────────────

describe("cb-4: no '·' opens a line in the 'Compare with…' list", () => {
  const ARTIST_CSS = read("app/afrobeats/[artist]/artist.module.css");
  /** The module name behind a rendered class ("_compareItem_ab12cd" → "compareItem"). */
  const nameOf = (el: Element) => [...el.classList].map((c) => c.match(/^_(.+)_[0-9a-f]+$/)?.[1] ?? c)[0];
  const nowrap = (css: string, name: string | undefined) =>
    !!name && rules(css).some((r) => r.media === null && r.selector === `.${name}` && decl(r.body, "white-space") === "nowrap");
  /**
   * Whether every "·" stays on the line of the name before it. Links in a
   * <nav> are inline-flex (globals.css's 24px target floor), and a line can
   * break after an inline-flex box even before a no-break space, so the dot
   * has to share a nowrap box with the link it follows.
   */
  function dotsHeld(line: Element, css: string) {
    const dots: Text[] = [];
    const walk = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
    for (let n = walk.nextNode(); n; n = walk.nextNode()) if (n.textContent!.includes("·")) dots.push(n as Text);
    return (
      dots.length > 0 &&
      dots.every((d) => {
        const box = d.parentElement!;
        return box !== line && nowrap(css, nameOf(box)) && box.querySelector("a") !== null && box.textContent!.endsWith("\u00a0·");
      })
    );
  }

  it("/afrobeats/ayra-starr: each name and the dot after it break as one", async () => {
    const host = document.createElement("div");
    host.innerHTML = await artist("ayra-starr");
    const navs = [...host.querySelectorAll('nav[aria-label="Compare Ayra Starr with…"]')];
    // Desktop's line and the phone's fold.
    expect(navs).toHaveLength(2);
    const line = navs.find((n) => n.querySelector("p"))!.querySelector("p")!;
    expect(line.textContent).toMatch(/^Compare with… /);
    const names = line.querySelectorAll("a").length;
    expect(names).toBeGreaterThan(10);
    expect(line.textContent!.split("·")).toHaveLength(names);
    expect(dotsHeld(line, ARTIST_CSS)).toBe(true);
    // The breaks fall on the ordinary spaces between the items.
    expect(line.textContent).toMatch(/\u00a0· \S/);
    // The phone's fold is a list of pills: no separators to break on.
    const fold = navs.find((n) => n.querySelector("details"))!;
    expect(fold.querySelectorAll("li").length).toBe(names);
    expect(fold.textContent).not.toContain("·");
  });

  it("negative controls: the shipped join, and a no-break space alone, leave the dot free to open a line", () => {
    const shipped = document.createElement("p");
    shipped.innerHTML = 'Compare with… <a href="/compare/a">Tyla</a> · <a href="/compare/b">BNXN</a> · <a href="/compare/c">Omah Lay</a>';
    expect(dotsHeld(shipped, ARTIST_CSS)).toBe(false);
    // Measured at 1440 on a dev build: "Tyla · BNXN" / "· Omah Lay" with this too.
    const nbspOnly = document.createElement("p");
    nbspOnly.innerHTML = 'Compare with… <a href="/compare/a">Tyla</a>\u00a0· <a href="/compare/b">BNXN</a>\u00a0· <a href="/compare/c">Omah Lay</a>';
    expect(dotsHeld(nbspOnly, ARTIST_CSS)).toBe(false);
  });
});

// ── cb-7 ────────────────────────────────────────────────────────────────────

describe("cb-7: a live board's country cell can be read in full, and says Eswatini", () => {
  const release = {
    title: "Heaven Baby",
    kind: "song" as const,
    platforms: [
      {
        platform: "Apple Music",
        numberOnes: 0,
        entries: [
          { country: "VC", name: "St. Vincent and The Grenadines", position: 12, movement: 0 },
          { country: "SZ", name: "Eswatini", position: 30, movement: 2 },
        ],
      },
    ],
  };

  it("an opened song's country cells carry their name as a hover title (/afrobeats/ayra-starr/live)", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify({ releases: [release] }), { status: 200 })));
    try {
      const { container, findByText, unmount } = render(
        <LiveReleaseBlock
          r={{ letter: "H", title: "Heaven Baby", kind: "song", ep: false, total: 2, no1: 0, platforms: [{ platform: "Apple Music", countries: "2 countries", numberOnes: 0 }] }}
          source="/api/v1/afrobeats/ayra-starr/live-charts"
        />,
      );
      const details = container.querySelector("details")!;
      details.open = true;
      fireEvent(details, new Event("toggle"));
      await findByText("St. Vincent and The Grenadines");
      const cells = [...container.querySelectorAll(`.${liveStyles.country}`)];
      expect(cells).toHaveLength(2);
      for (const c of cells) expect(c.getAttribute("title")).toBe(c.textContent);
      unmount();
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it("the build script writes the site's name for the feed's 'Swaziland', on every run", () => {
    expect(COUNTRY_NAME_FIXES).toEqual({ Swaziland: "Eswatini" });
    const rows = [{ title: "x", kind: "song", platforms: [{ platform: "Spotify", numberOnes: 0, entries: [{ country: "SZ", name: "Swaziland", position: 3 }] }] }];
    expect(normaliseCountryNames(rows)[0].platforms[0].entries[0]).toEqual({ country: "SZ", name: "Eswatini", position: 3 });
    // In the write path, after the last merge: fresh, swept and carried rows all pass through it.
    expect(read("scripts/build-live-charts.mjs")).toContain(
      "const releases = (w.releases = normaliseCountryNames(withPlacements(w.releases)));",
    );
  });

  it("no live data file prints a name the fix replaces", () => {
    const files = readdirSync("app/data").filter((f) => /^liveCharts(\.[a-z-]+)?\.ts$/.test(f));
    expect(files.length).toBeGreaterThanOrEqual(8);
    for (const f of files) {
      const src = read(`app/data/${f}`);
      for (const old of Object.keys(COUNTRY_NAME_FIXES)) expect(src, f).not.toContain(`"name": "${old}"`);
    }
  });

  it("negative control: the shipped cell had no title, and the shipped data said Swaziland", () => {
    const shipped = document.createElement("li");
    shipped.innerHTML = '<span class="pos">#12</span><span class="flag" aria-hidden="true">🇻🇨</span><span class="country">St. Vincent and The Grenadines</span>';
    expect(shipped.querySelector(".country")!.getAttribute("title")).toBeNull();
    const shippedRow = { country: "SZ", name: "Swaziland", position: 30 };
    expect(Object.keys(COUNTRY_NAME_FIXES)).toContain(shippedRow.name);
  });
});
