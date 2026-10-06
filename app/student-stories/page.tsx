import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/student-stories/" },
  title: "Student Stories | Revathi Blush Academy",
  description: "Explore the student-learning journey at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

const stages = [
  ["01","Start","Learn the tools, products and basic techniques."],
  ["02","Practice","Practise techniques with guidance and correction."],
  ["03","Refine","Improve balance, finish, speed and consistency."],
  ["04","Present","Learn how to present and photograph your finished work."],
];

export default function Page() {
  return (
    <main>
      <section className="student-hero">
        <div className="student-hero-copy">
          <p className="eyebrow">STUDENT JOURNEY</p>
          <h1>Learn. Practice.<br /><em>Improve.</em></h1>
          <p>Students build their skills through clear instruction, repeated practice, correction and presentation.</p>
        </div>
        <div className="student-hero-image">
          <img src="https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1600&q=82" alt="Makeup training session" fetchPriority="high" />
          <span>ACADEMY / PRACTICE</span>
        </div>
      </section>

      <section className="inner-section student-progress">
        <Reveal>
          <p className="eyebrow">HOW SKILLS DEVELOP</p>
          <h2>Build your skills<br />step by step.</h2>
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
        <div><img src="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1400&q=82" alt="Makeup practice session" loading="lazy" /></div>
        <div><img src="https://images.unsplash.com/photo-1773688199710-040ad7ddac18?auto=format&fit=crop&w=1400&q=82" alt="Makeup technique detail" loading="lazy" /></div>
        <div className="student-editorial-note">
          <p className="eyebrow">STUDENT WORK</p>
          <h2>Practise your skills and improve your finished work.</h2>
          <Link className="text-link" href="/gallery">View gallery →</Link>
        </div>
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">INTERESTED IN A COURSE?</p><h2>Find a course that suits your current experience.</h2></div>
        <a className="button button-light" href="https://wa.me/917095657382?text=Hi%20Revathi%20Blush%2C%20I%20want%20help%20choosing%20a%20course." target="_blank" rel="noreferrer">Get course advice</a>
      </section>
    </main>
  );
}
