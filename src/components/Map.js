import React from "react";
import { initializeMap, updateUserPosition } from "./Map/helpers";

const Map = () => {
  // reference to the DOM (works like document.getElementById)
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    // create default map object and place it on the DOM
    const map = initializeMap(mapRef);
    // event listener, recenters map if user moves (and geolocation is on)
    updateUserPosition(map); 
  }, [mapRef]);

  return <div className="map" ref={mapRef} style={{ height: "100vh" }} />;
};

export default Map;
