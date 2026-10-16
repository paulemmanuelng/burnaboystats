// @vitest-environment node
import { readFileSync } from "node:fs";
import { body, texts, tree, type Node } from "./fixtures/ogTree";
import { FIG } from "../app/lib/og-figure";
import { totalAwards, countryCount } from "../app/data/certifications";
import { chartCountryCount, chartEntryCount, numberOnes } from "../app/data/charts";
import { spotifyTotalStreams } from "../app/data/streamingTotals";
import { certCountryCodes, countryCopy, countrySlug, priceCountry, type CountryBoard } from "../app/lib/certCountry";
import { countryCard } from "../app/lib/ogCountryCard";
import { ogImage } from "../app/lib/og-image";
import { worldShapes } from "../app/data/worldShapes";
import { countryCount as playedCount, regionCount, performedCountries } from "../app/data/performedCountries";
import { landCodes } from "../app/lib/tourMapData";
import { festivals, tours } from "../app/data/tours";
import { FESTIVALS_STRIP, festivalsCard, TOURS_STRIP, toursCard } from "../app/lib/ogTourCards";
import { DAI_DAI_COVER } from "../app/data/daiDai";
import { esCard, esTiles } from "../app/dai-dai/es/ogId";
import { ogStats } from "../app/dai-dai/ogId";
import { cityCount, compactListeners, listenerCities, listenerInsights, listenersReadOnLabel, MONTHLY_LISTENERS_ON_READ } from "../app/data/listeners";
import { dotRadius, drawnRadius, DOT_FLOOR_PX, GAP_PX, LABEL_ASCENT_PX, LABEL_DESCENT_PX, LABEL_PX, labelWidthPx, RMAX_DESKTOP, type LabelDot, type MapLabel } from "../app/lib/listenerDots";
import { LABEL_SIZE, LISTENERS_K, listenersCard, NAMED } from "../app/lib/ogListenersCard";
import { albums, eps, studioAlbumsInOrder } from "../app/data/albums";
import { artAt } from "../app/lib/artAt";
import { liveCountryCount, livePlacementCount, livePlatformTotals, liveNumberOnes } from "../app/data/liveCharts";

/**
 * ogFigureCards (Job 6 · J6-4, design review 8 Oct 2026, fixes 124–126,
 * 130–131): each figure-first preview prints its page's own figures, read
 * from the data, under labels that say what each one counts, in the colour
 * the data gives it (gold is his; the cards stay gold on near-black).
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

/** Body nodes that print `text` exactly. */
const printing = (t: Node, text: string) => body(t).filter((n) => n.text.join("") === text);
const colourOf = (t: Node, text: string) => printing(t, text).map((n) => n.style.color);
/** The images a card's body draws. */
const images = (t: Node) => body(t).filter((n) => n.type === "img");
/** A map image's SVG, out of its data URI (lib/ogWorld.ts). */
const svgOf = (uri: string) => Buffer.from(uri.slice(uri.indexOf(",") + 1), "base64").toString("utf8");
/** A strip's columns (og-figure Strip): its bars and hairlines, left to right. */
const stripBars = (t: Node) => body(t).filter((n) => n.style.flex === 1 && typeof n.style.height === "number" && n.kids.length === 0 && n.text.length === 0);
/** A strip's column labels, left to right. */
const stripLabels = (t: Node) => body(t).filter((n) => n.style.flex === 1 && n.text.length > 0).map((n) => n.text.join(""));
/** A map's paths: each fill with the shapes' path data it carries. */
const pathsOf = (svg: string) => [...svg.matchAll(/<path fill="([^"]+)" d="([^"]+)"\/>/g)].map((m) => ({ fill: m[1], d: m[2] }));

/** The noun guard: the card calls his plaques certifications, never awards. */
const certificationsNoun = (lines: string[]) => /CERTIFICATIONS/.test(lines.join(" ").toUpperCase()) && !/AWARDS/.test(lines.join(" ").toUpperCase());
/** The label guard (C-14): No. 1 counts placements, so no line says "No. 1s". */
const noBareNo1s = (lines: string[]) => !lines.some((l) => /\bNO\. 1S\b/.test(l.toUpperCase()));

/** The cities a map label's line boxes cover, other than its own, with the
 *  boxes placeLabels sets (viewBox units; `k` = label px per unit). */
