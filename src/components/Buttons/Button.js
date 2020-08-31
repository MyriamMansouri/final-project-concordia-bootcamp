import React from "react";
import styled from "styled-components";
import { COLORS, SPACING } from "../assets/styles";

const Button = ({ children, theme, style }) => {
  return (
    <Btn theme={theme} style={style}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  font-weight: bold;
  color: #ffffff;
  background-color: ${(props) =>
    props.theme === "accent" ? COLORS.accent : COLORS.primary};
  padding: 10px 25px;
  border: 2px solid
    ${(props) => (props.theme === "accent" ? COLORS.accent : COLORS.primary)};
  cursor: pointer;
`;
export default Button;
