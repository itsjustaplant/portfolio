import { useEffect, useRef, useState } from "react";

interface PropsType {
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

const ProgressBar = (props: PropsType) => {
  const { start, end } = props;
  const interval = useRef<NodeJS.Timeout>();

  const [current, setCurrent] = useState(new Date().getTime());

  const [currentTimer, setCurrentTimer] = useState("");
  const [endTimer, setEndTimer] = useState("");

  const length = Math.floor((end - start) / 1000);
  const indicator = Math.floor((current - start) / 1000);
  const percent = end ? getProgress(indicator, length) : 0;

  useEffect(() => {
    interval.current = setInterval(() => {
      const date = new Date();
      setCurrent(date.getTime());
    }, 1000);
    return () => clearInterval(interval.current);
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
      setEndTimer("03:23");
    }
  }, [end]);

  return (
    <div className="flex flex-col justify-center gap-0.5">
      <div className="w-full bg-jet rounded-full h-1.5 dark:bg-gray-700">
        <div
          className="bg-white h-1.5 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="flex flex-row justify-between text-white text-xs w-full my-px">
        <span>{currentTimer}</span>
        <span>{endTimer}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
