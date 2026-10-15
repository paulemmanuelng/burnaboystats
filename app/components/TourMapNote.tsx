import Link from "./SiteLink";

/**
 * The map's method note, the same words on both layouts: the desktop's note
 * under the country table, now its P3 (J1-11), and the phone's new P3 at the
 * screen's foot. Both layouts' P1 "How this is counted" lands here.
 */
export default function TourMapNote() {
  return (
    <>
      Compiled from his tours, festivals and one-off shows, cross-checked against press and setlist records. Only documented shows
      are counted. For dates, venues and grosses, see the <Link href="/records/tours">Tours page</Link>.
    </>
  );
}
