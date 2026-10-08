import { describe, it, expect, vi, afterEach } from "vitest";
import { render, cleanup, act } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { ReactNode } from "react";

vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import TracklistDialog from "../../app/components/TracklistDialog";
import { albums, eps, compilations } from "../../app/data/albums";
import { songs } from "../../app/data/songs";
import { trackPageLinks } from "../../app/lib/releasePages";
import styles from "../../app/music/music.module.css";

/**
 * MU-27 (design review, 8 Oct 2026): the /music tracklist dialog, the one both
 * layouts open, listed every track as plain text. The L.I.F.E dialog printed
 * "11 Like to Party" though /music/like-to-party exists, while the album pages
 * link theirs ("7 Last Last · SONG PAGE →"). A track with a song page is now a
 * link, the whole row, at least 44px tall, with the album page's "song page →".
 *
 * The expected page is worked out here from data/songs.ts on its own, not
 * from trackPageLinks, so a broken matcher cannot agree with itself.
 */

const releases = [
  ...albums.map((a) => ({ ...a, kind: "Album" })),
  ...eps.map((a) => ({ ...a, kind: "EP" })),
  ...compilations.map((a) => ({ ...a, kind: "Compilation" })),
];
const pageOf = (track: string) => {
  const bare = track.split(" (feat.")[0].trim().toLowerCase();
  const s = songs.find((x) => x.title.toLowerCase() === bare);
  return s ? `/music/${s.slug}` : undefined;
};

afterEach(cleanup);

function open(title: string, withLinks = true) {
  const view = render(<TracklistDialog releases={releases} songLinks={withLinks ? trackPageLinks() : undefined} />);
  act(() => {
    window.dispatchEvent(new CustomEvent("open-tracklist", { detail: title }));
  });
  const dialog = view.container.querySelector('[role="dialog"]');
  if (!dialog) throw new Error(`no dialog for ${title}`);
  return dialog;
}

/** Each track row that is wrong, in words: a song page not linked, or a link where there is none. */
function rowProblems(list: Element): string[] {
  const out: string[] = [];
  for (const row of list.children) {
    const name = row.querySelector(`.${styles.trackName}, .trackName`)?.textContent ?? "";
    const want = pageOf(name);
    const href = row.tagName === "A" ? row.getAttribute("href") : null;
    if (want && href !== want) out.push(`${name}: not linked to ${want}`);
    if (!want && href) out.push(`${name}: links to ${href} with no song page`);
    if (want && href && !row.textContent!.includes("song page →")) out.push(`${name}: no "song page →"`);
  }
  return out;
}

describe("MU-27: the /music tracklist dialog links tracks to their song pages", () => {
  const withSongs = releases.filter((r) => r.tracks.some((t) => pageOf(t)));

  it("the premise: L.I.F.E carries Like to Party, which has a page, and most song pages sit on a tracklist", () => {
    expect(pageOf("Like to Party")).toBe("/music/like-to-party");
    expect(releases.find((r) => r.title === "L.I.F.E")!.tracks).toContain("Like to Party");
    expect(withSongs.length).toBeGreaterThanOrEqual(5);
  });

  it.each(releases.map((r) => [r.title]))("%s: every track with a song page is a link, and only those", (title) => {
    const list = open(title).querySelector(`.${styles.trackList}`)!;
    expect(rowProblems(list)).toEqual([]);
  });

  it("the linked row is the whole row, in the row's own class", () => {
    const row = open("L.I.F.E").querySelector('a[href="/music/like-to-party"]')!;
    expect(row.classList.contains(styles.track)).toBe(true);
    expect(row.classList.contains(styles.trackLink)).toBe(true);
    expect(row.querySelector(`.${styles.trackNum}`)?.textContent).toBe("11");
  });

  it("the link row is at least 44px tall (the accessibility statement's tap floor)", () => {
    const css = readFileSync(resolve(__dirname, "../../app/music/music.module.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    const body = css.match(/(?:^|\})\s*\.trackLink\s*\{([^}]*)\}/)?.[1] ?? "";
    expect(body).toMatch(/min-height:\s*44px/);
  });

  it("the client components that read these maps never import the datasets behind them", () => {
    // releasePages.ts imports songs and albumPages, so a client component that
    // imports it ships both (tests/tourRevenueServerOnly.test.ts: albumPages
    // drags tours.ts into the browser). The lookups live in releaseLinkKeys.ts.
    // CertExplorer read releasePathFor from releasePages.ts on origin/main, so
    // /certifications shipped albumPages and tours.ts for a one-line lookup.
    for (const f of ["app/components/TracklistDialog.tsx", "app/components/ChartExplorer.tsx", "app/components/CertExplorer.tsx"]) {
      const src = readFileSync(resolve(__dirname, "../..", f), "utf8");
      expect(src, f).not.toMatch(/from "\.\.\/lib\/releasePages"/);
      expect(src, f).not.toMatch(/from "\.\.\/data\/songs"/);
    }
    const keys = readFileSync(resolve(__dirname, "../../app/lib/releaseLinkKeys.ts"), "utf8");
    expect(keys.match(/^import .* from "([^"]+)";$/gm)).toEqual(['import { titleKey } from "./titleKey";']);
  });

  // The dialog renders only when opened, so there is no served HTML to quote;
  // this is the row as origin/main's TracklistDialog rendered it for L.I.F.E.
  it("negative control: the shipped row, plain text, is caught", () => {
    const shipped = new DOMParser().parseFromString(
      `<div class="trackList"><div class="track"><span class="trackNum">11</span><span class="trackName">Like to Party</span></div></div>`,
      "text/html",
    ).querySelector(".trackList")!;
    expect(rowProblems(shipped)).toEqual(["Like to Party: not linked to /music/like-to-party"]);
  });
});
