import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

const FireworksEffect = ({ onComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current, {
      speed: 3,
      acceleration: 1.5,
      friction: 0.98,
      gravity: 1.50,
      particles: 150,
      intensity: 20,
      explosion: 5,
      traceLength: 1,
      traceSpeed: 10,
      brightness: { min: 60, max: 100 },
      decay: { min: 0.02, max: 0.050 },
      sounds: {
        enabled: true,
        volume: { min: 30, max: 80 },
      },
    });

    fireworks.start();

    const timeout = setTimeout(() => {
      fireworks.stop();
      onComplete();
    }, 30000);

    return () => {
      fireworks.stop();
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return <div ref={containerRef} style={{ position: "absolute", width: "99vw", height: "100vh", top: 0, left: 0, zIndex: 900 }} />;
};

export default FireworksEffect;
