import React from "react";

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

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-100 px-4 py-12 flex flex-col items-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif text-pink-800 mb-3">
        Wedding Events
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-10 text-center">
        Scratch each card to reveal the celebration details
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-pink-800 shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <h2 className="text-lg md:text-xl font-semibold text-pink-800 mb-3">
              {event.title}
            </h2>
            <p className="text-gray-700">{event.date}</p>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="mt-12 w-full max-w-5xl rounded-3xl bg-gradient-to-r from-pink-800 to-pink-300 text-white text-center py-10 px-6 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-serif mb-2">
          We Can't Wait To Celebrate With You!
        </h2>
        <p className="text-sm md:text-base opacity-90">
          All events revealed! ✨
        </p>
      </div>
    </div>
  );
}