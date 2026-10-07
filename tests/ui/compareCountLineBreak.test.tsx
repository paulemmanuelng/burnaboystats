import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
  redirect: () => {
    throw new Error("redirect()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import PairPage from "../../app/compare/[pair]/page";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareB-07, the full-site debug of 5 Oct 2026. In artist mode a country
 * cell whose chip stands for several plaques carries a count line, "N plaques
 * · top shown". On phones the cell is narrow and the line wrapped at whatever
 * space fitted: read live in headless Chrome on tyla-vs-ayra-starr and
 * burna-boy-vs-wizkid (dark, 7 Oct 2026), every count at 340–414 read
 * "4 PLAQUES · TOP" / "SHOWN", and at 320 a two-digit count read
 * "10 PLAQUES ·" / "TOP SHOWN" beside "7 PLAQUES · TOP" / "SHOWN" on the
 * same screen. From 768 up the line is one line.
 *
 * The fix glues it into two segments, as the slot meta does: "N plaques ·"
 * and "top shown", with an ordinary space only after the "·", so the dot ends
 * a line and never opens one (the slot meta's rule, V-compareA-07; review of
 * 7 Oct 2026). Layout is not measured in jsdom, so this pins the break
 * opportunities. Checked live by grafting the same text onto the shipped
 * pages at 390 and 320 (dark and light): every phone row that wraps reads
 * "N PLAQUES ·" / "TOP SHOWN", no row grows and nothing runs past its cell.
 */

const html = (el: React.ReactElement) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(el);
  return root;
};
const pair = async (slug: string) => html(await PairPage({ params: Promise.resolve({ pair: slug }) }));
const norm = (s: string | null | undefined) => (s ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();

/** The pieces a line may break between: split at ordinary whitespace only. */
const breakable = (text: string) => text.trim().split(/[ \t\n\r]+/);

/** Every "N plaques · top shown" count line in the page's table. */
function countLines(root: HTMLElement) {
  return [...root.querySelectorAll(`table .${styles.notCounted}`)]
    .map((el) => el.textContent ?? "")
    .filter((t) => /^\d+ plaques · top shown$/.test(norm(t)));
}

/** "N plaques ·" / "top shown", and nowhere else. */
function breaksOnlyAtTheDot(text: string) {
  const n = norm(text).split(" ")[0];
  expect(breakable(text), JSON.stringify(text)).toEqual([`${n}\u00a0plaques\u00a0·`, "top\u00a0shown"]);
}

describe("the artist-mode count line breaks only after its “·”", () => {
  for (const slug of ["tyla-vs-ayra-starr", "burna-boy-vs-wizkid", "burna-boy-vs-tems", "davido-vs-asake"]) {
    it(`${slug}: every count line is “N plaques ·” / “top shown”`, async () => {
      const lines = countLines(await pair(slug));
      expect(lines.length, slug).toBeGreaterThan(3);
      for (const t of lines) breaksOnlyAtTheDot(t);
    });
  }

  it("one-digit and two-digit counts alike (the 320 rows that broke differently)", async () => {
    const lines = countLines(await pair("tyla-vs-ayra-starr")).map(norm);
    expect(lines).toContain("4 plaques · top shown");
    expect(lines).toContain("10 plaques · top shown");
  });

  it("negative control: the line the site shipped has three places to break", () => {
    // Verbatim from the live tyla-vs-ayra-starr table (France, 7 Oct 2026).
    const shipped = "4 plaques · top shown";
    expect(breakable(shipped)).toEqual(["4", "plaques", "·", "top", "shown"]);
    expect(() => breaksOnlyAtTheDot(shipped)).toThrow();
    // The first fix's form opened a phone line on "·" ("4 plaques" / "· top shown").
    expect(() => breaksOnlyAtTheDot("4\u00a0plaques ·\u00a0top\u00a0shown")).toThrow();
  });
});
