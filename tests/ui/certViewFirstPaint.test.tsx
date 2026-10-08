import { act } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";

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

import CertificationsPage from "../../app/certifications/page";
import ArtistPage from "../../app/afrobeats/[artist]/page";
import mobileStyles from "../../app/components/mobileCerts.module.css";
import { CERT_SWAP, CERT_VIEW_MARK, CERT_VIEW_PRE_PAINT } from "../../app/lib/certViewPrepaint";

/**
 * Design review CC-22, 8 Oct 2026: a shared certifications link that turns a
 * switch off — /certifications#feat=0&home=0 — painted the "all" view first
 * ("Certified worldwide · 251") and swapped to its own ("Outside Nigeria ·
 * Lead credits · 125") once hydrated: a flash of a different headline figure
 * on exactly the links people share. Confirmed with scripts off in the review
 * (certifications-switches-off-390-nojs-prepaint.jpg).
 *
 * Here the server's HTML is loaded the way a browser first paints it — its
 * own inline scripts run, no React — and every block the switches recount
 * must be hidden (visibility, so nothing moves) until React has rendered the
 * link's view; then the mark goes. The technique is
 * tests/ui/showsDeepLinkFirstPaint.test.tsx's.
 */
const at = (url: string) => window.history.replaceState({}, "", url);

let pendingTimeout: (() => void) | null = null;
afterEach(() => {
  document.documentElement.removeAttribute(CERT_VIEW_MARK);
  document.body.innerHTML = "";
  pendingTimeout = null;
  at("/");
});

/** The static page as the browser first paints it. The script's four-second
 *  safety release is captured rather than scheduled. */
function firstPaint(url: string, page: React.ReactElement) {
  at(url);
  const html = renderToString(page);
  const host = document.body.appendChild(document.createElement("div"));
  host.innerHTML = html;
  // innerHTML never runs a script; the browser runs the page's own as it parses.
  for (const s of host.querySelectorAll("script:not([type])")) {
    new Function("setTimeout", s.textContent ?? "")((fn: () => void) => {
      pendingTimeout = fn;
    });
  }
  return host;
}

async function hydrate(host: HTMLElement, page: React.ReactElement) {
  await act(async () => {
    hydrateRoot(host, page);
  });
}

const swapped = (host: HTMLElement) => [...host.querySelectorAll(`[${CERT_SWAP}]`)];
const hidden = (el: Element) => getComputedStyle(el).visibility === "hidden";
const phoneKicker = (host: HTMLElement) => host.querySelector(`.${mobileStyles.kicker}`)!.textContent;

describe("CC-22: a link with a switch off paints its own view first", () => {
  it("the script and its rule come before the recounted blocks", () => {
    const host = firstPaint("/certifications#feat=0&home=0", <CertificationsPage />);
    const script = [...host.querySelectorAll("script:not([type])")].find((s) => s.textContent === CERT_VIEW_PRE_PAINT);
    const style = [...host.querySelectorAll("style")].find((s) => s.textContent!.includes(CERT_VIEW_MARK));
    // The shipped page had neither, so "251 · Certified worldwide" painted first.
    expect(script, "no first-paint script").toBeTruthy();
    expect(style, "no first-paint rule").toBeTruthy();
    const blocks = swapped(host);
    // Both layouts: the phone hero, and the desktop eyebrow, lede, tier rail and summary.
    expect(blocks.length).toBeGreaterThanOrEqual(5);
    for (const el of [script!, style!]) {
      expect(el.compareDocumentPosition(blocks[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
  });

  it.each([
    ["/certifications#feat=0&home=0"],
    ["/certifications#home=0"],
    ["/certifications?feat=0"],
  ])("%s — the recounted blocks are hidden at first paint, then shown in the link's view", async (url) => {
    const host = firstPaint(url, <CertificationsPage />);
    expect(document.documentElement.hasAttribute(CERT_VIEW_MARK)).toBe(true);
    expect(swapped(host).filter((el) => !hidden(el))).toEqual([]);
    // The "all" view is what sits under the mark until React renders.
    expect(phoneKicker(host)).toBe("Certified worldwide");

    // The kicker on screen at the moment the mark lifts.
    const root = document.documentElement;
    const original = root.removeAttribute.bind(root);
    const kickerAtRelease: (string | null)[] = [];
    const spy = vi.spyOn(root, "removeAttribute").mockImplementation((name: string) => {
      if (name === CERT_VIEW_MARK && root.hasAttribute(CERT_VIEW_MARK)) kickerAtRelease.push(phoneKicker(host));
      original(name);
    });
    try {
      await hydrate(host, <CertificationsPage />);
    } finally {
      spy.mockRestore();
    }
    expect(root.hasAttribute(CERT_VIEW_MARK)).toBe(false);
    expect(kickerAtRelease).toHaveLength(1);
    expect(kickerAtRelease[0]).not.toBe("Certified worldwide");
    expect(swapped(host).filter(hidden)).toEqual([]);
  });

  it.each([
    ["no switch named", "/certifications"],
    ["a switch on", "/certifications#home=1"],
    ["an empty fragment value over the query", "/certifications?home=0#home="],
    ["a plain anchor", "/certifications#cert-by-year"],
  ])("%s — nothing is hidden, ever", (_, url) => {
    const host = firstPaint(url, <CertificationsPage />);
    expect(document.documentElement.hasAttribute(CERT_VIEW_MARK)).toBe(false);
    expect(swapped(host).filter(hidden)).toEqual([]);
  });

  it("a board artist's link too (Tyla, #home=0)", async () => {
    const page = await ArtistPage({ params: Promise.resolve({ artist: "tyla" }) });
    const host = firstPaint("/afrobeats/tyla#home=0", page);
    expect(swapped(host).length).toBeGreaterThanOrEqual(3);
    expect(swapped(host).filter((el) => !hidden(el))).toEqual([]);
    await hydrate(host, page);
    expect(document.documentElement.hasAttribute(CERT_VIEW_MARK)).toBe(false);
  });

  it("a render that never comes cannot strand the blocks: the mark lifts itself", () => {
    const host = firstPaint("/certifications#feat=0", <CertificationsPage />);
    expect(swapped(host).filter((el) => !hidden(el))).toEqual([]);
    expect(pendingTimeout).toBeTypeOf("function");
    pendingTimeout!();
    expect(swapped(host).filter(hidden)).toEqual([]);
  });
});
