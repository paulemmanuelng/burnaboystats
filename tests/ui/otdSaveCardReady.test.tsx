import { useState, type ReactNode } from "react";
import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";

const device = vi.hoisted(() => ({ sharesFiles: true }));
vi.mock("../../app/lib/saveCard", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../../app/lib/saveCard")>()),
  canShareFiles: () => device.sharesFiles,
}));

import OnThisDaySaveCard from "../../app/components/OnThisDaySaveCard";
import { saveCard } from "../../app/lib/saveCard";

/**
 * V-otd-10 (full-site debug, 5 Oct 2026). On the phone, "Save or share ↓"
 * (a day page's card block and the home page's On This Day card) fetched the
 * full PNG only after the tap. Read live in headless Chrome at 390x844, dark
 * and light, 7 Oct: before the tap only the 320px preview had loaded; the tap
 * set aria-busy and nothing visible changed (label, colour and fill the same);
 * share() ran 0.5 s after the tap with a warm card (the sweep measured 1.6 s
 * cold, curl 2.07 s), and with the card held 6 s the tap's user activation had
 * expired, so the sheet was refused and the tap fell through to a download of
 * burna-boy-on-this-day-7-october.png.
 *
 * The tap's activation is modelled here as a window shorter than the network:
 * the card answers NET_MS after it is asked for, and share() refuses once
 * ACTIVE_MS have passed since the click, as Chrome does at 5 s (iOS Safari
 * may refuse sooner). The component as it shipped (quoted below, verbatim)
 * is the negative control: it fails the same reads.
 */

const NET_MS = 200;
const ACTIVE_MS = 40;
const SRC = "/on-this-day/7-october/card";
const FILE = "burna-boy-on-this-day-7-october.png";

/** app/components/OnThisDaySaveCard.tsx as shipped (d9230875). */
function ShippedSaveCard({
  src,
  filename,
  shareText,
  className,
  children,
}: {
  src: string;
  filename: string;
  shareText: string;
  className?: string;
  children: ReactNode;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <a
      href={src}
      download={filename}
      className={className}
      aria-busy={busy || undefined}
      onClick={async (e) => {
        e.preventDefault();
        if (busy) return;
        setBusy(true);
        try {
          await saveCard(src, filename, shareText);
        } finally {
          setBusy(false);
        }
      }}
    >
      {children}
    </a>
  );
}

type IORec = { cb: IntersectionObserverCallback; opts?: IntersectionObserverInit; targets: Element[]; io: IntersectionObserver };
let ios: IORec[];
let IO0: typeof IntersectionObserver;
let fetches: string[];
let failNext: boolean;
let activeMs: number;
let tappedAt: number;
let shares: { active: boolean; files: string[]; text?: string }[];
let downloads: string[];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const bytes = (url: string) => new Uint8Array(url.length);
const onTap = () => {
  tappedAt = performance.now();
};

beforeEach(() => {
  device.sharesFiles = true;
  ios = [];
  fetches = [];
  failNext = false;
  activeMs = ACTIVE_MS;
  tappedAt = -Infinity;
  shares = [];
  downloads = [];
  IO0 = window.IntersectionObserver;
  window.IntersectionObserver = class {
    rec: IORec;
    constructor(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
      this.rec = { cb, opts, targets: [], io: this as unknown as IntersectionObserver };
      ios.push(this.rec);
    }
    observe(t: Element) {
      this.rec.targets.push(t);
    }
    unobserve() {}
    disconnect() {
      this.rec.targets = [];
    }
    takeRecords() {
      return [];
    }
  } as unknown as typeof IntersectionObserver;
  vi.stubGlobal(
    "fetch",
    vi.fn((url: string) => {
      fetches.push(url);
      const ok = !failNext;
      failNext = false;
      return sleep(NET_MS).then(() => ({
        ok,
        status: ok ? 200 : 500,
        blob: async () => new Blob([bytes(url)], { type: "image/png" }),
      }));
    })
  );
  Object.defineProperty(navigator, "canShare", { configurable: true, value: (d?: ShareData) => !!d?.files?.length });
  Object.defineProperty(navigator, "share", {
    configurable: true,
    value: vi.fn(async (d: ShareData) => {
      const active = performance.now() - tappedAt < activeMs;
      shares.push({ active, files: (d.files ?? []).map((f) => `${f.name}:${f.size}`), text: d.text });
      if (!active) throw new DOMException("no user activation", "NotAllowedError");
    }),
  });
  URL.createObjectURL = vi.fn(() => "blob:card");
  URL.revokeObjectURL = vi.fn();
  vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function (this: HTMLAnchorElement) {
    downloads.push(this.download);
  });
  vi.spyOn(window, "open").mockImplementation(() => null);
  document.addEventListener("click", onTap, true);
});

afterEach(() => {
  cleanup();
  document.removeEventListener("click", onTap, true);
  window.IntersectionObserver = IO0;
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  delete (navigator as { canShare?: unknown }).canShare;
  delete (navigator as { share?: unknown }).share;
});

type Card = typeof OnThisDaySaveCard;
const ui = (C: Card, src = SRC, file = FILE) => (
  <C src={src} filename={file} shareText="Burna Boy on this day, 7 October" className="btn">
    <span>Save or share</span>
    <span aria-hidden="true">↓</span>
  </C>
);

