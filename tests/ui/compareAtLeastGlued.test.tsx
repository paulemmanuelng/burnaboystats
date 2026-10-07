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
import PairPage from "../../app/compare/[pair]/page";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareB-06 (and V-compareA-08), the full-site debug of 5 Oct 2026. On
 * phones the Nigeria strip split "at least" over two lines: live at 390 (dark
 * and light, headless Chrome) "BLACK SHERIF — 25 PLAQUES · AT" / "LEAST
 * 1,550,000" on most pair pages, and at 320 on every one; at 320 the lead line
 * read "leads by at" / "least 1,050,000" on some. Only the space before the
 * number was a no-break space.
 *
 * Layout is not measured in jsdom, so this pins what makes the layout work:
 * "· at least N" carries no ordinary space (the dot leads the qualifier, the
 * site's " · " convention), so a phone breaks before the dot; and the
 * lead line's "at least N" carries none either. Checked live by grafting the
 * same text onto every pair page at 390 and 320 (dark and light): no line
 * starts with "least", no line count or strip height changes, no overflow.
 */

const html = (el: React.ReactElement) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(el);
  return root;
};
const pair = async (slug: string) => html(await PairPage({ params: Promise.resolve({ pair: slug }) }));
const page = async (sp: Record<string, string>) => html(await ComparePage({ searchParams: Promise.resolve(sp) }));

/** A strip line ends in "· at least N": nothing after its last ordinary space breaks. */
const stripGlued = (t: string) => /^· at least [\d,]+$/.test(t.slice(t.lastIndexOf(" ") + 1));
/** The lead line holds "at least N", with no ordinary space anywhere in it. */
const leadGlued = (t: string) => /at least [\d,]+/.test(t) && !/at[ ]least|least[ ]\d/.test(t);

const lines = (root: HTMLElement) => ({
  strip: [...root.querySelectorAll(`section[aria-label="Nigeria"] .${styles.ngFigures} > span`)].map((s) => s.textContent ?? ""),
  lead: root.querySelector(`.${styles.diff}`)?.textContent ?? "",
});

describe("negative control: the lines the live site shipped fail", () => {
  it("strip and lead line as served on 5–7 Oct 2026", () => {
    expect(stripGlued("Black Sherif — 25 plaques · at least 1,550,000")).toBe(false);
    expect(stripGlued("Ayra Starr — 24 plaques · at least 2,775,000")).toBe(false);
    expect(leadGlued("Asake leads by at least 6,413,334 certified units — a floor 1.8× the size of Ayra Starr's.")).toBe(false);
    expect(leadGlued("Level — both at least 0 certified units.")).toBe(false);
    // ...and the glued forms pass.
    expect(stripGlued("Black Sherif — 25 plaques · at least 1,550,000")).toBe(true);
    expect(leadGlued("Asake leads by at least 6,413,334 certified units.")).toBe(true);
  });
});

describe("'at least' stays with its number on every pair page", () => {
  for (const [a, b] of allPairs()) {
    const slug = pairSlug(a, b);
    it(slug, async () => {
      const { strip, lead } = lines(await pair(slug));
      expect(strip, slug).toHaveLength(2);
      for (const t of strip) expect(stripGlued(t), JSON.stringify(t)).toBe(true);
      expect(leadGlued(lead), JSON.stringify(lead)).toBe(true);
    });
  }
});

it("the level line glues it too (Seyi Vibez vs Black Sherif, Nigeria separated)", async () => {
  const { lead } = lines(await page({ a: "seyi-vibez", b: "black-sherif", ng: "0" }));
  expect(lead.replace(/\s+/g, " ")).toBe("Level — both at least 0 certified units.");
  expect(leadGlued(lead), JSON.stringify(lead)).toBe(true);
});
