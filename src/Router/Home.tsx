import { useQuery } from "react-query";
import styled from "styled-components";
import { getMostPopular, IPopularVideo } from "../youtube-api/youtube_api";

const Main = styled.main`
  padding: 0 1em;
  padding-top: 5em;
  height: 100vh;
`;

const VideoItems = styled.div`
  gap: 0.5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
`;

const Home = () => {
  const { isLoading, data } = useQuery<IPopularVideo>(
    ["videos", "popular"],
    getMostPopular
  );

  return (
    <Main>
      <VideoItems></VideoItems>
    </Main>
  );
};

export default Home;
