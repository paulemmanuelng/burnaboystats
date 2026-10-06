import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CertificationsPage from "../../app/certifications/page";
import { certHistoryYears, intlCertHistory } from "../../app/data/certifications";
import deskStyles from "../../app/certifications/certifications.module.css";
import phoneStyles from "../../app/components/mobileCerts.module.css";

/**
 * "Certifications by year" on /certifications always shows a year (V-records-12,
 * debug pass of 5–6 Oct 2026). The desktop log's chips toggled: clicking the lit
 * one deselected it, and the section went to six chips over nothing — no rows,
 * no note, no message (read live at 1440, dark and light: 69 rows for 2026,
 * then 0; the same for 2025 after picking it). A leftover from 1 Jul, when the
 * log opened collapsed and a click closed it; the redesign opened it on the
 * newest year "so it should not start empty" and kept the toggle. The phone's
 * rail (MobileCerts) has always picked, never toggled. Both layouts are in the
 * document, so both are checked here, on the real page and the real data.
 */

const YEARS = certHistoryYears;
const rowsIn = (year: number) => intlCertHistory.filter((e) => e.year === year).length;

const layouts = {
  desktop: {
    rail: () => document.getElementById("cert-by-year")!,
    log: () => document.getElementById("cert-by-year")!,
    row: deskStyles.eventRow,
  },
  phone: {
    rail: () => document.querySelector<HTMLElement>('[aria-label="Filter the log by year"]')!,
    log: () => document.querySelector<HTMLElement>('[aria-label="Filter the log by year"]')!.closest("section")!,
    row: phoneStyles.eventRow,
  },
} as const;

const chip = (rail: HTMLElement, y: number) =>
  within(rail).getAllByRole("button").find((b) => b.textContent?.startsWith(String(y)))!;
const lit = (rail: HTMLElement) =>
  within(rail)
    .getAllByRole("button")
    .filter((b) => b.getAttribute("aria-pressed") === "true")
    .map((b) => Number(b.textContent?.slice(0, 4)));

describe.each(Object.entries(layouts))("the %s log by year", (_name, l) => {
  it("opens on the newest year, with its rows", () => {
    render(<CertificationsPage />);
    expect(YEARS.length).toBeGreaterThan(1);
    expect(lit(l.rail())).toEqual([YEARS[0]]);
    expect(l.log().getElementsByClassName(l.row)).toHaveLength(rowsIn(YEARS[0]));
    expect(rowsIn(YEARS[0])).toBeGreaterThan(0);
  });

  it("keeps the lit year on when it is clicked again", async () => {
    render(<CertificationsPage />);
    const user = userEvent.setup();
    await user.click(chip(l.rail(), YEARS[0]));
    expect(lit(l.rail())).toEqual([YEARS[0]]);
    expect(l.log().getElementsByClassName(l.row)).toHaveLength(rowsIn(YEARS[0]));
  });

  it("moves to another year, and stays there on a second click", async () => {
    render(<CertificationsPage />);
    const user = userEvent.setup();
    const y = YEARS[1];
    await user.click(chip(l.rail(), y));
    expect(lit(l.rail())).toEqual([y]);
    expect(l.log().getElementsByClassName(l.row)).toHaveLength(rowsIn(y));
    await user.click(chip(l.rail(), y));
    expect(lit(l.rail())).toEqual([y]);
    expect(l.log().getElementsByClassName(l.row)).toHaveLength(rowsIn(y));
  });
});

// 2025's note is a fixed line ("Burna Boy was the most certified African
// artist in 2025."), so it holds after the calendar turns.
it("keeps the desktop year's note under its chips when the lit chip is clicked again", async () => {
  render(<CertificationsPage />);
  const user = userEvent.setup();
  const log = layouts.desktop.log();
  const note = () => [...log.getElementsByClassName(deskStyles.yearNote)].map((p) => p.textContent);
  await user.click(chip(log, 2025));
  expect(note()).toEqual([expect.stringMatching(/most certified African artist in 2025/)]);
  await user.click(chip(log, 2025));
  expect(note()).toEqual([expect.stringMatching(/most certified African artist in 2025/)]);
});
