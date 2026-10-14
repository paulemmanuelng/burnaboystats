import { act, cleanup, fireEvent, render } from "@testing-library/react";
import PickerRail from "../../app/music/[song]/PickerRail";
import styles from "../../app/music/[song]/song.module.css";
import { afterHitBox, read, rules, winning } from "../fixtures/cssRules";

/**
 * Job 4 · J4-5 (fixes 88, 89): the song picker's ‹ › and its edge fades.
 *
 * From 901 the label row carries two 36px buttons, each moving the row by one
 * window (its own clientWidth), aria-disabled at an edge the row cannot pass
 * — still focusable, a no-op. The row fades 48px at a side that still has
 * songs. Below 901 neither is drawn, so the phone row is unchanged. jsdom does
 * no layout, so the row's scroll box is stubbed: 1000px of chips in a 400px
 * window.
 */

const CSS = read("app/music/[song]/song.module.css");
const at =
  (w: number, coarse = false) =>
  (m: string | null) =>
    m === null ||
    m
      .replace(/^@media\s*/, "")
      .split(/\s+and\s+/)
      .every((part) => {
        const min = part.match(/min-width:\s*(\d+)px/);
        if (min) return w >= Number(min[1]);
        const max = part.match(/max-width:\s*(\d+)px/);
        if (max) return w <= Number(max[1]);
        if (/pointer:\s*coarse/.test(part)) return coarse;
        throw new Error(`unhandled media: ${m}`);
      });

const WINDOW = 400;
const CONTENT = 1000;
let left = 0;
const isRow = (el: Element) => el.classList.contains("row");
let scrollBy: ReturnType<typeof vi.fn>;

beforeEach(() => {
  left = 0;
  const own = (p: "scrollLeft" | "scrollWidth" | "clientWidth") => Object.getOwnPropertyDescriptor(Element.prototype, p)!;
  const sl = own("scrollLeft");
  vi.spyOn(Element.prototype, "scrollLeft", "get").mockImplementation(function (this: Element) {
    return isRow(this) ? left : sl.get!.call(this);
  });
  vi.spyOn(Element.prototype, "scrollLeft", "set").mockImplementation(function (this: Element, v: number) {
    if (isRow(this)) left = Math.min(Math.max(0, v), CONTENT - WINDOW);
    else sl.set!.call(this, v);
  });
  const sw = own("scrollWidth");
  vi.spyOn(Element.prototype, "scrollWidth", "get").mockImplementation(function (this: Element) {
    return isRow(this) ? CONTENT : sw.get!.call(this);
  });
  const cw = own("clientWidth");
  vi.spyOn(Element.prototype, "clientWidth", "get").mockImplementation(function (this: Element) {
    return isRow(this) ? WINDOW : cw.get!.call(this);
  });
  scrollBy = vi.fn();
  (Element.prototype as unknown as { scrollBy: unknown }).scrollBy = scrollBy;
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  delete (Element.prototype as unknown as { scrollBy?: unknown }).scrollBy;
});

const mount = () =>
  render(
    <PickerRail className="row" current="a" label="All 3 song pages">
      <a href="#a" aria-current="page">
        A
      </a>
      <a href="#b">B</a>
      <a href="#c">C</a>
    </PickerRail>,
  );

const buttons = (c: HTMLElement) => [...c.querySelectorAll("button")];

