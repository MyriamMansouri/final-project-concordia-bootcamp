import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import LongPressable from "react-longpressable";
import { getMarkers } from "../reducers/markers-reducer";
import {
  requestMarkers,
  receiveMarkers,
  receiveMarkersError,
} from "../actions";
import MarkerForm from "./MarkerForm";
import Spinner from "./Spinner";
import CustomMarker from "./CustomMarker";
import userMarkerIcon from "./assets/compass.svg";
import markerIcon from "./assets/placeholder.svg";
import mapStyles from "./assets/map-styles.json";

const containerStyle = {
  width: "100%",
  height: "725px",
};

const Map = () => {
  const dispatch = useDispatch();
  const markers = useSelector(getMarkers);
  const [map, setMap] = React.useState(null);
  const [open, setOpen] = React.useState(false); // open new marker form
  const [center, setCenter] = React.useState({ lat: 45.5, lng: -73.56 }); //Montréal or user position
  const [markerPosition, setMarkerPostion] = React.useState(null);
  const [closeInfoBoxes, setCloseInfoBoxes] = React.useState(false);

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

    const listener = (position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };
    
    //if geolocation allowed, set marker to user position
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(listener);
    }

    //cleanup function
    return (listener) => {
      navigator.geolocation.clearWatch(listener);
    };
  }, [dispatch]);

  const handleLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);
  const handleUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // trigger infobox close when click anywhere outside infobox on the map
  // reset closeInfoBoxes on mouse up
  // get position of the click
  const handleMouseDown = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkerPostion({ lat, lng });
    setCloseInfoBoxes(true);
  };

  const handleMouseUp = () => {
    setCloseInfoBoxes(false);
  };

  // open new marker form on longpress
  const onLongPress = (e) => {
    setOpen(!open);
  };

  const onShortPress = (e) => {
    // error if I omit this function
    // returns nothing - pschhhh the wind and the vast emptiness of the Tartar plains
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
      loadingElement={<Spinner />}
    >
      <LongPressable
        onShortPress={onShortPress}
        onLongPress={onLongPress}
        longPressTime={700}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={17}
          center={center}
          options={{
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: false,
            styles: mapStyles,
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onLoad={handleLoad}
          onUnmount={handleUnmount}
        >
          {/* current user position*/}
          <Marker position={center} icon={userMarkerIcon} animation={2} />

          {markers &&
            markers.map((marker) => (
              <CustomMarker
                key={marker._id}
                marker={marker}
                icon={markerIcon}
                closeInfoBoxes={closeInfoBoxes}
                setCloseInfoBoxes={setCloseInfoBoxes}
              />
            ))}
        </GoogleMap>
      </LongPressable>
      <MarkerForm open={open} setOpen={setOpen} position={markerPosition} />
    </LoadScript>
  );
};

export default React.memo(Map);
