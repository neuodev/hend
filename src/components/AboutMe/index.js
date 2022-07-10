import React from "react";

const AboutMe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="py-10 flex items-center justify-center flex-col border-b border-gray-200"
    >
      <h1 className="text-5xl text-center mb-10 font-semibold text-gray-800">
        About Me
      </h1>
      <div className="max-w-screen-lg grid grid-cols-12 grid-row-6 items-center justify-between">
        <div
          className="col-span-12 md:col-start-7 md:col-end-13 row-span-full flex items-center justify-center h-full"
          data-aos="flip-right"
        >
          <div
            className=" bg-gray-100 w-96 h-96 rounded-full shadow-2xl"
            style={{
              background: "url(/assets/hend.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "40% 20%",
            }}
          />
        </div>
        <p
          data-aos="fade-left"
          className="leading-loose text-gray-700 text-center font-normal text-lg col-span-12 md:col-start-1 md:col-end-7 p-8 md:row-span-full"
        >
          With <strong>more than 2 years</strong> of experience as an SEO Expert
          Ranking high competitive keywords on google, getting organic traffic
          to the website, Citation Building, and delivering growth for companies
          and freelancers. I have worked with hundreds of clients and many
          different projects in all niches targetting many different countries.
          I worked in the U.S market. I'm Google Analytics Certified. Being up
          to date with the latest marketing trends. At the same time, I really
          enjoy writing and learning more about SEO, SEM, digital, content
          marketing, and Coding “HTML, CSS, and javascript”. Let’s glow and grow
          together!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
