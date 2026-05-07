// import React, { useState } from "react";

// export default function DoorWrapper({ children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">

//       {/* 🚪 DOOR OVERLAY */}
//       <div
//         className={`fixed inset-0 z-[999] flex transition-all duration-1000 ${
//           open ? "pointer-events-none" : ""
//         }`}
//       >
//         {/* LEFT DOOR */}
//         <div
//           className={`w-1/2 h-full bg-gradient-to-b from-red-900 to-red-700 flex items-center justify-end pr-4
//           transition-transform duration-1000 ease-in-out ${
//             open ? "-translate-x-full" : "translate-x-0"
//           }`}
//         >
//           {/* Handle */}
//           <div
//             onClick={() => setOpen(true)}
//             className="cursor-pointer w-6 h-16 bg-yellow-400 rounded-full shadow-lg hover:scale-110 transition"
//           />
//         </div>

//         {/* RIGHT DOOR */}
//         <div
//           className={`w-1/2 h-full bg-gradient-to-b from-red-900 to-red-700 flex items-center justify-start pl-4
//           transition-transform duration-1000 ease-in-out ${
//             open ? "translate-x-full" : "translate-x-0"
//           }`}
//         >
//           {/* Handle */}
//           <div
//             onClick={() => setOpen(true)}
//             className="cursor-pointer w-6 h-16 bg-yellow-400 rounded-full shadow-lg hover:scale-110 transition"
//           />
//         </div>
//       </div>

//       {/* 💫 CONTENT (YOUR WEBSITE) */}
//       <div
//         className={`transition-opacity duration-1000 ${
//           open ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import doorImg from "../assets/door.png";

export default function DoorWrapper({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🚪 DOOR OVERLAY */}
      <div
        onClick={() => setOpen(true)}
        className={`fixed inset-0 z-[999] flex cursor-pointer ${
          open ? "pointer-events-none" : ""
        }`}
      >

        {/* LEFT DOOR */}
        <div
          className={`w-1/2 h-full transition-transform duration-1000 ease-in-out ${
            open ? "-translate-x-full" : ""
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${doorImg})`,
              clipPath: "inset(0 50% 0 0)", // 👈 show LEFT HALF only
            }}
          />
        </div>

        {/* RIGHT DOOR */}
        <div
          className={`w-1/2 h-full transition-transform duration-1000 ease-in-out ${
            open ? "translate-x-full" : ""
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${doorImg})`,
              clipPath: "inset(0 0 0 50%)", // 👈 show RIGHT HALF only
            }}
          />
        </div>
      </div>

      {/* ✨ CONTENT */}
      <div
        className={`transition-opacity duration-1000 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}