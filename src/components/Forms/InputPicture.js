import React from "react";
import styled from "styled-components";

// takes as props state function to change picture url and picture form data object
// form component as to be  encType="multipart/form-data"  for this to work
const InputPicture = ({ setPicture, setPicUrl }) => {
  const inputRef = React.useRef(null);


  // get url to preview image
  const handlePicChange = (e) => {
    const currPicture = e.target.files[0];
    if (currPicture) {
      const reader = new FileReader();
      function handleLoad() {
        setPicUrl(this.result);
        reader.removeEventListener("load", handleLoad);
      }
      reader.addEventListener("load", handleLoad);
      setPicture(currPicture);
      reader.readAsDataURL(currPicture);
    }
  };
  return (
    <InputFile
      ref={inputRef}
      type="file"
      name="marker-pic"
      onChange={(e) => handlePicChange(e)}
      required
    />
  );
};

const InputFile = styled.input`
  margin: 10px 0;
`;

export default InputPicture;
