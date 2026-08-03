import Link from "next/link";
import ContactForm from "../components/ContactForm";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileContact from "../components/MobileContact";
import KeepExploring from "../components/KeepExploring";
import styles from "./contact.module.css";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Contact — Burna Boy Stats",
  description: "Get in touch with Burna Boy Stats, or find Burna Boy's official channels.",
  path: "/contact",
});

// Official channels (for real enquiries — this fan site can't forward messages).
const channels = [
  { label: "Official Site", value: "onaspaceship.com ↗", href: "https://www.onaspaceship.com" },
  { label: "Instagram", value: "@burnaboygram ↗", href: "https://www.instagram.com/burnaboygram" },
  { label: "X / Twitter", value: "@burnaboy ↗", href: "https://twitter.com/burnaboy" },
  { label: "Tickets", value: "Ticketmaster ↗", href: "https://www.ticketmaster.com/burna-boy-tickets/artist/2486272" },
];

export default function ContactPage() {
  return (
    <main id="content">
      {/* Mobile is screen 09 — the same two blocks, stacked. */}
      <MobileContact channels={channels} />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/contact" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Message us
            </div>
            <h1 className={styles.h1}>
              Get in <span className="inkText">Touch</span>
            </h1>
            <p className={styles.lede}>
              Questions, corrections, or just here for the music?
            </p>
          </div>
        </section>

        {/* ── Form + official channels ───────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.split}`}>
            <div className={styles.formCol}>
              <div className={styles.eyebrow}>Message us</div>
              <h2 className={styles.h2}>
                Drop a <span className="inkText">line</span>
              </h2>
              <p className={styles.formLede}>
                Spotted something we should fix, or just want to say hi? Use the form
                below — we love hearing from fellow fans.
              </p>
              <div className={styles.formWrap}>
                <ContactForm />
              </div>
            </div>

            <div className={styles.channelCol}>
              <div className={styles.eyebrow}>Official channels</div>
              <p className={styles.channelLede}>
                This is an <strong>unofficial fan site</strong>, so we can&apos;t pass
                messages to Burna Boy. For official business, bookings or news, use his
                real channels:
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
              <p className={styles.note}>
                Corrections are welcome — if a figure here disagrees with an official
                source, send the link and it gets checked against the{" "}
                <Link href="/methodology">methodology</Link>.
              </p>
            </div>
          </div>
        </section>

        <KeepExploring current="/contact" />
      </div>
    </main>
  );
}
