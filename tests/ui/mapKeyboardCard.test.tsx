import { render, screen, fireEvent, act } from "@testing-library/react";

import PerformanceMap from "../../app/components/PerformanceMap";
import ListenerMap from "../../app/components/ListenerMap";

/**
 * C-07 (debug pass, 24 Sep 2026): the tour and listener maps dismiss their
 * card on any scroll, because the card is fixed where the marker sat. Tabbing
 * to a marker the window or the zoomed map has to scroll to reveal fires that
 * same scroll, so the card of the marker just focused vanished as it opened —
 * at zoom 2, four of eight Tab stops on the tour map and five of eight on the
 * listeners map showed nothing. Under keyboard focus the card now re-anchors.
 *
 * jsdom has no :focus-visible heuristic (programmatic focus never matches it),
 * so a Tab stop is stood in for by making the focused marker match it. A mouse
 * click focuses the marker too, without :focus-visible, and keeps the old
 * rule: the card goes on scroll.
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

describe.each([
  ["the tour map", () => <PerformanceMap />, /^Canada:/],
  ["the listeners map", () => <ListenerMap />, /^London, United Kingdom:/],
] as const)("%s", (_, ui, marker) => {
  it("keeps the card of a marker reached by Tab when the page scrolls", () => {
    render(ui());
    keyboard = true;
    act(() => screen.getByRole("button", { name: marker }).focus());
    expect(screen.getByRole("status")).toBeInTheDocument();

    scroll();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("still lets the card go on scroll when the mouse put it there", () => {
    render(ui());
    act(() => screen.getByRole("button", { name: marker }).focus()); // a click focuses too
    expect(screen.getByRole("status")).toBeInTheDocument();

    scroll();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});

it("re-anchors to where the focused marker now sits", () => {
  render(<PerformanceMap />);
  keyboard = true;
  const canada = screen.getByRole("button", { name: /^Canada:/ });
  let top = 400;
  vi.spyOn(canada, "getBoundingClientRect").mockImplementation(
    () => ({ left: 100, width: 40, top, bottom: top + 30, right: 140, height: 30, x: 100, y: top, toJSON() {} }) as DOMRect
  );
  act(() => canada.focus());
  const before = (screen.getByRole("status") as HTMLElement).style.top;

  top = 250; // the window scrolled the marker up 150px to reveal it
  fireEvent.scroll(window);
  expect((screen.getByRole("status") as HTMLElement).style.top).not.toBe(before);
});
