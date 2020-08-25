import React from "react";
import Map from "../components/Map";
import { useSelector } from "react-redux";
import { checkIfLoggedIn } from "../reducers/user-reducer";
import styled from "styled-components";

const Homepage = () => {
  const isLoggedin = useSelector(checkIfLoggedIn);

  return (
    <>
      <section>Homepage</section>

      {isLoggedin && <Map />}
    </>
  );
};

export default Homepage;
