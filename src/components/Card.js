import React from "react";
import styled from "styled-components";
import { SPACING } from "./assets/styles";

// side prop defines where the card slides from on toggle
const Card = ({ open, side, children, style }) => {
  return (
    <CardDiv className={open && "toggled"} style={style} side={side}>
      {children}
    </CardDiv>
  );
};

export default Card;

export const CardDiv = styled.div`
  z-index: 70;
  padding: ${SPACING.spacing};
  background-color:#ffffff;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: ${(props) => (props.side === "top" ? "-100%" : null)};
  right: ${(props) => (props.side === "right" ? "-100%" : null)};
  left: ${(props) => (props.side === "left" ? "-100%" : null)};
  bottom: ${(props) => (props.side === "bottom" ? "-100%" : null)};
  box-sizing: border-box;
  position: absolute;
  transition: ${(props) => props.side} 250ms ease-out;
  &.toggled {
    top: ${(props) => (props.side === "top" ? 0 : null)};
    right: 0;
    left: ${(props) => (props.side === "left" ? 0 : null)};
    bottom: 0;
  }
`;
