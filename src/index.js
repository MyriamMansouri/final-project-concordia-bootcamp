import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store";
import { requestUser, receiveUser, receiveUserError } from "./actions";
import MobileWrapper from "mobile-viewer-component/dist";
import { Provider } from "react-redux";
import App from "./components/App";

const store = configureStore();

// initial ftch of user data is user logged in
store.dispatch(requestUser());
fetch("/api/users/user")
  .then((res) => {
    if (res.status !== 204) {
      return res.json();
    } else {
      return null;
    }
  })
  .then((data) => {
    if (data && data.status === 200) {
      store.dispatch(receiveUser(data.user));
    } else {
      store.dispatch(receiveUser());
    }
  })
  .catch((err) => {
    store.dispatch(receiveUserError());
    console.log(err);
  });

ReactDOM.render(
  <MobileWrapper background="wave">
    <Provider store={store}>
      <App />
    </Provider>
  </MobileWrapper>,

  document.getElementById("root")
);
