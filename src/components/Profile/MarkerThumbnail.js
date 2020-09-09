import React from "react";
import { Link } from "react-router-dom";
import {Image, Transformation} from 'cloudinary-react';
import styled from "styled-components";
//import { Title3 } from "../Misc/typo";

const MarkerThumbnail = ({ marker }) => {

  const { imgId, lat, lng } = marker;

  return (
    <Link to={`/map/?lat=${lat}&lng=${lng}`}>
      <Wrapper >
      <Image cloudName="hcrafbjaa" publicId={imgId}>
            <Transformation width="175" height="175" crop="fill" quality="auto:eco" />
          </Image>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default MarkerThumbnail;
