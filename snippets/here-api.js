import React from "react";
import { initializeMap, updateUserPosition, addMarker } from "./Map/helpers";

const Map = () => {
  const [map, setMap] = React.useState(null);
  // reference to the DOM (works like document.getElementById)
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    // create default map object and place it on the DOM
    const map = initializeMap(mapRef);

    setMap(map);
    // event listener, recenters map if user moves (and geolocation is on)
    updateUserPosition(map);

    let timer;

    // on long tap, add marker to map
    // setTimeout fires onLongTouch function after indicated time
    // if tap is too short, setTimeout is just di
    map.addEventListener("pointerdown", (e) => {
      if (!timer) {
        timer = setTimeout(() => onLongTouch(map, e), 1000);
      }
    });

    map.addEventListener("pointerup", (e) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = null;
    });
  }, [mapRef]);

  const onLongTouch = (map, e) => {
    const { viewportX, viewportY } = e.currentPointer; // API's map event property
    const coords = map.screenToGeo(viewportX, viewportY);
    addMarker(map, { lat: coords.lat, lng: coords.lng });
  };

  return <div className="map" ref={mapRef} style={{ height: "100vh" }} />;
};

export default Map;
