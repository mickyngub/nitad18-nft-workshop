import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalStyles from "./ui/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
