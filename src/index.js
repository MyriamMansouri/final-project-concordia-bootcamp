import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import MobileWrapper from "mobile-viewer-component/dist";
import { Provider } from "react-redux";
import App from "./components/App";


const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <MobileWrapper background="wave">
      <Provider store={store}>
        <App />
      </Provider>
    </MobileWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
