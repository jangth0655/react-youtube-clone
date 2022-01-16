const BASE_NAME = "https://youtube.googleapis.com/youtube/v3";

export const getMostPopular = async () => {
  const response = await fetch(
    `${BASE_NAME}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  return await response.json();
};

export interface IPopularVideo {
  kind: string;
  etag: string;
  items: IPopularVideoItems[];
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface IPopularVideoItems {
  id: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface IGetSearch {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IGetSearchItems[];
}

export interface IGetSearchItems {
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export const getSearch = async (query: any) => {
  const response = await (
    await fetch(
      `${BASE_NAME}/search?part=snippet&maxResults=25&q=${query}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
  ).json();
  return response;
};
