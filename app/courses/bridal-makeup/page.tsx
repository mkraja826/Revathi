import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/courses/bridal-makeup/" },
  title: "Bridal Makeup Course",
  description: "Explore bridal makeup training at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <CourseDetailPage
      eyebrow="COURSE 02"
      title="Bridal Makeup"
      intro="Learn bridal makeup techniques for long wear, photography and complete bridal looks."
      image="https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Bridal makeup course reference"
      suitedFor="Students and makeup artists who want to improve their bridal makeup skills."
      focus={["Bridal skin preparation","Complexion & long-wear finish","Eyes, lashes & detailing","Look planning for outfit and event"]}
    />
  );
}
