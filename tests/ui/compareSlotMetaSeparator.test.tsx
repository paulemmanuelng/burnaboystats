import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage, { CompareView } from "../../app/compare/page";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { comparableArtists } from "../../app/lib/certUnits";

/**
 * V-compareA-07, the full-site debug of 5 Oct 2026. The slot meta under each
 * artist or record broke its lines in front of the separator, so every wrapped
 * line opened with "·": live in headless Chrome, /compare/burna-boy-vs-wizkid
 * read "ARTIST TOTALS · 177 COUNTED" / "· 25 COUNTRIES" at 1440 dark and
 * "ARTIST TOTALS" / "· 177 COUNTED" / "· 25 COUNTRIES" at 390 light, on every
 * pair page and every one-side state, and a chosen song the same ("BURNA BOY
 * · LEAD SINGLE" / "· SHAKIRA & BURNA BOY" / "· 18 PLAQUES"). The slot's own
 * comment promised a phone never opens a line with "·".
 *
 * The line may break only at an ordinary space (the short segments are glued
 * with no-break spaces), so the rule is read off the text: no ordinary space
 * is followed by "·", and every "·" is glued to the word before it. Then the
 * dot ends the line it follows — the site's rule for separators (the phone
 * tour map's country lists, the country boards' meta line).
 */

const NBSP = " ";
const norm = (s: string) => s.replace(/ /g, " ").replace(/\s+/g, " ").trim();
const html = (el: React.ReactElement) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(el);
  return root;
};

/** The filled slots' meta lines, raw: no-break spaces kept. */
function metas(root: HTMLElement): string[] {
  return (["a", "b"] as const).flatMap((side) => {
    const p = root.querySelector(`#slot-${side}`)?.querySelectorAll("p")[1];
    return p ? [p.textContent ?? ""] : [];
  });
}

/** Where the line could open with a separator, if anywhere. */
function dotOpensALine(text: string): string[] {
  const bad: string[] = [];
  // A line starts at the start of the text and after each ordinary space.
  if (text.startsWith("·")) bad.push(`starts with "·": ${JSON.stringify(text)}`);
  for (const m of text.matchAll(/ ·/g)) bad.push(`a line may open with "·" at ${m.index}: ${JSON.stringify(text)}`);
  // Every dot is glued to the word before it and breakable after it.
  for (const m of text.matchAll(/·/g)) {
    const i = m.index!;
    if (text[i - 1] !== NBSP) bad.push(`"·" at ${i} not glued to the word before: ${JSON.stringify(text)}`);
    if (i + 1 < text.length && text[i + 1] !== " ") bad.push(`"·" at ${i} not followed by a break: ${JSON.stringify(text)}`);
  }
  return bad;
}

const pairs = allPairs();

describe("the slot meta never opens a line with its separator", () => {
  it("every pair page has its two meta lines", () => {
    expect(pairs.length).toBeGreaterThan(90);
  });

  it.each(pairs.map(([a, b]) => [pairSlug(a, b), a, b] as const))("/compare/%s", async (slug, a, b) => {
    const root = html(
      await CompareView({ sp: { a: a.slug, b: b.slug }, path: `/compare/${slug}`, leaf: `${a.name} vs ${b.name}`, pairTitle: `${a.name} vs ${b.name}` }),
    );
    const lines = metas(root);
    expect(lines).toHaveLength(2);
    for (const t of lines) {
      expect(norm(t)).toMatch(/^artist totals · \d+ counted · \d+ countr(y|ies)$/);
      expect(dotOpensALine(t)).toEqual([]);
    }
  });

  it.each(comparableArtists.flatMap((x) => [["a", x.slug], ["b", x.slug]] as const))(
    "one side filled: ?%s=%s",
    async (side, slug) => {
      const root = html(await ComparePage({ searchParams: Promise.resolve({ [side]: slug }) }));
      const lines = metas(root);
      expect(lines).toHaveLength(1);
      expect(norm(lines[0])).toMatch(/^artist totals · \d+ counted · \d+ countr(y|ies)$/);
      expect(dotOpensALine(lines[0])).toEqual([]);
    },
  );

  it.each([
    [
      "a song with a credit",
      { mode: "songs", a: "burna-boy", b: "wizkid", sa: "Dai Dai", sb: "One Dance" },
      ["Burna Boy · lead single · Shakira & Burna Boy · 18 plaques", "Wizkid · featured · 17 plaques"],
    ],
    [
      "a song with a Nigerian plaque (a long segment wraps inside)",
      { mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "One Dance" },
      ["Burna Boy · lead single · 11 plaques outside Nigeria + 1 Nigerian", "Wizkid · featured · 17 plaques"],
    ],
    ["albums", { mode: "albums", a: "burna-boy", b: "rema", sa: "African Giant", sb: "Rave & Roses" }, null],
    ["a record mode with nothing chosen", { mode: "songs", a: "burna-boy", b: "wizkid" }, null],
  ] as const)("%s", async (_name, sp, expected) => {
    const root = html(await ComparePage({ searchParams: Promise.resolve({ ...sp }) }));
    const lines = metas(root);
    expect(lines).toHaveLength(2);
    if (expected) expect(lines.map(norm)).toEqual(expected);
    for (const t of lines) expect(dotOpensALine(t)).toEqual([]);
  });

  it("negative control: the meta lines the live site shipped fail the check", () => {
    // outerHTML of the slot meta read live at 390 on 7 Oct 2026, class names dropped.
    const shipped = [
      '<p><span><span>artist&nbsp;totals</span></span><span> <span>·&nbsp;<!-- -->177&nbsp;counted</span></span><span> <span>·&nbsp;<!-- -->25&nbsp;countries</span></span></p>',
      '<p><span><span>Burna&nbsp;Boy</span></span><span> <span>·&nbsp;<!-- -->lead&nbsp;single</span></span><span> <span>·&nbsp;<!-- -->Shakira&nbsp;&amp;&nbsp;Burna&nbsp;Boy</span></span><span> <span>·&nbsp;<!-- -->18&nbsp;plaques</span></span></p>',
    ];
    for (const h of shipped) {
      const p = document.createElement("div");
      p.innerHTML = h;
      const t = p.textContent ?? "";
      expect(dotOpensALine(t).length).toBeGreaterThan(0);
    }
  });
});
