import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CertificationsPage from "../../app/certifications/page";
import { countryCount } from "../../app/data/certifications";
import { certCountryCodes } from "../../app/lib/certCountry";
import { read, winning } from "../fixtures/cssRules";

/**
 * Question 20 of the 15 Oct 2026 live debug (Paul: "yes to all", cb-5): the
 * phone certifications fold read "Certified units by country… 28 markets"
 * under a hero of "27 countries". The 28 are every /compare/in board, one of
 * them a market where he holds no plaque (Mexico), so the count is
 * board-wide and now says so: "28 board markets". The count stays derived.
 *
 * Shipped on main (a9574c64), served by the dev server on 15 Oct 2026, the
 * summary's text: "Certified units by country…28 markets▾".
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const RULE = /\b(\d+) board markets?\b/;

describe("Q20: the phone fold counts board markets, in those words", () => {
  it("/certifications: 'N board markets', N the boards", () => {
    const d = parse(renderToStaticMarkup(<CertificationsPage />));
    const summary = d.querySelector('nav[aria-label="Certified units by country"] details summary')!;
    const n = certCountryCodes().length;
    expect(summary.textContent).toContain(`Certified units by country…${n} board markets`);
    expect(Number(summary.textContent!.match(RULE)?.[1])).toBe(n);
    // The fold links one board per counted market.
    expect(summary.parentElement!.querySelectorAll("a")).toHaveLength(n);
    // The page's own country figure is untouched, and is a different number
    // only because the boards are board-wide.
    const heroCounts = new Set([...d.body.textContent!.matchAll(/(\d+)\s+countries/gi)].map((m) => Number(m[1])));
    expect([...heroCounts]).toEqual([countryCount]);
  });

  it("the count holds together: '28 board markets' never breaks across lines", () => {
    // Dev server, 15 Oct 2026: without nowrap the longer count broke as "28
    // BOARD / MARKETS" at 320 and 375 beside the wrapped kicker.
    expect(winning(read("app/components/mobileCerts.module.css"), ".compareCount", "white-space", () => true)).toBe("nowrap");
  });

  it("negative control: the summary main served fails the rule", () => {
    const served = "Certified units by country…28 markets▾";
    expect(served).not.toMatch(RULE);
  });
});
