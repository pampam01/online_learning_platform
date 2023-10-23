import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Gambar from "@/public/images/contoh.png";
import { Play } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

type CardProps = () => any;
interface ImageProps {
  src: string;
  alt: string;
  width: string;
}
const CardComponent: CardProps = () => {
  return (
    <Card className="bg-white dark text-black w-full max-w-[340px] max-h-[800px] shadow-lg transform  hover:scale-105">
      <Image src={Gambar} width={340} height={68} alt="Gambar" />
      <CardContent className="flex flex-col gap-10 pt-8">
        <div className="flex justify-between">
          <div className="flex gap-2 h-8 items-center justify-center">
            <div className="w-8 h-full rounded-full grid place-items-center bg-primary">
              <Play />
            </div>
            <span>leasons</span>
          </div>
          <Badge variant={"default"}>new course</Badge>
        </div>
        <b className="text-1xl leading-[30px] inline-block">Belajar JS</b>
        <div className="h-[98px]">
          <hr className="bg-black h-0.5" />
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="Gambar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-medium leading-none"> Ebou joe</p>
                <p className="text-sm text-muted-foreground "> Ebou joe</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p>100+</p>
              <p>students</p>
            </div>
          </div>
          <hr className="bg-black h-0.5" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="text-black bg-primary ">enrol now</Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
