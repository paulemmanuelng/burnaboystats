import Link from "./SiteLink";

/** An outside page: an absolute http(s) URL, never a path on this site. */
export const isOutsideHref = (href: string) => /^https?:\/\//i.test(href);

/**
 * A first's "Proof ↗" (/records/firsts, both layouts). The same label and
 * class wherever it points. A proof on this site is a SiteLink, as before; an
 * outside source (Paul, 4 Nov 2026: every proof links the real source) opens
 * in a new tab, with rel="noopener noreferrer" as the site's other outside
 * links carry it. The ↗ is already the label's arrow, so the outside link
 * looks exactly like the inside one.
 */
export default function ProofLink({ href, className }: { href: string; className: string }) {
  const label = (
    <>
      Proof<span aria-hidden="true"> ↗</span>
    </>
  );
  return isOutsideHref(href) ? (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
