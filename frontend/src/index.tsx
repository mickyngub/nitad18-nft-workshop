import React from "react";
import ReactDOM from "react-dom";
import { App } from "src/app";
import GlobalStyles from "src/ui/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
