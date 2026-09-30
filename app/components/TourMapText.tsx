import type { TourMapCountry } from "../lib/tourMapData";

/**
 * Every country's card, as text: rendered ONCE for both layouts of
 * /records/tours/map, visually hidden but read by screen readers and search,
 * with no links (so it adds no invisible focusable links), each entry keyed
 * by its ?country= code (design response, item 74). The cards themselves
 * appear only on a selection; this is where their words live for a reader
 * who never touches the map. Visually hidden, never `hidden`: a hidden
 * element is out of the accessibility tree.
 */
export default function TourMapText({ countries, itinerariesFrom }: { countries: TourMapCountry[]; itinerariesFrom: number }) {
  return (
    <section className="visuallyHidden" aria-label="Every country on the map, in text">
      <ul>
        {countries.map((c) => {
          const peak = c.links.find((l) => l.peak !== undefined);
          return (
            <li key={c.code} id={`country-${c.a2}`}>
              {c.name}, {c.region}.{c.documented && ` Documented: ${c.documented}.`}
              {c.big && ` ${c.big.label}: ${c.big.line}.`}
              {peak && ` Chart peak here: No. ${peak.peak}, ${peak.sub}.`}
              {` ${c.documented ? "From the map" : "Known from"}: ${c.events.join("; ")}.`}
            </li>
          );
        })}
      </ul>
      <p>Documented shows only. Tour itineraries on this site start in {itinerariesFrom}.</p>
    </section>
  );
}
