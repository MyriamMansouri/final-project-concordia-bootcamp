import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
            {isLoggedIn ? <Redirect to="/map" /> : <Homepage />}
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/users/me">
            {isLoggedIn ? <MyProfile /> :<Redirect to="/" />}
          </Route>
          <Route exact path="/map">
            {isLoggedIn ? <Map /> : <Redirect to="/" />}
          </Route>
          
          <Route component={FourOhFour} />
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
