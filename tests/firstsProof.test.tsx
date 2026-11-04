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
import { allFirsts, firstGroups, type First, type FirstProof, type FirstSource } from "../app/data/firsts";
import { totalAwards, certsInYear } from "../app/data/certifications";
import { isOutsideHref } from "../app/components/ProofLink";
import { liveMoments } from "../app/data/liveMoments";
import { tours } from "../app/data/tours";
import { onThisDayDays } from "../app/lib/onThisDay";
import { proofHref } from "../app/lib/firstProof";
import desk from "../app/records/firsts/firsts.module.css";
import phone from "../app/components/mobileSections.module.css";
import { trees, text } from "./fixtures/phoneTrees";
import { afterHitBox, read, rules, winning } from "./fixtures/cssRules";
import { readFileSync } from "node:fs";

/**
 * firstsProof (Job 4 · J4-7; fixes 83, 85 and 96; Paul's decision (b); Paul,
 * 4 Nov 2026).
 *
 * A first's "Proof ↗" links the outside page that states it, where one was
 * read on a host we may read: its url, the page's words as read, and the day
 * (FirstSource), each recorded in docs/sourcing/FIRSTS-PROOF-2026-11-04.md. It
 * opens in a new tab, rel="noopener noreferrer". The firsts whose source is
 * billboard.com or TouringData's X (every first that names Billboard, and the
 * box office) keep their link inside the site until Paul rules, as do the two
 * counts only this site derives. A first with no readable source keeps its
 * in-site proof: the site's own page that prints its figure, and only where
 * one exists (no page, no field, no link). Each in-site target was opened on
 * the dev server at 1440 and 402 on 14 Oct 2026 and found to print the
 * figure. Here: every in-site proof resolves to a page the site serves, never
 * a /compare? query (the bot flood rule); a moment or a night is found by its
 * record, so a renamed one fails rather than linking nowhere; both layouts
 * print "Proof ↗" exactly on the rows that have one, outside ones in a new
 * tab; and the row reads headline first, with the year an ink label in the
 * right-hand column (fix 85, fix 96).
 */

const ORIGIN = /^https?:\/\/[^/]+/;
const ROUTES = new Set(sitemap().map((r) => r.url.replace(ORIGIN, "") || "/"));
// A one-milestone On This Day day is served but noindex, so the sitemap leaves it out.
const OTD_DAYS = new Set(onThisDayDays.map((d) => `/on-this-day/${d.slug}`));
const withProof = allFirsts.filter((f) => f.proof);
const clean = (s: string) => s.replace(/\s+/g, " ").trim();
const isSource = (p: FirstProof | undefined): p is FirstSource => typeof p === "object" && "url" in p;
const sourced = allFirsts.filter((f) => isSource(f.proof));
const inSite = withProof.filter((f) => !isSource(f.proof));
const DOC = readFileSync("docs/sourcing/FIRSTS-PROOF-2026-11-04.md", "utf8");

/** Hosts the house rules bar from our reads (billboard.com, X and the other
 *  socials, the BPI's register, Deezer, iTunes search, ARIA's Dropbox) and
 *  this site itself: an outside proof on any of them was never read by us. */
const BARRED = /(^|\.)(billboard\.com|x\.com|twitter\.com|instagram\.com|facebook\.com|tiktok\.com|deezer\.com|dropbox\.com|burnaboystats\.com)$|^certified-awards\.bpi\.co\.uk$|^itunes\.apple\.com$/;
const sourceProblem = (p: FirstSource) => {
  let u: URL;
  try {
    u = new URL(p.url);
  } catch {
    return "not a URL";
  }
  if (u.protocol !== "https:") return "not https";
  if (BARRED.test(u.hostname)) return `barred host ${u.hostname}`;
  if (!p.quote.trim() || /\n/.test(p.quote) || p.quote.length > 200) return "no one-line quote";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.readOn) || p.readOn < "2026-11-04") return "no read day";
  return null;
};

/** The link is the first's proof, labelled "Proof ↗"; an outside one opens
 *  in a new tab with rel="noopener noreferrer", an inside one in place. */
const linkProblem = (link: Element, f: First) => {
  const href = proofHref(f)!;
  if (link.getAttribute("href") !== href) return `href ${link.getAttribute("href")}`;
  if (text(link) !== "Proof ↗") return `label ${text(link)}`;
  const rel = (link.getAttribute("rel") ?? "").split(/\s+/);
  if (isOutsideHref(href)) {
    if (link.getAttribute("target") !== "_blank") return "outside, same tab";
    if (!rel.includes("noopener") || !rel.includes("noreferrer")) return `rel ${rel.join(" ")}`;
  } else if (link.hasAttribute("target")) return "inside, new tab";
  return null;
};

