"use client";

// The Saturday digest's front door. One field, one button, and a state machine
// small enough to read in one go:
//
//   idle → sending → sent          (POST /api/subscribe accepted the address;
//                                    the confirmation email is on its way)
//   idle → sending → error         (the API said why, in a sentence)
//
// Nothing joins the list here — the emailed link does that (double opt-in,
// see app/api/subscribe). When that link lands the reader back on /updates it
// carries ?subscribed=1|invalid|error, and the box reads it on mount so the
// page itself says "you're in" rather than a bare redirect. A confirmed
// landing replaces the whole module with the ticket — a person who just
// confirmed is not asked to subscribe. The other two landings keep the form,
// with a note above it that says to use it.
//
// Two layouts, one component: `compact` is the phone band (field and button
// stacked, 48px controls), the default is the desktop card in the hero's
// right column (a row, 44px). Design: design_handoff_burnaboystats/designs/
// desktop/Saturday Digest.dc.html, values verbatim.
//
// Two bot deterrents, both invisible to a person: a honeypot field named
// "website" (humans never see it, form-fillers fill it) and the time between
// mount and submit — a submission under 1.5 s is a script, not a thumb.

import { useEffect, useRef, useState } from "react";
import styles from "./SubscribeBox.module.css";
import { nextDigestLabel } from "../lib/nextDigest";

type Phase = "idle" | "sending" | "sent" | "error";
export type Landed = "1" | "invalid" | "error";

/** The confirm-link outcome in the page's URL, if any. Client only. */
export function landedFromLocation(): Landed | null {
  const v = new URLSearchParams(window.location.search).get("subscribed");
  return v === "1" || v === "invalid" || v === "error" ? v : null;
}

export default function SubscribeBox({
  id,
  compact = false,
  /** Where "This week's entries ↓" on the ticket jumps to. */
  entries = "#entries",
}: {
  id?: string;
  compact?: boolean;
  entries?: string;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState<string>("");
  const [landed, setLanded] = useState<Landed | null>(null);
  const mountedAt = useRef<number>(0);

  useEffect(() => {
    mountedAt.current = Date.now();
    // Read the confirm-link outcome once, on the client only — a server render
    // has no query string to read, and useSearchParams would demand a Suspense
    // boundary for what is one flag.
    const v = landedFromLocation();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of the URL
    if (v) setLanded(v);
  }, []);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phase === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const website = String(data.get("website") ?? "");
    const elapsed = Date.now() - mountedAt.current;

    setPhase("sending");
    setMessage(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, elapsed }),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && body.ok) {
        setSentTo(email); // captured before the reset — the sent state prints it
        setPhase("sent");
        form.reset();
      } else {
        setPhase("error");
        setMessage(body.error ?? "Something went wrong — try again in a minute.");
      }
    } catch {
      setPhase("error");
      setMessage("Couldn't reach the site — check your connection and try again.");
    }
  };

  const base = id ?? "subscribe";
  const root = `${styles.box} ${compact ? styles.compact : ""}`;

  // Landed · confirmed: the ticket, and no form.
  if (landed === "1") {
    return (
      <div id={id} className={`${root} ${styles.ticket}`} role="status">
        <div className={styles.ticketKicker}>The Saturday digest · confirmed</div>
        <h2 className={styles.ticketHead}>You&apos;re in.</h2>
        <p className={styles.ticketText}>
          The next digest lands <b>{nextDigestLabel()} at 18:00 London</b> — if the week gives us
          something to send. A quiet week sends nothing.
        </p>
        <div className={styles.ticketFacts}>
          <span>One a week, at most</span>
          <span className={styles.ticketDot} aria-hidden="true">
            ·
          </span>
          <span>Leave in one tap, from any email</span>
        </div>
        <a href={entries} className={styles.ticketLink}>
          This week&apos;s entries ↓
        </a>
      </div>
    );
  }

  const note =
    landed === "invalid"
      ? { head: "That link didn't check out.", body: "It may be old, or altered on the way — subscribe again below and use the newest email." }
      : landed === "error"
        ? { head: "The confirmation didn't go through on our side.", body: "Try the link once more, or subscribe again below." }
        : null;

  return (
    <div id={id} className={root}>
      {note && (
        <div className={styles.note} role="status">
          <b>{note.head}</b> {note.body}
        </div>
      )}
      <div className={styles.kicker}>The Saturday digest</div>
      {/* h2: on /updates the box follows the page's <h1> directly, and an h3
          there skipped a level. .head sets its own face, size and margin. */}
      <h2 className={styles.head}>The week&apos;s numbers, in one email.</h2>
      {compact ? (
        <div className={styles.factsStack}>
          <span>Saturdays · 18:00 London · one a week, at most</span>
          <span>Only in weeks something happened</span>
        </div>
      ) : (
        <div className={styles.facts}>
          <span>Saturdays · 18:00 London</span>
          <span className={styles.factsSep} aria-hidden="true" />
          <span>Only in weeks something happened</span>
          <span className={styles.factsSep} aria-hidden="true" />
          <span>One a week, at most</span>
        </div>
      )}

      {phase === "sent" ? (
        <div className={styles.sent} role="status">
          <div className={styles.sentHead}>Check your inbox.</div>
          <p className={styles.sentText}>Tap the link in the email to confirm — nothing is sent until you do.</p>
          <div className={styles.sentTo}>
            Sent to <span>{sentTo}</span>
          </div>
        </div>
      ) : (
        <form className={styles.form} onSubmit={submit} noValidate>
          <label className={styles.label} htmlFor={`${base}-email`}>
            Email address
          </label>
          <div className={styles.row}>
            <input
              id={`${base}-email`}
              className={styles.input}
              type="email"
              name="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              aria-invalid={phase === "error" ? true : undefined}
              aria-describedby={phase === "error" ? `${base}-error` : undefined}
            />
            {/* Honeypot: off-screen, unlabelled to assistive tech, never filled by a person. */}
            <div className={styles.trap} aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>
            <button type="submit" className={styles.button} disabled={phase === "sending"}>
              {phase === "sending" ? "Sending…" : "Subscribe"}
            </button>
          </div>
          {phase === "error" && message && (
            <p id={`${base}-error`} className={styles.error} role="alert">
              <span className={styles.bang} aria-hidden="true">
                !
              </span>{" "}
              {message}
            </p>
          )}
        </form>
      )}

      <p className={styles.fine}>
        {phase === "sent"
          ? "Nothing arrived after a few minutes? Check spam — or reload and try again."
          : "Confirm from your inbox first — nothing is sent until you do. Leave in one tap, from any email."}
      </p>
    </div>
  );
}
