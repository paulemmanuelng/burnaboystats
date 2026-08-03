import Link from "next/link";
import styles from "./mobileContact.module.css";
import ContactForm from "./ContactForm";

/**
 * The mobile contact screen.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 09.
 *
 * The desktop page runs the form and the official channels side by side; here
 * they stack, the form's button goes full-width, and the section kickers turn
 * gold so each block announces itself while scrolling.
 *
 * Its `ContactForm` takes an id prefix because the desktop copy of the form is
 * also in the DOM — see that component for why.
 */
export default function MobileContact({
  channels,
}: {
  channels: { label: string; value: string; href: string }[];
}) {
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <Link href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Contact</span>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>Message us</div>
        {/* Not an <h1> — the desktop block carries the page's single heading. */}
        <p className={styles.title}>
          Get in <span className={styles.gold}>Touch</span>
        </p>
        <p className={styles.lede}>Questions, corrections, or just here for the music?</p>
      </div>

      {/* Form */}
      <div className={styles.formBlock}>
        <div className={styles.sectionKicker}>Drop a line</div>
        <div className={styles.formWrap}>
          <ContactForm idPrefix="m-" stacked />
        </div>
      </div>

      {/* Official channels */}
      <div className={styles.channelBlock}>
        <div className={styles.sectionKicker}>Official channels</div>
        <p className={styles.channelLede}>
          This is an <strong>unofficial fan site</strong>, so we can&apos;t pass messages
          to Burna Boy. For official business, use his real channels:
        </p>
        <div className={styles.channels}>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channel}
            >
              <span className={styles.channelLabel}>{c.label}</span>
              <span className={styles.channelValue}>{c.value}</span>
            </a>
          ))}
        </div>
      </div>

      <p className={styles.note}>
        Corrections are welcome — if a figure here disagrees with an official source, send
        the link and it gets checked against the{" "}
        <Link href="/methodology">methodology</Link>.
      </p>

      <div className={styles.spacer} />
    </div>
  );
}
