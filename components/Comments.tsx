import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Comments() {
  return (
    <section>
      <div>
        <Avatar className="w-6 h-6">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="instructor-image"
            className="cursor-pointer"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
}
