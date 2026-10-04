import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Courses, Admissions & Bridal",
  description: "Frequently asked questions about Revathi Blush Studio & Academy courses, admissions, bridal enquiries and location in LB Nagar, Hyderabad.",
};

const faqs = [
  { question: "Can beginners enquire about the academy?", answer: "Yes. Share your current experience level when you enquire and the academy can guide you toward the most suitable program." },
  { question: "What are the current course fees?", answer: "Fees are not fixed on the website. Contact the academy for the latest fee and batch information for the course you are interested in." },
  { question: "How long are the courses?", answer: "Duration depends on the selected program. The academy can confirm the current schedule, number of sessions and batch format before enrolment." },
  { question: "Is practical training included?", answer: "The academy is presented around practical learning, but the exact practical format and syllabus should be confirmed for the batch you plan to join." },
  { question: "Will I receive a certificate?", answer: "Certificate details can vary by program. Ask the academy to confirm what is included in the current batch before enrolling." },
  { question: "Where is Revathi Blush located?", answer: "Revathi Blush Studio & Academy is in Shivapuri Colony, LB Nagar, Hyderabad 500074." },
  { question: "How do I enquire about bridal makeup?", answer: "Send your event date, event type and venue area on WhatsApp so the studio can check availability and discuss the look." },
  { question: "How can I contact the academy?", answer: "Call or WhatsApp +91 70956 57382, or use the enquiry form on the Contact page." },
];

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="FAQ" title="Useful answers before you message us." copy="Courses, admissions, bridal bookings and visiting the studio." />
      <section className="inner-section faq-page-layout">
        <div className="faq-page-intro">
          <p className="eyebrow">QUICK ANSWERS</p>
          <h2>Still unsure after reading?</h2>
          <p>Send the academy a WhatsApp message with the course or service you are interested in.</p>
          <a className="text-link" href="https://wa.me/917095657382" target="_blank" rel="noreferrer">Ask on WhatsApp →</a>
        </div>
        <FaqAccordion items={faqs} />
      </section>
      <section className="inner-cta">
        <div><p className="eyebrow eyebrow-light">READY TO ENQUIRE?</p><h2>Go straight to admissions or bridal booking.</h2></div>
        <Link className="button button-light" href="/contact">Contact Revathi Blush</Link>
      </section>
    </main>
  );
}
