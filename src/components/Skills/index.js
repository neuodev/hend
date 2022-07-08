import React from "react";
import { skills } from "./list";

const Skills = () => {
  return (
    <div className="py-10 flex items-center justify-center flex-col border-b border-gray-200">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Skills
      </h1>
      <div className="grid grid-cols-12 gap-10 max-w-screen-lg">
        {skills.map((skill) => (
          <div
            key={skill}
            className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-col items-center justify-center h-32 bg-indigo-200 text-indigo-900 rounded-xl shadow-xl hover:shadow-2xl hover:bg-indigo-300 hover:text-indigo-800 transform hover:-translate-y-4 transition duration-300 cursor-pointer px-4 ring ring-indigo-300 border-indigo-300 hover:ring-indigo-400"
          >
            <p className="text-lg font-medium capitalize text-center">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
