import React from "react";
import { Link } from "react-scroll";

const socialMedia = [
  {
    icon: "/assets/email.png",
    link: "some link",
    name: "Email",
  },
  {
    icon: "/assets/linkedin.png",
    link: "some link",
    name: "Linked In",
  },
  {
    icon: "/assets/telegram.png",
    link: "some link",
    name: "Telegram",
  },
  {
    icon: "/assets/whatsapp.png",
    link: "some link",
    name: "Whatsapp",
  },
];

const MainSection = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
        <div className="col-span-12 md:col-start-7 md:col-end-13 row-span-3 md:row-span-full">
          <img
            className="w-full h-full object-cover inline-block"
            src="/assets/hend.jpeg"
            alt="Hend ibrahim"
          />
        </div>
        <div className="col-span-12 md:col-start-1 md:col-end-7 row-span-3 md:row-span-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hend ibarhim
          </h1>
          <p className="text-xl font-medium  text-gray-800 mb-8">
            SEO Technical Specialist
          </p>
          <div className="flex items-center justify-center mb-8 text-center">
            <Link
              to="project-1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="inline-block px-8 py-2 border-gray-200 border-2 hover:border-indigo-400 rounded-full text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-300 cursor-pointer mr-4"
            >
              My projects
            </Link>

            <a
              href="/files/hend.pdf"
              download
              className="inline-block px-8 py-2 border-gray-200 border-2 hover:border-indigo-400 rounded-full text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-300 cursor-pointer"
            >
              My Resume
            </a>
          </div>

          <div>
            {socialMedia.map((media, idx) => (
              <a
                className={`w-12 h-12 inline-block ${
                  idx !== socialMedia.length && "mr-4"
                }`}
                key={media.name}
                href={media.link}
              >
                <img
                  className={`w-full h-full inline-block object-cover`}
                  src={media.icon}
                  alt={media.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
