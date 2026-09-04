import { render } from "@testing-library/react";
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
import { songSlugs } from "../app/data/songs";
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
  "analysis/spotify-unmerge/page.tsx",
  "dai-dai/es/page.tsx",
  "dai-dai/page.tsx",
  "faq/page.tsx",
  "music/[song]/page.tsx",
];

/**
 * Still desktop-only. QUEUED, not accepted: each of these has the same bug the
 * song pages had, and each needs its own pass because each has a different
 * mobile screen to fit the questions into — /records/awards and
 * /records/africas-biggest hand their content to a bespoke mobile component,
 * and the album and board artist pages are CSS-driven single DOMs like the song
 * page was.
 *
 * /dai-dai and its Spanish twin have moved to CHECKED. They shared one
 * stylesheet and one .desktopOnly wrapper, so they moved together.
 *
 * Listing them here rather than deleting the check keeps the remaining work
 * visible and stops a tenth route joining them unnoticed.
 */
const QUEUED = [
  "afrobeats/[artist]/page.tsx",
  "music/albums/[album]/page.tsx",
  "records/africas-biggest/page.tsx",
  "records/awards/page.tsx",
];

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

const hiddenAncestor = (el: Element): string | null => {
  for (let n: Element | null = el; n; n = n.parentElement) {
    for (const c of n.classList) if (PHONE_HIDDEN.has(c)) return c;
  }
  return null;
};

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
  it.each(songSlugs)("/music/%s shows its answers at 390px", async (slug) => {
    const el = await SongPage({ params: Promise.resolve({ song: slug }) });
    const { container } = render(el);
    expectAnswersVisibleOnAPhone(container, `/music/${slug}`);
  });

  it("/faq shows its answers at 390px", async () => {
    // Already correct, and pinned: the desktop column is inside .desktopOnly,
    // so the whole page rests on MobileFaq rendering the same questions.
    const { container } = render(await FaqPage());
    expectAnswersVisibleOnAPhone(container, "/faq");
  });

  it("/analysis/spotify-unmerge shows its answers at 390px", async () => {
    // Already correct: one CSS-driven layout, no .desktopOnly around the FAQ.
    const { container } = render(await UnmergePage());
    expectAnswersVisibleOnAPhone(container, "/analysis/spotify-unmerge");
  });

  // The site's most-trafficked page, and the one where the withheld answers
  // were live searches: "When was the 2026 World Cup Final halftime show?" and
  // "Who are the Ghetto Kids who performed with Shakira and Burna Boy?". Its
  // mobile-visible lineup note NAMES the Ghetto Kids without answering who they
  // are, so the phone reader who searched that question got the page and not
  // the answer.
  it("/dai-dai shows its answers at 390px", () => {
    const { container } = render(<DaiDaiPage />);
    expectAnswersVisibleOnAPhone(container, "/dai-dai");
  });

  // Asserted separately rather than folded into the English case. These two
  // editions are hand-written translations that have drifted before — the
  // Spanish page once shipped with three of the six halftime acts missing while
  // its markup matched — so "the English one renders" proves nothing about it.
  it("/dai-dai/es shows its answers at 390px", () => {
    const { container } = render(<DaiDaiPageES />);
    expectAnswersVisibleOnAPhone(container, "/dai-dai/es");
  });
});
