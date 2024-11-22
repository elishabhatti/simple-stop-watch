import React, { useRef, useState } from "react";
import TimeNum from "./TimeNum";
import Button from "./Button";

const StopWatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef(null);

  const handleStartTime = () => {
    if (!isRunning) {
      timer.current = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;
          seconds += 1;

          if (seconds === 60) {
            seconds = 0;
            minutes += 1;
          }
          if (minutes === 60) {
            minutes = 0;
            hours += 1;
          }

          return { hours, minutes, seconds };
        });
      }, 1000);
      setIsRunning(true);
    }
  };
  const handleStopTime = () => {
    clearInterval(timer.current);
    timer.current = null;
    setIsRunning(false);
  };
  const handleResetTime = () => {
    handleStopTime();
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className="flex justify-center items-center flex-col h-[100vh] bg-[#4A8EFF]">
      <div className="bg-white px-20 rounded-md py-10">
        <div className="flex justify-center items-center flex-wrap">
          <TimeNum label="Hours" value={time.hours} />
          <span className="text-6xl">:</span>
          <TimeNum label="Minutes" value={time.minutes} />
          <span className="text-6xl">:</span>
          <TimeNum label="Seconds" value={time.seconds} />
        </div>
        <div className="flex justify-center items-center flex-wrap mt-2">
          <Button
            label="Stop"
            bgColor="bg-red-500"
            handleFunctions={handleStopTime}
          />
          <Button
            label="Start"
            bgColor="bg-green-500"
            handleFunctions={handleStartTime}
          />
          <Button
            label="Reset"
            bgColor="bg-blue-500"
            handleFunctions={handleResetTime}
          />
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
