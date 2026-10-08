import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Home from "../../app/page";
import desk from "../../app/page.module.css";
import phone from "../../app/components/mobileHome.module.css";
import { albums } from "../../app/data/albums";
import { albumPages } from "../../app/data/albumPages";
import { titleKey } from "../../app/lib/titleKey";

/**
 * SH-02 (design review, 8 Oct 2026): every album cover on the home page, the
 * desktop grid's 8 and the phone rail's 8, linked to /music. A reader who
 * tapped "Love, Damini" landed on the discography and had to find it again,
 * and the album pages, five of them "Discovered, not indexed" in Search
 * Console, had no link from the home page at all (0 hrefs to /music/albums/).
 *
 * Each cover now opens its own page. The page is read off albumPages, not
 * typed, so an album added there is linked here without an edit.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const ownPage = (title: string) => {
  const page = albumPages.find((a) => titleKey(a.title) === titleKey(title));
  return page ? `/music/albums/${page.slug}` : "/music";
};

/** Each card that does not open its own album's page, as "title → href". */
function wrongLinks(cards: Element[], titleClass: string): string[] {
  return cards
    .map((a) => ({ title: a.querySelector(`.${titleClass}`)?.textContent ?? "", href: a.getAttribute("href") }))
    .filter((c) => c.href !== ownPage(c.title))
    .map((c) => `${c.title} → ${c.href}`);
}

describe("SH-02: the home page's album covers open their own album pages", () => {
  const doc = parse(renderToStaticMarkup(<Home />));
  const deskCards = [...doc.querySelectorAll(`a.${desk.albumCard}`)];
  const phoneCards = [...doc.querySelectorAll(`a.${phone.railItem}`)];

  it("the premise: every studio album has a page, and each layout draws one card per album", () => {
    for (const a of albums) expect(ownPage(a.title), a.title).not.toBe("/music");
    expect(deskCards).toHaveLength(albums.length);
    expect(phoneCards).toHaveLength(albums.length);
  });

  it("desktop: each of the grid's covers opens that album's page", () => {
    expect(wrongLinks(deskCards, desk.albumTitle)).toEqual([]);
  });

  it("phone: each of the rail's covers opens that album's page", () => {
    expect(wrongLinks(phoneCards, phone.railTitle)).toEqual([]);
  });

  it("the discography keeps its own way in, beside the covers", () => {
    expect(doc.querySelector(`#music a[href="/music"]`)?.textContent).toMatch(/Full discography/);
    const rail = phoneCards[0].closest("section")!;
    expect(rail.querySelector('a[href="/music"]')?.textContent).toMatch(/All/);
  });

  // Verbatim from https://burnaboystats.com/ (live 8 Oct 2026): both layouts'
  // cards, as shipped.
  it("negative control: the cards as shipped, every one to /music, are caught", () => {
    const shipped = parse(
      `<a class="page-module__E0kJGG__albumCard" href="/music"><div class="albumTitle">Love, Damini</div></a>` +
        `<a class="mobileHome-module__1cyKeW__railItem" href="/music"><span class="railTitle">Love, Damini</span></a>`,
    );
    const [d, p] = [...shipped.querySelectorAll("a")];
    expect(wrongLinks([d], "albumTitle")).toEqual(["Love, Damini → /music"]);
    expect(wrongLinks([p], "railTitle")).toEqual(["Love, Damini → /music"]);
  });
});
