import { render, screen, fireEvent, act, within } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/map",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ListenerMap from "../../app/components/ListenerMap";
import TourMapDesktop from "../../app/components/TourMapDesktop";
import { tourMapProps } from "../../app/lib/tourMapData";

/**
 * C-07 (debug pass, 24 Sep 2026): the listeners map dismisses its card on any
 * scroll, because the card is fixed where the marker sat. Tabbing to a marker
 * the window or the zoomed map has to scroll to reveal fires that same
 * scroll, so the card of the marker just focused vanished as it opened — at
 * zoom 2, five of eight Tab stops showed nothing. Under keyboard focus the
 * card now re-anchors.
 *
 * The tour map had the same fault and the same fix until 30 Sep 2026, when
 * its redesign (design response, items 4 and 9) put the card INSIDE the map
 * frame and made the map one Tab stop: the card no longer floats, so a scroll
 * has nothing to strand. Its half of this file checks that instead.
 *
 * jsdom has no :focus-visible heuristic (programmatic focus never matches it),
 * so a Tab stop is stood in for by making the focused marker match it. A mouse
 * click focuses the marker too, without :focus-visible, and keeps the old
 * rule: the listeners card goes on scroll.
 */

let keyboard = false;
beforeEach(() => {
  keyboard = false;
  const matches = Element.prototype.matches;
  vi.spyOn(Element.prototype, "matches").mockImplementation(function (this: Element, sel: string) {
    if (sel === ":focus-visible") return keyboard && this === document.activeElement;
    return matches.call(this, sel);
  });
});
afterEach(() => vi.restoreAllMocks());

const scroll = () =>
  act(() => {
    window.dispatchEvent(new Event("scroll"));
  });

describe("the listeners map", () => {
  const marker = /^London, United Kingdom:/;

  it("keeps the card of a marker reached by Tab when the page scrolls", () => {
    render(<ListenerMap />);
    keyboard = true;
    act(() => screen.getByRole("button", { name: marker }).focus());
    expect(screen.getByRole("status")).toBeInTheDocument();

    scroll();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("still lets the card go on scroll when the mouse put it there", () => {
    render(<ListenerMap />);
    act(() => screen.getByRole("button", { name: marker }).focus()); // a click focuses too
    expect(screen.getByRole("status")).toBeInTheDocument();

    scroll();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("re-anchors to where the focused marker now sits", () => {
    render(<ListenerMap />);
    keyboard = true;
    const london = screen.getByRole("button", { name: marker });
    let top = 400;
    vi.spyOn(london, "getBoundingClientRect").mockImplementation(
      () => ({ left: 100, width: 10, top, bottom: top + 10, right: 110, height: 10, x: 100, y: top, toJSON() {} }) as DOMRect,
    );
    act(() => london.focus());
    const before = (screen.getByRole("status") as HTMLElement).style.top;

    top = 250; // the window scrolled the marker up 150px to reveal it
    fireEvent.scroll(window);
    expect((screen.getByRole("status") as HTMLElement).style.top).not.toBe(before);
  });
});

describe("the tour map: one Tab stop, and a card that lives inside the frame", () => {
  const map = () => screen.getByRole("group", { name: /World map of the countries where a Burna Boy show is documented/ });
  const stops = (root: Element) => [...root.querySelectorAll("[data-code]")].filter((el) => el.getAttribute("tabindex") === "0");

  it("the map is ONE Tab stop, not 57", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    expect(map().querySelectorAll("[data-code]")).toHaveLength(57);
    expect(stops(map())).toHaveLength(1);
  });

  it("negative control: the shipped map gave every country its own Tab stop", () => {
    // PerformanceMap.tsx's wire(), shipped until 30 Sep 2026: `tabIndex: 0` on
    // every performed shape and dot.
    const shipped = document.createElement("div");
    for (let i = 0; i < 57; i++) {
      const el = document.createElement("span");
      el.setAttribute("data-code", String(i));
      el.setAttribute("tabindex", "0");
      shipped.append(el);
    }
    expect(stops(shipped)).toHaveLength(57);
  });

  it("a keyboard-focused country previews its card inside the map, and a scroll leaves it there", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    keyboard = true;
    const first = stops(map())[0] as SVGElement;
    act(() => first.focus());
    const card = screen.getByRole("region", { name: /, preview$/ });
    // Inside the map frame, not fixed to the viewport.
    expect(map().parentElement!.contains(card)).toBe(true);
    expect(within(card).getByText("Click to pin · links inside")).toBeInTheDocument();

    scroll();
    expect(screen.getByRole("region", { name: /, preview$/ })).toBe(card);
  });

  it("arrows walk the 57 in region order, then by name; Enter pins with links; Escape clears", () => {
    render(<TourMapDesktop data={tourMapProps} />);
    keyboard = true;
    const [a, b] = tourMapProps.order.map((code) => tourMapProps.countries.find((c) => c.code === code)!);
    act(() => (stops(map())[0] as SVGElement).focus());
    expect(document.activeElement?.getAttribute("aria-label")).toBe(a.say);

    fireEvent.keyDown(document.activeElement!, { key: "ArrowRight" });
    expect(document.activeElement?.getAttribute("aria-label")).toBe(b.say);
    expect(stops(map())).toHaveLength(1);
    expect(stops(map())[0]).toBe(document.activeElement);

    fireEvent.keyDown(document.activeElement!, { key: "Enter" });
    const card = screen.getByRole("region", { name: b.name });
    expect(within(card).getByRole("button", { name: "Close" })).toBeInTheDocument();
    expect(within(card).queryByText("Click to pin · links inside")).toBeNull();

    fireEvent.keyDown(document.activeElement!, { key: "Escape" });
    expect(screen.queryByRole("region", { name: b.name })).toBeNull();
  });
});
