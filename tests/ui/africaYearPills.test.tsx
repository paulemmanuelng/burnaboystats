import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/africas-biggest",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../../app/records/africas-biggest/page";
import { africaBoards } from "../../app/lib/africaBoards";
import phone from "../../app/components/mobileAfricasBiggest.module.css";

/**
 * The phone's year pills on /records/africas-biggest are pressed buttons, not
 * ARIA tabs (V-records-14, debug pass of 5–6 Oct 2026). The rail carried
 * role=tablist/tab/tabpanel with aria-selected, which tells a screen reader to
 * move between years with the arrow keys and that the rail is one Tab stop.
 * Neither was true: read live at 390 in headless Chrome, dark and light,
 * ArrowRight, ArrowLeft, Home and End on the selected 2026 pill left 2026
 * selected and focused, and Tab went on to 2025. Every other chip rail on the
 * site (CertHistoryByYear, MobileCerts) is a row of aria-pressed buttons, each
 * its own Tab stop, picked with Enter or Space — that is the promise the rail
 * now makes, and keeps. Desktop draws every year at once (StatBox) and has no
 * control here.
 */

const yearBoards = africaBoards.filter((b) => b.years && b.years.length > 1);

const rails = () =>
  [...document.querySelectorAll<HTMLElement>(`.${phone.yearPills}`)];
const pressed = (rail: HTMLElement) =>
  within(rail)
    .getAllByRole("button")
    .filter((b) => b.getAttribute("aria-pressed") === "true")
    .map((b) => b.textContent);
const firstName = (rail: HTMLElement) =>
  rail.closest(`.${phone.yearBoard}`)!.querySelector(`.${phone.rowName}`)!.textContent;

it("has a year board to check", () => {
  render(<AfricasBiggestPage />);
  expect(yearBoards.length).toBeGreaterThan(0);
  expect(rails()).toHaveLength(yearBoards.length);
});

it("promises no tab keyboard it does not have: no tab, tablist or tabpanel roles", () => {
  render(<AfricasBiggestPage />);
  expect(document.querySelectorAll('[role="tab"], [role="tablist"], [role="tabpanel"]')).toHaveLength(0);
  expect(document.querySelectorAll("[aria-selected]")).toHaveLength(0);
});

describe.each(yearBoards.map((b) => [b.title, b] as const))("the year rail on %s", (_t, board) => {
  const years = board.years!;
  const rail = () => rails()[yearBoards.indexOf(board)];

  it("is a labelled group of pressed buttons, each its own Tab stop, opening on the newest year", () => {
    render(<AfricasBiggestPage />);
    const r = rail();
    expect(r.getAttribute("role")).toBe("group");
    expect(r.getAttribute("aria-label")).toBe("Year");
    const buttons = within(r).getAllByRole("button");
    expect(buttons.map((b) => b.textContent)).toEqual(years.map((y) => y.label));
    for (const b of buttons) {
      expect(b.getAttribute("aria-pressed")).toMatch(/^(true|false)$/);
      expect(b.tabIndex).toBe(0);
    }
    expect(pressed(r)).toEqual([years[0].label]);
    expect(firstName(r)).toContain(years[0].entries[0].name);
  });

  it("picks a year from the keyboard: Tab to it, then Enter or Space", async () => {
    render(<AfricasBiggestPage />);
    const user = userEvent.setup();
    const r = rail();
    const buttons = within(r).getAllByRole("button");
    buttons[0].focus();
    await user.tab();
    expect(document.activeElement).toBe(buttons[1]);
    await user.keyboard("{Enter}");
    expect(pressed(r)).toEqual([years[1].label]);
    expect(firstName(r)).toContain(years[1].entries[0].name);
    const last = buttons[buttons.length - 1];
    last.focus();
    await user.keyboard(" ");
    expect(pressed(r)).toEqual([years[years.length - 1].label]);
    expect(firstName(r)).toContain(years[years.length - 1].entries[0].name);
  });
});
