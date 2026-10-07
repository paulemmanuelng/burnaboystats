import { describe, it, expect, vi, afterEach } from "vitest";
import { useEffect, type ReactNode } from "react";
import { act, cleanup, render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/map",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));
// The hit shapes load after idle; nothing here taps the map.
vi.mock("../../app/components/useTourMapHits", async (orig) => ({
  ...(await orig<typeof import("../../app/components/useTourMapHits")>()),
  useTourMapHits: () => null,
}));

import MobileTourMap from "../../app/components/MobileTourMap";
import TourMapDesktop from "../../app/components/TourMapDesktop";
import MapPage from "../../app/records/tours/map/page";
import { tourMapProps } from "../../app/lib/tourMapData";
import { withCountry } from "../../app/lib/tourMapUrl";

/**
 * Back to a tour map opened on a code that is not a country (debug 7 Oct
 * 2026, spotted while fixing V-tourscars-11).
 *
 * Read live in headless Chrome, 7 Oct 2026, at 1440x900 and 390x844:
 * /records/tours/map?country=zz (and ?country=xx) dropped the code from the
 * address, as it should, but the entry was left with history.state null. A
 * link off the page (desktop "Highest-grossing shows", phone "Festivals &
 * shows"), then Back: the address read /records/tours/map and the other
 * page stayed on screen, same document, no reload. The map's drop ran in a
 * mount effect with history.replaceState NOT yet patched by Next (logged
 * patched: false, state: null); Next's app router patches it in an effect of
 * its own, ABOVE the page, which runs after the page's effects in the same
 * commit, and its onPopState returns early on an entry with no state.
 * ?country=gb, ?country=pe and a bare visit never call it and came back.
 *
 * Now the drop waits one timer turn and keeps the entry's own state with the
 * router's keys left out (lib/deepLink replaceUrl), so the router's patched
 * replaceState puts its state back. FakeRouter does what the router does, at
 * the same point in the commit, and ignores a popstate with no state as
 * Next does, so the test sees the same order and the same Back.
 */

const ROUTER = { __NA: true, __PRIVATE_NEXTJS_INTERNALS_TREE: { tree: "map" } };
const BOARD = { __NA: true, __PRIVATE_NEXTJS_INTERNALS_TREE: { tree: "revenue" } };
const MAP = "/records/tours/map";

type State = Record<string, unknown> | null;
/** What Next's onPopState did with each Back: traversed, or returned early. */
let pops: ("restored" | "ignored")[] = [];

/** Next's AppRouter, as far as history goes: its state on the entry, push
 *  and replace patched in an effect that copy that state onto any call, and
 *  a popstate listener that does nothing for an entry without it. */
function FakeRouter({ children }: { children: ReactNode }) {
  useEffect(() => {
    const replace = window.history.replaceState.bind(window.history);
    const push = window.history.pushState.bind(window.history);
    const copy = (data: unknown): State => {
      const d = (data ?? {}) as Record<string, unknown>;
      if (d.__NA) return d;
      const s = window.history.state as State;
      return { ...d, __NA: s?.__NA, __PRIVATE_NEXTJS_INTERNALS_TREE: s?.__PRIVATE_NEXTJS_INTERNALS_TREE };
    };
    window.history.replaceState = (data: unknown, unused: string, url?: string | URL | null) => replace(copy(data), unused, url);
    window.history.pushState = (data: unknown, unused: string, url?: string | URL | null) => push(copy(data), unused, url);
    const onPop = (e: PopStateEvent) => {
      pops.push((e.state as State)?.__NA ? "restored" : "ignored");
    };
    window.addEventListener("popstate", onPop);
    return () => {
      window.history.replaceState = replace;
      window.history.pushState = push;
      window.removeEventListener("popstate", onPop);
    };
  }, []);
  return <>{children}</>;
}

const LAYOUTS = {
  desktop: () => <TourMapDesktop data={tourMapProps} />,
  phone: () => <MobileTourMap data={tourMapProps} />,
  "the page (both layouts)": () => <MapPage />,
} as const;
type Layout = keyof typeof LAYOUTS;

async function arrive(layout: Layout, url: string) {
  window.history.replaceState({ ...ROUTER }, "", url);
  const r = render(<FakeRouter>{LAYOUTS[layout]()}</FakeRouter>);
  // The drop's turn: after every effect of the commit.
  await act(async () => {
    await new Promise((res) => setTimeout(res, 0));
  });
  return r;
}

/** The router's own push to another page, then Back to the map. */
async function offAndBack() {
  window.history.pushState({ ...BOARD }, "", "/records/tours/revenue");
  const popped = new Promise((res) => window.addEventListener("popstate", res, { once: true }));
  await act(async () => {
    window.history.back();
    await popped;
  });
  return pops.at(-1);
}

const address = () => `${window.location.pathname}${window.location.search}${window.location.hash}`;
const state = () => window.history.state as State;
/** A country's card (desktop) or panel (phone): a named region that is not the list. */
const cards = () => screen.queryAllByRole("region").filter((r) => r.tagName !== "SECTION");

afterEach(() => {
  cleanup();
  pops = [];
  window.history.replaceState(null, "", "/");
});

describe("a ?country= that is not a country: dropped, and Back still comes home", () => {
  describe.each(Object.keys(LAYOUTS) as Layout[])("%s", (layout) => {
    it.each([
      ["?country=zz", MAP],
      ["?country=xx", MAP],
      ["?country=", MAP],
      ["?country=ZZ&foo=1#bar", `${MAP}?foo=1#bar`],
    ])("%s → %s, the router's state kept, Back restores the map", async (link, want) => {
      await arrive(layout, MAP + link);
      expect(address()).toBe(want);
      // As if there were no parameter: no card, no panel, no note.
      expect(cards()).toEqual([]);
      expect(screen.queryByText(/No documented show in/)).toBeNull();
      // The entry is still the router's, so a Back to it is a soft one.
      expect(state()?.__NA).toBe(true);
      expect(state()?.__PRIVATE_NEXTJS_INTERNALS_TREE).toEqual(ROUTER.__PRIVATE_NEXTJS_INTERNALS_TREE);
      expect(await offAndBack()).toBe("restored");
      expect(address()).toBe(want);
    });

    it("a played country, a real one with no show, and a bare visit are left alone", async () => {
      for (const [link, shows] of [
        ["?country=gb", () => expect(screen.getAllByRole("region", { name: "United Kingdom" }).length).toBeGreaterThan(0)],
        ["?country=pe", () => expect(screen.getAllByText("No documented show in Peru.").length).toBeGreaterThan(0)],
        ["", () => expect(cards()).toEqual([])],
      ] as const) {
        await arrive(layout, MAP + link);
        expect(address()).toBe(MAP + link);
        shows();
        expect(state()?.__NA).toBe(true);
        expect(await offAndBack()).toBe("restored");
        cleanup();
      }
    });

    it("gone before the drop's turn: nothing is written after it unmounts", async () => {
      window.history.replaceState({ ...ROUTER }, "", `${MAP}?country=zz`);
      const r = render(<FakeRouter>{LAYOUTS[layout]()}</FakeRouter>);
      r.unmount();
      await act(async () => {
        await new Promise((res) => setTimeout(res, 0));
      });
      expect(address()).toBe(`${MAP}?country=zz`);
      expect(state()).toEqual(ROUTER);
    });
  });

  it("negative control: the drop as shipped, inside the commit's own effects, runs before the router's patch and strands Back", async () => {
    // The line useTourMapUrl ran on arrival until 7 Oct 2026.
    function DropNow() {
      useEffect(() => {
        window.history.replaceState(null, "", withCountry(window.location.href, null));
      }, []);
      return null;
    }
    window.history.replaceState({ ...ROUTER }, "", `${MAP}?country=zz`);
    render(
      <FakeRouter>
        <DropNow />
      </FakeRouter>,
    );
    expect(address()).toBe(MAP);
    expect(state()).toBeNull();
    expect(await offAndBack()).toBe("ignored");
  });
});
