import React from "react";
import { InfoBox } from "@react-google-maps/api";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducers/user-reducer";
import { voteMarker, updateUser } from "../actions";
import SmallCard from "./Cards/SmallCard";
import VoteBtn from "./Buttons/VoteBtn";
import {Image, Transformation} from 'cloudinary-react';
import { COLORS } from "./assets/styles";
import { Title3 } from "./Misc/typo";

const CustomInfobox = ({ marker }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getUser);

  const {
    lat,
    lng,
    imgId,
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
      fetch(`/api/markers/${_id}`, {
        method: "PUT",
        body: JSON.stringify({ action: vote, userId: currentUser._id }),
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
            fetch(`/api/users/${currentUser._id}`, {
              method: "PUT",
              body: JSON.stringify({ action: vote, markerId: _id }),
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
  }, [vote, _id, currentUser._id, dispatch]);

  const onLoad = () => {
    UpvoteRef.current.addEventListener("click", function () {
      setVote("upvote");
    });
    DownvoteRef.current.addEventListener("click", function () {
      setVote("downvote");
    });
  };

  const onUnmount = () => {
    UpvoteRef.current.removeEventListener("click", function () {
      setVote("upvote");
    });
    DownvoteRef.current.removeEventListener("click", function () {
      setVote("downvote");
    });
  };

  const votes = () => {
    const upvotes = upvoteUsers ? Object.keys(upvoteUsers).length : 0;
    const downvotes = downvoteUsers ? Object.keys(downvoteUsers).length : 0;
    return upvotes - downvotes;
  };
  const disableVoteBtn = (voteArray, _id) => {
    // if user didn't vote ever => both btns are enabled
    if (!currentUser.upvotedMarkers && !currentUser.downvotedMarkers) {
      return false;
    }
    // if marker's id in array btn disabled
    if (voteArray && voteArray[_id]) {
      return true;
    }
    return false;
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
        {imgId && (
          <Image cloudName="hcrafbjaa" publicId={imgId}>
            <Transformation width="270" height="270" crop="fill" quality="auto:low" />
          </Image>
        )}

        <Wrapper>
          <TextWrapper>
            <Title3>{title}</Title3> <p>{description}</p>
          </TextWrapper>

          <BtnWrapper>
            <VoteBtn
              ref={UpvoteRef}
              disabled={disableVoteBtn(currentUser.upvotedMarkers, _id)}
              type="up"
            >
              Up
            </VoteBtn>
            {votes()}
            <VoteBtn
              ref={DownvoteRef}
              disabled={disableVoteBtn(currentUser.downvotedMarkers, _id)}
              type="down"
            >
              Down
            </VoteBtn>
          </BtnWrapper>
        </Wrapper>
      </SmallCard>
    </InfoBox>
  );
};

const BtnWrapper = styled.div`
  font-size: 1rem;
  margin: 10px;
  text-align: center;
  border: solid 1px ${COLORS.lightText};
  border-radius: 20px;
`;

const TextWrapper = styled.div`
  padding: 20px 0 10px 10px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CustomInfobox;
