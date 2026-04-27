"use client";

import { useState, useEffect } from "react";
import Image from "next/image";  
import Link from "next/link";
import {
  ArrowLeft,
  Settings,
  CreditCard,
  Heart,
  Star,
  Award,
  MapPin,
  Plane,
  Calendar,
  Mail,
  Crown,
  Sparkles,
  Users,
  TrendingUp
} from "lucide-react";

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const stats = [
    { label: "Total Trips", value: "12", icon: Plane, color: "from-blue-400 to-cyan-300" },
    { label: "Countries", value: "8", icon: MapPin, color: "from-blue-400 to-pink-300" },
    { label: "Travel Points", value: "4,250", icon: Star, color: "from-blue-400 to-orange-300" },
  ];

  const achievements = [
    { name: "Globe Trotter", icon: "🌍", unlocked: true },
    { name: "Adventure Seeker", icon: "⛰️", unlocked: true },
    { name: "Luxury Traveler", icon: "✨", unlocked: true },
    { name: "Explorer Elite", icon: "🏆", unlocked: false },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white py-19 overflow-hidden">

      {/* ANIMATED STARS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* GLOW ORBS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-600/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-1">

        {/* BACK BUTTON */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN - PROFILE CARD */}
          <div className="lg:col-span-1">
            <div className="relative group">
              {/* ANIMATED BORDER */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-3xl opacity-60 blur-sm animate-pulse group-hover:opacity-100 transition" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 transition" />

              {/* CARD */}
              <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">

                {/* PREMIUM BADGE */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-2 rounded-full shadow-lg">
                  <Crown size={16} className="text-amber-900" />
                  <span className="text-xs font-bold text-amber-900">PREMIUM</span>
                  <Sparkles size={16} className="text-amber-900" />
                </div>

                {/* AVATAR */}
                <div className="flex flex-col items-center pt-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition duration-300">
                    <div className="w-full h-full relative">  
                      <Image
                        src="/profile/avatar.webp"
                        alt="User Avatar"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                  </div>

                  {/* ONLINE STATUS */}
                  <div className="absolute top-24 right-24 w-5 h-5 bg-emerald-400 rounded-full border-4 border-slate-900 animate-pulse" />
                </div>

                {/* USER INFO */}
                <h1 className="mt-6 text-2xl font-bold text-white text-center">
                  Om Traveler
                </h1>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Award size={16} className="text-amber-400" />
                  <span className="text-amber-400 font-medium">Elite Explorer</span>
                </div>

                <div className="flex items-center justify-center gap-2 mt-3 text-slate-400">
                  <Mail size={16} />
                  <span className="text-sm text-stone-100">om@gmail.com</span>
                </div>

                {/* QUICK STATS */}
                <div className="mt-8 space-y-3 text-center border-t border-white/10 pt-6">
                  <div className="flex justify-center gap-4">
                    <div>
                      <p className="text-2xl font-bold from-blue-400 to-orange-300 ">12</p>
                      <p className="text-xs text-stone-100">Total Trips</p>
                    </div>
                    <div className="w-px bg-white/10" />
                    <div>
                      <p className="text-2xl font-bold from-blue-400 to-orange-300">8</p>
                      <p className="text-xs text-stone-100">Countries</p>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-8 space-y-3">
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg">
                    <Settings size={18} />
                    Edit Profile
                  </button>
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                    <CreditCard size={18} />
                    Manage Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* STATS GRID */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 hover:border-white/40 transition group cursor-pointer">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* TABS */}
            <div className="flex gap-2 p-1 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
              {["overview", "achievements", "preferences"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all capitalize ${activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">

              {activeTab === "overview" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="text-blue-400" size={24} />
                    Your Travel Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <StatItem label="Member Since" value="2022" />
                    <StatItem label="Total Distance" value="45,000 km" />
                    <StatItem label="Avg Rating" value="4.9/5" />
                    <StatItem label="Rewards Points" value="4,250" />
                  </div>
                </div>
              )}

              {activeTab === "achievements" && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="text-amber-400" size={24} />
                    Your Achievements
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((ach, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-xl border transition ${ach.unlocked
                            ? "bg-amber-500/20 border-amber-500/30"
                            : "bg-white/5 border-white/10 opacity-50"
                          }`}
                      >
                        <span className="text-3xl">{ach.icon}</span>
                        <h4 className="text-white font-bold mt-2">{ach.name}</h4>
                        {ach.unlocked && <span className="text-xs text-amber-300">✓ Unlocked</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "preferences" && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Heart className="text-pink-400" size={24} />
                    Travel Preferences
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Beach 🏖️", "Mountains ⛰️", "City Tours 🏙️", "Adventure 🎯", "Luxury ✨", "Cultural 🏛️"].map((pref) => (
                      <span key={pref} className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 border border-white/20 rounded-full text-sm hover:border-white/40 transition cursor-pointer">
                        {pref}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* MY BOOKINGS CTA */}
            <Link
              href="/bookings"
              className="block w-full p-6 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl hover:border-blue-400/60 transition group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition">
                    My Bookings
                  </h3>
                  <p className="text-sm text-slate-400">View and manage your upcoming trips</p>
                </div>
                <Plane size={32} className="text-blue-400 group-hover:scale-125 transition" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle var(--animation-duration, 3s) infinite;
        }
      `}</style>
    </section>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  );
}