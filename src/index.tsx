import React from "react";
import ReactDOM from "react-dom";
import { App } from "src/app";
import { nitad18Background } from "src/assets";
import GlobalStyles from "./ui/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
