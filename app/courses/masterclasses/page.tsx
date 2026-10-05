import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/courses/masterclasses/" },
  title: "Makeup Masterclasses",
  description: "Explore focused makeup and beauty masterclasses at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <CourseDetailPage
      eyebrow="COURSE 05"
      title="Masterclasses"
      intro="Short-format sessions for artists who want to focus deeply on one technique or refresh an existing skill."
      image="https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Makeup masterclass reference"
      suitedFor="Working artists, past students and learners who prefer focused skill upgrades."
      focus={["Focused technique breakdown","Live demonstration","Guided practice","Finish, correction & refinement"]}
    />
  );
}
