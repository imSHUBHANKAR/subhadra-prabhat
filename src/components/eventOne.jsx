// import React from 'react'

// const EventOne = () => {
//   return (
//     <>
//     <div>ComponentName</div>
//     </>
//   )
// }

// export default EventOne

export default function WeddingInvitationHero() {
  const stars = [...Array(80)]
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#98001d] via-[#98001d] to-[#f6e9e4] text-white">
      {/* Celebration Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#d4af37] shadow-[0_0_12px_#d4af37] animate-ping"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {stars.map((_, i) => (
          <div
            key={`trail-${i}`}
            className="absolute h-1 rounded-full bg-gradient-to-r from-[#d4af37] to-transparent opacity-70"
            style={{
              width: `${Math.random() * 120 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[650px] h-[650px] opacity-10">
          <div className="absolute inset-0 rounded-full border-4 border-[#d4af37]" />
          <div className="absolute inset-16 rounded-full border-4 border-[#d4af37]" />
          <div className="absolute inset-32 rounded-full border-4 border-[#d4af37]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-8 text-5xl md:text-8xl font-serif tracking-wide text-[#d4af37]">
          WEDDING INVITATION
        </h1>

        <h2 className="mb-4 text-3xl md:text-6xl font-medium leading-tight">
          आयुष्मति सुभद्रा कुमारी (गुड़िया)
        </h2>

        <p className="mb-6 text-4xl text-[#d4af37] font-serif">&</p>

        <h2 className="mb-10 text-3xl md:text-6xl font-medium leading-tight">
          चिरंजीवी प्रभात कुमार
        </h2>

        <h3 className="mb-6 text-5xl md:text-7xl font-serif text-[#d4af37]">
          13 May 2026
        </h3>

        <p className="mb-12 max-w-4xl text-xl md:text-3xl text-white/95">
          Together with their families, invite you to celebrate their union.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="rounded-full bg-[#d4af37] px-10 py-4 text-xl font-semibold text-[#7d0018] shadow-2xl transition hover:scale-105 hover:shadow-[#d4af37]/40">
            View Events
          </button>

          <button className="rounded-full border-2 border-[#d4af37] px-10 py-4 text-xl font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-[#7d0018]">
            RSVP Now
          </button>
        </div>
      </div>

      {/* Music Player */}
      <div className="absolute bottom-10 right-10 z-20">
        <div className="flex items-center gap-5 rounded-full border-2 border-[#d4af37] bg-[#98001d] px-6 py-5 shadow-2xl">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37] text-[#98001d] text-2xl">
            ▶
          </button>

          <button className="text-[#d4af37] text-2xl">🔊</button>

          <input
            type="range"
            className="w-28 accent-[#d4af37]"
            defaultValue="70"
          />
        </div>
      </div>
    </div>
  )
}
