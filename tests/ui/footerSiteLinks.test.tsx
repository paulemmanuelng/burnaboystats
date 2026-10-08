import { renderToStaticMarkup } from "react-dom/server";
import { decl, read, rules } from "../fixtures/cssRules";

let path = "/records";
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => path,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import FooterNav from "../../app/components/FooterNav";
import { DEFAULT_FOOTER, footerColumns, footerFor } from "../../app/lib/links";

/**
 * Fix 79 (design review 8 Oct 2026; Paul decides (a), default yes): About,
 * FAQ and Contact left the masthead (J4-1) "because they are in every
 * footer", but only the home footer had them, so /about — which ranks for the
 * site's top query — would have lost its site-wide link. The compact footer
 * (every page except home) gains a standing line under the disclaimer:
 * "About · FAQ · Contact", mono 11 / 0.1em, --text-muted, gold on hover, each
 * target at least 24px. Its own page links are unchanged.
 */

const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");
const footer = (p: string) => {
  path = p;
  return doc(renderToStaticMarkup(<FooterNav />));
};
const CSS = read("app/globals.css");
const body = (sel: string) => rules(CSS).filter((r) => r.media === null && r.selector === sel).map((r) => r.body).join(";");

describe("fix 79: the compact footer's About · FAQ · Contact line", () => {
  for (const p of ["/records", "/about", "/certifications", "/music/last-last"]) {
    it(`${p}: under the disclaimer, three links in order, the dots hidden from screen readers`, () => {
      const d = footer(p);
      const nav = d.querySelector('nav.footerSite[aria-label="Site"]')!;
      expect(nav).not.toBeNull();
      expect([...nav.querySelectorAll("a")].map((a) => [a.getAttribute("href"), a.textContent])).toEqual([
        ["/about", "About"],
        ["/faq", "FAQ"],
        ["/contact", "Contact"],
      ]);
      expect([...nav.querySelectorAll('[aria-hidden="true"]')].map((s) => s.textContent)).toEqual(["·", "·"]);
      // right after the disclaimer, in the wordmark's column
      expect(nav.previousElementSibling?.className).toBe("footerDisclaimer");
    });
  }

  it("the page's own links are unchanged: /records' variant and the default, as main shipped them", () => {
    const quick = (p: string) => [...footer(p).querySelectorAll("nav.footerQuick a")].map((a) => a.getAttribute("href"));
    expect(quick("/records")).toEqual(footerFor["/records"].links.map((l) => l.href));
    expect(quick("/records")).toEqual(["/music", "/certifications", "/live-charts", "/methodology"]);
    expect(quick("/music/last-last")).toEqual(DEFAULT_FOOTER.links.map((l) => l.href));
    expect(quick("/music/last-last")).toEqual(["/music", "/records", "/live-charts", "/api", "/press"]);
  });

  it("home keeps its five columns, which already carry About, FAQ and Contact, and gets no extra line", () => {
    const d = footer("/");
    expect(d.querySelector(".footerSite")).toBeNull();
    const hrefs = footerColumns.flatMap((c) => c.links.map((l) => l.href));
    for (const h of ["/about", "/faq", "/contact"]) expect(hrefs).toContain(h);
  });

  it("mono 11 / 0.1em in --text-muted, gold on hover; the nav/footer floor gives each link 24px", () => {
    const line = body(".footerSite");
    expect(decl(line, "font-family")).toBe("var(--font-mono), monospace");
    expect(decl(line, "font-size")).toBe("11px");
    expect(decl(line, "letter-spacing")).toBe("0.1em");
    expect(decl(line, "color")).toBe("var(--text-muted)");
    expect(decl(body(".footerSite a"), "color")).toBe("var(--text-muted)");
    expect(decl(body(".footerSite a:hover"), "color")).toBe("var(--gold)");
    const floor = rules(CSS).find((r) => r.media === null && /^:where\(nav, footer\) a,/.test(r.selector))!;
    expect(decl(floor.body, "min-height")).toBe("24px");
  });
});

describe("negative control", () => {
  it("the compact footer main shipped for /records had no way to /about, /faq or /contact", () => {
    // FooterNav's compact branch on d3c39eda: the wordmark, the disclaimer and /records' four links.
    const SHIPPED_HREFS = ["/music", "/certifications", "/live-charts", "/methodology"];
    for (const h of ["/about", "/faq", "/contact"]) expect(SHIPPED_HREFS).not.toContain(h);
    // and today's /records footer carries all three
    const now = [...footer("/records").querySelectorAll("a")].map((a) => a.getAttribute("href"));
    for (const h of ["/about", "/faq", "/contact"]) expect(now).toContain(h);
  });
});
