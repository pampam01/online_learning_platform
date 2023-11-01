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
    <div className=" w-auto h-auto max-w-xs shadow-2xl transition ease-in-out hover:scale-95 md:max-w-xl m-5  xl:max-w-xl">
      <Card className=" bg-[#151030] text-white md:flex md:flex-row">
        <div className="flex justify-center p-8 items-center">
          <Image src={Gambar} alt="Gambar" className="object-cover" />
        </div>
        <div className="pl-0 pr-6">
          <CardContent className="flex flex-col py-0 pt-5 px-0 w-full ">
            <div className="flex justify-between w-full md:gap-x-4">
              <div className="flex gap-1 h-4 items-center justify-center">
                <div className="w-10 h-full rounded-full grid place-items-center ">
                  <Play size={30} />
                </div>
                <span className="text-sm pt-3">leasons</span>
              </div>
              <Badge className="ml-4 mr-0 bg-white text-sm text-black text-center hover:text-white hover:bg-sky-600 md:mt-1">
                new course
              </Badge>
            </div>
            <div className="block xs:ml-3 mt-3">
              <b className="text-2xl font-bold  inline my-8 leading-tight pb-0 mb-3 mt-1 ">
                Belajar JS pemula
              </b>
              <p className="text-white text-muted text-xs leading-4 overflow-hidden">
                belajar javascript dari awal sampai akhir.
              </p>
            </div>
            <div className="h-[50px] w-full mt-3">
              <hr className="bg-black h-0.5" />
              <div className="flex justify-between items-center h-full">
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="flex justify-center items-center ">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="Gambar"
                      className="w-6 h-6 rounded-full"
                    />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className=" font-medium leading-none text-sm ">
                      {" "}
                      Pampam
                    </p>
                    <p className="text-xs text-muted-foreground ">
                      insinyur IT
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs ">100+</p>
                  <p className="text-xs">students</p>
                </div>
              </div>
              <hr className="bg-black h-0.5" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-10 mt-4 xs:gap-20">
            <div className="flex ">
              {/* <Star fill="#ff0" className="cursor-pointer text-yellow-500" />
              <Star fill="#ff0" className="cursor-pointer text-yellow-500" />
              <Star fill="#ff0" className="cursor-pointer text-yellow-500" />
              <Star fill="#ff0" className="cursor-pointer text-yellow-500" /> */}
              <h1 className="text-white font-bold  text-sm">
                {(100000).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h1>
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
