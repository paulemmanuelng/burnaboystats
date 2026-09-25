import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../app/compare/page";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";
import { countryMeta } from "../app/data/afrobeats";
import { compare, comparableArtists, priceRelease } from "../app/lib/certUnits";
import { PICKER_FOLD, pickerArtists, pickerReleases } from "../app/lib/comparePicker";

/**
 * /compare rendered off the query string, the way the server does it.
 *
 * Each case here is a defect the final adversarial sweep confirmed against the
 * live page, reproduced by URL. They are the page's OWN words: the assertions
 * quote the strings that shipped, so a rewrite that brings a wording back
 * fails here rather than on screen.
 */
async function html(sp: Record<string, string>): Promise<string> {
  const tree = await ComparePage({ searchParams: Promise.resolve(sp) });
  return renderToStaticMarkup(tree);
}
const text = (h: string) => h.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const hrefs = (h: string) => [...h.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));

describe("the same artist on both sides", () => {
  it("refuses and prices nothing — no 'at least 0', no empty slot meta", async () => {
    const h = await html({ a: "burna-boy", b: "burna-boy" });
    const t = text(h);
    expect(t).toContain("That is Burna Boy on both sides.");
    expect(t).not.toContain("at least 0");
    expect(t).not.toContain("· ·");
    expect(t).not.toContain("0 countries");
    // The head card and the one-side hint belong to a comparison in progress;
    // a refused pairing is neither.
    expect(t).not.toContain("· at least");
    expect(t).not.toContain("appears when both sides are filled");
  });

  it("in song mode, every slot offers a way OUT of a=b, not only a different song", async () => {
    const h = await html({ mode: "songs", a: "burna-boy", b: "burna-boy", sa: "Ye", sb: "Last Last" });
    expect(text(h)).toContain("That is Burna Boy on both sides.");
    const links = hrefs(h).filter((x) => x.startsWith("/compare"));
    // A link that drops side a entirely (keeps b), and one that drops side b.
    expect(links.some((x) => !/[?&]a=/.test(x) && /[?&]b=burna-boy/.test(x))).toBe(true);
    expect(links.some((x) => !/[?&]b=/.test(x) && /[?&]a=burna-boy/.test(x))).toBe(true);
    expect(text(h)).not.toContain("Change song");
  });
});

describe("the same recording on both sides", () => {
  it("refuses, shows no head card and no pick-a-release hint, keeps 'Change song'", async () => {
    // Essence is one recording carried on two artists' pages.
    const h = await html({ mode: "songs", a: "wizkid", b: "tems", sa: "Essence", sb: "Essence" });
    const t = text(h);
    expect(t).toContain("That is the same recording on both sides.");
    expect(t).not.toContain("Pick a song on each side");
    expect(t).not.toContain("· at least");
    expect(t).toContain("Change song");
  });
});

describe("the one-side hint follows the featured switch", () => {
  it("counts every plaque by default, and says so; feat=0 is lead credits only", async () => {
    const on = text(await html({ a: "burna-boy" }));
    const off = text(await html({ a: "burna-boy", feat: "0" }));
    expect(on).toContain("Every plaque the artist holds counts, featured appearances included.");
    expect(on).toContain("on · every plaque held");
    expect(off).toContain("Featured appearances are off — lead credits only.");
    expect(off).toContain("off · lead credits only");
    // The 19× Platinum on "All Eyes on Me" (a feature) is in the default view,
    // and so are the six Swedish plaques since Sweden is priced (§).
    // 171: + Dai Dai GR Platinum (priced ¶ at IFPI's 2013 level, 20 Sep 2026), + Dai Dai SE Platinum (priced §, 20 Sep), + BE Gold (19 Sep), + City Boys PT Gold (18 Sep 2026)
    // 173: + Dai Dai DE Gold, BVMI (read 23 Sep 2026); + Dai Dai CA 2× Platinum, Music Canada 21 Sep 2026
    expect(on).toContain("175 counted"); // + Dai Dai PL Gold and We Pray PL Platinum, Poland's singles priced at ZPAV's 2 zł (23 Sep 2026)
  });
});

describe("the song picker's count line", () => {
  it("treats a punctuation-only query as no query", async () => {
    const t = text(await html({ mode: "songs", a: "burna-boy", qa: "&" }));
    expect(t).not.toContain("match “&”");
    expect(t).toMatch(/Burna Boy · all \d+ certified songs/);
  });

  it("still reports a real query", async () => {
    const t = text(await html({ mode: "songs", a: "burna-boy", qa: "last" }));
    expect(t).toMatch(/\d+ of \d+ match “last”/);
  });
});

