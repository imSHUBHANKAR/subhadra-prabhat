// import React from "react";

// const events = [
//   {
//     title: "पूजा एवं मटकोर",
//     date: "28 February 2026 (शनिवार)",
//   },
//   {
//     title: "नामधुन",
//     date: "04 May 2026 (सोमवार)",
//   },
//   {
//     title: "सत्संग",
//     date: "05 May 2026 (मंगलवार)",
//   },
//   {
//     title: "हल्दी एवं मेहंदी",
//     date: "12 May 2026 (मंगलवार)",
//   },
//   {
//     title: "प्रीति भोज",
//     date: "13 May 2026 (बुधवार)",
//   },
//   {
//     title: "शुभ विवाह",
//     date: "13 May 2026 (बुधवार)",
//   },
// ];

// export default function EventsPage() {
//   return (
//     <div id="events" className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-100 px-4 py-12 flex flex-col items-center">
      
//       {/* Title */}
//       <h1 className="text-4xl md:text-5xl font-serif text-pink-800 mb-3">
//         Wedding Events
//       </h1>

//       {/* Subtitle */}
//       <p className="text-gray-600 mb-10 text-center">
//         Scratch each card to reveal the celebration details
//       </p>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
//         {events.map((event, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl border border-pink-800 shadow-md p-6 text-center hover:shadow-lg transition"
//           >
//             <h2 className="text-lg md:text-xl font-semibold text-pink-800 mb-3">
//               {event.title}
//             </h2>
//             <p className="text-gray-700">{event.date}</p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Banner */}
//       <div className="mt-12 w-full max-w-5xl rounded-3xl bg-gradient-to-r from-pink-800 to-pink-300 text-white text-center py-10 px-6 shadow-lg">
//         <h2 className="text-2xl md:text-3xl font-serif mb-2">
//           We Can't Wait To Celebrate With You!
//         </h2>
//         <p className="text-sm md:text-base opacity-90">
//           All events revealed! ✨
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useRef, useEffect, useState } from "react";



const events = [
  {
    title: "पूजा एवं मटकोर",
    date: "28 February 2026 (शनिवार)",
  },
  {
    title: "नामधुन",
    date: "04 May 2026 (सोमवार)",
  },
  {
    title: "सत्संग",
    date: "05 May 2026 (मंगलवार)",
  },
  {
    title: "हल्दी एवं मेहंदी",
    date: "12 May 2026 (मंगलवार)",
  },
  {
    title: "प्रीति भोज",
    date: "13 May 2026 (बुधवार)",
  },
  {
    title: "शुभ विवाह",
    date: "13 May 2026 (बुधवार)",
  },
];

function ScratchCard({ event }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // 🎨 Scratch layer
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

gradient.addColorStop(0, "#BEC0C2"); // silver
gradient.addColorStop(1, "#8E8D8D"); // dark silver
gradient.addColorStop(0.5, "#ffffff"); // white

ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    // ✨ Text///
    ctx.fillStyle = "#ec4899";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch Here ✨", canvas.width / 2, canvas.height / 2);
  }, []);

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();
  };

  const getPosition = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();

    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = () => setIsDrawing(true);

  const stopDrawing = () => setIsDrawing(false);

  const draw = (e) => {
    if (!isDrawing) return;

    const pos = getPosition(e);

    scratch(pos.x, pos.y);
  };

  return (
    <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-xl">

      {/* 🎉 Hidden Content */}
      <div className="absolute inset-0 bg-white border border-pink-300 flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-3">
          {event.title}
        </h2>

        <p className="text-gray-700 text-lg">
          {event.date}
        </p>
      </div>

      {/* 🪄 Scratch Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchEnd={stopDrawing}
        onTouchMove={draw}
      />
    </div>
  );
}

export default function EventsPage() {
  return (
    <div
      id="events"
      className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-100 to-white px-4 py-16 flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-pink-800 mb-3">
        Wedding Events
      </h1>

      <p className="text-gray-700 mb-12 text-center">
        Scratch each card to reveal the celebration ✨
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {events.map((event, index) => (
          <ScratchCard key={index} event={event} />
        ))}
      </div>

      {/* Bottom Banner */}

      <div className="mt-16 w-full max-w-5xl rounded-3xl bg-gradient-to-r from-pink-800 to-pink-400 text-white text-center py-10 px-6 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-serif mb-2">
          We Can't Wait To Celebrate With You!
        </h2>

        <p className="opacity-90">
          All events revealed ✨
        </p>
      </div>
    </div>
  );
}