describe("every in-site proof is the site's own page", () => {
  it("there are proofs, and each resolves", () => {
    expect(withProof.length).toBeGreaterThan(0);
    for (const f of withProof) expect(proofHref(f), f.title).not.toBeNull();
    for (const f of inSite) expect(proofHref(f), f.title).toMatch(/^\//);
  });

  it("each path, before its query or fragment, is a route the site serves", () => {
    for (const f of inSite) {
      const href = proofHref(f)!;
      const path = href.split(/[?#]/)[0];
      expect(ROUTES.has(path) || OTD_DAYS.has(path), `${f.title} → ${href}`).toBe(true);
    }
  });

  it("no proof is a /compare? query (BOT-FLOOD RULE)", () => {
    for (const f of withProof) expect(proofHref(f)!, f.title).not.toMatch(/^\/compare(\/[^?#]*)?\?/);
  });

  it("a moment proof names a live moment, and a night proof one night of a tour", () => {
    for (const f of inSite) {
      const p = f.proof!;
      if (typeof p === "string" || isSource(p)) continue;
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

describe("every outside proof is a source read before it was linked (4 Nov 2026)", () => {
  it("there are outside proofs, and each links its own url", () => {
    expect(sourced.length).toBeGreaterThan(0);
    for (const f of sourced) expect(proofHref(f), f.title).toBe((f.proof as FirstSource).url);
    for (const f of sourced) expect(isOutsideHref(proofHref(f)!), f.title).toBe(true);
    for (const f of inSite) expect(isOutsideHref(proofHref(f)!), f.title).toBe(false);
  });

  it("each is an https page on a host we may read, with the words read and the day", () => {
    for (const f of sourced) expect(sourceProblem(f.proof as FirstSource), f.title).toBeNull();
  });

  it("the sourcing doc records each one's url and quote, on the first's own row", () => {
    const rows = DOC.split("\n").filter((l) => l.startsWith("| "));
    for (const f of sourced) {
      const p = f.proof as FirstSource;
      expect(rows, f.title).toContain(`| ${f.title} | ${p.url} | ${p.quote} |`);
    }
    // And the doc's count of them is the data's.
    expect(DOC).toContain(`## Linked: ${sourced.length} firsts`);
  });
});

describe("the firsts left for Paul's ruling keep their link inside the site", () => {
  // Every first that names Billboard, and the box office (Billboard Boxscore
  // and TouringData's X): their sources are hosts we do not read.
  const billboard = allFirsts.filter((f) => /Billboard/.test(f.title));
  const boxOffice = firstGroups.find((g) => g.label === "Box office")!.items;
  const forPaul = [...billboard, ...boxOffice];

  it("none of them links outside, and the doc lists every one", () => {
    expect(forPaul.length).toBeGreaterThan(0);
    for (const f of forPaul) expect(isSource(f.proof), f.title).toBe(false);
    const section = DOC.slice(DOC.indexOf("## Left for Paul's ruling"), DOC.indexOf("## Kept inside the site"));
    expect(section).toContain(`## Left for Paul's ruling: ${forPaul.length} firsts`);
    for (const f of forPaul) expect(section, f.title).toContain(`- ${f.title} (`);
  });

  it("the two counts only this site derives keep /certifications", () => {
    const derived = allFirsts.filter((f) => f.text.startsWith(`${totalAwards()} certifications`) || f.text.startsWith(`${certsInYear(2026)} international`));
    expect(derived).toHaveLength(2);
    for (const f of derived) expect(f.proof, f.title).toBe("/certifications");
  });
});

describe("both layouts print 'Proof ↗' exactly on the rows that have one", () => {
  const { desktop, phone: phoneTree } = trees(renderToStaticMarkup(FirstsPage()));
  const byTitle = new Map(allFirsts.map((f) => [clean(f.title), f] as const));

  const check = (rows: Element[], titleOf: (r: Element) => string, proofClass: string) => {
    expect(rows).toHaveLength(allFirsts.length);
    let outside = 0;
    for (const r of rows) {
      const f = byTitle.get(titleOf(r))!;
      const link = r.querySelector(`a.${proofClass}`);
      expect(!!link, f.title).toBe(!!f.proof);
      if (link) {
        expect(linkProblem(link, f), f.title).toBeNull();
        if (isOutsideHref(link.getAttribute("href")!)) outside++;
      }
    }
    expect(outside).toBe(sourced.length);
  };

  it("desktop", () => {
    check([...desktop!.querySelectorAll(`.${desk.row}`)], (r) => text(r.querySelector("h3")), desk.proof);
  });

  it("phone", () => {
    check([...phoneTree!.querySelectorAll(`.${phone.plainRow}`)], (r) => text(r.querySelector(`.${phone.title}`)), phone.proof);
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

  it("a Billboard chart page, X post or unread page as an outside proof fails", () => {
    // Billboard's own Global 200 page and TouringData's profile: the hosts the
    // 17 firsts left for Paul would need.
    expect(sourceProblem({ url: "https://www.billboard.com/charts/billboard-global-200/", quote: "Dai Dai", readOn: "2026-11-04" })).toMatch(/barred/);
    expect(sourceProblem({ url: "https://x.com/touringdata", quote: "Burna Boy", readOn: "2026-11-04" })).toMatch(/barred/);
    // A page linked without being read: no words, or the old read day.
    expect(sourceProblem({ url: "https://kworb.net/spotify/listeners.html", quote: "", readOn: "2026-11-04" })).toMatch(/quote/);
    expect(sourceProblem({ url: "https://kworb.net/spotify/listeners.html", quote: "60,131,126", readOn: "2026-10-14" })).toMatch(/read day/);
    expect(sourceProblem({ url: "https://kworb.net/spotify/listeners.html", quote: "60,131,126", readOn: "2026-11-04" })).toBeNull();
  });

  it("the shipped desktop link, in place for an outside page, fails", () => {
    // app/records/firsts/page.tsx:116–118 on main 35fe0849, rendered with an
    // outside proof's url: a Link with no target.
    const f = sourced[0];
    const host = document.createElement("div");
    host.innerHTML = `<a href="${proofHref(f)}" class="${desk.proof}">Proof<span aria-hidden="true"> ↗</span></a>`;
    expect(linkProblem(host.firstElementChild!, f)).toBe("outside, same tab");
    host.innerHTML = `<a href="${proofHref(f)}" class="${desk.proof}" target="_blank" rel="noopener">Proof<span aria-hidden="true"> ↗</span></a>`;
    expect(linkProblem(host.firstElementChild!, f)).toBe("rel noopener");
  });
});
