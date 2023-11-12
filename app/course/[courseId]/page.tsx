"use client";
import Banner from "@/components/Banner";
import CourseTabs from "@/components/CourseTabs";
import CourseFeature from "@/components/CourseFeature";
import { useParams } from "next/navigation";
const SingleCoursePage = () => {
  const { courseId } = useParams();
  return (
    <main>
      <Banner courseId={courseId} />
      <CourseFeature className="mt-2" />
      <CourseTabs className="mt-6" />
    </main>
  );
};

export default SingleCoursePage;
