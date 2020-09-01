import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import UnstyledButton from "./UnstyledButton";
import { setCenter } from "../../actions";
import { COLORS } from "../assets/styles";
import { Crosshair } from "../Icons";
import { useHistory } from "react-router-dom";
import { getUserPosition } from "../../reducers/map-reducer";

const CenterToUserMapBtn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userPosition = useSelector(getUserPosition);
  console.log(userPosition)
  return (
    <Btn
      onClick={() => {
        dispatch(setCenter({...userPosition}));
        history.push("/map");
      }}
    >
      <Crosshair />
    </Btn>
  );
};

export default CenterToUserMapBtn;

// styling a bit copied from google maps
const Btn = styled(UnstyledButton)`
  cursor: pointer;
  float: right;
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 50px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100%;
`;
