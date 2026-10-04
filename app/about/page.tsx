import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Revathi Blush",
  description: "Discover the story and creative direction behind Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <main>
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">ABOUT REVATHI BLUSH</p>
          <h1>A studio and academy<br /><em>with one point of view.</em></h1>
          <p>Makeup should feel polished without losing the person underneath it. Training should feel practical enough to use beyond the classroom.</p>
        </div>
        <div className="about-hero-image" data-cursor="VIEW">
          <img src="https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1600&q=82" alt="Makeup artistry reference" />
          <span>REVATHI BLUSH · HYDERABAD</span>
        </div>
      </section>

      <section className="inner-section about-story">
        <Reveal>
          <div>
            <p className="eyebrow">THE BRAND</p>
            <h2>Beauty work,<br />treated like a craft.</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="about-story-copy">
            <p>Revathi Blush brings bridal artistry and professional makeup education under one brand in LB Nagar, Hyderabad.</p>
            <p>The website is designed around the same idea: fewer gimmicks, stronger detail, and a clear focus on the work itself.</p>
            <Link href="/gallery" className="text-link">See the visual work →</Link>
          </div>
        </Reveal>
      </section>

      <section className="about-principles">
        {[
          ["01","Personal","Every face, event and learner starts from a different place."],
          ["02","Practical","Technique matters most when it can be repeated confidently."],
          ["03","Polished","Details should feel intentional from preparation through finish."],
          ["04","Progressive","The goal is visible improvement, not just completing a class."],
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
        <div><img src="https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1400&q=82" alt="Makeup academy training reference" loading="lazy" /></div>
        <div><img src="https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1400&q=82" alt="Bridal beauty detail reference" loading="lazy" /></div>
      </section>

      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">EXPLORE REVATHI BLUSH</p><h2>Choose the academy or the studio.</h2></div>
        <div className="booking-actions">
          <Link className="button button-light" href="/courses">Explore courses</Link>
          <Link className="button button-outline-light" href="/bridal-studio">Bridal studio</Link>
        </div>
      </section>
    </main>
  );
}
