import BackLink from "../components/BackLink";
import MobileMenuButton from "../components/MobileMenuButton";
import styles from "./compare.module.css";

/**
 * The compare family's phone back bar (design review 8 Oct 2026, J2-12, fixes
 * 48 and 49): the chevron back to the page above this one, the page's own
 * name, and the menu button — the bar every other phone screen opens with
 * (MobileDeepPage), with the five-tab bar kept at the foot. It replaces the
 * site masthead, the breadcrumb and the kicker below 900px; above 900 it is
 * not shown, and the breadcrumb is.
 *
 * Each target is a page of its own (/certifications, /compare, /compare/in),
 * never a /compare?… variant: robots closes those (the bot flood of 9–10 Oct
 * 2026), and a back control should land where a crawler may follow too.
 */
export function CompareBackBar({ label, href }: { label: string; href: string }) {
  return (
    <div className={styles.backBar}>
      <BackLink href={href} aria-label="Back" className={styles.backBtn}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </BackLink>
      <span className={styles.backLabel}>{label}</span>
      <MobileMenuButton />
    </div>
  );
}
