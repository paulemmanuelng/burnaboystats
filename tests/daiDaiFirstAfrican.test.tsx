import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";

/**
 * The two "first African artist" lines the redesign dropped, restored on
 * 26 Sep 2026 with their original words (README §6: never reword them):
 *
 *  - the Global 200 lead figure's caption, "(a first for an African artist,
 *    and Shakira's 2nd)" / "(algo inédito para un artista africano, y el
 *    segundo de Shakira)", the words of the old card;
 *  - chapter 02's figure note, "First African artist ever · Shakira's 2nd" /
 *    "Primer artista africano en lograrlo · el 2.º de Shakira", the words of
 *    the old story rail.
 *
 * Each sits in its slot: the caption in the lead's caption, the note inside
 * chapter 02's figure, beside the big figure (the figure keeps its height).
 */

const LINES = {
  en: {
    caption: "the Global 200 (a first for an African artist, and Shakira's 2nd) and the Global 200 Excl. US",
    note: "First African artist ever · Shakira's 2nd",
  },
  es: {
    caption: "el Global 200 (algo inédito para un artista africano, y el segundo de Shakira) y el Global 200 Excl. US",
    note: "Primer artista africano en lograrlo · el 2.º de Shakira",
  },
} as const;

const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
const dom = (html: string) => {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
};

/** The Global 200 lead's caption and chapter 02's figure, as a page serves them. */
function slotsOf(html: string) {
  const d = dom(html);
  const lead = [...d.querySelectorAll("#numbers ul > li")].find((li) => /^(No\.|N\.º) 1$/.test(text(li.querySelector('[class*="leadValue"]'))));
  const chapter02 = d.querySelectorAll("[data-dd-kicker]")[1]?.parentElement?.parentElement;
  return {
    caption: text(lead?.querySelector('[class*="leadCaption"]')),
    figure: text(chapter02?.children[1]),
    note: text(chapter02?.children[1]?.querySelector('[class*="firstNote"]')),
  };
}

const hasBoth = (s: { caption: string; figure: string; note: string }, lang: "en" | "es") =>
  s.caption.includes(LINES[lang].caption) && s.note === LINES[lang].note && s.figure.includes(LINES[lang].note);

describe("both 'first African artist' lines are back, in both editions", () => {
  it.each([
    ["en", DaiDaiPage],
    ["es", DaiDaiPageES],
  ] as const)("%s: the Global 200 lead's caption and chapter 02's figure note", (lang, Page) => {
    const s = slotsOf(renderToStaticMarkup(<Page />));
    expect(s.caption).toContain(LINES[lang].caption);
    expect(s.note).toBe(LINES[lang].note);
    expect(hasBoth(s, lang)).toBe(true);
  });

  it("negative control: the build without them (PR 350 as first pushed, c1e3a9aa)", () => {
    // The lead caption and chapter 02's figure text as that build served them.
    const shipped = {
      en: {
        caption: "On both Billboard globals: the Global 200 and the Global 200 Excl. US",
        figure: "7 weeks at No. 1 Billboard Global 200 · week by week 4 straight, a week at No. 3, then 3 more. And 10 straight weeks at No. 1 on the Global 200 Excl. US.",
        note: "",
      },
      es: {
        caption: "En las dos listas globales de Billboard: el Global 200 y el Global 200 Excl. US",
        figure: "7 semanas en el N.º 1 Billboard Global 200 · semana a semana 4 seguidas, una en el N.º 3 y 3 más. Además, 10 semanas seguidas en el N.º 1 de la Global 200 sin EE. UU.",
        note: "",
      },
    };
    expect(hasBoth(shipped.en, "en")).toBe(false);
    expect(hasBoth(shipped.es, "es")).toBe(false);
  });
});
