import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";
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
import mapStyles from "./assets/map-styles.json";
import { getUser } from "../reducers/user-reducer";

const containerStyle = {
  width: "100%",
  height: "725px",
};

const Map = () => {
  const dispatch = useDispatch();
  const markers = useSelector(getMarkers);
  const currentUser = useSelector(getUser);

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
    let userPosition = null;
    //if geolocation allowed, set marker to user position
    if ("geolocation" in navigator) {
      userPosition = navigator.geolocation.watchPosition(listener);
    }

    //cleanup function
    return () => {
      if (userPosition) navigator.geolocation.clearWatch(userPosition);
    };
  }, [dispatch]);

  const handleLoad = React.useCallback(function callback(map) {
    setMap(map);
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

  const haversineDistance = (pos1, pos2) => {
    // Haversine distance between 2 points in km
    const radius = 6371; // Earth radius
    const lat1 = (pos1.lat * Math.PI) / 180;
    const lat2 = (pos2.lat * Math.PI) / 180;
    const lon1 = (pos1.lng * Math.PI) / 180;
    const lon2 = (pos2.lng * Math.PI) / 180;
    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    const a =
      Math.pow(Math.sin(deltaLat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * c;

    return distance;
  };

  const checkIfCreatedByCurrUser = (userId) => {
    return userId === currentUser._id ? true : false;
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
        >
          {/* current user position*/}
          <Marker position={center} icon={userMarkerIcon} animation={2} />
          {/*user can see all her markers but only other user'S markers when they are close*/}
          <MarkerClusterer options={{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}}>
            {(clusterer) => (
              markers &&
                markers.map(
                  (marker) =>
                    (checkIfCreatedByCurrUser(marker.userId) ||
                      haversineDistance(
                        { ...center },
                        { lat: marker.lat, lng: marker.lng }
                      ) < 2) && (
                      <CustomMarker
                        key={marker._id}
                        marker={marker}
                        clusterer={clusterer}
                        closeInfoBoxes={closeInfoBoxes}
                        setCloseInfoBoxes={setCloseInfoBoxes}
                        createdByCurrUser={checkIfCreatedByCurrUser(
                          marker.userId
                        )}
                      />
                    )
                )
            )}
          </MarkerClusterer>
        </GoogleMap>
      </LongPressable>
      <MarkerForm open={open} setOpen={setOpen} position={markerPosition} />
    </LoadScript>
  );
};

export default React.memo(Map);
