// import React, { useRef, useState } from "react";
// import musicFile from "../assets/Senti.mp3"; // 👉 add your music file here

// export default function MusicPlayer() {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.5);

//   const togglePlay = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleVolume = (e) => {
//     const vol = e.target.value;
//     setVolume(vol);
//     if (audioRef.current) {
//       audioRef.current.volume = vol;
//     }
//   };

//   return (
//     <>
//       {/* 🎵 Audio */}
//       <audio ref={audioRef} loop src={musicFile} />

//       {/* 🎛️ Controller */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <div className="
//           flex items-center gap-4 px-5 py-3
//           rounded-full
//           bg-red-800/80 backdrop-blur-md
//           border border-yellow-400/40
//           shadow-lg
//         ">

//           {/* ▶️ Play / Pause */}
//           <button
//             onClick={togglePlay}
//             className="
//               w-12 h-12 flex items-center justify-center
//               rounded-full
//               bg-yellow-400 text-red-800
//               hover:scale-110 transition
//             "
//           >
//             {isPlaying ? "❚❚" : "▶"}
//           </button>

//           {/* 🔊 Volume Icon */}
//           <span className="text-yellow-300 text-lg">🔊</span>

//           {/* 🎚️ Volume Slider */}
//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.01"
//             value={volume}
//             onChange={handleVolume}
//             className="
//               w-24 h-1
//               accent-yellow-400
//               cursor-pointer
//             "
//           />
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useRef, useState, useEffect } from "react";
import musicFile from "../assets/Senti.mp3";
import weddingSong from "../assets/weddingSong.m4a";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // 🔥 AUTO PLAY LOGIC
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // ❌ Autoplay blocked → wait for first click
        const startAudio = () => {
          audio.play();
          setIsPlaying(true);
          window.removeEventListener("click", startAudio);
        };

        window.addEventListener("click", startAudio);
      }
    };

    tryPlay();
  }, []);

  // ▶️ Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // 🔊 Volume Control
  const handleVolume = (e) => {
    const vol = e.target.value;
    setVolume(vol);

    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  return (
    <>
      {/* 🎵 Audio */}
      <audio ref={audioRef} loop src={weddingSong} />

      {/* 🎛️ Controller */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className="
          flex items-center gap-4 px-5 py-3
          rounded-full
          bg-red-800/80 backdrop-blur-md
          border border-yellow-400/40
          shadow-lg
        "
        >
          {/* ▶️ Play / Pause */}
          <button
            onClick={togglePlay}
            className="
              w-12 h-12 flex items-center justify-center
              rounded-full
              bg-yellow-400 text-red-800
              hover:scale-110 transition
            "
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          {/* 🔊 Volume Icon */}
          <span className="text-yellow-300 text-lg">🔊</span>

          {/* 🎚️ Volume Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            className="
              w-24 h-1
              accent-yellow-400
              cursor-pointer
            "
          />
        </div>
      </div>
    </>
  );
}