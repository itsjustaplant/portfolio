import { useLanyardWS } from "use-lanyard";

import ProgressBar from "./ProgressBar";
import Link from "./Link";

const defaultNowPlayingData = {
  song: "Angelina",
  artist: "Pinegrove",
  album_art_url:
    "https://i.scdn.co/image/ab67616d0000b2734e48dddf8b7fa7f224015588",
  timestamps: {
    start: 0,
    end: 0,
  },
  track_id: "7Dt26KoNRmZpzlVwMe6LSP",
  album: "Everything So Far",
};

const NowPlaying = () => {
  const spotifyData = useLanyardWS("368500476209004546")?.spotify || defaultNowPlayingData;

  return (
    <div className="my-4 p-2 rounded-md border-none bg-dark-eerie-black flex gap-3 shadow-dark transition-all duration-300 hover:shadow-light">
      <div className="h-20 min-w-20 rounded-md">
        <img
          className="w-20 h-20 rounded-md"
          src={
            spotifyData?.album_art_url ?? defaultNowPlayingData.album_art_url
          }
          alt={`Cover art of ${spotifyData?.song} by ${spotifyData?.artist}`}
        />
      </div>
      <div className="flex flex-col w-full py-1 gap-2 overflow-hidden">
        <div className="flex flex-col gap-1">
          <Link
            className="text-md text-white min-h-5 text-left truncate"
            showIcon={false}
            href={`https://open.spotify.com/track/${spotifyData?.track_id}`}
          >
            {spotifyData?.song}
          </Link>
          <span className="text-silver text-sm min-h-4 leading-4 -mt-0.5 max-w-60 text-left truncate">{`by ${spotifyData?.artist}`}</span>
        </div>
        <div className="flex flex-col w-full">
          <ProgressBar
            start={spotifyData?.timestamps.start}
            end={spotifyData?.timestamps.end}
          />
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
