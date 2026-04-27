"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle
} from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  if (!mounted) return null;

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0B0F1A] to-black overflow-hidden">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* MAIN CARD */}
        <div className="relative rounded-3xl overflow-hidden group">

          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/newsletter/bg.jpg"
              alt="Newsletter background"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center text-white">

            {/* LEFT: FORM */}
            <div className="space-y-6">
              
              {/* HEADER */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-full mb-4">
                  <Mail size={14} className="text-emerald-400" />
                  <p className="text-xs font-semibold text-emerald-300 uppercase tracking-widest">
                    Newsletter
                  </p>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                  Stay in the <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Loop</span>
                </h2>

                <p className="text-base text-white/80 leading-relaxed max-w-md">
                  Be the first to discover exclusive offers, travel tips, insider stories, and adventure updates delivered right to your inbox every month.
                </p>
              </div>

              {/* EMAIL INPUT */}
              <div className="space-y-3">
                
                {/* INPUT GROUP */}
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover/input:opacity-100 transition duration-300" />
                  <div className={`relative flex items-center bg-white/10 backdrop-blur-md border rounded-2xl overflow-hidden transition ${
                    error 
                      ? "border-red-500/50 group-hover/input:border-red-500/70" 
                      : "border-white/20 hover:border-emerald-500/50 group-hover/input:border-emerald-400/50"
                  }`}>
                    <Mail size={20} className={`ml-4 flex-shrink-0 ${error ? "text-red-400" : "text-emerald-400"}`} />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/50 outline-none text-sm"
                    />
                  </div>
                </div>

                {/* ERROR MESSAGE */}
                {error && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-xl animate-shake">
                    <span className="text-red-400 text-sm font-medium">{error}</span>
                  </div>
                )}

                {/* SUBSCRIBE BUTTON */}
                <button
                  onClick={handleSubscribe}
                  className="w-full group/btn px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
                >
                  {subscribed ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition" />
                    </>
                  )}
                </button>

              </div>

              {/* BENEFITS */}
              <div className="space-y-2 pt-4">
                <p className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                  What you'll get:
                </p>
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>Exclusive travel deals & early access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>Monthly adventure stories & tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>Special offers for subscribers</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT: NEWSLETTER BRANDING */}
            <div className="relative text-center lg:text-right">
              
              {/* DECORATIVE ELEMENT */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-600/20 blur-3xl rounded-full" />
              
              <div className="relative space-y-4">
                
                {/* TOP LABEL */}
                <div className="inline-block lg:inline-block">
                  <p className="text-xs tracking-widest uppercase text-emerald-300 font-bold mb-2">
                    ✨ Introducing
                  </p>
                </div>

                {/* MAIN TITLE */}
                <div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-2">
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      TRAVEL
                    </span>
                  </h1>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none text-white">
                    TALES
                  </h1>
                </div>

                {/* SUBTITLE */}
                <div className="space-y-1 pt-4">
                  <p className="text-sm tracking-widest uppercase font-bold text-white/90">
                    Monthly Newsletter
                  </p>
                  <p className="text-xs tracking-widest text-white/60">
                    Est. 2021 • 50K+ Subscribers
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto lg:ml-auto lg:mr-0 mt-6" />

              </div>

            </div>

          </div>

        </div>

        {/* TRUST SECTION */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Join thousands of travelers who already subscribe
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-400">50K+</p>
              <p className="text-xs text-slate-500">Active Subscribers</p>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-400">100%</p>
              <p className="text-xs text-slate-500">Spam-Free</p>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-400">Weekly</p>
              <p className="text-xs text-slate-500">Updates</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}