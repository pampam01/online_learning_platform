import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col h-[100vh] pt-12 gap-y-2">
      <h1>Buttons</h1>
      <div className="flex gap-x-2">
        <Button>default</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"link"}>link</Button>
      </div>
      <h1>Dark Mode</h1>
      <ModeToggle />
    </section>
  );
};

export default page;
