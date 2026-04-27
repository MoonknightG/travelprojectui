"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Award,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Trophy
} from "lucide-react";

const logos = [
  "/recognitions/startup-india.webp",
  "/recognitions/msme.webp",
  "/recognitions/tripadvisor.png",
  "/recognitions/uttarakhandd.jpg",
  "/recognitions/atoai.webp",
  "/recognitions/business-standard.png",
  "/recognitions/iibm.png",
  "/recognitions/uttarpardesh.png",
  "/recognitions/bangal.jpg",
];

export default function RecognitionsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black text-white overflow-hidden py-7">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/20 blur-3xl rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full mb-6">
            <Trophy size={16} className="text-cyan-400" />
            <p className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">
              Trusted & Certified
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Government <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Recognitions</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Proudly recognized by leading government bodies and industry organizations worldwide
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: LOGOS GRID */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {logos.map((logo, i) => (
                <LogoCard key={i} src={logo} index={i} />
              ))}
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-29 -right-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 shadow-2xl border border-amber-400/50 backdrop-blur-md max-w-xs animate-bounce">
              <div className="flex items-center gap-9">
                <CheckCircle size={24} className="text-blue-200" />
                <div>
                  <p className="font-bold text-lg">Certified</p>
                  <p className="text-sm text-amber-100">By Government Bodies</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-8 pt-8">
            
            {/* INTRO */}
            <div>
              <p className="text-sm font-semibold text-amber-300 uppercase tracking-widest mb-4">
                Why We're Trusted
              </p>
              <h3 className="text-3xl font-bold text-white mb-4">
                Recognized Excellence
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                In a short span, JustWravel has achieved significant recognition and success. As a registered MSME enterprise and a proud member of ATOAI, we've been acknowledged by multiple government and industry bodies. We are also recipients of the prestigious TripAdvisor Travelers' Choice Award, reflecting the trust and love of our global community.
              </p>
            </div>

           

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-amber-500/30">
              <StatItem value="15+" label="Years Experience" />
              <StatItem value="50K+" label="Happy Travelers" />
              <StatItem value="8" label="Government Awards" />
              <StatItem value="100%" label="Verified Reviews" />
            </div>

          </div>

        </div>

        {/* TRUST SECTION */}
        <div className="mt-20 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-3xl p-12 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrustCard 
              icon={Trophy}
              title="Award Winning"
              desc="Multiple government & industry recognitions"
            />
            <TrustCard 
              icon={Shield}
              title="Fully Certified"
              desc="MSME registered & legally compliant"
            />
            <TrustCard 
              icon={Zap}
              title="Trusted Partner"
              desc="Recommended by top travel publications"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ========== LOGO CARD ========== */
function LogoCard({ src, index }) {
  return (
    <div
      className="group bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-2xl p-6 flex items-center justify-center hover:border-amber-400/60 transition hover:bg-gradient-to-br hover:from-amber-600/30 hover:to-orange-600/30 cursor-pointer h-32 overflow-hidden"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={src}
          alt="Recognition logo"
          width={120}
          height={60}
          className="object-contain group-hover:scale-110 transition duration-300 max-w-[90%] max-h-[90%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl" />
      </div>
    </div>
  );
}

/* ========== FEATURE ITEM ========== */
function FeatureItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600/30 to-orange-600/30 border border-amber-500/50 flex items-center justify-center flex-shrink-0 group-hover:from-amber-600/50 group-hover:to-orange-600/50 group-hover:border-amber-400 transition group-hover:scale-110">
        <Icon size={24} className="text-amber-300" />
      </div>
      <div>
        <h3 className="font-bold text-white group-hover:text-amber-300 transition">{title}</h3>
        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition">{desc}</p>
      </div>
    </div>
  );
}

/* ========== STAT ITEM ========== */
function StatItem({ value, label }) {
  return (
    <div className="text-center p-4 rounded-xl hover:bg-amber-600/10 transition">
      <p className="font-bold text-2xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </div>
  );
}

/* ========== TRUST CARD ========== */
function TrustCard({ icon: Icon, title, desc }) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600/40 to-orange-600/40 border border-amber-400/50 flex items-center justify-center mx-auto mb-4 group-hover:from-amber-600/60 group-hover:to-orange-600/60 transition group-hover:scale-110">
        <Icon size={32} className="text-amber-300" />
      </div>
      <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm group-hover:text-slate-300 transition">{desc}</p>
    </div>
  );
}