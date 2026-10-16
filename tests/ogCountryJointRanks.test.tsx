// @vitest-environment node
import { body, fontSizes, texts, tree, type Node } from "./fixtures/ogTree";
import { FIG, MONO_SIZE, MONO_TRACK, ogFigureVersions } from "../app/lib/og-figure";
import { monoWidth } from "../app/lib/ogFit";
import { certCountryCodes, countrySlug, priceCountry, type CountryBoard } from "../app/lib/certCountry";
import { COUNTRY_COLUMN, countryCard, countryCardTexts } from "../app/lib/ogCountryCard";
import { PREVIEW_BYTES } from "../app/lib/onThisDayImages";

/**
 * ogCountryJointRanks (owner, 16 Oct 2026: "for other 4, do your
 * recommendation"). The /compare/in/<country> link preview's top three
 * printed a tie as bare places — Greece "1 TYLA · 1 WIZKID · 3 TEMS", the
 * Czech Republic and Slovakia "1 · 1 · 1" — while the boards, since the 15 Oct
 * ruling (question 1, PR #507), print "=1" on every row that shares a place.
 * The card now prints the board's labels: "=1 =1 3". They are the board's
 * own, over its whole list, so a third row level with the fourth reads "=3"
 * (Germany's). Every country's preview still renders, its rows fit their
 * column at the 28px floor, his value stays gold and the rest ink, and each
 * is within the preview budget.
 *
 * The expected labels are worked out here from the board's lines, not from
 * the helper the card ranks with.
 */

vi.setConfig({ testTimeout: 180_000 });

const drawn = vi.hoisted(() => [] as unknown[]);
vi.mock("next/og", async (orig) => {
  const real = (await orig()) as typeof import("next/og");
  class Recording extends real.ImageResponse {
    constructor(...args: ConstructorParameters<typeof real.ImageResponse>) {
      drawn.push(args[0]);
      super(...args);
    }
  }
  return { ...real, ImageResponse: Recording };
});

const boards = certCountryCodes().map((code) => priceCountry(code));
const n = (x: number) => x.toLocaleString("en-US");
const metricOf = (b: CountryBoard) => b.lines.map((l) => (b.counted > 0 ? l.units : l.plaques));
/** The board's rule: one more than the number of lines with more, "=" where
 *  another line on the board holds the same value. */
const expected = (b: CountryBoard) => {
  const m = metricOf(b);
  return m.slice(0, 3).map((v) => `${m.filter((x) => x === v).length > 1 ? "=" : ""}${m.filter((x) => x > v).length + 1}`);
};

const cards = new Map<string, { t: Node; bytes: number; type: string | null; alt: string; id: string }>();
beforeAll(async () => {
  const route = await import("../app/compare/in/[country]/opengraph-image");
  for (const b of boards) {
    const before = drawn.length;
    const params = Promise.resolve({ country: countrySlug(b.code) });
    const res = await route.default({ params });
    const bytes = (await res.arrayBuffer()).byteLength;
    expect(drawn.length, b.code).toBe(before + 1);
    const [meta] = await route.generateImageMetadata({ params: Promise.resolve({ country: countrySlug(b.code) }) });
    cards.set(b.code, { t: tree(drawn[before] as never), bytes, type: res.headers.get("content-type"), alt: meta.alt, id: meta.id });
  }
});
const rowsOf = (b: CountryBoard) => texts(body(cards.get(b.code)!.t)).slice(-2 * Math.min(3, b.lines.length));
const tied = boards.filter((b) => expected(b).some((r) => r.startsWith("=")));

