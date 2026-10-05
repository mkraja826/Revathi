import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/about/" },
  title: "About Revathi Blush",
  description: "Discover the story and creative direction behind Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <main>
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">ABOUT REVATHI BLUSH</p>
          <h1>Bridal makeup and beauty training<br /><em>under one brand.</em></h1>
          <p>Revathi Blush offers bridal makeup services and practical beauty training in LB Nagar, Hyderabad.</p>
        </div>
        <div className="about-hero-image">
          <img src="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1600&q=82" alt="Makeup artist at work" fetchPriority="high" />
          <span>REVATHI BLUSH · HYDERABAD</span>
        </div>
      </section>

      <section className="inner-section about-story">
        <Reveal>
          <div>
            <p className="eyebrow">THE BRAND</p>
            <h2>Professional beauty services<br />and practical training.</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="about-story-copy">
            <p>Revathi Blush brings bridal artistry and professional makeup education under one brand in LB Nagar, Hyderabad.</p>
            <p>The focus is simple: clear technique, personal service and a polished result.</p>
            <Link href="/gallery" className="text-link">View the gallery →</Link>
          </div>
        </Reveal>
      </section>

      <section className="about-principles">
        {[
          ["01","Personal","Every client and student has different needs and goals."],
          ["02","Practical","Learn techniques you can practise and use with confidence."],
          ["03","Polished","Careful preparation and finishing help create a complete look."],
          ["04","Progressive","The goal is to improve your skills through learning and practice."],
        ].map(([n,title,copy], index) => (
          <Reveal key={title} delay={index * 60}>
            <article>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="about-image-pair">
        <div><img src="https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1400&q=82" alt="Makeup academy training" loading="lazy" /></div>
        <div><img src="https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1400&q=82" alt="Bridal beauty detail" loading="lazy" /></div>
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">EXPLORE REVATHI BLUSH</p><h2>Explore courses or bridal services.</h2></div>
        <div className="booking-actions">
          <Link className="button button-light" href="/courses">Explore courses</Link>
          <Link className="button button-outline-light" href="/bridal-studio">Bridal studio</Link>
        </div>
      </section>
    </main>
  );
}
