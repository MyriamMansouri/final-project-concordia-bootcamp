import React from "react";
import { addMarker, updateUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducers/user-reducer";
import { sendMarkerStatus } from "../reducers/markers-reducer";
import styled from "styled-components";
import Card from "./Cards/Card";
import Button from "./Buttons/Button";
import { OutlinedClose } from "./Icons";
import UnstyledButton from "./Buttons/UnstyledButton";
import { COLORS } from "./assets/styles";
import { Label, Input } from "./Forms/StyledFormComponents";
import Img from "./Misc/Img";
import InputPicture from "./Forms/InputPicture";
import Error from "./Error";

const MarkerForm = ({ open, setOpen, position }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const { _id } = user;

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [picture, setPicture] = React.useState(null);
  const [picUrl, setPicUrl] = React.useState("");
  const [error, setError] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(false);

  // each time for reopened, fields are cleared
  React.useEffect(() => {
    setTitle("");
    setDescription("");
    setPicture(null);
    setPicUrl("");
    setError("");
    setIsDisabled(false)
  }, [open]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("marker-pic", picture);
    formData.append("description", description);
    formData.append("title", title);
    formData.append("lat", position.lat);
    formData.append("lng", position.lng);
    formData.append("userId", _id);

    // disable Send button while info gets transfered to BE
    setIsDisabled(true);
    fetch("/api/markers", {
      method: "POST",
      body: formData,
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          dispatch(addMarker(data.marker));
          fetch(`/api/users/${_id}`, {
            method: "PUT",
            body: JSON.stringify({
              action: "create",
              markerId: data.marker._id,
            }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === 200) {
                dispatch(updateUser(data.user));
              }
            })
            .catch((err) => console.log(err));
          setOpen(false);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        setIsDisabled(false);
        console.log(err);
      });
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
            {open && (
              <InputPicture setPicture={setPicture} setPicUrl={setPicUrl} />
            )}
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
            <Button disabled={isDisabled}>CREATE</Button>
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

const CloseBtn = styled(UnstyledButton)`
  color: ${COLORS.text};
  margin: 0 auto;
`;

export default MarkerForm;
