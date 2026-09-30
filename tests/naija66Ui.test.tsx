import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, act, cleanup } from "@testing-library/react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";

/**
 * Naija @ 66 on the page: the key slot every page carries, the /naija66 page
 * in both layouts, and the home banner in both layouts.
 *
 * The pathname here is made up. The slot is identical on every page, so no
 * real one is needed — and a real one in a public test would be a hint.
 */

const SAMPLE_PATH = "/a/sample-page";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => SAMPLE_PATH,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import HuntKeySlot from "../app/components/HuntKeySlot";
import slotStyles from "../app/components/huntKeySlot.module.css";
import Naija66Page from "../app/naija66/page";
import Naija66Banner from "../app/components/Naija66Banner";
import { bannerLine } from "../app/components/Naija66BannerLive";
import bannerStyles from "../app/components/naija66Banner.module.css";
import Home from "../app/page";
import { CLOSES_MS } from "../app/lib/naija66/clock";
import { WINNER_LINE } from "../app/lib/naija66/copy";

const EVE = "2026-09-30T12:00:00Z"; // 1pm WAT the day before
const DAWN = "2026-10-01T05:00:00Z"; // 6am WAT on the day
const BEFORE = "2026-10-01T07:59:59Z";
const AT_0905 = "2026-10-01T08:05:00Z";
const AT_2105 = "2026-10-01T20:05:00Z";
const CLOSED = "2026-10-02T23:00:00Z";

const setNow = (iso: string) => vi.setSystemTime(new Date(iso));

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["Date"] });
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

// ── The key slot ─────────────────────────────────────────────────────────────

describe("HuntKeySlot", () => {
  it("renders nothing before the first drop or from the close", () => {
    for (const t of [EVE, BEFORE, CLOSED, "2026-10-09T00:00:00Z"]) {
      setNow(t);
      const { container, unmount } = render(<HuntKeySlot />);
      expect(container.innerHTML, t).toBe("");
      unmount();
    }
  });

  it("asks for this page's badge between them, lazily, with no alt text and no space", () => {
    for (const [t, epoch] of [[AT_0905, 1], [AT_2105, 5], [new Date(CLOSES_MS - 1).toISOString(), 5]] as const) {
      setNow(t);
      const { container, unmount } = render(<HuntKeySlot />);
      const img = container.querySelector("img")!;
      expect(img.getAttribute("src")).toBe(`/api/naija66/badge?p=${encodeURIComponent(SAMPLE_PATH)}&v=${epoch}`);
      expect(img.getAttribute("alt")).toBe("");
      expect(img.getAttribute("loading")).toBe("lazy");
      expect(container.firstElementChild!.className).toBe(slotStyles.slot);
      unmount();
    }
  });

  it("is never in the server's HTML, so every page's source is the same", () => {
    setNow(AT_0905);
    expect(renderToString(<HuntKeySlot />)).toBe("");
  });

  it("stays shut for a blank 1x1 and opens for a real badge", () => {
    setNow(AT_0905);
    const { container } = render(<HuntKeySlot />);
    const img = container.querySelector("img")!;
    Object.defineProperty(img, "naturalWidth", { configurable: true, value: 1 });
    fireEvent.load(img);
    expect(container.firstElementChild!.classList.contains(slotStyles.found)).toBe(false);
    expect(container.querySelector("a")).toBeNull();
    Object.defineProperty(img, "naturalWidth", { configurable: true, value: 360 });
    fireEvent.load(img);
    expect(container.firstElementChild!.classList.contains(slotStyles.found)).toBe(true);
    expect(container.querySelector("a")!.getAttribute("href")).toBe("/naija66");
  });
});

// ── /naija66 ─────────────────────────────────────────────────────────────────

const STATUS_0905 = {
  ready: true,
  now: AT_0905,
  closesAt: "2026-10-02T23:00:00Z",
  prizes: [
    { prize: 1, dropsAt: "2026-10-01T08:00:00Z", state: "live" },
    { prize: 2, dropsAt: "2026-10-01T11:00:00Z", state: "sleeping" },
    { prize: 3, dropsAt: "2026-10-01T14:00:00Z", state: "sleeping" },
    { prize: 4, dropsAt: "2026-10-01T17:00:00Z", state: "sleeping" },
    { prize: 5, dropsAt: "2026-10-01T20:00:00Z", state: "sleeping" },
  ],
};

function stubApi(claimBody: unknown = { wrong: true }) {
  const calls: string[] = [];
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) => {
      calls.push(url);
      const body = url.includes("/claim") ? claimBody : STATUS_0905;
      return { ok: true, status: 200, json: async () => body };
    }),
  );
  return calls;
}

