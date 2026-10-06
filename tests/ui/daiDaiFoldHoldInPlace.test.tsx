import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DaiDaiConquest from "../../app/components/DaiDaiConquest";
import { daiDaiCountries, countryName, byVisibleName } from "../../app/components/DaiDaiRecord";
import { CHART_COUNTRIES } from "../../app/data/charts";

/**
 * V-music-05 (debug pass, 5 Oct 2026): on a phone, "The world takeover" grid
 * on /dai-dai and /dai-dai/es folds to thirty cells, and its button sits at the
 * grid's FOOT. Folding back ("Show fewer ↑", "Ver menos ↑") removes the cells
 * past thirty and the names that made the open grid three across — all of it
 * above the button. Nothing moved the page back: tapped at y=600 at 390, the
 * button landed at −261 on /dai-dai and −274 on /dai-dai/es (measured live in
 * headless Chrome, dark and light), the replay's peak chips in its place.
 * The fix holds the button under the finger (lib/holdInPlace), as the certs
 * ledger's fold does. jsdom has no layout, so the button's top is stood in
 * from the live figures — 600 open, −261 folded — and the test checks the page
 * scrolls it back.
 */

const cells = (lang: "en" | "es") =>
  byVisibleName(
    daiDaiCountries.map((e) => ({
      code: e.c,
      flag: CHART_COUNTRIES[e.c]?.flag ?? "🏳",
      name: countryName(e.c, lang),
      peak: e.peak,
    })),
    lang,
  );

const ES = {
  aria: "“Dai Dai” entró en las listas de {total} países y llegó al número 1 en {ones} de ellos.",
  cell: "{name}, pico N.º {peak}",
  showAll: "Ver los {total}, con nombres",
  showFewer: "Ver menos",
};

/** The button's top while the grid is open, and after it has folded. */
function standIn(el: HTMLElement, open: number, folded: number) {
  vi.spyOn(el, "getBoundingClientRect").mockImplementation(
    () => ({ top: el.getAttribute("aria-expanded") === "true" ? open : folded }) as DOMRect
  );
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("folding the Dai Dai takeover grid back keeps its button on screen", () => {
  it("the grid folds at all: more countries than the phone's thirty", () => {
    expect(daiDaiCountries.length).toBeGreaterThan(30);
  });

  it("opening does not scroll: the grid grows downward from where the reader is", async () => {
    render(<DaiDaiConquest countries={cells("en")} />);
    const btn = screen.getByRole("button", { name: /^Show all \d+, with names/ });
    standIn(btn, 400, 400);
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    await userEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    expect(scrollBy).not.toHaveBeenCalled();
  });

  for (const [lang, labels, closed, folded] of [
    ["en", undefined, /^Show all \d+, with names/, -261],
    ["es", ES, /^Ver los \d+, con nombres/, -274],
  ] as const) {
    it(`'${lang === "en" ? "Show fewer" : "Ver menos"}' tapped at y=600 stays at 600 (it fell to ${folded} on /dai-dai${lang === "es" ? "/es" : ""})`, async () => {
      render(<DaiDaiConquest countries={cells(lang)} labels={labels} />);
      const btn = screen.getByRole("button", { name: closed });
      await userEvent.click(btn);
      expect(btn).toHaveAttribute("aria-expanded", "true");

      standIn(btn, 600, folded);
      let anchorDuring = "";
      const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {
        anchorDuring = document.documentElement.style.overflowAnchor;
      });
      await userEvent.click(btn);

      expect(btn).toHaveAttribute("aria-expanded", "false");
      expect(btn).toHaveAccessibleName(closed);
      expect(scrollBy).toHaveBeenCalledWith({ top: folded - 600, behavior: "instant" });
      expect(anchorDuring).toBe("none");
      await vi.waitFor(() => expect(document.documentElement.style.overflowAnchor).toBe(""));
    });
  }
});
