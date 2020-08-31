import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import FourOhFour from "../pages/FourOhFour";
import Homepage from "../pages/Homepage";
import NavBar from "./NavBar";
import MyProfile from "./MyProfile";
import { checkIfLoggedIn } from "../reducers/user-reducer";
import Map from "./Map";

const App = () => {
  const isLoggedIn = useSelector(checkIfLoggedIn);

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
          {isLoggedIn && (
            <>
              <Route exact path="/users/me">
                <MyProfile />
              </Route>
              <Route exact path="/map">
                <Map />
              </Route>
            </>
          )}
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
