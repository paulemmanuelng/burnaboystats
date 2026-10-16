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
import styles from "../app/dai-dai/dai-dai.module.css";

/**
 * Dai Dai chapter 07 names the halftime bill the page's lineup shows (owner
 * ruling 15 Oct 2026, #6, "yes to all"). The chapter's sentence came from the
 * July copy and stopped at Madonna, BTS and Justin Bieber, while the lineup
 * under it, the FAQ, the page's description, /records/firsts and /timeline
 * all name Coldplay too. Both editions: the Spanish is a hand translation.
 *
 * The acts are read off each edition's own rendered lineup (every card but
 * the two "Dai Dai" headliners), in its order, and joined here in each
 * language's list form.
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const EDITIONS = [
  { lang: "en", html: renderToStaticMarkup(<DaiDaiPage />), word: "alongside", and: " and " },
  { lang: "es", html: renderToStaticMarkup(<DaiDaiPageES />), word: "junto a", and: " y " },
] as const;
const join = (names: string[], and: string) => `${names.slice(0, -1).join(", ")}${and}${names[names.length - 1]}`;

/** The co-performers the lineup draws: every card but the headliners'. */
const coPerformers = (d: Document) =>
  [...d.querySelectorAll(`section[aria-labelledby="dd-lineup"] li`)]
    .filter((li) => !li.classList.contains(styles.lineupHeadliner))
    .map((li) => li.querySelector(`.${styles.lineupName}`)?.textContent ?? "");
/** Chapter 07's body: the story's seventh chapter. */
const chapter07 = (d: Document) => {
  const ch = d.querySelectorAll("[data-dd-chapter]");
  expect(ch.length).toBeGreaterThanOrEqual(7);
  return (ch[6].querySelector("p")?.textContent ?? "").replace(/\s+/g, " ");
};

describe("Dai Dai chapter 07 names the lineup's acts (owner ruling 15 Oct 2026, #6)", () => {
  it.each(EDITIONS)("$lang: the lineup draws four co-performers, Coldplay among them", ({ html }) => {
    const acts = coPerformers(parse(html));
    expect(acts).toHaveLength(4);
    expect(acts).toContain("Coldplay");
  });

  it.each(EDITIONS)("$lang: chapter 07 names every one, in the lineup's order", ({ html, word, and }) => {
    const d = parse(html);
    expect(chapter07(d)).toContain(`${word} ${join(coPerformers(d), and)}.`);
  });

  it("negative control: main's sentences stopped at Justin Bieber", () => {
    // DaiDaiStory.tsx:125 and dai-dai/es/page.tsx:261 on main a9574c64.
    const SHIPPED = {
      en: "before a global audience of billions, alongside Madonna, BTS and Justin Bieber.",
      es: "ante una audiencia global de miles de millones, junto a Madonna, BTS y Justin Bieber.",
    };
    for (const { lang, html, word, and } of EDITIONS) {
      const want = `${word} ${join(coPerformers(parse(html)), and)}.`;
      expect(SHIPPED[lang]).not.toContain(want);
      expect(SHIPPED[lang]).not.toContain("Coldplay");
    }
  });

  it("Coldplay's lineup card keeps its chorus tag: no source read names the song", () => {
    // Kept as the ruling says: the reports differ on the song and none could
    // be read at the body (15 Oct 2026).
    for (const { html } of EDITIONS) {
      const card = [...parse(html).querySelectorAll(`section[aria-labelledby="dd-lineup"] li`)].find((li) => li.querySelector(`.${styles.lineupName}`)?.textContent === "Coldplay");
      expect(card?.querySelector(`.${styles.lineupTag}`)?.textContent).toMatch(/PS22 Chorus/);
    }
  });
});
