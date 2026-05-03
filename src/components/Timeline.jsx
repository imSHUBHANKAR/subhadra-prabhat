// // import React from "react";

// // const events = [
// //   {
// //     title: "पूजा एवं मटकोर",
// //     date: "28 February 2026",
// //     time: "10:00 AM",
// //     location: "पटना, बिहार",
// //   },
// //   {
// //     title: "नामकरण",
// //     date: "4 May 2026",
// //     time: "6:00 PM",
// //     location: "पटना, बिहार",
// //   },
// //   {
// //     title: "हल्दी",
// //     date: "5 May 2026",
// //     time: "5:00 PM",
// //     location: "पटना, बिहार",
// //   },
// //   {
// //     title: "मेहंदी",
// //     date: "12 May 2026",
// //     time: "2:00 PM",
// //     location: "पटना, बिहार",
// //   },
// //   {
// //     title: "संगीत",
// //     date: "13 May 2026",
// //     time: "12:00 PM",
// //     location: "पटना, बिहार",
// //   },
// //   {
// //     title: "शुभ विवाह",
// //     date: "13 May 2026",
// //     time: "7:00 PM",
// //     location: "पटना, बिहार",
// //   },
// // ];

// // const Timeline = () => {
// //   return (
// //     <div className="bg-[#f8f5f2] min-h-screen py-16 px-4">
// //       <h1 className="text-center text-3xl md:text-4xl font-serif text-red-800 mb-12 tracking-wide">
// //         Celebration Timeline
// //       </h1>

// //       <div className="relative max-w-4xl mx-auto">
// //         {/* Vertical Line */}
// //         <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-yellow-500 h-full"></div>

// //         {events.map((event, index) => (
// //           <div
// //             key={index}
// //             className={`mb-12 flex ${
// //               index % 2 === 0 ? "justify-start" : "justify-end"
// //             }`}
// //           >
// //             <div
// //               className={`w-full md:w-[45%] bg-white border border-yellow-400 rounded-xl shadow-md p-5
// //               transform transition duration-700 ease-in-out
// //               ${
// //                 index % 2 === 0
// //                   ? "animate-slideLeft"
// //                   : "animate-slideRight"
// //               }`}
// //             >
// //               <h2 className="text-lg font-semibold text-red-700">
// //                 {event.title}
// //               </h2>

// //               <p className="text-sm text-gray-700 mt-1">{event.date}</p>
// //               <p className="text-sm text-gray-600">{event.time}</p>

// //               <p className="text-sm text-gray-500 mt-2">
// //                 📍 {event.location}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Timeline;

// import React, { useEffect } from "react";

// const Timeline = () => {
//   const events = [
//     {
//       title: "पूजा एवं मटकोर",
//       date: "28 February 2026",
//       time: "10:00 AM",
//       location: "पटना, बिहार",
//     },
//     {
//       title: "नामकरण",
//       date: "4 May 2026",
//       time: "6:00 PM",
//       location: "पटना, बिहार",
//     },
//     {
//       title: "हल्दी",
//       date: "5 May 2026",
//       time: "5:00 PM",
//       location: "पटना, बिहार",
//     },
//     {
//       title: "हल्दी एवं मेहंदी",
//       date: "12 May 2026",
//       time: "2:00 PM",
//       location: "पटना, बिहार",
//     },
//     {
//       title: "संगीत",
//       date: "13 May 2026",
//       time: "12:00 PM",
//       location: "पटना, बिहार",
//     },
//     {
//       title: "शुभ विवाह",
//       date: "13 May 2026",
//       time: "7:00 PM",
//       location: "पटना, बिहार",
//     },
//   ];

//   // Scroll animation
//   useEffect(() => {
//     const cards = document.querySelectorAll(".timeline-card");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cards.forEach((card) => observer.observe(card));
//   }, []);

//   return (
//     <div className="bg-[#f8f5f2] min-h-screen py-16 px-4">
//       <h1 className="text-center text-3xl md:text-4xl font-serif text-red-800 mb-16">
//         Celebration Timeline
//       </h1>

//       <div className="relative max-w-5xl mx-auto">
//         {/* Center Line */}
//         <div className="absolute left-1/2 top-0 w-[2px] h-full bg-yellow-500 transform -translate-x-1/2"></div>

//         {events.map((event, index) => (
//           <div
//             key={index}
//             className={`mb-12 flex ${
//               index % 2 === 0 ? "justify-start" : "justify-end"
//             }`}
//           >
//             <div
//               className={`timeline-card w-full md:w-[45%] bg-white border border-yellow-400 rounded-xl shadow-md p-5 transition-all duration-700
              
//               ${index % 2 === 0 ? "translate-x-[-100px]" : "translate-x-[100px]"}
//               opacity-0`}
//             >
//               <h2 className="text-lg font-semibold text-red-700">
//                 {event.title}
//               </h2>

//               <p className="text-sm text-gray-700 mt-1">{event.date}</p>
//               <p className="text-sm text-gray-600">{event.time}</p>

//               <p className="text-sm text-gray-500 mt-2">
//                 📍 {event.location}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Inline CSS (no config needed) */}
//       <style>
//         {`
//           .timeline-card.show {
//             transform: translateX(0) !important;
//             opacity: 1 !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Timeline;

// import React, { useEffect } from "react";

