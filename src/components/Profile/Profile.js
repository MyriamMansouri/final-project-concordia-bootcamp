import React from "react";
import Card from "../Cards/Card";
import MarkerSection from "./MarkerSection";

const Profile = ({ user }) => {
  const { name, upvotedMarkers, createdMarkers } = user;
  console.log(user);
  return (
    <Card>
      {/*avatarUrl && <Img url={avatarUrl} />*/}
      <p>{name}</p>
      {upvotedMarkers && (
        <div>
          <p>Pins I upvoted</p>
          <MarkerSection markerIds={upvotedMarkers} />
        </div>
      )}
      {createdMarkers && (
        <div>
          <p>Pins I created</p>
          <MarkerSection markerIds={createdMarkers} />
        </div>
      )}
    </Card>
  );
};

export default Profile;
