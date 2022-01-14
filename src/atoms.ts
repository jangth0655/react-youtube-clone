import { IPopularVideoItems } from "./youtube-api/youtube_api";
import { atom } from "recoil";

export const videoData = atom<IPopularVideoItems[] | undefined>({
  key: "videos",
  default: [],
});
