import React from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../actions";

import UnstyledButton from "./Buttons/UnstyledButton";

const LogOut = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    fetch("/api/users/logout")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(resetUser());
        }
      })
      .catch((err) => console.log(err));
  };
  return <UnstyledButton onClick={handleClick}>Log out</UnstyledButton>;
};

export default LogOut;
