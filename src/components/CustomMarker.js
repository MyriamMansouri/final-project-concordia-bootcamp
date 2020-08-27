import React, { useEffect } from "react";
import { Marker } from "@react-google-maps/api";
import CustomInfobox from "./CustomInfobox";

const CustomMarker = ({ marker, closeInfoBoxes, setCloseInfoBoxes, icon }) => {
  
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
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      icon={icon}
    >
      {open && <CustomInfobox marker={marker}/>}
    </Marker>
  );
};

export default CustomMarker;
