import { useEffect, useState } from 'react';
import { useLanyardWS, type Spotify } from 'use-lanyard';

import ProgressBar from './ProgressBar';
import Link from './Link';

import '../styles/NowPlaying.css';

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
      <div className="now-playing-container">
        <div className={`left skeleton`}>
          <img alt={`Skeleton image}`}/>
        </div>
        <div className="right">
          <div className="right--top">
            <span className={`skeleton`} id="song"></span>
            <span className={`skeleton`} id="artist"></span>
          </div>
          <div className='right--bottom'>
            <div className='skeleton progress-bar-placeholder'/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="now-playing-container">
      <div className={`left `}>
        <img src={spotifyData?.album_art_url ?? defaultNowPlayingData.album_art_url } alt={`Cover art of ${spotifyData?.song} by ${spotifyData?.artist}`}/>
      </div>
      <div className="right">
        <div className="right--top">
          <Link showIcon={false} link={`https://open.spotify.com/track/${spotifyData?.track_id}`} target="blank" id="song" text={spotifyData?.song}/>
          <span id="artist">{`by ${spotifyData?.artist}`}</span>
        </div>
        <div className='right--bottom'>
          <ProgressBar start={spotifyData?.timestamps.start} end={spotifyData?.timestamps.end}/>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying;
