import { readFileSync } from "node:fs";
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

import ComparePage from "../../app/compare/page";
import PairPage from "../../app/compare/[pair]/page";
import styles from "../../app/compare/compare.module.css";
import { comparableArtists } from "../../app/lib/certUnits";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import { pickerArtists } from "../../app/lib/comparePicker";
import { rules, winning } from "../fixtures/cssRules";

/**
 * J2-7 with fixes 51 and 55f (design review 8 Oct 2026): above Next, one row
 * per side — "More with {X}", the first six of X's compare-with list in
 * picker order without the other side, then "All {n} pairs ↗" (n = the
 * roster less one) to X's own page, which carries the whole list. Nothing
 * folds. Every chip is a static pair page: no new query link (#464).
 *
 * The six are rebuilt here from the picker's order and the pair pages'
 * canonical slugs, not read off compareWithLinks.
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const pairPage = async (slug: string) => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
const query = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));
const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /min-width: 901px/.test(m) ? w > 900 : false);

describe("More with {A} and More with {B}, above Next", () => {
  it("Burna Boy vs Wizkid: six each, in picker order, then All 19 pairs ↗ to each artist's page", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    const rows = [...page.querySelectorAll(`nav.${styles.moreWith}`)];
    expect(rows.map((r) => r.getAttribute("aria-label"))).toEqual(["More pairs with Burna Boy", "More pairs with Wizkid"]);
    expect(rows.map((r) => norm(r.querySelector("h2")?.textContent))).toEqual(["More with Burna Boy", "More with Wizkid"]);
    // Read on 14 Oct 2026 (the picker's order is by certifications held).
    expect(rows.map((r) => [...r.querySelectorAll(`li a`)].map((a) => norm(a.textContent)))).toEqual([
      ["vs Seyi Vibez", "vs Davido", "vs Rema", "vs Asake", "vs Tems", "vs Tyla"],
      ["vs Seyi Vibez", "vs Davido", "vs Rema", "vs Asake", "vs Tems", "vs Tyla"],
    ]);
    const all = rows.map((r) => r.querySelector(`a.${styles.allPairs}`)!);
    expect(all.map((a) => norm(a.textContent))).toEqual([`All ${comparableArtists.length - 1} pairs ↗`, `All ${comparableArtists.length - 1} pairs ↗`]);
    expect(all.map((a) => a.getAttribute("href"))).toEqual(["/certifications", "/afrobeats/wizkid"]);
    // After "How this is counted", before Next.
    const how = page.querySelector(`section.${styles.how}`)!;
    const next = page.querySelector('section[aria-label="Next"]')!;
    for (const r of rows) {
      expect(how.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      expect(r.compareDocumentPosition(next) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
  });

  it("on every 10th pair: the six are the picker's first six without the other side, each a static pair page, none the pair on screen", async () => {
    const pairs = allPairs().filter((_, i) => i % 10 === 0);
    for (const [a, b] of pairs) {
      const slug = pairSlug(a, b);
      const page = await pairPage(slug);
      const rows = [...page.querySelectorAll(`nav.${styles.moreWith}`)];
      expect(rows.length, slug).toBe(2);
      for (const [x, other, row] of [[a, b, rows[0]], [b, a, rows[1]]] as const) {
        const want = pickerArtists(x.slug)
          .filter((y) => y.slug !== other.slug)
          .slice(0, 6)
          .map((y) => `/compare/${pairSlug(x, y)}`);
        const got = [...row.querySelectorAll("li a")].map((l) => l.getAttribute("href"));
        expect(got, `${slug} · ${x.name}`).toEqual(want);
        expect(got, slug).not.toContain(`/compare/${slug}`);
        for (const h of got) expect(h, slug).not.toContain("?");
        const allLink = row.querySelector(`a.${styles.allPairs}`)!;
        expect(allLink.getAttribute("href"), slug).toBe(x.href);
        expect(norm(allLink.textContent), slug).toBe(`All ${pickerArtists(x.slug).length} pairs ↗`);
        expect(pickerArtists(x.slug).length).toBe(comparableArtists.length - 1);
      }
    }
  }, 60000);

  it("only a pair view carries them", async () => {
    for (const page of [
      await query({}),
      await query({ a: "burna-boy" }),
      await query({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" }),
      await query({ mode: "country" }),
    ])
      expect(page.querySelector(`.${styles.moreWith}`)).toBeNull();
    // A toggle of the pair is the same view.
    expect((await query({ a: "burna-boy", b: "wizkid", feat: "0" })).querySelectorAll(`.${styles.moreWith}`).length).toBe(2);
  });

  it("the label is muted, never gold; the link is the action colour; the chips meet the phone's 44px floor", () => {
    for (const w of [390, 1440]) {
      expect(winning(CSS, ".moreWithHead", "color", at(w)), `${w}`).toBe("var(--text-muted)");
      expect(winning(CSS, ".allPairs", "color", at(w)), `${w}`).toBe("var(--gold)");
    }
    for (const r of rules(CSS).filter((x) => /\.(moreWith|moreWithHead|moreChips)\b/.test(x.selector))) expect(r.body, r.selector).not.toMatch(/--gold/);
    expect(parseFloat(winning(CSS, ".chip", "min-height", at(390)) ?? "0")).toBeGreaterThanOrEqual(44);
    expect(parseFloat(winning(CSS, ".allPairs", "min-height", at(390)) ?? "0")).toBeGreaterThanOrEqual(44);
  });
});

describe("negative control: the shipped pair page", () => {
  it("offered no onward pair: its only link after the notes was the board", () => {
    // live/pair.html (burnaboystats.com, 8 Oct 2026): the Next strip, verbatim.
    const live =
      '<h2 class="compare-module__-ZWgpW__exitKicker">Next</h2><p class="compare-module__-ZWgpW__exitLead">Two artists priced against each other — the other <!-- -->eighteen<!-- --> are one tap away, each with a ledger you can bring back here.</p><a class="btn btnPrimary" href="/afrobeats">The Afrobeats Board <span aria-hidden="true">↗</span></a>';
    const d = root(live);
    expect([...d.querySelectorAll("a")].map((a) => a.getAttribute("href"))).toEqual(["/afrobeats"]);
    expect(d.textContent).not.toContain("More with");
  });
});
