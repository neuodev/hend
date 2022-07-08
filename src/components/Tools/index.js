import React from "react";
import { tools } from "./list";

const Tools = () => {
  return (
    <div>
      {tools.map((tool) => (
        <div>
          <img src={tool.icon} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Tools;
