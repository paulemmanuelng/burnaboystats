// @vitest-environment node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { body, texts, tree, type Node } from "./fixtures/ogTree";
import { ROOT_OG_ALT, rootFigures } from "../app/lib/rootCard";
import { allPairs, canonicalPair, pairCopy, pairSlug } from "../app/lib/comparePairs";
import { pairVerdict } from "../app/lib/ogPairCard";
import { certCountryCodes, countrySlug, priceCountry } from "../app/lib/certCountry";
import { countryCard } from "../app/lib/ogCountryCard";

/**
 * #13 of the live debug of 15 Oct 2026 (PV-07, Paul: "yes to all"). The
 * figure-first link previews kept the alt text of the old text cards ("Burna
 * Boy Stats — Latest Updates"), because Job 6 told every route to keep its
 * alt. Now each preview's og:image:alt reads the figures its card prints,
 * built from the same values the card draws and folds into its id, e.g. the
 * home card's "Burna Boy Stats: 251 certifications, 46 No. 1 peaks, 11.20B
 * Spotify streams".
 *
 * Checked on every figure card there is (found by walking app/ for routes
 * that draw ogFigureCard, so a new one cannot be missed), on every pair and
 * every country: each number the card's body prints is in its alt.
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
vi.mock("../app/lib/onThisDayImages", async (orig) => ({
  ...(await orig<typeof import("../app/lib/onThisDayImages")>()),
  loadPortrait: async () => "data:image/png;base64,AAAA",
}));

async function treeOf(draw: () => unknown): Promise<Node> {
  const before = drawn.length;
  await draw();
  expect(drawn.length).toBe(before + 1);
  return tree(drawn[before] as never);
}

type Meta = { id: string; alt: string }[];
type Mod = {
  default: (a?: { params: Promise<Record<string, string>> }) => unknown;
  generateImageMetadata: (a?: { params: Promise<Record<string, string>> }) => Meta | Promise<Meta>;
  generateStaticParams?: () => Record<string, string>[];
  alt: string;
};

/** Every figure card, by route file, with the alt each one shipped on origin/main (a9574c64). */
const SHIPPED: Record<string, string> = {
  "app/opengraph-image.tsx": "Burna Boy Stats — Certifications, Charts, Awards & Records",
  "app/share/opengraph-image.tsx": "Make a Burna Boy Stat Card — Download & Share the Numbers",
  "app/updates/opengraph-image.tsx": "Burna Boy Stats — Latest Updates",
  "app/certifications/opengraph-image.tsx": "Burna Boy Certifications — Silver, Gold, Platinum & Diamond",
  "app/records/charts/opengraph-image.tsx": "Burna Boy Official Chart Entries — Peak Positions Worldwide",
  "app/compare/[pair]/opengraph-image.tsx": "Burna Boy vs Wizkid — certified units compared at each body's own threshold",
  "app/compare/in/[country]/opengraph-image.tsx": "Certified units in the United Kingdom — every Afrobeats plaque priced at BPI's own thresholds",
  "app/records/tours/map/opengraph-image.tsx": "Where Burna Boy Has Performed — Interactive World Map",
  "app/records/tours/opengraph-image.tsx": "Burna Boy Tours & Live — Grosses, Sold-Out Stadiums & Records",
  "app/records/tours/festivals/opengraph-image.tsx": "Burna Boy — Festivals & Shows",
  "app/dai-dai/es/opengraph-image.tsx": "Dai Dai — el himno del Mundial 2026 de Shakira y Burna Boy",
  "app/music/listeners/opengraph-image.tsx": "Where the World Listens to Burna Boy — His Top Spotify Cities",
  "app/music/opengraph-image.tsx": "Burna Boy Discography — albums, EPs & hits",
  "app/live-charts/opengraph-image.tsx": "Burna Boy live charts — where he's charting right now",
  "app/records/awards/opengraph-image.tsx": "Burna Boy Awards & Nominations — Grammy, BET, Headies, AFRIMA & more",
  "app/records/africas-biggest/opengraph-image.tsx": "Africa's Biggest — most-streamed African artists by year on Spotify",
};

