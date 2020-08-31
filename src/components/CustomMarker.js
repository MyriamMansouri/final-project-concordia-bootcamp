import React, { useEffect } from "react";
import { Marker } from "@react-google-maps/api";
import CustomInfobox from "./CustomInfobox";
import UserIcon from "./assets/user-marker.svg";
import icon from "./assets/marker.svg";

const CustomMarker = ({
  marker,
  closeInfoBoxes,
  setCloseInfoBoxes,
  createdByCurrUser,
  clusterer
}) => {
  const { lat, lng } = marker;

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (closeInfoBoxes) {
      setOpen(false);
    }
  }, [closeInfoBoxes]);

  // on click, first close all the other infoboxes
  // then open the targetted infobox
  const handleMouseDown = () => {
    setCloseInfoBoxes(true);
  };

  // reset closeInfoBoxes
  const handleMouseUp = () => {
    setOpen(!open);
    setCloseInfoBoxes(false);
  };

  return (
    <Marker
      key={marker._id}
      position={{ lat, lng }}
      clusterer={clusterer}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      icon={createdByCurrUser ? UserIcon : icon}
    >
      {open && <CustomInfobox marker={marker} />}
    </Marker>
  );
};

export default CustomMarker;
