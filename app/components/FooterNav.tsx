import Link from "next/link";
import { footerLinks } from "../lib/links";

// Footer link list with a gold "·" between each link (styled in globals.css).
// The separator is a ::before on EVERY link; the wrapper's overflow:hidden plus
// the row's negative margin-left clip the leading dot off the start of every
// wrapped row, so a "·" never dangles at a line start — no JS/measurement.
export default function FooterNav() {
  return (
    <div className="footerNavWrap">
      <nav className="footerNav" aria-label="Footer">
        {footerLinks.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
      </nav>
    </div>
  );
}
