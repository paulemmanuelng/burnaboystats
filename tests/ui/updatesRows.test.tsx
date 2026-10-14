import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/updates",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import UpdatesPage from "../../app/updates/page";
import { updates } from "../../app/data/updates";
import { leadClause } from "../../app/lib/updateClause";
import styles from "../../app/updates/updates.module.css";
import { read, winning } from "../fixtures/cssRules";

/**
 * Job 4 · J4-8: the desktop /updates rows. The short date ("17 Sep", the
 * phone's own) over the tag in the first column; the entry, its first clause
 * at weight 500 in ink and the rest in body ink, capped at 68ch; the → at the
 * right. The 901–1239 band keeps the date (it used to fold it away).
 *
 * Expected dates are computed from each entry's own ISO date, never pinned to
 * a position in the feed.
 */

const CSS = read("app/updates/updates.module.css");
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const short = (iso: string) => `${Number(iso.slice(8, 10))} ${MON[Number(iso.slice(5, 7)) - 1]}`;
const at = (w: number) => (m: string | null) =>
  m === null ||
  m
    .replace(/^@media\s*/, "")
    .split(/\s+and\s+/)
    .every((part) => {
      const min = part.match(/min-width:\s*(\d+)px/);
      if (min) return w >= Number(min[1]);
      const max = part.match(/max-width:\s*(\d+)px/);
      if (max) return w <= Number(max[1]);
      return false;
    });

function desktopRows() {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(UpdatesPage());
  const desk = host.querySelector(`.${styles.desktopOnly}`)!;
  return [...desk.querySelectorAll<HTMLAnchorElement>(`a.${styles.row}`)];
}

describe("J4-8: the desktop /updates rows", () => {
  const rows = desktopRows();

  it("one row per entry, in the feed's order", () => {
    expect(rows).toHaveLength(updates.length);
    expect(rows.map((r) => r.getAttribute("href"))).toEqual(updates.map((u) => u.href));
  });

  it("the short date, computed from each entry, then its tag in the same column", () => {
    rows.forEach((r, i) => {
      const meta = r.firstElementChild!;
      expect(meta.classList.contains(styles.rowMeta), `row ${i}`).toBe(true);
      const [date, tag] = [...meta.children];
      expect(date.classList.contains(styles.rowDate)).toBe(true);
      expect(date.textContent, updates[i].date).toBe(short(updates[i].date));
      expect(tag.classList.contains(styles.tag)).toBe(true);
      expect(tag.textContent).toBe(updates[i].category);
    });
  });

  it("the lead is the entry's first clause (lib/updateClause), and lead + rest is the entry", () => {
    rows.forEach((r, i) => {
      const text = r.querySelector(`.${styles.rowText}`)!;
      expect(text.querySelector(`.${styles.rowLead}`)?.textContent, updates[i].date).toBe(leadClause(updates[i].text).lead);
      expect(text.textContent).toBe(updates[i].text);
    });
  });

  it("the lead is weight 500 in ink, the rest body ink; the text column caps at 68ch; the date holds at 901–1239", () => {
    expect(winning(CSS, ".rowLead", "font-weight", at(1440))).toBe("500");
    expect(winning(CSS, ".rowLead", "color", at(1440))).toBe("var(--text)");
    expect(winning(CSS, ".rowText", "color", at(1440))).toBe("var(--text-body)");
    for (const w of [1024, 1440]) {
      expect(winning(CSS, ".row", "grid-template-columns", at(w)), `${w}`).toMatch(/minmax\(0, 68ch\)/);
      expect(winning(CSS, ".rowDate", "display", at(w)), `${w}`).toBeUndefined();
    }
  });

  it("negative control: the shipped DATE_FMT printed the long date", () => {
    // main e85e6efe, app/components/UpdatesFeed.tsx:25–30, verbatim.
    const DATE_FMT = new Intl.DateTimeFormat("en-GB", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
    const iso = updates[0].date;
    expect(DATE_FMT.format(new Date(`${iso}T00:00:00Z`))).not.toBe(short(iso));
    expect(rows[0].querySelector(`.${styles.rowDate}`)?.textContent).toBe(short(iso));
  });
});
