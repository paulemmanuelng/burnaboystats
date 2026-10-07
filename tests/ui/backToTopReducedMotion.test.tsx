import { render, screen, fireEvent } from "@testing-library/react";
import BackToTop from "../../app/components/BackToTop";

/**
 * V-global-07, the full-site debug of 5 Oct 2026. With prefers-reduced-motion
 * set, "Back to top" still glided to the top: read live in headless Chrome at
 * 1440 on 6 Oct, dark and light, /updates and /certifications from scrollY
 * 9000, it took about 1.5 s and 87 frames in between, the same as with no
 * preference. globals.css turns html's scroll-behavior to auto under reduced
 * motion, but the button passed behavior: "smooth" to window.scrollTo, and an
 * explicit behavior outranks the stylesheet.
 *
 * The button now asks for "instant" when the reader wants reduced motion, as
 * the site's other scripted scrolls do (AnchorTwins, MobileCerts, ScrollRail).
 * With that handler run on the live page the same four reads reached 0 on the
 * next frame, and the four with no preference still glided. On the shipped
 * component the first test fails.
 */
describe("Back to top respects prefers-reduced-motion", () => {
  let scrollTo: ReturnType<typeof vi.spyOn>;
  let matchMedia: ReturnType<typeof vi.spyOn>;

  const reader = (reduce: boolean) => {
    matchMedia = vi.spyOn(window, "matchMedia").mockImplementation((query: string) => ({
      matches: reduce && query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    render(<BackToTop />);
    return screen.getByRole("button", { name: "Back to top" });
  };

  beforeEach(() => {
    scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  });
  afterEach(() => {
    scrollTo.mockRestore();
    matchMedia?.mockRestore();
    document.body.innerHTML = "";
  });

  it("jumps straight to the top when the reader asks for reduced motion", () => {
    fireEvent.click(reader(true));
    expect(scrollTo).toHaveBeenCalledTimes(1);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "instant" });
  });

  it("keeps the smooth scroll for everyone else", () => {
    fireEvent.click(reader(false));
    expect(scrollTo).toHaveBeenCalledTimes(1);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
