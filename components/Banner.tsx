"use client";
import CardComponent from "@/components/cards/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Link from "next/link";
// import { redirect, useParams, useRouter } from "next/navigation";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdEditCalendar, MdLanguage, MdSubtitles } from "react-icons/md";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row mt-4 p-0 md:p-8 rounded-md md:border-2 md:bg-gradient-to-br from-purple-800 to-blue-800 md:dark:bg-gradient-to-br dark:from-blue-950 dark:to-purple-950 text-secondary-foreground">
      {/* kiri */}
      <div>
        <div className="flex flex-col justify-between h-full">
          {/* atas */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold leading-normal">
              Kursus Pengembangan Web Berbasis React dan NodeJS
            </h1>
            <p className="text-base md:text-lg">
              Mempelajari kaidah-kaidah pembuatan website dari awal hingga akhir
              dipadukan dengan praktek yang akan membantu kamu membangun projek
              IT-mu sendiri.
            </p>
          </div>
          {/* bawah */}
          <div className="flex flex-col md:flex-row justify-between text-xs md:text-sm md:mt-0 mt-8">
            {/* kiri */}
            <div className="flex flex-col gap-y-1">
              <div className="flex flex-row md:items-center items-start gap-x-2 md:gap-x-1">
                <MdLanguage size={20} />
                <p>Bahasa : inggris</p>
              </div>
              <div className="flex flex-row md:items-center items-start gap-x-2 md:gap-x-1">
                <MdSubtitles size={20} />
                <p>
                  Subtitle tersedia :{" "}
                  <span className="underline hover:text-gray-300 cursor-pointer">
                    Türkçe
                  </span>
                  ,
                  <span className="underline pl-1 hover:text-gray-300 cursor-pointer">
                    Español
                  </span>
                  ,
                  <span className="underline pl-1 hover:text-gray-300 cursor-pointer">
                    Русский
                  </span>
                  ,
                  <span className="underline pl-1 hover:text-gray-300 cursor-pointer">
                    中文
                  </span>
                  ,
                  <span className="hover:underline pl-1 cursor-pointer">
                    + 4 lainnya
                  </span>
                </p>
              </div>
              {/* rating */}
              <div className="flex flex-row items-center gap-x-1">
                <span>5.0</span>
                <div className="flex flex-row mb-[0.175rem]">
                  <Star fill="yellow" stroke="none" size={15} />
                  <Star fill="yellow" stroke="none" size={15} />
                  <Star fill="yellow" stroke="none" size={15} />
                  <Star fill="yellow" stroke="none" size={15} />
                  <Star fill="yellow" stroke="none" size={15} />
                </div>
                <span className="flex flex-row items-center">
                  (<BsPerson />
                  12.554)
                </span>
                <p className="pl-1">
                  <span className="underline hover:text-gray-300 cursor-pointer">
                    151.278 peserta
                  </span>
                </p>
              </div>
              {/* update */}
              <div className="flex flex-row items-center gap-x-1">
                <MdEditCalendar size={20} />
                <p>
                  Terakhir diupdate : <span>29-02-2024, 09.00 WIB</span>
                </p>
              </div>
            </div>
            {/* kanan */}
            <div className="flex flex-col md:gap-y-2 gap-y-1 md:mt-0 mt-4">
              <p>Instruktur : </p>{" "}
              <div>
                <div className="flex flex-row -space-x-3.5">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="instructor-image"
                      className="cursor-pointer"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://lumiere-a.akamaihd.net/v1/images/ct_frozen_elsa_18466_22a50822.jpeg?region=0,0,600,600&width=480"
                      alt="instructor-image"
                      className="cursor-pointer"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://i0.wp.com/goodmoney.id/wp-content/uploads/2021/05/kjk.jpg?fit=1929%2C1761&ssl=1"
                      alt="instructor-image"
                      className="cursor-pointer"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <span className="underline hover:text-gray-300 cursor-pointer">
                  mahoraga-kun
                </span>{" "}
                <Link href="/" className="hover:underline">
                  + 2 lainnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {/* <CardComponent>

        </CardComponent> */}
      </div>
    </section>
  );
};

export default Banner;
