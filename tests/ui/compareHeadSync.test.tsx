import { render, cleanup } from "@testing-library/react";

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
import { siteUrl } from "../../app/site";

/**
 * V-compareB-01 (with V-compareA-04 and V-compareIn-05), the full-site debug
 * of 5 Oct 2026. A toggle on a pair page or a board, or a pick on /compare,
 * navigates client-side to /compare?…, and the tab kept the head of whichever
 * /compare link Next had prefetched: on /compare/tems-vs-tiwa-savage,
 * "Featured appearances" landed on /compare?a=tems&b=tiwa-savage&feat=0 with
 * the title "Compare Certified Units — Burna Boy vs Wizkid & More" and the
 * canonical https://burnaboystats.com/compare, where a reload of that URL
 * gives "Tems vs Tiwa Savage: Certified Units Compared" and
 * /compare/tems-vs-tiwa-savage (measured live in headless Chrome, 1440 and
 * 390). Next 16's client cache reuses a prefetched /compare head for every
 * query, so the page now puts its own on the tab after the commit.
 *
 * Each case starts from the stale head the live site showed, renders the page
 * for the toggled URL in the DOM, and expects the tab to read what
 * generateMetadata gives that URL. On the shipped page every case but the
 * plain /compare one fails: nothing touched the head.
 */
const STALE_TITLE = "Compare Certified Units — Burna Boy vs Wizkid & More";
const STALE_CANONICAL = "https://burnaboystats.com/compare";

function staleHead(title = STALE_TITLE, canonical = STALE_CANONICAL) {
  document.head.innerHTML = "";
  const t = document.createElement("title");
  t.textContent = title;
  const l = document.createElement("link");
  l.rel = "canonical";
  l.href = canonical;
  document.head.append(t, l);
}

async function expected(sp: Record<string, string>) {
  const m = await generateMetadata({ searchParams: Promise.resolve(sp) });
  return { title: String(m.title), canonical: new URL(String(m.alternates?.canonical), siteUrl).href };
}

const canonicalNow = () => document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')!.getAttribute("href");

afterEach(() => {
  cleanup();
  document.head.innerHTML = "";
});

describe("a client-side toggle on /compare leaves the tab on the comparison shown", () => {
  const states: [string, Record<string, string>][] = [
    ["pair page → Featured appearances off", { a: "tems", b: "tiwa-savage", feat: "0" }],
    ["pair page → Nigeria included", { a: "olamide", b: "black-sherif", ng: "1" }],
    ["pair page → Show all", { a: "tyla", b: "ayra-starr", all: "1" }],
    ["board → Featured appearances off", { mode: "country", country: "nigeria", feat: "0" }],
    ["/compare → pick Wizkid, then Davido", { a: "wizkid", b: "davido" }],
    ["song vs song → two songs picked", { mode: "songs", a: "burna-boy", sa: "Ye", b: "wizkid", sb: "Essence" }],
  ];

  it.each(states)("%s", async (_label, sp) => {
    const want = await expected(sp);
    // The case is only a case if the server render differs from the stale head.
    expect(want.title).not.toBe(STALE_TITLE);
    staleHead();
    render(await ComparePage({ searchParams: Promise.resolve(sp) }));
    expect(document.title).toBe(want.title);
    expect(canonicalNow()).toBe(want.canonical);
  });

  it("a second toggle to the same comparison puts it right again", async () => {
    // Features off, then on again: one title, two navigations. The page is not
    // remounted when only the query moves, and Next puts the stale head back
    // on each one (seen live on the second click).
    const off = { a: "tems", b: "tiwa-savage", feat: "0" };
    const on = { a: "tems", b: "tiwa-savage" };
    const want = await expected(on);
    expect(want).toEqual(await expected(off));
    staleHead();
    const { rerender } = render(await ComparePage({ searchParams: Promise.resolve(off) }));
    expect(document.title).toBe(want.title);
    staleHead();
    rerender(await ComparePage({ searchParams: Promise.resolve(on) }));
    expect(document.title).toBe(want.title);
    expect(canonicalNow()).toBe(want.canonical);
  });

  it("plain /compare keeps the generic head, untouched", async () => {
    const want = await expected({});
    expect(want).toEqual({ title: STALE_TITLE, canonical: STALE_CANONICAL });
    staleHead();
    const textNode = document.head.querySelector("title")!.firstChild;
    render(await ComparePage({ searchParams: Promise.resolve({}) }));
    // Not even rewritten with the same words: a full load already agrees.
    expect(document.head.querySelector("title")!.firstChild).toBe(textNode);
    expect(canonicalNow()).toBe(STALE_CANONICAL);
  });

  it("a full load of a toggled URL, already right, is left alone", async () => {
    const sp = { a: "tems", b: "tiwa-savage", feat: "0" };
    const want = await expected(sp);
    staleHead(want.title, want.canonical);
    const textNode = document.head.querySelector("title")!.firstChild;
    render(await ComparePage({ searchParams: Promise.resolve(sp) }));
    expect(document.head.querySelector("title")!.firstChild).toBe(textNode);
    expect(canonicalNow()).toBe(want.canonical);
  });
});
