import { useEffect, useState } from "react";
import "./ProgressBar.css";

interface Props {
  end: number;
  start: number;
}

function formatSeconds(seconds: number) {
  return `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
}

export default function ProgressBar({ start, end }: Props) {
  // Match the server's first render; begin the live clock after hydration.
  const [current, setCurrent] = useState<number | null>(null);
  const length = Math.max(0, Math.floor((end - start) / 1000));
  const elapsed = current === null ? 0 : Math.floor((current - start) / 1000);
  const indicator = Math.max(0, Math.min(length, elapsed));
  const percent = length ? (indicator / length) * 100 : 0;
  const currentTimer = formatSeconds(indicator);
  const endTimer = formatSeconds(length);

  useEffect(() => {
    setCurrent(Date.now());
    if (end <= start) return;
    const interval = setInterval(() => setCurrent(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div className="spotify-progress">
      <div
        className="spotify-progress-track"
        role="progressbar"
        aria-label="Track progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        aria-valuetext={`${currentTimer} of ${endTimer}`}
      >
        <div
          className="spotify-progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="spotify-progress-times" aria-hidden="true">
        <span>{currentTimer}</span>
        <span>{endTimer}</span>
      </div>
    </div>
  );
}
