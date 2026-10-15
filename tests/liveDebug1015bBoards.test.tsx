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
