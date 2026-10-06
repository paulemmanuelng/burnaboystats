import { readFileSync } from "node:fs";
import { render, screen, fireEvent } from "@testing-library/react";
import BackToTop from "../../app/components/BackToTop";

/**
 * V-global-06, the full-site debug of 5 Oct 2026. "Back to top" only scrolled.
 * The button sits after <main> and before the footer, and hides itself at the
 * top (visibility:hidden), so focus fell to <body> while the browser's
 * sequential-focus point stayed at the button: the next Tab focused the
 * footer's first link and scrolled the page back to the bottom (measured live
 * in headless Chrome at 1440, dark and light, keyboard and mouse: /updates to
 * scrollY 24405 on "RSS", /certifications to 11973, /records/awards to 16112).
 *
 * Focus now goes to <main id="content">, the skip link's target, without a
 * second scroll; with that run on the live page the next Tab stayed at
 * scrollY 0 on the first link of the content on all three pages. On the
 * shipped component the first, second and fourth tests fail.
 */
describe("Back to top moves keyboard focus to the top of the content", () => {
  let scrollTo: ReturnType<typeof vi.spyOn>;
  beforeEach(() => {
    scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  });
  afterEach(() => {
    scrollTo.mockRestore();
    document.body.innerHTML = "";
  });

  // The order the root layout renders: page content, then the button, then the footer.
  const page = () => {
    const main = document.createElement("main");
    main.id = "content";
    main.innerHTML = `<a href="/">Home</a>`;
    document.body.appendChild(main);
    render(<BackToTop />, { container: document.body.appendChild(document.createElement("div")) });
    const footer = document.createElement("footer");
    footer.innerHTML = `<a href="/rss.xml">RSS</a>`;
    document.body.appendChild(footer);
    return { main, button: screen.getByRole("button", { name: "Back to top" }) };
  };

  it("scrolls to the top and focuses <main id=\"content\"> without a scroll of its own", () => {
    const { main, button } = page();
    const focus = vi.spyOn(main, "focus");
    button.focus();
    fireEvent.click(button);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    expect(document.activeElement).toBe(main);
    // preventScroll, or the focus would jump the page instantly and cut the smooth scroll.
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  });

  it("makes <main> focusable only while it holds focus", () => {
    const { main, button } = page();
    expect(main.hasAttribute("tabindex")).toBe(false);
    fireEvent.click(button);
    expect(main.getAttribute("tabindex")).toBe("-1");
    // The next Tab moves focus on; <main> goes back to being a plain landmark,
    // so a click on its text afterwards does not focus it.
    (screen.getByRole("link", { name: "Home" }) as HTMLElement).focus();
    expect(main.hasAttribute("tabindex")).toBe(false);
  });

  it("leaves a page without #content as it was", () => {
    render(<BackToTop />);
    const button = screen.getByRole("button", { name: "Back to top" });
    button.focus();
    expect(() => fireEvent.click(button)).not.toThrow();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("draws no ring round <main> while it holds that focus", () => {
    // Comments stripped: the rule's own comment names the selector.
    const css = readFileSync("app/globals.css", "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    const rule = css.match(/main#content:focus\s*\{([^}]*)\}/);
    expect(rule?.[1]).toMatch(/outline:\s*none/);
    // The ring it overrides: [tabindex]:focus-visible is (0,2,0); main#content:focus is (1,1,1).
    expect(css).toMatch(/\[tabindex\]:focus-visible\s*\{[^}]*outline:\s*2px solid/);
  });
});
