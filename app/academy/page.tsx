import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/academy/" },
  title: "Makeup Academy in LB Nagar, Hyderabad",
  description: "Explore the learning experience, courses and admissions at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

const steps = [
  ["01","Understand","Start with products, preparation, tools and why a technique works."],
  ["02","Watch","See the technique broken down clearly before trying to repeat it."],
  ["03","Practice","Build control through guided hands-on work and correction."],
  ["04","Refine","Improve finish, speed, consistency and presentation."],
];

export default function Page() {
  return (
    <main>
      <section className="academy-hero">
        <div className="academy-hero-copy">
          <p className="eyebrow">REVATHI BLUSH ACADEMY</p>
          <h1>Learn professional beauty skills.<br /><em>Practice them with confidence.</em></h1>
          <p>Practical makeup and beauty training in LB Nagar, Hyderabad, for beginners and developing artists.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/courses">View courses</Link>
            <a className="button button-ghost" href="https://wa.me/917095657382?text=Hi%20Revathi%20Blush%2C%20I%20want%20academy%20admission%20details." target="_blank" rel="noreferrer">Ask about admissions</a>
          </div>
        </div>
        <div className="academy-hero-stack">
          <img src="https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1400&q=82" alt="Makeup training session" fetchPriority="high" />
          <img src="https://images.unsplash.com/photo-1773688199710-040ad7ddac18?auto=format&fit=crop&w=1100&q=82" alt="Makeup practice reference" />
          <span>ACADEMY / LB NAGAR</span>
        </div>
      </section>

      <section className="inner-section academy-method">
        <Reveal>
          <p className="eyebrow">HOW YOU LEARN</p>
          <h2>Clear instruction.<br />Practical learning.</h2>
        </Reveal>
        <div className="academy-step-list">
          {steps.map(([n,title,copy], index) => (
            <Reveal key={title} delay={index * 55}>
              <article>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="academy-course-band">
        <div className="academy-course-band-head">
          <div>
            <p className="eyebrow eyebrow-light">LEARNING PATHS</p>
            <h2>Choose what you want to learn.</h2>
          </div>
          <Link className="button button-light" href="/courses">See all courses</Link>
        </div>
        <div className="academy-path-links">
          {[
            ["01","Professional Makeup","/courses/professional-makeup"],
            ["02","Bridal Makeup","/courses/bridal-makeup"],
            ["03","Hair Styling","/courses/hair-styling"],
            ["04","Saree Draping","/courses/saree-draping"],
            ["05","Masterclasses","/courses/masterclasses"],
          ].map(([number,label,href]) => (
            <Link key={href} href={href}>
              <span>{number}</span>
              <strong>{label}</strong>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="inner-section academy-note">
        <div className="academy-note-image">
          <img src="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1500&q=82" alt="Professional makeup learning reference" loading="lazy" />
        </div>
        <Reveal>
          <div>
            <p className="eyebrow">ADMISSIONS</p>
            <h2>Get the latest course details.</h2>
            <p>Course duration, fees, batch dates and certificate details may vary by program. Contact the academy for the latest information before you enrol.</p>
            <a className="text-link" href="https://wa.me/917095657382?text=Hi%20Revathi%20Blush%2C%20please%20share%20current%20academy%20batch%20details." target="_blank" rel="noreferrer">Ask for current batch details →</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
