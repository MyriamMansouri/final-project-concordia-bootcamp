import React from "react";
import { useSelector } from "react-redux";
import { checkIfLoggedIn } from "../../reducers/user-reducer";
import UnstyledButton from "./UnstyledButton";
import styled from "styled-components";
import { COLORS, SPACING } from "../assets/styles";

const Hamburger = ({ open, setOpen }) => {
  const isLoggedin = useSelector(checkIfLoggedIn);
  return (
    <NavBtn onClick={() => setOpen(!open)}>
      {isLoggedin && (
        <Usericon className={open && "toggled"} src="/assets/user.png" />
      )}
      <Navicon className={open && "toggled"} isLoggedin={isLoggedin} />
    </NavBtn>
  );
};

export default Hamburger;

const Usericon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  transition: opacity 0.2s ease-out;
  &.toggled {
    opacity: 0;
  }
`;
const NavBtn = styled(UnstyledButton)`
  cursor: pointer;
  float: right;
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  z-index: 100;
`;

 // if user is logged in, initial menu icon (the 3 stacked bars) has opacity = 0 
 // the part of the icon menu animation which  creates a close icon is reused with user profile picture
const Navicon = styled.span`
  background: ${COLORS.primary};
  display: block;
  height: 3px;
  position: absolute;
  top: 30px;
  right: 20px;
  transition: background 0.2s ease-out;
  width: 18px;
  opacity: ${(props) => (props.isLoggedin ? 0 : 1)};
  &:before,
  &:after {
    transition: opacity 0.2s ease-out;
    background: ${COLORS.primary};
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  &:before {
    top: 6px;
  }

  &:after {
    top: -6px;
  }
  &.toggled {
    background: transparent;
    opacity: 1;
  }
  &.toggled:after {
    transform: rotate(45deg);
    top: 0px;
    background: #ffffff;
    opacity: 1;
  }
  &.toggled:before {
    transform: rotate(-45deg);
    top: 0px;
    background: #ffffff;
    opacity: 1;
  }
`;
