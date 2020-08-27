import React from "react";
import { InfoBox } from "@react-google-maps/api";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { voteMarker } from "../actions";
import SmallCard from "./Cards/SmallCard";

import VoteBtn from "./Buttons/VoteBtn";

const CustomInfobox = ({ marker }) => {
  const dispatch = useDispatch();
  const { lat, lng, url, title, description, _id, votes } = marker;
  const [voteValue, setVoteValue] = React.useState(0);

  const UpvoteRef = React.useRef(null);
  const DownvoteRef = React.useRef(null);

  React.useEffect(() => {
    fetch(`api/markers/${_id}`, {
      method: "PUT",
      body: JSON.stringify({ votes: voteValue }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setVoteValue(0);
          dispatch(voteMarker(data.marker._id, voteValue));
        } else {
          throw data.message;
        }
      })
      .catch((err) => console.log(err));
  }, [voteValue]);

  const onLoad = () => {
    UpvoteRef.current.addEventListener("click", function () {
      setVoteValue(1);
    });
    DownvoteRef.current.addEventListener("click", function () {
      setVoteValue(-1);
    });
  };

  const onUnmount = () => {
    UpvoteRef.current.removeEventListener("click", function () {
      setVoteValue(1);
    });
    DownvoteRef.current.removeEventListener("click", function () {
      setVoteValue(-1);
    });
  };

  return (
    <InfoBox
      options={{
        enableEventPropagation: false,
        closeBoxURL: "",
      }}
      position={{ lat, lng }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <SmallCard>
        {url && <Img src={url} alt="Marker illustrative pic" />}
        <VoteBtn ref={UpvoteRef}>Up</VoteBtn>
        {votes}
        <VoteBtn ref={DownvoteRef}>Down</VoteBtn>
        <Title>{title}</Title>
        <p>{description}</p>
      </SmallCard>
    </InfoBox>
  );
};

const Img = styled.img`
  height: 200px;
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 10px 0;
`;

export default CustomInfobox;
