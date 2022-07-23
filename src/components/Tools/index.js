import React from "react";
import { tools } from "./list";

const Tools = () => {
  return (
    <div className="flex items-center justify-center flex-col border-b border-gray-200 py-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Tools ⚙️ 👁️ 🧠
      </h1>

      <div className="flex max-w-screen-lg flex-wrap items-center justify-center">
        {tools.map((tool) => (
          <div
            data-aos="flip-left"
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
            <p className="text-xs sm:text-lg text-gray-800 font-medium capitalize mt-3 text-center">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
