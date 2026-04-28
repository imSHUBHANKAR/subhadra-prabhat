// import React from 'react'

// const EventOne = () => {
//   return (
//     <>
//     <div>ComponentName</div>
//     </>
//   )
// }

// export default EventOne
////////////////////this is final Home UI------------------------------

// export default function WeddingInvitationHero() {
//   const stars = [...Array(80)]
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#98001d] via-[#98001d] to-[#f6e9e4] text-white">
//       {/* Celebration Stars */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {stars.map((_, i) => (
//           <span
//             key={i}
//             className="absolute rounded-full bg-[#d4af37] shadow-[0_0_12px_#d4af37] animate-ping"
//             style={{
//               width: `${Math.random() * 8 + 3}px`,
//               height: `${Math.random() * 8 + 3}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${Math.random() * 4 + 2}s`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}

//         {stars.map((_, i) => (
//           <div
//             key={`trail-${i}`}
//             className="absolute h-1 rounded-full bg-gradient-to-r from-[#d4af37] to-transparent opacity-70"
//             style={{
//               width: `${Math.random() * 120 + 40}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               transform: `rotate(${Math.random() * 360}deg)`,
//               animation: `pulse ${Math.random() * 3 + 2}s infinite`,
//               animationDelay: `${Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Decorative Rings */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="relative w-[650px] h-[650px] opacity-10">
//           <div className="absolute inset-0 rounded-full border-4 border-[#d4af37]" />
//           <div className="absolute inset-16 rounded-full border-4 border-[#d4af37]" />
//           <div className="absolute inset-32 rounded-full border-4 border-[#d4af37]" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
//         <h1 className="mb-8 text-5xl md:text-8xl font-serif tracking-wide text-[#d4af37]">
//           WEDDING INVITATION
//         </h1>

//         <h2 className="mb-4 text-3xl md:text-6xl font-medium leading-tight">
//           आयुष्मति सुभद्रा कुमारी (गुड़िया)
//         </h2>

//         <p className="mb-6 text-4xl text-[#d4af37] font-serif">&</p>

//         <h2 className="mb-10 text-3xl md:text-6xl font-medium leading-tight">
//           चिरंजीवी प्रभात कुमार
//         </h2>

//         <h3 className="mb-6 text-5xl md:text-7xl font-serif text-[#d4af37]">
//           13 May 2026
//         </h3>

//         <p className="mb-12 max-w-4xl text-xl md:text-3xl text-white/95">
//           Together with their families, invite you to celebrate their union.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6">
//           <button className="rounded-full bg-[#d4af37] px-10 py-4 text-xl font-semibold text-[#7d0018] shadow-2xl transition hover:scale-105 hover:shadow-[#d4af37]/40">
//             View Events
//           </button>

//           <button className="rounded-full border-2 border-[#d4af37] px-10 py-4 text-xl font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-[#7d0018]">
//             RSVP Now
//           </button>
//         </div>
//       </div>

//       {/* Music Player */}
//       <div className="absolute bottom-10 right-10 z-20">
//         <div className="flex items-center gap-5 rounded-full border-2 border-[#d4af37] bg-[#98001d] px-6 py-5 shadow-2xl">
//           <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37] text-[#98001d] text-2xl">
//             ▶
//           </button>

//           <button className="text-[#d4af37] text-2xl">🔊</button>

//           <input
//             type="range"
//             className="w-28 accent-[#d4af37]"
//             defaultValue="70"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }



//This is final Home UI------------------------------
// import React from "react";
// import img1 from '../assets/shubh_img1.jpg'

// export default function WeddingLanding() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-100 to-white flex items-center justify-center relative overflow-hidden font-sans">
      
//       {/* Google Font */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400&display=swap');
//           .font-serif { font-family: 'Playfair Display', serif; }
//           .font-sans { font-family: 'Poppins', sans-serif; }

//           @keyframes fadeUp {
//             from { opacity: 0; transform: translateY(30px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .fade-up {
//             animation: fadeUp 1.2s ease-out;
//           }
//         `}
//       </style>

