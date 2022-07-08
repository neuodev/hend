import React from "react";
import MainSection from "../components/MainSection";
import Projects from "../components/Projects";
import Tools from "../components/Tools";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <MainSection />
      <Projects />
      <Tools />
    </div>
  );
};

export default HomePage;
