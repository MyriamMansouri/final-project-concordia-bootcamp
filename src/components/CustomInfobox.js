import React from "react";
import { InfoBox } from "@react-google-maps/api";
import SmallCard from "./Cards/SmallCard";
import UnstyledButton from "./Buttons/UnstyledButton";
import styled from "styled-components";

const CustomInfobox = ({ marker }) => {
  const { lat, lng, url, title, description } = marker;

  const InfoBoxRef = React.useRef(null);

  const onLoad = () => {
    InfoBoxRef.current.addEventListener("dblclick", () =>
      console.log("clicked")
    );
  };
  return (
    <InfoBox
      options={{
        enableEventPropagation: false,
        closeBoxURL: "",
      }}
      position={{ lat, lng }}
      onClick={() => console.log("clicked")}
      onLoad={onLoad}
    >
      <UnstyledButton ref={InfoBoxRef}>
        <SmallCard onClick={() => console.log("clicked")}>
          {url && (
            <Img
              src={url}
              alt="Markers's pic"
              onClick={() => console.log("clicked")}
            />
          )}
          <button>Upvote</button>
          <button>Downvote</button>
          <Title>{title}</Title>
          <p>{description}</p>
        </SmallCard>
      </UnstyledButton>
    </InfoBox>
  );
};

const Img = styled.img`
  height: 200px; ;
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 10px 0;
`;

export default CustomInfobox;
