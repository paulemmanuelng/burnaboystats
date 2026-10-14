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

// The changed-sentence is read off the live snapshot's age, so a test that
// took it as it comes would only ever see one of the two states. It is
// swapped here, so both are rendered.
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
import TodaysNumber from "../../app/components/TodaysNumber";
import styles from "../../app/components/mobileHome.module.css";
import desk from "../../app/components/todaysNumber.module.css";
import { liveChartsUpdated } from "../../app/data/liveCharts";
import { shortStamp } from "../../app/lib/dates";

/**
 * J1-1 (design review 8 Oct 2026, fix 18): the phone home's status row reads
 * the green dot, "Updated {liveChartsUpdated}" and "Live board ↗", every day,
 * the same date the desktop panel stamps. There is no change sentence on the
 * phone: "No chart changed in the last 24 h" claimed what the data cannot back
 * (the feed counts No. 1 arrivals over four days; the charts refresh hourly),
 * and the arrivals line above the row already names new countries. This
 * replaces SH-04 (8 Oct), which hid the dot on a day with no sentence.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();

/** What is wrong with a status row, in words; [] when it is right. By class
 *  name, so the shipped markup's hashed classes read the same way. */
function rowProblems(row: Element): string[] {
  const out: string[] = [];
  if (!row.querySelector('[class*="statusDot"]')) out.push("no status dot");
  const time = row.querySelector("time");
  if (!/^Updated \d{1,2} [A-Z][a-z]{2} \d{4}$/.test(words(time?.parentElement)) || !time?.getAttribute("datetime")) out.push("no Updated date");
  if (/changed|No chart/i.test(words(row))) out.push("a change sentence");
  const link = row.querySelector('a[href="/live-charts"]');
  if (words(link) !== "Live board ↗") out.push("no Live board link");
  return out;
}

const rowFor = (sentence: string) => {
  state.sentence = sentence;
  return parse(renderToStaticMarkup(<MobileHome />)).querySelector(`.${styles.statusRow}`)!;
};

describe("fix 18: the phone home's status row is the dot and the date, every day", () => {
  it.each(["", "3 charts changed this week"])("with the change sentence %j: dot, Updated {liveChartsUpdated}, Live board ↗", (sentence) => {
    const row = rowFor(sentence);
    expect(rowProblems(row)).toEqual([]);
    expect(row.querySelector(`.${styles.statusDot}`)).not.toBeNull();
    const time = row.querySelector("time")!;
    expect(time.getAttribute("datetime")).toBe(liveChartsUpdated);
    expect(words(time)).toBe(shortStamp(liveChartsUpdated));
    // Three items and no more: the dot, the date, the link.
    expect([...row.children].map((c) => words(c))).toEqual(["", `Updated ${shortStamp(liveChartsUpdated)}`, "Live board ↗"]);
    expect(words(row)).not.toMatch(/changed|No chart/);
  });

  it("the same date text as the desktop panel's UPDATED stamp", () => {
    const stamp = parse(renderToStaticMarkup(<TodaysNumber />)).querySelector(`.${desk.stamp}`);
    expect(words(stamp)).toBe(`Updated ${shortStamp(liveChartsUpdated)}`);
    expect(words(rowFor("").querySelector("time")?.parentElement)).toBe(words(stamp));
  });

  it("negative controls: the row as shipped (SH-04), and the canvas's quiet-day sentence", () => {
    // Verbatim from https://burnaboystats.com/ (live 8 Oct 2026, no chart changed).
    const shipped = parse(
      `<div class="mobileHome-module__1cyKeW__statusRow"><span class="mobileHome-module__1cyKeW__statusDot" aria-hidden="true"></span><a class="mobileHome-module__1cyKeW__statusLink" href="/live-charts">Live board ↗</a></div>`,
    ).querySelector("div")!;
    expect(rowProblems(shipped)).toEqual(["no Updated date"]);
    // Proof.dc.html §1's third state, which fix 18 withdrew.
    const quiet = parse(
      `<div class="statusRow"><span class="statusDot"></span><span>Updated <time datetime="2026-10-07">7 Oct 2026</time></span><span>No chart changed in the last 24 h</span><a href="/live-charts">Live board ↗</a></div>`,
    ).querySelector("div")!;
    expect(rowProblems(quiet)).toEqual(["a change sentence"]);
  });
});
