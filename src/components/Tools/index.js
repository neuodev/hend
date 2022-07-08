import React from "react";
import { tools } from "./list";

const Tools = () => {
  return (
    <div className="flex items-center justify-center flex-col border-b border-gray-200 py-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Tools
      </h1>
      {/* <div className="grid grid-cols-12 gap-10 max-w-screen-lg">
        {tools.map((tool) => (
          <div
            className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col items-center justify-center"
            key={tool.name}
          >
            <div className="w-40 h-40 sm:w-52 sm:h-48 bg-white shadow-xl flex items-center justify-center rounded-full overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <img
                className="w-52 h-auto inline-block object-cover"
                src={tool.icon}
                alt={tool.name}
              />
            </div>
            <p className="text-gray-800 text-lg font-medium capitalize mt-3 text-center">
              {tool.name}
            </p>
          </div>
        ))}
      </div> */}

      <div className="flex max-w-screen-lg flex-wrap items-center justify-center">
        {tools.map((tool) => (
          <div
            className="flex flex-col items-center justify-center flex-wrap pb-6 pr-6"
            key={tool.name}
          >
            <div className="w-32 h-32 sm:w-52 sm:h-48 bg-white shadow-xl flex items-center justify-center rounded-full overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <img
                className="w-32 sm:w-52 h-auto inline-block object-cover"
                src={tool.icon}
                alt={tool.name}
              />
            </div>
            <p className="text-xs md:text-lg text-gray-800 font-medium capitalize mt-3 text-center">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
