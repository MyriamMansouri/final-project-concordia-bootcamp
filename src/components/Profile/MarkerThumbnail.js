import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Img from "../Misc/Img";
import styled from "styled-components";
//import { Title3 } from "../Misc/typo";

const MarkerThumbnail = ({ marker }) => {

  // const { url, title } = marker;
  const { url, lat, lng } = marker;

  return (
    <Link to={`/map?lat=${lat}&lng=${lng}`}>
      <Wrapper >
        <Img url={url} />
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

/*const Title = styled(Title3)`
  text-align: center;
`;*/
export default MarkerThumbnail;
