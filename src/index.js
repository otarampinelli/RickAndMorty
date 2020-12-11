import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AllEpisodes from "./AllEpisodes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AllEpisodes />
  </React.StrictMode>,
  rootElement
);
