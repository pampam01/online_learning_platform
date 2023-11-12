import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";

const CourseCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      className={cn(
        `w-full max-w-xs bg-gray-800 border border-gray-200 rounded shadow m-2 flex  flex-col justify-between`
      )}
    >
      {children}
    </Card>
  );
};

const Header = ({
  urlImage,
  name,
  id,
}: {
  urlImage: string;
  name: string;
  id?: number;
}) => {
  return (
    <CardHeader>
      <Image
        src={urlImage}
        alt={name}
        width="200"
        height="200"
        className={cn(`rounded-t-lg w-auto h-auto object-cover  aspect-video`)}
      />
    </CardHeader>
  );
};

const Body = ({ children, title }: { children: string; title: string }) => {
  return (
    <CardContent className={cn(`px-5 pb-5 h-full`)}>
      <h5 className="text-xl font-semibold tracking-tight text-white">
        {title.substring(0, 20)}...
      </h5>
      <p className="text-white text-sm pb-5">{children.substring(0, 100)}...</p>
    </CardContent>
  );
};

const Footer = ({
  price,
  //   handleAddChart,
  id,
}: {
  price: number;
  //   handleAddChart: (id: number) => void;
  id?: number;
}) => {
  return (
    <CardFooter className={cn(`flex items-center justify-between px-5 pb-5 `)}>
      <span className="text-sm font-bold text-white ">
        {" "}
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
      <Button
        className="bg-blue-700 text-sm"
        // onClick={() => handleAddChart(id)}
      >
        Add to Cart
      </Button>
    </CardFooter>
  );
};

CourseCard.Header = Header;
CourseCard.Body = Body;
CourseCard.Footer = Footer;
export default CourseCard;
