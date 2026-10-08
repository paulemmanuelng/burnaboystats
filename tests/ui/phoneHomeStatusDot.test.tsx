import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

// The sentence is read off the live snapshot's age, so a test that took it as
// it comes would only ever see one of the two states. It is swapped here.
const state = vi.hoisted(() => ({ sentence: "" }));
vi.mock("../../app/lib/recentNumberOnes", async (importOriginal) => {
  const real = await importOriginal<typeof import("../../app/lib/recentNumberOnes")>();
  return {
    ...real,
    get changedSentence() {
      return state.sentence;
    },
  };
});

import MobileHome from "../../app/components/MobileHome";
import styles from "../../app/components/mobileHome.module.css";

/**
 * SH-04 (design review, 8 Oct 2026): on a day no chart changed, the phone
 * home's status row showed a lone 6px green dot at its left, with "Live board
 * ↗" at the far right. The sentence it labels ("3 charts changed this week")
 * has been empty on such days since core-18 (5 Oct 2026), which chose to show
 * the link alone rather than repeat "refreshed several times a day"; the dot
 * was left behind. It now comes and goes with the sentence. The desktop row
 * (TodaysNumber) never had a dot.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");

/** A dot with no words beside it, in words; [] when the row is right. */
function rowProblems(row: Element): string[] {
  // By class name, so the shipped markup's hashed class is read the same way.
  const dot = row.querySelector('[class*="statusDot"]');
  const words = [...row.children].filter((c) => c !== dot && !c.matches("a")).map((c) => c.textContent!.trim()).join("");
  if (dot && !words) return ["a status dot labelling nothing"];
  if (!dot && words) return ["a sentence with no status dot"];
  return [];
}

const rowFor = (sentence: string) => {
  state.sentence = sentence;
  return parse(renderToStaticMarkup(<MobileHome />)).querySelector(`.${styles.statusRow}`)!;
};

describe("SH-04: the phone home's status dot only with its sentence", () => {
  it("no chart changed: the row is the Live board link alone, no dot", () => {
    const row = rowFor("");
    expect(row.querySelector(`.${styles.statusDot}`)).toBeNull();
    expect(row.querySelector('a[href="/live-charts"]')?.textContent).toBe("Live board ↗");
    expect(rowProblems(row)).toEqual([]);
  });

  it("charts changed: the dot labels the sentence, and the link stays", () => {
    const row = rowFor("3 charts changed this week");
    expect(row.querySelector(`.${styles.statusDot}`)).not.toBeNull();
    expect(row.textContent).toContain("3 charts changed this week");
    expect(row.querySelector('a[href="/live-charts"]')).not.toBeNull();
    expect(rowProblems(row)).toEqual([]);
  });

  // Verbatim from https://burnaboystats.com/ (live 8 Oct 2026, no chart changed).
  it("negative control: the shipped row, the dot alone beside the link, is caught", () => {
    const shipped = parse(
      `<div class="mobileHome-module__1cyKeW__statusRow"><span class="mobileHome-module__1cyKeW__statusDot" aria-hidden="true"></span><a class="mobileHome-module__1cyKeW__statusLink" href="/live-charts">Live board ↗</a></div>`,
    ).querySelector("div")!;
    expect(rowProblems(shipped)).toEqual(["a status dot labelling nothing"]);
  });
});
