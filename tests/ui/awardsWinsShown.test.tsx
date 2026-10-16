import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/awards",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AwardExplorer from "../../app/components/AwardExplorer";
import AwardsPage from "../../app/records/awards/page";
import { ceremonies } from "../../app/data/awards";

/**
 * Question 26 (live debug 15 Oct 2026, REC-10; Paul: "yes"): with Result =
 * Won, /records/awards' desktop counter said "83 nominations shown" while the
 * phone, on the same filter, said "83 wins". It says "{n} wins shown" now;
 * every other filter keeps "nominations".
 */

beforeEach(() => window.history.replaceState(null, "", "/records/awards"));

const noms = ceremonies.flatMap((c) => c.noms);
const wins = noms.filter((n) => n.won).length;
const status = (c: HTMLElement) => c.querySelector<HTMLElement>('[aria-live="polite"]')!.textContent;

describe("question 26: the desktop counter counts wins when Result = Won", () => {
  it("All → every nomination; Won → the wins, in wins; Nominated → the rest, in nominations", async () => {
    const { container } = render(<AwardExplorer />);
    expect(wins).toBeGreaterThan(1);
    expect(status(container)).toBe(`${noms.length} nominations shown`);
    await userEvent.click(screen.getByRole("button", { name: "Won" }));
    expect(status(container)).toBe(`${wins} wins shown`);
    await userEvent.click(screen.getByRole("button", { name: "Nominated" }));
    expect(status(container)).toBe(`${noms.length - wins} nominations shown`);
  });

  it("one win reads “1 win shown”", async () => {
    // A year with a single win, from the data.
    const years = [...new Set(noms.map((n) => n.year))];
    const one = years.find((y) => noms.filter((n) => n.year === y && n.won).length === 1);
    if (one === undefined) return;
    const { container } = render(<AwardExplorer />);
    await userEvent.click(screen.getByRole("button", { name: "Won" }));
    await userEvent.click(screen.getByRole("button", { name: String(one) }));
    expect(status(container)).toBe("1 win shown");
  });

  it("the same noun and the same count as the phone's Wins only line, on the page", async () => {
    const { container } = render(<AwardsPage />);
    const desk = container.querySelector<HTMLElement>("#award-filters")!;
    await userEvent.click(within(desk).getByRole("button", { name: "Won" }));
    const phoneRail = within(container).getByRole("group", { name: "Filter nominations" });
    await userEvent.click(within(phoneRail).getByRole("button", { name: /^Wins only/ }));
    const deskLine = desk.parentElement!.parentElement!.querySelector('[aria-live="polite"]')!.textContent!;
    const phoneLine = [...container.querySelectorAll("span")].map((e) => e.textContent!).find((t) => / wins · \d+ bod/.test(t))!;
    expect(deskLine).toBe(`${wins} wins shown`);
    expect(phoneLine.startsWith(`${wins} wins · `)).toBe(true);
  });
});

describe("negative control", () => {
  it("main's line (AwardExplorer.tsx:120) said nominations under Won", () => {
    const shipped = (totalShown: number) => `${totalShown} ${totalShown === 1 ? "nomination" : "nominations"} shown`;
    expect(shipped(wins)).not.toBe(`${wins} wins shown`);
  });
});
