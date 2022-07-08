import React, { useEffect, useState } from "react";
import ModalBase from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "400px",
  },
};

const Modal = ({ isOpen, onClose, title, content, icon }) => {
  const [copyed, setCopyed] = useState(false);

  useEffect(() => {
    setCopyed(false);
  }, []);

  console.log({ copyed });
  return (
    <ModalBase
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={title}
    >
      <div className="flex items-center justify-start">
        <img className="inline-block w-6 h-6 mr-3" src={icon} alt={title} />
        <h1 className="text-xl text-gray-800 capitalize font-medium">
          {title}
        </h1>
      </div>
      <div className="bg-gray-100 rounded-md mt-4 p-4 flex items-center justify-between">
        <div className="text-gray-700 font-medium">{content}</div>
        <button
          onClick={() => {
            setCopyed(true);
            navigator.clipboard.writeText(content);
          }}
          className="bg-gray-200 overflow-hidden flex items-center justify-center px-1 py-1 rounded-full text-xs hover:bg-gray-300 transition-colors duration-300"
        >
          <img
            className={`overflow-hidden inline-block m-1/2 h-6 w-6`}
            src={copyed ? "/assets/check.png" : "/assets/copy.png"}
            alt={copyed ? "Copyed" : "Copy"}
          />
        </button>
      </div>
    </ModalBase>
  );
};

export default Modal;
