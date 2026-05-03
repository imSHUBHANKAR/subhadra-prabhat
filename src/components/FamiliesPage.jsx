import React from "react";

//bg-[#f5f1eb]
//text-[#7a0c1c]
//border-yellow-600
export default function FamiliesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-100 flex flex-col items-center justify-center px-4 py-10">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif text-pink-800 mb-12 tracking-wide">
        Our Families
      </h1>

      {/* Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        
        {/* Bride Card */}
        <div className="w-full md:w-1/2 bg-white rounded-4xl border-2 border-pink-900 shadow-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-pink-800 mb-6">
            वधू पक्ष (Bride's Family)
          </h2>

          <p className="text-lg text-gray-700 mb-2">श्रीमती ललिता देवी</p>

          <p className="text-gray-500 text-xl my-2">&</p>

          <p className="text-lg text-gray-700 mb-2">श्री विनोद कुमार</p>
          <p className="text-md font-style: italic text-gray-700">ग्राम+पो०- परशुरामपुर, थाना- परसौनी जिला- सीतामढ़ी (843325)</p>
        </div>

        {/* Center Divider */}
        <div className="hidden md:flex items-center justify-center absolute">
          <div className="w-14 h-14 bg-pink-800 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Groom Card */}
        <div className="w-full md:w-1/2 bg-white rounded-4xl border-2 border-pink-900 shadow-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-pink-800 mb-6">
            वर पक्ष (Groom's Family)
          </h2>

          <p className="text-lg text-gray-700 mb-2">श्रीमती प्रमिला देवी</p>

          <p className="text-gray-500 text-xl my-2">&</p>

          <p className="text-lg text-gray-700 mb-2">श्री रवि शंकर प्रसाद</p>
          <p className="text-md font-style: italic text-gray-700">ग्ग्राम+पो०+थाना- गाढ़ा, जिला- सीतामढ़ी (843323)</p>
        </div>
      </div>
    </div>
  );
}