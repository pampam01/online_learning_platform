"use client";
import { CourseAccordion } from "@/components/CourseAccordion";
import Banner from "@/components/Banner";
import CourseTabs from "@/components/CourseTabs";
import { useParams } from "next/navigation";
import CardsHome from "@/components/cards/Cards";

const SingleCoursePage = () => {
  const { courseId } = useParams();
  return (
    <main>
      <Banner />
      <p>{courseId}</p>
      <div className="flex flex-row gap-x-4">
        <CourseTabs className="mt-6" />
      </div>
    </main>
  );
};

export default SingleCoursePage;
