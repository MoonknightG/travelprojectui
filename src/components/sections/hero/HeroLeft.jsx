"use client";

import { useState } from "react";
import { Search, ArrowRight, Plane, Sparkles,Users, MapPin, Clock } from "lucide-react";

export default function HeroLeft() {
  const [search, setSearch] = useState("");
  const [isFlying, setIsFlying] = useState(false);

  const handleSearch = () => {
    if (!search.trim()) return;
    console.log("Searching for:", search);
    setIsFlying(true);
    setTimeout(() => setIsFlying(false), 2000);
  };

  return (
    <div className="relative space-y-6">
      {/* ANIMATED BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/20 blur-3xl rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full" />
      </div>

      {/* FLYING PLANE ANIMATION */}
      {isFlying && (
        <>
          {/* MAIN PLANE */}
          <div className="fixed top-1/4 left-0 z-50 animate-fly pointer-events-none">
            <div className="flex items-center gap-4 text-white drop-shadow-2xl">
              <div className="relative">
                {/* PLANE GLOW */}
                <div className="absolute inset-0 bg-blue-400/50 blur-lg rounded-full animate-pulse" />
                <div className="text-6xl animate-spin-slow relative">✈️</div>
              </div>
              
              <div className="space-y-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2">
                <p className="text-sm font-bold text-blue-300 flex items-center gap-1">
                  <Sparkles size={14} /> Seeking Flights...
                </p>
                <p className="text-xs text-blue-200">{search}</p>
              </div>
            </div>
          </div>

          {/* TRAIL PARTICLES - STAR BURST */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="fixed z-40 pointer-events-none"
              style={{
                top: `${100 + i * 20}px`,
                left: `${50 + i * 10}px`,
                animation: `trail-burst 2s ease-out forwards`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <Sparkles
                size={16}
                className="text-blue-400"
                style={{ opacity: 1 - i * 0.1 }}
              />
            </div>
          ))}

          {/* GLOWING CIRCLES */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`circle-${i}`}
              className="fixed rounded-full pointer-events-none"
              style={{
                width: `${30 + i * 20}px`,
                height: `${30 + i * 20}px`,
                top: `${200 + i * 50}px`,
                left: `${100 + i * 30}px`,
                border: `2px solid rgba(96, 165, 250, ${0.6 - i * 0.15})`,
                animation: `pulse-expand 2s ease-out forwards`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </>
      )}

      {/* ANIMATED BACKGROUND */}
      <style>{`
        @keyframes fly {
          0% {
            transform: translateX(-500px) translateY(100px) scale(0.3);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(1500px) translateY(-500px) scale(1);
            opacity: 0;
          }
        }

        @keyframes trail-burst {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx, 200px), var(--ty, 300px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes pulse-expand {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          0% { transform: rotateZ(0deg) rotateX(0deg); }
          50% { transform: rotateZ(180deg) rotateX(10deg); }
          100% { transform: rotateZ(360deg) rotateX(0deg); }
        }

        .animate-fly {
          animation: fly 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 1.2s linear infinite;
        }

        /* Star burst animation for each particle */
        :nth-child(1) { --tx: 150px; --ty: 250px; }
        :nth-child(2) { --tx: 200px; --ty: 280px; }
        :nth-child(3) { --tx: 180px; --ty: 320px; }
        :nth-child(4) { --tx: 220px; --ty: 350px; }
        :nth-child(5) { --tx: 250px; --ty: 380px; }
        :nth-child(6) { --tx: 300px; --ty: 400px; }
        :nth-child(7) { --tx: 320px; --ty: 420px; }
        :nth-child(8) { --tx: 350px; --ty: 450px; }
      `}</style>

      {/* HEADING */}
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight text-white">
          Discover Trips{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            That Stay With You
          </span>
        </h1>
      </div>

      {/* SUB TEXT */}
      <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
        Handcrafted group adventures, unforgettable experiences and memories that last forever.
        Join thousands of travelers exploring the world together.
      </p>

      {/* SEARCH BOX WITH FLIGHT BUTTON */}
      <div className="mt-6 max-w-2xl space-y-4">
        <div className="relative group">
          {/* GLOW EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur opacity-0 group-focus-within:opacity-100 transition duration-300" />

          {/* INPUT CONTAINER */}
          <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 group-hover:border-blue-500/50 group-focus-within:border-blue-400/80 rounded-3xl overflow-hidden transition">
            <Search size={20} className="text-blue-400 ml-5" />
            <input
              type="text"
              placeholder="Search destinations, trips..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 px-4 py-4 bg-transparent text-white placeholder-white/50 outline-none text-sm"
            />

            {/* DUAL BUTTONS */}
            <div className="flex gap-2 mr-2">
              {/* SEARCH BUTTON */}
              <button
                onClick={handleSearch}
                className="group/btn flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-2xl font-semibold transition transform hover:scale-105 active:scale-95"
              >
                <Search size={18} />
                <span className="hidden sm:inline">Search</span>
              </button>

              {/* SEEK FLIGHT BUTTON */}
              <button
                onClick={handleSearch}
              >
                
                {/* SHINE EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/fly:translate-x-full transition duration-500" />
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH HINTS */}
        <div className="flex flex-wrap gap-2">
          {["Himalayas", "Southeast Asia", "Europe"].map((hint) => (
            <button
              key={hint}
              onClick={() => {
                setSearch(hint);
              }}
              className="px-3 py-1 text-xs bg-blue-500/20 hover:bg-blue-500/40 border border-blue-500/30 text-blue-300 rounded-full transition hover:scale-105"
            >
              {hint}
            </button>
          ))}
        </div>
      </div>

    
     {/* STATS */}
<div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
  <StatCard value="10,000+" label="Happy Travelers" icon={Users} />
  <StatCard value="50+" label="Destinations" icon={MapPin} />
  <StatCard value="9+" label="Years Experience" icon={Clock} />
</div>


      {/* CTA SECTION */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2">
          <span>Explore Now</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
        </button>
        <button className="px-6 py-3 border-2 border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-blue-200 font-bold rounded-2xl transition bg-blue-500/5 hover:bg-blue-500/10">
          Learn More
        </button>
      </div>
    </div>
  );
}

/* STAT CARD COMPONENT */
function StatCard({ value, label, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <Icon className="text-3xl text-blue-400 group-hover:scale-110 transition" />
      <div>
        <p className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
          {value}
        </p>
        <p className="text-sm text-white/70">{label}</p>
      </div>
    </div>
  );
}
