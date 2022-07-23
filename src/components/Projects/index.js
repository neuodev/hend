import React from "react";
import { projects } from "./list";
import Slides from "./Slides";

const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-20 text-gray-800">
        Projects 🎯💡📈
      </h1>
      {projects.map((project, idx) => (
        <div
          data-aos="fade-right"
          id={`project-${idx + 1}`}
          key={idx}
          className="grid grid-cols-12 grid-rows-6 w-full border-b border-gray-200 py-20"
        >
          <div
            data-aos="flip-right"
            data-aos-delay="90"
            className="col-span-12 lg:col-span-6 row-span-3 lg:row-span-full"
          >
            <Slides
              folderName={project.folderName}
              numOfImages={project.numOfImages}
            />
          </div>
          <div className="col-span-12 lg:col-span-6 row-span-3 lg:row-span-full flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl text-gray-800">{project.title}</h1>
            <p className="text-gray-600 leading-loose mt-4 text-center max-w-screen-sm">
              {project.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
