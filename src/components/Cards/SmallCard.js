import React from "react";
import styled from "styled-components";
import { COLORS } from "../assets/styles";

const SmallCard = ({ children }) => {
  return <CardDiv>{children}</CardDiv>;
};

export default SmallCard;

const CardDiv = styled.div`
  width: 270px;
  min-height: 200px;
  display: flex;
  flex-flow: column nowrap;
  background-color: #ffffff;
  border: 1px solid ${COLORS.lightText};
`;
