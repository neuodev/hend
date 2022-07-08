import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";

const Slides = () => {
  return (
    <div className="h-full px-4">
      <Swiper
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-full bg-gray-100 rounded-xl shadow-xl"
      >
        {[1, 2, 3, 4, 5].map((idx) => (
          <SwiperSlide
            key={idx}
            className="flex items-center justify-center bg-white"
          >
            Slide {idx}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slides;
