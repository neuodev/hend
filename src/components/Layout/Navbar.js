import React, { useState } from "react";

const TABS = [
  {
    text: "Home",
    href: "#home",
  },
  {
    text: "About",
    href: "#about",
  },
  {
    text: "Skills",
    href: "#skills",
  },
  {
    text: "Tools",
    href: "#tools",
  },
  {
    text: "Tech",
    href: "#tech",
  },
  {
    text: "Industries",
    href: "#industries",
  },
];
const Navbar = () => {
  const [activeTab, setActiveTab] = useState();

  return (
    <div className="w-100 flex items-center justify-between font-sans py-3">
      <p>
        <a
          href="/"
          className="hover:text-indigo-500 transition-colors duration-300 text-lg font-semibold"
        >
          Hend
        </a>
      </p>
      <ul className="flex items-center justify-center">
        {TABS.map((tab) => (
          <li
            key={tab.href}
            className={`mr-8 hover:text-indigo-400 transition-colors duration-300 font-light ${
              activeTab === tab.href && "text-indigo-400"
            }`}
          >
            <a onClick={() => setActiveTab(tab.href)} href={tab.href}>
              {tab.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
