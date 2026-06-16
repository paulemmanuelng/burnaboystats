"use client"; // runs in the browser because it tracks what you type

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Update the matching field as the user types.
  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // On submit we just show a thank-you (a fan site has no server to send to).
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success">
        <h3>Thanks, {form.name || "friend"}! 🎉</h3>
        <p>
          Your message has been received. (This is a demo form on a fan site, so
          it isn’t actually delivered anywhere — but we appreciate you stopping by!)
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">Name</label>
        <input
          className="input"
          id="name"
          name="name"
          value={form.name}
          onChange={update}
          required
        />
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
      <button type="submit" className="btn btnPrimary" style={{ alignSelf: "flex-start" }}>
        Send message
      </button>
    </form>
  );
}
