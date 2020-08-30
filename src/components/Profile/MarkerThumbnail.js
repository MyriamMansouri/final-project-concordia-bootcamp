import React from "react";
import Img from "../Misc/Img";
import styled from "styled-components";

const MarkerThumbnail = ({ marker }) => {
  const { url, title } = marker;

  return (
    <Wrapper>
      <Img url={url} />
      <h3>{title}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 150px;
`;

export default MarkerThumbnail;
