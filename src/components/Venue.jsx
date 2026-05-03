import React, { useEffect } from "react";

const Venue = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

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

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-100 py-16 px-4 relative overflow-hidden">
      
      {/* Floating petals */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="petal top-10 left-10"></span>
        <span className="petal top-20 right-20"></span>
        <span className="petal bottom-20 left-1/4"></span>
        <span className="petal bottom-10 right-10"></span>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 fade-up">
        <p className="tracking-widest text-sm text-pink-800">FIND US</p>
        <h1 className="text-3xl md:text-5xl font-serif text-pink-800 mt-2">
          The Wedding Venue
        </h1>
        <p className="text-gray-600 mt-2 italic">विवाह स्थल</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Card */}
        <div className="bg-white/80 backdrop-blur-md border border-pink-800 rounded-3xl p-8 shadow-lg fade-up">
          <p className="text-sm tracking-widest text-red-600 mb-2">VENUE</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-pink-800">
            परशुरामपुर
          </h2>

          <p className="text-gray-700 mt-2">
            सीतामढ़ी, बिहार · India
          </p>

          <hr className="my-4 border-pink-300" />

          <p className="text-gray-600 text-sm leading-relaxed">
            परशुरामपुर, सीतामढ़ी, बिहार <br />
            We would be honoured to welcome you for the celebrations.
            Please reach out for travel and stay assistance.
          </p>

          <button 
          onClick={() =>
    window.open(
      "https://maps.app.goo.gl/6dhfMfq39buhaDYM8",
      "_blank"
    )
  }
  className="mt-6 bg-pink-800 hover:bg-red-800 text-white px-6 py-3 rounded-full transition transform hover:scale-105">
            📍 GET DIRECTIONS
          </button>
        </div>

        {/* Map */}
        {/* src="https://www.google.com/maps?q=Parsurampur,Bihar,India&output=embed" */}
        <div className="rounded-3xl overflow-hidden border border-pink-800 shadow-lg fade-up">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.3621599079081!2d85.39088163051174!3d26.53872533489287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecef3369b22ee7%3A0xdf97e9ca58e907ee!2sVinod%20kumar%2C%20High%20school%20teacher!5e0!3m2!1sen!2sin!4v1777740664722!5m2!1sen!2sin"
            className="w-full h-[350px] md:h-[330px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Styles (No config needed) */}
      <style>
        {`
          .fade-up {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease;
          }

          .fade-up.show {
            opacity: 1;
            transform: translateY(0);
          }

          .petal {
            position: absolute;
            width: 12px;
            height: 12px;
            background: #b91c1c;
            border-radius: 50%;
            opacity: 0.6;
            animation: float 6s infinite ease-in-out;
          }

          .petal:nth-child(2) {
            background: #facc15;
            animation-delay: 2s;
          }

          .petal:nth-child(3) {
            animation-delay: 4s;
          }

          .petal:nth-child(4) {
            background: #facc15;
            animation-delay: 1s;
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Venue;