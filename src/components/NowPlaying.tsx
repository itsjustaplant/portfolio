import { useLanyardWS } from "use-lanyard";
import { Stage } from "./stage-kit/stage";
import { Window } from "./stage-kit/window";
import ProgressBar from "./ProgressBar";
import './listening-room.css';

const fallback = {
  song: 'Angelina', artist: 'Pinegrove',
  album_art_url: 'https://i.scdn.co/image/ab67616d0000b2734e48dddf8b7fa7f224015588',
  timestamps: { start: 0, end: 0 }, track_id: '7Dt26KoNRmZpzlVwMe6LSP',
};
export default function NowPlaying() {
  const track = useLanyardWS('368500476209004546')?.spotify || fallback;
  return <div className="listening-room">
    <Stage width={360} height={340} compact={{below:360,width:330,height:340}} fill theme="dark" palette="mono">
      {() => <>
        <Window title="On repeat" lights="grey" className="listening-window">
          <div className="record-content">
            <a href={`https://open.spotify.com/track/${track.track_id}`} target="_blank" rel="noopener noreferrer" className="record-link" aria-label={`Listen to ${track.song} by ${track.artist} on Spotify`}>
              <div className="record-art"><img src={track.album_art_url} alt={`Cover art of ${track.song} by ${track.artist}`} width="112" height="112" /><div className="vinyl" aria-hidden="true"><span /></div></div>
              <div className="record-info"><span className="record-title">{track.song}</span><span className="record-artist">by {track.artist}</span></div>
            </a>
            <div className="record-progress"><ProgressBar start={track.timestamps.start} end={track.timestamps.end} /></div>
          </div>
        </Window>
      </>}
    </Stage>
  </div>;
}
