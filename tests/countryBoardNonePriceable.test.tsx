import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare/in",
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
import CountryPage from "../app/compare/in/[country]/page";
import { certCountryCodes, countrySlug, priceCountry } from "../app/lib/certCountry";

// A country board where no certification can be priced has counted === 0. The
// figure meta guarded its programme split with `board.counted && …`, and React
// prints a 0 from that, so /compare/in/colombia read "2 certs held by 2
// artists · none priceable0" (shown upper-case: "NONE PRICEABLE0") until
// 14 Oct 2026. The boards are found from the data, not listed. Run against the
// shipped CountryBoardView, the CO case fails with exactly that line.

const unpriced = certCountryCodes().filter((c) => {
  const b = priceCountry(c);
  return b && !b.counted;
});

const render = async (code: string) =>
  renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: countrySlug(code) }) }));

/** The text of the board's figure meta line, tags stripped, spaces folded. */
const metaLine = (html: string) => {
  const m = html.match(/<p class="[^"]*cbFigureMeta[^"]*">([\s\S]*?)<\/p>/);
  return m ? m[1].replace(/<[^>]+>/g, "").replace(/[\s ]+/g, " ").trim() : null;
};

describe("a country board with nothing priceable", () => {
  it("exists in the data (else this guard checks nothing)", () => {
    expect(unpriced.length).toBeGreaterThan(0);
  });

  it.each(unpriced)("%s: the figure line ends on “none priceable”, with no stray 0", async (code) => {
    const b = priceCountry(code)!;
    const line = metaLine(await render(code));
    expect(line).toBe(
      `${b.plaques} cert${b.plaques === 1 ? "" : "s"} held by ${b.artists} artist${b.artists === 1 ? "" : "s"} · none priceable`,
    );
  });
});
