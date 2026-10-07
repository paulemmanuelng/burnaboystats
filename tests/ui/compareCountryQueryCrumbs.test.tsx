import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
  redirect: () => {
    throw new Error("redirect()");
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
import CountryPage from "../../app/compare/in/[country]/page";
import CountryIndexPage from "../../app/compare/in/page";
import { certCountryCodes, countrySlug } from "../../app/lib/certCountry";
import styles from "../../app/compare/compare.module.css";
import { siteUrl } from "../../app/site";

/**
 * V-compareIn-04, the full-site debug of 5 Oct 2026. /compare/in/canada reads
 * "Home / Certifications / Compare / By country / Canada". Its "Featured
 * appearances" switch goes to /compare?mode=country&country=canada&feat=0 —
 * the same board, which canonicals back to /compare/in/canada — and there the
 * h1 still said "Certified units in Canada" while the breadcrumb had shrunk to
 * "Home / Certifications / Compare". The features-off index
 * (/compare?mode=country&feat=0, where "Change country" goes) lost
 * "By country" the same way. Read live in headless Chrome at 1440x900 and
 * 390x844, dark and light, 7 Oct: one breadcrumb bar serves both layouts.
 *
 * Canada follows the reader's own link (the pretty board's switch) and
 * compares the trail it lands on — the visible bar and its BreadcrumbList —
 * with the pretty board's; every other market renders once, features off, and
 * its leaf is read off the board on screen. It fails on the shipped page,
 * which passed "/compare" for every query.
 */

const doc = (h: string) => {
  const root = document.createElement("div");
  root.innerHTML = h;
  return root;
};
const compare = async (sp: Record<string, string>) => doc(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));
const board = async (country: string) => doc(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country }) })));
const index = async () => doc(renderToStaticMarkup(await CountryIndexPage()));

/** The page a link lands on: /compare with its query. */
const land = async (href: string) => {
  const u = new URL(href, "https://burnaboystats.com");
  expect(u.pathname).toBe("/compare");
  return compare(Object.fromEntries(u.searchParams));
};

const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
type Crumb = { label: string; href: string | null };
/** The visible bar: every crumb, with the href it links (the current page links none). */
const barOf = (page: HTMLElement): Crumb[] => {
  const nav = page.querySelector('nav[aria-label="Breadcrumb"]');
  expect(nav, "no breadcrumb bar").not.toBeNull();
  return [...nav!.querySelectorAll("a, [aria-current='page']")].map((e) => ({ label: norm(e.textContent), href: e.getAttribute("href") }));
};
/** The BreadcrumbList the page emits — one, and only one. */
const ldOf = (page: HTMLElement) => {
  const lists = [...page.querySelectorAll('script[type="application/ld+json"]')]
    .map((s) => JSON.parse(s.textContent ?? "null"))
    .filter((x) => x?.["@type"] === "BreadcrumbList");
  expect(lists).toHaveLength(1);
  return (lists[0].itemListElement as { name: string; item: string }[]).map((i) => ({ name: i.name, item: i.item.replace(siteUrl, "") }));
};
const labels = (page: HTMLElement) => barOf(page).map((c) => c.label);
const featSwitch = (page: HTMLElement) => page.querySelector('a[data-keep-focus="feat"]')?.getAttribute("href") ?? null;
const h1Of = (page: HTMLElement) => norm(page.querySelector("h1")?.textContent);

const codes = certCountryCodes();
/** The trail /compare/in/<slug> prints — Compare / By country / <country> — with
 *  the leaf read off the board on screen. */
const prettyTrail = (name: string): Crumb[] => [
  { label: "Home", href: "/" },
  { label: "Certifications", href: "/certifications" },
  { label: "Compare", href: "/compare" },
  { label: "By country", href: "/compare/in" },
  { label: name, href: null },
];
const prettyItems = (slug: string) => ["", "/certifications", "/compare", "/compare/in", `/compare/in/${slug}`];
/** The board's own name, as its head prints it (the engine's board.name). */
const boardName = (page: HTMLElement) => norm(page.querySelector(`.${styles.cbHeadName}`)?.textContent);

describe("a country board reached by its query keeps the pretty route's trail", () => {
  it("Canada: the board's own features switch lands on the trail the pretty board prints", async () => {
    const pretty = await board("canada");
    // The reader's own step: the board's features switch.
    const href = featSwitch(pretty);
    expect(href).toBe("/compare?mode=country&country=canada&feat=0");
    const off = await land(href!);
    expect(h1Of(off)).toBe("Certified units in Canada");
    expect(labels(off)).toEqual(["Home", "Certifications", "Compare", "By country", "Canada"]);
    expect(barOf(off)).toEqual(barOf(pretty));
    expect(ldOf(off)).toEqual(ldOf(pretty));
  });

  it.each(codes.map((c) => [c]))("features off: %s reads Compare / By country / <country>, in the bar and the BreadcrumbList", async (code) => {
    const slug = countrySlug(code);
    const off = await compare({ mode: "country", country: slug, feat: "0" });
    const name = boardName(off);
    expect(name, "the board did not render").not.toBe("");
    expect(barOf(off)).toEqual(prettyTrail(name));
    expect(ldOf(off).map((i) => i.name)).toEqual(labels(off));
    expect(ldOf(off).map((i) => i.item)).toEqual(prettyItems(slug));
  });

  it.each([
    [{ mode: "country", country: "canada" }],
    [{ mode: "country", country: "canada", feat: "1" }],
    [{ mode: "country", country: "CA", feat: "0" }],
  ])("the switch turned back on, and a hand-typed ISO code, read the same: %o", async (sp) => {
    const page = await compare(sp);
    expect(barOf(page)).toEqual(prettyTrail("Canada"));
    expect(ldOf(page).map((i) => i.item)).toEqual(prettyItems("canada"));
  });
});

describe("the country index reached by its query keeps 'By country'", () => {
  it("'Change country' on a features-off board goes to the features-off index", async () => {
    const off = await compare({ mode: "country", country: "canada", feat: "0" });
    expect(off.querySelector(`a.${styles.cbChange}`)?.getAttribute("href")).toBe("/compare?mode=country&feat=0");
  });

  it("...which reads Compare / By country, as /compare/in does", async () => {
    const idx = await land("/compare?mode=country&feat=0");
    const pretty = await index();
    expect(h1Of(idx)).toBe("Certified units by country");
    expect(labels(idx)).toEqual(["Home", "Certifications", "Compare", "By country"]);
    expect(barOf(idx)).toEqual(barOf(pretty));
    expect(ldOf(idx)).toEqual(ldOf(pretty));
  });

  it.each([[{ mode: "country" }], [{ mode: "country", country: "narnia", feat: "0" }]])(
    "so does the bare country mode, and a country the board does not hold (the index renders): %o",
    async (sp) => {
      const page = await compare(sp);
      expect(h1Of(page)).toBe("Certified units by country");
      expect(labels(page)).toEqual(["Home", "Certifications", "Compare", "By country"]);
      expect(ldOf(page).map((i) => i.item)).toEqual(["", "/certifications", "/compare", "/compare/in"]);
    },
  );
});

describe("the rest of /compare is untouched", () => {
  it.each([[{}], [{ mode: "songs" }], [{ a: "burna-boy" }], [{ mode: "artists", feat: "0" }]])(
    "the tool itself still reads Home / Certifications / Compare: %o",
    async (sp) => {
      const page = await compare(sp);
      expect(labels(page)).toEqual(["Home", "Certifications", "Compare"]);
      expect(ldOf(page).map((i) => i.item)).toEqual(["", "/certifications", "/compare"]);
    },
  );
});
