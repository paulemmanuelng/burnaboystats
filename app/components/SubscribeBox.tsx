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
// page itself says "you're in" rather than a bare redirect.
//
// Two bot deterrents, both invisible to a person: a honeypot field named
// "website" (humans never see it, form-fillers fill it) and the time between
// mount and submit — a submission under 1.5 s is a script, not a thumb.

import { useEffect, useRef, useState } from "react";
import styles from "./SubscribeBox.module.css";

type Phase = "idle" | "sending" | "sent" | "error";

export default function SubscribeBox({ id, compact = false }: { id?: string; compact?: boolean }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [landed, setLanded] = useState<"1" | "invalid" | "error" | null>(null);
  const mountedAt = useRef<number>(0);

  useEffect(() => {
    mountedAt.current = Date.now();
    // Read the confirm-link outcome once, on the client only — a server render
    // has no query string to read, and useSearchParams would demand a Suspense
    // boundary for what is one flag.
    const v = new URLSearchParams(window.location.search).get("subscribed");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of the URL
    if (v === "1" || v === "invalid" || v === "error") setLanded(v);
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

  const landedNote =
    landed === "1"
      ? "You're in. The next digest lands on Saturday evening."
      : landed === "invalid"
        ? "That confirmation link didn't check out — subscribe again below and use the newest email."
        : landed === "error"
          ? "The confirmation didn't go through on our side — try the link once more, or subscribe again below."
          : null;

  return (
    <div id={id} className={`${styles.box} ${compact ? styles.compact : ""}`}>
      {landedNote && (
        <p className={landed === "1" ? styles.landedOk : styles.landedBad} role="status">
          {landedNote}
        </p>
      )}
      <p className={styles.lead}>
        <b>The Saturday digest.</b> The week&apos;s chart peaks, certifications and records in one
        email, Saturdays at 18:00 London time — only in weeks something happened.
      </p>
      {phase === "sent" ? (
        <p className={styles.sent} role="status">
          Check your inbox — tap the link in the email to confirm. Nothing is sent until you do.
        </p>
      ) : (
        <form className={styles.form} onSubmit={submit} noValidate>
          <label className={styles.srOnly} htmlFor={`${id ?? "subscribe"}-email`}>
            Email address
          </label>
          <input
            id={`${id ?? "subscribe"}-email`}
            className={styles.input}
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            aria-invalid={phase === "error" ? true : undefined}
            aria-describedby={phase === "error" ? `${id ?? "subscribe"}-error` : undefined}
          />
          {/* Honeypot: off-screen, unlabelled to assistive tech, never filled by a person. */}
          <div className={styles.trap} aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </div>
          <button type="submit" className={styles.button} disabled={phase === "sending"}>
            {phase === "sending" ? "Sending…" : "Subscribe"}
          </button>
          {phase === "error" && message && (
            <p id={`${id ?? "subscribe"}-error`} className={styles.error} role="alert">
              {message}
            </p>
          )}
        </form>
      )}
      <p className={styles.fine}>One email a week at most. Unsubscribe in one tap, from any of them.</p>
    </div>
  );
}
