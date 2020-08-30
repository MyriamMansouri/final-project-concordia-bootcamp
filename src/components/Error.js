import React from "react";
import styled from "styled-components";
import { COLORS } from "./assets/styles";

const Error = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  color: ${COLORS.bad};
  margin: 10px 0;
`;

export default Error;
