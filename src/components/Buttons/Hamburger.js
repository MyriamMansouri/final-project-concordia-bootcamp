import React from "react";
import UnstyledButton from "./UnstyledButton";
import styled from "styled-components";
import { COLORS } from "../assets/styles";

const Hamburger = ({ open, setOpen }) => {
  return (
    <NavBtn onClick={() => setOpen(!open)}>
      <Navicon className={open && "toggled"} />
    </NavBtn>
  );
};

export default Hamburger;

const NavBtn = styled(UnstyledButton)`
  cursor: pointer;
  float: right;
  padding: 28px 20px;
  position: relative;
  z-index: 99;
`;
const Navicon = styled.span`
  background: ${COLORS.primary};
  display: block;
  height: 3px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;

  &:before,
  &:after {
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
  }
  &.toggled:after {
    transform: rotate(45deg);
    top: 0px;
    background: #FFFFFF;
  }
  &.toggled:before {
    transform: rotate(-45deg);
    top: 0px;
    background: #FFFFFF;
  }
`;
