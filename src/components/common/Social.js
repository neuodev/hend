import React, { useState } from "react";
import Modal from "./Modal";

const socialMedia = [
  {
    icon: "/assets/upwork.png",
    link: "https://www.upwork.com/freelancers/~01089d8ac511ce7350",
    name: "UpWork",
  },
  {
    icon: "/assets/email.png",
    link: "mailto:me@hendibrahim.org?Subject=Let's%20Talk",
    name: "Email",
  },
  {
    icon: "/assets/linkedin.png",
    link: "https://www.linkedin.com/in/seoseoexpert/",
    name: "Linked In",
  },
  {
    icon: "/assets/whatsapp.png",
    link: null,
    name: "Whatsapp",
    state: {
      whatsapp: true,
      email: false,
    },
  },
];

const Social = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      {socialMedia.map((media) => {
        if (media.state) {
          return (
            <button
              key={media.name}
              className={`w-12 h-12 flex items-center justify-center`}
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
            className={`w-12 h-12 inline-block`}
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

      {open && (
        <Modal
          key="Whatsapp"
          isOpen={open}
          icon="/assets/whatsapp.png"
          onClose={() => setOpen(false)}
          title={"Whatsapp"}
          content="+20 015 513 045 68"
        />
      )}
    </div>
  );
};

export default Social;
