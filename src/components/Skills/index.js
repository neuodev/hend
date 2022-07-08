import React from "react";
import { skills } from "./list";

const Skills = () => {
  return (
    <div className="flex items-center justify-center flex-col border-b border-gray-200 py-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Skills
      </h1>
      {/* <div className="grid grid-cols-12 gap-10 max-w-screen-lg">
        {skills.map((skill) => (
          <div
            key={skill}
            className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-center justify-center "
          >
            <p className="text-lg font-medium capitalize text-center w-32 h-32 md:w-60 md:h-60  bg-indigo-200 text-indigo-900 rounded-full shadow-xl hover:shadow-2xl hover:bg-indigo-300 hover:text-indigo-800 transform hover:-translate-y-4 transition duration-300 cursor-pointer md:px-4 ring ring-indigo-300 border-indigo-300 hover:ring-indigo-400 flex flex-col items-center justify-center ">
              {skill}
            </p>
          </div>
        ))}
      </div> */}

      <div className="flex max-w-screen-lg flex-wrap items-center justify-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex flex-col items-center justify-center flex-wrap pb-6 pr-6"
          >
            <p className="text-xs sm:text-base md:text-lg font-medium capitalize text-center w-32 h-32 md:w-60 md:h-60 lg:w-40 lg:h-40 bg-indigo-200 text-indigo-900 rounded-full shadow-xl hover:shadow-2xl hover:bg-indigo-300 hover:text-indigo-800 transform hover:-translate-y-4 transition duration-300 cursor-pointer md:px-4 ring ring-indigo-300 border-indigo-300 hover:ring-indigo-400 flex flex-col items-center justify-center ">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
