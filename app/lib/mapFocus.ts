/**
 * The map marker holding KEYBOARD focus inside `vp`, if any — for the tour
 * map's and the listeners map's scroll handlers, which dismiss the card on
 * scroll unless a Tab stop is what scrolled.
 *
 * `:focus-visible`, so a marker a mouse clicked (which focuses it too) still
 * lets the card go on scroll as it always has. Markers carry their key in
 * `data-code`.
 */
export function keyboardFocused(vp: HTMLElement | null): SVGElement | null {
  const el = document.activeElement;
  if (!(el instanceof SVGElement) || !vp?.contains(el) || el.dataset.code === undefined) return null;
  try {
    return el.matches(":focus-visible") ? el : null;
  } catch {
    // An engine without :focus-visible: focus is focus.
    return el;
  }
}
