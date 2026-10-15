import { render, cleanup } from "@testing-library/react";
import { decl, read, rules } from "../fixtures/cssRules";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/share",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));
const device = vi.hoisted(() => ({ shareable: false }));
vi.mock("../../app/lib/saveCard", async (orig) => ({
  ...(await orig<typeof import("../../app/lib/saveCard")>()),
  canShareFiles: () => device.shareable,
}));

import MobileStatCards from "../../app/components/MobileStatCards";
import styles from "../../app/components/mobileStatCards.module.css";

/**
 * Fix 119 (design review 8 Oct 2026): the phone /share action bar is
 * unchanged — 130px, y 744–874 at 402 x 874. The canvas redrew it as one row
 * with "Post" and a "⋯" overflow, which renamed Post on X, folded WhatsApp
 * away and dropped the device-aware label. Built: a full-width primary that
 * reads "Save or share ↓" where the phone can share files and "Download PNG ↓"
 * where it cannot, then "Post on X" and "WhatsApp" side by side.
 */

const CARDS = [
  {
    id: "african-giant",
    chip: "Certifications",
    value: "251",
    label: "certifications across 27 countries",
    detail: "Every plaque, every body.",
    source: "RIAA · BPI · SNEP · IFPI",
    href: "/certifications",
  },
];

afterEach(cleanup);

function bar(shareable: boolean) {
  device.shareable = shareable;
  const { container } = render(<MobileStatCards cards={CARDS} verified="12 October 2026" origin="https://burnaboystats.com" />);
  return container.querySelector(`.${styles.actionBar}`)!;
}

describe("fix 119: the phone action bar is as built", () => {
  it.each([
    [true, "Save or share ↓"],
    [false, "Download PNG ↓"],
  ])("canShareFiles %s: one full-width primary reading %j, then Post on X and WhatsApp", (shareable, label) => {
    const b = bar(shareable);
    const kids = [...b.children];
    expect(kids.map((k) => k.tagName)).toEqual(["BUTTON", "DIV"]);
    expect(b.querySelectorAll("button")).toHaveLength(1);
    expect(kids[0].className).toBe(styles.primary);
    expect(kids[0].textContent).toBe(label);
    expect(kids[1].className).toBe(styles.secondaryRow);
    const links = [...kids[1].children] as HTMLAnchorElement[];
    expect(links.map((a) => [a.tagName, a.textContent])).toEqual([
      ["A", "Post on X"],
      ["A", "WhatsApp"],
    ]);
    expect(links[0].getAttribute("href")).toMatch(/^https:\/\/x\.com\/intent\/tweet\?/);
    expect(links[1].getAttribute("href")).toMatch(/^https:\/\/wa\.me\/\?/);
  });

  it("negative control: the desktop's shipped labels \"Post on X ↗\" / \"WhatsApp ↗\" are not the phone's", () => {
    // StatCardMaker.tsx's share links carry the ↗ (another site); the phone
    // bar's do not, as built.
    const maker = read("app/components/StatCardMaker.tsx");
    expect(maker).toContain("Post on X ↗");
    expect(maker).toContain("WhatsApp ↗");
    const text = bar(false).textContent!;
    expect(text).not.toContain("Post on X ↗");
    expect(text).not.toContain("WhatsApp ↗");
  });

  it("the bar's own rules still sum to 130px at no inset", () => {
    const css = read("app/components/mobileStatCards.module.css");
    const body = (sel: string) =>
      rules(css)
        .filter((r) => r.media === null && r.selector === sel)
        .map((r) => r.body)
        .join(";");
    const n = (v: string | undefined) => Number(v!.match(/^([\d.]+)px/)![1]);
    const a = body(".actionBar");
    expect(decl(a, "position")).toBe("fixed");
    expect(decl(a, "bottom")).toBe("0");
    const pad = decl(a, "padding")!.match(/^([\d.]+)px [\d.]+px calc\(([\d.]+)px \+ env\(safe-area-inset-bottom, 22px\)\)$/)!;
    const sum =
      n(decl(a, "border-top")) + Number(pad[1]) + n(decl(body(".primary"), "min-height")) + n(decl(a, "gap")) +
      n(decl(body(".secondary"), "min-height")) + Number(pad[2]);
    expect(sum).toBe(130);
    expect(decl(body(".primary"), "width")).toBe("100%");
  });
});
