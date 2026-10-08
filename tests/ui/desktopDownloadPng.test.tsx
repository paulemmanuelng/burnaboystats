import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";

vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import StatCardMaker, { type CardChoice } from "../../app/components/StatCardMaker";
import StatCardButton from "../../app/components/StatCardButton";
import { saveCard } from "../../app/lib/saveCard";

/**
 * V-core-06, the full-site debug of 5 Oct 2026. The desktop "↓ Download PNG"
 * buttons — the /share maker and the home page's per-row stat-card dialog —
 * called saveCard, which tries the native share sheet first whenever
 * navigator.canShare says it can share a file. Desktop Chrome on macOS says
 * yes (read natively in headless Chrome, 6 Oct 2026), as do Edge and Safari,
 * so live at 1440 and 1024 the click handed burna-boy-african-giant-square.png
 * to navigator.share and no anchor download ever fired. The phone screen says
 * "Save or share ↓" for exactly that route; the desktop label promises a file.
 *
 * Here the device CAN share files, and the desktop buttons must download
 * anyway. On the shipped code the two component cases fail: share is called,
 * the anchor is not. The saveCard default (the phone screens' call) still
 * shares, so the phone route is pinned unchanged beside them.
 */

const PNG = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
let share: ReturnType<typeof vi.fn>;
let anchorClicks: { download: string; href: string }[];

beforeEach(() => {
  share = vi.fn(async () => {});
  anchorClicks = [];
  Object.defineProperty(navigator, "canShare", {
    configurable: true,
    value: (data?: ShareData) => !!data?.files?.length,
  });
  Object.defineProperty(navigator, "share", { configurable: true, value: share });
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => ({ ok: true, status: 200, blob: async () => new Blob([PNG], { type: "image/png" }) }))
  );
  URL.createObjectURL = vi.fn(() => "blob:card");
  URL.revokeObjectURL = vi.fn();
  vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function (this: HTMLAnchorElement) {
    anchorClicks.push({ download: this.download, href: this.href });
  });
  vi.spyOn(window, "open").mockImplementation(() => null);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  delete (navigator as { canShare?: unknown }).canShare;
  delete (navigator as { share?: unknown }).share;
});

const CARD: CardChoice = {
  id: "african-giant",
  chip: "Certifications",
  value: "250",
  label: "certifications across 26 countries",
  detail: "Every plaque, every body.",
  source: "RIAA · BPI · SNEP · IFPI",
  href: "/certifications",
};

describe("desktop '↓ Download PNG' downloads, even where the device can share files", () => {
  it("/share maker: the click saves the PNG through an anchor download, not the share sheet", async () => {
    const { getByRole } = render(
      <StatCardMaker cards={[CARD]} verified="6 Oct 2026" origin="https://burnaboystats.com" />
    );
    const btn = getByRole("button", { name: "↓ Download PNG" });
    fireEvent.click(btn);
    await waitFor(() => expect(getByRole("button", { name: "↓ Download PNG" })).toBeEnabled());
    expect(share).not.toHaveBeenCalled();
    expect(anchorClicks).toEqual([{ download: "burna-boy-african-giant-square.png", href: "blob:card" }]);
    // The save fetches the full 1080px PNG; the preview above it is the
    // ?w=720 WebP (design review C-05).
    expect(vi.mocked(fetch).mock.calls.map((c) => String(c[0]))).toEqual(["/stat-card?stat=african-giant&ratio=square"]);
  });

  it("home stat-card dialog: '↓ Download PNG' downloads too", async () => {
    const { getByRole } = render(
      <StatCardButton
        cardId="cert-dai-dai"
        value="18"
        label="Certifications for “Dai Dai”"
        source="18 countries · highest award Diamond"
        href="/certifications"
      />
    );
    fireEvent.click(getByRole("button", { name: /Make a stat card/ }));
    fireEvent.click(getByRole("button", { name: "↓ Download PNG" }));
    await waitFor(() => expect(getByRole("button", { name: "↓ Download PNG" })).toBeEnabled());
    expect(share).not.toHaveBeenCalled();
    expect(anchorClicks).toEqual([{ download: "burna-boy-cert-dai-dai-square.png", href: "blob:card" }]);
  });

  it("saveCard with preferDownload skips the sheet and reports a download", async () => {
    await expect(saveCard("/stat-card?stat=x&ratio=story", "x.png", "caption", { preferDownload: true })).resolves.toBe(
      "downloaded"
    );
    expect(share).not.toHaveBeenCalled();
    expect(anchorClicks).toHaveLength(1);
  });

  it("control — the phone screens' call (no option) still opens the share sheet with its caption", async () => {
    await expect(saveCard("/stat-card?stat=x&ratio=story", "x.png", "caption")).resolves.toBe("shared");
    expect(share).toHaveBeenCalledTimes(1);
    const arg = share.mock.calls[0][0] as ShareData;
    expect(arg.text).toBe("caption");
    expect(arg.files?.[0].name).toBe("x.png");
    expect(anchorClicks).toHaveLength(0);
  });
});
