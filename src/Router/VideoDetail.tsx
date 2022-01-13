/* eslint-disable jsx-a11y/iframe-has-title */
import { useMatch } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  padding: 0 1em;
  padding-top: 5em;
`;

const VideoPlayBox = styled.div`
  padding: 2em;
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  max-width: 45em;
  height: 25.3em;
`;

const VideoDetail = () => {
  const videoMatch = useMatch("/videos/:videoId");

  return (
    <Main>
      <VideoPlayBox>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoMatch?.params.videoId}`}
        />
      </VideoPlayBox>
    </Main>
  );
};

export default VideoDetail;