//       {/* Floral Decorations */}
//       <img
//         src="https://pngimg.com/uploads/rose/rose_PNG649.png"
//         className="absolute top-0 left-0 w-60 opacity-100"
//         alt=""
//       />
//       <img
//         src={img1}
//         className="absolute bottom-0 left-0 w-60 opacity-100"
//         alt=""
//       />
//       {/* --------------------------------------------------------- */}
//       <img
//         src="https://pngimg.com/uploads/rose/rose_PNG653.png"
//         className="absolute top-0 right-0 w-60 opacity-100"
//         alt=""
//       />
//       <img
//         src={img1}
//         className="absolute bottom-0 right-0 w-100 opacity-100"
//         alt=""
//       />
//       <div className="bg-amber-600">

      
//       <img
//         src="https://pngimg.com/uploads/flowers/flowers_PNG102.png"
//         className="absolute bottom-50 left-50 w-56 opacity-100"
//         alt=""
//       />
//       </div>

//       {/* Main Content */}
//       <div className="text-center px-6 max-w-3xl z-10 fade-up">
        
//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl text-rose-700 font-serif tracking-wide">
//           WEDDING INVITATION
//         </h1>

//         {/* Names */}
//         <p className="mt-6 text-xl md:text-3xl text-gray-800 font-medium">
//           आयुष्मति सुभद्रा कुमारी (गुड़िया)
//         </p>

//         <p className="text-2xl text-rose-500 my-2">&</p>

//         <p className="text-xl md:text-3xl text-gray-800 font-medium">
//           चिरंजीवी प्रभात कुमार
//         </p>

//         {/* Date */}
//         <p className="mt-6 text-3xl md:text-4xl text-rose-600 font-serif">
//           13 May 2026
//         </p>

//         {/* Description */}
//         <p className="mt-4 text-gray-600 text-lg">
//           Together with their families, invite you to celebrate their union.
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
//           <button className="px-8 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition">
//             View Events
//           </button>

//           <button className="px-8 py-3 rounded-full border border-rose-500 text-rose-500 hover:bg-rose-100 transition">
//             RSVP Now
//           </button>
//         </div>
//       </div>
//       <div>
//         <img
//         src="https://pngimg.com/uploads/flowers/flowers_PNG102.png"
//         className="absolute top-50 left-0 w-56 opacity-100"
//         alt=""
//       />
//       </div>
//     </div>
//   );
// }
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

import React from "react";
import img1 from "../assets/shubh_img1.jpg";
import img11 from "../assets/img11.svg";
import sideimg1 from "../assets/sideimg1.svg";
import ugadi from "../assets/ugadi.svg";

