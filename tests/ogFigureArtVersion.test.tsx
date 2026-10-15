// @vitest-environment node
import { readFileSync } from "node:fs";
import { body, texts, tree, type Node } from "./fixtures/ogTree";
import { ogId, ogVersions, OG_ART } from "../app/lib/og-image";
import { BODY, FIGURE_ART } from "../app/lib/og-figure";
import { wrapLines } from "../app/lib/ogFit";
import { firstClause } from "../app/lib/bandHeadline";
import { shortStamp } from "../app/lib/dates";
import { updates } from "../app/data/updates";
import { totalAwards, countryCount } from "../app/data/certifications";
import { chartEntryCount, numberOnes } from "../app/data/charts";
import { pairCopy, parsePair } from "../app/lib/comparePairs";
import { countryFromSlug, priceCountry } from "../app/lib/certCountry";
import { countryCard, countryCardTexts } from "../app/lib/ogCountryCard";
import { ROOT_OG_ID, ROOT_OG_IMAGE, rootCardTexts } from "../app/lib/rootCard";
import { countryCount as playedCount, regionCount, performedCountries } from "../app/data/performedCountries";
import { festivalsCard, festivalsCardTexts, toursCard, toursCardTexts } from "../app/lib/ogTourCards";
import { daiDaiEsOgId, esCard } from "../app/dai-dai/es/ogId";
import { ogStats } from "../app/dai-dai/ogId";
import { listenersCard, listenersCardTexts } from "../app/lib/ogListenersCard";
import { listenersReadOnLabel } from "../app/data/listeners";
import { albums, studioAlbumsInOrder } from "../app/data/albums";
import { artAt } from "../app/lib/artAt";
import { livePlacementCount, livePlatformTotals, liveNumberOnes } from "../app/data/liveCharts";

/**
 * ogFigureArtVersion (Job 6 · J6-4, design review 8 Oct 2026): every
 * figure-first preview's id folds FIGURE_ART and every string the card
 * prints, so a redraw moves it once (FIGURE_ART) and after that only its own
 * figures move it. OG_ART, every other card's key, is not bumped. The root
 * card, cited by hand on /404, /search and /primitives, is versioned like the
 * rest, and those three cite its id.
 *
 * Each route's printed strings are re-derived here from the data, and every
 * line its body draws must be one of them: a string drawn but not folded
 * into the id would leave a scraped preview stale when it changes.
 */

const drawn = vi.hoisted(() => [] as unknown[]);
vi.mock("next/og", () => ({
  ImageResponse: class {
    constructor(el: unknown) {
      drawn.push(el);
      return new Response("");
    }
  },
}));

async function treeOf(draw: () => unknown): Promise<Node> {
  const before = drawn.length;
  await draw();
  expect(drawn.length).toBe(before + 1);
  return tree(drawn[before] as never);
}

/** A route: its metadata's id, its drawing, and the strings it should fold. */
interface Route {
  meta: () => Promise<{ id: string }[]> | { id: string }[];
  draw: () => Promise<unknown>;
  texts: () => Promise<string[]> | string[];
}

