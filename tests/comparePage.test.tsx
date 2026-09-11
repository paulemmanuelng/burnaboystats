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
    expect(on).toContain("167 counted");
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
    expect(shown.length + folded.length).toBe(16);
    // The noun rides inside the toggle so its accessible name follows the
    // open state ("+ 8 more artists" / "Show fewer artists").
    expect(text(first)).toContain(`+ ${16 - PICKER_FOLD} more artists ↓`);
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
    expect(pairs).toHaveLength((16 * 15) / 2);
    const slugs = pairs.map(([a, b]) => pairSlug(a, b));
    expect(new Set(slugs).size).toBe(120);
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
