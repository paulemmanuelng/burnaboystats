import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare/burna-boy-vs-wizkid",
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

import PairPage from "../../app/compare/[pair]/page";
import styles from "../../app/compare/compare.module.css";
import { countryBoardLinks } from "../../app/lib/certCountry";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";

/**
 * CC-09 (design review, 8 Oct 2026): a pair page's country table named 23
 * markets and linked none of them; its only /compare/in/ link was the "By
 * country" mode tab. Each country name now opens that country's board.
 *
 * The expected board is read off countryBoardLinks (the list /certifications
 * prints), by the name the row shows, so a row and the board it names cannot
 * drift apart.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const boardByName = new Map(countryBoardLinks().map((b) => [b.name, b.href]));

/** Each country row whose name does not open its board, in words. */
function rowProblems(table: ParentNode): string[] {
  const out: string[] = [];
  // By class here, or by the served page's hashed form
  // ("compare-module__-ZWgpW__countryName"), so the shipped markup reads the same.
  for (const name of table.querySelectorAll(`tbody .${styles.countryName}, tbody [class$="__countryName"]`)) {
    const label = name.textContent ?? "";
    const want = boardByName.get(label);
    // The link is the whole cell: flag, name and code (the name is off-screen
    // on a phone, where the flag and code are what shows).
    const a = name.closest("a");
    const got = a?.getAttribute("href") ?? null;
    if (a && !a.querySelector('[class$="__countryCode"], [class*="countryCode"]')) out.push(`${label}: the link leaves out the code a phone shows`);
    if (want !== got) out.push(`${label}: want ${want ?? "no board"}, got ${got ?? "no link"}`);
  }
  return out;
}

async function table(pair: string) {
  const tree = await PairPage({ params: Promise.resolve({ pair }) });
  return parse(renderToStaticMarkup(tree)).querySelector("table")!;
}

describe("CC-09: a pair page's country rows link to that country's board", () => {
  it("Burna Boy vs Wizkid: every country row opens its board", async () => {
    const t = await table("burna-boy-vs-wizkid");
    const names = t.querySelectorAll(`tbody .${styles.countryName}`);
    expect(names.length, "the premise: the table has its country rows").toBeGreaterThan(10);
    expect(rowProblems(t)).toEqual([]);
    // A programme row (RIAA Latin) is the United States' line: it opens the US board.
    expect(t.querySelector('a[href="/compare/in/united-states"]')).not.toBeNull();
  });

  it("every pair page's rows link the same way", async () => {
    const pairs = allPairs().map(([a, b]) => pairSlug(a, b));
    expect(pairs.length).toBeGreaterThan(100);
    const wrong: string[] = [];
    for (const p of pairs.filter((_, i) => i % 10 === 0)) wrong.push(...rowProblems(await table(p)).map((w) => `${p}: ${w}`));
    expect(wrong).toEqual([]);
  });

  // Verbatim from https://burnaboystats.com/compare/burna-boy-vs-wizkid (live 8 Oct 2026).
  it("negative control: the shipped row, a plain country name, is caught", () => {
    const shipped = parse(
      `<table><tbody><tr role="row"><td role="cell"><span class="compare-module__-ZWgpW__country"><span class="compare-module__-ZWgpW__flag" aria-hidden="true">🇺🇸</span><span class="compare-module__-ZWgpW__countryName">United States</span><span class="compare-module__-ZWgpW__countryCode">US</span></span></td></tr></tbody></table>`,
    );
    expect(rowProblems(shipped)).toEqual(["United States: want /compare/in/united-states, got no link"]);
  });
});
