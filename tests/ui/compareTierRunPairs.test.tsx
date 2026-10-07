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

import ComparePage from "../../app/compare/page";
import { certCountryCodes, countrySlug } from "../../app/lib/certCountry";

/**
 * V-compareIn-07, the full-site debug of 5 Oct 2026. The "What one plaque is
 * worth here" card wrapped a tier name away from its figure — read live in
 * headless Chrome at 1024 and 1440, 7 Oct: the US card's RIAA rows read
 * "Gold 500,000 · Platinum 1,000,000 · Diamond" / "10,000,000", the UK's
 * "Platinum" / "600,000", Mexico's "Diamond" / "2,200,000". tierRun joined each
 * pair with a plain space. Each pair now holds together and the "·" rides with
 * the pair before it, so the only place a line can break is after a "·".
 *
 * The rows are read out of the rendered board (card and phone fold share
 * them), on every board the site prints.
 */

const board = async (slug: string) =>
  renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve({ mode: "country", country: slug }) }));

/** The card's level rows — Single and Album, per programme. */
const levelRows = (h: string) =>
  [...h.matchAll(/<div class="[^"]*cbThRow[^"]*"><dt>(Single|Album)<\/dt><dd>([\s\S]*?)<\/dd><\/div>/g)].map((m) => ({
    dt: m[1],
    dd: m[2],
  }));

/** A row breaks only after a "·": every breakable space follows one, and every
 *  "·" is tied to the pair before it. */
const breaksOnlyAfterDots = (dd: string) => !/(?<!·) /.test(dd) && !/[^\u00a0]·/.test(dd);

describe("V-compareIn-07: a tier stays on the line of its figure", () => {
  it("negative control: the row the US card shipped could break between \"Diamond\" and \"10,000,000\"", () => {
    expect(breaksOnlyAfterDots("Gold 500,000 · Platinum 1,000,000 · Diamond 10,000,000")).toBe(false);
  });

  it("the US card: both programmes, both formats, in one piece per pair", async () => {
    const rows = levelRows(await board("united-states"));
    // Card + phone fold, RIAA + RIAA Latin, Single + Album.
    expect(rows).toHaveLength(8);
    const plain = rows.map((r) => r.dd.replace(/\u00a0/g, " "));
    expect(plain).toContain("Gold 500,000 · Platinum 1,000,000 · Diamond 10,000,000");
    expect(plain).toContain("Oro 30,000 · Platino 60,000 · Diamante 600,000");
    for (const r of rows) expect(breaksOnlyAfterDots(r.dd), r.dd).toBe(true);
  });

  it.each(certCountryCodes().map((c) => countrySlug(c)))("%s: every priced row breaks only after a \"·\"", async (slug) => {
    const rows = levelRows(await board(slug)).filter((r) => !r.dd.includes("<"));
    for (const r of rows) {
      expect(breaksOnlyAfterDots(r.dd), `${slug} ${r.dt}: ${r.dd}`).toBe(true);
      // Still the same words: the pairs, separated by "·".
      expect(r.dd.replace(/\u00a0/g, " ")).toMatch(/^\S+ [\d,]+( · \S+ [\d,]+)*$/);
    }
  });
});
