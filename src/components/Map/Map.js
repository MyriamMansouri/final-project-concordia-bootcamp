import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { getMarkers } from "../../reducers/markers-reducer";
import {
  requestMarkers,
  receiveMarkers,
  receiveMarkersError,
} from "../../actions";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const Map = () => {
  const dispatch = useDispatch();
  const markers = useSelector(getMarkers);

  const [center, setCenter] = React.useState({ lat: 45.5, lng: -73.56 }); //Montréal

  React.useEffect(() => {
    // add saved markers to map
    dispatch(requestMarkers());
    fetch("/api/markers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(receiveMarkers(data.markers));
      })
      .catch((err) => dispatch(receiveMarkersError()));

    //if geolocation allowed, set marker to user position
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    fetch("/api/markers", {
      method: "POST",
      body: JSON.stringify({ lat, lng }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        center={center}
        onClick={handleClick}
      >
        {markers &&
          markers.map((marker) => (
            <Marker key={marker._id} position={{ lat: marker.lat, lng: marker.lng }} />
          ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
