import React, { useEffect } from "react";
import { Marker } from "@react-google-maps/api";
import CustomInfobox from "./CustomInfobox";

const CustomMarker = ({ marker, closeInfoBoxes }) => {
  const { lat, lng } = marker;
  const position = { lat, lng };
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (closeInfoBoxes) setOpen(false);
  }, [closeInfoBoxes]);

  console.log(marker);

  const handleClick = (e) => {
    setOpen(!open);
  };

  return (
    <Marker key={marker._id} position={position} onClick={handleClick}>
      {open && <CustomInfobox position={position} />}
    </Marker>
  );
};

export default CustomMarker;
