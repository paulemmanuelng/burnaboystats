import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SongPage from "../../app/music/[song]/page";
import AlbumPage, { generateStaticParams as generateAlbumParams } from "../../app/music/albums/[album]/page";
import { songSlugs } from "../../app/data/songs";
import songStyles from "../../app/music/[song]/song.module.css";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * Owner call left by Copy 2 of the 8 Oct quick wins, answered "defaults" by
 * Paul on 10 Oct 2026: a song page's certifications head read "Certifications
 * · 4 certifications" once "awards" became "certifications", and at 320 the
 * meta no longer fitted beside the heading — the head wrapped from 25 to
 * 73px (measured in headless Chrome on a dev server, 10 Oct 2026). Phones
 * print the short form "4 certs"; desktop keeps "4 certifications".
 *
 * jsdom applies no media queries, so the page is read for both spans and the
 * stylesheet for which one each layout shows.
 */

const CSS = read("app/music/[song]/song.module.css");
const PHONE = "@media (max-width: 900px)";
const body = (sel: string, media: string | null) =>
  rules(CSS)
    .filter((r) => r.media === media && r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");

/** The meta as each layout shows it: the spans the other layout hides dropped. */
function metaAs(meta: Element, layout: "desktop" | "phone"): string {
  const el = meta.cloneNode(true) as Element;
  const hidden = layout === "phone" ? songStyles.desktopOnlyInline : songStyles.phoneOnlyInline;
  el.querySelectorAll(`.${hidden}`).forEach((x) => x.remove());
  return (el.textContent ?? "").replace(/\s+/g, " ").trim();
}

async function certsMeta(slug: string) {
  const d = new DOMParser().parseFromString(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: slug }) })), "text/html");
  const h2 = d.getElementById("song-certs");
  if (!h2) return null;
  const head = h2.parentElement!;
  const n = head.parentElement!.querySelectorAll(`.${songStyles.cert}`).length;
  return { meta: head.querySelector(`.${songStyles.sectionMeta}`)!, n };
}

describe("song pages: the certifications meta says 'certs' on phones only", () => {
  it("every song with certifications prints both forms, counted from its own pills", async () => {
    let pages = 0;
    for (const slug of songSlugs) {
      const c = await certsMeta(slug);
      if (!c) continue;
      pages++;
      expect(c.n, slug).toBeGreaterThan(0);
      expect(metaAs(c.meta, "desktop"), slug).toBe(`${c.n} ${c.n === 1 ? "certification" : "certifications"}`);
      expect(metaAs(c.meta, "phone"), slug).toBe(`${c.n} ${c.n === 1 ? "cert" : "certs"}`);
    }
    // Both the plural and the singular are on the site today.
    expect(pages).toBeGreaterThanOrEqual(2);
  });

  it("the stylesheet: the short form is hidden by default, and the phone block swaps them at the page's one breakpoint", () => {
    expect(decl(body(".phoneOnlyInline", null), "display")).toBe("none");
    expect(body(".desktopOnlyInline", null)).toBe("");
    // The same @media as .desktopOnly, so the two never disagree at a width.
    expect(decl(body(".desktopOnly", PHONE), "display")).toBe("none");
    expect(decl(body(".desktopOnlyInline", PHONE), "display")).toBe("none");
    expect(decl(body(".phoneOnlyInline", PHONE), "display")).toBe("inline");
    expect(rules(CSS).filter((r) => /OnlyInline/.test(r.selector)).map((r) => r.media)).toEqual([null, PHONE, PHONE]);
  });

  it("the chart meta is untouched: one form, the same on both layouts", async () => {
    const d = new DOMParser().parseFromString(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: "wgft" }) })), "text/html");
    const meta = d.getElementById("song-charts")!.parentElement!.querySelector(`.${songStyles.sectionMeta}`)!;
    expect(meta.querySelector(`.${songStyles.phoneOnlyInline}`)).toBeNull();
    expect(metaAs(meta, "phone")).toBe(metaAs(meta, "desktop"));
  });

  it("negative control: the meta main printed on /music/wgft fails the phone check", () => {
    // app/music/[song]/page.tsx on main ca597020, rendered for wgft: one span,
    // the same words at every width.
    const shipped = new DOMParser().parseFromString(`<span class="${songStyles.sectionMeta}">4 certifications</span>`, "text/html").body.firstElementChild!;
    expect(metaAs(shipped, "desktop")).toBe("4 certifications");
    expect(metaAs(shipped, "phone")).not.toBe("4 certs");
  });
});

/** Album pages share song.module.css and its section head, and were left on the
 *  full word by the 10 Oct defaults; Paul's "fix other 3 things" (10 Oct 2026)
 *  gave them the same short form. */
describe("album pages: the certifications meta says 'certs' on phones too", () => {
  it("every album with certifications prints both forms, counted from its own pills", async () => {
    let pages = 0;
    for (const { album } of generateAlbumParams()) {
      const d = new DOMParser().parseFromString(renderToStaticMarkup(await AlbumPage({ params: Promise.resolve({ album }) })), "text/html");
      const h2 = d.getElementById("album-certs");
      if (!h2) continue;
      pages++;
      const head = h2.parentElement!;
      const n = head.parentElement!.querySelectorAll(`.${songStyles.cert}`).length;
      const meta = head.querySelector(`.${songStyles.sectionMeta}`)!;
      expect(n, album).toBeGreaterThan(0);
      expect(metaAs(meta, "desktop"), album).toBe(`${n} ${n === 1 ? "certification" : "certifications"}`);
      expect(metaAs(meta, "phone"), album).toBe(`${n} ${n === 1 ? "cert" : "certs"}`);
    }
    expect(pages).toBeGreaterThanOrEqual(2);
  });

  it("negative control: the meta main printed on an album page fails the phone check", () => {
    // app/music/albums/[album]/page.tsx on main 1a6d916f: one span, the full
    // word at every width.
    const shipped = new DOMParser().parseFromString(`<span class="${songStyles.sectionMeta}">12 certifications</span>`, "text/html").body.firstElementChild!;
    expect(metaAs(shipped, "phone")).not.toBe("12 certs");
  });
});
