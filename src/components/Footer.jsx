import React from "react";

export default function WeddingFooter() {
  return (
    <footer className="relative bg-[#7a0000] text-white py-16 px-6 overflow-hidden">

      {/* 🌸 Floating Petals */}
      <style>
        {`
          @keyframes floatPetal {
            0%   { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
            50%  { transform: translateY(-20px) rotate(20deg); opacity: 1; }
            100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          }
          .petal {
            position: absolute;
            width: 12px;
            height: 18px;
            background: radial-gradient(circle, #ffb347, #ff5e5e);
            border-radius: 50% 50% 50% 0;
            animation: floatPetal 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Petals */}
      <div className="petal top-10 left-10"></div>
      <div className="petal top-20 right-20 animation-delay-2000"></div>
      <div className="petal bottom-20 left-1/4"></div>
      <div className="petal bottom-10 right-10"></div>

      {/* 🌟 Content */}
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-yellow-400 text-2xl md:text-3xl font-serif mb-4">
          सादर आमंत्रण
        </h2>

        {/* Subtext */}
        <p className="text-gray-200 italic mb-6">
          With folded hands and joyful hearts, we await your blessings on our special day.
        </p>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-yellow-500 mx-auto mb-10"></div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">

          {/* Bride Side */}
          <div className="text-center">
            <p className="text-yellow-400 tracking-widest text-sm mb-2">
              BRIDE'S FAMILY
            </p>
            <p className="text-gray-200 flex items-center justify-center gap-2">
              📞 +91 XXXXX XXXXX
            </p>
          </div>

          {/* Groom Side */}
          <div className="text-center">
            <p className="text-yellow-400 tracking-widest text-sm mb-2">
              GROOM'S FAMILY
            </p>
            <p className="text-gray-200 flex items-center justify-center gap-2">
              📞 +91 XXXXX XXXXX
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-[#7a0000] transition">
            SHARE ON WHATSAPP
          </button>
          <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-[#7a0000] transition">
            TWEET
          </button>
        </div>

        {/* Footer Bottom */}
        <p className="text-sm text-gray-300">
          Made with ❤️ for सुभद्रा & प्रभात · 13 May 2026
        </p>
      </div>
    </footer>
  );
}