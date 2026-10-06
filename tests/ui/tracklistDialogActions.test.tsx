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
import { albumPageByTitle } from "../../app/data/albumPages";
import styles from "../../app/music/music.module.css";

/**
 * V-music-03, the full-site debug of 5 Oct 2026.
 *
 * The /music tracklist dialog (one dialog, opened from both layouts) gave its
 * two actions the same class, .spotifyBtn (#1db954): "Play on Spotify ↗" and
 * "Full album page →", the link to the site's own album page, so the internal
 * link read as a second Spotify action — the stylesheet's own comment says
 * Spotify green is the platform's mark, not a site accent. The two were bare
 * siblings with no gap: at 1440 they sat edge to edge (L.I.F.E: x=435–642 and
 * 642–859), at 390 they wrapped onto two green rows. Measured live in
 * headless Chrome, dark and light.
 *
 * jsdom does no layout, so the gap is read from the stylesheet: both actions
 * sit in one row whose rule is a wrapping flex row with a gap. The fix was
 * also grafted onto the live dialog (1440 and 390, dark and light): Spotify
 * green on the Spotify link only, the album link the site's secondary pill
 * (rgb(36,36,42) on dark, white on light, with its edge), a 10px gap beside
 * it at 1440 and above it at 390, both 44px tall.
 */

const releases = [
  ...albums.map((a) => ({ ...a, kind: "Album" })),
  ...eps.map((a) => ({ ...a, kind: "EP" })),
  ...compilations.map((a) => ({ ...a, kind: "Compilation" })),
];

const css = readFileSync(resolve(__dirname, "../../app/music/music.module.css"), "utf8").replace(
  /\/\*[\s\S]*?\*\//g,
  ""
);

/** Declarations of the top-level rules whose selector list includes exactly `selector`. */
function rule(selector: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (!m[1].split(",").some((s) => s.trim() === selector)) continue;
    for (const d of m[2].split(";")) {
      const i = d.indexOf(":");
      if (i > 0) out[d.slice(0, i).trim()] = d.slice(i + 1).trim();
    }
  }
  return out;
}

const classes = (el: Element) => (el.getAttribute("class") ?? "").split(/\s+/).filter(Boolean);

/** What is wrong with a dialog's actions, in words; [] when nothing is. */
function problems(dialog: ParentNode): string[] {
  const out: string[] = [];
  const links = Array.from(dialog.querySelectorAll("a"));
  const spotify = links.filter((a) => (a.getAttribute("href") ?? "").startsWith("https://open.spotify.com/"));
  const own = links.filter((a) => (a.getAttribute("href") ?? "").startsWith("/music/albums/"));
  for (const a of own) {
    if (classes(a).includes(styles.spotifyBtn)) out.push(`"${a.textContent}" wears Spotify green`);
    if (!classes(a).includes("btnSecondary")) out.push(`"${a.textContent}" is not the site's secondary pill`);
  }
  for (const a of spotify) {
    if (!classes(a).includes(styles.spotifyBtn)) out.push(`"${a.textContent}" lost Spotify green`);
  }
  const actions = [...spotify, ...own];
  const rows = new Set(actions.map((a) => a.parentElement));
  if (actions.length > 1 && rows.size !== 1) out.push("the actions are not in one row");
  for (const row of rows) {
    if (!row || !classes(row).includes(styles.dialogActions)) out.push("the actions sit outside the gapped row");
  }
  return out;
}

afterEach(cleanup);

function open(title: string) {
  const view = render(<TracklistDialog releases={releases} />);
  act(() => {
    window.dispatchEvent(new CustomEvent("open-tracklist", { detail: title }));
  });
  const dialog = view.container.querySelector('[role="dialog"]');
  if (!dialog) throw new Error(`no dialog for ${title}`);
  return dialog;
}

describe("tracklist dialog actions (V-music-03)", () => {
  const withPage = releases.filter((r) => albumPageByTitle(r.title));

  it("covers the eight studio albums with their own page", () => {
    expect(withPage.length).toBe(8);
  });

  it.each(withPage.map((r) => [r.title]))("%s: Spotify green on the Spotify link only, the album page a site pill, one gapped row", (title) => {
    const dialog = open(title);
    const own = dialog.querySelector('a[href^="/music/albums/"]');
    expect(own?.textContent).toBe("Full album page →");
    expect(problems(dialog)).toEqual([]);
  });

  it("a release with no album page still has its Spotify link in the row", () => {
    const ep = releases.find((r) => r.kind === "EP" && r.spotify && !albumPageByTitle(r.title));
    expect(ep).toBeDefined();
    const dialog = open(ep!.title);
    expect(dialog.querySelector('a[href^="/music/albums/"]')).toBeNull();
    expect(dialog.querySelectorAll('a[href^="https://open.spotify.com/"]').length).toBe(1);
    expect(problems(dialog)).toEqual([]);
  });

  it("the row is a wrapping flex row with a gap, and only .spotifyBtn paints #1db954", () => {
    const row = rule(".dialogActions");
    expect(row.display).toBe("flex");
    expect(row["flex-wrap"]).toBe("wrap");
    expect(Number.parseFloat(row.gap)).toBeGreaterThan(0);
    for (const m of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      if (/#1db954/i.test(m[2])) expect(m[1].trim()).toMatch(/^\.spotifyBtn\b/);
    }
  });

  it("negative control: the shipped markup fails", () => {
    // TracklistDialog as shipped (423f0ddb, #110): two bare siblings, both .spotifyBtn.
    const host = document.createElement("div");
    host.innerHTML =
      `<div class="${styles.dialogBody}">` +
      `<a class="btn ${styles.spotifyBtn}" href="https://open.spotify.com/album/7pqUKMWH6P7AJPIjUiphTS" target="_blank" rel="noopener noreferrer">Play on Spotify ↗</a>` +
      `<a class="btn ${styles.spotifyBtn}" href="/music/albums/life">Full album page →</a>` +
      `<div class="${styles.trackList}"></div></div>`;
    expect(problems(host)).toEqual([
      '"Full album page →" wears Spotify green',
      `"Full album page →" is not the site's secondary pill`,
      "the actions sit outside the gapped row",
    ]);
  });
});
