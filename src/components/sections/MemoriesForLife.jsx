"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { memoriesForLife } from "@/data/memoriesforlife";
import VideoThumbCard from "../cards/VideoThumbCard";
import VideoInfoCard from "../cards/VideoInfoCard";
import { Sparkles, Video, PlayCircle } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function MemoriesForLife() {
  const { topVideos, bottomVideos } = memoriesForLife;
  const [isLoaded, setIsLoaded] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      
      {/* STARRY BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600/10 blur-3xl rounded-full" />
      </div>

      {/* STARS - FIXED POSITIONS */}
      <div className="absolute inset-0 pointer-events-none">
        {isLoaded && [...Array(50)].map((_, i) => {
          const seed = i;
          const left = ((seed * 7919) % 10000) / 100;
          const top = ((seed * 6619) % 10000) / 100;
          const delay = ((seed * 5) % 30) / 10;
          const duration = 2 + ((seed * 3) % 20) / 10;
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>

      <main className="relative z-10 py-8 px-1 lg:py-8">
        <div className="max-w-7xl mx-auto">

          {/* HEADER SECTION */}
          <div className={`text-center mb-8 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              <span>Cinematic Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-slate-400">
              Memories For <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Life</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Relive your most precious moments through high-definition visual storytelling and immersive experiences.
            </p>
          </div>

          {/* TOP SLIDER - FEATURED */}
          <div className={`mb-24 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-500">
                  <PlayCircle size={24} />
                </div>
                <h2 className="text-2xl font-semibold">Featured Highlights</h2>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 to-transparent ml-8 hidden md:block"></div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay, EffectCoverflow]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.2}
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
                1280: { slidesPerView: 4 },
              }}
              className="featured-swiper !py-4 group"
            >
              {topVideos.map((video) => (
                <SwiperSlide key={video.slug}>
                  <Link href={`/videos/${video.slug}`}>
                    <div className="cursor-pointer px-1">
                      <VideoThumbCard image={video.image} />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-12 mt-4">
              <button 
                ref={prevRef}
                className="w-12 h-12 rounded-full bg-blue-600/30 hover:bg-blue-600 border border-blue-500/50 flex items-center justify-center text-white transition transform hover:scale-110"
              >
                ←
              </button>
              <button 
                ref={nextRef}
                className="w-12 h-12 rounded-full bg-blue-600/30 hover:bg-blue-600 border border-blue-500/50 flex items-center justify-center text-white transition transform hover:scale-110"
              >
                →
              </button>
            </div>
          </div>

          {/* BOTTOM GRID - CATEGORIES */}
          <div className={`transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-500">
                  <Video size={24} />
                </div>
                <h2 className="text-2xl font-semibold">Explore Experiences</h2>
              </div>
              <Link href="/all-videos" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bottomVideos.map((video) => (
                <Link key={video.slug} href={`/experiences/${video.slug}`} className="cursor-pointer group">
                  <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                    <VideoInfoCard {...video} />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle var(--animation-duration, 3s) infinite;
        }

        .featured-swiper .swiper-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .featured-swiper .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}