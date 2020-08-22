import React from "react";

const Map = () => {
  
    const [myMap, setMyMap] = React.useState(null);

// reference to the div (works like document.getElementById)
  const mapDiv = React.useRef(null);

  React.useEffect(() => {
    const H = window.H;

    const platform = new H.service.Platform({
      apikey: process.env.REACT_APP_HERE_API_KEY,
    });

    // Obtain the default map types from the platform object:
    const defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    const map = new H.Map(mapDiv.current, defaultLayers.vector.normal.map, {
      zoom: 17,
      center: { lat: 45.50, lng: -73.56 }, //Montréal
    });
    setMyMap({ map });

    // update map when location changes
    const  updatePosition = (e) => {
      const coordinates = {
        lat: e.coords.latitude,
        lng: e.coords.longitude,
      };
      console.log(coordinates)

      var marker = new H.map.Marker(coordinates);
      map.addObject(marker);
      map.setCenter(coordinates);
    }
    // browser builtin API that geolocates user
    navigator.geolocation.watchPosition(updatePosition);
  }, []);

  return <div ref={mapDiv} style={{ height: "100vh" }} />;
};

export default Map;
