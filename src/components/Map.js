import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { getMarkers } from "../reducers/markers-reducer";
import {
  requestMarkers,
  receiveMarkers,
  receiveMarkersError,
  addMarker,
} from "../actions";
import { getUser } from "../reducers/user-reducer";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const Map = () => {
  const dispatch = useDispatch();
  const markers = useSelector(getMarkers);
  const user = useSelector(getUser);

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = React.useState({ lat: 45.5, lng: -73.56 }); //Montréal

  const onLongTouch = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    console.log(user)
    fetch("/api/markers", {
      method: "POST",
      body: JSON.stringify({ lat, lng, userId: user._id }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(addMarker(data.marker));
      })
      .catch((err) => console.log(err));
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);

    let timer;
    map.addListener("mousedown", (e) => {
      if (!timer) {
        console.log("toto");
        timer = setTimeout(() => onLongTouch(e), 1000);
      }
    });

    map.addListener("mouseup", (e) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = null;
    });
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  React.useEffect(() => {
    // add saved markers to map
    dispatch(requestMarkers());
    fetch("/api/markers")
      .then((res) => res.json())
      .then((data) => {
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

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={20}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        {markers &&
          markers.map((marker) => (
            <Marker
              key={marker._id}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