function coveredBy(label: MapLabel, dots: LabelDot[], k: number): string[] {
  const u = (px: number) => px / k;
  return dots
    .filter((d) => !label.ranks.includes(d.rank))
    .filter((d) =>
      label.lines.some((line, i) => {
        const w = u(labelWidthPx(line));
        const x0 = label.anchor === "start" ? label.x : label.x - w;
        const base = label.y + i * label.pitch;
        const cx = Math.max(x0, Math.min(d.x, x0 + w));
        const cy = Math.max(base - u(LABEL_ASCENT_PX), Math.min(d.y, base + u(LABEL_DESCENT_PX)));
        return Math.hypot(cx - d.x, cy - d.y) < d.r;
      }),
    )
    .map((d) => d.city);
}

/** The route files J6-4 redraws, and the two the live debug of 15 Oct 2026 added, for the typed-figure guard. */
const ROUTE_FILES = [
  "app/opengraph-image.tsx",
  "app/updates/opengraph-image.tsx",
  "app/certifications/opengraph-image.tsx",
  "app/records/charts/opengraph-image.tsx",
  "app/compare/[pair]/opengraph-image.tsx",
  "app/compare/in/[country]/opengraph-image.tsx",
  "app/records/tours/map/opengraph-image.tsx",
  "app/records/tours/opengraph-image.tsx",
  "app/records/tours/festivals/opengraph-image.tsx",
  "app/dai-dai/es/opengraph-image.tsx",
  "app/music/listeners/opengraph-image.tsx",
  "app/music/opengraph-image.tsx",
  "app/live-charts/opengraph-image.tsx",
  // Live debug 15 Oct 2026 (#10).
  "app/records/awards/opengraph-image.tsx",
  "app/records/africas-biggest/opengraph-image.tsx",
];

