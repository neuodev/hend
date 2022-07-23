import React from "react";

const AboutMe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="pb-10 pt-20 flex items-center justify-center flex-col border-b border-gray-200"
    >
      <div className="max-w-screen-xl flex flex-row flex-wrap items-center justify-center">
        <div
          className="flex items-center justify-center relative"
          data-aos="flip-right"
        >
          <span className="absolute bg-blue-200 -top-6 right-5  w-32 h-32 -z-10 "></span>
          <div className="w-3/4 shadow-2xl">
            <img className="inline-block" src="/assets/hend-2.jpg" alt="Hend" />
          </div>
          <span className="absolute border-4 border-blue-200 -bottom-6 left-5  w-32 h-32 -z-10"></span>
        </div>
        <div data-aos="fade-left" className="p-8 mt-10 max-w-screen-md">
          <h1 className="text-4xl md:text-5xl text-center mb-4 font-semibold text-gray-800">
            About Me 👋 😌
          </h1>
          <p className="leading-loose text-gray-700 text-center font-normal text-sm  md:text-lg md:row-span-full">
            Experience <strong>over 2 years</strong> in several industries such
            as{" "}
            <strong>
              (real estate, Interior design, Digital Marketing, Feasibility
              study, English Learning, Mom and Baby care, Medicine, Beauty,
              Fashion, Forex, Cars, service companies, and E-commerce websites)
            </strong>{" "}
            professional experience in content writing, digital marketing, Link
            building, Project Management, SEO Keyword Research, SEO strategy
            performance, Increased traffic and rankings, and achieve maximum ROI
            in paid search campaigns, and excellent user in Google Systems,
            WordPress, Yoast, and Rank Math,{" "}
            <strong>Seeking an SEO Specialist</strong> position to apply my
            experiences in freelance work, project management, and SEO to raise
            the level of your platform. I have worked with hundreds of clients
            and projects in all niches targetting many countries. I'm Google
            Analytics Certified. Being up to date with the latest marketing
            trends. At the same time, I really enjoy writing and learning more
            about SEO, SEM, digital, content marketing, and Coding “HTML, CSS,
            and javascript”.
            <p className="text-lg font-extrabold">
              Let’s glow and grow together! 💪🔥
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
