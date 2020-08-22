import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkIfLoggedIn } from "../reducers/user-reducer";
import LogOut from "./LogOut";
import Hamburger from "./Buttons/Hamburger";
import styled from "styled-components";
import { COLORS } from "./assets/styles";

const NavBar = () => {
  const isLoggedin = useSelector(checkIfLoggedIn);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <Nav className={open && "toggled"}>
        <ul>
          {!isLoggedin && (
            <>
              <Li>
                <NavLink to="/signup" onClick={() => setOpen(!open)}>
                  Sign up
                </NavLink>
              </Li>
              <Li>
                <NavLink to="/login" onClick={() => setOpen(!open)}>
                  Log in
                </NavLink>
              </Li>
            </>
          )}

          {isLoggedin && (
            <Li>
              <LogOut />
            </Li>
          )}
        </ul>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  z-index: 80;
  padding: 30px 20px;
  color: #ffffff;
  background-color: ${COLORS.primary};
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  left: 100%;
  transition: left 600ms ease-out;
  &.toggled {
    background-color: ${COLORS.primary};
    left: 0;
  }
`;
const Li = styled.li`
  padding-bottom: 20px;
  > * {
    font-size: 1.3rem;
    color: #ffffff;
    text-decoration: underline;
  }
`;
export default NavBar;