describe("/naija66", () => {
  it("renders both layouts — two h1s, two key boxes, two boards — from one poll", async () => {
    setNow(AT_0905);
    const calls = stubApi();
    const { container } = render(<Naija66Page />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(2);
    expect(screen.getAllByLabelText("Your key")).toHaveLength(2);
    expect(container.querySelectorAll("li[data-state]")).toHaveLength(10);
    await waitFor(() => expect(container.querySelectorAll('li[data-state="live"]')).toHaveLength(2));
    expect(calls.filter((c) => c.includes("/status"))).toHaveLength(1);
    // Both layouts print the same rules.
    expect(screen.getAllByText("One prize per person.")).toHaveLength(2);
    expect(screen.getAllByText("Not affiliated with Spotify or Burna Boy.")).toHaveLength(2);
    expect(container.textContent).toContain("9am, 12pm, 3pm, 6pm and 9pm WAT");
  });

  it("shows a win in both layouts, with the code and the DM line", async () => {
    setNow(AT_0905);
    stubApi({ won: true, prize: 1, code: "NG66-1-7QK4MZ", at: "2026-10-01T08:07:00.000Z" });
    render(<Naija66Page />);
    const [box] = screen.getAllByLabelText("Your key");
    fireEvent.change(box, { target: { value: "ng66-abcdef" } });
    await act(async () => {
      fireEvent.submit(box.closest("form")!);
    });
    await waitFor(() => expect(screen.getAllByText("You found it.")).toHaveLength(2));
    expect(screen.getAllByText("NG66-1-7QK4MZ")).toHaveLength(2);
    expect(screen.getAllByText(WINNER_LINE)).toHaveLength(2);
    expect(screen.getAllByText(/claimed 09:07 WAT/)).toHaveLength(2);
  });

  it("says the same thing for a wrong key in both layouts", async () => {
    setNow(AT_0905);
    stubApi({ wrong: true });
    render(<Naija66Page />);
    const [box] = screen.getAllByLabelText("Your key");
    fireEvent.change(box, { target: { value: "NG66-AAAAAA" } });
    await act(async () => {
      fireEvent.submit(box.closest("form")!);
    });
    await waitFor(() => expect(screen.getAllByText(/doesn't open anything/)).toHaveLength(2));
  });
});

// ── The home banner ──────────────────────────────────────────────────────────

describe("the home banner", () => {
  it("is on both layouts of the home page until the close", () => {
    setNow(EVE);
    const html = renderToStaticMarkup(<Home />);
    const banners = [...html.matchAll(/<a href="\/naija66" class="([^"]+)"/g)].map((m) => m[1]);
    expect(banners).toHaveLength(2);
    expect(banners.some((c) => c.includes(bannerStyles.phone))).toBe(true);
    expect(banners.some((c) => c.includes(bannerStyles.desktop))).toBe(true);
    expect(html.split("Tomorrow 9am WAT: the Naija @ 66 hunt — five months of Spotify Premium").length - 1).toBe(2);
    // The phone strip precedes the phone screen; the desktop one sits in the desktop wrapper.
    expect(html.indexOf(bannerStyles.phone)).toBeLessThan(html.indexOf("Burna Boy</h1>"));
  });

  it("says Today on the morning itself, and is gone from the close", () => {
    setNow(DAWN);
    expect(renderToStaticMarkup(<Naija66Banner layout="phone" now={new Date()} />)).toContain("Today 9am WAT");
    setNow(CLOSED);
    expect(renderToStaticMarkup(<Naija66Banner layout="phone" now={new Date()} />)).toBe("");
    expect(renderToStaticMarkup(<Naija66Banner layout="desktop" now={new Date()} />)).toBe("");
    expect(renderToStaticMarkup(<Home />)).not.toContain('href="/naija66"');
  });

  it("carries the pre-paint check that hides a cached copy after the close", () => {
    setNow(EVE);
    const html = renderToStaticMarkup(<Naija66Banner layout="desktop" now={new Date()} />);
    expect(html).toContain(`if(Date.now()>=${CLOSES_MS})document.documentElement.dataset.naija66="over"`);
  });

  it("counts the prizes still out once the hunt is live", () => {
    expect(bannerLine("live", null)).toBe("Naija @ 66 is live — five months of Spotify Premium to find");
    expect(bannerLine("live", 3)).toBe("Naija @ 66 is live — 3 of 5 prizes left");
    expect(bannerLine("live", 0)).toBe("Naija @ 66 — all five prizes claimed. See the winners");
    expect(bannerLine("tomorrow", null)).toBe("Tomorrow 9am WAT: the Naija @ 66 hunt — five months of Spotify Premium");
  });
});
