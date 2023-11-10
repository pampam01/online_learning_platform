import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MdOutlineThumbDown, MdOutlineThumbUp, MdReport } from "react-icons/md";
import { Textarea } from "./ui/textarea";

export default function Comments() {
  return (
    <section className="flex flex-col">
      {/* comment header */}
      <div className="flex flex-row gap-x-2 items-center mt-2">
        <Avatar className="w-8 h-8">
          <AvatarImage
            src="https://wallpaperaccess.com/full/1978457.png"
            alt="instructor-image"
            className="cursor-pointer"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-[0.75rem]">muzan kibutsxx</p>
          <p className="text-[0.625rem]">3 days ago</p>
        </div>
      </div>

      {/* comment body */}
      <p className="mt-2">
        このコースはひどい。24時間座って何もしないよりも、人を倒すゲームをやる方がましだと思うな...
      </p>
      {/* comment footer */}
      <div className="flex flex-row gap-x-4 border-y-2 py-2 mt-2 justify-between text-sm">
        <div className="flex flex-row gap-x-4">
          <div className="flex flex-row items-center gap-x-2 hover:text-primary cursor-pointer">
            <MdOutlineThumbUp size={20} />
            <p>221</p>
          </div>
          <div className="flex flex-row items-center gap-x-2 hover:text-primary cursor-pointer">
            <MdOutlineThumbDown size={20} />
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-1 hover:text-red-300 cursor-pointer">
          <MdReport size={20} />
          <p>Report</p>
        </div>
      </div>

      {/* comment textbox */}
      <div>
        <Textarea
          placeholder="Tulis review anda..."
          className="focus:outline-none mt-2"
        />
      </div>
    </section>
  );
}
