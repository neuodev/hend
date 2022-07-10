import React from "react";
import Social from "../common/Social";

const Footer = () => {
  return (
    <div className="py-10 flex items-center justify-center flex-col">
      <div className="mb-10">
        <Social />
      </div>
      <h1 className="text-xl text-gray-500"> &copy; Hend Ibrahim</h1>
    </div>
  );
};

export default Footer;
