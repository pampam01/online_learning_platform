import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DownloadIcon, LockIcon, Video } from "lucide-react";
import Link from "next/link";
import { MdAssignment } from "react-icons/md";

export function CourseList() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Berkenalan Dengan Dunia Web Development
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-y-2">
            <Link
              href="#"
              className="flex flex-row justify-between group hover:text-primary/80"
            >
              <div className="flex flex-row gap-x-2">
                <Video size={20} />
                <p className="group-hover:underline">Apa itu HTML?</p>
              </div>
              <p>03:30</p>
            </Link>
            <Link
              href="#"
              className="flex flex-row justify-between group hover:text-primary/80"
            >
              <div className="flex flex-row gap-x-2">
                <Video size={20} />
                <p className="group-hover:underline">Apa itu CSS?</p>
              </div>
              <p>12:06</p>
            </Link>
            <Link
              href="#"
              className="flex flex-row justify-between group hover:text-primary/80"
            >
              <div className="flex flex-row gap-x-2">
                <MdAssignment size={20} />
                <p className="group-hover:underline">Download Modul</p>
              </div>
              {/* <DownloadIcon size={20} /> */}
              <LockIcon size={20} />
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
