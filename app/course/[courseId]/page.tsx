import Banner from "@/components/Banner";
import CourseTabs from "@/components/CourseTabs";
import CourseFeature from "@/components/CourseFeature";
const SingleCoursePage = () => {
  return (
    <main>
      <Banner />
      <CourseFeature className="mt-2" />
      <CourseTabs className="mt-6" />
    </main>
  );
};

export default SingleCoursePage;