describe("ogFigureCards: each preview's figures are the page's own", () => {
  it("home: certifications, No. 1 peaks and Spotify streams, gold, from the data (fix 131, C-14)", async () => {
    const t = await treeOf(async () => (await import("../app/opengraph-image")).default());
    const lines = texts(body(t));
    expect(lines).toEqual([
      totalAwards().toLocaleString("en-US"),
      "CERTIFICATIONS",
      numberOnes.toLocaleString("en-US"),
      "NO. 1 PEAKS",
      spotifyTotalStreams,
      "SPOTIFY STREAMS",
    ]);
    for (const v of [totalAwards().toLocaleString("en-US"), numberOnes.toLocaleString("en-US"), spotifyTotalStreams]) {
      expect(colourOf(t, v)).toEqual([FIG.gold]);
    }
  });

  it("negative control: the drawing's \"No. 1s\" and \"streams\" are not the labels (C-14, fix 131)", async () => {
    const t = await treeOf(async () => (await import("../app/opengraph-image")).default());
    const lines = texts(body(t));
    expect(lines).not.toContain("NO. 1S");
    expect(lines).not.toContain("STREAMS");
  });

  it("/certifications: his count and its countries, gold figure, the noun \"certifications\"", async () => {
    const t = await treeOf(async () => (await import("../app/certifications/opengraph-image")).default());
    expect(texts(body(t))).toEqual([totalAwards().toLocaleString("en-US"), `CERTIFICATIONS · ${countryCount} COUNTRIES`]);
    expect(colourOf(t, totalAwards().toLocaleString("en-US"))).toEqual([FIG.gold]);
    expect(certificationsNoun(texts(body(t)))).toBe(true);
    // Negative control: the shipped card's sub (certifications/opengraph-image.tsx
    // on main) called them awards, and the guard catches it.
    const shipped = `${totalAwards()} awards across ${countryCount} countries — every tier from Silver to Diamond`;
    expect(certificationsNoun([shipped])).toBe(false);
  });

  it("/records/charts: chart entries and No. 1 peaks, both gold, from the data (C-14)", async () => {
    const t = await treeOf(async () => (await import("../app/records/charts/opengraph-image")).default());
    const [entries, ones] = [chartEntryCount.toLocaleString("en-US"), numberOnes.toLocaleString("en-US")];
    expect(texts(body(t))).toEqual([entries, "CHART ENTRIES", ones, "NO. 1 PEAKS"]);
    expect([...colourOf(t, entries), ...colourOf(t, ones)]).toEqual([FIG.gold, FIG.gold]);
    // One size for the pair: a slot sized for the longer value.
    expect(new Set(body(t).filter((n) => n.style.fontFamily === "Anton").map((n) => n.style.fontSize)).size).toBe(1);
    expect(noBareNo1s(texts(body(t)))).toBe(true);
    // Negative control: the shipped card's sub (records/charts/opengraph-image.tsx
    // on main) counted placements as "No. 1s", and the guard catches it.
    const shipped = `${chartEntryCount} chart entries across ${chartCountryCount} territories · ${numberOnes} No. 1s`;
    expect(noBareNo1s([shipped])).toBe(false);
  });

  describe("country boards (fix 126): the figure says its metric; his value gold in the three, every other value ink", () => {
    const draw = (code: string) =>
      treeOf(async () => (await import("../app/compare/in/[country]/opengraph-image")).default({ params: Promise.resolve({ country: countrySlug(code) }) }));
    const n = (x: number) => x.toLocaleString("en-US");
    const boards = certCountryCodes().map((code) => priceCountry(code));
    const his = (b: CountryBoard) => b.lines.slice(0, 3).some((l) => l.artist.slug === "burna-boy");

    it("a priced board: its name, at least {units} certified units, {artists} artists · {plaques} plaques, the top three in units", async () => {
      const uk = priceCountry("UK");
      const t = await draw("UK");
      const lines = texts(body(t));
      // The market's name heads the column (Paul, 15 Oct 2026: ogCountryNamesMarket).
      expect(lines.slice(0, 5)).toEqual(["UNITED KINGDOM", "AT LEAST", n(uk.units), "CERTIFIED UNITS", `${uk.artists} ARTISTS · ${n(uk.plaques)} PLAQUES`]);
      const top = uk.lines.slice(0, 3);
      expect(lines.slice(5)).toEqual(top.flatMap((l, i) => [`${i + 1} ${l.artist.name.toUpperCase()}`, n(l.units)]));
      // C-10: the market's total is ink; only his value is gold.
      expect(colourOf(t, n(uk.units))).toEqual([FIG.ink]);
      for (const l of top) expect(colourOf(t, n(l.units)), l.artist.name).toEqual([l.artist.slug === "burna-boy" ? FIG.gold : FIG.ink]);
    });

    it("a board without him in its three has no gold in its body", async () => {
      const without = boards.find((b) => b.counted > 0 && !his(b))!;
      expect(without, "a priced board whose three are not his").toBeTruthy();
      const t = await draw(without.code);
      expect(body(t).map((x) => x.style.color)).not.toContain(FIG.gold);
    });

    it("ties share a place (1, 1, 3), as the market's leader rule reads a tie as level", () => {
      const tied = boards.filter((b) => b.counted > 0 && new Set(b.lines.slice(0, 3).map((l) => l.units)).size < Math.min(3, b.lines.length));
      expect(tied.length).toBeGreaterThan(0);
      for (const b of tied) {
        const card = countryCard(b);
        const top = b.lines.slice(0, 3);
        card.rows.forEach((r, i) => expect(r.rank, `${b.code} ${r.name}`).toBe(String(top.findIndex((l) => l.units === top[i].units) + 1)));
      }
    });

    it("a market nothing can be priced in: {plaques} plaques, not priceable, the three by plaques", async () => {
      const unpriced = boards.filter((b) => b.counted === 0);
      expect(unpriced.length).toBeGreaterThan(0);
      for (const b of unpriced) {
        const t = await draw(b.code);
        const lines = texts(body(t));
        expect(lines.slice(0, 4), b.code).toEqual([b.name.toUpperCase(), n(b.plaques), b.plaques === 1 ? "PLAQUE" : "PLAQUES", "NOT PRICEABLE"]);
        expect(lines).not.toContain("AT LEAST");
        const top = b.lines.slice(0, 3);
        const places = top.map((l) => top.findIndex((m) => m.plaques === l.plaques) + 1);
        expect(lines.slice(4)).toEqual(top.flatMap((l, i) => [`${places[i]} ${l.artist.name.toUpperCase()}`, n(l.plaques)]));
      }
    });

    it("the unpriced state is the board's (counted === 0), never a country code (C-16)", () => {
      const uk = priceCountry("UK");
      expect(countryCard({ ...uk, code: "CO" }).label).toBe("certified units");
      expect(countryCard({ ...uk, counted: 0 }).sub).toBe("not priceable");
    });

    it("negative control: the shipped card said no metric over its figure and listed nobody", () => {
      // compare/in/[country]/opengraph-image.tsx on main: kicker "Certified
      // units", title the market's name, sub countryCopy(board).sub.
      const uk = priceCountry("UK");
      const shipped = [uk.name, countryCopy(uk).sub];
      expect(shipped.some((s) => s === n(uk.units))).toBe(false);
      expect(shipped.some((s) => s.includes(uk.lines[0].artist.name))).toBe(false);
    });
  });

  describe("/records/tours/map: his countries and regions, and the page's World view coloured by the data", () => {
    const draw = () => treeOf(async () => (await import("../app/records/tours/map/opengraph-image")).default());

    it("the figure is the count of countries he has performed in, gold, over its regions", async () => {
      const t = await draw();
      expect(texts(body(t))).toEqual([String(playedCount), `COUNTRIES · ${regionCount} REGIONS`]);
      expect(colourOf(t, String(playedCount))).toEqual([FIG.gold]);
    });

    it("every country he played is gold, the rest of the page's land is the track, the islands are gold dots", async () => {
      const t = await draw();
      const [img] = images(t);
      const svg = svgOf(String(img.props.src));
      const paths = pathsOf(svg);
      expect(paths.map((p) => p.fill).sort()).toEqual([FIG.gold, FIG.track].sort());
      const gold = paths.find((p) => p.fill === FIG.gold)!.d;
      const track = paths.find((p) => p.fill === FIG.track)!.d;
      const played = new Set(performedCountries.map((c) => c.code));
      const shapes = worldShapes.filter((s) => played.has(s.code));
      expect(shapes.length).toBeGreaterThan(0);
      for (const s of shapes) {
        expect(gold.includes(s.d), String(s.code)).toBe(true);
        expect(track.includes(s.d), String(s.code)).toBe(false);
      }
      // The land is the page's own unplayed set (lib/tourMapData landCodes), nothing else.
      expect(track).toBe(worldShapes.filter((s) => landCodes.includes(s.code)).map((s) => s.d).join(""));
      const islands = performedCountries.filter((c) => c.marker);
      expect((svg.match(/<circle [^>]*fill="#ffb627"/g) ?? []).length).toBe(islands.length);
    });

    it("negative control: the shipped card drew no map and named no figure", () => {
      // records/tours/map/opengraph-image.tsx on main, its card verbatim.
      const shipped = { kicker: "Live worldwide", title: "Where He's Performed", sub: `${playedCount} countries across ${regionCount} regions — and counting` };
      const before = drawn.length;
      ogImage(shipped);
      const t = tree(drawn[before] as never);
      expect(images(t)).toEqual([]);
      expect(texts(body(t))).not.toContain(String(playedCount));
    });
  });

  describe("/records/tours (fix 124): six tours in date order, two bars, the rest not reported, gold only on the record", () => {
    const draw = () => treeOf(async () => (await import("../app/records/tours/opengraph-image")).default());
    const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);
    const start = (years: string) => Number.parseInt(years, 10);

    it("the figure is the top tour gross, read from the tour, gold", async () => {
      const top = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];
      const t = await draw();
      expect(texts(body(t)).slice(0, 2)).toEqual([top.gross, "TOP TOUR GROSS"]);
      expect(colourOf(t, top.gross!)).toEqual([FIG.gold]);
    });

    it("one column per tour, oldest first, labelled by its start year; a bar per reported gross, a hairline per unreported one", async () => {
      const t = await draw();
      const inOrder = [...tours].sort((a, b) => start(a.years) - start(b.years));
      expect(stripLabels(t)).toEqual(inOrder.map((x) => `’${String(start(x.years)).slice(-2)}`));
      const bars = stripBars(t);
      expect(bars).toHaveLength(tours.length);
      const reported = inOrder.map((x) => !!x.gross);
      expect(bars.map((b) => (b.style.height as number) > 2)).toEqual(reported);
      expect(reported.filter(Boolean)).toHaveLength(tours.filter((x) => x.gross).length);
      // Heights in proportion to the grosses: the taller bar is the larger gross.
      const max = Math.max(...tours.map((x) => grossOf(x.gross)));
      inOrder.forEach((x, i) => {
        if (x.gross) expect(bars[i].style.height, x.name).toBe(Math.round((grossOf(x.gross) / max) * TOURS_STRIP.height));
      });
      expect(texts(body(t))).toContain("— NOT REPORTED");
    });

    it("gold only on the record tour's bar; the other reported bars are --other, the hairlines muted", async () => {
      const t = await draw();
      const inOrder = [...tours].sort((a, b) => start(a.years) - start(b.years));
      const bars = stripBars(t);
      inOrder.forEach((x, i) => {
        expect(bars[i].style.background, x.name).toBe(!x.gross ? FIG.muted : x.record ? FIG.gold : FIG.other);
      });
      expect(bars.filter((b) => b.style.background === FIG.gold)).toHaveLength(tours.filter((x) => x.record && x.gross).length);
      expect(toursCard().columns.filter((c) => c.color === FIG.gold).every((c) => c.record)).toBe(true);
    });

    it("a bar only where a gross is reported; negative control: the drawing's bars for unreported tours fail", () => {
      // Fix 124: the canvas strip showed five grosses and one dash where only
      // some tours have a reported gross.
      const barPerGross = (cols: { gross: string | null; share: number }[]) => cols.every((c) => (c.share > 0) === !!c.gross);
      const card = toursCard().columns;
      expect(barPerGross(card)).toBe(true);
      // The drawing: a bar in every column, reported or not.
      expect(barPerGross(card.map((c) => ({ ...c, share: c.share || 0.5 })))).toBe(card.every((c) => !!c.gross));
    });
  });

  describe("/records/tours/festivals (fix 131): one bar per year, first to latest, each its year's count; gold only on the latest", () => {
    const draw = () => treeOf(async () => (await import("../app/records/tours/festivals/opengraph-image")).default());
    const years = festivals.map((f) => Number(f.year));
    const [first, last] = [Math.min(...years), Math.max(...years)];
    const count = (y: number) => years.filter((x) => x === y).length;

    it("the figure is every festival he headlined, gold, under its label", async () => {
      const t = await draw();
      expect(texts(body(t))).toEqual([String(festivals.length), "FESTIVALS HEADLINED", String(first), String(last)]);
      expect(colourOf(t, String(festivals.length))).toEqual([FIG.gold]);
    });

    it("a bar for every year from the first to the latest, its height that year's count; an empty year is a hairline", async () => {
      const t = await draw();
      const bars = stripBars(t);
      const span = Array.from({ length: last - first + 1 }, (_, i) => first + i);
      expect(bars).toHaveLength(span.length);
      const most = Math.max(...span.map(count));
      span.forEach((y, i) => {
        expect(bars[i].style.height, String(y)).toBe(count(y) ? Math.round((count(y) / most) * FESTIVALS_STRIP.height) : 2);
      });
      // The counts add up to the figure: no festival dropped, none counted twice.
      expect(festivalsCard().years.reduce((n, y) => n + y.count, 0)).toBe(festivals.length);
    });

    it("gold only on the latest year; every other bar, and every hairline, is --other", async () => {
      const t = await draw();
      const bars = stripBars(t);
      expect(bars.map((b) => b.style.background)).toEqual(bars.map((_, i) => (i === bars.length - 1 ? FIG.gold : FIG.other)));
    });

    it("negative control: the drawing's ten set heights are not the data's years", () => {
      // Fix 131: the canvas drew ten bars at set heights (Sharing.dc.html yrs(10)),
      // not one per year at that year's count.
      const drawing = ["30%", "45%", "60%", "2px", "70%", "55%", "2px", "80%", "65%", "90%"];
      const data = festivalsCard().years.map((y) => (y.count ? `${Math.round(y.share * 100)}%` : "2px"));
      expect(data).not.toEqual(drawing);
    });
  });

  describe("/dai-dai/es (fix 130, C-15): the English card in Spanish", () => {
    const draw = () => treeOf(async () => (await import("../app/dai-dai/es/opengraph-image")).default());
    const ES: Record<string, string> = { "Global 200": "GLOBAL 200", "Country No. 1s": "N.º 1 POR PAÍS", Charts: "LISTAS", Certs: "CERTIFICACIONES" };

    it("the cover at the left is the English card's own cover", async () => {
      const t = await draw();
      expect(images(t).map((n) => n.props.src)).toEqual([DAI_DAI_COVER]);
      // The English card draws the same constant, not a copy of its URL.
      const en = readFileSync("app/dai-dai/opengraph-image.tsx", "utf8");
      expect(en).toMatch(/const COVER = DAI_DAI_COVER;/);
      expect(en).not.toContain("i.scdn.co");
    });

    it("the title, then the card's sentence with its days at No. 1, under it", async () => {
      const t = await draw();
      const lines = texts(body(t));
      expect(lines[0]).toBe(esCard.title.toUpperCase());
      expect(colourOf(t, esCard.title.toUpperCase())).toEqual([FIG.gold]);
      const sentence = lines.slice(1, lines.indexOf(esTiles[0].v));
      expect(sentence.length).toBeGreaterThan(0);
      expect(sentence.length).toBeLessThanOrEqual(2);
      expect(sentence.join(" ")).toBe(esCard.sub);
      expect(esCard.sub).toMatch(/\d+ días como la canción más escuchada del mundo$/);
    });

    it("the English card's four figures, gold, over Spanish labels, two by two; the page's N.º, never No.", async () => {
      const t = await draw();
      const lines = texts(body(t));
      const tiles = lines.slice(lines.indexOf(esTiles[0].v));
      expect(tiles).toEqual(ogStats.flatMap((s) => [s.v.replace("No. ", "N.º "), ES[s.l]]));
      for (const s of ogStats) expect(colourOf(t, s.v.replace("No. ", "N.º "))).toEqual([FIG.gold]);
      expect(lines.join(" ")).not.toMatch(/\bNO\. 1\b|No\. 1/);
      // Two by two: the second and fourth tiles sit beside the first and third.
      const boxes = body(t).filter((n) => n.style.background === FIG.surface);
      expect(boxes).toHaveLength(4);
      expect(boxes.map((b) => [b.style.marginLeft, b.style.marginTop])).toEqual([
        [0, 0],
        [10, 0],
        [0, 10],
        [10, 10],
      ]);
    });

    it("negative control: the shipped card had no cover and no tiles, and fix 130's \"No. 1 por país\" is not the label (C-15)", () => {
      const before = drawn.length;
      ogImage(esCard);
      const shipped = tree(drawn[before] as never);
      expect(images(shipped)).toEqual([]);
      expect(texts(body(shipped))).not.toContain(esTiles[1].v);
      expect(esTiles.map((x) => x.l)).not.toContain("No. 1 por país");
    });
  });

  describe("/music/listeners (fix 131, C-12): the page's share, its read date, and its area-true dots", () => {
    const draw = () => treeOf(async () => (await import("../app/music/listeners/opengraph-image")).default());

    it("the figure is the page's insight tile, gold, over its whole and the date it was read", async () => {
      const t = await draw();
      const figure = listenerInsights().tiles[0].value;
      const lines = texts(body(t));
      expect(lines.slice(0, 3)).toEqual([figure, `OF ${compactListeners(MONTHLY_LISTENERS_ON_READ)} IN ${cityCount} CITIES`, `READ ${listenersReadOnLabel}`.toUpperCase()]);
      expect(colourOf(t, figure)).toEqual([FIG.gold]);
    });

    it("one gold dot per city, at the page's area-true radius (listenerDots), never under the 2px floor", async () => {
      const t = await draw();
      const [img] = images(t);
      const svg = svgOf(String(img.props.src));
      const radii = [...svg.matchAll(/<circle [^>]*r="([\d.]+)" fill="#ffb627"/g)].map((m) => Number(m[1]));
      expect(radii).toHaveLength(cityCount);
      const max = listenerCities[0].listeners;
      const want = [...listenerCities].sort((a, b) => b.listeners - a.listeners).map((c) => drawnRadius(dotRadius(c.listeners, max, RMAX_DESKTOP), LISTENERS_K));
      radii.forEach((r, i) => expect(r).toBeCloseTo(want[i], 2));
      for (const r of radii) expect(r * LISTENERS_K).toBeGreaterThanOrEqual(DOT_FLOOR_PX - 0.01);
      // Area-true above the floor: area in proportion to listeners.
      const big = [...listenerCities].sort((a, b) => b.listeners - a.listeners).slice(0, 5);
      for (const c of big) expect(dotRadius(c.listeners, max, RMAX_DESKTOP) ** 2 / dotRadius(max, max, RMAX_DESKTOP) ** 2).toBeCloseTo(c.listeners / max, 6);
      // Land is the dark track; nothing else is filled.
      expect(pathsOf(svg).map((p) => p.fill)).toEqual([FIG.track]);
    });

    it("the top three are named, each led by its rank, one to a line (C-12; owner ruling 15 Oct 2026, #11)", async () => {
      const t = await draw();
      const card = listenersCard();
      const named = listenerCities.filter((c) => c.rank <= NAMED).map((c) => `${c.rank} ${c.city.toUpperCase()}`);
      const drawnNames = card.lines.map((l) => l.text);
      expect([...drawnNames].sort()).toEqual([...named].sort());
      // One city to a label: Lagos and Port Harcourt, which sit closer than a
      // label line, are named one to a line east of their dots
      // (tests/ogListenersRanks.test.tsx), and London on its own.
      expect(card.labels.map((l) => l.ranks.length)).toEqual(named.map(() => 1));
      // Every name is drawn at 28px, on the map.
      const drawnLabels = body(t).filter((n) => named.some((c) => n.text.join("") === c));
      expect(drawnLabels).toHaveLength(card.lines.length);
      for (const n of drawnLabels) {
        expect(n.style.fontSize).toBe(28);
        expect(n.style.left as number).toBeGreaterThanOrEqual(0);
        expect(n.style.top as number).toBeGreaterThanOrEqual(0);
      }
    });

    it("London's name covers no other city: the rule's own order sets it, not the phone World view's right-hand side", () => {
      const card = listenersCard();
      const k = LISTENERS_K / (LABEL_SIZE / LABEL_PX);
      const london = card.labels.find((l) => l.lines[0].endsWith(" London"))!;
      expect(coveredBy(london, card.dots, k)).toEqual([]);
      // Negative controls: the guard sees a name set on a city's dot, and the
      // phone World view's old preference (this card's first build, 15 Oct
      // 2026: a lone city named to its right, level with it) set London's
      // name over Europe's cluster on this reading.
      const other = card.dots.find((d) => d.rank > NAMED)!;
      const onIt: MapLabel = { ...london, x: other.x - 1 / k, y: other.y + 4 / k, anchor: "start", ranks: london.ranks };
      expect(coveredBy(onIt, card.dots, k)).toContain(other.city);
      const dot = card.dots.find((d) => d.rank === london.ranks[0])!;
      const rightOfIt: MapLabel = { ...london, anchor: "start", x: dot.x + dot.r + GAP_PX / k, y: dot.y + (LABEL_ASCENT_PX - LABEL_DESCENT_PX) / 2 / k };
      expect(coveredBy(rightOfIt, card.dots, k).length).toBeGreaterThan(0);
    });

    it("negative control: the shipped card drew no map and named one city", () => {
      // music/listeners/opengraph-image.tsx on main: a plain card whose sub
      // named the top city alone.
      const before = drawn.length;
      ogImage({ kicker: "Spotify listeners", title: "Where the World Listens", sub: `${cityCount} cities — ${listenerCities[0].city} first · read ${listenersReadOnLabel}` });
      const shipped = tree(drawn[before] as never);
      expect(images(shipped)).toEqual([]);
      expect(texts(body(shipped))).not.toContain(listenerInsights().tiles[0].value);
    });
  });

  describe("/music: his studio albums, counted, and their covers in release order", () => {
    const draw = () => treeOf(async () => (await import("../app/music/opengraph-image")).default());

    it("the figure is the count of studio albums, gold, under its label", async () => {
      const t = await draw();
      expect(texts(body(t))).toEqual([String(albums.length), "STUDIO ALBUMS"]);
      expect(colourOf(t, String(albums.length))).toEqual([FIG.gold]);
    });

    it("one cover per album, in release order, each square, one size, inside the body", async () => {
      const t = await draw();
      const covers = images(t);
      expect(covers.map((n) => n.props.src)).toEqual(studioAlbumsInOrder.map((a) => artAt(a.cover!, 300)));
      expect(covers).toHaveLength(albums.length);
      const sizes = new Set(covers.map((n) => `${n.style.width}x${n.style.height}`));
      expect(sizes.size).toBe(1);
      const [w, h] = [...sizes][0].split("x").map(Number);
      expect(w).toBe(h);
      expect(w).toBeGreaterThanOrEqual(64); // never under the slot's own rung
      // Release order is the standard editions' dates, oldest first.
      const dates = studioAlbumsInOrder.map((a) => a.released ?? String(a.year));
      expect([...dates].sort()).toEqual(dates);
    });

    it("negative control: the shipped card drew no covers, and its count sat in a sentence", () => {
      // music/opengraph-image.tsx on main, its card verbatim.
      const before = drawn.length;
      ogImage({ kicker: "Discography", title: "The Music", sub: `${albums.length} studio albums, ${eps.length} EPs and every certified hit` });
      const shipped = tree(drawn[before] as never);
      expect(images(shipped)).toEqual([]);
      expect(texts(body(shipped))).not.toContain(String(albums.length));
    });
  });

  describe("/live-charts (fix 131): No. 1s now in the live green, the noun placements, the top three platforms by placements", () => {
    const draw = () => treeOf(async () => (await import("../app/live-charts/opengraph-image")).default());
    const n = (x: number) => x.toLocaleString("en-US");

    it("the figure is the placements at No. 1 right now, green, over the placements counted", async () => {
      const t = await draw();
      expect(texts(body(t)).slice(0, 3)).toEqual([n(liveNumberOnes), "AT NO. 1 NOW", `${n(livePlacementCount)} PLACEMENTS`]);
      expect(colourOf(t, n(liveNumberOnes))).toEqual([FIG.green]);
      // Gold is his and live is green: no gold on this card's body.
      expect(body(t).map((x) => x.style.color)).not.toContain(FIG.gold);
    });

    it("the list is the snapshot's top three platforms by placements, names and counts read from it, in ink", async () => {
      const t = await draw();
      const top = [...livePlatformTotals].sort((a, b) => b.placements - a.placements).slice(0, 3);
      expect(texts(body(t)).slice(3)).toEqual(top.flatMap((p) => [p.platform.toUpperCase(), n(p.placements)]));
      for (const p of top) expect(colourOf(t, n(p.placements)), p.platform).toEqual([FIG.ink]);
    });

    it("negative controls: the shipped card's noun, and the drawing's fixed three platforms", () => {
      // live-charts/opengraph-image.tsx on main: title `${livePlacementCount} charts`.
      const shipped = { kicker: "Live charts", title: `${livePlacementCount} charts`, sub: `Charting in ${liveCountryCount} countries right now · ${liveNumberOnes} at No. 1` };
      expect(shipped.title).not.toMatch(/placements/);
      // The canvas fixed three platforms (Spotify, Apple Music, YouTube) whatever
      // the data; the route names none: every name is the snapshot's.
      const typedPlatform = /["'`](?:Spotify|Apple Music|YouTube|iTunes|Deezer|Shazam)["'`]/;
      expect(typedPlatform.test("list: [{ k: 'Spotify', v: '{n}', c: T }, { k: 'Apple Music', v: '{n}', c: T }]")).toBe(true);
      expect(readFileSync("app/live-charts/opengraph-image.tsx", "utf8")).not.toMatch(typedPlatform);
    });
  });

  it("no route file types a figure: no money literal, no 2+ digit number in a string", () => {
    const typed = (src: string) => {
      const code = src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "").replace(/\{\/\*[\s\S]*?\*\/\}/g, "");
      const strings = code.match(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g) ?? [];
      return strings.filter((s) => /\$\d|\d{2,}/.test(s.replace(/\$\{[^}]*\}/g, "")));
    };
    for (const f of ROUTE_FILES) expect(typed(readFileSync(f, "utf8")), f).toEqual([]);
    // Negative control: the shipped tours card's sub (records/tours/opengraph-image.tsx:9).
    expect(typed('  sub: "$30.46M — the highest-grossing tour ever by an African artist",')).toHaveLength(1);
  });
});
