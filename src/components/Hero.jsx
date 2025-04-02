import { useState, useEffect } from "react";
import Logo from "/logo.svg";
import FireworksEffect from "./FireworksEffect";

const Hero = () => {
  const targetDate = new Date("2025-04-02T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft(distance > 0 ? distance : 0);

      if (distance <= 0) {
        setShowFireworks(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = String(Math.floor(totalSeconds / (24 * 3600))).padStart(2, "0");
    const hours = String(Math.floor((totalSeconds % (24 * 3600)) / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="w-full xl:h-svh h-svh flex flex-col justify-center items-center">
      {showFireworks && <FireworksEffect onComplete={() => setShowFireworks(false)} />}
      
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <img className="w-200" src={Logo} alt="" />
        </div>
        <div className="text-center text-5xl xl:text-8xl font-semibold">
          {timeLeft > 0 ? (
            <h1 className="shiny-text">{`${days} : ${hours} : ${minutes} : ${seconds}`}</h1>
          ) : (
            <h1 className="shiny-text">00 : 00 : 00 : 00</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
