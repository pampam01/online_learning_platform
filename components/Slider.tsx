"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import CardComponent from "./Card";
import { Button } from "./ui/button";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ActiveSlider: React.FC = () => {
  return (
    <div className="w-[50%] h-[50%]  m-auto shadow-[0px_2px_5px_rgba(0,0,0,0.5)] p-6 bg-white xl:w-full mb-10">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView="auto"
        loop
      >
        <SwiperSlide>
          <div className="text-black flex items-center justify-center mx-auto h-auto w-auto">
            <CardComponent />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-black flex items-center justify-center mx-auto h-auto w-auto">
            <CardComponent />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="text-black flex items-center justify-center mx-auto h-auto w-auto">
            <CardComponent />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="text-black flex items-center justify-center mx-auto h-auto w-auto">
            <CardComponent />
          </div>
        </SwiperSlide>
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className=" flex justify-between">
      <Button
        className=" w-16 h-12 rounded-md border-none outline bg-sky-600 text-white mx-0 my-20 shadow-[2px_2px_2px_rgba(0,0,0,0.5)] mt-7  ease-in-out duration-300 hover:cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <AiOutlineArrowLeft />
      </Button>
      <Button
        className=" w-16 h-12 rounded-md border-none outline bg-sky-600 text-white mx-0 my-20 shadow-[2px_2px_2px_rgba(0,0,0,0.5)] mt-7 ease-in-out duration-300 hover:cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <AiOutlineArrowRight />
      </Button>
    </div>
  );
};

export default ActiveSlider;
