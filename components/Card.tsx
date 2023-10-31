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

type CardProps = () => JSX.Element;

const CardComponent: CardProps = () => {
  return (
    <div className=" w-auto h-auto max-w-xs shadow-2xl transition ease-in-out hover:scale-95 md:max-w-xl m-5 ">
      <Card className=" bg-[#151030] text-white md:flex md:flex-row ">
        <div className="flex justify-center p-8 items-center">
          <Image
            src={Gambar}
            width={270}
            height={68}
            alt="Gambar"
            className=""
          />
        </div>
        <div>
          <CardContent className="flex flex-col gap-10 pt-8">
            <div className="flex justify-between">
              <div className="flex gap-1 h-4 items-center justify-center">
                <div className="w-10 h-full rounded-full grid place-items-center ">
                  <Play size={30} />
                </div>
                <span className="text-sm pt-3">leasons</span>
              </div>
              <Badge className="bg-white text-black hover:text-white hover:bg-sky-600 md:mt-1">
                new course
              </Badge>
            </div>
            <b className="text-1xl leading-[10px] inline-block">
              Belajar JS lorem100
            </b>
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

            <Button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              enrol now
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
