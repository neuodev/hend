import React, { useState } from "react";
import Modal from "./Modal";

const socialMedia = [
  {
    icon: "/assets/email.png",
    link: "mailto:hendibrahim468@gmail.com?Subject=Let's%20Talk",
    name: "Email",
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
