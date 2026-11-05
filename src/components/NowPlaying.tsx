import { useLanyard } from "use-lanyard";
import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./listening-room.css";

export default function NowPlaying() {
  const presence = useLanyard("368500476209004546");
  const spotify = presence?.listening_to_spotify ? presence.spotify : null;
  const [lastTrack, setLastTrack] = useState(spotify);

  useEffect(() => {
    if (spotify) {
      setLastTrack(spotify);
      return;
    }
    // Retain the last song until the exit animation finishes.
    const delay = matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : 300;
    const timeout = window.setTimeout(() => setLastTrack(null), delay);
    return () => window.clearTimeout(timeout);
  }, [spotify]);

  const track = spotify ?? lastTrack;
  if (!track) return null;
  const exiting = !spotify;

  return (
    <footer
      className="listening-room"
      data-exiting={exiting || undefined}
      inert={exiting}
      aria-labelledby="listening-title"
    >
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
              start={track.timestamps.start}
              end={track.timestamps.end}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
