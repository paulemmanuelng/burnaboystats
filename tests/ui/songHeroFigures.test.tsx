import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SongPage from "../../app/music/[song]/page";
import AlbumPage from "../../app/music/albums/[album]/page";
import { songs } from "../../app/data/songs";
import { albumPages } from "../../app/data/albumPages";
import { albumCharts, allChartItems } from "../../app/data/charts";
import { albums as certAlbums, allItems } from "../../app/data/certifications";
import { sameTitle } from "../../app/lib/titleKey";
import styles from "../../app/music/[song]/song.module.css";
import { read, winning } from "../fixtures/cssRules";
import { THEMES, tokenContrast } from "../fixtures/tokenColours";

/**
 * Job 4 · J4-5 (fixes 82, 88, 89): the song and album hero gains its figure
 * column — countries charted · best chart peak · certifications.
 *
 * Every value here is recounted from the chart and certification data the
 * way a reader would (a song by its exact title, an album by its title and
 * album plaques only), never read back from lib/releaseFigures, so the page
 * and this test cannot agree by sharing a constant. A record that holds
 * nothing prints "—" in all three cells (fix 82); a release that charted but
 * holds no certification prints its 0 (C-15).
 *
 * From 901 the "By the numbers" grid's three derived cards stand down
 * (.inHero, fix 89); on a phone the column is not drawn and the grid keeps
 * them (fix 88). At ≥1240 the column is a 320px panel on --bg-soft; at
 * 901–1239 it is one row of three under the content.
 */

const CSS = read("app/music/[song]/song.module.css");

/** Whether a rule's @media applies at width `w` (min/max-width, `and`, pointer). */
const at =
  (w: number, coarse = false) =>
  (m: string | null) =>
    m === null ||
    m
      .replace(/^@media\s*/, "")
      .split(/\s+and\s+/)
      .every((part) => {
        const min = part.match(/min-width:\s*(\d+)px/);
        if (min) return w >= Number(min[1]);
        const max = part.match(/max-width:\s*(\d+)px/);
        if (max) return w <= Number(max[1]);
        if (/pointer:\s*coarse/.test(part)) return coarse;
        throw new Error(`unhandled media: ${m}`);
      });

type Expect = { countries: number; peak: number | null; certs: number };

const recount = (chart?: { entries: { c: string; peak: number }[] }, cert?: { certs: unknown[] }): Expect => {
  const entries = chart?.entries ?? [];
  return {
    countries: entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX").length,
    peak: entries.length ? Math.min(...entries.map((e) => e.peak)) : null,
    certs: cert?.certs.length ?? 0,
  };
};

const PAGES: { path: string; render: () => Promise<React.ReactElement>; want: Expect }[] = [
  ...songs.map((s) => ({
    path: `/music/${s.slug}`,
    render: () => SongPage({ params: Promise.resolve({ song: s.slug }) }),
    want: recount(
      allChartItems.find((r) => r.title === s.title),
      allItems.find((r) => r.title === s.title),
    ),
  })),
  ...albumPages.map((a) => ({
    path: `/music/albums/${a.slug}`,
    render: () => AlbumPage({ params: Promise.resolve({ album: a.slug }) }),
    want: recount(
      albumCharts.find((r) => sameTitle(r.title, a.title)),
      certAlbums.find((r) => sameTitle(r.title, a.title)),
    ),
  })),
];

const host = (html: string) => {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d;
};
const txt = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

function column(html: string) {
  const col = host(html).querySelector(`.${styles.heroGrid} > .${styles.heroFigures}`);
  return col
    ? [...col.children].map((c) => ({
        v: txt(c.querySelector(`.${styles.heroFigValue}`)),
        l: txt(c.querySelector(`.${styles.heroFigLabel}`)),
        missing: c.querySelector(`.${styles.heroFigValue}`)?.classList.contains(styles.heroFigMissing) ?? false,
      }))
    : null;
}

const DERIVED = /^(countr(y|ies) charted|best (album-)?chart peak worldwide|certifications? worldwide)$/;

/** Each "By the numbers" card: its label and whether it stands down from 901. */
function gridCards(html: string) {
  const grid = host(html).querySelector(`.${styles.numGrid}`);
  return [...(grid?.children ?? [])].map((c) => ({
    v: txt(c.querySelector(`.${styles.numValue}`)),
    l: txt(c.querySelector(`.${styles.numLabel}`)),
    inHero: c.classList.contains(styles.inHero),
  }));
}

