import { describe, it, expect, beforeAll } from "vitest";
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
import { certCountryCodes, countrySlug } from "../../app/lib/certCountry";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareIn-02, the full-site debug of 5 Oct 2026. The index's own
 * "Featured appearances" switch goes to /compare?mode=country&feat=0, where
 * the Mexico row reads 1,980,000 — and every one of its 27 rows linked the
 * pretty board, /compare/in/<country>, which renders a fixed query with
 * features on. Clicked live in headless Chrome (1440 light and dark, and
 * tapped at 390 light), the Mexico row opened /compare/in/mexico at
 * 3,960,000 with the switch back at "on · every plaque held"; the figure
 * moves on 25 of the 27 boards. "Change country" already kept feat=0 going
 * the other way.
 *
 * Each row is followed to the page its href renders, which must show the
 * figure the row showed, with the switch in the state the reader chose.
 */

const doc = (h: string) => {
  const root = document.createElement("div");
  root.innerHTML = h;
  return root;
};
const compare = async (sp: Record<string, string>) => doc(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));
const board = async (country: string) => doc(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country }) })));

/** The page a link lands on: a pretty board, or /compare with its query. */
const land = async (href: string) => {
  const u = new URL(href, "https://burnaboystats.com");
  const pretty = u.pathname.match(/^\/compare\/in\/([^/]+)$/);
  if (pretty) return board(pretty[1]);
  expect(u.pathname).toBe("/compare");
  return compare(Object.fromEntries(u.searchParams));
};

const norm = (s: string | null | undefined) => (s ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
type Row = { name: string; href: string; units: string };
/** Each row's link and the figure it shows ("not counted" where none). */
const rowsOf = (page: HTMLElement): Row[] =>
  [...page.querySelectorAll<HTMLAnchorElement>(`a.${styles.cbCountryLink}`)].map((a) => {
    const cell = a.closest("tr")!.querySelector(`.${styles.cbUnitsCell}`)!;
    const units = cell.querySelector(`.${styles.units}`);
    return {
      name: norm(a.querySelector(`.${styles.cbCountryName}`)?.textContent),
      href: a.getAttribute("href")!,
      units: units ? norm(units.firstChild?.textContent) : "not counted",
    };
  });
/** The board's figure ("not counted" for the "—" of a body with no levels). */
const figureOf = (page: HTMLElement) => {
  const f = norm(page.querySelector(`p.${styles.cbFigure}`)?.textContent);
  return f === "—" ? "not counted" : f;
};
const switchOf = (page: HTMLElement) => norm(page.querySelector('a[data-keep-focus="feat"]')?.textContent);
const nameOf = (page: HTMLElement) => norm(page.querySelector(`.${styles.cbHeadName}`)?.textContent);

const codes = certCountryCodes();
let off: Row[] = [];
let on: Row[] = [];
beforeAll(async () => {
  off = rowsOf(await compare({ mode: "country", feat: "0" }));
  on = rowsOf(await compare({ mode: "country" }));
});

describe("the country index opens each board in the reader's features state", () => {
  it("lists every board both ways", () => {
    expect(off).toHaveLength(codes.length);
    expect(on).toHaveLength(codes.length);
  });

  it.each(codes.map((c) => [c]))("features off: %s opens with features off, at the row's figure", async (code) => {
    const row = off.find((r) => r.href.includes(`country=${countrySlug(code)}&`) || r.href.endsWith(`/${countrySlug(code)}`));
    expect(row, `no row links ${countrySlug(code)}`).toBeDefined();
    expect(row!.href).toBe(`/compare?mode=country&country=${countrySlug(code)}&feat=0`);
    const page = await land(row!.href);
    expect(nameOf(page)).toBe(row!.name);
    expect(switchOf(page)).toBe("Featured appearances: off · lead credits only");
    expect(figureOf(page)).toBe(row!.units);
    // And back: "Change country" returns to the index it came from.
    expect(page.querySelector(`a.${styles.cbChange}`)?.getAttribute("href")).toBe("/compare?mode=country&feat=0");
  });

  it.each(codes.map((c) => [c]))("features on: %s keeps its pretty route, at the row's figure", async (code) => {
    const row = on.find((r) => r.href === `/compare/in/${countrySlug(code)}`);
    expect(row, `no row links /compare/in/${countrySlug(code)}`).toBeDefined();
    const page = await land(row!.href);
    expect(nameOf(page)).toBe(row!.name);
    expect(switchOf(page)).toBe("Featured appearances: on · every plaque held");
    expect(figureOf(page)).toBe(row!.units);
    expect(page.querySelector(`a.${styles.cbChange}`)?.getAttribute("href")).toBe("/compare/in");
  });

  it("negative control: the pretty board the rows linked does not hold the features-off figure", async () => {
    // The strings the live site shipped: the row read 1,980,000, the board it
    // opened read 3,960,000 with features back on.
    expect(off.find((r) => r.name === "Mexico")?.units).toBe("1,980,000");
    const shipped = await board("mexico");
    expect(figureOf(shipped)).toBe("3,960,000");
    expect(switchOf(shipped)).toBe("Featured appearances: on · every plaque held");
  });
});