export default function WeddingLanding() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-100 to-white flex items-center justify-center relative overflow-hidden px-4">
        {/* <div className="flex flex-row ">

      
      <img
        src={ugadi}
        className="absolute w-32 sm:w-48 md:w-60 opacity-70 z-0"
        alt=""
      /><img
        src={ugadi}
        className="w-32 sm:w-48 md:w-60 opacity-100 z-0"
        alt=""
      />
      </div> */}

      {/* Fonts + Animation */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400&display=swap');
          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Poppins', sans-serif; }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-up {
            animation: fadeUp 1s ease-out;
          }
        `}
      </style>

      {/* Fonts + Animations */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Poppins:wght@300;400&display=swap');

          .font-serif { font-family: 'Playfair Display', serif; }
          .font-sans { font-family: 'Poppins', sans-serif; }

          /* 🌿 gentle wind sway */
          @keyframes sway {
            0%   { transform: rotate(0deg) translateX(0px); }
            25%  { transform: rotate(0.5deg) translateX(2px); }
            50%  { transform: rotate(0deg) translateX(0px); }
            75%  { transform: rotate(-0.5deg) translateX(-2px); }
            100% { transform: rotate(0deg) translateX(0px); }
          }

          /* 🌿 hanging swing (more visible) */
          @keyframes swing {
            0%   { transform: translateX(-50%) rotate(0deg); }
            25%  { transform: translateX(-50%) rotate(2deg); }
            50%  { transform: translateX(-50%) rotate(0deg); }
            75%  { transform: translateX(-50%) rotate(-2deg); }
            100% { transform: translateX(-50%) rotate(0deg); }
          }

          .sway {
            animation: sway 6s ease-in-out infinite;
          }

          .swing {
            animation: swing 4s ease-in-out infinite;
            transform-origin: top center;
          }
        `}
      </style>
      {/* //---------------------------------------------------------- */}
      {/* Fonts + Animations */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Poppins:wght@300;400&display=swap');

          .font-serif { font-family: 'Playfair Display', serif; }

          /* Layer 1 (slow sway) */
          @keyframes wind1 {
            0%   { transform: translateX(0px) rotate(0deg); }
            25%  { transform: translateX(2px) rotate(0.5deg); }
            50%  { transform: translateX(0px) rotate(0deg); }
            75%  { transform: translateX(-2px) rotate(-0.5deg); }
            100% { transform: translateX(0px) rotate(0deg); }
          }

          /* Layer 2 (slightly faster, different phase) */
          @keyframes wind2 {
            0%   { transform: translateX(0px) rotate(0deg); }
            25%  { transform: translateX(-3px) rotate(-0.7deg); }
            50%  { transform: translateX(0px) rotate(0deg); }
            75%  { transform: translateX(3px) rotate(0.7deg); }
            100% { transform: translateX(0px) rotate(0deg); }
          }

          .wind-layer-1 {
            animation: wind1 6s ease-in-out infinite;
          }

          .wind-layer-2 {
            animation: wind2 5s ease-in-out infinite;
            opacity: 0.7;
          }

          /* center swing */
          @keyframes swing {
            0%   { transform: translateX(-50%) rotate(0deg); }
            25%  { transform: translateX(-50%) rotate(6deg); }
            50%  { transform: translateX(-50%) rotate(0deg); }
            75%  { transform: translateX(-50%) rotate(-6deg); }
            100% { transform: translateX(-50%) rotate(0deg); }
          }

          .swing {
            animation: swing 4s ease-in-out infinite;
            transform-origin: top center;
          }
        `}
      </style>
      {/* //--------------------------------------------------------- */}

      {/* 🌸 TOP LEFT */}
      {/* <img
        src="https://pngimg.com/uploads/rose/rose_PNG649.png"
        className="absolute top-0 left-0 w-32 sm:w-48 md:w-60 opacity-70 z-0"
        alt=""
      /> */}
      <div className="flex flex-row ">

      
      {/* <img
        src={ugadi}
        className="absolute w-32 sm:w-48 md:w-60 opacity-70 z-0"
        alt=""
      /> */}
      {/* <img
        src={ugadi}
        className="w-32 sm:w-48 md:w-60 opacity-100 z-0"
        alt=""
      /> */}
      </div>

      {/* 🌸 TOP garland */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-28 md:h-32 bg-repeat-x bg-contain wind-layer-1"
        style={{
          backgroundImage:
            `url(${ugadi})`,
            backgroundSize: "auto 100%",
        }}
      />
       {/* 🌸 TOP RIGHT */}
      {/* <img
        src="https://pngimg.com/uploads/rose/rose_PNG653.png"
        className="absolute top-0 right-0 w-32 sm:w-48 md:w-60 opacity-70 z-0"
        alt=""
      /> */}

      {/* 🌸 BOTTOM LEFT (hide on very small screens) */}
      {/* <img
        src={img1}
        className="hidden sm:block absolute bottom-0 left-0 w-40 md:w-60 opacity-80 z-0"
        alt=""
      /> */}

      {/* 🌸 BOTTOM RIGHT */}
      {/* <img
        src={img11}
        className="hidden sm:block absolute bottom-0 right-0 w-40 md:w-60 opacity-10 z-0"
        alt=""
      /> */}
      <img
       src={sideimg1}
        className="absolute bottom-0 left-0 w-60 opacity-100"
         alt=""
       />
       <img
       src={img11}
        className="absolute bottom-0 right-0 w-60 opacity-100"
         alt=""
       />

      {/* 🌸 SIDE DECOR (only desktop) */}
      <img
        src="https://pngimg.com/uploads/flowers/flowers_PNG102.png"
        className="hidden md:block absolute bottom-10 left-10 w-40 opacity-60 z-0"
        alt=""
      />

      {/* 🌸 EXTRA DECOR */}
      <img
        src="https://pngimg.com/uploads/flowers/flowers_PNG102.png"
        className="hidden md:block absolute top-20 right-10 w-40 opacity-60 z-0"
        alt=""
      />

      {/* ✅ MAIN CONTENT */}
      <div className="relative z-10 text-center max-w-2xl fade-up">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl text-rose-700 font-serif tracking-wide drop-shadow-sm">
          WEDDING INVITATION
        </h1>

        {/* Names */}
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-3xl text-gray-800 font-medium leading-relaxed">
          आयुष्मति सुभद्रा कुमारी (गुड़िया)
        </p>

        <p className="text-xl sm:text-2xl text-rose-500 my-2">&</p>

        <p className="text-lg sm:text-xl md:text-3xl text-gray-800 font-medium">
          चिरंजीवी प्रभात कुमार
        </p>

        {/* Date */}
        <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl text-rose-600 font-serif">
          13 May 2026
        </p>

        {/* Description */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 px-2">
          Together with their families, invite you to celebrate their union.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition text-sm sm:text-base shadow-md hover:scale-105 duration-300">
            View Events
          </button>

          <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-rose-500 text-rose-500 hover:bg-rose-100 transition text-sm sm:text-base shadow-sm hover:scale-105 duration-300">
            RSVP Now
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// import React from "react";
// import ugadi from "../assets/ugadi.svg";

// export default function WeddingLanding() {
//   return (
//     <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 bg-gradient-to-b from-pink-300 via-pink-100 to-white">

//       {/* Google Fonts */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Poppins:wght@300;400&display=swap');

//           .font-serif { font-family: 'Playfair Display', serif; }
//           .font-sans { font-family: 'Poppins', sans-serif; }
//         `}
//       </style>

