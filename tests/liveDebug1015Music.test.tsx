import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SongPage from "../app/music/[song]/page";
import AlbumPage from "../app/music/albums/[album]/page";
import songStyles from "../app/music/[song]/song.module.css";
import { decl, read, rules } from "./fixtures/cssRules";

/**
 * The live debug pass of 15 Oct 2026, music lane (/music/[song],
 * /music/albums/[album], /dai-dai, /music/listeners). Each block holds one
 * finding; each negative control is what the site shipped (origin/main
 * 51ad46b1), pasted verbatim.
 */

const SONG_CSS = "app/music/[song]/song.module.css";
const PHONE = "@media (max-width: 900px)";

const host = (html: string) => {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d;
};

// ── music-01 ────────────────────────────────────────────────────────────────

describe("music-01: the last onward button clears the fixed action bar on a phone", () => {
  /** A phone-block value of `prop` on `.cls` (the last rule naming it exactly). */
  const phone = (css: string, cls: string, prop: string) => {
    let v: string | undefined;
    for (const r of rules(css)) {
      if (r.media !== PHONE || !r.selector.split(",").map((s) => s.trim()).includes(`.${cls}`)) continue;
      v = decl(r.body, prop) ?? v;
    }
    return v;
  };
  const INSET = "env(safe-area-inset-bottom, 22px)";
  /** A length as px plus whether it adds the home indicator's inset. */
  const length = (v: string) => {
    const m = v.match(/^calc\(([\d.]+)px \+ (env\([^)]*\))\)$/);
    if (m) return { px: Number(m[1]), inset: m[2] === INSET };
    expect(v, "a plain length or calc(Npx + inset)").toMatch(/^[\d.]+px$/);
    return { px: parseFloat(v), inset: false };
  };
  /** The four sides of a padding shorthand. */
  const sides = (v: string) => {
    const p = v.match(/calc\([^)]*\)\)|[^\s]+/g)!;
    const [t, r = t, b = t, l = r] = p;
    return { t, r, b, l };
  };

  /** The fixed bar's height on a phone, from its own rules, with inset `i`. */
  function barHeight(css: string, i: number): number {
    const pad = sides(phone(css, "mobileActionBar", "padding")!);
    const top = length(pad.t);
    const bottom = length(pad.b);
    const border = parseFloat(phone(css, "mobileActionBar", "border-top")!);
    const row = Math.max(parseFloat(phone(css, "mobilePrimary", "min-height")!), parseFloat(phone(css, "mobileShare", "height")!));
    return border + top.px + row + bottom.px + (bottom.inset ? i : 0);
  }
  /** Room under the last onward button, with inset `i`: the phone's
   *  padding-bottom, else the bottom of its padding shorthand. */
  function onwardRoom(css: string, i: number): number {
    const b = length(phone(css, "onward", "padding-bottom") ?? sides(phone(css, "onward", "padding")!).b);
    return b.px + (b.inset ? i : 0);
  }

  it("the bar is 75px plus the inset", () => {
    expect(barHeight(read(SONG_CSS), 0)).toBe(75);
    expect(barHeight(read(SONG_CSS), 34)).toBe(109);
  });

  it.each([0, 34])("with a %ipx home indicator, at least 16px of air between the button and the bar", (i) => {
    const css = read(SONG_CSS);
    expect(onwardRoom(css, i) - barHeight(css, i)).toBeGreaterThanOrEqual(16);
  });

  it("negative control: the shipped fixed 76px — 1px clear with no inset, 33px under the bar on an iPhone", () => {
    // origin/main 51ad46b1, the phone block of song.module.css.
    const shipped = read(SONG_CSS).replace(
      /\.onward \{ padding: 28px 18px; padding-bottom: calc\(95px \+ env\(safe-area-inset-bottom, 22px\)\); \}/,
      ".onward { padding: 28px 18px 76px; }",
    );
    expect(shipped).toContain(".onward { padding: 28px 18px 76px; }");
    expect(onwardRoom(shipped, 0) - barHeight(shipped, 0)).toBe(1);
    expect(onwardRoom(shipped, 34) - barHeight(shipped, 34)).toBe(-33);
  });

  it.each([
    ["/music/last-last", () => SongPage({ params: Promise.resolve({ song: "last-last" }) })],
    ["/music/albums/love-damini", () => AlbumPage({ params: Promise.resolve({ album: "love-damini" }) })],
  ])("%s: the onward row is the page's last section, over the same fixed bar", async (_, page) => {
    const d = host(renderToStaticMarkup((await page()) as React.ReactElement));
    const onward = d.querySelector(`section.${songStyles.onward}`);
    expect(onward).not.toBeNull();
    expect(onward!.querySelectorAll(".btn").length).toBeGreaterThan(0);
    expect(d.querySelector(`.${songStyles.mobileActionBar}`)).not.toBeNull();
    const sections = [...d.querySelectorAll("section")];
    expect(sections.at(-1)).toBe(onward);
  });
});
