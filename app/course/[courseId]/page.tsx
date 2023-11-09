"use client";
import { CourseList } from "@/components/Accordion";
import Banner from "@/components/Banner";
import { useParams } from "next/navigation";

const SingleCoursePage = () => {
  const { courseId } = useParams();
  return (
    <main>
      <Banner />
      <p>{courseId}</p>
      {/* <CourseList /> */}
    </main>
  );
};

export default SingleCoursePage;
