import { useLanyard } from "use-lanyard";
import ProgressBar from "./ProgressBar";
import "./listening-room.css";

export default function NowPlaying() {
  const presence = useLanyard("368500476209004546");
  const spotify = presence?.listening_to_spotify ? presence.spotify : null;
  if (!spotify) return null;
  const track = spotify;

  return (
    <footer className="listening-room" aria-labelledby="listening-title">
      <div className="listening-footer-inner">
        <h2 id="listening-title">Listening now</h2>
        <div className="record-content">
          {track.album_art_url ? (
            <img
              className="record-art"
              src={track.album_art_url}
              alt=""
              width="40"
              height="40"
              loading="lazy"
            />
          ) : (
            <span
              className="record-art record-art-placeholder"
              aria-hidden="true"
            >
              ♪
            </span>
          )}
          <div className="record-info">
            <a
              href={`https://open.spotify.com/track/${track.track_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link record-title"
              aria-label={`Listen to ${track.song} by ${track.artist} on Spotify`}
            >
              {track.song}
            </a>
            <p className="record-artist">{track.artist}</p>
          </div>
          <div className="record-progress">
            <ProgressBar
              start={spotify.timestamps.start}
              end={spotify.timestamps.end}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
