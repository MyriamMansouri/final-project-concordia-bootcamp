import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkIfLoggedIn } from "../reducers/user-reducer";
import LogOut from "./LogOut";
import Hamburger from "./Buttons/Hamburger";
import styled from "styled-components";
import { COLORS } from "./assets/styles";
import Card from "./Cards/Card";

const NavBar = () => {
  const isLoggedin = useSelector(checkIfLoggedIn);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <Card open={open} style={styleCard} side="right">
        <nav>
          <ul>
            {!isLoggedin && (
              <>
                <Li>
                  <NavLink
                    exact
                    to="/"
                    onClick={() => setOpen(!open)}
                    activeClassName="selected"
                  >
                    Home
                  </NavLink>
                </Li>
                <Li>
                  <NavLink
                    to="/signup"
                    onClick={() => setOpen(!open)}
                    activeClassName="selected"
                  >
                    Sign up
                  </NavLink>
                </Li>
                <Li>
                  <NavLink
                    to="/login"
                    onClick={() => setOpen(!open)}
                    activeClassName="selected"
                  >
                    Log in
                  </NavLink>
                </Li>
              </>
            )}

            {isLoggedin && (
              <>
                <Li>
                  <NavLink
                    to="/map"
                    onClick={() => setOpen(!open)}
                    activeClassName="selected"
                  >
                    Map
                  </NavLink>
                </Li>
                <Li>
                  <NavLink
                    to="/users/me"
                    onClick={() => setOpen(!open)}
                    activeClassName="selected"
                  >
                    Profile
                  </NavLink>
                </Li>
                <Li>
                  <LogOut setOpen={setOpen} />
                </Li>
              </>
            )}
          </ul>
        </nav>
      </Card>
    </>
  );
};

// add custom style to card
// regular js object -- not styled component
const styleCard = {
  zIndex: 69,
  color: "#ffffff",
  backgroundColor: COLORS.primary,
};

const Li = styled.li`
  > * {
    font-size: 1.3rem;
    color: #ffffff;
    text-decoration: underline;
    display: block;
    margin-bottom: 20px;
  }
  .selected {
    display: none;
  }
`;
export default NavBar;
