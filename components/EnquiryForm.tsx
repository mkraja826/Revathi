"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm() {
  const [type, setType] = useState("Academy admission");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    const text = [
      "Hi Revathi Blush,",
      "",
      "I would like to enquire.",
      "Name: " + name,
      "Phone: " + phone,
      "Regarding: " + type,
      message ? "Message: " + message : "",
    ].filter(Boolean).join("\n");

    window.open("https://wa.me/917095657382?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-intro">
        <span>CONTACT ON WHATSAPP</span>
        <p>Fill in your details and continue to WhatsApp. No account is required.</p>
      </div>

      <label>
        <span>Your name</span>
        <input name="name" required autoComplete="name" placeholder="Name" />
      </label>

      <label>
        <span>Phone number</span>
        <input
          name="phone"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+() -]{7,20}"
          title="Enter a valid phone number"
          placeholder="+91 98765 43210"
        />
      </label>

      <fieldset>
        <legend>I am interested in</legend>
        <div className="interest-pills">
          {["Academy admission","Bridal booking","Course details","Masterclass"].map((item) => (
            <button
              key={item}
              type="button"
              className={type === item ? "is-selected" : ""}
              onClick={() => setType(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <label>
        <span>Message (optional)</span>
        <textarea name="message" rows={4} placeholder="Add any course, batch or event details" />
      </label>

      <button className="button button-primary form-submit" type="submit">Continue to WhatsApp ↗</button>
    </form>
  );
}
