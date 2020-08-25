import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { getMarkers } from "../reducers/markers-reducer";
import {
  requestMarkers,
  receiveMarkers,
  receiveMarkersError,
} from "../actions";
import MarkerForm from "./MarkerForm";
import Spinner from "./Spinner";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const Map = () => {
  const dispatch = useDispatch();
  const markers = useSelector(getMarkers);

  const [map, setMap] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [center, setCenter] = React.useState({ lat: 45.5, lng: -73.56 }); //Montréal or user position
  const [markerPosition, setMarkerPostion] = React.useState(null);

  // on long tap open form to create new marker
  const onLongTouch = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkerPostion({ lat, lng });
    setOpen(!open);
  };

  // on map load add event listener for long tap event
  // and add map to local state
  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);

    let timer;
    map.addListener("mousedown", (e) => {
      if (!timer) {
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

  // unmount map
  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  // on component load, fetch markers from database
  // and add user location
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
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
      loadingElement={<Spinner />}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={17}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
        }}
      >
        <Marker position={center} /> {/* current user position*/}
        {markers &&
          markers.map((marker) => (
            <Marker
              key={marker._id}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
      </GoogleMap>
      <MarkerForm open={open} position={markerPosition} />
    </LoadScript>
  );
};

export default React.memo(Map);
