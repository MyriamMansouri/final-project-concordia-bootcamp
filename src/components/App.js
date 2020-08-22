import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestUser, receiveUser, receiveUserError } from "../actions";
import GlobalStyle from "./GlobalStyle";
import styled from 'styled-components'
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import FourOhFour from "../pages/FourOhFour";
import Homepage from "../pages/Homepage";
import NavBar from "./NavBar";

const App = () => {
  const dispatch = useDispatch();
console.log('app')
  React.useEffect(() => {
    dispatch(requestUser());
    fetch("/api/users/user")
      .then((res) => res.json())
      .then((data) => {
        
        if (data.status === 200) {
          dispatch(receiveUser(data.user));
        }
      })
      .catch((err) => {
        dispatch(receiveUserError());
        console.log(err);
      });
  }, [dispatch]);

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
          <Route exact path="/users/:userId">
            My user
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

const Wrapper = styled.div`
  position: relative;
  min-height:100vh;
`;
export default App;
