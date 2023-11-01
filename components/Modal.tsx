"use client";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function Modal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* transisi modal */}
      <Transition appear show={isOpen} as={Fragment}>
        {/* modal + full background*/}
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* bagian hitam diluar modal */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* modal */}
                <Dialog.Panel className="w-[20rem] max-w-md transform overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-900"
                  >
                    Login
                  </Dialog.Title>
                  <div className="flex flex-col mt-4 gap-y-6">
                    <input
                      type="text"
                      name="username"
                      autoCapitalize="words"
                      placeholder="Username"
                      className="border-2 py-2 px-4 rounded-lg w-full focus:outline-none focus:border-black/30"
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="border-2 py-2 px-4 rounded-lg w-full focus:outline-none focus:border-black/30"
                    />
                    <Link
                      href="/"
                      className="flex justify-center underline hover:text-blue-800"
                    >
                      Belum daftar?
                    </Link>
                    <div className="flex flex-col gap-y-2">
                      <button className="bg-red-500 hover:opacity-90 duration-100 text-[#f0f0f0] py-2 px-4 rounded-lg w-full flex items-center justify-center gap-x-2">
                        <AiFillGoogleCircle size={30} />
                        Login via Google
                      </button>
                      <button className="bg-blue-900 hover:opacity-90 duration-100 text-[#f0f0f0] py-2 px-4 rounded-lg w-full flex items-center justify-center gap-x-2">
                        <AiFillFacebook size={30} />
                        Login via Facebook
                      </button>
                      <button className="bg-[#232323] hover:opacity-90 duration-100 text-[#f0f0f0] py-2 px-4 rounded-lg w-full flex items-center justify-center gap-x-2">
                        <AiFillGithub size={30} />
                        Login via Github
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