const ROUTES: Record<string, Route> = {
  "/": {
    meta: async () => (await import("../app/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/opengraph-image")).default(),
    texts: () => rootCardTexts(),
  },
  "/updates": {
    meta: async () => (await import("../app/updates/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/updates/opengraph-image")).default(),
    texts: () => {
      const u = updates[0];
      const lines = wrapLines(firstClause(u.text, { dash: false }).toUpperCase(), "anton", 80, BODY.right - BODY.left, 2);
      return [...lines, `${shortStamp(u.date)} · ${u.category}`.toUpperCase()];
    },
  },
  "/certifications": {
    meta: async () => (await import("../app/certifications/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/certifications/opengraph-image")).default(),
    texts: () => [totalAwards().toLocaleString("en-US"), `certifications · ${countryCount} countries`],
  },
  "/records/charts": {
    meta: async () => (await import("../app/records/charts/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/records/charts/opengraph-image")).default(),
    texts: () => [chartEntryCount.toLocaleString("en-US"), "chart entries", numberOnes.toLocaleString("en-US"), "No. 1 peaks"],
  },
  ...Object.fromEntries(
    ["burna-boy-vs-wizkid", "black-sherif-vs-tiwa-savage"].map((pair) => [
      `/compare/${pair}`,
      {
        meta: async () => (await import("../app/compare/[pair]/opengraph-image")).generateImageMetadata({ params: Promise.resolve({ pair }) }),
        draw: async () => (await import("../app/compare/[pair]/opengraph-image")).default({ params: Promise.resolve({ pair }) }),
        texts: () => {
          const [a, b] = parsePair(pair)!;
          const copy = pairCopy(a, b);
          const W = BODY.right - BODY.left;
          const col = (W - 32) / 2;
          const mono = (t: string, w: number, n: number) => wrapLines(t.toUpperCase(), "mono", 28, w, n, 2);
          return [
            ...wrapLines(`${a.name} vs ${b.name}`.toUpperCase(), "anton", 80, W, 2),
            ...[a, b].flatMap((x, i) => ["AT LEAST", copy.totals[i].toLocaleString("en-US"), ...mono(`${x.name} · units`, col, 1)]),
            ...mono(copy.sub, W, 2),
          ];
        },
      } satisfies Route,
    ]),
  ),
  ...Object.fromEntries(
    ["united-kingdom", "colombia"].map((country) => [
      `/compare/in/${country}`,
      {
        meta: async () => (await import("../app/compare/in/[country]/opengraph-image")).generateImageMetadata({ params: Promise.resolve({ country }) }),
        draw: async () => (await import("../app/compare/in/[country]/opengraph-image")).default({ params: Promise.resolve({ country }) }),
        texts: () => countryCardTexts(countryCard(priceCountry(countryFromSlug(country)!))),
      } satisfies Route,
    ]),
  ),
  "/records/tours/map": {
    meta: async () => (await import("../app/records/tours/map/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/records/tours/map/opengraph-image")).default(),
    texts: () => [
      String(playedCount),
      `countries · ${regionCount} regions`,
      performedCountries
        .map((c) => c.code)
        .sort((a, b) => a - b)
        .join(","),
    ],
  },
  "/records/tours": {
    meta: async () => (await import("../app/records/tours/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/records/tours/opengraph-image")).default(),
    texts: () => toursCardTexts(toursCard()),
  },
  "/records/tours/festivals": {
    meta: async () => (await import("../app/records/tours/festivals/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/records/tours/festivals/opengraph-image")).default(),
    texts: () => festivalsCardTexts(festivalsCard()),
  },
  "/dai-dai/es": {
    meta: async () => (await import("../app/dai-dai/es/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/dai-dai/es/opengraph-image")).default(),
    texts: () => {
      // C-15: the Spanish page's "N.º"; the labels in Spanish, the chart's name as it is.
      const es: Record<string, string> = { "Global 200": "Global 200", "Country No. 1s": "N.º 1 por país", Charts: "listas", Certs: "certificaciones" };
      return [esCard.title, esCard.sub, ...ogStats.flatMap((s) => [s.v.replace("No. ", "N.º "), es[s.l]])];
    },
  },
  "/music/listeners": {
    meta: async () => (await import("../app/music/listeners/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/music/listeners/opengraph-image")).default(),
    texts: () => [...listenersCardTexts(listenersCard()), `read ${listenersReadOnLabel}`],
  },
  "/music": {
    meta: async () => (await import("../app/music/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/music/opengraph-image")).default(),
    texts: () => [String(albums.length), "studio albums", ...studioAlbumsInOrder.map((a) => (a.cover ? artAt(a.cover, 300) : ""))],
  },
  "/live-charts": {
    meta: async () => (await import("../app/live-charts/opengraph-image")).generateImageMetadata(),
    draw: async () => (await import("../app/live-charts/opengraph-image")).default(),
    texts: () => [
      liveNumberOnes.toLocaleString("en-US"),
      "at No. 1 now",
      `${livePlacementCount.toLocaleString("en-US")} placements`,
      ...livePlatformTotals.slice(0, 3).flatMap((p) => [p.platform, p.placements.toLocaleString("en-US")]),
    ],
  },
};

/** Drawn lines, less an ellipsis a clamp added, each a piece of the folded strings. */
const unfolded = (lines: string[], folded: string[]) => {
  const all = folded.join(" ").toUpperCase();
  return lines.map((l) => l.replace(/…$/, "")).filter((l) => !all.includes(l.toUpperCase()));
};

describe("ogFigureArtVersion: the figure cards re-version under their own key", () => {
  it("OG_ART is unchanged: the untouched cards keep their URLs", () => {
    expect(OG_ART).toBe("plain-cards-unkerned-1");
    expect(FIGURE_ART).toBe("figure-first-1");
  });

  it.each(Object.entries(ROUTES))("%s: id = FIGURE_ART + every string it prints", async (_route, r) => {
    const t = await r.texts();
    const [meta] = await r.meta();
    expect(meta.id).toBe(ogId([FIGURE_ART, ...t].join("|")));
    expect(unfolded(texts(body(await treeOf(r.draw))), t)).toEqual([]);
  });

  it("the root card's URL carries its id; /404, /search and /primitives cite it", async () => {
    expect(ROOT_OG_IMAGE).toBe(`/opengraph-image/${ROOT_OG_ID}`);
    const [meta] = await ROUTES["/"].meta();
    expect(meta.id).toBe(ROOT_OG_ID);
    for (const f of ["app/not-found.tsx", "app/search/page.tsx", "app/primitives/page.tsx"]) {
      expect(readFileSync(f, "utf8"), f).toMatch(/url: ROOT_OG_IMAGE/);
    }
  });

  it("/dai-dai/es: the route's id is the one the page's JSON-LD cites", async () => {
    const [meta] = await ROUTES["/dai-dai/es"].meta();
    expect(meta.id).toBe(daiDaiEsOgId);
    expect(readFileSync("app/dai-dai/es/page.tsx", "utf8")).toMatch(/opengraph-image\/\$\{daiDaiEsOgId\}/);
    // Negative control: the shipped id, from the plain card's three strings
    // (es/ogId.ts on main), is not the redrawn card's.
    expect(daiDaiEsOgId).not.toBe(ogId([esCard.kicker, esCard.title, esCard.sub].join("|")));
  });

  it("negative controls: the shipped root URL, and a card id without FIGURE_ART", () => {
    // og-image.tsx on main: ROOT_OG_IMAGE = `/opengraph-image?${OG_ART}`, the bare
    // route plus an inert query, which no figure change could ever move.
    expect(ROOT_OG_IMAGE).not.toBe(`/opengraph-image?${OG_ART}`);
    // The shipped /certifications card's id, from its own words (certifications/
    // opengraph-image.tsx on main): the same route's figure id is not it.
    const shipped = ogVersions(
      { kicker: "Certified worldwide", title: "Certifications", sub: "251 awards across 27 countries — every tier from Silver to Diamond" },
      "alt",
    )[0].id;
    expect(shipped).not.toBe(ogId([FIGURE_ART, "251", "certifications · 27 countries"].join("|")));
  });
});
