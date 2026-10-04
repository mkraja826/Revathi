import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "Bridal Makeup Course",
  description: "Explore bridal makeup training at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <CourseDetailPage
      eyebrow="COURSE 02"
      title="Bridal Makeup"
      intro="A bridal-focused path for artists who want to understand finish, detail, longevity and the full look."
      image="https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Bridal makeup course reference"
      suitedFor="Students and working artists who want to strengthen their bridal work."
      focus={["Bridal skin preparation","Complexion & long-wear finish","Eyes, lashes & detailing","Look planning for outfit and event"]}
    />
  );
}