// const Timeline = () => {
//   const events = [
//     {
//       title: "पूजा एवं मटकोर",
//       date: "28 February 2026",
//       time: "10:00 AM",
//       location: "निवास स्थान, परशुरामपुर",
//     },
//     {
//       title: "नामधुन",
//       date: "4 May 2026",
//       time: "4:00 PM",
//       location: "निवास स्थान, परशुरामपुर",
//     },
//     {
//       title: "सत्संग",
//       date: "5 May 2026",
//       time: "6:00 PM",
//       location: "निवास स्थान, परशुरामपुर",
//     },
//     {
//       title: "हल्दी एवं मेहंदी",
//       date: "12 May 2026",
//       time: "11:00 AM",
//       location: "निवास स्थान, परशुरामपुर",
//     },
//     {
//       title: "प्रीति भोज",
//       date: "13 May 2026",
//       time: "05:00 PM Onward",
//       location: "निवास स्थान, परशुरामपुर",
//     },
//     {
//       title: "शुभ विवाह",
//       date: "13 May 2026",
//       time: "8:00 PM",
//       location: "निवास स्थान, परशुरामपुर",
//     },
//   ];

//   useEffect(() => {
//     const cards = document.querySelectorAll(".timeline-card");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cards.forEach((card) => observer.observe(card));
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-pink-400 via-pink-100 min-h-screen py-16 px-4">
//       <h1 className="text-center text-3xl md:text-4xl font-serif text-pink-800 mb-12">
//         Celebration Timeline
//       </h1>

//       <div className="relative max-w-5xl mx-auto">
        
//         {/* Line (left on mobile, center on desktop) */}
//         <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-yellow-500 md:-translate-x-1/2"></div>

//         {events.map((event, index) => (
//           <div key={index} className="mb-12 flex md:block">
            
//             {/* Dot */}
//             <div className="relative z-10">
//               <div className="w-4 h-4 bg-pink-800 rounded-full absolute left-2 md:left-1/2 md:-translate-x-1/2 top-2"></div>
//             </div>

//             {/* Card */}
//             <div
//               className={`timeline-card ml-10 md:ml-0 w-full md:w-[45%] bg-white border border-pink-800 rounded-xl shadow-md p-5 transition-all duration-700
              
//               ${index % 2 === 0 ? "md:mr-auto md:translate-x-[-100px]" : "md:ml-auto md:translate-x-[100px]"}
              
//               translate-y-10 opacity-0`}
//             >
//               <h2 className="text-lg font-semibold text-pink-800">
//                 {event.title}
//               </h2>

//               <p className="text-sm text-gray-700 mt-1">{event.date}</p>
//               <p className="text-sm text-gray-600">{event.time}</p>

//               <p className="text-sm text-gray-500 mt-2">
//                 📍 {event.location}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Animation */}
//       <style>
//         {`
//           .timeline-card.show {
//             transform: translateX(0) translateY(0) !important;
//             opacity: 1 !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Timeline;

import React, { useEffect } from "react";

const Timeline = () => {
  const events = [
    {
      title: "पूजा एवं मटकोर",
      date: "28 February 2026",
      time: "10:00 AM",
      location: "निवास स्थान, परशुरामपुर",
    },
    {
      title: "नामधुन",
      date: "4 May 2026",
      time: "4:00 PM",
      location: "निवास स्थान, परशुरामपुर",
    },
    {
      title: "सत्संग",
      date: "5 May 2026",
      time: "6:00 PM",
      location: "निवास स्थान, परशुरामपुर",
    },
    {
      title: "हल्दी एवं मेहंदी",
      date: "12 May 2026",
      time: "11:00 AM",
      location: "निवास स्थान, परशुरामपुर",
    },
    {
      title: "प्रीति भोज",
      date: "13 May 2026",
      time: "05:00 PM Onward",
      location: "निवास स्थान, परशुरामपुर",
    },
    {
      title: "शुभ विवाह",
      date: "13 May 2026",
      time: "8:00 PM",
      location: "निवास स्थान, परशुरामपुर",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".timeline-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-400 via-pink-100 to-white min-h-screen py-16 px-4">
      
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-serif text-pink-800 mb-12">
        Celebration Timeline
      </h1>

      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}
        <div className="
          absolute top-0 h-full w-[2px] bg-yellow-500
          left-4 
          lg:left-1/2 lg:-translate-x-1/2
        "></div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`
              relative mb-12 flex
              lg:items-center
              ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
            `}
          >

            {/* DOT */}
            <div className="
              absolute left-4 lg:left-1/2
              w-4 h-4 bg-pink-800 rounded-full
              transform -translate-x-1/2 top-3 z-10
            "></div>

            {/* CARD */}
            <div
              className="
                timeline-card
                ml-12 lg:ml-0
                w-full lg:w-[45%]
                bg-white border border-pink-800
                rounded-xl shadow-md p-5
                transition-all duration-700
                opacity-0 translate-y-10
                hover:scale-105 hover:shadow-xl
              "
            >
              <h2 className="text-lg font-semibold text-pink-800">
                {event.title}
              </h2>

              <p className="text-sm text-gray-700 mt-1">{event.date}</p>
              <p className="text-sm text-gray-600">{event.time}</p>

              <p className="text-sm text-gray-500 mt-2">
                📍 {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animation CSS */}
      <style>
        {`
          .timeline-card.show {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Timeline;