import React from "react";
import { InfoBox } from "@react-google-maps/api";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducers/user-reducer";
import { voteMarker, updateUser } from "../actions";
import SmallCard from "./Cards/SmallCard";
import VoteBtn from "./Buttons/VoteBtn";
import { COLORS } from "./assets/styles";

const CustomInfobox = ({ marker }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getUser);
  console.log(currentUser);
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
        {url && <Img src={url} alt="Marker illustrative pic" />}
        <Wrapper>
          <TextWrapper>
            {" "}
            <Title>{title}</Title> <p>{description}</p>
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

const Img = styled.img`
  width: 270px;
  height: 200px;
`;

const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
`;

const BtnWrapper = styled.div`
  font-size: 1rem;
  margin: 10px;
  text-align:center;
  border:solid 1px ${COLORS.lightText};
  border-radius:20px;
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
