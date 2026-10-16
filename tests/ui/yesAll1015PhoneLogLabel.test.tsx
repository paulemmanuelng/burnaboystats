import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CertificationsPage from "../../app/certifications/page";
import { certHistoryYears, intlCertHistory } from "../../app/data/certifications";
import deskStyles from "../../app/certifications/certifications.module.css";
import phoneStyles from "../../app/components/mobileCerts.module.css";
import { read, winning } from "../fixtures/cssRules";

/**
 * Question 19 of the 15 Oct 2026 live debug (Paul: "yes to all", cb-3): the
 * phone year log lists a year's rows latest logged first, so the printed days
 * read out of order, and its sticky label said only "2026 · 72". The desktop
 * label has said "2026 · 72 · latest logged first" since J1-6. The phone
 * label now says the same words.
 *
 * It fits at 320 (dev server, 15 Oct 2026, 11px mono caps at 0.11em): the
 * label's box is 320 wide with 18px either side, 284px of room, and the
 * longest label, "2026 · 72 · LATEST LOGGED FIRST", sets in one line; see
 * the measurements in the lane's report. nowrap keeps it on one line in the
 * 40px band whatever the count.
 *
 * Shipped on main (a9574c64), served by the dev server on 15 Oct 2026:
 *   <div class="mobileCerts_logLabel__…">2026<!-- --> · <!-- -->72</div>
 */

const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const phoneRoot = () => document.querySelector<HTMLElement>('[aria-label="Filter the log by year"]')!.closest("section")!;
const deskRoot = () => document.getElementById("cert-by-year")!;
const label = (root: HTMLElement, s: Record<string, string>) => root.querySelector(`.${s.logLabel}`);
const RULE = /^\d{4} · \d+ · latest logged first$/;

describe("Q19: the phone year log says its order, as the desktop does", () => {
  it("every year: the phone label is the desktop's, word for word", async () => {
    render(<CertificationsPage />);
    const user = userEvent.setup();
    for (const y of certHistoryYears) {
      await user.click(within(document.querySelector<HTMLElement>('[aria-label="Filter the log by year"]')!).getAllByRole("button").find((b) => b.textContent?.startsWith(String(y)))!);
      const n = intlCertHistory.filter((e) => e.year === y).length;
      expect(words(label(phoneRoot(), phoneStyles)), String(y)).toBe(`${y} · ${n} · latest logged first`);
      expect(words(label(phoneRoot(), phoneStyles))).toMatch(RULE);
    }
  });

  it("the open year matches the desktop label", () => {
    render(<CertificationsPage />);
    const phone = words(label(phoneRoot(), phoneStyles));
    const desk = words(label(deskRoot(), deskStyles));
    expect(phone).toMatch(RULE);
    expect(desk).toMatch(RULE);
    expect(phone).toBe(desk);
  });

  it("one line in the 40px band", () => {
    const css = read("app/components/mobileCerts.module.css");
    expect(winning(css, ".logLabel", "white-space", () => true)).toBe("nowrap");
    expect(winning(css, ".logLabel", "height", () => true)).toBe("40px");
  });

  it("negative control: the label main served fails the rule", () => {
    const served = new DOMParser().parseFromString('<div class="mobileCerts_logLabel__x">2026<!-- --> · <!-- -->72</div>', "text/html").body.firstElementChild!;
    expect(words(served)).toBe("2026 · 72");
    expect(words(served)).not.toMatch(RULE);
  });
});
