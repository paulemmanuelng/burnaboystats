import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/firsts",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import FirstsPage from "../app/records/firsts/page";
import sitemap from "../app/sitemap";
import { allFirsts, type First } from "../app/data/firsts";
import { liveMoments } from "../app/data/liveMoments";
import { tours } from "../app/data/tours";
import { onThisDayDays } from "../app/lib/onThisDay";
import { proofHref } from "../app/lib/firstProof";
import desk from "../app/records/firsts/firsts.module.css";
import phone from "../app/components/mobileSections.module.css";
import { trees, text } from "./fixtures/phoneTrees";
import { afterHitBox, read, rules, winning } from "./fixtures/cssRules";

/**
 * firstsProof (Job 4 · J4-7; fixes 83, 85 and 96; Paul's decision (b)).
 *
 * A first links "Proof ↗" to the site's own page that prints its figure, and
 * only where one exists: no page, no field, no link. Each target was opened on
 * the dev server at 1440 and 402 on 14 Oct 2026 and found to print the figure
 * (the PR lists them, with the firsts that got none and why). Here: every
 * proof resolves to a page the site serves, never a /compare? query (the bot
 * flood rule); a moment or a night is found by its record, so a renamed one
 * fails rather than linking nowhere; both layouts print "Proof ↗" exactly on
 * the rows that have one; and the row reads headline first, with the year an
 * ink label in the right-hand column (fix 85, fix 96).
 */

const ORIGIN = /^https?:\/\/[^/]+/;
const ROUTES = new Set(sitemap().map((r) => r.url.replace(ORIGIN, "") || "/"));
// A one-milestone On This Day day is served but noindex, so the sitemap leaves it out.
const OTD_DAYS = new Set(onThisDayDays.map((d) => `/on-this-day/${d.slug}`));
const withProof = allFirsts.filter((f) => f.proof);
const clean = (s: string) => s.replace(/\s+/g, " ").trim();

