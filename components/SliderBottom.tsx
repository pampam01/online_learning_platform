"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { A11y, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { ServiceData } from "@/constants/slider";
import { RxArrowTopRight } from "react-icons/rx";
import { Button } from "./ui/button";

export default function SliderBottom(): React.JSX.Element {
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        loop
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Pagination, A11y]}
        className="w-auto h-auto max-w-full flex relative justify-center items-center m-auto"
      >
        {ServiceData.map((item) => (
          <SwiperSlide
            key={item.title}
            className=" h-[100%] w-[100%] max-w-md xs:w-full xs:h-[100vh]"
          >
            <div className="  group relative shadow-lg text-white rounded-xl h-80 w-auto overflow-hidden cursor-pointer xs:w-full mb-10">
              <Image
                src={item.backgroundImage}
                alt="baground"
                fill
                className="object-cover"
                sizes="full"
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
}

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
      <Button
        className="absolute top-1/2 left-0 z-40 bg-sky-600"
        onClick={() => swiper.slidePrev()}
      >
        <MdArrowBackIosNew />
      </Button>
      <Button
        className="absolute top-1/2 right-0 z-30 bg-sky-600 "
        onClick={() => swiper.slideNext()}
      >
        <MdArrowForwardIos />
      </Button>
    </div>
  );
};
