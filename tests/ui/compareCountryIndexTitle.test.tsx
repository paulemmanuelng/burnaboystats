import { render, cleanup } from "@testing-library/react";
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

import ComparePage, { generateMetadata } from "../../app/compare/page";
import { metadata as indexMetadata } from "../../app/compare/in/page";

/**
 * V-compareA-11, the full-site debug of 5 Oct 2026. The country mode's index
 * reached by query — /compare?mode=country, /compare?mode=country&feat=0
 * (where the By-country segment and the index's own "Featured appearances"
 * switch go with features off) and a country slug that names no market — drew
 * the h1 "Certified units by country" under the hub's title. Read live in
 * headless Chrome: the tab said "Compare Certified Units — Burna Boy vs Wizkid
 * & More" on all three, with the canonical already /compare/in, whose own
 * title is "Certified Units by Country — Afrobeats Artists".
 *
 * Each state must carry /compare/in's head — title, description, canonical
 * and share card — and its title must begin with the words of the h1 it sits
 * over. HeadSync puts the same title on the tab after a client-side toggle.
 */
const SHIPPED_TITLE = "Compare Certified Units — Burna Boy vs Wizkid & More";

const states: [string, Record<string, string>][] = [
  ["/compare?mode=country", { mode: "country" }],
  ["/compare?mode=country&feat=0", { mode: "country", feat: "0" }],
  ["/compare?mode=country&country=atlantis", { mode: "country", country: "atlantis" }],
];

const head = (sp: Record<string, string>) => generateMetadata({ searchParams: Promise.resolve(sp) });
const h1Of = async (sp: Record<string, string>) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) }));
  return [...root.querySelectorAll("h1")].map((h) => h.textContent!.replace(/\s+/g, " ").trim());
};

afterEach(() => {
  cleanup();
  document.head.innerHTML = "";
});

describe("the country index by query carries the index's own head", () => {
  it.each(states)("%s", async (_url, sp) => {
    const m = await head(sp);
    expect(m.title).toBe(indexMetadata.title);
    expect(m.description).toBe(indexMetadata.description);
    expect(m.alternates?.canonical).toBe("/compare/in");
    expect(m.openGraph).toEqual(indexMetadata.openGraph);
    expect(m.twitter).toEqual(indexMetadata.twitter);
  });

  it.each(states)("%s: the title names what the h1 says", async (_url, sp) => {
    const [h1] = await h1Of(sp);
    expect(h1).toBe("Certified units by country");
    const title = String((await head(sp)).title);
    expect(title.toLowerCase().startsWith(h1.toLowerCase())).toBe(true);
  });

  it("negative control: the title the live site shipped does not name its h1", () => {
    // The literal string read off the three URLs, against the same rule.
    expect(SHIPPED_TITLE.toLowerCase().startsWith("certified units by country")).toBe(false);
  });

  it("a toggle onto the index by query puts the index's title on the tab", async () => {
    // /compare/in → "Featured appearances" off is a client-side navigation to
    // /compare?mode=country&feat=0; HeadSync writes what generateMetadata gives.
    document.head.innerHTML = `<title>${SHIPPED_TITLE}</title><link rel="canonical" href="https://burnaboystats.com/compare">`;
    render(await ComparePage({ searchParams: Promise.resolve({ mode: "country", feat: "0" }) }));
    expect(document.title).toBe(indexMetadata.title);
    expect(document.head.querySelector('link[rel="canonical"]')!.getAttribute("href")).toBe("https://burnaboystats.com/compare/in");
  });
});

describe("the hub and a named board keep their own heads", () => {
  it("plain /compare", async () => {
    expect((await head({})).title).toBe(SHIPPED_TITLE);
  });

  it("a board by query", async () => {
    const m = await head({ mode: "country", country: "canada" });
    expect(m.title).not.toBe(indexMetadata.title);
    expect(m.alternates?.canonical).toBe("/compare/in/canada");
  });
});
