import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IPopularVideoItems } from "../youtube-api/youtube_api";

const ItemLi = styled.li`
  cursor: pointer;
  color: black;
  height: 20em;
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const ItemImgBox = styled.div<{ bgPhoto: string }>`
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

const VideoItem = ({ ...video }: IPopularVideoItems) => {
  const navigate = useNavigate();
  const selectedVideo = (video: any) => {
    navigate(`/videos/${video.id}`);
  };

  return (
    <ItemLi onClick={() => selectedVideo(video)}>
      <ItemImgBox bgPhoto={video.snippet.thumbnails.medium.url}></ItemImgBox>
      <ItemInfo>
        <ItemTitle>{video.snippet.title}</ItemTitle>
      </ItemInfo>
    </ItemLi>
  );
};
export default VideoItem;
