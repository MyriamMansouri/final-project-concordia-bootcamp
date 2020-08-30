import React from "react";
import styled from "styled-components";
import { COLORS } from "../assets/styles";

const Img = ({ url }) => {
  return <ImgDiv url={url} />;
};

const ImgDiv = styled.div`
  background: url(${(props) => props.url}) center no-repeat ${COLORS.lightText};
  background-size: cover;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio -- obviously some kind of css evil magic */
  position: relative;
  box-sizing: border-box;
`;

export default Img;
