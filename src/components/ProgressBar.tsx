import { useEffect, useRef, useState } from "react";

import '../styles/ProgressBar.css';

interface PropsType {
  end: number;
  start: number;
}

const formatSeconds = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const result = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;

  return result;
}

const getProgress = (indicator: number, length: number): number => {
  if (indicator >= length) return 100;

  return indicator / length * 100;
}

const ProgressBar = (props: PropsType) => {
  const { start, end } = props;
  const interval = useRef<NodeJS.Timeout>();

  const [current, setCurrent] = useState(new Date().getTime());

  const [currentTimer, setCurrentTimer] = useState("");
  const [endTimer, setEndTimer] = useState("");

  const length = Math.floor((end - start) / 1000);
  const indicator = Math.floor((current - start) / 1000);
  const progressStyle = {
    '--percent': end ? getProgress(indicator, length) : 0
  } as React.CSSProperties;
  
  useEffect(() => {
    interval.current = setInterval(() => {
      const date = new Date();
      setCurrent(date.getTime());
    }, 1000);
    return () => clearInterval(interval.current);
  }, [])

  useEffect(() => {
    if (end) {
      setCurrentTimer(formatSeconds(indicator));
    } else {
      setCurrentTimer("00:00");
    }
  }, [start, current, end])

  useEffect(() => {
    if (end) {
      setEndTimer(formatSeconds(length));
    } else {
      setEndTimer("03:23")
    }
    
  }, [end]);
  
  return (
    <div className="progress-bar-container">
      <div className="progress" style={progressStyle}/>
      <div className="progress-bar-timer">
        <span className="timer--current">{currentTimer}</span>
        <span className="timer--end">{endTimer}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
