import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/testimonials/" },
  title: "Reviews & Student Stories",
  description: "Explore public feedback and student stories from Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <main>
      <section className="reviews-hero">
        <p className="eyebrow">REVIEWS / STORIES</p>
        <h1>Experiences that<br /><em>speak for themselves.</em></h1>
        <p>For current public feedback, visit the Revathi Blush Google profile or explore the student journey through the academy.</p>
      </section>

      <section className="inner-section reviews-status">
        <Reveal>
          <div className="review-score review-score-textual">
            <span>REVIEWS</span>
            <div>
              <strong>See current Google feedback</strong>
              <p>Public ratings and review details can change over time, so the latest feedback is best viewed directly on Google.</p>
              <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Revathi%20Blush%20Studio%20%26%20Academy%20LB%20Nagar%20Hyderabad" target="_blank" rel="noreferrer">Open Google profile →</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="reviews-copy">
            <p className="eyebrow">STUDENT JOURNEY</p>
            <h2>Progress is part of the story.</h2>
            <p>Explore how the academy experience moves from learning and practice toward stronger technique, presentation and confidence.</p>
            <Link href="/student-stories" className="text-link">Student stories →</Link>
          </div>
        </Reveal>
      </section>

      <section className="review-types">
        {[
          ["01","Academy experience","Learning, practice and the classroom experience."],
          ["02","Skill progress","How confidence and consistency build over time."],
          ["03","Bridal clients","Feedback connected to real service experiences."],
        ].map(([n,title,copy], i) => (
          <Reveal key={title} delay={i*60}>
            <article><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>
          </Reveal>
        ))}
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">EXPERIENCED REVATHI BLUSH?</p><h2>Your feedback helps the next person decide.</h2></div>
        <a className="button button-light" href="https://www.google.com/maps/search/?api=1&query=Revathi%20Blush%20Studio%20%26%20Academy%20LB%20Nagar%20Hyderabad" target="_blank" rel="noreferrer">Open Google profile</a>
      </section>
    </main>
  );
}
