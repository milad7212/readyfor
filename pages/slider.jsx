import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function SliderPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ciTiter ">
      <Swiper>
        <SwiperSlide>
          <div className="h-20 w-60 rounded-lg bg-ciPink"></div>
        </SwiperSlide>
        <SwiperSlide><div className="h-20 w-60 rounded-lg bg-ciPink"></div></SwiperSlide>
        <SwiperSlide><div className="h-20 w-60 rounded-lg bg-ciPink"></div></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderPage;
