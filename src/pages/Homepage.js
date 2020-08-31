import React from "react";
import Map from "../components/Map";
import { useSelector } from "react-redux";
import { checkIfLoggedIn } from "../reducers/user-reducer";
import Card from "../components/Cards/Card";
import styled from "styled-components";

const Homepage = () => {
  const isLoggedin = useSelector(checkIfLoggedIn);

  return (
    <>
      {isLoggedin && <Map />}
      {!isLoggedin && (
        <Wrapper>
          <Brand>Ticit</Brand>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10rem;
  background: linear-gradient(to top, #ff2204b3, #fbffc5 );
`;

const Brand = styled.div`
  margin-top: -60px;
  font-family: "Alata", sans-serif;
`;
export default Homepage;
