import React from "react";
import styled from 'styled-components'
import { COLORS, SPACING } from "../assets/styles";

const Button = ({ children }) => {
  return <Btn>{children}</Btn>;
};

const Btn = styled.button`
  color:#ffffff;
  background-color: ${COLORS.primary};
  padding: 10px 25px;
  border:none;
  cursor:pointer;

`
export default Button;
