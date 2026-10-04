import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Student Stories | Revathi Blush Academy",
  description: "Explore the student-learning journey at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

const stages = [
  ["01","Start","Understand the tools, products and basic control behind the work."],
  ["02","Practice","Repeat techniques with guidance until the process feels less uncertain."],
  ["03","Refine","Notice the small things: balance, finish, speed and consistency."],
  ["04","Present","Build work that can be photographed, discussed and shown professionally."],
];

export default function Page() {
  return (
    <main>
      <section className="student-hero">
        <div className="student-hero-copy">
          <p className="eyebrow">STUDENT JOURNEY</p>
          <h1>Progress looks<br /><em>different on everyone.</em></h1>
          <p>The academy experience is not only about the final look. It is about becoming more certain with every repetition.</p>
        </div>
        <div className="student-hero-image">
          <img src="https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1600&q=82" alt="Makeup training reference" />
          <span>ACADEMY / PRACTICE</span>
        </div>
      </section>

      <section className="inner-section student-progress">
        <Reveal>
          <p className="eyebrow">THE LEARNING ARC</p>
          <h2>Not overnight.<br />Built step by step.</h2>
        </Reveal>
        <div className="student-stage-list">
          {stages.map(([number,title,copy], index) => (
            <Reveal key={title} delay={index * 55}>
              <article>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="student-editorial">
        <div><img src="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1400&q=82" alt="Makeup practice reference" loading="lazy" /></div>
        <div><img src="https://images.unsplash.com/photo-1773688199710-040ad7ddac18?auto=format&fit=crop&w=1400&q=82" alt="Makeup technique reference" loading="lazy" /></div>
        <div className="student-editorial-note">
          <p className="eyebrow">STUDENT WORK</p>
          <h2>Real student portfolios can replace these references as the gallery grows.</h2>
          <Link className="text-link" href="/gallery">View gallery →</Link>
        </div>
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">START YOUR OWN JOURNEY</p><h2>Ask which course fits your current level.</h2></div>
        <a className="button button-light" href="https://wa.me/917095657382?text=Hi%20Revathi%20Blush%2C%20I%20want%20help%20choosing%20a%20course." target="_blank" rel="noreferrer">Ask the academy</a>
      </section>
    </main>
  );
}
