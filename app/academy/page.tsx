import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
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
          <h1>Learn the work.<br /><em>Then make it yours.</em></h1>
          <p>Professional beauty training in LB Nagar for learners who want practical technique, not just theory.</p>
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
          <p className="eyebrow">HOW LEARNING SHOULD FEEL</p>
          <h2>Clear enough to follow.<br />Practical enough to remember.</h2>
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
        <div>
          <p className="eyebrow eyebrow-light">CURRENT LEARNING PATHS</p>
          <h2>Makeup. Bridal. Hair.<br />Draping. Masterclasses.</h2>
        </div>
        <Link className="button button-light" href="/courses">See all courses</Link>
      </section>

      <section className="inner-section academy-note">
        <div className="academy-note-image">
          <img src="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1500&q=82" alt="Professional makeup learning reference" loading="lazy" />
        </div>
        <Reveal>
          <div>
            <p className="eyebrow">ADMISSIONS</p>
            <h2>Batch details are shared directly.</h2>
            <p>Course duration, current fees, batch dates and certificate details can vary by program. The academy can confirm the latest information before you enrol.</p>
            <a className="text-link" href="https://wa.me/917095657382?text=Hi%20Revathi%20Blush%2C%20please%20share%20current%20academy%20batch%20details." target="_blank" rel="noreferrer">Ask for current batch details →</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
