"use client";
import { CourseAccordion } from "@/components/CourseAccordion";
import Banner from "@/components/Banner";
import CourseTabs from "@/components/CourseTabs";
import { useParams } from "next/navigation";

const SingleCoursePage = () => {
  const { courseId } = useParams();
  return (
    <main>
      <Banner />
      <p>{courseId}</p>
      <div className="flex flex-row gap-x-4">
        <CourseTabs className="flex-[3] mt-6" />
        <div className="flex-[2]"></div>
      </div>
    </main>
  );
};

export default SingleCoursePage;
