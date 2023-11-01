"use client";
import { redirect, useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const SingleCoursePage = () => {
  const { courseId } = useParams();
  return <div>Course with ID: {courseId}</div>;
};

export default SingleCoursePage;
