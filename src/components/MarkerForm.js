import React from "react";
import { addMarker } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducers/user-reducer";
import Card from "./Card";
import Button from "./Buttons/Button";

const MarkerForm = ({ open, position }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/api/markers", {
      method: "POST",
      body: JSON.stringify({ ...position, userId: user._id }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addMarker(data.marker));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card open={open}>
      <form onSubmit={onSubmit}>
        Form
        <Button>CREATE</Button>
      </form>
    </Card>
  );
};

export default MarkerForm;
