import { renderToStaticMarkup } from "react-dom/server";

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
    expect(t).not.toContain("Pick a release on each side");
    expect(t).not.toContain("· at least");
    expect(t).toContain("Change song");
  });
});

describe("the one-side hint follows the featured switch", () => {
  it("says 'off until you turn them on' only while they are off", async () => {
    const off = text(await html({ a: "burna-boy" }));
    const on = text(await html({ a: "burna-boy", feat: "1" }));
    expect(off).toContain("Featured appearances are off until you turn them on.");
    expect(on).not.toContain("off until you turn them on");
    expect(on).toContain("Featured appearances are on.");
  });
});

describe("the song picker's count line", () => {
  it("treats a punctuation-only query as no query", async () => {
    const t = text(await html({ mode: "songs", a: "burna-boy", qa: "&" }));
    expect(t).not.toContain("match “&”");
    expect(t).toMatch(/Burna Boy · all \d+ certified releases/);
  });

  it("still reports a real query", async () => {
    const t = text(await html({ mode: "songs", a: "burna-boy", qa: "last" }));
    expect(t).toMatch(/\d+ of \d+ match “last”/);
  });
});

describe("the mode segments", () => {
  it("do not link the mode you are already in", async () => {
    const h = await html({ a: "burna-boy", b: "wizkid", all: "1" });
    expect(h).toMatch(/aria-current="page"[^>]*>Artist totals</);
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
    const c = compare(a, b, { includeFeatures: false });
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
  const chipsIn = (h: string) => [...h.matchAll(/<a href="([^"]+)" class="_chip_[^"]*">([^<]*)<\/a>/g)].map((m) => ({ href: m[1].replace(/&amp;/g, "&"), text: m[2] }));
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
    expect(first).toContain(`+ ${16 - PICKER_FOLD} more ↓`);
    expect(first).toContain("Show fewer ↑");
  });

  it("song list: first eight by plaques, the rest behind one disclosure — search included", async () => {
    const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
    for (const qa of ["", "a"]) {
      const h = await html({ mode: "songs", a: "burna-boy", ...(qa ? { qa } : {}) });
      const expected = pickerReleases(burna, qa).map((r) => r.title);
      const pick = h.split("pickWrap")[1];
      const shown = chipsIn(beforeDetails(pick)).map((c) => c.text.replace(/&#x27;/g, "'").replace(/&amp;/g, "&"));
      const folded = chipsIn(insideDetails(pick)).map((c) => c.text.replace(/&#x27;/g, "'").replace(/&amp;/g, "&"));
      expect(shown, `query “${qa}”`).toEqual(expected.slice(0, PICKER_FOLD));
      expect(folded, `query “${qa}”`).toEqual(expected.slice(PICKER_FOLD));
      expect(pick).toContain(`+ ${expected.length - PICKER_FOLD} more ↓`);
    }
  });

  it("a list of eight or fewer has no disclosure at all", async () => {
    const h = await html({ mode: "songs", a: "burna-boy", qa: "last last" });
    const pick = h.split("pickWrap")[1];
    expect(chipsIn(pick).length).toBeLessThanOrEqual(PICKER_FOLD);
    expect(pick).not.toContain("<details");
  });
});
