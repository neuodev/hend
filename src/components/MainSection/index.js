import React from "react";
import Social from "../common/Social";

const MainSection = () => {
  return (
    <div className="min-h-screen sm:h-screen">
      <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
        <div
          className="col-span-12 md:col-start-7 md:col-end-13 row-span-3 md:row-span-full bg-gray-100"
          style={{
            background: "url(/assets/hend.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "40% 20%",
          }}
        />
        <div className="col-span-12 md:col-start-1 md:col-end-7 row-span-3 md:row-span-full flex flex-col items-center justify-center pt-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hend Ibarhim
          </h1>
          <p className="text-xl font-medium  text-gray-800 mb-8 text-center">
            Senior International SEO Specialist
          </p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
