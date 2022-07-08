import React, { useState } from "react";
import { Link } from "react-scroll";
import Modal from "../common/Modal";

const socialMedia = [
  {
    icon: "/assets/email.png",
    link: "mailto:hendibrahim468@gmail.com?Subject=Let's%20Talk",
    name: "Email",
    state: {
      whatsapp: false,
      email: true,
    },
  },
  {
    icon: "/assets/linkedin.png",
    link: "https://www.linkedin.com/in/seoseoexpert/",
    name: "Linked In",
  },
  {
    icon: "/assets/telegram.png",
    link: "https://t.me/hendibrahimseo",
    name: "Telegram",
  },
  {
    icon: "/assets/whatsapp.png",
    link: "https://api.whatsapp.com/send?phone=+201551304568&text&app_absent=0",
    name: "Whatsapp",
    state: {
      whatsapp: true,
      email: false,
    },
  },
];

const defaultState = {
  whatsapp: false,
  email: false,
};

const MainSection = () => {
  const [open, setOpen] = useState(defaultState);

  const modals = [
    {
      isOpen: open.whatsapp,
      title: "Whatsapp",
      content: "+20 015 513 045 68",
      icon: "/assets/whatsapp.png",
    },
    {
      isOpen: open.email,
      title: "Email",
      content: "hendibrahim468@gmail.com",
      icon: "/assets/email.png",
    },
  ];
  return (
    <div className="h-screen">
      <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
        <div
          className="col-span-12 md:col-start-7 md:col-end-13 row-span-3 md:row-span-full bg-gray-100"
          style={{
            background: "url(/assets/hend.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "40% 20%",
          }}
        />
        <div className="col-span-12 md:col-start-1 md:col-end-7 row-span-3 md:row-span-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hend ibarhim
          </h1>
          <p className="text-xl font-medium  text-gray-800 mb-8">
            Search Engine Optimization Specialist
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
              href="/files/Hend  Ibrahim - SEO Specialist.pdf"
              download
              className="inline-block px-8 py-2 border-gray-200 border-2 hover:border-indigo-400 rounded-full text-gray-600 hover:text-indigo-600 text-sm transition-colors duration-300 cursor-pointer"
            >
              My Resume
            </a>
          </div>

          <div>
            {socialMedia.map((media, idx) => {
              if (media.state) {
                return (
                  <button
                    key={media.name}
                    className={`w-12 h-12 inline-block ${
                      idx !== socialMedia.length && "mr-4"
                    }`}
                    onClick={() => setOpen(media.state)}
                  >
                    <img
                      className={`w-full h-full inline-block object-cover`}
                      src={media.icon}
                      alt={media.name}
                    />
                  </button>
                );
              }
              return (
                <a
                  className={`w-12 h-12 inline-block ${
                    idx !== socialMedia.length && "mr-4"
                  }`}
                  key={media.name}
                  href={media.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={`w-full h-full inline-block object-cover`}
                    src={media.icon}
                    alt={media.name}
                  />
                </a>
              );
            })}
          </div>

          <p className="text-xl font-light  text-gray-800 mb-8 max-w-md text-center mt-8">
            If there is one thing to know about me it’s that I love to learn,
            grow and glow.
          </p>
        </div>
      </div>

      {modals.map(
        (m) =>
          m.isOpen && (
            <Modal
              key={m.title}
              isOpen={m.isOpen}
              icon={m.icon}
              onClose={() => setOpen(defaultState)}
              title={m.title}
              content={m.content}
            />
          )
      )}
    </div>
  );
};

export default MainSection;
