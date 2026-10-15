import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import LiveChartsPage from "../../app/live-charts/page";
import ArtistLivePage from "../../app/afrobeats/[artist]/live/page";
import MobileLiveCharts, { type ReleasePreview } from "../../app/components/MobileLiveCharts";
import { liveCharts } from "../../app/data/liveCharts";
import { afrobeatsArtists } from "../../app/data/afrobeats";
import { liveBoardFor } from "../../app/data/liveBoards";
import { byPlatform, chipCode, previewTop } from "../../app/lib/liveChartMeta";
import { flagFor } from "../../app/lib/flagFor";
import styles from "../../app/components/mobileLiveCharts.module.css";

/**
 * Job 3 · J3-5 (design review 8 Oct 2026; fix 74): a /live-charts phone row's
 * shut chips are grouped by platform inside the one chip run, each group
 * opening with its platform's mono label — "APPLE MUSIC 🇳🇬 NG #30 ▲2 ·
 * ITUNES …" — so a release on two Nigerian charts reads as two platforms, not
 * one chart twice; each chip names its territory by code. One component, so
 * the change lands on Burna Boy's live page and every board artist's.
 *
 * Bot-safe: app/data/liveCharts.ts is rewritten several times a day, so the
 * live data is held to properties only; the two-platform case is a frozen
 * fixture (critic, 14 Oct).
 */

type Release = { title: string; platforms: { platform: string; entries: { country: string; position: number; movement?: number | null; status?: "new" | "re" }[] }[] };
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");

/** A row's chip run, read in order: a platform label, or a chip's visible text. */
type Token = { label: string } | { chip: string };
function tokens(run: Element): Token[] {
  const out: Token[] = [];
  for (const el of run.children) {
    if (el.classList.contains(styles.more)) continue;
    if (el.classList.contains(styles.chipLead)) {
      out.push({ label: el.querySelector(`.${styles.chipLabel}`)!.textContent! });
      out.push({ chip: el.querySelector(`.${styles.chip}`)!.textContent! });
    } else out.push({ chip: el.textContent! });
  }
  return out;
}
/** What is wrong with a run against its release's five best placements, or []. */
function runProblems(run: Token[], top: ReturnType<typeof previewTop>): string[] {
  const out: string[] = [];
  const want = byPlatform(top);
  const labels = run.filter((t): t is { label: string } => "label" in t).map((t) => t.label);
  if (labels.join("|") !== want.map((g) => g.platform).join("|")) out.push(`labels ${labels.join(", ") || "(none)"}, want ${want.map((g) => g.platform).join(", ")}`);
  if (new Set(labels).size !== labels.length) out.push("a platform labelled twice");
  if (run.length && !("label" in run[0])) out.push("a chip before any label");
  // Each chip sits after its own platform's label, with its code.
  let i = 0;
  for (const g of want) {
    const at = run.findIndex((t) => "label" in t && t.label === g.platform);
    if (at < 0) continue;
    g.entries.forEach((e, k) => {
      const t = run[at + 1 + k];
      const head = `${flagFor(e.country)}${chipCode(e.country)}#${e.position}`;
      if (!t || !("chip" in t) || !t.chip.startsWith(head)) out.push(`${g.platform}: chip ${k} reads ${t && "chip" in t ? t.chip : "(nothing)"}, want ${head}…`);
      i++;
    });
  }
  if (i !== top.length) out.push(`${i} chips placed of ${top.length}`);
  return out;
}

/** The phone screen's rows on a served page, paired with the releases it was given (it maps them in order). */
function rowsOf(html: string, releases: readonly Release[]) {
  const doc = parse(html);
  const rows = [...doc.querySelectorAll(`.${styles.list} > .${styles.row}`)];
  expect(rows.length).toBe(releases.length);
  return rows.map((row, i) => ({ release: releases[i], run: tokens(row.querySelector(`.${styles.chips}`)!) }));
}

const boards = afrobeatsArtists.map((a) => [a.slug, liveBoardFor(a.slug)] as const).filter(([, b]) => b && b.releases.length > 0);

describe("J3-5: previewTop is the sort both builders used, with the platform kept", () => {
  // The two builders' inline sort, as it shipped on main f20b5347 (app/live-charts/page.tsx:72–76).
  const old = (r: Release) =>
    r.platforms
      .flatMap((p) => p.entries)
      .sort((a, b) => a.position - b.position)
      .slice(0, 5)
      .map((e) => ({ country: e.country, position: e.position, movement: e.movement, status: e.status }));

  it("the same five, in the same order, on /live-charts and every board", () => {
    const all: Release[] = [...liveCharts, ...boards.flatMap(([, b]) => b!.releases)];
    expect(all.length).toBeGreaterThan(0);
    for (const r of all) {
      const top = previewTop(r);
      expect(top.map(({ platform: _p, ...e }) => e), r.title).toEqual(old(r));
      for (const e of top)
        expect(r.platforms.find((p) => p.platform === e.platform)!.entries.some((x) => x.country === e.country && x.position === e.position)).toBe(true);
    }
  });
});

