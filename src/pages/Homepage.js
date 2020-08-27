import React from "react";
import Map from "../components/Map";
import { useSelector } from "react-redux";
import { checkIfLoggedIn } from "../reducers/user-reducer";

const Homepage = () => {
  const isLoggedin = useSelector(checkIfLoggedIn);

  return (
    <>
      {!isLoggedin && <section>Homepage</section>}
      {/*isLoggedin && <Map />*/}
      <Map />
    </>
  );
};

export default Homepage;
