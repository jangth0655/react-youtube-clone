import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { videoData } from "../atoms";
import VideoItem from "../components/VideoItem";
import { getMostPopular, IPopularVideo } from "../youtube-api/youtube_api";

const Main = styled.main`
  padding: 0 1em;
  padding-top: 5em;
  max-width: 80em;
  margin: auto;
`;

const VideoItems = styled.ul`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  @media screen and (max-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  const setVideosArray = useSetRecoilState(videoData);
  const { isLoading, data } = useQuery<IPopularVideo>(
    ["videos", "popular"],
    getMostPopular
  );

  useEffect(() => {
    setVideosArray(data?.items);
  }, [data?.items, setVideosArray]);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <Main>
      <VideoItems>
        {data?.items.map((video) => (
          <VideoItem key={video.id} {...video} />
        ))}
      </VideoItems>
    </Main>
  );
};

export default Home;
