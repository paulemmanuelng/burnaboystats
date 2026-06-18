"use client"; // runs in the browser (tracks input + submits)

import { useState } from "react";

// Posts to our own server route, which forwards to email — so the address
// is never exposed in the browser.
const ENDPOINT = "/api/contact";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
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
        <label className="label" htmlFor="name">Name</label>
        <input className="input" id="name" name="name" value={form.name} onChange={update} required />
      </div>
      <div className="field">
        <label className="label" htmlFor="email">Email</label>
        <input
          className="input"
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          required
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="message">Message</label>
        <textarea
          className="textarea"
          id="message"
          name="message"
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
        style={{ alignSelf: "flex-start" }}
        disabled={sending}
      >
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
