import React from "react";
import Card from "./Cards/Card";
import styled from "styled-components";
import { COLORS } from "./assets/styles";

const Profile = ({ user }) => {
  const { name, email } = user;
  console.log(user)
  return (
    <Card>
      {/*avatarUrl && <Img url={avatarUrl} />*/}
      <p>{name}</p>
      <p>{email}</p>
    </Card>
  );
};

/*const Img = styled.div`
  border: 1px solid ${COLORS.text};
  height: inherit;
  background: url(${(props) => props ? props.url : ''}) center no-repeat ${COLORS.lightText};
  background-size: contain;
  height: 300px;
`;*/

export default Profile;
