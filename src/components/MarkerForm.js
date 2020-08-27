import React from "react";
import { addMarker } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducers/user-reducer";
import styled from "styled-components";
import Card from "./Cards/Card";
import Button from "./Buttons/Button";
import { OutlinedClose } from "./Icons";
import UnstyledButton from "./Buttons/UnstyledButton";
import { COLORS } from "./assets/styles";
import { Label, Input } from "./StyledFormComponents";
import Error from "./Error";

const MarkerForm = ({ open, setOpen, position }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [picture, setPicture] = React.useState(null);
  const [picUrl, setPicUrl] = React.useState("");
  const [error, setError] = React.useState("");

  const inputRef = React.useRef(null);
  // each time for reopened, fields are cleared
  React.useEffect(() => {
    setTitle("");
    setDescription("");
    setPicture(null);
    setPicUrl("");
    setError("");
    if (inputRef) inputRef.current.value = "";
  }, [open]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("marker-pic", picture);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("lat", position.lat);
    formData.append("lng", position.lng);
    formData.append("userId", user._id);

    fetch("/api/markers", {
      method: "POST",
      body: formData,
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          dispatch(addMarker(data.marker));
          setOpen(false);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

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
    <Wrapper>
      <Card
        open={open}
        side="bottom"
        style={styleCard}
        backdrop={true}
        hasPriority={true}
      >
        <div>
          <Img url={picUrl} />

          <form onSubmit={onSubmit} encType="multipart/form-data">
            <InputFile
              ref={inputRef}
              type="file"
              name="marker-pic"
              onChange={(e) => handlePicChange(e)}
            />
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give a title to your pin"
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a description"
              />
            </div>
            <Button>CREATE</Button>
          </form>
          <Error>{error}</Error>
        </div>
        <CloseBtn onClick={() => setOpen(false)}>
          <OutlinedClose />
        </CloseBtn>

      </Card>
    </Wrapper>
  );
};

const styleCard = {
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  zIndex: 100,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Img = styled.div`
  border: 1px solid ${COLORS.text};
  height: inherit;
  background: url(${(props) => props.url}) center no-repeat ${COLORS.lightText};
  background-size: cover;
  height: 300px;
`;
const InputFile = styled.input`
  margin: 10px 0;
`;
const CloseBtn = styled(UnstyledButton)`
  color: ${COLORS.text};
  margin: 0 auto;
`;

export default MarkerForm;