//       {/* 🌼 TOP GARLAND STRIP (REPEATING) */}
//       <div className="absolute top-0 left-0 w-full h-20 sm:h-28 md:h-32 bg-repeat-x bg-contain"
//         style={{
//           backgroundImage:
//             `url(${ugadi})`,
//         }}
//       />
      

//       {/* 🌼 HANGING EXTRA (center pieces) */}
//       <img
//         src={ugadi}
//         alt=""
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-40 sm:w-56 md:w-72"
//       />

//       {/* 🌸 LEFT RANGOLI */}
//       <img
//         src="https://pngimg.com/uploads/flowers/flowers_PNG102.png"
//         alt=""
//         className="absolute bottom-4 left-2 sm:left-6 w-28 sm:w-40 md:w-52"
//       />

//       {/* 👰 RIGHT COUPLE */}
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
//         alt=""
//         className="absolute bottom-4 right-2 sm:right-6 w-28 sm:w-40 md:w-52"
//       />

//       {/* 💍 MAIN CONTENT */}
//       <div className="relative z-10 text-center max-w-2xl mt-20 sm:mt-28">

//         {/* Title */}
//         <h1 className="text-3xl sm:text-5xl md:text-6xl text-red-700 font-serif tracking-wide">
//           WEDDING INVITATION
//         </h1>

//         {/* Names */}
//         <p className="mt-6 text-lg sm:text-xl md:text-3xl text-gray-800 font-medium leading-relaxed">
//           आयुष्मति सुभद्रा कुमारी (गुड़िया)
//         </p>

//         <p className="text-xl text-red-500 my-2">&</p>

//         <p className="text-lg sm:text-xl md:text-3xl text-gray-800 font-medium">
//           चिरंजीवी प्रभात कुमार
//         </p>

//         {/* Date */}
//         <p className="mt-6 text-2xl sm:text-3xl md:text-4xl text-red-600 font-serif">
//           13 May 2026
//         </p>

//         {/* Description */}
//         <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 px-2">
//           Together with their families, invite you to celebrate their union.
//         </p>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition">
//             View Events
//           </button>

//           <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-red-500 text-red-500 hover:bg-red-100 transition">
//             RSVP Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }