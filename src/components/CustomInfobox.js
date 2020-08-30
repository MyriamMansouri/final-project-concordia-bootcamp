import React from "react";
import { InfoBox } from "@react-google-maps/api";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducers/user-reducer";
import { voteMarker, updateUser } from "../actions";
import SmallCard from "./Cards/SmallCard";

import VoteBtn from "./Buttons/VoteBtn";

const CustomInfobox = ({ marker }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getUser);

  const {
    lat,
    lng,
    url,
    title,
    description,
    _id,
    upvoteUsers,
    downvoteUsers,
  } = marker;

  const [vote, setVote] = React.useState(null);
  const UpvoteRef = React.useRef(null);
  const DownvoteRef = React.useRef(null);

  React.useEffect(() => {
    if (vote) {
      fetch(`api/markers/${_id}`, {
        method: "PUT",
        body: JSON.stringify({ vote, userId: currentUser._id }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            dispatch(voteMarker(data.marker));
            // update
            fetch(`api/users/${currentUser._id}`, {
              method: "PUT",
              body: JSON.stringify({ vote, markerId: _id }),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => dispatch(updateUser(data.user)))
              .catch((err) => console.log(err));
          } else {
            throw data.message;
          }
        })
        .catch((err) => console.log(err));
    }
  }, [vote]);

  const onLoad = () => {
    UpvoteRef.current.addEventListener("click", function () {
      setVote("up");
    });
    DownvoteRef.current.addEventListener("click", function () {
      setVote("down");
    });
  };

  const onUnmount = () => {
    UpvoteRef.current.removeEventListener("click", function () {
      setVote("up");
    });
    DownvoteRef.current.removeEventListener("click", function () {
      setVote("down");
    });
  };

  const votes = () => {
    const upvotes = upvoteUsers ? Object.keys(upvoteUsers).length : 0;
    const downvotes = downvoteUsers ? Object.keys(downvoteUsers).length : 0;
    return upvotes - downvotes;
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
        {votes()}
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
