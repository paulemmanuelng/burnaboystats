import { fireEvent, render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

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

import SongPage from "../app/music/[song]/page";
import FaqPage from "../app/faq/page";
import UnmergePage from "../app/analysis/spotify-unmerge/page";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import AlbumPage from "../app/music/albums/[album]/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import AwardsPage from "../app/records/awards/page";
import AfricasBiggestPage from "../app/records/africas-biggest/page";
import { songSlugs } from "../app/data/songs";
import { albumPageSlugs } from "../app/data/albumPages";
import { afrobeatsArtists } from "../app/data/afrobeats";
import songStyles from "../app/music/[song]/song.module.css";
import mobileFaqStyles from "../app/components/mobileFaq.module.css";

/**
 * FAQPage schema promises answers the reader can actually see.
 *
 * Every page on this site renders both layouts into one document and lets CSS
 * pick: the desktop half inside a `.desktopOnly` wrapper that is `display:none`
 * below 900px, the mobile screen beside it. The FAQ sections were written into
 * the desktop half — and the FAQPage JSON-LD was emitted unconditionally beside
 * them. On /music/[song] that meant 32 questions across 14 pages ("Is 'Last
 * Last' certified?", "How high did it chart?") were answered for a laptop and
 * withheld from a phone, which is where those queries arrive from. Googlebot
 * renders at phone width too, so the schema was describing content the crawler
 * could not see; markup that does not match the page is a spam signal, not a
 * ranking one.
 *
 * Nothing catches this. The markup is valid, the schema validates, the answers
 * are in the HTML, and on a laptop it all works. So the rule is stated here: if
 * a route emits FAQPage, at least one copy of each answer must sit outside
 * every wrapper the stylesheets hide at phone width.
 *
 * The check is done against a real render and the real stylesheets rather than
 * by reading the source, because the hiding is two files away from the markup —
 * a class name in the JSX, a `display:none` in a media query — and a source
 * grep for "desktopOnly" would miss any other wrapper that hides the same way.
 *
 * ── The phone accordion, and why this file grew a second half ──────────────
 *
 * /music/[song], /dai-dai and /dai-dai/es now FOLD their questions on a phone
 * (FaqList). That is allowed — Google indexes accordion content — but it is one
 * refactor away from being #170 again, so both states are asserted, and the
 * distinction between them is the whole point:
 *
 *   1. As rendered. This is the server HTML, the no-JS reader and the first
 *      paint, and it must be the FLAT, OPEN list: every answer painted. jsdom
 *      reports no media query as matching, which is the same branch, but the
 *      stub below states it rather than relying on that.
 *   2. At 390px, after mount, with the accordion actually collapsed. Every
 *      answer must still be in the DOM and one activation of a real button
 *      away — the test presses them and re-runs the same assertion.
 *
 * Both halves share one walk, which now also treats the `hidden` ATTRIBUTE as
 * hiding. Without that addition the second half would pass on a page that
 * shipped no answers at all: `hidden` is how FaqList collapses a panel, and a
 * guard that only knows about class names would call a collapsed answer
 * "painted" and wave the whole thing through.
 */

const APP = resolve(__dirname, "..", "app");

const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((e) => {
    const p = join(dir, e);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const ALL = walk(APP);

/* ── Which routes make the promise ──────────────────────────────────────── */

/** Page files that emit FAQPage JSON-LD, literally or via boardFaqs.faqJsonLd. */
const emitters = ALL.filter((f) => f.endsWith("page.tsx"))
  .filter((f) => {
    const src = readFileSync(f, "utf8");
    return /"@type":\s*"FAQPage"/.test(src) || /\bfaqJsonLd\s*\(/.test(src);
  })
  .map((f) => relative(APP, f).replace(/\\/g, "/"))
  .sort();

/** Renders its answers at phone width. Asserted below, one route at a time. */
const CHECKED = [
  "afrobeats/[artist]/page.tsx",
  "analysis/spotify-unmerge/page.tsx",
  "dai-dai/es/page.tsx",
  "dai-dai/page.tsx",
  "faq/page.tsx",
  "music/[song]/page.tsx",
  "music/albums/[album]/page.tsx",
  "records/africas-biggest/page.tsx",
  "records/awards/page.tsx",
];

/**
 * Empty, and worth keeping empty.
 *
 * This list held the four routes that still hid their answers on a phone, and
 * they took three different fixes:
 *
 *   - /music/albums/[album] is a CSS-driven single DOM sharing the song page's
 *     stylesheet, so it was the song-page fix again — drop .desktopOnly, wrap
 *     the questions in FaqList;
 *   - /afrobeats/[artist], /records/awards and /records/africas-biggest hand
 *     their whole phone layout to a bespoke mobile screen, and their FAQ sat
 *     inside a wrapper holding the ENTIRE desktop page. Un-hiding that would
 *     have painted the desktop tree on a phone, so those three pass their FAQ
 *     into the mobile component instead and render it there.
 *
 * The list stays because the assertion below is `emitters === CHECKED ∪
 * QUEUED`: a tenth route that emits FAQPage has to be classified by somebody
 * rather than inheriting an exemption, and an empty QUEUED makes the only
 * honest place to put it CHECKED.
 */
const QUEUED: string[] = [];

/* ── Which class names disappear at phone width ─────────────────────────── */

/** Where every mobile screen on this site takes over from the desktop layout. */
const MOBILE_BREAKPOINT = 900;

/**
 * Splits one stylesheet's `display` rules into hidden / shown / hidden-at-base.
 *
 * A rule inside a `max-width: <=900px` query is what hides a class, and any
 * other `display` inside such a query un-hides it — that is exactly how the
 * mobile-only screens declare themselves (`.screen`, `.mobileBackBar`:
 * `display:none` at base, a real display below 900px). Reading the base
 * declaration alone would call every one of those hidden, and the check would
 * then fail every page whose answers only a phone can see.
 *
 * Only bare single-class selectors are collected. `.heroActions :global(.btn)`
 * hides the button, not `.heroActions`, and treating an ancestor as hidden
 * because of a rule about its child is how a guard starts lying.
 */
function displayRules(source: string) {
  // Comments first. The rules that matter here are the ones somebody explained
  // themselves before writing, so the selector capture below picks up the whole
  // comment along with the selector and then matches nothing — which is how the
  // first draft of this file quietly cleared `.desktopOnly` in song.module.css
  // while flagging the identical rule in stylesheets that had no comment.
  const css = source.replace(/\/\*[\s\S]*?\*\//g, " ");
  const hidden = new Set<string>();
  const shown = new Set<string>();
  const baseHidden = new Set<string>();

  /** `@media (...) { ... }` blocks, matched by counting braces. */
  const media: { cond: string; body: string }[] = [];
  let base = "";
  for (let i = 0; i < css.length; ) {
    const at = css.indexOf("@media", i);
    if (at === -1) {
      base += css.slice(i);
      break;
    }
    base += css.slice(i, at);
    const open = css.indexOf("{", at);
    let depth = 0;
    let j = open;
    for (; j < css.length; j++) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}" && --depth === 0) break;
    }
    media.push({ cond: css.slice(at, open), body: css.slice(open + 1, j) });
    i = j + 1;
  }

  const eachRule = (chunk: string, fn: (cls: string, display: string) => void) => {
    for (const m of chunk.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const display = m[2].match(/(?:^|;)\s*display\s*:\s*([^;!]+)/)?.[1]?.trim();
      if (!display) continue;
      for (const sel of m[1].split(",")) {
        const cls = sel.trim().match(/^\.([A-Za-z][\w-]*)$/)?.[1];
        if (cls) fn(cls, display);
      }
    }
  };

  eachRule(base, (cls, d) => {
    if (d === "none") baseHidden.add(cls);
  });
  for (const { cond, body } of media) {
    const max = Number(cond.match(/max-width:\s*(\d+)px/)?.[1]);
    if (!max || max > MOBILE_BREAKPOINT) continue;
    eachRule(body, (cls, d) => (d === "none" ? hidden : shown).add(cls));
  }
  return { hidden, shown, baseHidden };
}

/**
 * Keyed by the SCOPED name (`_desktopOnly_6abc8b`), not the local one.
 *
 * Local names collide across the 91 modules and the collisions are not
 * synonyms: `.wrap` is a hidden desktop column in one stylesheet and the plain
 * page container in /analysis/spotify-unmerge's. A local-name union failed that
 * page for a rule belonging to a stylesheet it does not import. The scoped
 * names each module exports are the module's own, so the glob below pairs every
 * rule with the file it was written in.
 */
const PHONE_HIDDEN = (() => {
  const modules = import.meta.glob("../app/**/*.module.css", { eager: true }) as Record<
    string,
    { default: Record<string, string> }
  >;
  const scoped = new Set<string>();
  for (const [key, mod] of Object.entries(modules)) {
    const r = displayRules(readFileSync(resolve(__dirname, key), "utf8"));
    for (const cls of [...r.hidden, ...r.baseHidden]) {
      if (!r.shown.has(cls) && mod.default[cls]) scoped.add(mod.default[cls]);
    }
  }
  return scoped;
})();

/**
 * Why an element is not painted at 390px, or null if it is.
 *
 * The `hidden` attribute is checked alongside the class names because it hides
 * exactly as hard — it is `display: none` from the UA stylesheet plus removal
 * from the accessibility tree — and it is how FaqList folds an answer away on a
 * phone. A walk that only knew about stylesheets would report every collapsed
 * answer as visible and this file would stop being able to fail.
 */
const hiddenAncestor = (el: Element): string | null => {
  for (let n: Element | null = el; n; n = n.parentElement) {
    if (n.hasAttribute("hidden")) return "[hidden]";
    for (const c of n.classList) if (PHONE_HIDDEN.has(c)) return c;
  }
  return null;
};

/**
 * Puts the render in a 390px screen's shoes.
 *
 * FaqList only becomes an accordion when `matchMedia("(max-width: 900px)")`
 * matches, and jsdom answers every query with `matches: false` — so without
 * this the phone half of the file would render the desktop markup and assert
 * nothing about the fold at all.
 */
function useViewportWidth(px: number) {
  beforeEach(() => {
    vi.stubGlobal(
      "matchMedia",
      (query: string): MediaQueryList =>
        ({
          matches: Number(query.match(/max-width:\s*(\d+)px/)?.[1] ?? 0) >= px,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        }) as unknown as MediaQueryList
    );
  });
  afterEach(() => vi.unstubAllGlobals());
}

/* ── The check ──────────────────────────────────────────────────────────── */

/**
 * Straightens the quotes a page may normalise on its way into the JSON-LD.
 *
 * The comparison below is full-string equality, and it has to stay that way — a
 * substring match would pass on a page that rendered the first clause of an
 * answer and dropped the rest. But /dai-dai and /dai-dai/es run their questions
 * through a local `straight()` before serialising, so the schema says
 * `"Dai Dai"` where the DOM says `“Dai Dai”`. Comparing raw, both editions fail
 * with "the answer is in the schema but nowhere in the DOM" — a true statement
 * about the bytes and a false one about the reader.
 *
 * So normalise BOTH sides identically and keep the equality. This forgives the
 * quote style and nothing else: a missing sentence, a truncated answer or a
 * different figure all still fail.
 */
const normalise = (s: string) => s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");

/**
 * The page as the server serialises it: no effects, no hydration, no widths.
 *
 * This is what Googlebot fetches, what a reader sees before the JavaScript
 * lands, and all a reader whose JavaScript fails will ever get — so it is the
 * copy that has to carry every answer, and it is rendered here rather than
 * inferred from a client render. `render()` runs effects, and it is an effect
 * that folds the accordion; running one here would test the phone state while
 * claiming to describe the served bytes.
 */
function servedMarkup(el: React.ReactElement): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return host;
}

/** Every answer the page's own FAQPage node promises. */
function promisedAnswers(container: HTMLElement): string[] {
  const scripts = [...container.querySelectorAll('script[type="application/ld+json"]')];
  const nodes = scripts
    .map((s) => JSON.parse(s.textContent ?? "{}"))
    .filter((j) => j["@type"] === "FAQPage");
  expect(nodes.length, "no FAQPage node in the render — this file's premise is stale").toBe(1);
  return nodes[0].mainEntity.map((q: { acceptedAnswer: { text: string } }) => q.acceptedAnswer.text);
}

/** Asserts each promised answer is painted somewhere a 390px screen shows. */
function expectAnswersVisibleOnAPhone(container: HTMLElement, route: string) {
  const answers = promisedAnswers(container);
  expect(answers.length, `${route}: FAQPage with no questions`).toBeGreaterThan(0);

  const els = [...container.querySelectorAll("*")];
  for (const answer of answers) {
    const want = normalise(answer);
    const painted = els.filter((e) => normalise(e.textContent ?? "") === want);
    expect(painted.length, `${route}: answer is in the schema but nowhere in the DOM — "${answer}"`)
      .toBeGreaterThan(0);
    const visible = painted.filter((e) => hiddenAncestor(e) === null);
    // `_desktopOnly_6abc8b` → `desktopOnly`, so the message names something
    // greppable rather than a build hash.
    const wrapper = (hiddenAncestor(painted[0]) ?? "").replace(/^_(.*)_[^_]+$/, "$1");
    expect(
      visible.length,
      `${route}: every copy of this answer is inside .${wrapper}, which is display:none below ` +
        `${MOBILE_BREAKPOINT}px — the FAQPage schema promises a phone reader an answer the ` +
        `page does not show them: "${answer}"`
    ).toBeGreaterThan(0);
  }
}

/**
 * The same assertion, run against a phone that has already folded the answers.
 *
 * Returns how many were folded, so a caller can tell "the accordion rendered
 * and hid things" from "nothing collapsed and this was the flat list again" —
 * the difference between a check and a formality.
 *
 * A folded answer passes only if a REAL button, naming it in aria-controls and
 * reporting aria-expanded="false", opens it: an answer reachable only by a div
 * with an onClick fails here, and so does one that is simply gone. Then every
 * button is pressed and the flat-list assertion above has to hold.
 */
function expectAnswersReachableOnAPhone(container: HTMLElement, route: string): number {
  const answers = promisedAnswers(container);
  let folded = 0;

  for (const answer of answers) {
    const want = normalise(answer);
    const el = [...container.querySelectorAll("*")].find(
      (e) => normalise(e.textContent ?? "") === want
    );
    expect(el, `${route}: answer is in the schema but nowhere in the DOM — "${answer}"`).toBeTruthy();
    if (!el || hiddenAncestor(el) === null) continue;

    folded++;
    const control = el.id ? container.querySelector(`[aria-controls="${el.id}"]`) : null;
    expect(
      control?.tagName,
      `${route}: this answer is folded away with nothing that can open it — a phone reader, and ` +
        `Googlebot with it, is back where #170 left them: "${answer}"`
    ).toBe("BUTTON");
    expect(
      control?.getAttribute("aria-expanded"),
      `${route}: the control for a folded answer does not say it is collapsed`
    ).toBe("false");
    fireEvent.click(control as Element);
  }

  expectAnswersVisibleOnAPhone(container, route);
  return folded;
}

describe("every route emitting FAQPage answers a phone reader", () => {
  it("has every FAQPage route either checked here or named as queued", () => {
    // A tenth emitter must be classified rather than inheriting the exemption
    // by default — the failure mode this file exists for is silent by nature.
    expect(emitters).toEqual([...CHECKED, ...QUEUED].sort());
  });

  it("knows which class names vanish at phone width", () => {
    // The premise of every assertion below. If the stylesheet parse breaks,
    // PHONE_HIDDEN empties and the checks pass while checking nothing.
    expect(PHONE_HIDDEN, "the desktop-half wrapper").toContain(songStyles.desktopOnly);
    // Mobile-only screens declare display:none at BASE and a real display below
    // 900px. Reading the base rule alone would list them as hidden, and every
    // page whose answers only a phone can see would then fail.
    expect(PHONE_HIDDEN, "the mobile FAQ screen is shown, not hidden").not.toContain(
      mobileFaqStyles.screen
    );
    expect(PHONE_HIDDEN, "screen 26's action bar is shown, not hidden").not.toContain(
      songStyles.mobileActionBar
    );
  });

  // The route this file was written for. All 14, because the FAQ lives in the
  // shared template and one page proves nothing about the other thirteen.
  it.each(songSlugs)("/music/%s serves its answers, open", async (slug) => {
    const el = await SongPage({ params: Promise.resolve({ song: slug }) });
    expectAnswersVisibleOnAPhone(servedMarkup(el), `/music/${slug}`);
  });

  it("/faq serves its answers, open", async () => {
    // Already correct, and pinned: the desktop column is inside .desktopOnly,
    // so the whole page rests on MobileFaq rendering the same questions.
    expectAnswersVisibleOnAPhone(servedMarkup(await FaqPage()), "/faq");
  });

  it("/analysis/spotify-unmerge serves its answers, open", async () => {
    // Already correct: one CSS-driven layout, no .desktopOnly around the FAQ.
    expectAnswersVisibleOnAPhone(servedMarkup(await UnmergePage()), "/analysis/spotify-unmerge");
  });

  // The site's most-trafficked page, and the one where the withheld answers
  // were live searches: "When was the 2026 World Cup Final halftime show?" and
  // "Who are the Ghetto Kids who performed with Shakira and Burna Boy?". Its
  // mobile-visible lineup note NAMES the Ghetto Kids without answering who they
  // are, so the phone reader who searched that question got the page and not
  // the answer.
  it("/dai-dai serves its answers, open", () => {
    expectAnswersVisibleOnAPhone(servedMarkup(<DaiDaiPage />), "/dai-dai");
  });

  // Asserted separately rather than folded into the English case. These two
  // editions are hand-written translations that have drifted before — the
  // Spanish page once shipped with three of the six halftime acts missing while
  // its markup matched — so "the English one renders" proves nothing about it.
  it("/dai-dai/es serves its answers, open", () => {
    expectAnswersVisibleOnAPhone(servedMarkup(<DaiDaiPageES />), "/dai-dai/es");
  });

  // All eight, for the reason the song pages are all fourteen: the FAQ is in
  // the shared template and one album proves nothing about the other seven.
  it.each(albumPageSlugs)("/music/albums/%s serves its answers, open", async (slug) => {
    const el = await AlbumPage({ params: Promise.resolve({ album: slug }) });
    expectAnswersVisibleOnAPhone(servedMarkup(el), `/music/albums/${slug}`);
  });

  // All fifteen. These answers are COMPUTED per artist (lib/boardFaqs.ts), so
  // the fifteen pages do not even carry the same sentences — an artist whose
  // register is empty takes a different branch, and a rendering that works for
  // Wizkid says nothing about them.
  it.each(afrobeatsArtists.map((a) => a.slug))(
    "/afrobeats/%s serves its answers, open",
    async (slug) => {
      const el = await ArtistPage({ params: Promise.resolve({ artist: slug }) });
      expectAnswersVisibleOnAPhone(servedMarkup(el), `/afrobeats/${slug}`);
    }
  );

  // The two bespoke-screen pages. Their desktop copy is still .desktopOnly and
  // still correct there; what is asserted is that a SECOND copy exists outside
  // it — inside the mobile screen — because on these two the desktop wrapper
  // holds the whole page and could never be un-hidden.
  it("/records/awards serves its answers, open", () => {
    expectAnswersVisibleOnAPhone(servedMarkup(<AwardsPage />), "/records/awards");
  });

  it("/records/africas-biggest serves its answers, open", () => {
    expectAnswersVisibleOnAPhone(
      servedMarkup(<AfricasBiggestPage />),
      "/records/africas-biggest"
    );
  });
});

/**
 * The other half: a real 390px render, with the accordion actually folded.
 *
 * Everything above is about the bytes that leave the server. This is about the
 * page a person is holding a second later, and the two can now differ — which
 * is exactly why the second one needs its own assertions rather than an
 * assumption that the first implies it.
 */
describe("and the phone accordion folds those answers without losing them", () => {
  useViewportWidth(390);

  it.each(songSlugs)("/music/%s keeps every answer one tap away", async (slug) => {
    const el = await SongPage({ params: Promise.resolve({ song: slug }) });
    const { container } = render(el);
    const answers = promisedAnswers(container).length;
    // Exactly one stays open — the first. A section of nothing but headings
    // reads as an empty list, and the opening answer shows what tapping does.
    // Pinned so that changing the choice is a decision somebody makes here,
    // and so this test cannot quietly become the flat-list one again.
    expect(
      expectAnswersReachableOnAPhone(container, `/music/${slug}`),
      `/music/${slug}: expected all but the first answer to start folded`
    ).toBe(answers - 1);
  });

  it("/dai-dai keeps every answer one tap away", () => {
    const { container } = render(<DaiDaiPage />);
    const answers = promisedAnswers(container).length;
    expect(expectAnswersReachableOnAPhone(container, "/dai-dai")).toBe(answers - 1);
  });

  it("/dai-dai/es keeps every answer one tap away", () => {
    const { container } = render(<DaiDaiPageES />);
    const answers = promisedAnswers(container).length;
    expect(expectAnswersReachableOnAPhone(container, "/dai-dai/es")).toBe(answers - 1);
  });

  it.each(albumPageSlugs)("/music/albums/%s keeps every answer one tap away", async (slug) => {
    const el = await AlbumPage({ params: Promise.resolve({ album: slug }) });
    const { container } = render(el);
    const answers = promisedAnswers(container).length;
    expect(
      expectAnswersReachableOnAPhone(container, `/music/albums/${slug}`),
      `/music/albums/${slug}: expected all but the first answer to start folded`
    ).toBe(answers - 1);
  });

  /**
   * The three bespoke-screen routes, where the count is the assertion.
   *
   * Each of these renders its questions TWICE — once in the desktop half, once
   * in the mobile screen — and the walk finds the mobile copy first because it
   * comes first in the document. So `answers - 1` here says something the flat
   * check cannot: the copy a phone reader actually reaches is the folded one,
   * with its first answer open, and not the desktop copy leaking into view.
   */
  it.each(afrobeatsArtists.map((a) => a.slug))(
    "/afrobeats/%s keeps every answer one tap away",
    async (slug) => {
      const el = await ArtistPage({ params: Promise.resolve({ artist: slug }) });
      const { container } = render(el);
      const answers = promisedAnswers(container).length;
      expect(
        expectAnswersReachableOnAPhone(container, `/afrobeats/${slug}`),
        `/afrobeats/${slug}: expected all but the first answer to start folded`
      ).toBe(answers - 1);
    }
  );

  it("/records/awards keeps every answer one tap away", () => {
    const { container } = render(<AwardsPage />);
    const answers = promisedAnswers(container).length;
    expect(expectAnswersReachableOnAPhone(container, "/records/awards")).toBe(answers - 1);
  });

  it("/records/africas-biggest keeps every answer one tap away", () => {
    const { container } = render(<AfricasBiggestPage />);
    const answers = promisedAnswers(container).length;
    expect(expectAnswersReachableOnAPhone(container, "/records/africas-biggest")).toBe(
      answers - 1
    );
  });

  // The two routes that were already right and are NOT in the accordion's
  // scope. Nothing folds here, so "0 folded" is the assertion — it is what
  // catches FaqList being wired into a screen it was never designed for.
  it("/faq still shows every answer without a tap", async () => {
    const { container } = render(await FaqPage());
    expect(expectAnswersReachableOnAPhone(container, "/faq")).toBe(0);
  });

  it("/analysis/spotify-unmerge still shows every answer without a tap", async () => {
    const { container } = render(await UnmergePage());
    expect(expectAnswersReachableOnAPhone(container, "/analysis/spotify-unmerge")).toBe(0);
  });
});
