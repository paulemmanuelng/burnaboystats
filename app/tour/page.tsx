import { permanentRedirect } from "next/navigation";

// The Tour page has been folded into Career Records → Tours.
// Keep this route as a permanent (308) redirect so old links/bookmarks work.
export default function TourRedirect() {
  permanentRedirect("/records/tours");
}
