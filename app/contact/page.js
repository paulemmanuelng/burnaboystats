import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact — Burna Boy Stats",
  description: "Get in touch with Burna Boy Stats, or find Burna Boy's official channels.",
  alternates: { canonical: "/contact" },
};

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
      <header className="pageHeader container">
        <h1>
          Get in <span className="accent">Touch</span>
        </h1>
        <p>Questions, corrections, or just here for the music?</p>
      </header>

      <div className="container">
        <div className="split block">
          {/* MESSAGE FORM */}
          <Reveal>
            <div>
              <p className="eyebrow">Message Us</p>
              <h2 className="secTitle">
                Drop a <span className="goldText">line</span>
              </h2>
              <p className="lead" style={{ margin: "12px 0 24px" }}>
                Spotted something we should fix, or just want to say hi? Use the
                form below — we love hearing from fellow fans.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          {/* OFFICIAL CHANNELS */}
          <Reveal delay={120}>
            <div>
              <p className="eyebrow">Official Channels</p>
              <p className="lead" style={{ marginBottom: 16 }}>
                This is an <strong>unofficial fan site</strong>, so we can’t pass
                messages to Burna Boy. For official business, bookings or news,
                use his real channels:
              </p>
              <div className="facts">
                {channels.map((c) => (
                  <a
                    className="fact"
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="factLabel">{c.label}</span>
                    <span className="factValue">{c.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
