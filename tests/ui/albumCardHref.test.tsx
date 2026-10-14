import { renderToStaticMarkup } from "react-dom/server";
import { fireEvent, render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MusicPage from "../../app/music/page";
import Discography from "../../app/components/Discography";
import music from "../../app/music/music.module.css";
import phone from "../../app/components/mobileMusic.module.css";
import { albums, eps, compilations } from "../../app/data/albums";
import { albumPages } from "../../app/data/albumPages";
import { albumCharts } from "../../app/data/charts";
import { albums as certAlbums } from "../../app/data/certifications";
import { sameTitle } from "../../app/lib/titleKey";
import { releaseLine, releaseLines } from "../../app/lib/releaseFigures";
import { afterHitBox, read, rules, winning } from "../fixtures/cssRules";

/**
 * albumCardHref (Job 4, J4-4: fixes 82, 83 and 95).
 *
 * A studio album's card on /music is one plain link to its album page: no
 * click interception, no dialog promise, its name its own text. The tracklist
 * dialog opens from a separate "{n} tracks" button that sits OUTSIDE the
 * link. Each card prints two figures, "Best No. {n} · {n} certifications", or
 * says what is missing; "Album page →" is a muted label with a gold arrow.
 * Albums run newest first on both layouts. EPs and the compilation have no
 * album page: their card is not a link and the track count is their only
 * control. The phone lists every release as a dense row.
 */

/** The figures line recounted from the data, not read off releaseFigures. */
function recount(title: string, form: "desk" | "phone"): string {
  const chart = albumCharts.find((r) => sameTitle(r.title, title));
  const cert = certAlbums.find((r) => sameTitle(r.title, title));
  const peaks = (chart?.entries ?? []).map((e) => e.peak);
  const n = cert?.certs.length ?? 0;
  const [one, many] = form === "desk" ? ["certification", "certifications"] : ["cert", "certs"];
  const peak = peaks.length ? `Best No. ${Math.min(...peaks)}` : "Not charted";
  return `${peak} · ${n === 0 ? `No ${many}` : `${n} ${n === 1 ? one : many}`}`;
}

const newestFirst = [...albums].sort((a, b) => b.year - a.year);
const slugOf = (title: string) => albumPages.find((p) => sameTitle(p.title, title))?.slug;
const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

const page = document.createElement("div");
page.innerHTML = renderToStaticMarkup(<MusicPage />);
const desktop = page.querySelector(`.${music.desktopOnly}`)!;
const phoneTree = page.querySelector(`.${phone.screen}`)!;

/** What is wrong with a card link: it must promise nothing but navigation. */
function cardLinkViolations(a: Element): string[] {
  const out: string[] = [];
  if (a.hasAttribute("aria-haspopup")) out.push(`${a.getAttribute("href")}: the card link claims a dialog`);
  if (a.hasAttribute("aria-label")) out.push(`${a.getAttribute("href")}: the card link's name is not its text`);
  if (a.querySelector("button")) out.push(`${a.getAttribute("href")}: a button nests inside the link`);
  return out;
}

describe("albumCardHref · desktop", () => {
  const studio = desktop.querySelector(`.${music.albumGrid}`)!;
  const links = [...studio.querySelectorAll(`a.${music.albumCard}`)];

  it("every studio card is one plain link to its album page, newest first", () => {
    expect(links.map((a) => text(a.querySelector(`.${music.albumTitle}`)))).toEqual(newestFirst.map((a) => a.title));
    expect(links.map((a) => a.getAttribute("href"))).toEqual(newestFirst.map((a) => `/music/albums/${slugOf(a.title)}`));
    expect(new Set(links.map((a) => a.getAttribute("href")))).toEqual(new Set(albumPages.map((p) => `/music/albums/${p.slug}`)));
    expect(links.flatMap(cardLinkViolations)).toEqual([]);
  });

  it("the \"{n} tracks\" button sits beside the link, outside it, and promises the dialog", () => {
    for (const [i, a] of links.entries()) {
      const item = a.parentElement!;
      expect(item.className).toContain(music.albumItem);
      const buttons = [...item.querySelectorAll("button")];
      expect(buttons).toHaveLength(1);
      expect(a.contains(buttons[0])).toBe(false);
      expect(buttons[0].getAttribute("aria-haspopup")).toBe("dialog");
      const album = newestFirst[i];
      expect(text(buttons[0])).toBe(`${album.tracks.length} tracks${album.editionNote ? " (standard)" : ""}`);
      // Its name starts with what it shows, then says whose tracklist.
      expect(buttons[0].getAttribute("aria-label")).toBe(`${text(buttons[0])}, ${album.title}`);
    }
  });

  it("each card's figures line is counted from the data, and says what is missing", () => {
    for (const [i, a] of links.entries()) {
      const title = newestFirst[i].title;
      const line = a.querySelector(`.${music.cardFigures}`)!;
      expect(text(line), title).toBe(recount(title, "desk"));
      expect(line.classList.contains(music.cardFiguresEmpty), title).toBe(recount(title, "desk") === "Not charted · No certifications");
    }
    // The label chain (credit · label) is gone from the studio cards.
    expect(studio.querySelectorAll(`.${music.cardLabel}`)).toHaveLength(0);
  });

  it("\"Album page →\": a muted label, a gold arrow, inside the link", () => {
    for (const a of links) {
      const label = a.querySelector(`.${music.cardPage}`)!;
      expect(text(label)).toBe("Album page →");
      const arrow = label.querySelector(`.${music.cardPageArrow}`)!;
      expect(arrow.getAttribute("aria-hidden")).toBe("true");
    }
    const css = read("app/music/music.module.css");
    const top = (m: string | null) => m === null;
    expect(winning(css, ".cardPage", "color", top)).toBe("var(--text-muted)");
    expect(winning(css, ".cardPageArrow", "color", top)).toBe("var(--gold)");
    expect(winning(css, ".cardFigures", "color", top)).toBe("var(--text)");
    expect(winning(css, ".cardFiguresEmpty", "color", top)).toBe("var(--text-muted)");
  });

  it("the head lede says what the card and the count do", () => {
    const lede = text(desktop.querySelector(`.${music.albumGrid}`)!.parentElement!.querySelector(`.${music.headLede}`));
    expect(lede).toBe("Each album opens its page; the track count opens the tracklist. Artwork via Spotify.");
  });

  it("EPs and the compilation link nowhere; the track count is each card's one control", () => {
    const also = [...desktop.querySelectorAll(`.${music.pairGrid} > div, .${music.wideCard}`)];
    expect(also.map((c) => text(c.querySelector(`.${music.albumTitle}, .${music.wideTitle}`)))).toEqual(
      [...eps, ...compilations].map((a) => a.title),
    );
    for (const c of also) {
      expect(c.tagName).toBe("DIV");
      expect(c.querySelectorAll("a")).toHaveLength(0);
      expect(c.querySelectorAll("button")).toHaveLength(1);
    }
    expect(desktop.querySelector(`.${music.pairGrid}`)!.innerHTML).not.toContain("/music/albums/");
  });
});

describe("albumCardHref · desktop behaviour", () => {
  const figures = Object.fromEntries(albums.map((a) => [a.title, releaseLines(a.title)]));

  it("a plain click on the card follows its link: no dialog, nothing prevented", () => {
    const opened: string[] = [];
    const onOpen = (e: Event) => opened.push((e as CustomEvent<string>).detail);
    let prevented: boolean | undefined;
    const seen = (e: Event) => (prevented = e.defaultPrevented);
    // jsdom cannot navigate: stop it at the window, after the page has had its say.
    const stop = (e: Event) => e.preventDefault();
    window.addEventListener("open-tracklist", onOpen);
    document.addEventListener("click", seen);
    window.addEventListener("click", stop);
    try {
      const { container } = render(<Discography albums={newestFirst} layout="grid" figures={figures} />);
      const first = container.querySelector(`a.${music.albumCard}`)!;
      fireEvent.click(first.querySelector(`.${music.albumTitle}`)!);
      expect(prevented).toBe(false);
      expect(opened).toEqual([]);
      // The button opens the dialog with the album's title.
      fireEvent.click(first.parentElement!.querySelector("button")!);
      expect(opened).toEqual([newestFirst[0].title]);
    } finally {
      window.removeEventListener("open-tracklist", onOpen);
      document.removeEventListener("click", seen);
      window.removeEventListener("click", stop);
    }
  });

  it("the empty state prints muted, the partial one plainly", () => {
    const one = [albums[0]];
    const empty = { [albums[0].title]: { desk: "Not charted · No certifications", phone: ["Not charted", "No certs"] as [string, string], empty: true } };
    const { container } = render(<Discography albums={one} layout="grid" figures={empty} />);
    expect(container.querySelector(`.${music.cardFigures}`)!.classList.contains(music.cardFiguresEmpty)).toBe(true);
  });
});

describe("albumCardHref · releaseLine", () => {
  it("prints the two figures, plural-safe, and names what is missing", () => {
    expect(releaseLine({ countries: 13, bestPeak: 2, certs: 8 }, "desk")).toBe("Best No. 2 · 8 certifications");
    expect(releaseLine({ countries: 13, bestPeak: 10, certs: 1 }, "desk")).toBe("Best No. 10 · 1 certification");
    expect(releaseLine({ countries: 1, bestPeak: 41, certs: 0 }, "desk")).toBe("Best No. 41 · No certifications");
    expect(releaseLine({ countries: 0, bestPeak: null, certs: 0 }, "desk")).toBe("Not charted · No certifications");
    expect(releaseLine({ countries: 13, bestPeak: 2, certs: 8 }, "phone")).toBe("Best No. 2 · 8 certs");
    expect(releaseLine({ countries: 13, bestPeak: 10, certs: 1 }, "phone")).toBe("Best No. 10 · 1 cert");
    expect(releaseLine({ countries: 0, bestPeak: null, certs: 0 }, "phone")).toBe("Not charted · No certs");
  });
});

describe("albumCardHref · phone", () => {
  const sections = [...phoneTree.querySelectorAll(`.${phone.albumList}`)];
  const [studio, also] = sections;
  const rows = [...studio.querySelectorAll(`.${phone.albumItem}`)];

  it("every studio album is a dense row, newest first, one link to its page with the button outside it", () => {
    expect(sections).toHaveLength(2);
    expect(rows.map((r) => text(r.querySelector(`.${phone.albumTitle}`)))).toEqual(newestFirst.map((a) => a.title));
    for (const [i, r] of rows.entries()) {
      const a = r.querySelector(`a.${phone.albumRow}`)!;
      expect(a.getAttribute("href")).toBe(`/music/albums/${slugOf(newestFirst[i].title)}`);
      expect(cardLinkViolations(a)).toEqual([]);
      const buttons = [...r.querySelectorAll("button")];
      expect(buttons).toHaveLength(1);
      expect(a.contains(buttons[0])).toBe(false);
      expect(buttons[0].getAttribute("aria-haspopup")).toBe("dialog");
      expect(text(buttons[0])).toMatch(new RegExp(`^${newestFirst[i].tracks.length} tracks( · std)?$`));
    }
  });

  it("each row's meta is \"{year} · Best No. {n} · {n} certs\", counted from the data", () => {
    for (const [i, r] of rows.entries()) {
      const a = newestFirst[i];
      expect(text(r.querySelector(`.${phone.albumMeta}`)), a.title).toBe(`${a.year} · ${recount(a.title, "phone")}`);
    }
  });

  it("EPs and the compilation: rows that link nowhere, the button their one control", () => {
    const also_ = [...also.querySelectorAll(`.${phone.albumItem}`)];
    expect(also_.map((r) => text(r.querySelector(`.${phone.albumTitle}`)))).toEqual([...eps, ...compilations].map((a) => a.title));
    for (const [i, r] of also_.entries()) {
      expect(r.querySelectorAll("a")).toHaveLength(0);
      expect(r.querySelectorAll("button")).toHaveLength(1);
      expect(text(r.querySelector(`.${phone.albumMeta}`))).toBe(String([...eps, ...compilations][i].year));
    }
  });

  it("\"Tap for tracks\" goes from the studio head (the row opens the page) and stays on the EPs'", () => {
    const head = (list: Element) => text(list.previousElementSibling);
    expect(head(studio)).not.toContain("Tap for tracks");
    expect(head(also)).toContain("Tap for tracks");
  });
});

describe("albumCardHref · the track buttons' boxes", () => {
  it("desktop: an outlined 36px pill with a 44px reach on a coarse pointer", () => {
    const css = read("app/music/music.module.css");
    const top = (m: string | null) => m === null;
    expect(winning(css, ".tracksBtn", "border", top)).toBe("1px solid var(--btn-edge)");
    expect(winning(css, ".tracksBtn", "height", top)).toBe("36px");
    expect(winning(css, ".tracksBtn", "color", top)).toBe("var(--text-muted)");
    expect(winning(css, ".cardTracks", "color", top)).toBe("var(--text)");
    const after = rules(css).find((r) => r.selector === ".tracksBtn::after" && /pointer:\s*coarse/.test(r.media ?? ""))!;
    expect(afterHitBox(after.body, [96, 36])[1]).toBeGreaterThanOrEqual(44);
  });

  it("phone: an outlined pill 44px tall; a row's meta wraps between its items, never inside one", () => {
    const css = read("app/components/mobileMusic.module.css");
    const top = (m: string | null) => m === null;
    expect(winning(css, ".tracksBtn", "border", top)).toBe("1px solid var(--btn-edge)");
    expect(winning(css, ".tracksBtn", "min-height", top)).toBe("44px");
    expect(winning(css, ".albumTracks", "color", top)).toBe("var(--text)");
    expect(winning(css, ".metaPart", "white-space", top)).toBe("nowrap");
    const meta = phoneTree.querySelector(`.${phone.albumMeta}`)!;
    expect(meta.querySelectorAll(`.${phone.metaPart}`)).toHaveLength(3);
    // a no-break space before each "·", so a separator never opens a line
    expect(meta.textContent).toMatch(/^\S+\u00a0· \S/);
  });
});

describe("albumCardHref · negative control", () => {
  it("the shipped card link (main e85e6efe, Discography.tsx:70-76) fails: it claimed the dialog and renamed itself", () => {
    const shipped = document.createElement("div");
    shipped.innerHTML =
      '<a class="albumCard" href="/music/albums/african-giant" aria-haspopup="dialog" aria-label="View the tracklist for African Giant"><span class="albumTitle">African Giant</span><span class="cardTracks">19 tracks</span></a>';
    expect(cardLinkViolations(shipped.querySelector("a")!)).toEqual([
      "/music/albums/african-giant: the card link claims a dialog",
      "/music/albums/african-giant: the card link's name is not its text",
    ]);
  });
});
