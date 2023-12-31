"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Play} from "lucide-react";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CardComponent = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        ` w-auto h-auto flex flex-col items-center justify-center max-w-xs shadow-2xl transition ease-in-out hover:scale-95 ${className}`
      )}
    >
      <Card className=" bg-[#151030] text-white ">{children}</Card>
    </div>
  );
};

interface HeaderProps {
  images: string;
  className?: string;
  widthImage?: number;
  heightImage?: number;
}
const Header = ({
  images,
  className,
  widthImage = 200,
  heightImage = 200,
}: HeaderProps) => {
  return (
    <div className={cn(`flex justify-between p-4 items-center  ${className}`)}>
      <Image
        src={images}
        alt="Gambar"
        className="object-cover w-auto h-auto aspect-video"
        width={widthImage}
        height={heightImage}
      />
    </div>
  );
};

interface BodyProps {
  title: string;
  author?: string;
  graduate?: string;
  children: string;
  icon: string;
  className?: string;
}
const Body = ({
  title,
  author,
  graduate,
  icon,
  children,
  className,
}: BodyProps) => {
  return (
    <CardContent className={cn(`flex flex-col pt-4 px-4 w-full ${className}`)}>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-1 items-center justify-center">
          <div className="w-10 h-full grid place-items-center ">
            <Play size={30} />
          </div>
          <span className="text-sm">Lesson</span>
        </div>
        <Badge className="ml-4 mr-0 bg-white text-sm text-black text-center hover:text-white hover:bg-sky-600 cursor-pointer">
          new course
        </Badge>
      </div>
      <div className="block mt-3">
        <b className="text-2xl font-bold  inline my-16 leading-tight">
          {title.substring(0, 20)}
        </b>
        <p className="text-white text-muted text-xs leading-4 overflow-hidden">
          {children.substring(0, 100)}...
        </p>
      </div>
      <div className="h-[50px] w-full mt-3">
        <hr className="bg-black h-0.5" />
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="flex justify-center items-center ">
              <AvatarImage
                src={icon}
                alt="Gambar"
                className="w-6 h-6 rounded-full"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className=" font-medium leading-none text-sm"> {author}</p>
              <p className="text-xs text-muted-foreground ">{graduate}</p>
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
  );
};

interface FooterProps {
  price: number;
  buttonText?: string | "Enroll Now";
  className?: string;
}
const Footer = ({
  price,
  buttonText = "Enroll Now",
  className,
}: FooterProps) => {
  return (
    <CardFooter
      className={cn(`flex justify-between items-center ${className}`)}
    >
      <div className="flex">
        <h1 className="text-white font-bold text-sm">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </h1>
      </div>
      <Button className="transition ease-in-out delay-150 bg-primary hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
        {buttonText}
      </Button>
    </CardFooter>
  );
};

CardComponent.Header = Header;
CardComponent.Footer = Footer;
CardComponent.Body = Body;

export default CardComponent;
