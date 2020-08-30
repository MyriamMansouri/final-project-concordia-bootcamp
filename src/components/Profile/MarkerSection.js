import React from "react";
import { useSelector } from "react-redux";
import { getMarkers } from "../../reducers/markers-reducer";
import MarkerThumbnail from "./MarkerThumbnail";
import styled from "styled-components";

const MarkerSection = ({ markerIds }) => {
  const markers = useSelector(getMarkers);

  return (
    <Wrapper>
      {Object.keys(markerIds).map((markerId) => (
        <MarkerThumbnail
          key={markerId}
          marker={markers.find((marker) => marker._id === markerId)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: scroll;
  width: 100%;
`;

export default MarkerSection;
