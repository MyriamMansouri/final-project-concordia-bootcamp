import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUser } from "../actions";

import UnstyledButton from "./Buttons/UnstyledButton";

const LogOut = ({setOpen}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    fetch("/api/users/logout")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(resetUser());
          setOpen(false)
          history.push("/");
        }
        
      })
      .catch((err) => console.log(err));
  };
  return <UnstyledButton onClick={handleClick}>Log out</UnstyledButton>;
};

export default LogOut;
