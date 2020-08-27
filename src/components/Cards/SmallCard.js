import React from "react";
import styled from "styled-components";
import { SPACING } from "../assets/styles";

const SmallCard = ({ children }) => {
  return <CardDiv>{children}</CardDiv>;
};

export default SmallCard;

const CardDiv = styled.div`
  width: 200px;
  min-height: 200px;
  display: flex;
  flex-flow: column nowrap;
  background-color: #ffffff;
  padding: 10px;
`;
