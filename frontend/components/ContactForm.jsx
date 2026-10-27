"use client";

import { useState } from "react";

const emptyForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [note, setNote] = useState({ type: "", text: "" });

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setNote({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setNote({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setNote({
      type: "success",
      text: "Thanks for reaching out. I'll reply within 24 hours.",
    });
    setForm(emptyForm);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jane Doe"
          value={form.name}
          onChange={update}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="jane@company.com"
          value={form.email}
          onChange={update}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={update}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Send message
      </button>
      <p className={`form-note${note.type ? ` ${note.type}` : ""}`} role="status" aria-live="polite">
        {note.text}
      </p>
    </form>
  );
}
