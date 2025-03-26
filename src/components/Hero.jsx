import { useState, useEffect } from "react";
import Logo from '/logo.svg'


const Hero = () => {
  const targetDate = new Date("2025-03-30T09:05:59").getTime();
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
    const days = String(Math.floor(totalSeconds / (24 * 3600))).padStart(2, '0');
    const hours = String(Math.floor((totalSeconds % (24 * 3600)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes,seconds } = formatTime(timeLeft);

  return (
    <div className="w-full xl:h-svh h-svh flex flex-col justify-center items-center">
      <div className=" w-full flex flex-col justify-center items-center">
        <div className="" >
          <img className="w-200" src={Logo} alt="" />
        </div>
        <div className="text-center text-5xl xl:text-8xl font-semibold">
          {timeLeft > 0 ? (
            <>
              <h1 className="shiny-text">{`${days} : ${hours} : ${minutes} : ${seconds}`}</h1>
            </>
          ) : (
            <>
            <h1 className="shiny-text" >00 : 00 : 00 : 00</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Hero;