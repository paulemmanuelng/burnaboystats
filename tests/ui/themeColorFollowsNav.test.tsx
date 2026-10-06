import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from "../../app/components/ThemeToggle";

/**
 * The theme-color tag after a client-side navigation (debug pass 5 Oct 2026,
 * V-global-10).
 *
 * The tag comes from layout.tsx's viewport, so the ROUTER owns it: on some
 * navigations it drops the tag and inserts a fresh one carrying the server's
 * dark #0a0a0b. ThemeToggle wrote the tag only when the choice changed, so on
 * the live site a phone that flipped to light on / and then tapped /music →
 * /records kept data-theme="light" under a single #0a0a0b tag — the strip behind
 * the status bar went black over a paper page until the next full load (read in
 * headless Chrome at 390 and 1440). These tests do what the router did — swap
 * the tag, or set its value back — and hold every theme-color tag to the
 * applied theme. They fail on the shipped component, which painted the tag once
 * per choice.
 */

const DARK = "#0a0a0b";
const LIGHT = "#f7f4ee";

const metas = () =>
  [...document.querySelectorAll('meta[name="theme-color"]')].map((m) => m.getAttribute("content"));

/** What Next's router did on /music → /records: the old tag out, a new dark one in. */
async function routerReinsertsTag() {
  await act(async () => {
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.remove());
    const m = document.createElement("meta");
    m.setAttribute("name", "theme-color");
    m.setAttribute("content", DARK);
    document.head.appendChild(m);
  });
}

function serverTag() {
  const m = document.createElement("meta");
  m.setAttribute("name", "theme-color");
  m.setAttribute("content", DARK);
  document.head.appendChild(m);
  return m;
}

const realMatchMedia = window.matchMedia;
function osPrefersLight(light: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: light && query.includes("light"),
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

beforeEach(() => {
  localStorage.clear();
  document.head.innerHTML = "";
  delete document.documentElement.dataset.theme;
  serverTag();
});
afterEach(() => {
  cleanup();
  window.matchMedia = realMatchMedia;
  localStorage.clear();
  document.head.innerHTML = "";
});

describe("ThemeToggle — theme-color follows the applied theme through navigations", () => {
  it("flip to light on the masthead, then a navigation swaps the tag: it stays light", async () => {
    render(<ThemeToggle variant="mini" />);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(metas()).toEqual([DARK]);

    fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(metas()).toEqual([LIGHT]);

    await routerReinsertsTag();
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(metas()).toEqual([LIGHT]);

    // And a second hop, as /records → /certifications did.
    await routerReinsertsTag();
    expect(metas()).toEqual([LIGHT]);
  });

  it("a navigation that writes the server's value back onto the tag is painted over", async () => {
    localStorage.setItem("theme", "light");
    render(<ThemeToggle />);
    expect(metas()).toEqual([LIGHT]);

    await act(async () => {
      document.querySelector('meta[name="theme-color"]')!.setAttribute("content", DARK);
    });
    expect(metas()).toEqual([LIGHT]);
  });

  it("System on a light device: the swapped-in tag follows the device, not the server", async () => {
    osPrefersLight(true);
    localStorage.setItem("theme", "system");
    render(<ThemeToggle variant="full" />);
    expect(document.documentElement.dataset.theme).toBe("light");

    await routerReinsertsTag();
    expect(metas()).toEqual([LIGHT]);
  });

  it("a hard load in light carries two tags (the pre-paint one and React's): both read light", async () => {
    localStorage.setItem("theme", "light");
    document.querySelector('meta[name="theme-color"]')!.setAttribute("content", LIGHT); // the pre-paint script
    serverTag(); // React's own, inserted on hydration
    render(<ThemeToggle />);
    expect(metas()).toEqual([LIGHT, LIGHT]);
  });

  it("dark stays dark: a navigation in dark leaves the server's value alone", async () => {
    osPrefersLight(true); // an explicit Dark is never overridden by the device
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);
    await routerReinsertsTag();
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(metas()).toEqual([DARK]);
  });

  it("flip back to dark after light: the next navigation keeps it dark", async () => {
    localStorage.setItem("theme", "light");
    render(<ThemeToggle variant="mini" />);
    fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));
    expect(metas()).toEqual([DARK]);
    await routerReinsertsTag();
    expect(metas()).toEqual([DARK]);
  });

  it("stops watching <head> once unmounted", async () => {
    localStorage.setItem("theme", "light");
    const { unmount } = render(<ThemeToggle />);
    expect(metas()).toEqual([LIGHT]);
    unmount();
    await routerReinsertsTag();
    expect(metas()).toEqual([DARK]);
  });
});
