import React from "react";

export default function FamiliesPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] flex flex-col items-center justify-center px-4 py-10">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif text-[#7a0c1c] mb-12 tracking-wide">
        Our Families
      </h1>

      {/* Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        
        {/* Bride Card */}
        <div className="w-full md:w-1/2 bg-white rounded-3xl border-2 border-yellow-600 shadow-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#7a0c1c] mb-6">
            Bride's Family
          </h2>

          <p className="text-lg text-gray-700 mb-4">श्री राजेश कुमार</p>

          <p className="text-gray-500 text-xl my-2">&</p>

          <p className="text-lg text-gray-700">श्रीमती सुनीता देवी</p>
        </div>

        {/* Center Divider */}
        <div className="hidden md:flex items-center justify-center absolute">
          <div className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 bg-[#7a0c1c] rounded-full"></div>
          </div>
        </div>

        {/* Groom Card */}
        <div className="w-full md:w-1/2 bg-white rounded-3xl border-2 border-yellow-600 shadow-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#7a0c1c] mb-6">
            Groom's Family
          </h2>

          <p className="text-lg text-gray-700 mb-4">श्री विनोद कुमार</p>

          <p className="text-gray-500 text-xl my-2">&</p>

          <p className="text-lg text-gray-700">श्रीमती अनीता देवी</p>
        </div>
      </div>
    </div>
  );
}