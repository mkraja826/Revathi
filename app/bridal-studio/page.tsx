import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/bridal-studio/" },
  title: "Bridal Makeup Artist in LB Nagar, Hyderabad",
  description: "Explore bridal, engagement and reception makeup enquiries at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

const services = [
  ["01", "Wedding Day", "Makeup and finishing planned around the bride, outfit, jewellery, photography and event timing."],
  ["02", "Engagement", "A polished makeup look planned for your engagement style and event."],
  ["03", "Reception", "Reception makeup with attention to finish, definition and photography."],
  ["04", "Occasion", "Makeup and styling for parties, family functions and other special occasions."],
];

export default function Page() {
  return (
    <main className="bridal-page">
      <section className="bridal-page-hero">
        <img src="https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1800&q=84" alt="Bridal makeup look" fetchPriority="high" />
        <div className="bridal-page-overlay" />
        <div className="bridal-page-copy">
          <p className="eyebrow eyebrow-light">REVATHI BLUSH / BRIDAL STUDIO</p>
          <h1>Bridal makeup<br /><em>designed around you.</em></h1>
          <p>Bridal, engagement, reception and special-occasion makeup in LB Nagar, Hyderabad.</p>
          <a className="button button-light" href="https://wa.me/917095657382?text=Hi%20Revathi%20Blush%2C%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup." target="_blank" rel="noreferrer">Check availability</a>
        </div>
      </section>

      <section className="inner-section bridal-intro">
        <Reveal>
          <p className="eyebrow">PERSONALISED BRIDAL MAKEUP</p>
          <h2>Your makeup should suit<br />you, your outfit and your event.</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="bridal-intro-copy">Tell us about your event, outfit and the makeup style you prefer. The final look can then be planned around your features, comfort and occasion.</p>
        </Reveal>
      </section>

      <section className="bridal-services">
        {services.map(([index, title, copy], i) => (
          <Reveal key={title} delay={i * 60}>
            <article>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bridal-editorial">
        <div className="bridal-editorial-main">
          <img src="https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1600&q=82" alt="Bridal styling detail" loading="lazy" />
        </div>
        <div className="bridal-editorial-side">
          <img src="https://images.unsplash.com/photo-1781187009755-0cbc0c4cd2b3?auto=format&fit=crop&w=1200&q=82" alt="Bridal portrait" loading="lazy" />
          <p><span>BRIDAL NOTE</span> Share your event date, venue area and the kind of look you have in mind when enquiring.</p>
        </div>
      </section>

      <section className="bridal-portfolio">
        <div className="bridal-portfolio-heading">
          <div>
            <p className="eyebrow">BRIDAL DETAILS</p>
            <h2>Explore bridal makeup looks.</h2>
          </div>
          <Link className="text-link" href="/gallery">View full gallery →</Link>
        </div>
        <div className="bridal-portfolio-grid">
          <Link href="/gallery" className="bridal-portfolio-card bridal-portfolio-card-large">
            <img src="https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1400&q=82" alt="Bridal portrait detail" loading="lazy" />
            <span>BRIDAL PORTRAIT</span>
          </Link>
          <Link href="/gallery" className="bridal-portfolio-card">
            <img src="https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1200&q=82" alt="Bridal makeup finishing detail" loading="lazy" />
            <span>FINISHING DETAIL</span>
          </Link>
          <Link href="/gallery" className="bridal-portfolio-card">
            <img src="https://images.unsplash.com/photo-1781187009755-0cbc0c4cd2b3?auto=format&fit=crop&w=1200&q=82" alt="Bridal beauty portrait" loading="lazy" />
            <span>OCCASION LOOK</span>
          </Link>
        </div>
      </section>

      <section className="inner-cta bridal-booking">
        <div><p className="eyebrow eyebrow-light">YOUR DATE</p><h2>Check your event date.</h2></div>
        <div className="booking-actions">
          <a className="button button-light" href="https://wa.me/917095657382?text=Hi%20Revathi%20Blush%2C%20I%20want%20to%20check%20bridal%20availability." target="_blank" rel="noreferrer">WhatsApp</a>
          <Link className="button button-outline-light" href="/gallery">See gallery</Link>
        </div>
      </section>
    </main>
  );
}
