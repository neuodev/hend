import React from "react";
import ReactDOM from "react-dom";
// Overright the changes from tailwindcss
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
