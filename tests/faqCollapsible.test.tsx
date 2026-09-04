import { act, render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import userEvent from "@testing-library/user-event";

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

import FaqList from "../app/components/FaqList";
import AlbumPage from "../app/music/albums/[album]/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import AwardsPage from "../app/records/awards/page";
import AfricasBiggestPage from "../app/records/africas-biggest/page";
import songStyles from "../app/music/[song]/song.module.css";
import faqSectionStyles from "../app/components/mobileFaqSection.module.css";

/**
 * FaqList — the phone fold on /music/[song], /dai-dai and /dai-dai/es.
 *
 * faqMobileVisibility.test.tsx asserts the CONSEQUENCE across the real pages:
 * every answer a FAQPage node promises is in the served HTML and reachable at
 * 390px. This file asserts the MECHANISM, because the consequence has two ways
 * of being satisfied and only one of them survives contact with a reader:
 *
 *   - the answers must be in the markup the server writes, open, before any
 *     width is known — that is the crawler's copy and it is all a reader with
 *     no JavaScript will ever get;
 *   - the collapse must be an effect, after mount, at phone width only, on a
 *     real button — never a render-time decision, which is how it would end up
 *     in the served HTML and put #170 back;
 *   - and the desktop render must be the markup these pages had before this
 *     component existed. Not similar to it. The same string.
 */

const ITEMS = [
  { q: "Is “Last Last” certified?", a: "Yes — Platinum in the US and Gold in the UK." },
  { q: "How high did it chart?", a: "No. 1 in South Africa and No. 4 in the UK." },
  { q: "What is it about?", a: "A breakup, igbo and shayo." },
];

const CLASSES = { list: "faqList", item: "faqItem", q: "faqQ", a: "faqA" };

const tree = <FaqList items={ITEMS} classes={CLASSES} />;

/* ── A viewport that can be resized ──────────────────────────────────────── */

/**
 * jsdom answers every media query with `matches: false`, so a test that does
 * not stub this renders the desktop branch while claiming to describe a phone.
 * The stub evaluates `max-width` honestly and, unlike a one-shot mock, keeps
 * its listeners — the component subscribes to the breakpoint rather than
 * reading it once, and that subscription is the reason a desktop reader can
 * narrow their window without the FAQ turning into an accordion behind them.
 */
function viewport(initial: number) {
  let width = initial;
  const listeners = new Set<() => void>();

  vi.stubGlobal("matchMedia", (query: string) => {
    const max = Number(query.match(/max-width:\s*(\d+)px/)?.[1] ?? 0);
    const list = {
      media: query,
      get matches() {
        return max >= width;
      },
      onchange: null,
      addEventListener: (_type: string, fn: () => void) => void listeners.add(fn),
      removeEventListener: (_type: string, fn: () => void) => void listeners.delete(fn),
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => true,
    };
    return list as unknown as MediaQueryList;
  });

  return (next: number) => {
    width = next;
    act(() => listeners.forEach((fn) => fn()));
  };
}

afterEach(() => vi.unstubAllGlobals());

/* ── The markup that leaves the server ───────────────────────────────────── */

describe("what the server writes", () => {
  it("is the flat, open list — every answer, no control, nothing hidden", () => {
    const html = renderToStaticMarkup(tree);

    for (const { q, a } of ITEMS) {
      expect(html, "a question the server did not write").toContain(q);
      // The one that matters. #170 was the answers being unreachable on a
      // phone; a fold that reached the served HTML would be the same bug with
      // a nicer affordance, and this is the line that would fail.
      expect(html, "an answer the server did not write").toContain(a);
    }

    expect(html, "a collapsed panel reached the served HTML").not.toContain("hidden");
    expect(html, "a control reached the served HTML — the fold is a render-time decision")
      .not.toContain("<button");
    expect(html).not.toContain("aria-expanded");
  });

  it("is what a desktop render produces, to the byte", () => {
    viewport(1280);
    const { container } = render(tree);
    // Byte equality, not a snapshot: the promise made to #170 and #171 was that
    // the laptop layout does not move, and the cheapest way to keep a promise
    // like that is to render nothing different at all — no button in the tab
    // order, no ids, no attributes. Anything this component adds above 900px
    // shows up here as a diff.
    expect(container.innerHTML).toBe(renderToStaticMarkup(tree));
  });
});

/* ── The phone ───────────────────────────────────────────────────────────── */

describe("at 390px, after mount", () => {
  it("folds all but the first, and keeps every answer in the DOM", () => {
    viewport(390);
    const { container } = render(tree);

    const buttons = [...container.querySelectorAll("button")];
    expect(buttons).toHaveLength(ITEMS.length);
    expect(buttons.map((b) => b.getAttribute("aria-expanded"))).toEqual([
      // The first answer stays open on purpose: three headings and no prose
      // reads as an empty section, and the open one shows what tapping does.
      "true",
      "false",
      "false",
    ]);

    for (const { q, a } of ITEMS) {
      const button = buttons.find((b) => b.textContent?.includes(q));
      expect(button, `no control for "${q}"`).toBeTruthy();
      expect(button!.type, "a submit button inside a form would navigate").toBe("button");

      const panel = container.querySelector(`[id="${button!.getAttribute("aria-controls")}"]`);
      expect(panel?.textContent, "aria-controls points at something that is not the answer").toBe(a);
      // Folded, not fetched and not dropped: the text is in the document
      // either way, which is what lets Google index an accordion.
      expect(container.textContent).toContain(a);
    }

    // The heading survives the control. The FAQPage schema and the document
    // outline both describe these as headings, and a button is not one.
    expect(container.querySelectorAll("h3")).toHaveLength(ITEMS.length);
    expect(container.querySelector("h3")?.textContent).toContain(ITEMS[0].q);
  });

  it("opens and closes from the keyboard alone", async () => {
    viewport(390);
    const user = userEvent.setup();
    const { container } = render(tree);
    const second = container.querySelectorAll("button")[1];

    await user.tab();
    await user.tab();
    expect(document.activeElement, "the controls are not reachable by tab").toBe(second);

    await user.keyboard("{Enter}");
    expect(second.getAttribute("aria-expanded")).toBe("true");
    expect(container.querySelector(`[id="${second.getAttribute("aria-controls")}"]`))
      .not.toHaveAttribute("hidden");

    await user.keyboard(" ");
    expect(second.getAttribute("aria-expanded")).toBe("false");
    expect(container.querySelector(`[id="${second.getAttribute("aria-controls")}"]`))
      .toHaveAttribute("hidden");
  });

  it("hides the +/− from the accessibility tree", () => {
    viewport(390);
    const { container } = render(tree);
    const button = container.querySelector("button")!;
    // The button's accessible name has to be the question and only the
    // question — "Is “Last Last” certified? −" is not a question anybody asked.
    expect(button.querySelector("[aria-hidden='true']")?.textContent).toBe("−");
    expect(container.querySelectorAll("button")[1].querySelector("[aria-hidden='true']")?.textContent)
      .toBe("+");
  });
});

/* ── Crossing the breakpoint ─────────────────────────────────────────────── */

it("gives the answers back when the window grows past 900px", () => {
  const resize = viewport(390);
  const { container } = render(tree);
  expect(container.querySelectorAll("button")).toHaveLength(ITEMS.length);

  resize(1280);
  // A reader who drags a window wider gets the desktop page, not an accordion
  // frozen from load. Same markup as the server's, again.
  expect(container.innerHTML).toBe(renderToStaticMarkup(tree));

  resize(390);
  expect(container.querySelectorAll("button")).toHaveLength(ITEMS.length);
});

/* ── The same promise, on the real pages ─────────────────────────────────── */

/**
 * "Desktop is byte-identical" is the promise every one of these passes made,
 * and the fixture above proves it only for the component in isolation.
 *
 * Twenty-five more pages now mount FaqList — eight albums, fifteen board
 * artists, /records/awards and /records/africas-biggest — and on all of them a
 * laptop reader is supposed to get exactly the flat `<h3>` + `<p>` list the
 * page had before. So the FAQ subtree of each is compared, at 1280px and after
 * mount, against the subtree the server wrote. Byte equality, so a stray id,
 * a button in the tab order or an aria-expanded on a laptop shows up here as a
 * diff rather than in somebody's screen reader.
 *
 * The subtree rather than the whole document, deliberately: these pages carry
 * chart explorers, award filters and a certifications screen, all of which
 * legitimately settle into a different DOM after mount. Comparing whole pages
 * would fail for reasons that have nothing to do with the FAQ, and a test that
 * fails for the wrong reason gets deleted.
 */
async function faqSubtrees(el: React.ReactElement, cls: string) {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  const served = [...host.querySelectorAll(`.${cls}`)].map((n) => n.outerHTML);

  const { container } = render(el);
  const mounted = [...container.querySelectorAll(`.${cls}`)].map((n) => n.outerHTML);
  return { served, mounted };
}

describe("at 1280px the routes it was added to render the markup they always did", () => {
  beforeEach(() => viewport(1280));

  it.each([
    ["/music/albums/twice-as-tall", () => AlbumPage({ params: Promise.resolve({ album: "twice-as-tall" }) }), songStyles.faqList],
    // The three bespoke-screen routes keep their desktop FAQ where it was and
    // render a SECOND copy inside the mobile screen. That second copy is the
    // one FaqList drives, and at desktop width it has to be as inert as the
    // first — the mobile screen is display:none up here, but its markup is in
    // the document either way, and a button in it would still be tabbable.
    ["/afrobeats/wizkid", () => ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) }), faqSectionStyles.list],
    ["/records/awards", async () => <AwardsPage />, faqSectionStyles.list],
    ["/records/africas-biggest", async () => <AfricasBiggestPage />, faqSectionStyles.list],
  ])("%s", async (_route, page, cls) => {
    const { served, mounted } = await faqSubtrees(await page(), cls);
    // The premise: if the selector stops matching, the comparison below passes
    // by comparing nothing at all.
    expect(served.length, "no FAQ list found — this assertion is checking nothing").toBe(1);
    expect(mounted).toEqual(served);
    expect(served[0]).not.toContain("<button");
    expect(served[0]).not.toContain("aria-expanded");
    expect(served[0]).not.toContain("hidden");
  });
});
