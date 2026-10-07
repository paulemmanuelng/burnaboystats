import { describe, it, expect, vi, afterEach } from "vitest";
import { useEffect, type ReactNode } from "react";
import { act, render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RevenuePage from "../../app/records/tours/revenue/page";
import { revenueShows } from "../../app/data/tourRevenue";
import { shownLine } from "../../app/lib/showsChips";
import { dropDeepLink } from "../../app/lib/deepLink";
import { SHOWS_PARAM } from "../../app/lib/showsDeepLink";
import { text } from "../fixtures/phoneTrees";

/**
 * An unknown ?artist= leaves the address bar with the board (debug pass
 * 5 Oct 2026, V-tourscars-11).
 *
 * Read live in headless Chrome, 7 Oct 2026, at 1440x900 and 390x844, dark and
 * light: /records/tours/revenue?artist=xyz opened on "All artists" (phone
 * "All"), 82 of 82 nights, and the bar still read ?artist=xyz — as did
 * #artist=xyz, an empty ?artist=, and ?artist=XYZ&foo=1#bar. The tour map
 * drops a ?country= that is not a country. Now a slug no chip has goes from
 * the address on arrival, on both layouts; anything else in it stays, and an
 * artist's slug is left alone.
 *
 * The drop waits for the commit's effects to finish: Next's app router
 * patches history.replaceState in an effect of its own, ABOVE the page, which
 * runs after the page's effects in the same commit. A replace before it would
 * leave the entry without the router's state (__NA), and Next reloads the
 * page on a Back to such an entry. FakeRouter does what the router does, at
 * the same point, so the test sees the same order.
 */

const ROUTER = { __NA: true, __PRIVATE_NEXTJS_INTERNALS_TREE: { tree: "revenue" } };

/** Next's AppRouter, as far as history goes: its state on the entry, and a
 *  replaceState patched in an effect that copies that state onto any call. */
function FakeRouter({ children }: { children: ReactNode }) {
  useEffect(() => {
    const original = window.history.replaceState.bind(window.history);
    window.history.replaceState = (data: unknown, unused: string, url?: string | URL | null) => {
      const d = (data ?? {}) as Record<string, unknown>;
      if (d.__NA) return original(d, unused, url);
      const s = window.history.state as Record<string, unknown> | null;
      return original({ ...d, __NA: s?.__NA, __PRIVATE_NEXTJS_INTERNALS_TREE: s?.__PRIVATE_NEXTJS_INTERNALS_TREE }, unused, url);
    };
    return () => {
      window.history.replaceState = original;
    };
  }, []);
  return <>{children}</>;
}

async function arrive(url: string) {
  window.history.replaceState({ ...ROUTER }, "", url);
  const r = render(
    <FakeRouter>
      <RevenuePage />
    </FakeRouter>,
  );
  // The drop's turn: after every effect of the commit.
  await act(async () => {
    await new Promise((res) => setTimeout(res, 0));
  });
  const desktop = r.container.querySelector('[class*="desktopOnly"]') as HTMLElement;
  const phone = [...r.container.querySelectorAll("main > div")].find((d) => /screen/.test(d.className)) as HTMLElement;
  return { ...r, desktop, phone };
}

const label = (b: Element) => b.childNodes[0].textContent;
const pressed = (tree: HTMLElement) =>
  [...tree.querySelectorAll('button[aria-pressed="true"]')].map(label);
const address = () => `${window.location.pathname}${window.location.search}${window.location.hash}`;
const PATH = "/records/tours/revenue";
const TOTAL = revenueShows.length;
const live = (tree: HTMLElement) => text(tree.querySelector('[aria-live="polite"]'));

afterEach(() => {
  window.history.replaceState(null, "", "/");
});

describe("V-tourscars-11: a slug no chip has goes from the address, on both layouts", () => {
  it.each([
    ["?artist=xyz", PATH],
    ["#artist=xyz", PATH],
    ["?artist=", PATH],
    ["?artist=XYZ&foo=1#tab=2", `${PATH}?foo=1#tab=2`],
    ["?artist=tems#artist=xyz", PATH], // the fragment wins, and names nobody
  ])("%s → %s, the board on All", async (link, want) => {
    const m = await arrive(PATH + link);
    expect(address()).toBe(want);
    // The board is All, as before: only the address changed.
    expect(pressed(m.desktop)).toEqual(["All artists"]);
    expect(pressed(m.phone)).toEqual(["All"]);
    expect(live(m.desktop)).toBe(shownLine(TOTAL, TOTAL));
    expect(live(m.phone)).toBe(shownLine(TOTAL, TOTAL));
    // The router's state is still on the entry, so a Back to it is a soft one.
    expect((window.history.state as Record<string, unknown>).__NA).toBe(true);
    m.unmount();
  });

  it("an artist's slug stays, with their chip on (the “Biggest shows” link)", async () => {
    for (const link of ["?artist=tems", "#artist=tiwa-savage", "?artist=Davido&foo=1"]) {
      const m = await arrive(PATH + link);
      expect(address()).toBe(PATH + link);
      expect(pressed(m.desktop)).not.toEqual(["All artists"]);
      expect(pressed(m.phone)).not.toEqual(["All"]);
      m.unmount();
    }
  });

  it("a bare visit is left alone", async () => {
    const m = await arrive(`${PATH}?foo=1#methodology`);
    expect(address()).toBe(`${PATH}?foo=1#methodology`);
    m.unmount();
  });

  it("negative control: a drop inside the commit's own effects runs before the router's patch, and strips its state", async () => {
    // Why the drop waits its turn: the same call, made from a page effect.
    function DropNow() {
      useEffect(() => dropDeepLink(SHOWS_PARAM), []);
      return null;
    }
    window.history.replaceState({ ...ROUTER }, "", `${PATH}?artist=xyz`);
    const r = render(
      <FakeRouter>
        <DropNow />
      </FakeRouter>,
    );
    expect(address()).toBe(PATH);
    expect((window.history.state as Record<string, unknown> | null)?.__NA).toBeUndefined();
    r.unmount();
  });
});
