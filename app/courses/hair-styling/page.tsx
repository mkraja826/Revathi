import type { Metadata } from "next";
import CourseDetailPage from "@/components/CourseDetailPage";

export const metadata: Metadata = {
  title: "Hair Styling Course",
  description: "Explore professional hair styling training at Revathi Blush Studio & Academy in LB Nagar, Hyderabad.",
};

export default function Page() {
  return (
    <CourseDetailPage
      eyebrow="COURSE 03"
      title="Hair Styling"
      intro="A practical styling course for bridal and occasion looks, from prep to a polished finish."
      image="https://images.unsplash.com/photo-1773688199710-040ad7ddac18?auto=format&fit=crop&w=1600&q=82"
      imageAlt="Hair and makeup styling reference"
      suitedFor="Artists who want to add hair styling to their makeup service skill set."
      focus={["Hair preparation & sectioning","Volume, texture & control","Updos and occasion styling","Finishing & durability"]}
    />
  );
}
