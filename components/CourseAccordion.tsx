import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { DownloadIcon, LockIcon, Video } from "lucide-react";
import Link from "next/link";
import { MdAssignment } from "react-icons/md";

export function CourseAccordion({ className }: { className?: string }) {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1"]}
      className={cn(`w-full rounded-t-lg overflow-hidden ${className}`)}
    >
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ipsam
          assumenda dolorum ducimus voluptatibus nam itaque quam, pariatur
          veritatis porro.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam
          qui esse numquam temporibus quisquam id commodi quaerat magni atque.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
