import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import MobileWrapper from "mobile-viewer-component/dist";

ReactDOM.render(
  <React.StrictMode>
    <MobileWrapper background="wave">
      <App />
    </MobileWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