describe("every proof is the site's own page", () => {
  it("there are proofs, and each resolves", () => {
    expect(withProof.length).toBeGreaterThan(0);
    for (const f of withProof) expect(proofHref(f), f.title).toMatch(/^\//);
  });

  it("each path, before its query or fragment, is a route the site serves", () => {
    for (const f of withProof) {
      const href = proofHref(f)!;
      const path = href.split(/[?#]/)[0];
      expect(ROUTES.has(path) || OTD_DAYS.has(path), `${f.title} → ${href}`).toBe(true);
    }
  });

  it("no proof is a /compare? query (BOT-FLOOD RULE)", () => {
    for (const f of withProof) expect(proofHref(f)!, f.title).not.toMatch(/^\/compare(\/[^?#]*)?\?/);
  });

  it("a moment proof names a live moment, and a night proof one night of a tour", () => {
    for (const f of withProof) {
      const p = f.proof!;
      if (typeof p === "string") continue;
      if ("moment" in p) expect(liveMoments.map((m) => m.title), f.title).toContain(p.moment);
      else expect(tours.flatMap((t) => t.dates ?? []).filter((d) => d.venue === p.night), f.title).toHaveLength(1);
    }
  });

  it("no day is typed: a dated page is only ever reached through its record", () => {
    for (const f of withProof) {
      if (typeof f.proof === "string") expect(f.proof, f.title).not.toMatch(/^\/on-this-day\//);
    }
  });
});

describe("both layouts print 'Proof ↗' exactly on the rows that have one", () => {
  const { desktop, phone: phoneTree } = trees(renderToStaticMarkup(FirstsPage()));
  const byTitle = new Map(allFirsts.map((f) => [clean(f.title), f] as const));

  it("desktop", () => {
    const rows = [...desktop!.querySelectorAll(`.${desk.row}`)];
    expect(rows).toHaveLength(allFirsts.length);
    for (const r of rows) {
      const f = byTitle.get(text(r.querySelector("h3")))!;
      const link = r.querySelector(`a.${desk.proof}`);
      expect(!!link, f.title).toBe(!!f.proof);
      if (link) {
        expect(link.getAttribute("href")).toBe(proofHref(f));
        expect(text(link)).toBe("Proof ↗");
      }
    }
  });

  it("phone", () => {
    const rows = [...phoneTree!.querySelectorAll(`.${phone.plainRow}`)];
    expect(rows).toHaveLength(allFirsts.length);
    for (const r of rows) {
      const f = byTitle.get(text(r.querySelector(`.${phone.title}`)))!;
      const link = r.querySelector(`a.${phone.proof}`);
      expect(!!link, f.title).toBe(!!f.proof);
      if (link) {
        expect(link.getAttribute("href")).toBe(proofHref(f));
        expect(text(link)).toBe("Proof ↗");
      }
    }
  });
});

describe("the row reads headline first, the year an ink label on the right (fixes 85, 96)", () => {
  const html = renderToStaticMarkup(FirstsPage());
  const { desktop, phone: phoneTree } = trees(html);
  /** The title comes before the year in source order, and the year sits in the row's last column. */
  const headlineFirst = (row: Element, title: string, year: string) => {
    const t = row.querySelector(title)!;
    const y = row.querySelector(year)!;
    return !!t && !!y && (t.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 && row.lastElementChild!.contains(y);
  };

  it("desktop: in every row, and the grid gives the year a right-hand column", () => {
    for (const r of desktop!.querySelectorAll(`.${desk.row}`)) expect(headlineFirst(r, "h3", `.${desk.year}`)).toBe(true);
    const css = read("app/records/firsts/firsts.module.css");
    expect(winning(css, ".row", "grid-template-columns", (m) => m === null)).toBe("minmax(0, 1fr) 120px");
    expect(winning(css, ".side", "align-items", (m) => m === null)).toBe("flex-end");
  });

  it("phone: in every row", () => {
    for (const r of phoneTree!.querySelectorAll(`.${phone.plainRow}`)) expect(headlineFirst(r, `.${phone.title}`, `.${phone.year}`)).toBe(true);
    const css = read("app/components/mobileSections.module.css");
    expect(winning(css, ".plainRow", "grid-template-columns", () => true)).toBe("minmax(0, 1fr) auto");
  });

  it("the year is ink on both layouts, and 'Proof ↗' is the gold text link", () => {
    for (const f of ["app/records/firsts/firsts.module.css", "app/components/mobileSections.module.css"]) {
      const css = read(f);
      expect(winning(css, ".year", "color", () => true), f).toBe("var(--text)");
      expect(winning(css, ".proof", "color", () => true), f).toBe("var(--gold)");
    }
  });

  it("hit areas: 24px on the desktop, 44px on a phone", () => {
    const deskCss = read("app/records/firsts/firsts.module.css");
    expect(parseFloat(winning(deskCss, ".proof", "min-height", (m) => m === null)!)).toBeGreaterThanOrEqual(24);
    const after = rules(read("app/components/mobileSections.module.css")).find((r) => r.selector === ".proof::after")!;
    const [w, h] = afterHitBox(after.body, [50, 11]);
    expect(w).toBeGreaterThanOrEqual(44);
    expect(h).toBeGreaterThanOrEqual(44);
  });
});

describe("firstsProof negative controls", () => {
  /** Option A: a link to another page wears ↗; → is a whole row's. */
  const optionA = (label: string) => /↗$/.test(label) && !/→/.test(label);

  it("the canvas's phone label, 'proof →', fails Option A", () => {
    // Wayfinding §6, the Firsts phone frame: v: '{yyyy} · proof →'.
    expect(optionA("proof →")).toBe(false);
    expect(optionA("Proof ↗")).toBe(true);
  });

  it("the shipped desktop row, year first, fails 'headline first'", () => {
    // app/records/firsts/page.tsx:110–113 on main e85e6efe, rendered.
    const host = document.createElement("div");
    host.innerHTML = `<div class="${desk.row}"><span class="${desk.year}">2023</span><div><h3 class="${desk.title}">First African artist to headline &amp; sell out a US stadium</h3><p class="${desk.text}">Citi Field, New York.</p></div></div>`;
    const row = host.firstElementChild!;
    const t = row.querySelector("h3")!;
    const y = row.querySelector(`.${desk.year}`)!;
    expect((t.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 && row.lastElementChild!.contains(y)).toBe(false);
  });

  it("a proof typed as a dated page would be caught", () => {
    const typed: Pick<First, "proof"> = { proof: "/on-this-day/8-july" };
    expect(typeof typed.proof === "string" && /^\/on-this-day\//.test(typed.proof)).toBe(true);
  });
});
