import React from "react";
import { Link } from "react-scroll";
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
            Hend ibarhim 👋
          </h1>
          <p className="text-xl font-medium  text-gray-800 mb-8 text-center">
            Search Engine Optimization Specialist
          </p>
          <div className="flex items-center justify-center mb-8 text-center">
            <Link
              to="project-1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="inline-block px-8 py-2 border-gray-200 border-2 hover:border-indigo-400 rounded-full text-gray-600 font-semibold hover:text-indigo-600 text-sm transition-colors duration-300 cursor-pointer mr-4"
            >
              My projects
            </Link>

            <a
              href="/files/HEND IBRAHIM + SEO Specialist.pdf"
              download
              className="inline-block px-8 py-2 border-gray-200 border-2 hover:border-indigo-400 rounded-full text-gray-600 font-semibold hover:text-indigo-600 text-sm transition-colors duration-300 cursor-pointer"
            >
              My Resume
            </a>
          </div>

          <Social />

          <p className="text-xl font-light px-4 text-gray-800 mb-8 max-w-md text-center mt-8">
            If there is one thing to know about me it’s that I love to learn,
            grow and glow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
