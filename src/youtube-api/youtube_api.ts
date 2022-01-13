export const getMostPopular = async () => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
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

interface IPopularVideoItems {
  id: string;
  channelId: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}
