import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact & Admissions | LB Nagar",
  description: "Contact Revathi Blush Studio & Academy in Shivapuri Colony, LB Nagar, Hyderabad for course admissions and bridal enquiries.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT / ADMISSIONS"
        title="Come by. Call. Or send a quick WhatsApp."
        copy="Revathi Blush Studio & Academy · Shivapuri Colony, LB Nagar, Hyderabad 500074."
      />

      <section className="inner-section contact-layout">
        <div className="contact-details">
          <p className="eyebrow">STUDIO DETAILS</p>
          <h2>Revathi Blush<br />Studio & Academy</h2>

          <div className="contact-rule">
            <span>01</span>
            <div><small>PHONE / WHATSAPP</small><a href="tel:+917095657382">+91 70956 57382</a></div>
          </div>
          <div className="contact-rule">
            <span>02</span>
            <div><small>LOCATION</small><p>Shivapuri Colony<br />LB Nagar, Hyderabad 500074</p></div>
          </div>
          <div className="contact-rule">
            <span>03</span>
            <div><small>ENQUIRIES</small><p>Academy admissions · Course information · Bridal bookings</p></div>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="https://wa.me/917095657382" target="_blank" rel="noreferrer">Open WhatsApp</a>
            <a className="button button-ghost" href="https://www.google.com/maps/search/?api=1&query=Revathi%20Blush%20Studio%20%26%20Academy%20LB%20Nagar%20Hyderabad" target="_blank" rel="noreferrer">Get directions ↗</a>
          </div>
        </div>

        <EnquiryForm />
      </section>

      <section className="contact-photo-band">
        <img src="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1800&q=82" alt="Makeup studio reference" loading="lazy" />
        <div><span>REVATHI BLUSH</span><strong>LB Nagar · Hyderabad</strong></div>
      </section>
    </main>
  );
}
