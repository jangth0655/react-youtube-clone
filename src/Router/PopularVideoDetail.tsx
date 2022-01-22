/* eslint-disable jsx-a11y/iframe-has-title */
import { useMatch, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { videoData } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";

const Main = styled.div`
  padding: 0 1em;
  padding-top: 5em;
  margin: auto;
  display: flex;
  position: relative;
  height: 100vh;
  @media screen and (max-width: 40em) {
    flex-direction: column;
    font-size: 0.8rem;
  }
`;

const VideoWrap = styled.div`
  flex: 70%;
  width: 100%;
`;

const VideoPlayBox = styled.div`
  padding: 2em;
  width: 100%;
  max-width: 45em;
  height: 25.3em;

  margin: auto;
`;

const VideoPlayInfo = styled.div`
  height: 30%;
`;

const VideoTitle = styled.p`
  padding: 0 1em;
  color: ${(props) => props.theme.colors.colorActive};
  font-weight: 600;
  font-style: italic;
  font-size: 1.2rem;
  @media screen and (max-width: 40em) {
    font-size: 1rem;
  }
`;

const VideoDescription = styled.p`
  color: ${(props) => props.theme.colors.white.white};
  font-size: 1rem;
  padding: 1em;
  line-height: 1.3;
  width: 100%;
  overflow-y: scroll;
  @media screen and (max-width: 40em) {
    font-size: 0.8rem;
  }
`;

const SmallSize = styled.div`
  margin-left: 1em;
  font-size: 0.85rem;
  width: 100%;
  overflow: scroll;
  height: 100%;
  color: ${(props) => props.theme.colors.white.dark};
`;

const ExpressionItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em;
`;

const ExpressionItem = styled.div`
  width: 100%;
`;

const Watched = styled.div`
  width: 100%;
`;
const WatchedText = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.white.dark};
`;

const ExpressionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.colors.white.dark};
  font-size: 0.8rem;
  & button {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.white.dark};
    transition: all 0.2s ease-in;
    &:hover {
      color: ${(props) => props.theme.colors.colorActive};
    }
    &:active {
      transform: scale(1.2);
    }
  }
`;

const Good = styled.div``;

const GoodIcon = styled.button`
  cursor: pointer;
  margin-bottom: 0.5em;
  font-size: 1.1rem;
`;

const GoodText = styled.p`
  font-size: 0.9rem;
`;

const Sad = styled.div``;

const SadIcon = styled.button`
  cursor: pointer;
  margin-bottom: 0.5em;
  font-size: 1.1rem;
`;

const Share = styled.div``;

const SadText = styled.p`
  font-size: 0.8rem;
`;

const ShareIcon = styled.button`
  cursor: pointer;
  margin-bottom: 0.5em;
  font-size: 1.1rem;
`;

const ShareText = styled.p`
  font-size: 0.8rem;
`;

const Bar = styled.div`
  width: 100%;
  padding: 0.5px;
  opacity: 0.5;
  background-color: ${(props) => props.theme.colors.white.dark};
  @media screen and (min-width: 40em) {
    display: none;
  }
`;

const VideoList = styled.ul`
  padding: 0 2em;
  flex: 50%;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  gap: 2em;
  height: 100vh;
  overflow-y: scroll;
  @media screen and (max-width: 40em) {
    margin-top: 3em;
    overflow-y: unset;
  }
`;
const ListItem = styled.li`
  width: 100%;
  margin: auto;
  height: 10em;
  display: flex;
  align-items: center;
  @media screen and (max-width: 40em) {
    width: 70%;
    height: 10em;
  }
`;

const ItemImg = styled.div<{ bgPoster: string }>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius};
  background-image: url(${(props) => props.bgPoster});
  background-size: cover;
  background-position: center center;
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const PopularVideoDetail = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const popularVideosArray = useRecoilValue(videoData);
  const popularVideoMatch = useMatch("/videos/:videoId");

  const popularVideoItem = popularVideosArray?.find(
    (video) => video.id === popularVideoMatch?.params.videoId
  );

  const onVideo = (id?: string) => {
    navigate(`/videos/${id}`);
  };

  return (
    <Main>
      <VideoWrap>
        <VideoPlayBox ref={videoRef}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${popularVideoMatch?.params.videoId}`}
          />
        </VideoPlayBox>
        <VideoPlayInfo>
          {popularVideoItem ? (
            <>
              <VideoTitle>{popularVideoItem?.snippet.title}</VideoTitle>
              <VideoDescription>
                {popularVideoItem?.snippet.description}
              </VideoDescription>
              <ExpressionItems>
                <ExpressionItem>
                  <Watched>
                    <WatchedText>조회수 100,000회</WatchedText>
                  </Watched>
                </ExpressionItem>
                <ExpressionItem>
                  <ExpressionIcon>
                    <Good>
                      <GoodIcon>
                        <FontAwesomeIcon
                          style={{ color: "red" }}
                          icon={faHeart}
                        />
                      </GoodIcon>
                      <GoodText>좋아요</GoodText>
                    </Good>
                    <Sad>
                      <SadIcon>
                        <FontAwesomeIcon icon={faSadTear} />
                      </SadIcon>
                      <SadText>슬퍼요</SadText>
                    </Sad>
                    <Share>
                      <ShareIcon>
                        <FontAwesomeIcon icon={faShare} />
                      </ShareIcon>
                      <ShareText>공유</ShareText>
                    </Share>
                  </ExpressionIcon>
                </ExpressionItem>
              </ExpressionItems>
            </>
          ) : (
            <span
              style={{
                color: "white",
              }}
            >
              Sorry, Please go home again
            </span>
          )}
        </VideoPlayInfo>
      </VideoWrap>
      <Bar></Bar>
      <VideoList>
        {popularVideosArray?.map((item) => (
          <ListItem key={item.id}>
            <ItemImg
              onClick={() => {
                onVideo(item.id);
                videoRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              bgPoster={item.snippet.thumbnails.medium.url}
            ></ItemImg>
            <SmallSize>{item.snippet.title}</SmallSize>
          </ListItem>
        ))}
      </VideoList>
    </Main>
  );
};

export default PopularVideoDetail;
