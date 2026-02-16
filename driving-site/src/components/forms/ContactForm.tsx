"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  area: "",
  transmission: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const token = (window as Window & { turnstile?: { getResponse?: () => string } }).turnstile?.getResponse?.() || "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Thanks for your enquiry. We will respond within one working day.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage("We could not send your request. Please call or WhatsApp instead.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid" style={{ gap: "16px" }}>
      <div className="form-field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" value={form.phone} onChange={handleChange} required autoComplete="tel" />
      </div>
      <div className="form-field">
        <label htmlFor="area">Area / postcode</label>
        <input id="area" name="area" value={form.area} onChange={handleChange} required />
      </div>
      <div className="form-field">
        <label htmlFor="transmission">Transmission</label>
        <select id="transmission" name="transmission" value={form.transmission} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
          <option value="Both">Either</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} required />
      </div>
      <div>
        <div className="cf-turnstile" data-sitekey="[CLOUDFLARE_TURNSTILE_SITE_KEY]"></div>
      </div>
      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>
      {message && (
        <p role="status" aria-live="polite" style={{ color: status === "error" ? "#dc2626" : "#0f766e" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
