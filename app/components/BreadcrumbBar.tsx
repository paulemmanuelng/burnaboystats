import Link from "next/link";
import styles from "./breadcrumbBar.module.css";
import { SEGMENT_LABELS } from "../lib/seo";

/**
 * The visible breadcrumb bar the design puts under the nav on every deep page.
 *
 * Server-rendered from the path the page passes in, so it costs no client JS —
 * the JSON-LD twin in the root layout stays where it is. Labels come from the
 * same map the structured data uses, so the two can never disagree.
 */
export default function BreadcrumbBar({ path }: { path: string }) {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs: { label: string; href: string }[] = [];
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    crumbs.push({ label: SEGMENT_LABELS[seg] ?? seg, href: acc });
  }
  const last = crumbs.pop()!;

  return (
    <nav aria-label="Breadcrumb" className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/">Home</Link>
        {crumbs.map((c) => (
          <span key={c.href} className={styles.crumb}>
            <span className={styles.sep} aria-hidden="true">/</span>
            <Link href={c.href}>{c.label}</Link>
          </span>
        ))}
        <span className={styles.sep} aria-hidden="true">/</span>
        <span aria-current="page" className={styles.current}>{last.label}</span>
      </div>
    </nav>
  );
}