const IMPORTS: Record<string, () => Promise<Mod>> = {
  "app/opengraph-image.tsx": () => import("../app/opengraph-image") as unknown as Promise<Mod>,
  "app/share/opengraph-image.tsx": () => import("../app/share/opengraph-image") as unknown as Promise<Mod>,
  "app/updates/opengraph-image.tsx": () => import("../app/updates/opengraph-image") as unknown as Promise<Mod>,
  "app/certifications/opengraph-image.tsx": () => import("../app/certifications/opengraph-image") as unknown as Promise<Mod>,
  "app/records/charts/opengraph-image.tsx": () => import("../app/records/charts/opengraph-image") as unknown as Promise<Mod>,
  "app/compare/[pair]/opengraph-image.tsx": () => import("../app/compare/[pair]/opengraph-image") as unknown as Promise<Mod>,
  "app/compare/in/[country]/opengraph-image.tsx": () => import("../app/compare/in/[country]/opengraph-image") as unknown as Promise<Mod>,
  "app/records/tours/map/opengraph-image.tsx": () => import("../app/records/tours/map/opengraph-image") as unknown as Promise<Mod>,
  "app/records/tours/opengraph-image.tsx": () => import("../app/records/tours/opengraph-image") as unknown as Promise<Mod>,
  "app/records/tours/festivals/opengraph-image.tsx": () => import("../app/records/tours/festivals/opengraph-image") as unknown as Promise<Mod>,
  "app/dai-dai/es/opengraph-image.tsx": () => import("../app/dai-dai/es/opengraph-image") as unknown as Promise<Mod>,
  "app/music/listeners/opengraph-image.tsx": () => import("../app/music/listeners/opengraph-image") as unknown as Promise<Mod>,
  "app/music/opengraph-image.tsx": () => import("../app/music/opengraph-image") as unknown as Promise<Mod>,
  "app/live-charts/opengraph-image.tsx": () => import("../app/live-charts/opengraph-image") as unknown as Promise<Mod>,
  "app/records/awards/opengraph-image.tsx": () => import("../app/records/awards/opengraph-image") as unknown as Promise<Mod>,
  "app/records/africas-biggest/opengraph-image.tsx": () => import("../app/records/africas-biggest/opengraph-image") as unknown as Promise<Mod>,
};

/** The numbers a card's body prints: each run of digits, with its commas and decimal point. */
const numbersIn = (lines: string[]) => lines.flatMap((l) => (l.match(/\d[\d,.]*/g) ?? []).map((n) => n.replace(/[,.]$/, "")));
/** The numbers the body prints that its alt does not read. */
const unread = (alt: string, lines: string[]) => numbersIn(lines).filter((n) => !alt.includes(n));

/** A country card's ranked rows its alt reads without the unit the value
 *  counts in: "units" on a priced board; "plaque" for 1, else "plaques", on
 *  an unpriced one. */
const rowsWithoutUnits = (alt: string, rows: { rank: string; name: string; value: string }[], priced: boolean) =>
  rows.filter((r) => {
    const unit = priced ? "units" : r.value === "1" ? "plaque" : "plaques";
    return !alt.includes(`${r.rank} ${r.name}, ${r.value} ${unit}`);
  });

/** Each card a route draws: one per static param, or the route's one. Drawn
 *  one at a time, so each tree is read off the draw that made it. */
async function cardsOf(file: string) {
  const mod = await IMPORTS[file]();
  const params = mod.generateStaticParams?.() ?? [undefined];
  const cards = [];
  for (const p of params) {
    const arg = p ? { params: Promise.resolve(p) } : undefined;
    const [meta] = await mod.generateImageMetadata(arg);
    const t = await treeOf(() => mod.default(arg));
    cards.push({ param: p ? Object.values(p).join("") : file, alt: meta.alt, lines: texts(body(t)), mod });
  }
  return cards;
}

/** Every route file under app/ that draws a figure card. */
function figureRoutes(dir = "app", out: string[] = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) figureRoutes(p, out);
    else if (e === "opengraph-image.tsx" && /\bogFigureCard\(/.test(readFileSync(p, "utf8"))) out.push(relative(process.cwd(), p));
  }
  return out.sort();
}

vi.setConfig({ testTimeout: 60_000 });

