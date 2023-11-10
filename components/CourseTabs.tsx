import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CourseAccordion } from "./CourseAccordion";
import Comments from "./Comments";

const CourseTabs = ({ className }: { className?: string }) => {
  return (
    <Tabs defaultValue="course-content" className={cn(`w-full ${className}`)}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="course-content">Course Contents</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="course-content">
        <CourseAccordion />
      </TabsContent>
      <TabsContent value="reviews">
        <Comments />
      </TabsContent>
    </Tabs>
  );
};

export default CourseTabs;
