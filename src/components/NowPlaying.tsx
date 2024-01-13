import { useEffect, useState } from 'react';
import { useLanyardWS, type Spotify } from 'use-lanyard';

import ProgressBar from './ProgressBar';
import Link from './Link';


const defaultNowPlayingData = {
  song: 'Duvet',
  artist: 'bôa',
  album_art_url: 'https://i.scdn.co/image/ab67616d0000b2739e030b804258dc2017ad859f',
  timestamps: {
    start: 0,
    end: 0
  },
  track_id: "42qNWdLKCI41S4uzfamhFM",
  album: "Twilight"
}


const NowPlaying = () => {
  const data = useLanyardWS("368500476209004546");
  const [spotifyData, setSpotifyData] = useState<Spotify>(defaultNowPlayingData);

  useEffect(() => {
    const { spotify } = data || {};
    setSpotifyData(spotify || defaultNowPlayingData);
  }, [data]);

  // i better sleep
  // here is quick reminder for you plant :: this allows you to render skeleton loader if data is not present, we set the default data on effect for skeleton
  if (!data) {
    return (
      <div className="my-4 p-2 rounded-md border-none bg-eerie-black flex gap-3 shadow-dark">
        <div className='h-20 min-w-20 rounded-md animate-skeleton'>
          <img className='hidden' alt={`Skeleton image}`}/>
        </div>
        <div className="flex flex-col w-full py-1 gap-2">
          <div className="flex flex-col gap-1">
            <span className='animate-skeleton text-md text-white min-h-5 leading-5 max-w-60 whitespace-nowrap overflow-hidden text-ellipsis text-left'></span>
            <span className='animate-skeleton text-silver text-sm min-h-4 leading-4 -mt-0.5 max-w-60 whitespace-nowrap overflow-hidden text-ellipsis text-left'></span>
          </div>
          <div className='flex flex-col w-full h-full justify-center'>
            <div className='animate-skeleton w-full h-full'/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="my-4 p-2 rounded-md border-none bg-eerie-black flex gap-3 shadow-dark">
      <div className='h-20 min-w-20 rounded-md'>
        <img className='w-20 h-20 rounded-md' src={spotifyData?.album_art_url ?? defaultNowPlayingData.album_art_url } alt={`Cover art of ${spotifyData?.song} by ${spotifyData?.artist}`}/>
      </div>
      <div className="flex flex-col w-full py-1 gap-2">
        <div className="flex flex-col">
          <Link className='text-md text-white min-h-5 leading-5 max-w-60 whitespace-nowrap overflow-hidden text-ellipsis text-left' showIcon={false} link={`https://open.spotify.com/track/${spotifyData?.track_id}`} target="blank" text={spotifyData?.song}/>
          <span className='text-silver text-sm min-h-4 leading-4 -mt-0.5 max-w-60 whitespace-nowrap overflow-hidden text-ellipsis text-left'>{`by ${spotifyData?.artist}`}</span>
        </div>
        <div className='flex flex-col w-full'>
          <ProgressBar start={spotifyData?.timestamps.start} end={spotifyData?.timestamps.end}/>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying;
