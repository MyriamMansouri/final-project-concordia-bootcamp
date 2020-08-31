import React from "react";
import Card from "../Cards/Card";
import MarkerSection from "./MarkerSection";
import { Title1, Title2 } from "../Misc/typo";
import styled from 'styled-components'

const Profile = ({ user }) => {
  const { name, upvotedMarkers, createdMarkers } = user;
  return (
    <Card>
      <Wrapper>
        <Title1>{name}</Title1>
        {upvotedMarkers && (
          <div>
            <Title2>Pins I upvoted</Title2>
            <MarkerSection markerIds={upvotedMarkers} />
          </div>
        )}
        {createdMarkers && (
          <div>
            <Title2>Pins I created</Title2>
            <MarkerSection markerIds={createdMarkers} />
          </div>
        )}
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default Profile;
