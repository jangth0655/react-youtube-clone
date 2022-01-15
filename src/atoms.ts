import { IGetSearchItems, IPopularVideoItems } from "./youtube-api/youtube_api";
import { atom } from "recoil";

export const videoData = atom<IPopularVideoItems[] | undefined>({
  key: "popularVideos",
  default: [],
});

export const searchVideos = atom<IGetSearchItems[] | undefined>({
  key: "searchVideos",
  default: [],
});
