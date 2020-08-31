import React from "react";
import Img from "../Misc/Img";
import styled from "styled-components";
import { Title3 } from "../Misc/typo";

const MarkerThumbnail = ({ marker }) => {
  const { url, title } = marker;

  return (
    <Wrapper>
      <Img url={url} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled(Title3)`
  text-align: center;
`;
export default MarkerThumbnail;
