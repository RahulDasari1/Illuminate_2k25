import { useState, useEffect } from "react";
import Logo from '../assets/logo.png';


const Hero = () => {
  const targetDate = new Date("2025-03-26T12:05:59").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft(distance > 0 ? distance : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes,seconds } = formatTime(timeLeft);

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <div className=" w-full  flex flex-col justify-center items-center">
        <div className="" >
          <img className="w-200" src={Logo} alt="" />
        </div>
        <div className="text-center text-5xl font-semibold">
          {timeLeft > 0 ? (
            <>
              <h1 className="shiny-text">{`${days} : ${hours} : ${minutes} : ${seconds}`}</h1>
            </>
          ) : (
            "Time's up!"
          )}
        </div>
      </div>
    </div>
  );
}
export default Hero;