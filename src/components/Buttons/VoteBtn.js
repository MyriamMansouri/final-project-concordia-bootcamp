import React from "react";
import { Happy, Sad } from "../Icons";
import styled from "styled-components";
import { COLORS } from "../assets/styles";

const VoteBtn = React.forwardRef(({ disabled, type }, ref) => (
  <Btn ref={ref} disabled={disabled} type={type}>
    {type === "up" ? (
      <Happy style={{ color: disabled ? COLORS.good : COLORS.text }} />
    ) : (
      <Sad style={{ color: disabled ? COLORS.bad : COLORS.text }} />
    )}
  </Btn>
));

const Btn = styled.button`
  border-radius: 100%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default VoteBtn;
