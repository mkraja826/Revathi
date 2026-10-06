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
        <h1>Reviews and<br /><em>student experiences.</em></h1>
        <p>See current public reviews on Google and learn more about the academy experience.</p>
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
            <h2>See the student learning journey.</h2>
            <p>See how students move from learning the basics to practice, improvement and presentation.</p>
            <Link href="/student-stories" className="text-link">View student journey →</Link>
          </div>
        </Reveal>
      </section>

      <section className="review-types">
        {[
          ["01","Academy experience","Feedback about learning, practice and the academy experience."],
          ["02","Skill progress","How students develop their skills through practice."],
          ["03","Bridal clients","Feedback from bridal and beauty service clients."],
        ].map(([n,title,copy], i) => (
          <Reveal key={title} delay={i*60}>
            <article><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>
          </Reveal>
        ))}
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">EXPERIENCED REVATHI BLUSH?</p><h2>Share your experience on Google.</h2></div>
        <a className="button button-light" href="https://www.google.com/maps/search/?api=1&query=Revathi%20Blush%20Studio%20%26%20Academy%20LB%20Nagar%20Hyderabad" target="_blank" rel="noreferrer">Open Google profile</a>
      </section>
    </main>
  );
}
