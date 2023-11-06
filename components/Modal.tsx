import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Input } from "./ui/input";
export default function Modal() {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-lg font-medium leading-6 text-center">
          Login
        </DialogTitle>
      </DialogHeader>
      <div className="flex flex-col mt-4">
        <div className="flex flex-col gap-y-6">
          <Input
            type="text"
            name="username"
            autoCapitalize="words"
            placeholder="Username"
            className="border-2 py-2 px-4 rounded-lg w-full focus:outline-none focus:border-primary/50"
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            className="border-2 py-2 px-4 rounded-lg w-full focus:outline-none focus:border-primary/50"
          />
          <div className="flex justify-between items-center w-full">
            <Link
              href="/"
              className="flex justify-center underline hover:text-blue-800"
            >
              i already have an account
            </Link>
            <Button type="submit">Sign up</Button>
          </div>
        </div>
        <p className="text-center">or</p>
        <div className="flex flex-col gap-y-2 py-3">
          <Button
            variant={"destructive"}
            className="py-2 px-4 w-full flex items-center justify-center gap-x-2"
          >
            <AiFillGoogleCircle size={30} />
            Login via Google
          </Button>
          <Button className="py-2 px-4 w-full flex items-center justify-center gap-x-2">
            <AiFillFacebook size={30} />
            Login via Facebook
          </Button>
          <Button
            variant={"secondary"}
            className="py-2 px-4 w-full flex items-center justify-center gap-x-2"
          >
            <AiFillGithub size={30} />
            Login via Github
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}
