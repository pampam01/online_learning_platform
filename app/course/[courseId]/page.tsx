"use client";
import { redirect, useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SingleCoursePage = (): React.JSX.Element => {
  const { courseId } = useParams();
  return <div>Course with ID: {courseId}</div>;
};

export default SingleCoursePage;
