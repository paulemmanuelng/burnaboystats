import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import type { ReactNode } from "react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SongPage from "../../app/music/[song]/page";
import songStyles from "../../app/music/[song]/song.module.css";
import { songs, songSlugs } from "../../app/data/songs";

/**
 * V-music-10, the full-site debug of 5 Oct 2026: on a phone, /music/jerusalema's
 * "2020" card read "the global #JerusalemaDanceCh / allenge phenomenon". The
 * hashtag is one word to the browser, so the label's overflow-wrap: anywhere
 * backstop (song.module.css, added when the tag ran 19px past the card at 390)
 * split it at whichever letter met the card's edge. The label now carries a
 * <wbr> before each capital inside a hashtag, so the line ends between the
 * words the tag is made of; its text is unchanged.
 *
 * jsdom does no layout, so this reads where the label may break. Measured in
 * headless Chrome on the live page, dark and light, 7 Oct: as shipped, 320 read
 * "#JerusalemaDa / nceChallenge", 375 "…DanceC / hallenge", 390 "…DanceCh /
 * allenge", 414 "…DanceChall / enge". With the <wbr>s grafted in: 320
 * "#Jerusalema / Dance / Challenge", 360-390 "#JerusalemaDance / Challenge",
 * 414 "the global #Jerusalema / DanceChallenge", 1024 "the global
 * #JerusalemaDance / Challenge phenomenon"; 768, 900 and 1440 unchanged; no
 * overflow at any width.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");

/** The text between the label's break opportunities inside its hashtags. */
const hashtagPieces = (label: Element) => {
  const pieces: string[] = [""];
  for (const n of label.childNodes) {
    if (n.nodeName === "WBR") pieces.push("");
    else pieces[pieces.length - 1] += n.textContent ?? "";
  }
  return pieces.map((p) => p.match(/#\w+$/)?.[0] ?? p.match(/^\w+/)?.[0] ?? p);
};

const labelsOf = async (slug: string) => {
  const doc = parse(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: slug }) })));
  return [...doc.querySelectorAll(`.${songStyles.numLabel}`)];
};

describe("song stat cards: a hashtag in a label", () => {
  it("/music/jerusalema breaks #JerusalemaDanceChallenge only between its words", async () => {
    const label = (await labelsOf("jerusalema")).find((l) => l.textContent?.includes("#Jerusalema"));
    expect(label).toBeTruthy();
    expect(label!.textContent).toBe("the global #JerusalemaDanceChallenge phenomenon");
    expect(label!.innerHTML).toBe("the global #Jerusalema<wbr>Dance<wbr>Challenge phenomenon");
    expect(hashtagPieces(label!)).toEqual(["#Jerusalema", "Dance", "Challenge"]);
  });

  it("every song's labels keep their text, and only hashtags gain a break", async () => {
    for (const slug of songSlugs) {
      const labels = await labelsOf(slug);
      const song = songs.find((s) => s.slug === slug)!;
      const texts = labels.map((l) => l.textContent);
      for (const f of song.extraFacts) expect(texts, slug).toContain(f.l);
      for (const l of labels) {
        // one break before each capital that follows a letter inside a hashtag
        const joins = (l.textContent!.match(/#\w+/g) ?? []).join(" ").match(/(?<=[a-z0-9])[A-Z]/g)?.length ?? 0;
        expect(l.querySelectorAll("wbr").length, `${slug}: ${l.textContent}`).toBe(joins);
      }
    }
  });

  it("the label as the site shipped it has no break inside the hashtag", () => {
    // app/music/[song]/page.tsx on origin/main: <span className={styles.numLabel}>{f.l}</span>
    const shipped = parse(
      renderToStaticMarkup(<span className={songStyles.numLabel}>{"the global #JerusalemaDanceChallenge phenomenon"}</span>)
    ).querySelector("span")!;
    expect(shipped.querySelectorAll("wbr")).toHaveLength(0);
    expect(hashtagPieces(shipped)).not.toEqual(["#Jerusalema", "Dance", "Challenge"]);
  });
});