describe("J3-5 / fix 74: the shut rows, grouped by platform (properties of the live data)", () => {
  it("/live-charts: every row's labels once per platform, in first-appearance order, each chip after its own", () => {
    for (const { release, run } of rowsOf(renderToStaticMarkup(<LiveChartsPage />), liveCharts))
      expect(runProblems(run, previewTop(release)), release.title).toEqual([]);
  });

  it.each(boards.map(([slug]) => slug))("/afrobeats/%s/live: the same", async (slug) => {
    const board = liveBoardFor(slug)!;
    const html = renderToStaticMarkup(await ArtistLivePage({ params: Promise.resolve({ artist: slug }) }));
    for (const { release, run } of rowsOf(html, board.releases)) expect(runProblems(run, previewTop(release)), release.title).toEqual([]);
  });

  const twoInOne = [...liveCharts, ...boards.flatMap(([, b]) => b!.releases)].filter((r) => {
    const top = previewTop(r);
    return top.some((e) => top.some((f) => f.country === e.country && f.platform !== e.platform));
  });
  it.skipIf(twoInOne.length === 0)("a release on two platforms in one country shows two labels", () => {
    for (const r of twoInOne) expect(byPlatform(previewTop(r)).length, r.title).toBeGreaterThanOrEqual(2);
    const { run } = rowsOf(renderToStaticMarkup(<LiveChartsPage />), liveCharts).find((x) => twoInOne.includes(x.release)) ?? { run: null };
    if (run) expect(run.filter((t) => "label" in t).length).toBeGreaterThanOrEqual(2);
  });
});

describe("J3-5 / fix 74: the two-platform case, frozen", () => {
  // The review's case: African Giant (the album) on two Nigerian charts. A
  // fixture in the shape the server sends, read off liveCharts.ts on 14 Oct
  // 2026, so the hourly bot cannot move it.
  const AFRICAN_GIANT: ReleasePreview = {
    kind: "album",
    title: "African Giant",
    letter: "A",
    ep: false,
    total: 11,
    no1: 0,
    top: [
      { platform: "Spotify Albums", country: "NG", position: 28, movement: 3 },
      { platform: "Apple Music", country: "NG", position: 30, movement: 2 },
      { platform: "Apple Music", country: "NE", position: 33, movement: 0 },
      { platform: "Apple Music", country: "UG", position: 34, movement: -1 },
      { platform: "iTunes", country: "GB", position: 41, status: "new", movement: null },
    ],
  };
  const html = renderToStaticMarkup(
    <MobileLiveCharts releases={[AFRICAN_GIANT]} platforms={[]} placements={11} countries={5} numberOnes={0} updated="14 Oct 2026" />,
  );
  const run = tokens(parse(html).querySelector(`.${styles.chips}`)!);

  it("reads SPOTIFY ALBUMS 🇳🇬 NG #28 ▲3 · APPLE MUSIC 🇳🇬 NG #30 ▲2 🇳🇪 NE #33 – 🇺🇬 UG #34 ▼1 · ITUNES 🇬🇧 UK #41 NEW", () => {
    expect(run).toEqual([
      { label: "Spotify Albums" },
      { chip: "🇳🇬NG#28▲3" },
      { label: "Apple Music" },
      { chip: "🇳🇬NG#30▲2" },
      { chip: "🇳🇪NE#33–" },
      { chip: "🇺🇬UG#34▼1" },
      { label: "iTunes" },
      { chip: "🇬🇧UK#41NEW" },
    ]);
    expect(runProblems(run, AFRICAN_GIANT.top)).toEqual([]);
    // "+{n} more" stays last.
    const chips = parse(html).querySelector(`.${styles.chips}`)!;
    expect(chips.lastElementChild!.classList.contains(styles.more)).toBe(true);
    expect(chips.lastElementChild!.textContent).toBe("+6 more");
  });

  it("the label is a mono caps label, muted", async () => {
    const { read, winning } = await import("../fixtures/cssRules");
    const css = read("app/components/mobileLiveCharts.module.css");
    const top = (m: string | null) => m === null;
    expect(winning(css, ".chipLabel", "font-family", top)).toMatch(/--font-mono/);
    expect(winning(css, ".chipLabel", "text-transform", top)).toBe("uppercase");
    expect(winning(css, ".chipLabel", "color", top)).toBe("var(--text-muted)");
    expect(winning(css, ".chipLabel", "font-size", top)).toBe("var(--type-label)");
    // The label never ends a line alone: it rides with its group's first chip.
    expect(winning(css, ".chipLead", "display", top)).toBe("inline-flex");
  });

  it("negative control: main's shut chips put the two NG placements side by side, unlabelled and uncoded", () => {
    // MobileLiveCharts.tsx on main f20b5347, the chip's body:
    //   <span className={styles.chipFlag} aria-hidden="true">{flagFor(e.country)}</span>
    //   <span className={top ? styles.posTop : styles.pos}>#{e.position}</span>
    // rendered over the same five, in position order, with no label.
    const shipped: Token[] = AFRICAN_GIANT.top.map((e) => ({ chip: `${flagFor(e.country)}#${e.position}` }));
    const problems = runProblems(shipped, AFRICAN_GIANT.top);
    expect(problems.join("\n")).toMatch(/labels \(none\)/);
    expect(problems.join("\n")).toMatch(/a chip before any label/);
  });
});
