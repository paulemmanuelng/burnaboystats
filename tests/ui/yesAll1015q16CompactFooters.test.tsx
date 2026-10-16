import { renderToStaticMarkup } from "react-dom/server";

let path = "/about";
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
import { footerFor, footerSiteLinks } from "../../app/lib/links";

/**
 * Owner question #16 (live debug 15 Oct 2026, HA-3; Paul: "yes to all"):
 * since fix 79 the compact footer prints "About · FAQ · Contact" under the
 * disclaimer on every page but home, and the lists written for /about, /faq
 * and /contact before it named the same pages again. The repeats become
 * Updates · Records · Certifications.
 */

const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");
const footer = (p: string) => {
  path = p;
  return doc(renderToStaticMarkup(<FooterNav />));
};
const hrefs = (d: Document, sel: string) => [...d.querySelectorAll(`${sel} a`)].map((a) => a.getAttribute("href"));
const SITE = footerSiteLinks.map((l) => l.href);
const TRIO = ["/updates", "/records", "/certifications"];

describe("#16: /about, /faq and /contact name each page once", () => {
  for (const p of ["/about", "/faq", "/contact"]) {
    it(`${p}: no link in the page's own list repeats the About · FAQ · Contact line`, () => {
      const d = footer(p);
      expect(hrefs(d, "nav.footerSite")).toEqual(SITE);
      const quick = hrefs(d, "nav.footerQuick");
      expect(quick.filter((h) => SITE.includes(h!))).toEqual([]);
      // and no href twice anywhere in the footer
      const all = hrefs(d, "nav");
      expect(all.length).toBe(new Set(all).size);
    });

    it(`${p}: Updates · Records · Certifications, in that order`, () => {
      const quick = hrefs(footer(p), "nav.footerQuick");
      expect(quick.filter((h) => TRIO.includes(h!))).toEqual(TRIO);
    });
  }

  it("each list as ruled: the repeats replaced in place, the page's other links kept", () => {
    const list = (p: string) => footerFor[p].links.map((l) => `${l.label} ${l.href}`);
    expect(list("/about")).toEqual(["Music /music", "Updates /updates", "Records /records", "Certifications /certifications"]);
    expect(list("/contact")).toEqual([
      "Updates /updates",
      "Records /records",
      "Certifications /certifications",
      "Methodology /methodology",
      "Open data API /api",
    ]);
    expect(list("/faq")).toEqual([
      "Methodology /methodology",
      "Updates /updates",
      "Records /records",
      "Certifications /certifications",
      "Open data API /api",
    ]);
  });

  it("the provenance notes are unchanged", () => {
    expect(footerFor["/about"].note).toBe("Biography facts sourced from Wikipedia.");
    expect(footerFor["/contact"].note).toBe("Built by Paul Emmanuel.");
    expect(footerFor["/faq"].note).toBeUndefined();
  });
});

describe("#16 negative control: the lists main shipped", () => {
  it("origin/main a9574c64 repeated two of About · FAQ · Contact in each of the three", () => {
    // app/lib/links.ts on main, the three variants' hrefs verbatim.
    const SHIPPED: Record<string, string[]> = {
      "/about": ["/music", "/records", "/faq", "/contact"],
      "/contact": ["/about", "/faq", "/methodology", "/api"],
      "/faq": ["/methodology", "/about", "/contact", "/api"],
    };
    for (const [p, quick] of Object.entries(SHIPPED)) {
      expect(quick.filter((h) => SITE.includes(h)).length, p).toBe(2);
      expect(footerFor[p].links.map((l) => l.href), p).not.toEqual(quick);
    }
  });
});
