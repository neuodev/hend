import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";

const Slides = ({ folderName, numOfImages }) => {
  const slides = (() => {
    const paths = [];
    for (let i = 1; i <= numOfImages; i++) {
      paths.push(`/assets/projects/${folderName}/${i}.png`);
    }

    return paths;
  })();

  return (
    <div className="h-full px-4 flex items-center justify-center">
      <Swiper
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full bg-gray-100 rounded-xl shadow-xl"
      >
        {slides.map((path) => (
          <SwiperSlide
            key={path}
            className="flex items-center justify-center bg-white"
          >
            <img src={path} alt="Results" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slides;
