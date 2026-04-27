"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Users,
  MapPin,
  Briefcase,
  CheckCircle,
  Star,
  Building2,
  ArrowRight,
  Sparkles,
  Award,
  Globe
} from "lucide-react";

export default function WhyChooseUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-black text-white overflow-hidden py-7">

      {/* ANIMATED BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest">
              Why Choose Us
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Travel With <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto italic mb-2">
            "The journey into yourself is the greatest adventure of all."
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto">
            With over a decade of expertise, we curate unforgettable experiences that transform travelers into explorers and moments into memories.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT: IMAGE COLLAGE */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 max-w-[450px] mx-auto  md:max-w-full md:px-6 ">
              <ImageBox src="/why/1.jpg" delay="0" />
              <ImageBox src="/why/2.jpg" delay="100" />
              <ImageBox src="/why/3.jpg" delay="200" />
              <ImageBox src="/why/4.jpg" delay="300" />
              <ImageBox src="/why/5.avif" delay="400" />
              <ImageBox src="/why/6.webp" delay="500" />
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-19 -right-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 shadow-2xl border border-amber-400/50 backdrop-blur-md max-w-xs animate-bounce">
              <div className="flex items-center gap-3 mb-2">
                <Award size={24} className="text-blue-200" />
                <span className="font-bold text-lg">Award Winning</span>
              </div>
              <p className="text-sm text-blue-100">Recognized for excellence in travel experiences worldwide</p>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-8">
            
            {/* REASONS LIST */}
            <div className="space-y-4">
              <ReasonItem 
                icon={Users}
                title="Expert Travel Guides"
                desc="Certified professionals with 15+ years of experience"
              />
              <ReasonItem 
                icon={MapPin}
                title="Curated Destinations"
                desc="Handpicked locations with authentic experiences"
              />
              <ReasonItem 
                icon={CheckCircle}
                title="100% Customization"
                desc="Tailor every aspect of your journey to perfection"
              />
              <ReasonItem 
                icon={Globe}
                title="Global Network"
                desc="Partnerships with premium hotels & local experts"
              />
            </div>

            {/* CTA BUTTON */}
            <button className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-bold text-lg transition transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2">
              Explore Our Stories
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>

          </div>

        </div>

        {/* STATS SECTION */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-center mb-12">
            Trusted By <span className="text-blue-400">World Travelers</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <Stat icon={Users} value="80,000+" label="Happy Travelers" />
            <Stat icon={MapPin} value="50+" label="Destinations" />
            <Stat icon={CheckCircle} value="250+" label="Custom Tours" />
            <Stat icon={Building2} value="500+" label="Corporate Groups" />
            <Stat icon={Briefcase} value="1000+" label="Itineraries" />
            <Stat icon={Star} value="10,000+" label="5-Star Reviews" />
          </div>
        </div>

        {/* TESTIMONIAL SECTION */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard 
            quote="Absolutely life-changing experience! Every moment was perfectly planned."
            author="Sarah Johnson"
            title="CEO, Tech Company"
          />
          <TestimonialCard 
            quote="Professional, courteous, and deeply knowledgeable guides. Highly recommended!"
            author="Ahmed Hassan"
            title="Travel Blogger"
          />
          <TestimonialCard 
            quote="The best decision we made. Our family still talks about this adventure."
            author="Maria Rodriguez"
            title="Family Travel Enthusiast"
          />
        </div>

      </div>
    </section>
  );
}

/* ========== COMPONENTS ========== */

function ImageBox({ src, delay }) {
  return (
    <div 
      className="rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/60 transition shadow-lg hover:shadow-2xl hover:shadow-blue-600/30 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={src}
          alt="Travel experience"
          width={400}
          height={500}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
    </div>
  );
}

function ReasonItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-500/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-blue-600/50 group-hover:to-cyan-600/50 group-hover:border-blue-400 transition group-hover:scale-110">
        <Icon size={24} className="text-blue-300" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-white group-hover:text-blue-300 transition">{title}</h3>
        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-white/5 transition group">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/40 to-cyan-600/40 border border-blue-400/50 flex items-center justify-center group-hover:from-blue-600/60 group-hover:to-cyan-600/60 transition group-hover:scale-110">
        <Icon size={28} className="text-blue-300" />
      </div>
      <p className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition">{label}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, title }) {
  return (
    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/60 transition hover:bg-gradient-to-br hover:from-blue-600/30 hover:to-purple-600/30">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-slate-300 italic mb-6">"{quote}"</p>
      <div className="border-t border-blue-500/30 pt-4">
        <p className="font-bold text-white">{author}</p>
        <p className="text-sm text-blue-300">{title}</p>
      </div>
    </div>
  );
}