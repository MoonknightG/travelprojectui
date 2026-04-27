"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Compass, Sparkles, ShieldCheck, Users, Map } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black text-white py-28 overflow-hidden">

      {/* ANIMATED BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* BACK BUTTON */}
        <Link href="/" className="mb-12 inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition-all duration-300 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Experiences
        </Link>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-500 mb-4 font-bold">
                Our Legacy
              </p>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
                Crafted Journeys <br />
                <span className="text-amber-100 italic">For the Modern Explorer</span>
              </h1>
            </div>

            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              We curate premium travel experiences across India's most breathtaking 
              landscapes — where comfort, authenticity and adventure meet refined luxury. 
              Our mission is to transform the way you see the world.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/book-consultation" className="glow-sweep relative px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 active:scale-95 shadow-lg overflow-hidden block transition">
                <span className="relative z-10">Start Your Journey</span>
                <span className="glow-bar absolute inset-0 bg-white/40 pointer-events-none" />
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-amber-500/50 text-amber-400 font-semibold rounded-full hover:bg-amber-500/10 transition">
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-amber-800/30 group-hover:border-amber-700/50 transition">
              <Image
                src="/journeys/himalayan-peaks.avif"
                alt="Luxury Travel Experience"
                fill
                priority
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-amber-200 text-sm font-semibold">The Lumina Signature Experience</p>
                <p className="text-white/70 text-xs">Himalayan Peaks, Northern India</p>
              </div>
            </div>
          </div>
        </div>

        {/* CORE VALUES SECTION */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-4 font-bold">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-serif mb-4">Our Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Driven by passion, guided by expertise, committed to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Compass className="text-amber-500" size={32} />,
                title: "Curated with Purpose",
                text: "Every journey is thoughtfully designed — from hand-picked boutique stays to immersive cultural exchanges."
              },
              {
                icon: <Sparkles className="text-amber-500" size={32} />,
                title: "Luxury in Simplicity",
                text: "We believe true luxury lies in comfort, safety and seamless execution. We remove the noise."
              },
              {
                icon: <ShieldCheck className="text-amber-500" size={32} />,
                title: "Trusted by Explorers",
                text: "Thousands of discerning travelers choose us for unforgettable, expertly-led expeditions."
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-[#111827] to-[#020617] border border-amber-800/30 rounded-3xl p-10 shadow-xl hover:shadow-amber-900/40 hover:border-amber-700/50 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 group-hover:bg-amber-500/20 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* IMPACT STATS */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full"></div>
          <div className="relative">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-4 font-bold">
                By The Numbers
              </p>
              <h2 className="text-4xl font-serif">Our Impact</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Happy Travelers", value: "15,000+", icon: <Users size={24} /> },
                { label: "Curated Trips", value: "120+", icon: <Map size={24} /> },
                { label: "Years of Trust", value: "8+", icon: <ShieldCheck size={24} /> },
                { label: "Destinations", value: "40+", icon: <Compass size={24} /> },
              ].map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#0F172A]/50 to-[#020617]/50 border border-amber-800/40 rounded-3xl p-8 text-center shadow-lg hover:shadow-amber-900/30 hover:scale-105 transition duration-300 backdrop-blur-sm">
                  <div className="mx-auto mb-4 text-amber-500/60">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold text-amber-400 mb-2 font-serif">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="relative rounded-3xl p-12 md:p-16 bg-gradient-to-r from-amber-600/20 via-rose-600/10 to-amber-600/10 border border-amber-500/30 shadow-2xl overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Ready for Your <span className="text-amber-400 italic">Signature Journey?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Our travel specialists are ready to curate an unforgettable experience tailored exclusively to your tastes and curiosity.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <style>{`
                @keyframes glowSweep {
                  from { transform: translateX(-100%); }
                  to { transform: translateX(100%); }
                }
                .glow-sweep:active .glow-bar {
                  animation: glowSweep 0.5s ease-out;
                }
              `}</style>

              <Link href="/book-consultation" className="glow-sweep relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 active:scale-95 shadow-xl overflow-hidden block transition">
                <span className="relative z-10">Book a Consultation</span>
                <span className="glow-bar absolute inset-0 bg-white/40 pointer-events-none" />
              </Link>

              <Link href="/brochure" className="glow-sweep relative px-10 py-4 border-2 border-amber-500/50 text-amber-300 font-bold rounded-full hover:bg-amber-500/10 hover:border-amber-400 active:scale-95 transition overflow-hidden block">
                <span className="relative z-10">Download Brochure</span>
                <span className="glow-bar absolute inset-0 bg-white/40 pointer-events-none" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}