/** The rule: a derived figure's card stands down from 901, and nothing else does. */
const misfiled = (cards: ReturnType<typeof gridCards>) =>
  cards.filter((c) => DERIVED.test(c.l) !== c.inHero).map((c) => `${c.v} · ${c.l}${c.inHero ? " (hidden)" : ""}`);

describe("J4-5: the hero's figure column", () => {
  it("covers every song and album page", () => {
    expect(PAGES.length).toBe(songs.length + albumPages.length);
    expect(PAGES.length).toBeGreaterThanOrEqual(20);
  });

  it.each(PAGES.map((p) => [p.path, p] as const))("%s: three cells, recounted from the data", async (_path, p) => {
    const cells = column(renderToStaticMarkup(await p.render()));
    expect(cells, "the column is the hero grid's own child").not.toBeNull();
    const { countries, peak, certs } = p.want;
    const none = peak === null && certs === 0;
    expect(cells!.map((c) => c.l)).toEqual([
      !none && countries === 1 ? "country charted" : "countries charted",
      "best chart peak",
      !none && certs === 1 ? "certification" : "certifications",
    ]);
    expect(cells!.map((c) => c.v)).toEqual(
      none ? ["—", "—", "—"] : [`${countries}`, peak === null ? "—" : `No. ${peak}`, `${certs}`],
    );
    // a dash is muted; a figure, a 0 included, is ink
    for (const c of cells!) expect(c.missing, `${c.v} · ${c.l}`).toBe(c.v === "—");
  });

  it("the history-only records print three dashes; a charted, uncertified album prints its 0", async () => {
    const dashes: string[] = [];
    const zeros: string[] = [];
    for (const p of PAGES) {
      const cells = column(renderToStaticMarkup(await p.render()))!;
      if (cells.every((c) => c.v === "—")) dashes.push(p.path);
      if (cells[2].v === "0") zeros.push(p.path);
    }
    expect(dashes).toEqual(PAGES.filter((p) => p.want.peak === null && p.want.certs === 0).map((p) => p.path));
    // the cases fix 82 and C-15 name
    expect(dashes).toEqual(expect.arrayContaining(["/music/rizzla", "/music/smoke", "/music/albums/life", "/music/albums/on-a-spaceship"]));
    expect(zeros).toEqual(expect.arrayContaining(["/music/albums/outside", "/music/albums/no-sign-of-weakness"]));
  });

  it.each(PAGES.map((p) => [p.path, p] as const))("%s: the derived cards stand down from 901, nothing else does", async (_path, p) => {
    const cards = gridCards(renderToStaticMarkup(await p.render()));
    expect(misfiled(cards)).toEqual([]);
    // the phone keeps every card it had: one per derived figure the record holds
    if (p.want.countries > 0) expect(cards.some((c) => c.inHero && /charted$/.test(c.l))).toBe(true);
    if (p.want.certs > 0) expect(cards.some((c) => c.inHero && /worldwide$/.test(c.l) && /^certif/.test(c.l))).toBe(true);
  });

  it("history-only songs keep their one dash cell and their 'released' card (fix 82)", async () => {
    for (const p of PAGES.filter((x) => x.path.startsWith("/music/") && !x.path.includes("/albums/"))) {
      if (p.want.peak !== null || p.want.certs > 0) continue;
      const cards = gridCards(renderToStaticMarkup(await p.render()));
      expect(cards.filter((c) => c.v === "—"), p.path).toHaveLength(1);
      expect(cards.some((c) => c.l === "released" && !c.inHero), p.path).toBe(true);
    }
  });
});