describe("#13: every figure preview's alt reads the figures on its card", () => {
  it("the table below is every figure card in app/", () => {
    expect(figureRoutes()).toEqual(Object.keys(SHIPPED).sort());
  });

  it.each(Object.keys(SHIPPED))("%s: each number the card prints is in its alt; the alt is not the one it shipped", async (file) => {
    const cards = await cardsOf(file);
    expect(cards.length).toBeGreaterThan(0);
    for (const c of cards) {
      expect(numbersIn(c.lines).length, c.param).toBeGreaterThan(0);
      expect(unread(c.alt, c.lines), `${c.param}: ${c.alt}`).toEqual([]);
      expect(c.alt, c.param).not.toBe(SHIPPED[file]);
      // Inside X's 420-character limit for an image description.
      expect(c.alt.length, c.alt).toBeLessThanOrEqual(420);
    }
    // A route with one card: its module's alt is the one its metadata gives.
    if (cards.length === 1) expect(cards[0].mod.alt).toBe(cards[0].alt);
    // A route with a card per page: no two pages share an alt.
    expect(new Set(cards.map((c) => c.alt)).size).toBe(cards.length);
  });

  it("the home card reads its three figures, as the ruling's example does", async () => {
    const [home] = await cardsOf("app/opengraph-image.tsx");
    expect(home.alt).toBe(`Burna Boy Stats: ${rootFigures().map((f) => `${f.value} ${f.label}`).join(", ")}`);
    expect(home.alt).toMatch(/^Burna Boy Stats: [\d,]+ certifications, [\d,]+ No\. 1 peaks, [\d.]+[MB] Spotify streams$/);
    // The three pages that cite the root card by hand give it the same alt.
    expect(ROOT_OG_ALT).toBe(home.alt);
    for (const f of ["app/not-found.tsx", "app/search/page.tsx", "app/primitives/page.tsx"]) {
      expect(readFileSync(f, "utf8"), f).toMatch(/url: ROOT_OG_IMAGE, width: 1200, height: 630, alt: ROOT_OG_ALT \}/);
    }
  });

  it("a pair card's alt reads both totals and its one-line verdict (#12)", async () => {
    const mod = await IMPORTS["app/compare/[pair]/opengraph-image.tsx"]();
    for (const [x, y] of allPairs().slice(0, 12)) {
      const [a, b] = canonicalPair(x, y);
      const copy = pairCopy(a, b);
      const [meta] = await mod.generateImageMetadata({ params: Promise.resolve({ pair: pairSlug(a, b) }) });
      const totals = copy.totals.map((n) => n.toLocaleString("en-US"));
      expect(meta.alt).toBe(
        `${a.name} vs ${b.name} — certified units compared at each body's own threshold: ${a.name} at least ${totals[0]}, ${b.name} at least ${totals[1]}; ${pairVerdict(a, b, copy)}`,
      );
    }
  });

  it("a country card's alt keeps its pricing basis first, then its figures", async () => {
    const cards = await cardsOf("app/compare/in/[country]/opengraph-image.tsx");
    expect(cards).toHaveLength(certCountryCodes().length);
    const uk = cards.find((c) => c.param === countrySlug("UK"))!;
    expect(uk.alt).toMatch(/^Certified units in the United Kingdom — every Afrobeats plaque priced at BPI's own thresholds\. At least [\d,]+ certified units, \d+ artists · [\d,]+ plaques; top 3: 1 [^,;]+, [\d,]+ units; /);
  });

  it("a country card's top three say what each value counts: units where priced, plaques where not", async () => {
    const mod = await IMPORTS["app/compare/in/[country]/opengraph-image.tsx"]();
    let unpriced = 0;
    for (const code of certCountryCodes()) {
      const board = priceCountry(code);
      const card = countryCard(board);
      const [meta] = await mod.generateImageMetadata({ params: Promise.resolve({ country: countrySlug(code) }) });
      expect(rowsWithoutUnits(meta.alt, card.rows, board.counted > 0), `${code}: ${meta.alt}`).toEqual([]);
      if (board.counted === 0) unpriced++;
    }
    // The check covers both kinds of board: Colombia is the unpriced one today.
    expect(unpriced).toBeGreaterThan(0);
  });

  it("negative control: the unit check fails the bare rows the first #13 alt read", () => {
    // The literal rows the review quoted off the unpriced board, and a priced
    // board's row in the same bare form.
    const rows = [
      { rank: "1", name: "Burna Boy", value: "1" },
      { rank: "1", name: "Rema", value: "1" },
    ];
    expect(rowsWithoutUnits("…; top 2: 1 Burna Boy 1, 1 Rema 1", rows, false)).toHaveLength(2);
    expect(rowsWithoutUnits("…; top 1: 1 Burna Boy 14,160,000", [{ rank: "1", name: "Burna Boy", value: "14,160,000" }], true)).toHaveLength(1);
    // And passes them once each says what it counts.
    expect(rowsWithoutUnits("…; top 2: 1 Burna Boy, 1 plaque; 1 Rema, 1 plaque", rows, false)).toEqual([]);
  });

  it("negative control: each alt origin/main shipped reads none of its card's figures", async () => {
    for (const [file, shipped] of Object.entries(SHIPPED)) {
      const [card] = await cardsOf(file).then((cs) => cs.filter((c) => !c.mod.generateStaticParams || c.param === "burna-boy-vs-wizkid" || c.param === "united-kingdom"));
      expect(unread(shipped, card.lines).length, `${file}: ${shipped}`).toBeGreaterThan(0);
    }
  });
});
