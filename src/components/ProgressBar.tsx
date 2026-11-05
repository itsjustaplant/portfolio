import { useEffect, useState } from "react";
import "./ProgressBar.css";

interface IProps {
  end: number;
  start: number;
}

const formatSeconds = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const result = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;

  return result;
};

const getProgress = (indicator: number, length: number): number => {
  if (indicator >= length) return 100;

  return (indicator / length) * 100;
};

const ProgressBar = (props: IProps) => {
  const { start, end } = props;

  const [current, setCurrent] = useState(new Date().getTime());

  const [currentTimer, setCurrentTimer] = useState("");
  const [endTimer, setEndTimer] = useState("");

  const length = Math.floor((end - start) / 1000);
  const indicator = Math.floor((current - start) / 1000);
  const percent = end ? getProgress(indicator, length) : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrent(date.getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (end) {
      const param = indicator >= length ? length : indicator;
      setCurrentTimer(formatSeconds(param));
    } else {
      setCurrentTimer("00:00");
    }
  }, [start, current, end]);

  useEffect(() => {
    if (end) {
      setEndTimer(formatSeconds(length));
    } else {
      setEndTimer("01:41");
    }
  }, [end]);

  return (
    <div className="spotify-progress">
      <div className="spotify-progress-track">
        <div
          className="spotify-progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="spotify-progress-times">
        <span>{currentTimer}</span>
        <span>{endTimer}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