describe("J4-5: the column's layout, read from song.module.css", () => {
  it("≥1240 the hero grid has the 320px column; 901–1239 the figures are one row of three; phones hide it", () => {
    expect(winning(CSS, ".heroGrid", "grid-template-columns", at(1240))).toBe("236px minmax(0, 1fr) 320px");
    expect(winning(CSS, ".heroGrid", "grid-template-columns", at(1440))).toBe("236px minmax(0, 1fr) 320px");
    expect(winning(CSS, ".heroGrid", "grid-template-columns", at(1239))).toBe("180px 1fr");
    expect(winning(CSS, ".heroFigures", "grid-column", at(1240))).toBeUndefined();
    for (const w of [901, 1024, 1239]) {
      expect(winning(CSS, ".heroFigures", "grid-column", at(w)), `${w}`).toBe("1 / -1");
      expect(winning(CSS, ".heroFigures", "grid-template-columns", at(w)), `${w}`).toBe("repeat(3, minmax(0, 1fr))");
      expect(winning(CSS, ".heroFigValue", "font-size", at(w)), `${w}`).toBe("36px");
    }
    expect(winning(CSS, ".heroFigValue", "font-size", at(1440))).toBe("44px");
    expect(winning(CSS, ".heroFigures", "display", at(900))).toBe("none");
    expect(winning(CSS, ".heroFigures", "display", at(320))).toBe("none");
    expect(winning(CSS, ".heroFigures", "display", at(1024))).toBe("grid");
    expect(winning(CSS, ".heroFigures", "display", at(1440))).toBe("flex");
  });

  it("901–1239: the row of three is inset on its panel, never flush on its edge", () => {
    // the panel's own left and right padding, from the padding shorthand
    const sides = (padding: string | undefined) => {
      const [t, r = t, , l = r] = (padding ?? "").split(/\s+/).map(parseFloat);
      return [l, r];
    };
    for (const w of [901, 1024, 1239]) {
      const [l, r] = sides(winning(CSS, ".heroFigures", "padding", at(w)));
      // the ≥1240 column's own inset
      expect(l, `${w} left`).toBe(parseFloat(winning(CSS, ".heroFigures", "padding-left", at(1440)) ?? "0"));
      expect(l, `${w} left`).toBeGreaterThan(0);
      expect(r, `${w} right`).toBe(l);
    }
    // Negative control: J4-5 as first built (review, 14 Oct) set
    // "padding: 14px 0 0;" here, which put "15", "No. 1" and "12" on the
    // panel's left edge at 1024.
    expect(sides("14px 0 0")[0]).toBe(0);
  });

  it("the column is a solid --bg-soft panel at every desktop width, ink figures, muted labels, each ≥4.5:1 on it", () => {
    for (const w of [1024, 1440]) expect(winning(CSS, ".heroFigures", "background", at(w))).toBe("var(--bg-soft)");
    expect(winning(CSS, ".heroFigValue", "color", at(1440))).toBe("var(--text)");
    expect(winning(CSS, ".heroFigLabel", "color", at(1440))).toBe("var(--text-muted)");
    expect(winning(CSS, ".heroFigMissing", "color", at(1440))).toBe("var(--text-muted)");
    expect(winning(CSS, ".heroFigLabel", "font-size", at(1440))).toBe("11px");
    for (const t of THEMES) {
      expect(tokenContrast("--text", "--bg-soft", t), t).toBeGreaterThanOrEqual(4.5);
      expect(tokenContrast("--text-muted", "--bg-soft", t), t).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("the derived cards hide from 901 and show at 900; the tint follows the first card shown", () => {
    expect(winning(CSS, ".inHero", "display", at(901))).toBe("none");
    expect(winning(CSS, ".inHero", "display", at(1440))).toBe("none");
    expect(winning(CSS, ".inHero", "display", at(900))).toBeUndefined();
    expect(winning(CSS, ".numCard", "display", at(900))).toBe("flex");
    expect(winning(CSS, ".numCardLead", "background", at(900))).toMatch(/gold-wash-base/);
    expect(winning(CSS, ".numCardLead", "background", at(901))).toBeUndefined();
    expect(winning(CSS, ".numCardLeadWide", "background", at(901))).toMatch(/gold-wash-base/);
    expect(winning(CSS, ".numCardLeadWide", "background", at(900))).toBeUndefined();
  });
});

describe("J4-5 negative controls: what shipped fails", () => {
  it("the shipped /music/wgft desktop grid printed its countries card with no class to hide it", () => {
    // main e85e6efe, app/music/[song]/page.tsx: the first card of the grid,
    // "{n} · countries charted", rendered with numCard + numCardLead only.
    const wgft = songs.find((s) => s.slug === "wgft")!;
    const n = recount(allChartItems.find((r) => r.title === wgft.title)).countries;
    const shipped = `<div class="${styles.numGrid}"><div class="${styles.numCard} ${styles.numCardLead}"><span class="${styles.numHead}"><span class="${styles.numValue} ${styles.numValueLead} ">${n}</span></span><span class="${styles.numLabel}">countries charted</span></div></div>`;
    expect(misfiled(gridCards(shipped))).toEqual([`${n} · countries charted`]);
  });

  it("the shipped hero grid had no third column", () => {
    // main e85e6efe, song.module.css, verbatim.
    const shipped = `.heroGrid {
  position: relative;
  display: grid;
  grid-template-columns: 236px 1fr;
  gap: 38px;
  padding: 36px 38px;
  align-items: center;
}`;
    expect(winning(shipped, ".heroGrid", "grid-template-columns", at(1440))).not.toBe("236px minmax(0, 1fr) 320px");
  });
});
