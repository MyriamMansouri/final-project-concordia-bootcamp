import React from "react";
import styled from "styled-components";
import { SPACING } from "../assets/styles";

// side prop defines where the card slides from on open
// side can be equal to top, left, right, bottom
// backdrop = true : card is smaller with backdrop¸
// hasPriority = true give an insane z-index so nothing is on top of the Card
const Card = ({ open, side, backdrop, hasPriority, children, style }) => {
  return (
    <Wrapper
      className={open && "toggled"}
      side={side}
      backdrop={backdrop}
      hasPriority={hasPriority}
    >
      <CardDiv style={style} backdrop={backdrop}>
        {children}
      </CardDiv>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  z-index: ${(props) =>
    props.hasPriority && props.hasPriority === true ? 1000 : null};
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${(props) => (props.side && props.side === "top" ? "-100%" : null)};
  right: ${(props) => (props.side && props.side === "right" ? "-100%" : null)};
  left: ${(props) => (props.side && props.side === "left" ? "-100%" : null)};
  bottom: ${(props) =>
    props.side && props.side === "bottom" ? "-100%" : null};
  box-sizing: border-box;
  transition: ${(props) => (props.side && props.side ? props.side : "")} 250ms
    ease-out;
  &.toggled {
    background-color: rgba(0, 0, 0, 0.5);
    top: ${(props) => (props.side && props.side === "top" ? 0 : null)};
    right: 0;
    left: ${(props) => (props.side && props.side === "left" ? 0 : null)};
    bottom: 0;
  }
`;

const CardDiv = styled.div`
  opacity: 1;
  position: relative;
  background-color: #ffffff;
  display: flex;
  overflow-x: scroll;
  width: ${(props) =>
    props.backdrop && props.backdrop === true ? "calc(100% - 20px)" : "100%"};
  height: ${(props) =>
    props.backdrop && props.backdrop === true ? "calc(100% - 20px)" : "100%"};
  padding: ${SPACING.spacing};
  box-sizing: border-box;
`;