describe("the mode segments", () => {
  it("do not link the mode you are already in", async () => {
    const h = await html({ a: "burna-boy", b: "wizkid", all: "1" });
    expect(h).toMatch(/aria-current="page"[^>]*><span class="[^"]*">Artist totals</);
    // No self-link to artists mode that would drop all=1.
    expect(hrefs(h).some((x) => /mode=artists/.test(x))).toBe(false);
  });

  it("drop the song-only params when switching to artist totals", async () => {
    const h = await html({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Ye", qb: "ess" });
    const toArtists = hrefs(h).find((x) => /mode=artists/.test(x));
    expect(toArtists).toBeDefined();
    expect(toArtists).not.toMatch(/[?&](sa|sb|qa|qb)=/);
  });
});

describe("the collapse row counts plaques, per fold", () => {
  it("matches the engine's own tally of unpriced plaques in each folded tail", async () => {
    const [a, b] = [comparableArtists.find((x) => x.slug === "burna-boy")!, comparableArtists.find((x) => x.slug === "olamide")!];
    const c = compare(a, b, { includeFeatures: true });
    expect(c.collapsed.length).toBeGreaterThan(0);
    const t = text(await html({ a: "burna-boy", b: "olamide" }));
    const unpriced = (l: { counted: boolean; releases: number; notCounted?: { plaques: number } } | null) =>
      !l ? 0 : !l.counted ? l.releases : l.notCounted?.plaques ?? 0;
    for (const tail of c.collapsed) {
      const n = tail.rows.reduce((m, r) => m + unpriced(r.a) + unpriced(r.b), 0);
      const row = t.match(new RegExp(`\\+ ${tail.countries} further countries where only ${tail.artist} is certified[^+]*`))?.[0] ?? "";
      expect(row, `no collapse row for ${tail.artist}`).not.toBe("");
      if (n > 0) expect(row).toContain(`${n} plaque${n === 1 ? "" : "s"} not counted ¹`);
      else expect(row).not.toContain("not counted");
    }
  });
});

describe("the song slot's plaque count", () => {
  it("names the Nigerian plaque the header's denominator leaves out", async () => {
    const wizkid = comparableArtists.find((x) => x.slug === "wizkid")!;
    const essence = wizkid.releases.find((r) => r.title === "Essence")!;
    const ng = essence.certs.filter((c) => c.c === "NG").length;
    expect(ng).toBeGreaterThan(0);
    const intl = essence.certs.length - ng;
    const p = priceRelease(wizkid, "Essence", { includeNigeria: false, includeFeatures: true });
    expect(p.pricedPlaques + p.excludedPlaques).toBe(intl);
    const t = text(await html({ mode: "songs", a: "wizkid", b: "burna-boy", sa: "Essence", sb: "Ye" }));
    expect(t).toContain(`${intl} international plaques + ${ng} Nigerian`);
    expect(t).toContain(`${p.pricedPlaques} of ${intl} plaques counted`);
    expect(t).not.toContain(`${essence.certs.length} plaques`);
  });
});

describe("the pickers fold after eight, and drop nothing", () => {
  // CSS-module classes are hashed here ("_chip_b2b4d1"); match the stem.
  const chipsIn = (h: string) => [...h.matchAll(/<a href="([^"]+)" class="_chip_[^"]*">(.*?)<\/a>/g)].map((m) => ({ href: m[1].replace(/&amp;/g, "&"), text: m[2].replace(/<[^>]+>/g, "") }));
  const beforeDetails = (h: string) => h.split("<details")[0];
  const insideDetails = (h: string) => h.split("<details")[1]?.split("</details>")[0] ?? "";

  it("artist list: first eight by plaques, the rest behind one disclosure", async () => {
    const h = await html({});
    const expected = pickerArtists().map((a) => a.name);
    // Two empty slots, both folded the same way — take the first.
    const first = h.split(">vs<")[0];
    const shown = chipsIn(beforeDetails(first)).map((c) => c.text);
    const folded = chipsIn(insideDetails(first)).map((c) => c.text);
    expect(shown).toEqual(expected.slice(0, PICKER_FOLD));
    expect(folded).toEqual(expected.slice(PICKER_FOLD));
    expect(shown.length + folded.length).toBe(comparableArtists.length);
    // The noun rides inside the toggle so its accessible name follows the
    // open state ("+ 12 more artists" / "Show fewer artists").
    expect(text(first)).toContain(`+ ${comparableArtists.length - PICKER_FOLD} more artists ↓`);
    expect(text(first)).toContain("Show fewer artists ↑");
    expect(first).not.toContain("aria-label=\"Show");
  });

  it("song list: first eight by plaques, the rest behind one disclosure — search included", async () => {
    const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
    for (const qa of ["", "a"]) {
      const h = await html({ mode: "songs", a: "burna-boy", ...(qa ? { qa } : {}) });
      const expected = pickerReleases(burna, qa, "single").map((r) => r.title);
      const pick = h.split("pickWrap")[1];
      const shown = chipsIn(beforeDetails(pick)).map((c) => c.text.replace(/&#x27;/g, "'").replace(/&amp;/g, "&"));
      const folded = chipsIn(insideDetails(pick)).map((c) => c.text.replace(/&#x27;/g, "'").replace(/&amp;/g, "&"));
      expect(shown, `query “${qa}”`).toEqual(expected.slice(0, PICKER_FOLD));
      expect(folded, `query “${qa}”`).toEqual(expected.slice(PICKER_FOLD));
      expect(text(pick)).toContain(`+ ${expected.length - PICKER_FOLD} more songs ↓`);
    }
  });

  it("a list of eight or fewer has no disclosure at all", async () => {
    const h = await html({ mode: "songs", a: "burna-boy", qa: "last last" });
    const pick = h.split("pickWrap")[1];
    expect(chipsIn(pick).length).toBeLessThanOrEqual(PICKER_FOLD);
    expect(pick).not.toContain("<details");
  });
});

describe("the page never widens past the phone", () => {
  it("<main> is an explicit full-width flex item — fit-content let the table set the page width", () => {
    // body is a column flexbox and .wrap carries auto side margins, so without
    // an explicit width the item is fit-content: the country table's
    // min-content (372px) pushed the document to 404px on a 375px phone and
    // clipped the right edge of every row. Measured with headless Chrome,
    // 11 Sep 2026; this pins the rule that fixed it.
    const css = readFileSync(join(process.cwd(), "app/compare/compare.module.css"), "utf8");
    const wrap = css.match(/\.wrap\s*\{([^}]*)\}/)?.[1] ?? "";
    expect(wrap).toMatch(/width:\s*100%/);
    expect(wrap).toMatch(/margin:\s*0 auto/);
  });
});

describe("the phone audit's fixes stay fixed", () => {
  const css = () => readFileSync(join(process.cwd(), "app/compare/compare.module.css"), "utf8");
  const phoneBlock = () => {
    const c = css();
    const i = c.indexOf("@media (max-width: 760px)");
    return c.slice(i, c.indexOf("\n}\n", i));
  };

  it("the skip link has somewhere to go", async () => {
    expect(await html({ a: "burna-boy", b: "wizkid" })).toContain('<main id="content"');
  });

  it("state controls keep the reader's place — they carry scroll={false}", () => {
    // Rendered Links lose the prop, so this reads the source: every in-place
    // control (switches, Nigeria action, Show all/fewer) must opt out of the
    // scroll-to-top a navigation does by default. Tapping "Show all ↓" at the
    // foot of the table put the reader back at the top (scrollY 1600 → 43).
    const src = readFileSync(join(process.cwd(), "app/compare/page.tsx"), "utf8");
    for (const marker of ["{ feat: includeFeatures", "{ ng: ngOn", "{ all: \"1\" }"]) {
      const i = src.indexOf(`href={href(sp, ${marker}`);
      expect(i, marker).toBeGreaterThan(-1);
      expect(src.slice(i, i + 220), `${marker} should keep scroll position`).toContain("scroll={false}");
    }
    // "Show fewer" is the exception: collapsing the table above the reader
    // clamped the page under the header, so it lands on the folded table.
    const j = src.indexOf("href={`${href(sp, { all: null })}#country-table`}");
    expect(j).toBeGreaterThan(-1);
  });

  it("the search field cannot make iOS zoom, and fills its row on a phone", () => {
    const block = phoneBlock();
    expect(block).toMatch(/\.search \.searchInput \{[^}]*font-size: 16px/);
    expect(block).toMatch(/\.search \{[^}]*flex: 1 1 100%/);
    expect(css()).toMatch(/\.searchInput \{[^}]*appearance: none/);
  });

  it("nothing meaningful is display:none on a phone — country names and the head meta stay in the tree", () => {
    const block = phoneBlock();
    expect(block).not.toMatch(/\.countryName \{[^}]*display: none/);
    expect(block).not.toMatch(/\.headMeta \{[^}]*display: none/);
    expect(block).toMatch(/\.countryName \{[^}]*clip: rect/);
  });

  it("no text on the page is set under the 11px floor, and nothing dims text with opacity", () => {
    const c = css();
    const sizes = [...c.matchAll(/font-size:\s*(\d+(?:\.\d+)?)px/g)].map((m) => Number(m[1]));
    expect(sizes.filter((n) => n < 11)).toEqual([]);
    expect(c).not.toMatch(/\.noPlaque \{[^}]*opacity\s*:/);
    expect(c).not.toMatch(/\.chipProgram \{[^}]*opacity\s*:/);
  });

  it("the switches name their control and the glyphs are decorative", async () => {
    const h = await html({ a: "burna-boy", b: "wizkid" });
    expect(h).toContain('<span class="visuallyHidden">Nigeria: </span>');
    expect(h).toContain('<span class="visuallyHidden">Featured appearances: </span>');
    expect(h).toContain('How this is counted <span aria-hidden="true">↗</span>');
    expect(h).toContain('<span aria-hidden="true">🇳🇬</span> Nigeria —');
    expect(h).toMatch(/<h2 class="[^"]*">.*Nigeria — separated\./);
    expect(h).toContain('<table class="_table_');
    expect(h).toContain('role="table"');
  });

  it("the phone table's rows are the design's grid, and the clear control is 44px", () => {
    const block = phoneBlock();
    expect(block).toMatch(/\.table tr \{[^}]*grid-template-columns: 78px minmax\(0, 1fr\) minmax\(0, 1fr\)/);
    expect(block).toMatch(/\.slot \.slotClear \{[^}]*height: 44px/);
  });
});

describe("album vs album", () => {
  const chipsIn = (h: string) => [...h.matchAll(/<a href="([^"]+)" class="_chip_[^"]*">(.*?)<\/a>/g)].map((m) => m[2].replace(/<[^>]+>/g, "").replace(/&#x27;/g, "'").replace(/&amp;/g, "&"));
  const burna = comparableArtists.find((x) => x.slug === "burna-boy")!;
  const wizkid = comparableArtists.find((x) => x.slug === "wizkid")!;

  it("offers three modes, and switching drops the chosen titles", async () => {
    const h = await html({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Ye", qb: "ess" });
    const t = text(h);
    for (const label of ["Song vs song", "Album vs album", "Artist totals"]) expect(t).toContain(label);
    const toAlbums = hrefs(h).find((x) => /mode=albums/.test(x));
    expect(toAlbums).toBeDefined();
    expect(toAlbums).not.toMatch(/[?&](sa|sb|qa|qb)=/);
    expect(toAlbums).toMatch(/a=burna-boy/);
  });

  it("the album picker lists every certified album and no single; the song picker the reverse", async () => {
    const albums = burna.releases.filter((r) => r.format === "album").map((r) => r.title).sort();
    const singles = burna.releases.filter((r) => r.format !== "album").map((r) => r.title).sort();
    expect(albums.length).toBeGreaterThan(0);
    const ha = await html({ mode: "albums", a: "burna-boy" });
    const pa = ha.split("pickWrap")[1];
    expect(chipsIn(pa).sort()).toEqual(albums);
    expect(text(pa)).toContain(`Burna Boy · all ${albums.length} certified albums`);
    const hs = await html({ mode: "songs", a: "burna-boy" });
    const ps = hs.split("pickWrap")[1];
    expect(chipsIn(ps).sort()).toEqual(singles);
    expect(text(ps)).toContain(`Burna Boy · all ${singles.length} certified songs`);
    // The slot says what the picker holds, not the artist totals.
    expect(text(ha)).toContain(`${albums.length} certified albums`);
    expect(text(ha)).not.toContain("artist totals");
  });

  it("an artist with no certified album says so and offers the song mode", async () => {
    const t = text(await html({ mode: "albums", a: "olamide" }));
    expect(t).toContain("Olamide holds no certified album on this site");
    expect(t).toContain("Compare songs instead");
    expect(t).not.toContain("matches “”");
  });

  it("a single named in album mode is not chosen", async () => {
    const t = text(await html({ mode: "albums", a: "burna-boy", sa: "Ye" }));
    expect(t).not.toContain("Ye · at least");
    expect(t).toContain("Burna Boy · all");
  });

  it("prices two albums against each other", async () => {
    const a = burna.releases.find((r) => r.format === "album")!;
    const b = wizkid.releases.find((r) => r.format === "album")!;
    const pa = priceRelease(burna, a.title, { includeNigeria: false, includeFeatures: true })!;
    const pb = priceRelease(wizkid, b.title, { includeNigeria: false, includeFeatures: true })!;
    const t = text(await html({ mode: "albums", a: "burna-boy", b: "wizkid", sa: a.title, sb: b.title }));
    expect(t).toContain(`${a.title} · at least ${pa.total.toLocaleString("en-US")}`);
    expect(t).toContain(`${b.title} · at least ${pb.total.toLocaleString("en-US")}`);
    expect(t).toContain("Change album");
    expect(t).not.toContain("Change song");
  });
});

describe("the pair pages", () => {
  it("one canonical order per pair, the reverse parses to the same pair, unknowns are null", async () => {
    const { allPairs, canonicalPair, pairSlug, parsePair, featuredPairs } = await import("../app/lib/comparePairs");
    const pairs = allPairs();
    const n = comparableArtists.length;
    expect(pairs).toHaveLength((n * (n - 1)) / 2);
    // 120 pairs of 16 artists until 25 Sep 2026; Kizz Daniel, Ruger, Oxlade and
    // Tiwa Savage make it 20 artists and 190 pairs.
    expect(pairs).toHaveLength(190);
    const slugs = pairs.map(([a, b]) => pairSlug(a, b));
    expect(new Set(slugs).size).toBe(pairs.length);
    for (const [a, b] of pairs) {
      const slug = pairSlug(a, b);
      const parsed = parsePair(slug)!;
      expect(parsed.map((x) => x.slug)).toEqual([a.slug, b.slug]);
      // The reverse order names the same pair and canonicalises to this slug.
      const rev = parsePair(`${b.slug}-vs-${a.slug}`)!;
      expect(pairSlug(rev[0], rev[1])).toBe(slug);
      expect(canonicalPair(b, a).map((x) => x.slug)).toEqual([a.slug, b.slug]);
    }
    expect(parsePair("burna-boy-vs-burna-boy")).toBeNull();
    expect(parsePair("nobody-vs-wizkid")).toBeNull();
    expect(parsePair("burna-boy")).toBeNull();
    expect(featuredPairs().length).toBeGreaterThan(5);
  });

  it("the checked-in reverse-order redirects match the data", async () => {
    const { allPairs } = await import("../app/lib/comparePairs");
    const rows = JSON.parse(readFileSync(join(process.cwd(), "app/data/comparePairRedirects.json"), "utf8")) as { source: string; destination: string; permanent: boolean }[];
    const expected = allPairs().map(([a, b]) => ({ source: `/compare/${b.slug}-vs-${a.slug}`, destination: `/compare/${a.slug}-vs-${b.slug}`, permanent: true }));
    expect(rows, "run: npx tsx scripts/build-compare-redirects.mjs").toEqual(expected);
  });

  it("title and description fit Google's display limits for every pair", async () => {
    const { allPairs, pairCopy } = await import("../app/lib/comparePairs");
    for (const [a, b] of allPairs()) {
      const c = pairCopy(a, b);
      expect(c.title.length, c.title).toBeLessThanOrEqual(60);
      expect(c.description.length, c.description).toBeLessThanOrEqual(160);
      expect(c.description).toContain("at least");
      expect(c.description).not.toMatch(/\bsold\b/);
    }
  });

  it("the arrival state links the head-to-heads, and a pair page carries its own trail and dataset", async () => {
    const { featuredPairs, pairSlug } = await import("../app/lib/comparePairs");
    const h = await html({});
    for (const [a, b] of featuredPairs()) expect(h).toContain(`href="/compare/${pairSlug(a, b)}"`);
    const { CompareView } = await import("../app/compare/page");
    const tree = await CompareView({ sp: { a: "burna-boy", b: "wizkid" }, path: "/compare/burna-boy-vs-wizkid", leaf: "Burna Boy vs Wizkid" });
    const ph = renderToStaticMarkup(tree);
    expect((ph.match(/"@type":"BreadcrumbList"/g) ?? []).length).toBe(1);
    expect(ph).toContain('"name":"Burna Boy vs Wizkid","item":"https://burnaboystats.com/compare/burna-boy-vs-wizkid"');
    expect(ph).toContain('"@type":"Dataset"');
    expect(text(ph)).toContain("Burna Boy vs Wizkid");
  });
});

describe("the method card names every stream-ratio body the table prices", () => {
  // Typed, the card said "France, Denmark, Norway and the Netherlands" while
  // the same response priced Czech and Slovak plaques by the same rule. The
  // card now derives its list with the filter /methodology uses; this holds
  // the two to each other.
  it("lists each body with singleRaw and no assumed ratio, by country name", async () => {
    const page = await html({ a: "burna-boy", b: "wizkid", all: "1" });
    const card = page.slice(page.indexOf("Streams-based bodies"), page.indexOf("never an estimate"));
    expect(card.length).toBeGreaterThan(20);
    for (const t of Object.values(CERT_THRESHOLDS)) {
      if (!t.singleRaw || t.assumed) continue;
      const name = t.code === "NL" ? "Netherlands" : t.code === "CZ" ? "Czechia" : countryMeta(t.code).name;
      expect(card, `${t.code} is priced by its own ratio and should be named`).toContain(name);
    }
    for (const code of ["BE", "BR", "SE", "MX"]) {
      expect(card, `${code} converts no streams by a body ratio`).not.toContain(countryMeta(code).name);
    }
  });
});

// Batch 4c (17 Sep 2026): the scope line, the lede's UK thresholds, the exit
// card's "fourteen" and the method card's three country lists were typed —
// four figures that follow CERT_THRESHOLDS and comparableArtists but did not.
describe("the pair page derives its remaining typed figures", () => {
  const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  const nameOf = (code: string) => (code === "NL" ? "the Netherlands" : code === "CZ" ? "Czechia" : countryMeta(code).name);

  it("the scope line counts the priced bodies, the lede prints the UK single Platinum, the exit card counts the rest", async () => {
    const page = await html({ a: "burna-boy", b: "wizkid" });
    const t = text(page);
    const bodies = Object.keys(CERT_THRESHOLDS);
    expect(t).toContain(`${bodies.filter((c) => c !== "NG").length} countries · international`);
    const uk = CERT_THRESHOLDS.UK.single!.platinum!;
    expect(t).toContain(`at least ${uk.toLocaleString("en-US")}, and could be ${(uk * 2 - 10_000).toLocaleString("en-US")}`);
    expect(t).toContain(`the other ${WORDS[comparableArtists.length - 2]} are one tap away`);
  });

  it("the method card names every assumed-ratio body, every revenue-measured body and every no-threshold body", async () => {
    const page = await html({ a: "burna-boy", b: "wizkid", all: "1" });
    const card = page.slice(page.indexOf("Not quite everything"), page.indexOf("never hidden"));
    expect(card.length).toBeGreaterThan(20);
    const ts = Object.values(CERT_THRESHOLDS);
    for (const x of ts.filter((x) => x.assumed)) expect(card, `${x.code} assumed`).toContain(nameOf(x.code));
    for (const x of ts.filter((x) => x.singleExcluded && !x.albumExcluded)) expect(card, `${x.code} revenue`).toContain(nameOf(x.code));
    // With no revenue-measured body left (Poland was priced on 23 Sep 2026)
    // the loop above runs zero times, so hold the clause itself: rendered with
    // an empty list it printed "…and marked §.  measure singles in revenue and
    // Colombia publishes no thresholds." — a sentence with no subject.
    if (!ts.some((x) => x.singleExcluded && !x.albumExcluded)) expect(card).not.toMatch(/measures? singles in revenue/);
    for (const x of ts.filter((x) => x.singleExcluded && x.albumExcluded)) expect(card, `${x.code} no threshold`).toContain(nameOf(x.code));
    // ¶ — the historic-level bodies (Greece, from 20 Sep 2026) and the
    // historic-rate ones (Poland, 23 Sep 2026), named in the card and marked;
    // the clauses sit before "never hidden" so the slice sees them.
    for (const x of ts.filter((x) => x.historic)) {
      expect(card, `${x.code} historic`).toContain(nameOf(x.code));
      expect(card).toContain("¶");
      expect(card).toContain(x.plnPerSingle ? `${x.plnPerSingle} zł a single` : "June 2013");
    }
    // Poland's ¶ is a RATE, not a level: the June 2013 sentence must never name
    // it. Review, 23 Sep 2026: dropping the plnPerSingle filter rendered "Greece
    // and Poland are priced at IFPI's June 2013 level" and every test passed.
    const t = text(card);
    const june = t.slice(t.indexOf("June 2013") - 120, t.indexOf("June 2013"));
    for (const x of ts.filter((x) => x.plnPerSingle)) expect(june, `${x.code} named as a June 2013 body`).not.toContain(nameOf(x.code));
    // Each clause starts after a space: a dropped {" "} rendered "…and marked ¶.Poland sets…".
    expect(t).not.toMatch(/¶\.[A-Z]/);
    // Colombia is the one no-threshold body left, so the verb went singular.
    expect(card).not.toContain("Colombia publish no");
    expect(card).toContain("Colombia publishes no");
    // Denmark and Norway ARE named — as the source of the ratio, not as assumed bodies.
    for (const code of ["BE", "BR", "FR"]) expect(card, `${code} is priced by its own thresholds`).not.toContain(countryMeta(code).name);
    // The § ratio the card states is the one the assumed bodies' own levels imply.
    const se = CERT_THRESHOLDS.SE;
    const ratio = Math.round(se.singleRaw!.platinum! / se.single!.platinum!);
    expect(card).toContain(`${ratio} streams to a unit`);
    const dk = CERT_THRESHOLDS.DK;
    expect(Math.round(dk.singleRaw!.platinum! / dk.single!.platinum!)).toBe(ratio);
  });

  it("the ¶ footnote renders where a Greek plaque is on screen, and nowhere else (20 Sep 2026)", async () => {
    // Burna Boy vs Wizkid: Greece is a contested priced row — Dai Dai Platinum
    // 6,000 against One Dance 3× Platinum 18,000 (†, the multiplier caveat) —
    // so it is never folded and the ¶ block must show. (Its heading reads
    // "Historic figure" since Poland joined ¶ on 23 Sep 2026.)
    const t = text(await html({ a: "burna-boy", b: "wizkid", all: "1" }));
    expect(t).toContain("¶ Historic figure");
    expect(t).toContain("June 2013");
    // `text()` keeps entities, so match a fragment of the note with no apostrophe.
    expect(t).toContain("The body now certifies from its streaming Digital Singles chart and states no ratio");
    const gr = t.slice(t.indexOf("Greece"), t.indexOf("Greece") + 400);
    expect(gr).toContain("6,000");
    expect(gr).toContain("18,000");
    expect(gr).toContain("†");
    // The row mark itself, not just the footnote: markList and the footnote
    // gate read `line.historic` independently, so the ¶ on the Greek row can
    // be dropped while the block still renders. (Review, 20 Sep 2026.) The
    // row reads "Greece GR Platinum ¶ 6,000 3× Platinum † ¶ 18,000".
    expect(gr).toContain("¶");
    expect(gr.split("¶").length - 1).toBe(2);
    // The gate has to see a Greek line ON SCREEN: Burna Boy vs Davido has a
    // Greek plaque on one side only, which folds into the collapsed tail
    // without all=1, so neither the row nor the "¶ Historic figure" block may
    // render — and both must once all=1 unfolds it. (Review, 20 Sep 2026.)
    const folded = text(await html({ a: "burna-boy", b: "davido" }));
    const foldedTable = folded.slice(folded.indexOf("Country by country"), folded.indexOf("How this is counted One plaque"));
    expect(foldedTable.length).toBeGreaterThan(20);
    expect(foldedTable).not.toContain("Greece GR");
    expect(foldedTable).not.toContain("Historic figure");
    expect(foldedTable).not.toContain("¶");
    const unfolded = text(await html({ a: "burna-boy", b: "davido", all: "1" }));
    const unfoldedTable = unfolded.slice(unfolded.indexOf("Country by country"), unfolded.indexOf("How this is counted One plaque"));
    expect(unfoldedTable).toContain("Greece GR");
    expect(unfoldedTable).toContain("Historic figure");
    expect(unfoldedTable).toContain("¶");
    // Greece is no longer in the ¹ list: it is priced, not listed.
    const note = t.slice(t.indexOf("¹ Not counted"), t.indexOf("Listed, never summed"));
    expect(note).not.toContain("Greece");
    // Negative control: neither Davido nor Olamide holds a Greek plaque, so
    // no row carries ¶ and the footnote block stays off. The method card still
    // names the mark on every page — it explains the marks — so the check stops
    // where the card begins.
    const none = text(await html({ a: "davido", b: "olamide", all: "1" }));
    const table = none.slice(none.indexOf("Country by country"), none.indexOf("How this is counted One plaque"));
    expect(table.length).toBeGreaterThan(20);
    expect(table).not.toContain("Historic figure");
    expect(table).not.toContain("¶");
  });

  it("the ¶ footnote prints only the notes of rows on screen (23 Sep 2026)", async () => {
    // Burna Boy vs CKay: both hold a Polish single (¶, on screen, contested)
    // while Burna's Greek row folds into the collapsed tail. The footnote
    // printed Greece's note under that table — the real string that shipped
    // in review was "IFPI Greece publishes no current level." with no Greek row.
    const t = text(await html({ a: "burna-boy", b: "ckay" }));
    const table = t.slice(t.indexOf("Country by country"), t.indexOf("How this is counted One plaque"));
    expect(table).toContain("Poland PL");
    expect(table).toContain("¶ Historic figure");
    expect(table).not.toContain("Greece GR");
    expect(table).not.toContain("IFPI Greece publishes no current level.");
    expect(table).toContain("ZPAV sets single levels in złoty of revenue");
    // Negative control: unfold the tail and the Greek row, and its note, return.
    const all = text(await html({ a: "burna-boy", b: "ckay", all: "1" }));
    const allTable = all.slice(all.indexOf("Country by country"), all.indexOf("How this is counted One plaque"));
    expect(allTable).toContain("Greece GR");
    expect(allTable).toContain("IFPI Greece publishes no current level.");
  });

  it("/methodology describes Greece as the one exception to today's level and Poland's ¶ as a rate (23 Sep 2026)", async () => {
    const { default: MethodologyPage } = await import("../app/methodology/page");
    const t = text(renderToStaticMarkup(MethodologyPage()));
    expect(t).toContain("with one exception marked ¶, below,");
    expect(t).toContain("for the rate rather than the level");
    // The removed claim contradicted `floor`, which keeps ZPAV's old unit bands.
    expect(t).not.toContain("never priced at a unit level from its old regime");
    // Clause joins: a dropped {" "} rendered "…marked “¶”.Poland sets…".
    expect(t).not.toMatch(/¶”?\.[A-Z]/);
  });

  it("/methodology's count of bodies that can price a single adds up, with the ¶ bodies as their own clause (20 Sep 2026)", async () => {
    // Review, 20 Sep 2026: the sentence read "25 can price a single: 17 publish
    // the threshold in sales-equivalent units and 8 publish it in streams" with
    // IFPI Greece inside the 17 — a body the same page says publishes no
    // current level. The ¶ bodies are now their own clause, and the three
    // figures must still sum to the priced count.
    const { default: MethodologyPage } = await import("../app/methodology/page");
    const t = text(renderToStaticMarkup(MethodologyPage()));
    const all = Object.values(CERT_THRESHOLDS);
    const priced = all.filter((c) => c.single !== null);
    const streams = priced.filter((c) => c.singleRaw);
    // Poland joined ¶ on 23 Sep 2026 as its own clause: its level is today's,
    // in złoty, and its RATE is the historic figure — it is neither a
    // sales-equivalent-units body nor a streams one.
    const historic = priced.filter((c) => c.historic && !c.plnPerSingle);
    const zloty = priced.filter((c) => c.plnPerSingle);
    const sales = priced.length - streams.length - historic.length - zloty.length;
    expect(historic.map((c) => c.code)).toEqual(["GR"]);
    expect(zloty.map((c) => c.code)).toEqual(["PL"]);
    for (const c of [...historic, ...zloty]) expect(c.singleRaw, `${c.code} is ¶, not a streams body`).toBeUndefined();
    expect(t).toContain(`${priced.length} can price a single: ${sales} publish the threshold in sales-equivalent units, one is priced at a historic level (¶), one publishes it in złoty (¶), and ${streams.length} publish it in streams.`);
  });

  it("the ¹ footnote names the programme a Colombian plaque came from, and both sides' register dates print", async () => {
    const page = await html({ a: "burna-boy", b: "wizkid", all: "1" });
    const t = text(page);
    expect(t).toContain("Sony Music Colombia");
    const burna = comparableArtists.find((x) => x.slug === "burna-boy")!;
    const wiz = comparableArtists.find((x) => x.slug === "wizkid")!;
    const long = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
    if (burna.verifiedOn === wiz.verifiedOn) {
      expect(t).toContain(`both registers read ${long(burna.verifiedOn)}`);
    } else {
      expect(t).toContain(`registers read ${long(burna.verifiedOn)} (Burna Boy) and ${long(wiz.verifiedOn)} (Wizkid)`);
    }
  });

  it("prints one date when both sides' registers were read the same day, and two when not", async () => {
    // Shipped 24 Sep 2026: "registers read 23 September 2026 (Burna Boy) and
    // 23 September 2026 (Wizkid)" — the same date twice.
    const byDate = new Map<string, string[]>();
    for (const x of comparableArtists) byDate.set(x.verifiedOn, [...(byDate.get(x.verifiedOn) ?? []), x.slug]);
    const same = [...byDate.values()].find((slugs) => slugs.length >= 2);
    expect(same, "no two artists share a register date to test with").toBeTruthy();
    const t = text(await html({ a: same![0], b: same![1], all: "1" }));
    const x = comparableArtists.find((c) => c.slug === same![0])!;
    const long = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
    expect(t).toContain(`both registers read ${long(x.verifiedOn)}`);
    expect(t).not.toContain(`${long(x.verifiedOn)} (${x.name}) and ${long(x.verifiedOn)}`);
    const dates = [...byDate.keys()];
    if (dates.length >= 2) {
      const [p, q] = [byDate.get(dates[0])![0], byDate.get(dates[1])![0]];
      const pa = comparableArtists.find((c) => c.slug === p)!;
      const qa = comparableArtists.find((c) => c.slug === q)!;
      const u = text(await html({ a: p, b: q, all: "1" }));
      expect(u).toContain(`registers read ${long(pa.verifiedOn)} (${pa.name}) and ${long(qa.verifiedOn)} (${qa.name})`);
    }
  });

  it("the visible breadcrumb bar lists the same trail as the BreadcrumbList", async () => {
    const { CompareView } = await import("../app/compare/page");
    const tree = await CompareView({ sp: { a: "burna-boy", b: "wizkid" }, path: "/compare/burna-boy-vs-wizkid", leaf: "Burna Boy vs Wizkid" });
    const ph = renderToStaticMarkup(tree);
    const nav = ph.slice(ph.indexOf('aria-label="Breadcrumb"'), ph.indexOf("</nav>"));
    const visible = [...nav.matchAll(/>([^<>]+)<\/(?:a|span)>/g)].map((m) => m[1]).filter((x) => !["/"].includes(x.trim()));
    const ld = JSON.parse(ph.match(/<script type="application\/ld\+json">(\{"@context":"https:\/\/schema.org","@type":"BreadcrumbList".*?)<\/script>/)![1]);
    expect(visible).toEqual(ld.itemListElement.map((i: { name: string }) => i.name));
  });
});

describe("singles-only ‡ and § stay off album lines (23 Sep 2026)", () => {
  // Ifpi Sverige's ‡ (raised song levels) and § (capped streams at 100 to a
  // unit) describe SONGS; its albums are units at a level that never moved.
  // Album mode printed "Gold ‡ § 15,000" on Tyla's album in Sweden, and the §
  // footnote beneath it — the string that shipped.
  it("an album line carries no singles-only mark", async () => {
    const t = text(await html({ mode: "albums", a: "tyla", sa: "Tyla", b: "wizkid", sb: "Made in Lagos" }));
    const table = t.slice(t.indexOf("Country by country"), t.indexOf("How this is counted One plaque"));
    expect(table).toContain("Sweden SE Gold 15,000");
    expect(table).not.toContain("Gold ‡ § 15,000");
    expect(table).not.toContain("§ Ratio assumed");
  });

  it("a song line keeps them", async () => {
    const t = text(await html({ mode: "songs", a: "tyla", sa: "Water", b: "wizkid", sb: "Essence" }));
    expect(t).toContain("Platinum ‡ § 120,000");
  });

  it("an artist's line that opens on an album still gains them when a single joins", async () => {
    const t = text(await html({ a: "burna-boy", b: "wizkid", all: "1" }));
    const se = t.slice(t.indexOf("Sweden SE"), t.indexOf("Sweden SE") + 60);
    expect(se).toContain("‡");
    expect(se).toContain("§");
  });
});

describe("with only side B's record picked, the header describes side B (23 Sep 2026)", () => {
  it("names the record on the right, not an empty left side", async () => {
    const t = text(await html({ mode: "songs", a: "burna-boy", b: "rema", sb: "Smooth Criminal" }));
    // The string that shipped: the header described side A, which had no song.
    expect(t).not.toContain("Burna Boy · at least 0 certified units");
    expect(t).toMatch(/Smooth Criminal · at least [\d,]+ certified units/);
  });
});
