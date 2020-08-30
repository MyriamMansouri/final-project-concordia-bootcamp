import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestUser, receiveUser, receiveUserError } from "../actions";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import FourOhFour from "../pages/FourOhFour";
import Homepage from "../pages/Homepage";
import NavBar from "./NavBar";
import MyProfile from "./MyProfile";
import { checkIfLoggedIn } from "../reducers/user-reducer";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(checkIfLoggedIn);

  React.useEffect(() => {
    dispatch(requestUser());
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
          dispatch(receiveUser(data.user));
        } else {
          dispatch(receiveUser());
        }
      })
      .catch((err) => {
        dispatch(receiveUserError());
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/users/me">
            <MyProfile /> 
          </Route>
          <Route exact path="/users/:userId">
            Profile
          </Route>
          <Route exact path="/*">
            <FourOhFour />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  height: inherit;
  box-sizing: border-box;
`;

export default App;
