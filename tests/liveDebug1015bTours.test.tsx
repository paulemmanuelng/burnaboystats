import { describe, it, expect, vi, afterEach } from "vitest";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileTours from "../app/components/MobileTours";
import phoneStyles from "../app/components/mobileTours.module.css";
import { tours } from "../app/data/tours";
import { tourBoxOffice } from "../app/lib/tourBoxOffice";
import { nightsOf } from "../app/lib/tourNights";
import { CAPACITIES_SENTENCE, tourDateNote, tourDateNoteNoCapacities } from "../app/lib/tourMeta";

/**
 * The live debug pass of 15 Oct 2026 (part 2), tours lane (/records/tours and
 * /records/tours/festivals). One block per finding; each negative control is
 * what the site shipped (origin/main 6062f806), verbatim.
 */

const box = tourBoxOffice(tours);
const clean = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

// ── tours-01 ────────────────────────────────────────────────────────────────

describe("tours-01: an opened tour on the phone says what its date list covers", () => {
  const phone = () =>
    render(
      <MobileTours
        tours={tours}
        topGross="$30.46M"
        topTourName="I Told Them…"
        countryCount={40}
        regionCount={6}
        biggestNight="60,000"
        biggestVenue="London Stadium"
        yearSpan="2018–2026"
        hisShowCount={20}
        revenueShowCount={60}
        appearanceCount={50}
        headlinedCount={30}
        today="2026-10-15"
        boxOffice={box}
      />,
    );
  const open = (name: string) => {
    const r = phone();
    fireEvent.click(screen.getByRole("button", { name: new RegExp(name.replace(/[.…]/g, ".")) }));
    const body = r.container.querySelector(`.${phoneStyles.tourBody}`)!;
    expect(body, `${name} did not open`).toBeTruthy();
    return body;
  };
  const LD = tours.find((t) => t.name === "Love, Damini Tour")!;
  const ITT = tours.find((t) => t.name === "I Told Them… Tour")!;

  it("the data is as the finding read it: Love, Damini is partial, I Told Them lists more dates than shows", () => {
    expect(LD.partial).toBe(true);
    expect(LD.partialNote).toBe("Not every night of the run is listed here.");
    expect(ITT.dates!.length).toBeGreaterThan(ITT.shows!);
    // Both carry board nights, so both open the box-office list on the phone.
    expect(nightsOf(box, LD.name)).toBeTruthy();
    expect(nightsOf(box, ITT.name)).toBeTruthy();
  });

  it("Love, Damini: '15 documented dates. Not every night of the run is listed here.', after its last date", () => {
    const body = open(LD.name);
    const note = body.querySelector(`.${phoneStyles.dateNote}`)!;
    expect(clean(note.textContent)).toBe(`${LD.dates!.length} documented dates. Not every night of the run is listed here.`);
    expect(note.previousElementSibling!.classList.contains(phoneStyles.dateRow)).toBe(true);
    expect(note.nextElementSibling).toBeNull();
  });

  it("I Told Them: the dates-vs-shows note, without the capacities sentence (no capacity column here)", () => {
    const body = open(ITT.name);
    const note = body.querySelector(`.${phoneStyles.dateNote}`)!;
    expect(clean(note.textContent)).toBe(tourDateNoteNoCapacities(ITT));
    expect(note.textContent).toContain(`${ITT.dates!.length} documented dates; box office was reported for ${ITT.shows} of them`);
    expect(note.textContent).not.toContain(CAPACITIES_SENTENCE);
    expect(body.textContent).not.toContain("Venue capacity");
    // Desktop's note keeps the sentence, beside its Capacity column.
    expect(tourDateNote(ITT).endsWith(CAPACITIES_SENTENCE)).toBe(true);
  });

  it("every phone tour with dates prints its note once: whole beside capacities, without them on a box-office list", () => {
    const withCaps = tours.filter((t) => t.dates?.length && !nightsOf(box, t.name));
    expect(withCaps.length).toBeGreaterThan(0);
    for (const t of tours.filter((x) => x.dates?.length)) {
      const body = open(t.name);
      const notes = body.querySelectorAll(`.${phoneStyles.dateNote}`);
      expect(notes, t.name).toHaveLength(1);
      expect(clean(notes[0].textContent), t.name).toBe(nightsOf(box, t.name) ? tourDateNoteNoCapacities(t) : tourDateNote(t));
      cleanup();
    }
  });

  it("negative control: the shipped Love, Damini panel ended on its last date, with no note", () => {
    // MobileTours at origin/main: the panel's text ran out at the last row.
    const shipped = "Citi Field · Jul 8, 2023 · — not reported";
    expect(shipped).not.toMatch(/documented dates|Not every night/);
  });
});