describe("ogCountryJointRanks: a tie in a country preview's top three reads \"=n\", as the board prints it", () => {
  it("the case is real: some board's top three holds a tie (16 Oct 2026: Greece, the Czech Republic, Slovakia, Colombia and others, and Germany's third, level with its fourth)", () => {
    expect(tied.length).toBeGreaterThan(0);
    for (const b of tied) expect(countryCard(b).rows.some((r) => r.rank.startsWith("=")), b.code).toBe(true);
  });

  it.each(boards.map((b) => [b.code, b] as const))("%s: the card's places are the board's labels, drawn before each name", (_code, b) => {
    const card = countryCard(b);
    expect(card.rows.map((r) => r.rank)).toEqual(expected(b));
    const rows = rowsOf(b);
    const top = b.lines.slice(0, 3);
    expect(rows).toEqual(top.flatMap((l, i) => [`${expected(b)[i]} ${l.artist.name.toUpperCase()}`, n(metricOf(b)[i])]));
    // Never two rows at one bare number: "1 1 3" reads as an order the data does not have.
    const bare = card.rows.map((r) => r.rank).filter((r) => !r.startsWith("="));
    expect(new Set(bare).size, bare.join(" ")).toBe(bare.length);
  });

  it.each(boards.map((b) => [b.code, b] as const))("%s: every row fits its column at the 28px floor, a letter clear between name and value", (_code, b) => {
    const t = cards.get(b.code)!.t;
    for (const r of countryCard(b).rows) {
      const left = monoWidth(`${r.rank} ${r.name.toUpperCase()}`, MONO_SIZE, MONO_TRACK);
      const right = monoWidth(r.value, MONO_SIZE, MONO_TRACK);
      expect(left + monoWidth("M", MONO_SIZE, MONO_TRACK) + right, `${r.rank} ${r.name} ${r.value}`).toBeLessThanOrEqual(COUNTRY_COLUMN);
    }
    for (const f of fontSizes(body(t))) expect(f.size, f.text).toBeGreaterThanOrEqual(28);
  });

  it.each(boards.map((b) => [b.code, b] as const))("%s: his value gold when he is in the three, every other value ink", (_code, b) => {
    const nodes = body(cards.get(b.code)!.t);
    const top = b.lines.slice(0, 3);
    top.forEach((l, i) => {
      const value = n(metricOf(b)[i]);
      const name = `${expected(b)[i]} ${l.artist.name.toUpperCase()}`;
      // The value node right after its row's name node.
      const at = nodes.findIndex((x) => x.text.join("") === name);
      const node = nodes.slice(at + 1).find((x) => x.text.join("") === value)!;
      expect(node.style.color, `${b.code} ${l.artist.name}`).toBe(l.artist.slug === "burna-boy" ? FIG.gold : FIG.ink);
      expect(nodes[at].style.color, `${b.code} ${l.artist.name}'s name`).toBe(FIG.ink);
    });
  });

  it("each preview renders as a PNG within the budget", () => {
    for (const b of boards) {
      const c = cards.get(b.code)!;
      expect(c.type, b.code).toBe("image/png");
      expect(c.bytes, b.code).toBeGreaterThan(10_000);
      expect(c.bytes, b.code).toBeLessThanOrEqual(PREVIEW_BYTES);
    }
  });

  it("the alt reads the same places, and the tie re-versions the preview so a cached card is fetched again", () => {
    for (const b of tied) {
      const c = cards.get(b.code)!;
      const card = countryCard(b);
      for (const r of card.rows) expect(c.alt, b.code).toContain(`${r.rank} ${r.name}, ${r.value}`);
      // The id texts carry the ranks: main's bare places gave another id.
      const shipped = { ...card, rows: card.rows.map((r) => ({ ...r, rank: r.rank.replace("=", "") })) };
      expect(c.id, b.code).not.toBe(ogFigureVersions(countryCardTexts(shipped), c.alt)[0].id);
    }
  });
});

describe("negative control: the places main printed", () => {
  /** ogCountryCard.ts on origin/main db35e489: `jointRanks(top.map(metric))`
   *  over the three, printed with String() — the places, never "=". */
  const mains = (values: number[]) => values.slice(0, 3).map((v, _i, top) => String(top.indexOf(v) + 1));
  /** The rule, as the board prints it, on a plain list of values. */
  const rule = (values: number[]) => values.slice(0, 3).map((v) => `${values.filter((x) => x === v).length > 1 ? "=" : ""}${values.filter((x) => x > v).length + 1}`);

  it("main drew Greece's three, 18,000 · 18,000 · 12,000 units, as 1 TYLA · 1 WIZKID · 3 TEMS", () => {
    // Greece's board on 16 Oct 2026, as main's card drew it.
    const greece = [18_000, 18_000, 12_000, 6_000];
    expect(mains(greece)).toEqual(["1", "1", "3"]);
    expect(rule(greece)).toEqual(["=1", "=1", "3"]);
    // Germany's: a third row level with the fourth, which main's three alone could not see.
    const germany = [1_500_000, 1_200_000, 600_000, 600_000];
    expect(mains(germany)).toEqual(["1", "2", "3"]);
    expect(rule(germany)).toEqual(["1", "2", "=3"]);
  });

  it("on every board with a tie today, main's places are not the board's, and the card now prints the board's", () => {
    for (const b of tied) {
      const shipped = mains(metricOf(b));
      expect(shipped, b.code).not.toEqual(expected(b));
      expect(countryCard(b).rows.map((r) => r.rank), b.code).toEqual(expected(b));
    }
  });
});
