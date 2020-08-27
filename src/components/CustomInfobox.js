import React from "react";
import { InfoBox } from "@react-google-maps/api";


const CustomInfobox = ({ position, url }) => {
  return (
    <InfoBox
      options={{
        pane: "mapPane",
        closeBoxURL: "",
        enableEventPropagation: true,
      }}
      position={position}
    >
      <div
        style={{
          backgroundColor: "yellow",
          opacity: 0.75,
          padding: 12,
        }}
      >
        <img src={url} />
        <div style={{ fontSize: 16, fontColor: `#08233B` }}>Hello, World!</div>
      </div>
    </InfoBox>
  );
};

export default CustomInfobox;
