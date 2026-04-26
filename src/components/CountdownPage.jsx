import React, { useEffect, useState } from "react";

export default function CountdownPage() {
  const weddingDate = new Date("May 13, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    return {
      days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
      seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Circle = ({ value, label }) => (
    <div className="flex flex-col items-center">
      
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-[3px] border-[#d4af37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] bg-[#f7efe5]">
        <span className="text-3xl md:text-4xl text-[#7a0c1c] font-serif">
          {value}
        </span>
      </div>
      <p className="mt-4 text-gray-700 text-lg">{label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5e9dc] flex flex-col items-center justify-center px-4 py-12">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif text-[#7a0c1c] mb-4 text-center">
        Counting Down to Forever
      </h1>

      {/* Date */}
      <p className="text-lg text-gray-700 mb-12">May 13, 2026</p>

      {/* Countdown */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        <Circle value={timeLeft.days} label="Days" />
        <Circle value={timeLeft.hours} label="Hours" />
        <Circle value={timeLeft.minutes} label="Minutes" />
        <Circle value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}