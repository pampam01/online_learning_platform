import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <section className="h-[100vh] pt-12">
      <h1>Buttons</h1>
      <div className="flex gap-x-2 pt-4">
        <Button>default</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"link"}>link</Button>
      </div>
    </section>
  );
};

export default page;
