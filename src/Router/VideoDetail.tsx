/* eslint-disable jsx-a11y/iframe-has-title */
import { useMatch, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { videoData } from "../atoms";

const Main = styled.div`
  padding: 0 1em;
  padding-top: 5em;
  max-width: 80em;
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
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  width: 100%;
  max-width: 45em;
  height: 25.3em;
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
  color: ${(props) => props.theme.colors.white.dark};
  font-size: 1rem;
  padding: 1em;
  line-height: 1.3;
  width: fit-content;
  overflow-y: scroll;
  @media screen and (max-width: 40em) {
    font-size: 0.8rem;
  }
`;

const VideoList = styled.ul`
  padding: 0 2em;
  flex: 30%;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  gap: 2em;
  @media screen and (max-width: 40em) {
    margin-top: 6em;
  }
`;

const ListIem = styled.li<{ bgPoster: string }>`
  cursor: pointer;
  width: 100%;
  height: 10em;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius};
  background-image: url(${(props) => props.bgPoster});
  background-size: cover;
  background-position: center center;
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 40em) {
    margin: auto;
    height: 20em;
  }
`;

const VideoDetail = () => {
  const navigate = useNavigate();
  const videosArray = useRecoilValue(videoData);
  const videoMatch = useMatch("/videos/:videoId");

  const videoItem = videosArray?.find(
    (video) => video.id === videoMatch?.params.videoId
  );

  const onVideo = (id: string) => {
    navigate(`/videos/${id}`);
  };

  return (
    <Main>
      <VideoWrap>
        <VideoPlayBox>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoMatch?.params.videoId}`}
          />
        </VideoPlayBox>
        <VideoPlayInfo>
          {videoItem ? (
            <>
              <VideoTitle>{videoItem?.snippet.title}</VideoTitle>
              <VideoDescription>
                {videoItem?.snippet.description}
              </VideoDescription>
            </>
          ) : (
            <span
              style={{
                color: "white",
              }}
            >
              Sorry, Please go home back again...
            </span>
          )}
        </VideoPlayInfo>
      </VideoWrap>
      <VideoList>
        {videosArray?.map((item) => (
          <ListIem
            onClick={() => onVideo(item.id)}
            bgPoster={item.snippet.thumbnails.medium.url}
          ></ListIem>
        ))}
      </VideoList>
    </Main>
  );
};

export default VideoDetail;