/** The button scrolls near the screen: every live observer watching it is told. */
function scrollNear(el: Element) {
  act(() => {
    for (const r of ios) {
      if (r.targets.includes(el)) {
        r.cb([{ isIntersecting: true, target: el } as IntersectionObserverEntry], r.io);
      }
    }
  });
}

/** A reader scrolls to the card, reads for a moment, taps. */
async function scrollThenTap(C: Card) {
  const { getByRole } = render(ui(C));
  const link = getByRole("link");
  scrollNear(link);
  await act(() => sleep(NET_MS + 60));
  fireEvent.pointerDown(link);
  fireEvent.click(link);
  await waitFor(() => expect(shares.length + downloads.length).toBeGreaterThan(0), { timeout: 2000 });
  await act(() => sleep(10));
}

describe("phone 'Save or share ↓' has the card in hand when it is tapped", () => {
  it("the card is fetched as the button nears the screen, and the tap opens the sheet at once", async () => {
    await scrollThenTap(OnThisDaySaveCard);
    expect(fetches).toEqual([SRC]);
    expect(shares).toEqual([{ active: true, files: [`${FILE}:${SRC.length}`], text: "Burna Boy on this day, 7 October" }]);
    expect(downloads).toEqual([]);
  });

  it("the observer waits for the page to load, and looks a screen ahead", async () => {
    Object.defineProperty(document, "readyState", { configurable: true, get: () => "interactive" });
    try {
      const { getByRole } = render(ui(OnThisDaySaveCard));
      const link = getByRole("link");
      expect(ios.flatMap((r) => r.targets)).toEqual([]);
      act(() => {
        window.dispatchEvent(new Event("load"));
      });
      const watching = ios.filter((r) => r.targets.includes(link));
      expect(watching).toHaveLength(1);
      expect(watching[0].opts?.rootMargin).toBe("100% 0px");
    } finally {
      delete (document as { readyState?: unknown }).readyState;
    }
  });

  it("nothing is fetched while the button stays off screen (or in the hidden layout)", async () => {
    render(ui(OnThisDaySaveCard));
    await act(() => sleep(NET_MS + 20));
    expect(fetches).toEqual([]);
  });

  it("a phone that downloads instead of sharing fetches nothing early", async () => {
    device.sharesFiles = false;
    const { getByRole } = render(ui(OnThisDaySaveCard));
    expect(ios).toHaveLength(0);
    scrollNear(getByRole("link"));
    await act(() => sleep(NET_MS + 20));
    expect(fetches).toEqual([]);
  });

  it("a tap that has to wait says 'Preparing…', then shares and reads 'Save or share' again", async () => {
    activeMs = 5000;
    const { getByRole } = render(ui(OnThisDaySaveCard));
    const link = getByRole("link");
    fireEvent.click(link);
    await act(() => sleep(20));
    expect(link.textContent).toBe("Preparing…");
    expect(link).toHaveAttribute("aria-busy", "true");
    fireEvent.click(link);
    await waitFor(() => expect(shares).toHaveLength(1), { timeout: 2000 });
    await act(() => sleep(10));
    expect(link.textContent).toBe("Save or share↓");
    expect(link).not.toHaveAttribute("aria-busy");
    expect(fetches).toEqual([SRC]);
    expect(shares).toHaveLength(1);
  });

  it("the next day's card is fetched for the next day, not the old one shared", async () => {
    const next = "/on-this-day/8-october/card";
    const { getByRole, rerender } = render(ui(OnThisDaySaveCard));
    scrollNear(getByRole("link"));
    await act(() => sleep(NET_MS + 20));
    rerender(ui(OnThisDaySaveCard, next, "burna-boy-on-this-day-8-october.png"));
    scrollNear(getByRole("link"));
    await act(() => sleep(NET_MS + 20));
    fireEvent.click(getByRole("link"));
    await waitFor(() => expect(shares).toHaveLength(1), { timeout: 2000 });
    expect(fetches).toEqual([SRC, next]);
    expect(shares[0]).toMatchObject({ active: true, files: [`burna-boy-on-this-day-8-october.png:${next.length}`] });
  });

  it("an early fetch that failed is made again on the tap", async () => {
    activeMs = 5000;
    failNext = true;
    const { getByRole } = render(ui(OnThisDaySaveCard));
    scrollNear(getByRole("link"));
    await act(() => sleep(NET_MS + 20));
    fireEvent.click(getByRole("link"));
    await waitFor(() => expect(shares).toHaveLength(1), { timeout: 2000 });
    expect(fetches).toEqual([SRC, SRC]);
    expect(window.open).not.toHaveBeenCalled();
  });

  describe("negative control: the shipped component", () => {
    it("fetches only on the tap, so the sheet is refused and the tap downloads", async () => {
      await scrollThenTap(ShippedSaveCard);
      expect(fetches).toEqual([SRC]);
      expect(shares).toEqual([{ active: false, files: [`${FILE}:${SRC.length}`], text: "Burna Boy on this day, 7 October" }]);
      expect(downloads).toEqual([FILE]);
    });

    it("shows nothing while it waits: the label never changes", async () => {
      const { getByRole } = render(ui(ShippedSaveCard));
      const link = getByRole("link");
      fireEvent.click(link);
      await act(() => sleep(20));
      expect(link).toHaveAttribute("aria-busy", "true");
      expect(link.textContent).toBe("Save or share↓");
      await act(() => sleep(NET_MS + 60));
    });
  });
});
