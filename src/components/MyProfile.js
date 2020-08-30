import React from "react";
import Profile from "./Profile/Profile";
import { useSelector } from "react-redux";
import { getUser } from "../reducers/user-reducer";

const MyProfile = () => {
  const currentUser = useSelector(getUser);
  return <> {currentUser && <Profile user={currentUser} />}</>;
};

export default MyProfile;