describe("J4-5: ‹ › on the song picker", () => {
  it("two buttons, labelled for a screen reader, glyphs exactly ‹ and ›, each controlling the row", () => {
    const { container } = mount();
    const [back, on] = buttons(container);
    expect(buttons(container)).toHaveLength(2);
    expect(back.textContent).toBe("‹");
    expect(on.textContent).toBe("›");
    expect(back.getAttribute("aria-label")).toBe("Scroll the song pages back");
    expect(on.getAttribute("aria-label")).toBe("Scroll the song pages on");
    const row = container.querySelector(".row")!;
    expect(row.id).not.toBe("");
    for (const b of [back, on]) {
      expect(b.getAttribute("type")).toBe("button");
      expect(b.getAttribute("aria-controls")).toBe(row.id);
      // never inside the row of links
      expect(row.contains(b)).toBe(false);
    }
    expect(container.querySelector(`.${styles.pickerLabel}`)?.textContent).toBe("All 3 song pages");
  });

  it("at the start the back button is aria-disabled and a no-op; › moves the row one window on", () => {
    const { container } = mount();
    const [back, on] = buttons(container);
    expect(back.getAttribute("aria-disabled")).toBe("true");
    expect(on.hasAttribute("aria-disabled")).toBe(false);
    fireEvent.click(back);
    expect(scrollBy).not.toHaveBeenCalled();
    fireEvent.click(on);
    expect(scrollBy).toHaveBeenCalledWith({ left: WINDOW, behavior: "smooth" });
  });

  it("at the end › is aria-disabled and ‹ moves the row one window back", () => {
    const { container } = mount();
    const row = container.querySelector(".row")!;
    act(() => {
      left = CONTENT - WINDOW;
      fireEvent.scroll(row);
    });
    const [back, on] = buttons(container);
    expect(on.getAttribute("aria-disabled")).toBe("true");
    expect(back.hasAttribute("aria-disabled")).toBe(false);
    fireEvent.click(on);
    expect(scrollBy).not.toHaveBeenCalled();
    fireEvent.click(back);
    expect(scrollBy).toHaveBeenCalledWith({ left: -WINDOW, behavior: "smooth" });
  });

  it("the row fades only at a side that still has songs", () => {
    const { container } = mount();
    const row = container.querySelector(".row")!;
    expect(row.classList.contains(styles.pickerFadeEnd)).toBe(true);
    expect(row.classList.contains(styles.pickerFadeStart)).toBe(false);
    act(() => {
      left = 300;
      fireEvent.scroll(row);
    });
    expect(row.classList.contains(styles.pickerFadeStart)).toBe(true);
    expect(row.classList.contains(styles.pickerFadeEnd)).toBe(true);
    act(() => {
      left = CONTENT - WINDOW;
      fireEvent.scroll(row);
    });
    expect(row.classList.contains(styles.pickerFadeStart)).toBe(true);
    expect(row.classList.contains(styles.pickerFadeEnd)).toBe(false);
  });
});

describe("J4-5: the buttons and fades in song.module.css", () => {
  const body = (sel: string, m: (x: string | null) => boolean) =>
    rules(CSS)
      .filter((r) => m(r.media) && r.selector === sel)
      .map((r) => r.body)
      .join(";");

  it("36px circles on the control edge, 44px to a coarse pointer", () => {
    expect(winning(CSS, ".railBtn", "width", at(1024))).toBe("36px");
    expect(winning(CSS, ".railBtn", "height", at(1024))).toBe("36px");
    expect(winning(CSS, ".railBtn", "border", at(1024))).toBe("1px solid var(--btn-edge)");
    // the padding box: 36px less a 1px border each side
    const [w, h] = afterHitBox(body(".railBtn::after", at(1024, true)), [34, 34]);
    expect(w).toBeGreaterThanOrEqual(44);
    expect(h).toBeGreaterThanOrEqual(44);
    // two hit boxes never overlap: the gap is at least twice the overhang
    const gap = parseFloat(winning(CSS, ".railBtns", "gap", at(1024, true)) ?? "0");
    expect(gap).toBeGreaterThanOrEqual(w - 34);
  });

  it("48px edge fades from 901, none below", () => {
    for (const sel of [".pickerFadeEnd", ".pickerFadeStart", ".pickerFadeStart.pickerFadeEnd"]) {
      expect(winning(CSS, sel, "mask-image", at(901)), sel).toMatch(/48px/);
      expect(winning(CSS, sel, "-webkit-mask-image", at(901)), sel).toMatch(/48px/);
      expect(winning(CSS, sel, "mask-image", at(900)), sel).toBeUndefined();
    }
  });

  it("the buttons are not drawn below 901", () => {
    expect(winning(CSS, ".railBtns", "display", at(900))).toBe("none");
    expect(winning(CSS, ".railBtns", "display", at(375))).toBe("none");
    expect(winning(CSS, ".railBtns", "display", at(901))).toBe("flex");
  });
});

describe("J4-5 negative control: the shipped picker", () => {
  it("main e85e6efe rendered its label and a bare row: no button, no fade", () => {
    // app/music/[song]/page.tsx:251–252 and PickerRail.tsx:42 on main, as rendered.
    const shipped = document.createElement("section");
    shipped.innerHTML = `<div class="${styles.pickerLabel}">All 15 song pages</div><div class="${styles.picker}"><a href="/dai-dai">Dai Dai</a></div>`;
    expect(shipped.querySelectorAll("button")).toHaveLength(0);
    expect(shipped.querySelector(`.${styles.picker}`)!.className).not.toMatch(new RegExp(styles.pickerFadeEnd));
  });
});
