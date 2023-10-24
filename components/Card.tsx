"use client";
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
import { Play, Star, StarHalf } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { fadeIn } from "@/utils/motion";
import { Tilt } from "react-tilt";

type CardProps = () => any;

// const defaultOptions = {
//   reverse: false, // reverse the tilt direction
//   max: 35, // max tilt rotation (degrees)
//   perspective: 10000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 100, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };
const CardComponent: CardProps = () => {
  return (
    <div className="inline-block max-w-[300px] max-h-[800px] shadow-2xl transform  hover:scale-105 ">
      <Card className=" bg-[#151030] text-white ">
        <Tilt>
          <div className="flex p-8">
            <Image
              src={Gambar}
              width={270}
              height={68}
              alt="Gambar"
              className="overflow-hidden rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <CardContent className="flex flex-col gap-10 pt-8">
            <div className="flex justify-between">
              <div className="flex gap-1 h-4 items-center justify-center">
                <div className="w-10 h-full rounded-full grid place-items-center ">
                  <Play size={22} />
                </div>
                <span>leasons</span>
              </div>
              <Badge className="bg-white text-black">new course</Badge>
            </div>
            <b className="text-1xl leading-[10px] inline-block">Belajar JS</b>
            <div className="h-[50px]">
              <hr className="bg-black h-0.5" />
              <div className="flex justify-between items-center h-full">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="Gambar"
                    />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-medium leading-none">
                      {" "}
                      Ebou joe
                    </p>
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
            <div className="mx-2 flex">
              <Star fill="#ff0" className="cursor-pointer text-yellow-500" />
              <Star fill="#ff0" className="cursor-pointer text-yellow-500" />
              <Star fill="#ff0" className="cursor-pointer text-yellow-500" />
              <Star fill="#ff0" className="cursor-pointer text-yellow-500" />
            </div>

            <Button className="text-white bg-sky-600 rounded-xl">
              enrol now
            </Button>
          </CardFooter>
        </Tilt>
      </Card>
    </div>
  );
};

export default CardComponent;
