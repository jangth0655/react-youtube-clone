import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchVideos } from "../atoms";
import Loader from "../components/Loader";
import { getSearch, IGetSearch } from "../youtube-api/youtube_api";

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

const ItemLi = styled.li`
  cursor: pointer;
  color: black;
  height: 20em;
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const ItemImgBox = styled.div<{ bgPhoto?: string }>`
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  width: 100%;
  height: 70%;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;

const ItemInfo = styled.div`
  margin-top: 0.7em;
  height: 30%;
`;

const ItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.extraActive};
  @media screen and (max-width: 40em) {
    font-size: 0.8rem;
  }
`;

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { isLoading, data } = useQuery<IGetSearch>(["videos", "search"], () =>
    getSearch(keyword)
  );

  const setSearchVideoArray = useSetRecoilState(searchVideos);

  useEffect(() => {
    setSearchVideoArray(data?.items);
  }, [data?.items, setSearchVideoArray]);

  const selectVideo = (id: string) => {
    navigate(`/search/${id}`);
  };

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <Main>
      <VideoItems>
        {data?.items.map((item) => (
          <ItemLi
            onClick={() => selectVideo(item.id.videoId)}
            key={item.id.videoId}
          >
            <ItemImgBox
              bgPhoto={item.snippet.thumbnails.medium.url}
            ></ItemImgBox>
            <ItemInfo>
              <ItemTitle>{item.snippet.title}</ItemTitle>
            </ItemInfo>
          </ItemLi>
        ))}
      </VideoItems>
    </Main>
  );
};

export default Search;
