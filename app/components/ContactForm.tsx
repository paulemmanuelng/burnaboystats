"use client"; // runs in the browser (tracks input + submits)

import { useState, type ChangeEvent, type FormEvent } from "react";

// The recipient address is base64-encoded so it never appears as readable
// text in the page source — spam bots that scrape for "name@domain" patterns
// won't find it. It's decoded in the browser only at the moment of sending.
const ENCODED_TO = "dWtwYWthZW1tYW51ZWxAZ21haWwuY29t";

/**
 * The contact form.
 *
 * `idPrefix` exists because the desktop and mobile layouts each render their
 * own copy — both sit in the DOM at once, one CSS-hidden — and two inputs
 * sharing an id would make a <label for> ambiguous. The hidden copy is
 * `display: none`, so it is out of the tab order entirely.
 *
 * `stacked` sends the submit button full-width, which is how the mobile screen
 * draws it.
 */
export default function ContactForm({
  idPrefix = "",
  stacked = false,
}: {
  idPrefix?: string;
  stacked?: boolean;
} = {}) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const endpoint = "https://formsubmit.co/ajax/" + atob(ENCODED_TO);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New message from Burna Boy Stats",
          _template: "table",
          _captcha: "false",
        }),
      });
      const out: { success?: string; message?: string } = await res
        .json()
        .catch(() => ({}));
      if (!res.ok || out.success !== "true") {
        throw new Error(out.message || "Request failed");
      }
      setSent(true);
    } catch {
      setError("Something went wrong — please try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="success">
        <h3>Thanks, {form.name || "friend"}! 🎉</h3>
        <p>Your message has been sent — it&apos;ll land in our inbox. We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor={`${idPrefix}name`}>Name</label>
        <input
          className="input"
          id={`${idPrefix}name`}
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={update}
          required
        />
      </div>
      <div className="field">
        <label className="label" htmlFor={`${idPrefix}email`}>Email</label>
        <input
          className="input"
          id={`${idPrefix}email`}
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={update}
          required
        />
      </div>
      <div className="field">
        <label className="label" htmlFor={`${idPrefix}message`}>Message</label>
        <textarea
          className="textarea"
          id={`${idPrefix}message`}
          name="message"
          placeholder="What's on your mind?"
          value={form.message}
          onChange={update}
          required
        />
      </div>
      {error && (
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{error}</p>
      )}
      <button
        type="submit"
        className="btn btnPrimary"
        style={stacked ? { width: "100%" } : { alignSelf: "flex-start" }}
        disabled={sending}
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
