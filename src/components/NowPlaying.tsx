import { useRef, useEffect, useState } from 'react';

import ProgressBar from './ProgressBar';

import '../styles/NowPlaying.css';

const defaultNowPlayingData = {
  song: 'Duvet',
  artist: 'bôa',
  album_art_url: 'https://i.scdn.co/image/ab67616d0000b2739e030b804258dc2017ad859f',
  timestamps: {
    start: 0,
    end: 0
  }
}

const NowPlaying = () => {
  const socket = useRef<WebSocket>();
  const heartbeatInterval = useRef<NodeJS.Timer>();

  const [nowPlayingData, setNowPlayingData] = useState(defaultNowPlayingData);
  const [show, setShow] = useState(false);

  const openConnection = () => {
    const ws = new WebSocket("wss://api.lanyard.rest/socket");
    ws.addEventListener("message", messageHandler);
    return ws;
  }

  const cleanSocket = () => {
    socket.current?.removeEventListener("message", messageHandler);
    clearInterval(heartbeatInterval.current);
  }

  const messageHandler = (message: MessageEvent<string>) => {
    const data = JSON.parse(message.data);

    if (data.op === 0) {
      const { d } = data;
      const { spotify } = d;

      setNowPlayingData(spotify ?? defaultNowPlayingData);
      setShow(true);
    }
    if (data.op === 1) {
      const msg = {
          op: 2,
          d: { subscribe_to_id: "368500476209004546" },
      };

      if (socket) {
        socket.current?.send(JSON.stringify(msg));
        heartbeatInterval.current = setInterval(() => {
          try {
            const msg = {
              op: 3
            }
            if (socket.current?.readyState === socket.current?.OPEN) {
              socket.current?.send(JSON.stringify(msg));
            }
          } catch (e) {
            cleanSocket();
          }
        }, data.d.heartbeat_interval);
      }
    }
    return;
  }

  useEffect(() => {
    socket.current = openConnection();
    return () => {
      if (socket.current) {
        return cleanSocket();
      }
    };
  }, []);

  return (
    <div className="now-playing-container">
    <div className={`left ${!show ? 'skeleton' : ''}`}>
      <img src={nowPlayingData?.album_art_url} alt={`Cover art of ${nowPlayingData?.song} by ${nowPlayingData?.artist}`}/>
    </div>
    <div className="right">
      <div className="right--top">
        <span className={`${!show ? 'skeleton' : ''}`} id="song">{show && nowPlayingData?.song}</span>
        <span className={`${!show ? 'skeleton' : ''}`} id="artist">{show && nowPlayingData?.artist}</span>
      </div>
      <div className='right--bottom'>
        {show ? (
          <ProgressBar start={nowPlayingData.timestamps.start} end={nowPlayingData.timestamps.end}/>
        ) : (
          <div className='skeleton progress-bar-placeholder'/>
        )}
      </div>
    </div>
  </div>
  )
}

export default NowPlaying;
