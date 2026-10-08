import { render, cleanup, fireEvent } from "@testing-library/react";
import type { ReactElement } from "react";

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
import CountryPage from "../../app/compare/in/[country]/page";

/**
 * V-compareB-02, the full-site debug of 5 Oct 2026. On a pair page, Enter on
 * "Featured appearances" (or the Nigeria switch, or the strip's Include /
 * Separate Nigeria) navigates to /compare?…, another route, so Next mounts a
 * new tree: focus fell to <body> and the next Tab went to the breadcrumb's
 * HOME (live, headless Chrome, 1440 dark and 390 light, on
 * /compare/kizz-daniel-vs-victony, /compare/burna-boy-vs-wizkid and
 * /compare/asake-vs-davido). On /compare itself the same link kept focus.
 *
 * Each case renders the page the reader is on, focuses the control, clicks it
 * (Enter on a link is a click), then does what Next does: drops that tree and
 * mounts the page for the link's own href. Focus must land on the same
 * control in the new tree. On the shipped page every "lands on" case fails.
 */

// Next's Link prevents the browser's navigation and routes itself; so does
// this, after the page's own capture-phase listener has seen the click.
const stopNavigation = (e: Event) => e.preventDefault();
beforeEach(() => document.addEventListener("click", stopNavigation));
afterEach(() => {
  document.removeEventListener("click", stopNavigation);
  cleanup();
});

const text = (el: Element | null) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const linkTo = (match: RegExp) => {
  const el = [...document.querySelectorAll("a")].find((a) => match.test(text(a)));
  if (!el) throw new Error(`no link matching ${match}`);
  return el;
};
/** The page a /compare?… href renders, as the router would. */
const pageFor = async (href: string) => {
  const url = new URL(href, "https://burnaboystats.com");
  expect(url.pathname).toBe("/compare");
  return ComparePage({ searchParams: Promise.resolve(Object.fromEntries(url.searchParams)) });
};
const pair = (slug: string) => PairPage({ params: Promise.resolve({ pair: slug }) });
const board = (country: string) => CountryPage({ params: Promise.resolve({ country }) });

/** Focus a control, activate it, then remount onto its href. */
async function activate(from: ReactElement, control: RegExp, opts: { focus?: boolean; init?: MouseEventInit } = {}) {
  const first = render(from);
  const link = linkTo(control);
  const href = link.getAttribute("href")!;
  if (opts.focus !== false) link.focus();
  fireEvent.click(link, opts.init);
  first.unmount();
  render(await pageFor(href));
  return document.activeElement;
}

describe("a toggle that leaves the route hands focus back to the control used", () => {
  const cases: [string, () => Promise<ReactElement>, RegExp, RegExp][] = [
    ["pair page → Featured appearances", () => pair("kizz-daniel-vs-victony"), /^Featured appearances:/, /^Featured appearances: off · lead credits only$/],
    ["pair page → Nigeria switch", () => pair("kizz-daniel-vs-victony"), /^Nigeria: included/, /^Nigeria: separated$/],
    ["pair page → Include Nigeria (the strip)", () => pair("burna-boy-vs-wizkid"), /^Include Nigeria$/, /^Separate Nigeria$/],
    ["pair page → Separate Nigeria (the strip)", () => pair("asake-vs-davido"), /^Separate Nigeria$/, /^Include Nigeria$/],
    ["pair page → Show all lands on Show fewer", () => pair("tems-vs-tiwa-savage"), /^Show all ↓$/, /^Show fewer ↑$/],
    ["board → Featured appearances", () => board("nigeria"), /^Featured appearances:/, /^Featured appearances: off · lead credits only$/],
  ];

  it.each(cases)("%s", async (_label, from, control, landing) => {
    const active = await activate(await from(), control);
    expect(active).not.toBe(document.body);
    expect(active?.tagName).toBe("A");
    expect(text(active)).toMatch(landing);
    expect(active).toBe(linkTo(landing));
  });

  it("Show fewer, on /compare itself, hands focus to Show all", async () => {
    // Same route: the tree is kept, but the row that held Show fewer is gone.
    const { rerender } = render(await pageFor("/compare?a=tems&b=tiwa-savage&all=1"));
    const link = linkTo(/^Show fewer ↑$/);
    link.focus();
    fireEvent.click(link);
    rerender(await pageFor(link.getAttribute("href")!));
    expect(document.activeElement).toBe(linkTo(/^Show all ↓$/));
  });
});

describe("and leaves focus alone otherwise", () => {
  it("a click on a link that never took focus (Safari) moves nothing", async () => {
    expect(await activate(await pair("kizz-daniel-vs-victony"), /^Featured appearances:/, { focus: false })).toBe(document.body);
  });

  it("a modified click (a new tab) moves nothing", async () => {
    expect(await activate(await pair("kizz-daniel-vs-victony"), /^Featured appearances:/, { init: { metaKey: true } })).toBe(document.body);
  });

  it("focus moved on before the new page arrived stays the reader's", async () => {
    const first = render(await pair("kizz-daniel-vs-victony"));
    const link = linkTo(/^Featured appearances:/);
    link.focus();
    fireEvent.click(link);
    linkTo(/^How this is counted/).focus();
    first.unmount();
    render(await pageFor(link.getAttribute("href")!));
    expect(document.activeElement).toBe(document.body);
  });

  it("on /compare the link keeps focus itself, and the key does not linger", async () => {
    const { rerender, unmount } = render(await pageFor("/compare?a=kizz-daniel&b=victony&feat=0"));
    const link = linkTo(/^Featured appearances:/);
    link.focus();
    fireEvent.click(link);
    rerender(await pageFor(link.getAttribute("href")!));
    expect(document.activeElement).toBe(link);
    expect(text(link)).toMatch(/: on · every cert held$/);
    // A later navigation from an unmarked link ("Change ✕") must not pull
    // focus back to the switch.
    unmount();
    render(await pageFor("/compare?b=victony"));
    expect(document.activeElement).toBe(document.body);
  });
});
