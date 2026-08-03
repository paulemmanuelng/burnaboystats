/**
 * A figure the source never published.
 *
 * State E, from designs/desktop/App States.dc.html: an em dash means **not
 * reported**, never zero — a zero is a claim, a dash is an absence. Dim ink
 * carries that at a glance; the hidden text carries it to a screen reader,
 * which would otherwise read a bare dash as nothing at all.
 *
 * Used for grosses Boxscore never reported and venue capacities nobody stated.
 */
export default function NotReported({ what = "Not reported" }: { what?: string }) {
  return (
    <span className="notReported" title={what}>
      <span aria-hidden="true">—</span>
      <span className="visuallyHidden">{what}</span>
    </span>
  );
}
