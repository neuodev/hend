import React from "react";
import { skills } from "./list";

const Skills = () => {
  return (
    <div className="flex items-center justify-center flex-col border-b border-gray-200 py-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Skills 💪🤸‍♀️🥋
      </h1>

      <div className="flex max-w-screen-lg flex-wrap items-center justify-center">
        {skills.map((skill) => (
          <div
            data-aos="flip-right"
            key={skill}
            className="flex flex-col items-center justify-center flex-wrap pb-6 pr-6"
          >
            <p className="text-xs sm:text-base md:text-lg font-medium capitalize text-center w-32 h-32 md:w-60 md:h-60 lg:w-40 lg:h-40 bg-blue-200 text-blue-900 rounded-full shadow-xl hover:shadow-2xl hover:bg-blue-300 hover:text-blue-800 transform hover:-translate-y-4 transition duration-300 cursor-pointer md:px-4 ring ring-blue-300 border-blue-300 hover:ring-blue-400 flex flex-col items-center justify-center ">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
