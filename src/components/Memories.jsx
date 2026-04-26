import React, { useEffect } from "react";

const Memories = () => {
  const images = [
    "https://images.unsplash.com/photo-1604147706283-0f7f3b3a8b64",
    "https://images.unsplash.com/photo-1604147495798-57beb5d6af73",
    "https://images.unsplash.com/photo-1603575448878-868a20723f5d",
    "https://images.unsplash.com/photo-1610173826608-b1f1c6e14c2f",
    "https://images.unsplash.com/photo-1583391733956-6c77aab6f7d2",
    "https://images.unsplash.com/photo-1604147495798-57beb5d6af73",
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".zoom-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f2] py-16 px-4 relative overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-12 fade-up">
        <p className="tracking-widest text-sm text-red-600">
          MEMORIES IN FRAMES
        </p>
        <h1 className="text-3xl md:text-5xl font-serif text-red-800 mt-2">
          Moments of Love
        </h1>
        <p className="text-gray-600 mt-2 italic">क्षणों की एक झलक</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`zoom-item overflow-hidden rounded-2xl shadow-lg
              ${index === 0 ? "row-span-2" : ""}
              ${index === 2 ? "row-span-2" : ""}
            `}
          >
            <img
              src={`${img}?w=600`}
              alt="wedding"
              className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Floating petals */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="petal top-10 left-10"></span>
        <span className="petal top-20 right-20"></span>
        <span className="petal bottom-20 left-1/4"></span>
        <span className="petal bottom-10 right-10"></span>
      </div>

      {/* Styles */}
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

          .zoom-item {
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.6s ease;
          }

          .zoom-item.show {
            opacity: 1;
            transform: scale(1);
          }

          .petal {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #b91c1c;
            border-radius: 50%;
            opacity: 0.5;
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
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Memories;