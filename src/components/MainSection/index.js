import React from "react";
import Social from "../common/Social";

const MainSection = () => {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="flex items-center justify-center space-x-10">
        <div className="flex flex-col items-center justify-center pt-12 text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Hend Ibarhim
          </h1>
          <p className="text-xl font-medium text-gray-800 mb-4 text-center">
            Senior International SEO Specialist & Google Ads
          </p>
          <p className="w-96 mb-4 font-light">
            Unleash your global success, dominate search engines, capture
            audiences with captivating ads, stay ahead of the curve.
          </p>
          <Social />
        </div>
        <div className="rounded-full shadow-2xl">
          <img
            src="assets/hend.jpg"
            alt="Hend Ibrahim"
            className="block w-96 h-96 rounded-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
